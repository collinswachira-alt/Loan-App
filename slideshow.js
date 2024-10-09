// Function to generate random Loan ID
function generateLoanID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let loanID = '';
    for (let i = 0; i < 10; i++) {
        loanID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return loanID;
}

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Loan eligibility check function
document.getElementById('loanForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const idNumber = document.getElementById('idNumber').value;
    
    // Simulate loading for 7 seconds
    setTimeout(() => {
        const loanID = generateLoanID();
        const eligibleAmount = Math.floor(Math.random() * (45000 - 17000 + 1)) + 17000;
        alert(`Loan ID: ${loanID}\nEligible Amount: KSH ${eligibleAmount}\nProcessing Fee: KSH 243`);
        window.location.href = 'loanRequest.html'; // Redirect after showing eligibility
    }, 7000);
});

// Review form submission (optional: handle submission)
document.getElementById('reviewForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your review!");
    document.getElementById('reviewForm').reset(); // Reset the form
});
