

//testimony button pop up
// Get all necessary elements for the testimony form modal
const testimonyModal = document.getElementById('testimony-modal');
const testimonyTrigger = document.getElementById('share-testimony-trigger');
const testimonyCloseBtn = document.querySelector('#testimony-modal .testimony-close-btn');
const testimonyForm = document.getElementById('testimony-form-js');

// Function to open the modal
if (testimonyTrigger) {
    testimonyTrigger.addEventListener('click', (event) => {
        event.preventDefault(); // Stop the link from navigating
        testimonyModal.style.display = 'block';
    });
}

// Function to close the modal using the 'x' button
if (testimonyCloseBtn) {
    testimonyCloseBtn.addEventListener('click', () => {
        testimonyModal.style.display = 'none';
        testimonyForm.reset(); // Optionally clear the form on close
    });
}

// Function to close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === testimonyModal) {
        testimonyModal.style.display = 'none';
        testimonyForm.reset(); 
    }
});

// Form Submission Handler
if (testimonyForm) {
    testimonyForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop default form submission/page reload
        
        // 1. Simulate data handling (In a real application, you would send this via AJAX/Fetch)
        console.log('Testimony Data Sent:', new FormData(testimonyForm));

        // 2. Hide the modal
        testimonyModal.style.display = 'none';

        // 3. Clear the form
        testimonyForm.reset();

        // 4. Show the "Sent" alert
        alert('Testimony Sent! Thank you for sharing your story.'); 
        
        // Note: For better UX, you could replace the browser alert() with a custom success modal.
    });
}








