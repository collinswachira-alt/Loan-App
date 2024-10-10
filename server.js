const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const consumer_key = 'YOUR_CONSUMER_KEY';
const consumer_secret = 'YOUR_CONSUMER_SECRET';
const shortCode = 'YOUR_SHORTCODE'; // Lipa Na M-Pesa Shortcode
const passkey = 'YOUR_PASSKEY';
const callback_url = 'https://yourdomain.com/callback'; // Replace with your callback URL

// Get Access Token
app.get('/access_token', (req, res) => {
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth = 'Basic ' + Buffer.from(consumer_key + ':' + consumer_secret).toString('base64');
    
    request({
        url: url,
        headers: {
            'Authorization': auth
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500).send({ message: error });
        } else {
            res.status(200).send(body);
        }
    });
});

// Initiate STK Push
app.post('/stkpush', (req, res) => {
    const access_token = req.headers.authorization; // Pass Access Token in Headers
    const phoneNumber = req.body.phoneNumber; // User's phone number from the frontend
    const amount = req.body.amount; // Amount to charge

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, -3);
    const password = Buffer.from(shortCode + passkey + timestamp).toString('base64');

    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    const options = {
        url: url,
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + access_token
        },
        json: {
            "BusinessShortCode": shortCode,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": phoneNumber,
            "PartyB": shortCode,
            "PhoneNumber": phoneNumber,
            "CallBackURL": callback_url,
            "AccountReference": "Loan Processing Fee",
            "TransactionDesc": "Processing fee for loan"
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            res.status(500).send({ message: 'Error processing payment' });
        } else {
            res.status(200).send(body);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
