/**
 * PAK DEBATE FORUM — Main JavaScript
 * Source of truth: #35 §141–152, #42 §22
 * ────────────────────────────────────────────────────────────
 * Scroll reveals · Parallax · Stat counters · Smooth anchors
 * All motion respects prefers-reduced-motion via CSS.
 */

'use strict';

/* ═══ SCROLL REVEAL ══════════════════════════════════════════ */
/* #35 §142: Intersection-triggered reveal                     */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: '0px 0px 0px 0px',
  }
);

function initReveals(container = document) {
  const allReveal = [
    ...container.querySelectorAll('[data-reveal]'),
    ...container.querySelectorAll('[data-reveal-stagger]'),
    ...container.querySelectorAll('.reveal-line'),
  ];

  allReveal.forEach(el => {
    /* Immediately reveal elements already in the viewport at load time */
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      el.classList.add('is-visible');
    } else {
      revealObserver.observe(el);
    }
  });
}
window.initReveals = initReveals;


/* ═══ HERO PARALLAX ══════════════════════════════════════════ */
/* #35 §139-140: Subtle, removed on mobile                    */

function initParallax() {
  const heroImg = document.querySelector('[data-parallax]');
  if (!heroImg) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) return;

  const handleParallax = () => {
    const scrollY = window.scrollY;
    const heroHeight = heroImg.closest('.hero')?.offsetHeight || 800;
    if (scrollY < heroHeight) {
      const offset = scrollY * 0.2;
      heroImg.style.transform = `translateY(${offset}px)`;
    }
  };

  window.addEventListener('scroll', handleParallax, { passive: true });
}


/* ═══ STAT COUNTER ═══════════════════════════════════════════ */
/* #36 §50: Optional number animation                          */

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = 16;
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
}

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

function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
}


/* ═══ SMOOTH SCROLL (anchor links) ═══════════════════════════ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
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
}


/* ═══ PAGE ENTRANCE ══════════════════════════════════════════ */

function initPageEntrance() {
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('page-enter');
  }
}


/* ═══ INIT ════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initPageEntrance();
  initReveals();
  initParallax();
  initCounters();
  initSmoothScroll();
});
