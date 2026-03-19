document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');
  const reveals = document.querySelectorAll('.reveal');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveNav();
    revealOnScroll();
  });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.style.transitionDelay = `${(i % 3) * 0.1}s`;
        el.classList.add('visible');
      }
    });
  }

  revealOnScroll();
});
