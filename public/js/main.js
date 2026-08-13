/**
 * PAK DEBATE FORUM — ACADEMY
 * Main JavaScript  |  PASS 1 — Foundation
 * Nav scroll · Mobile menu · Scroll reveals · Parallax
 */

'use strict';

/* ════ NAV: SCROLL BEHAVIOR ═══════════════════════════════ */

const nav = document.getElementById('nav');

const handleNavScroll = () => {
  if (window.scrollY > 40) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll(); // run on init


/* ════ NAV: ACTIVE LINK ═══════════════════════════════════ */

const navLinks = document.querySelectorAll('.nav__link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '/' && href === '/')) {
    link.classList.add('is-active');
  }
});


/* ════ MOBILE MENU ════════════════════════════════════════ */

const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('nav-drawer');
const body      = document.body;

if (hamburger && drawer) {
  const openMenu = () => {
    hamburger.classList.add('is-open');
    drawer.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger.classList.remove('is-open');
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  };

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close on drawer link click
  drawer.querySelectorAll('.nav__drawer-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (
      drawer.classList.contains('is-open') &&
      !drawer.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });
}


/* ════ SCROLL REVEAL ══════════════════════════════════════ */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  }
);

// Observe all [data-reveal] elements
document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

// Observe all [data-reveal-stagger] containers
document.querySelectorAll('[data-reveal-stagger]').forEach(el => {
  revealObserver.observe(el);
});

// Observe reveal lines
document.querySelectorAll('.reveal-line').forEach(el => {
  revealObserver.observe(el);
});


/* ════ HERO PARALLAX ══════════════════════════════════════ */

const heroImg = document.querySelector('.hero__img');

if (heroImg) {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;

      if (scrollY < heroHeight) {
        const offset = scrollY * 0.28;
        heroImg.style.transform = `scale(1.06) translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
  }
}


/* ════ SMOOTH SCROLL (anchor links) ══════════════════════ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const navH = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')
      ) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ════ STAT COUNTER (optional, used in PASS 3) ════════════ */

/**
 * Animates a number from 0 to its target value.
 * Usage: <span data-count="500" data-suffix="+">0</span>
 */
const animateCounter = (el) => {
  const target   = parseInt(el.dataset.count, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1800;
  const step     = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, step);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});
