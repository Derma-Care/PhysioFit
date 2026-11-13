// Main JavaScript for Dr. PhysioFit Wellness Website

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // Appointment Form Submission Handler
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = appointmentForm.querySelector('[name="name"]').value;
      const phone = appointmentForm.querySelector('[name="phone"]').value;
      const service = appointmentForm.querySelector('[name="service"]').value;
      const date = appointmentForm.querySelector('[name="date"]').value;

      // WhatsApp booking redirection to +91 99521 42166
      const message = `Hello Dr. PhysioFit Wellness, I would like to book an appointment for ${service} on ${date}. Name: ${name}, Phone: ${phone}.`;
      const encodedMsg = encodeURIComponent(message);
      
      const proceed = confirm(`Thank you ${name}! Would you like to confirm this appointment via WhatsApp directly with Dr. PhysioFit?`);
      if (proceed) {
        window.open(`https://wa.me/919952142166?text=${encodedMsg}`, '_blank');
      } else {
        alert('Thank you! Your appointment request has been recorded. Our team will contact you at ' + phone + ' shortly.');
      }
      appointmentForm.reset();
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#contact_name') ? contactForm.querySelector('#contact_name').value : '';
      const phone = contactForm.querySelector('#contact_phone') ? contactForm.querySelector('#contact_phone').value : '';
      const serviceEl = contactForm.querySelector('#contact_service');
      const service = serviceEl ? serviceEl.value : 'General Inquiry';
      const msg = contactForm.querySelector('#contact_msg') ? contactForm.querySelector('#contact_msg').value : '';

      const fullMessage = `Hello Dr. PhysioFit Wellness, Inquiry from Website:\nName: ${name}\nPhone: ${phone}\nConcern: ${service}\nMessage: ${msg}`;
      const encodedMsg = encodeURIComponent(fullMessage);

      const proceed = confirm(`Thank you ${name}! Would you like to send this inquiry directly to Dr. PhysioFit via WhatsApp?`);
      if (proceed) {
        window.open(`https://wa.me/919952142166?text=${encodedMsg}`, '_blank');
      } else {
        alert('Thank you! Your inquiry has been recorded. Our team will contact you shortly.');
      }
      contactForm.reset();
    });
  }

  // Active Category Highlight on Scroll for Services Page
  const filterPills = document.querySelectorAll('.services-filter-pill');
  const serviceRows = document.querySelectorAll('.service-feature-row');

  if (filterPills.length > 0 && serviceRows.length > 0) {
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 180;

      serviceRows.forEach(row => {
        const top = row.offsetTop;
        const height = row.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = row.getAttribute('id');
        }
      });

      if (currentSectionId) {
        filterPills.forEach(pill => {
          if (pill.getAttribute('href') === `#${currentSectionId}`) {
            pill.classList.add('active');
          } else {
            pill.classList.remove('active');
          }
        });
      }
    });
  }
});
