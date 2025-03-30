
// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Add animation class when menu is toggled
    mobileMenu.classList.toggle('animate-slide-in');
  });

  // Navbar scroll effect with enhanced smoothness
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Enhanced scroll effect with more granular transparency
    if (currentScrollY > 10) {
      const opacity = Math.min(0.95, 0.8 + (currentScrollY / 1000));
      navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      navbar.style.boxShadow = 'none';
    }
    
    // Hide/show navbar based on scroll direction (Apple-like behavior)
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
      }
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on page load

  // Product carousel with improved interaction
  const carousel = document.querySelector('.carousel-inner');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const items = carousel.children;
  let currentSlide = 0;
  const slideWidth = 300 + 32; // Image width + margin
  const totalSlides = items.length;
  
  // Show/hide navigation buttons based on position
  function updateNavButtons() {
    prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
    prevBtn.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    nextBtn.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'auto';
  }

  function updateCarousel() {
    const offset = -currentSlide * slideWidth;
    // Add smooth animation with spring effect
    carousel.style.transform = `translateX(${offset}px)`;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    updateNavButtons();
    
    // Highlight current slide
    Array.from(items).forEach((item, index) => {
      if (index === currentSlide) {
        item.style.opacity = '1';
        item.style.transform = 'scale(1.05)';
      } else {
        item.style.opacity = '0.7';
        item.style.transform = 'scale(1)';
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
    updateCarousel();
  });
  
  // Initialize carousel
  updateCarousel();
  
  // Touch swipe support for carousel
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
      }
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    }
  }

  // Enhanced scroll animations with intersection observer
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add animations with varying delays for cascade effect
      if (entry.isIntersecting) {
        const delay = Array.from(scrollElements).indexOf(entry.target) % 5 * 0.1;
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('in-view');
        // Once element is animated, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px' // Trigger slightly before element comes into view
  });
  
  // Observe all elements with data-scroll attribute
  scrollElements.forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll for navigation links with enhanced easing
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        // Get the navbar height to offset scrolling position
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        // Smooth scroll with custom animation
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        
        // Update URL without page reload (for better UX)
        history.pushState(null, '', targetId);
      }
    });
  });
  
  // Parallax effect for hero section (Apple-inspired)
  const hero = document.querySelector('.hero');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (hero && scrolled < window.innerHeight) {
      const heroContent = hero.querySelector('.container');
      // Subtle parallax effect
      heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
      heroContent.style.opacity = 1 - (scrolled * 1.5 / window.innerHeight);
    }
  });
  
  // Hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('.contact-card, .download-btn, .nav-links a');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  });
});
