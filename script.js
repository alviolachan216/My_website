// Smooth scrolling for anchor links with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight - 20; // Extra 20px padding
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = this.querySelector('input[name="name"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const message = this.querySelector('textarea[name="message"]').value;
  
  // Simple validation
  if (name && email && message) {
    // You can integrate with a service like Formspree, EmailJS, or your own backend
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillProgress = entry.target.querySelector('.skill-progress');
      if (skillProgress) {
        const width = skillProgress.style.width || getComputedStyle(skillProgress).width;
        skillProgress.style.width = '0%';
        setTimeout(() => {
          skillProgress.style.width = width;
        }, 100);
      }
    }
  });
}, observerOptions);

// Observe all skill cards
document.querySelectorAll('.skill').forEach(skill => {
  observer.observe(skill);
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.backgroundColor = '#333';
    navbar.style.backdropFilter = 'none';
  }
});

