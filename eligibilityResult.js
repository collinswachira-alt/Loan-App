document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user details and eligible amount from local storage
    const userName = localStorage.getItem('userName');
    const userPhone = localStorage.getItem('userPhone');
    const userId = localStorage.getItem('userId');
    const loanAmount = localStorage.getItem('loanAmount');
    const eligibleAmount = localStorage.getItem('eligibleAmount');
    const loanID = localStorage.getItem('loanID');

    // Display user details on the page
    document.getElementById('userName').textContent = userName;
    document.getElementById('userPhone').textContent = userPhone;
    document.getElementById('userId').textContent = userId;
    document.getElementById('loanAmount').textContent = `KSH ${loanAmount}`;
    document.getElementById('eligibleAmount').textContent = `KSH ${eligibleAmount}`;
    document.getElementById('loanID').textContent = loanID;

    // Clear local storage after displaying
    localStorage.clear();
});
