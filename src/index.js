window.addEventListener('DOMContentLoaded', async () => {
    const dogs = await getAllDogs();
    
    const cards = document.querySelectorAll('.dog-card');

    dogs.forEach((dog, index) => {
        if (cards[index]) {
            cards[index].querySelector('img').src = dog.first_image_url;
            
            cards[index].querySelector('h2').textContent = dog.name;
            
            const link = cards[index].querySelector('.btn');
            link.href = `dog.html?id=${index}`;
        }
    });
});