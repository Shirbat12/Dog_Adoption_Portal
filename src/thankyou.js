/* thankyou.js */

document.addEventListener('DOMContentLoaded', async function() {
    const id = getDogIdFromURL();
    const dog = await fetchDogById(id);

    spawnCelebrationConfetti();

    if (dog) {
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('dog-image').src = dog.first_image_url;
        document.getElementById('adoption-message').textContent = 'Thank you for your enquiry!';
        document.body.style.backgroundImage = `url("${dog.first_image_url}")`;
    } else {
        document.getElementById('dog-name').textContent = 'No dog selected';
    }
});

function spawnCelebrationConfetti() {
    const shapes = ['🎉', '🐾', '🎊'];

    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];

        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.top = '-40px';

        const drift = (Math.random() - 0.5) * 200;
        const rotation = 360 + Math.random() * 360;
        piece.style.setProperty('--x-drift', `${drift}px`);
        piece.style.setProperty('--rotation', `${rotation}deg`);
        piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
        piece.style.animationDelay = `${Math.random() * 0.6}s`;

        document.body.appendChild(piece);
        piece.addEventListener('animationend', () => piece.remove());
    }
}
