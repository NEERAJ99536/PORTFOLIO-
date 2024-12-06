// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Typed.js
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Profile Image Upload Handler
const profileUpload = document.getElementById('profile-upload');
const profilePreview = document.getElementById('profile-preview');

if (profileUpload && profilePreview) {
    profileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePreview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
}

// Project Image Upload Handlers
document.querySelectorAll('.project-upload').forEach((upload, index) => {
    upload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const previews = document.querySelectorAll('.project-preview');
                previews[index].src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const nav = document.querySelector('nav');
    
    if (scrollProgress > 0.1) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Skills Animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});