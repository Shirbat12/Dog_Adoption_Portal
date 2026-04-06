/* adopt.js */

document.addEventListener('DOMContentLoaded', async function() {
    // 1. Get the dog's index from the URL query parameter 'id' [cite: 62, 84]
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id === null) {
        window.location.href = 'index.html';
        return;
    }

    try {
        // 2. Load dog's info using the REST API (Postman Mock Server) [cite: 63, 100]
        // Assuming fetchDogById is defined in script.js as per requirements 
        const dog = await fetchDogById(id); 

        // 3. Display dog's name in heading and above the form [cite: 61, 63]
        document.getElementById('adopt-heading').textContent = `Adopt ${dog.name}`;
        document.getElementById('dog-summary-name').textContent = dog.name;
        
        // 4. Display dog's image above the form [cite: 63]
        const dogImg = document.getElementById('dog-summary-image');
        dogImg.src = dog.first_image_url;
        dogImg.alt = dog.name;

    } catch (error) {
        console.error("Error loading dog data:", error);
    }

    // 5. Handle form submission [cite: 71]
    const adoptForm = document.getElementById('adopt-form');
    adoptForm.addEventListener('submit', function(e) {
        // Prevent default form behavior (page reload) [cite: 71]
        e.preventDefault();

        // Navigate to thankyou.html with the same dog ID [cite: 72]
        window.location.href = `thankyou.html?id=${id}`;
    });
});