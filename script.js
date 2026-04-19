// ============================================================
//  MASTHAN MOHAMMED — PORTFOLIO JAVASCRIPT
// ============================================================

/* --- MOBILE NAV TOGGLE --- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* --- SCROLL-REVEAL --- */
const revealEls = document.querySelectorAll(
  'section, .project-card, .stat-card, .skill-pill, .award-card, .book-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // Stagger child cards nicely
        setTimeout(() => {
          e.target.classList.add('visible');
        }, 60 * i);
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08 }
);

revealEls.forEach(el => observer.observe(el));


/* --- ACTIVE NAV LINK ON SCROLL --- */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });

  // Navbar background
  document.getElementById('navbar').style.background =
    window.scrollY > 60 ? 'rgba(8,8,16,0.97)' : 'rgba(8,8,16,0.8)';
});


/* --- CONTACT FORM (Formspree) --- */
const contactForm  = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm?.addEventListener('submit', async e => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  btn.disabled    = true;
  btn.textContent = 'Sending…';

  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      formFeedback.textContent = '✅ Message sent! I\'ll get back to you soon.';
      formFeedback.className   = 'form-feedback success';
      contactForm.reset();
    } else {
      throw new Error();
    }
  } catch {
    formFeedback.textContent = '❌ Something went wrong. Please email me directly.';
    formFeedback.className   = 'form-feedback error';
  }

  btn.disabled    = false;
  btn.textContent = 'Send Message ✉';
});
