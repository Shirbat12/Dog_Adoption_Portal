/* Wait for DOM to load */
/* - Use DOMContentLoaded event */

/* Retrieve dog data */
/* - From localStorage: JSON.parse(localStorage.getItem('selectedDog')) */
/* - OR from URL parameters */
/* - OR from sessionStorage */

/* Check if dog data exists */
/* - Handle case where no data is found */

/* Display dog information */
/* - Set dog name in #dog-name */
/* - Set dog image in #dog-image */
/* - Show image (remove display: none) */

/* Optional: Add event listeners */
/* - Back button functionality */
/* - Other interactions */
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve dog data from localStorage
    const dogData = JSON.parse(localStorage.getItem('selectedDog'));
    
    // --- START: Added Fireworks Effect ---
    // This calls the confetti function from the library we added
    confetti({
        particleCount: 150, // Number of confetti pieces
        spread: 100,       // How wide they spread
        origin: { y: 0.6 } // Where they start on the screen (0.6 is slightly below top)
    });
    // --- END: Added Fireworks Effect ---

    // The rest of your existing code...
    const urlParams = new URLSearchParams(window.location.search);
    const dogId = urlParams.get('id');

    // Check if dog data exists
    if (dogData) {
        // Display dog name
        document.getElementById('dog-name').textContent = dogData.name;
        
        // Display dog image
        const dogImage = document.getElementById('dog-image');
        dogImage.src = dogData.first_image_url;
        dogImage.style.display = 'block';
    } else {
        // Handle case where no dog data is found
        document.getElementById('dog-name').textContent = 'No dog selected';
        console.log('No dog data found in localStorage');
    }
});