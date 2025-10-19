// script.js
// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Editor functions
function formatText(command) {
    document.execCommand(command, false, null);
}

function insertImage() {
    const url = prompt('Enter image URL:');
    if (url) {
        document.execCommand('insertImage', false, url);
    }
}

function exportDoc() {
    const content = document.getElementById('editorContent').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ebook.html';
    a.click();
    URL.revokeObjectURL(url);
}

// Form submission (demo)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    e.target.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});
