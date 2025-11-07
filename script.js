// script.js

// Animated Title Effect
const title = document.getElementById('animated-title');
const phrases = [
    'AWS Engineer',
    'DevOps Engineer',
    'Cloud Enthusiast'
];
let i = 0;

function changeTitle() {
    title.textContent = phrases[i];
    i = (i + 1) % phrases.length;
}
setInterval(changeTitle, 2500); // Change title every 2.5 seconds

// Scroll Reveal for sections
const sections = document.querySelectorAll('section');

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(30px)';
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
