document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    const newReview = document.createElement('article');
    newReview.classList.add('review');

    newReview.innerHTML = `
        <h2>${name}</h2>
        <p>"${review}"</p>
        <div class="stars">${'⭐'.repeat(rating)}</div>
    `;

    document.querySelector('.reviews').appendChild(newReview);

    document.getElementById('reviewForm').reset();
});
