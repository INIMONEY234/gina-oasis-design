//Logic to run testimony slide
const track = document.getElementById('track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
let slideInterval;

// 1. Create dots dynamically
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateUI();
        restartAutoSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateUI() {
    // 1. Move the track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // 2. Update Dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');

    // 3. Update Slide Animation (The new part)
    slides.forEach(slide => slide.classList.remove('active-slide'));
    slides[currentIndex].classList.add('active-slide');
}

// Ensure the first slide is active on page load
slides[0].classList.add('active-slide');

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateUI();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateUI();
}

// Controls
nextBtn.addEventListener('click', () => { showNextSlide(); restartAutoSlide(); });
prevBtn.addEventListener('click', () => { showPrevSlide(); restartAutoSlide(); });

// Timer Logic
function startAutoSlide() { slideInterval = setInterval(showNextSlide, 9000); }
function restartAutoSlide() { clearInterval(slideInterval); startAutoSlide(); }

track.addEventListener('mouseenter', () => clearInterval(slideInterval));
track.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();





//testimony button pop up 

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Elements
    const testimonyModal = document.getElementById('testimony-modal');
    const openModalBtn = document.getElementById('openTestimonyModal');
    const closeBtn = document.querySelector('.testimony-close-btn');
    const testimonyForm = document.getElementById('testimony-form-js');
    const successMessage = document.getElementById('testimony-success');

    // 2. Open Modal
    if (openModalBtn && testimonyModal) {
        openModalBtn.addEventListener('click', () => {
            testimonyModal.style.display = 'flex';
        });
    }

    // 3. Close Modal (Function)
    function closeModal() {
        testimonyModal.style.display = 'none';
        // Reset form for next use
        setTimeout(() => {
            if (testimonyForm) testimonyForm.style.display = 'block';
            if (successMessage) successMessage.style.display = 'none';
        }, 500);
    }

    // 4. Attach Close Events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target === testimonyModal) {
            closeModal();
        }
    });

    // 5. Form Logic
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            testimonyForm.style.display = 'none';
            successMessage.style.display = 'block';
            testimonyForm.reset();
        });
    }
});









document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('testimony-modal');
    const formWrapper = document.getElementById('form-wrapper');
    const successBox = document.getElementById('testimony-success');
    const testimonyForm = document.getElementById('testimony-form-js');

    // Handle Form Submission
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Hide the form area, show the success area
            formWrapper.style.display = 'none';
            successBox.style.display = 'block';
            
            testimonyForm.reset();
        });
    }
});

// Move this outside the DOMContentLoaded so the 'onclick' in HTML can find it
function closeModal() {
    const modal = document.getElementById('testimony-modal');
    const formWrapper = document.getElementById('form-wrapper');
    const successBox = document.getElementById('testimony-success');
    
    modal.style.display = 'none';
    
    // Reset the modal content back to the form for next time
    setTimeout(() => {
        formWrapper.style.display = 'block';
        successBox.style.display = 'none';
    }, 400);
}