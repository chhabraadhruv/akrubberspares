
// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }
});

// Product carousel
const carousel = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;
const slideWidth = 300 + 32; // Image width + margin
const totalSlides = carousel.children.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
  updateCarousel();
});

// Scroll animations
const scrollElements = document.querySelectorAll('[data-scroll]');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      el.classList.add('in-view');
    }
  });
};

// Add data-scroll attribute to elements
document.querySelectorAll('section').forEach(section => {
  section.setAttribute('data-scroll', '');
});

// Initialize scroll animation
window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu if open
    mobileMenu.classList.remove('active');
  });
});
