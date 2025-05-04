// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
navToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navUl.classList.toggle('show');
  }
});

// Smooth scroll active link highlight
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.pageYOffset + 62;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('#skills .skill-bar span');
let skillsSection = document.getElementById('skills');
let skillsAnimated = false;

function animateSkills() {
  if (window.pageYOffset + window.innerHeight >= skillsSection.offsetTop + 100 && !skillsAnimated) {
    skillBars.forEach(bar => {
      bar.style.width = bar.style.width;
    });
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);


// Contact form submission handler (front-end only simulation)
const contactForm = document.getElementById('contactForm');
const contactInfo = document.querySelector('.contact-info');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simulate sending message
  contactInfo.textContent = 'Sending message...';
  setTimeout(() => {
    contactInfo.textContent = 'Thank you for reaching out, I will get back to you soon!';
    contactForm.reset();
  }, 1200);
});