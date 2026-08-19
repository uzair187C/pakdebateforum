/**
 * PAK DEBATE FORUM — Shared Navigation + Footer
 * Source of truth: #33 NAVIGATION, #34 FOOTER, #37 ARCHITECTURE
 * ────────────────────────────────────────────────────────────
 * Single source of truth for nav links across all pages.
 * Renders into #app-nav, #app-drawer, #app-footer.
 *
 * Navigation IA (#33 §2):
 *   Home · About · Events · Academy · Resources · Contact
 *
 * Organization identity (#34 §24): "Pak Debate Forum"
 */
(function () {
  'use strict';

  /* ── Central nav config (#33 §28) ──────────────────────── */
  const LINKS = [
    { href: '/',              label: 'Home' },
    { href: '/about.html',    label: 'About' },
    { href: '/events.html',   label: 'Events' },
    { href: '/academy.html',  label: 'Academy' },
    { href: '/resources.html',label: 'Resources' },
    { href: '/contact.html',  label: 'Contact' },
  ];

  const CONTACT = {
    email: 'info@pakdebateforum.com',
  };

  /* ── Helper: active route (#33 §6, §27) ────────────────── */
  function active(href) {
    const p = location.pathname;
    if (href === '/') return p === '/' || p === '/index.html' ? 'is-active' : '';
    return p.startsWith(href.replace('.html', '')) ? 'is-active' : '';
  }

  /* ── Render: Header (#33 §3) ───────────────────────────── */
  function renderNav() {
    const el = document.getElementById('app-nav');
    if (!el) return;

    el.className = 'nav';
    el.setAttribute('role', 'banner');
    el.innerHTML = `
      <div class="nav__inner container">
        <a href="/" class="nav__logo" aria-label="Pak Debate Forum — Home">
          <img src="/assets/brand/pdf-logo.png" alt="" class="nav__logo-img" width="36" height="36">
          <span class="nav__logo-text">Pak Debate Forum</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul class="nav__links" role="list">
            ${LINKS.map(l => `<li><a href="${l.href}" class="nav__link ${active(l.href)}" ${active(l.href) ? 'aria-current="page"' : ''}>${l.label}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="nav__actions">
          <a href="/search.html" class="nav__search-btn" aria-label="Search site" title="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </a>
          <a href="/register.html" class="btn btn--primary btn--sm nav__cta">Join PDF</a>
          <button id="hamburger" class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="app-drawer">
            <span class="nav__hamburger-line"></span>
            <span class="nav__hamburger-line"></span>
            <span class="nav__hamburger-line"></span>
          </button>
        </div>
      </div>`;
  }

  /* ── Render: Mobile Drawer (#33 §16) ───────────────────── */
  function renderDrawer() {
    const el = document.getElementById('app-drawer');
    if (!el) return;

    el.className = 'nav__drawer';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `
      <div class="nav__drawer-inner">
        <div class="nav__drawer-header">
          <a href="/" class="nav__logo" aria-label="Pak Debate Forum — Home">
            <img src="/assets/brand/pdf-logo.png" alt="" class="nav__logo-img" width="32" height="32">
            <span class="nav__logo-text">Pak Debate Forum</span>
          </a>
          <button id="drawer-close" class="nav__drawer-close" aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <nav class="nav__drawer-nav" aria-label="Mobile navigation">
          <ul class="nav__drawer-links" role="list">
            ${LINKS.map(l => `<li><a href="${l.href}" class="nav__drawer-link ${active(l.href)}">${l.label}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="nav__drawer-divider" aria-hidden="true"></div>

        <div class="nav__drawer-cta">
          <a href="/register.html" class="btn btn--primary btn--lg btn--full">Join PDF</a>
          <a href="/programs.html" class="btn btn--secondary btn--lg btn--full">Explore Programs</a>
        </div>

        <div class="nav__drawer-footer">
          <a href="mailto:${CONTACT.email}" class="nav__drawer-email">${CONTACT.email}</a>
        </div>
      </div>`;
  }

  /* ── Render: Footer (#34 §3, §7, §9) ──────────────────── */
  function renderFooter() {
    const el = document.getElementById('app-footer');
    if (!el) return;

    el.className = 'footer';
    el.setAttribute('role', 'contentinfo');
    el.innerHTML = `
      <div class="container">
        <div class="footer__main">

          <!-- Brand block (#34 §4) -->
          <div class="footer__brand">
            <img src="/assets/brand/pdf-logo.png" alt="Pak Debate Forum" class="footer__logo" width="40" height="40">
            <p class="footer__brand-name">Pak Debate Forum</p>
            <p class="footer__tagline">Train your voice. Sharpen your mind. Compete with purpose.</p>
          </div>

          <!-- Explore (#34 §9) -->
          <div>
            <p class="footer__col-heading">Explore</p>
            <ul class="footer__links" role="list">
              <li><a href="/about.html" class="footer__link">About PDF</a></li>
              <li><a href="/events.html" class="footer__link">Events</a></li>
              <li><a href="/results.html" class="footer__link">Results</a></li>
            </ul>
          </div>

          <!-- Learn (#34 §9) -->
          <div>
            <p class="footer__col-heading">Learn</p>
            <ul class="footer__links" role="list">
              <li><a href="/academy.html" class="footer__link">Academy</a></li>
              <li><a href="/programs.html" class="footer__link">Programs</a></li>
              <li><a href="/coaches.html" class="footer__link">Coaches</a></li>
              <li><a href="/resources.html" class="footer__link">Resources</a></li>
            </ul>
          </div>

          <!-- Connect (#34 §9) -->
          <div>
            <p class="footer__col-heading">Connect</p>
            <ul class="footer__links" role="list">
              <li><a href="/contact.html" class="footer__link">Contact Us</a></li>
              <li><a href="/feedback.html" class="footer__link">Feedback</a></li>
              <li><a href="/register.html" class="footer__link">Register</a></li>
            </ul>
          </div>

        </div>

        <!-- Legal / copyright (#34 §21-23) -->
        <div class="footer__bottom">
          <p class="footer__copy">&copy; ${new Date().getFullYear()} Pak Debate Forum. All rights reserved.</p>
          <nav aria-label="Legal links">
            <ul class="footer__legal" role="list">
              <li><a href="/admin.html" class="footer__legal-link">Admin</a></li>
            </ul>
          </nav>
        </div>
      </div>`;
  }

  /* ── Behavior: Scroll + Mobile menu ────────────────────── */
  function initBehavior() {
    const nav = document.getElementById('app-nav');
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('app-drawer');
    if (!nav) return;

    /* Scroll state (#33 §12) */
    const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Mobile menu (#33 §18) */
    if (hamburger && drawer) {
      /* Create scrim overlay */
      let scrim = document.getElementById('drawer-scrim');
      if (!scrim) {
        scrim = document.createElement('div');
        scrim.id = 'drawer-scrim';
        scrim.className = 'nav__drawer-scrim';
        document.body.appendChild(scrim);
      }

      const toggle = (force) => {
        const open = force !== undefined ? force : !drawer.classList.contains('is-open');
        drawer.classList.toggle('is-open', open);
        drawer.setAttribute('aria-hidden', String(!open));
        hamburger.classList.toggle('is-open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        scrim.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      };

      hamburger.addEventListener('click', () => toggle());
      scrim.addEventListener('click', () => toggle(false));

      const closeBtn = document.getElementById('drawer-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => toggle(false));
      }

      /* Close on Escape (#33 §40) */
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
          toggle(false);
          hamburger.focus();
        }
      });

      /* Close on link click (#33 §18) */
      drawer.querySelectorAll('.nav__drawer-link').forEach(l =>
        l.addEventListener('click', () => toggle(false))
      );
    }
  }

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderDrawer();
    renderFooter();
    initBehavior();
  });
})();
