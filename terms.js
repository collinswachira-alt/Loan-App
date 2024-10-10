document.addEventListener('DOMContentLoaded', function() {
    const popupWrapper = document.getElementById('popupWrapper');
    const closePopupBtn = document.getElementById('closePopup');

    // Show the popup automatically after 2 seconds (optional)
    setTimeout(() => {
        popupWrapper.classList.add('show');
    }, 2000);

    // Redirect the user to loanRequest.html when they click "I Agree"
    closePopupBtn.addEventListener('click', function() {
        window.location.href = "loanRequest.html";
    });
});
