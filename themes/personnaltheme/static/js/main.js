// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getComputedStyle(entry.target).animation;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.slide-in, .slide-in-right, .bounce-in').forEach(el => {
    observer.observe(el);
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrollY = window.scrollY;
        heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

console.log('Hugo portfolio loaded with animations!');
