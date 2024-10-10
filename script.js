// Function to generate random Loan ID
function generateLoanID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let loanID = '';
    for (let i = 0; i < 10; i++) {
        loanID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return loanID;
}

// Loan eligibility check function
document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user inputs
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const idNumber = document.getElementById('idNumber').value;
    const loanAmount = document.getElementById('loanAmount').value;

    // Show loader
    document.getElementById('loader').style.display = 'block';

    // Simulate loading for 7 seconds
    setTimeout(() => {
        // Hide loader
        document.getElementById('loader').style.display = 'none';

        // Generate random Loan ID and eligible amount
        const loanID = generateLoanID();
        const eligibleAmount = Math.floor(Math.random() * (45000 - 17000 + 1)) + 17000;

        // Store user details and eligible amount in local storage
        localStorage.setItem('userName', name);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userId', idNumber);
        localStorage.setItem('loanAmount', loanAmount);
        localStorage.setItem('loanID', loanID);
        localStorage.setItem('eligibleAmount', eligibleAmount);

        // Redirect to eligibility result page
        window.location.href = 'eligibilityResult.html';
    }, 7000);
});
// Hamburger menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

