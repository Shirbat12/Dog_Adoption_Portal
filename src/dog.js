window.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')); 

    const dogs = await fetchAllDogs();
    const dog = dogs[id]; 

    if (dog) {
        document.getElementById('dog-name-header').textContent = dog.name;
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('dog-image').src = dog.first_image_url;
        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-sex').textContent = dog.sex;
        document.getElementById('dog-house-trained').textContent = dog.house_trained ? "Yes" : "No";
        document.getElementById('dog-vaccinated').textContent =
            dog.vaccinated === null ? "Unknown" : (dog.vaccinated ? "Yes" : "No");
        document.getElementById('dog-story').textContent = dog.story;

        document.getElementById('adopt-link').href = `adopt.html?id=${id}`;

        document.getElementById('dog-counter').textContent = `${id + 1}/${dogs.length}`;

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (id === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.onclick = () => window.location.href = `dog.html?id=${id - 1}`;
        }

        if (id === dogs.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.onclick = () => window.location.href = `dog.html?id=${id + 1}`;
        }

        const adoptLink = document.getElementById('adopt-link');
        adoptLink.addEventListener('mouseenter', () => spawnBoneConfetti(adoptLink));
    }
});

function spawnBoneConfetti(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 18; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.textContent = '🐾';

        piece.style.left = `${centerX}px`;
        piece.style.top = `${centerY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 120;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const rotation = 360 + Math.random() * 360;

        piece.style.setProperty('--x-drift', `${dx}px`);
        piece.style.setProperty('--y-drift', `${dy}px`);
        piece.style.setProperty('--rotation', `${rotation}deg`);
        piece.style.animationDuration = `${1.8 + Math.random() * 0.8}s`;

        document.body.appendChild(piece);
        piece.addEventListener('animationend', () => piece.remove());
    }
}