function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    const heartsContainer = document.querySelector('.hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
}