window.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')); 

    const dogs = await getAllDogs();
    const dog = dogs[id]; 

    if (dog) {
        document.getElementById('dog-name-header').textContent = dog.name;
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('dog-image').src = dog.first_image_url;
        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-sex').textContent = dog.sex;
        document.getElementById('dog-house-trained').textContent = dog.houseTrained ? "Yes" : "No";
        document.getElementById('dog-vaccinated').textContent = dog.vaccinated ? "Yes" : "No";
        document.getElementById('dog-story').textContent = dog.story;

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (id === 0) prevBtn.disabled = true;
        if (id === dogs.length - 1) nextBtn.disabled = true;

        prevBtn.onclick = () => window.location.href = `dog.html?id=${id - 1}`;
        nextBtn.onclick = () => window.location.href = `dog.html?id=${id + 1}`;
    }
});