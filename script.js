/* ============================================================
   PROFILEPRO — script.js
   Handles: parallax, scroll reveals, mobile nav, contact form
   ============================================================ */

// ── Mobile Nav ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Parallax ──────────────────────────────────────────────────
const parallaxBlocks = document.querySelectorAll('.parallax-block');

function updateParallax() {
  parallaxBlocks.forEach(block => {
    const img = block.querySelector('.parallax-img');
    if (!img) return;
    const speed = parseFloat(img.dataset.speed || '0.15');
    const rect = block.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress: 0 when block enters bottom, 1 when block leaves top
    const progress = 1 - (rect.bottom / (vh + rect.height));
    const offset = progress * speed * 100;
    img.style.transform = `translateY(${offset}%)`;
  });
}

// ── Scroll Reveal ─────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

reveals.forEach(el => revealObserver.observe(el));

// ── Hero opacity on scroll ────────────────────────────────────
const heroGrid = document.getElementById('hero-grid');

function updateHeroFade() {
  if (!heroGrid) return;
  const scrolled = window.scrollY;
  const vh = window.innerHeight;
  // Only start fading after 40% of viewport scrolled, finish at 130% — much more gradual
  const fadeStart = vh * 0.8;
  const fadeEnd = vh * 1.8;
  const progress = Math.max(0, Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart)));
  const opacity = 1 - progress;
  const translateY = progress * 8; // subtle (was 20 — too aggressive)
  heroGrid.style.opacity = opacity;
  heroGrid.style.transform = `translateY(${translateY}%)`;
}

// ── Active nav link on scroll ─────────────────────────────────
function updateActiveNav() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience'];
  const links = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) {
      current = id;
    }
  });

  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes('#' + current) || (current === 'home' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ── Scroll handler ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  updateParallax();
  updateHeroFade();
  updateActiveNav();
}, { passive: true });

// Initial call
updateParallax();
updateHeroFade();

// ── Contact Form (EmailJS — sends real emails) ────────────────
// SETUP STEPS (free — 200 emails/month):
// 1. Go to https://www.emailjs.com → create a free account
// 2. Add an Email Service (connect your Gmail) → copy SERVICE_ID
// 3. Create an Email Template → copy TEMPLATE_ID
//    Use these variables in your template:
//      {{from_name}}  {{from_email}}  {{subject}}  {{message}}
// 4. Account page → copy your PUBLIC_KEY
// 5. Paste the three values below

const EMAILJS_SERVICE_ID = 'service_zlu75zd';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ghwoxql';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = '96lAnp4VSOuhtJ4FP';   // e.g. 'aBcDeFgHiJkLmNoP'

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  const successMsg = document.getElementById('form-success');

  // Load EmailJS SDK
  const ejsScript = document.createElement('script');
  ejsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  ejsScript.onload = () => emailjs.init(EMAILJS_PUBLIC_KEY);
  document.head.appendChild(ejsScript);

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    // Warn if not configured yet
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      alert('EmailJS not set up yet.\nOpen script.js and replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY.\nSee the setup instructions in the comments above.');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fa-solid fa-spinner fa-spin';

    const templateParams = {
      from_name: document.getElementById('name').value.trim(),
      from_email: document.getElementById('email').value.trim(),
      subject: document.getElementById('subject').value.trim(),
      message: document.getElementById('message').value.trim(),
      reply_to: document.getElementById('email').value.trim(),
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      // Success state
      btnText.textContent = 'Message Sent!';
      btnIcon.className = 'fa-solid fa-circle-check';
      successMsg.classList.remove('hidden');
      contactForm.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fa-solid fa-paper-plane';
        successMsg.classList.add('hidden');
      }, 6000);

    } catch (err) {
      console.error('EmailJS error:', err);
      btnText.textContent = 'Failed — Try Again';
      btnIcon.className = 'fa-solid fa-triangle-exclamation';
      submitBtn.disabled = false;
      setTimeout(() => {
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fa-solid fa-paper-plane';
      }, 4000);
    }
  });
}
