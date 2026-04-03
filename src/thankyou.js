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