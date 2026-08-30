/**
 * PAK DEBATE FORUM — Shared Navigation + Footer + Controls
 * Source of truth: #33 NAVIGATION, #34 FOOTER, #37 ARCHITECTURE
 * ────────────────────────────────────────────────────────────
 * Single source of truth for nav links across all public pages.
 * Integrates Theme Switching (Dark/Light) and Language Switching (EN/中文).
 */
(function () {
  'use strict';

  function getLang() {
    return (window.I18N && window.I18N.lang) || localStorage.getItem('pdf_lang') || 'en';
  }

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || localStorage.getItem('pdf_theme') || 'dark';
  }

  function getLinks() {
    const t = (key, fallback) => (window.I18N ? window.I18N.t(key) : fallback);
    return [
      { href: '/',               key: 'nav.home',     label: t('nav.home', 'Home') },
      { href: '/about.html',     key: 'nav.about',    label: t('nav.about', 'About') },
      { href: '/events.html',    key: 'nav.events',   label: t('nav.events', 'Events') },
      { href: '/academy.html',   key: 'nav.academy',  label: t('nav.academy', 'Academy') },
      { href: '/resources.html', key: 'nav.resources',label: t('nav.resources', 'Resources') },
      { href: '/contact.html',   key: 'nav.contact',  label: t('nav.contact', 'Contact') },
    ];
  }

  const CONTACT = {
    email: 'info@pakdebateforum.com',
  };

  /* ── Helper: active route ──────────────────────────────── */
  function active(href) {
    const p = location.pathname;
    if (href === '/') return p === '/' || p === '/index.html' ? 'is-active' : '';
    return p.startsWith(href.replace('.html', '')) ? 'is-active' : '';
  }

  /* ── Render: Header ───────────────────────────────────── */
  function renderNav() {
    const el = document.getElementById('app-nav');
    if (!el) return;

    const t = (k, f) => (window.I18N ? window.I18N.t(k) : f);
    const links = getLinks();
    const currentTheme = getTheme();
    const currentLang = getLang();

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
            ${links.map(l => `<li><a href="${l.href}" class="nav__link ${active(l.href)}" ${active(l.href) ? 'aria-current="page"' : ''} data-i18n="${l.key}">${l.label}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="nav__actions">
          <!-- Language Selector -->
          <button id="lang-toggle" class="nav__ctrl-btn" aria-label="Switch Language" title="Switch Language">
            ${currentLang === 'zh' ? 'EN' : '中文'}
          </button>

          <!-- Theme Selector -->
          <button id="theme-toggle" class="nav__ctrl-btn" aria-label="Toggle Theme" title="Toggle Theme">
            ${currentTheme === 'light' ? '🌙' : '☀️'}
          </button>

          <a href="/search.html" class="nav__search-btn" aria-label="Search site" title="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </a>

          <a href="/register.html" class="btn btn--primary btn--sm nav__cta" data-i18n="nav.join">${t('nav.join', 'Join PDF')}</a>

          <button id="hamburger" class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="app-drawer">
            <span class="nav__hamburger-line"></span>
            <span class="nav__hamburger-line"></span>
            <span class="nav__hamburger-line"></span>
          </button>
        </div>
      </div>`;

    attachControlListeners();
  }

  /* ── Render: Mobile Drawer ─────────────────────────────── */
  function renderDrawer() {
    const el = document.getElementById('app-drawer');
    if (!el) return;

    const t = (k, f) => (window.I18N ? window.I18N.t(k) : f);
    const links = getLinks();
    const currentTheme = getTheme();
    const currentLang = getLang();

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

        <div class="nav__drawer-controls">
          <button id="drawer-lang-toggle" class="nav__ctrl-btn nav__ctrl-btn--drawer">
            🌐 ${currentLang === 'zh' ? 'Switch to English' : '切换至中文'}
          </button>
          <button id="drawer-theme-toggle" class="nav__ctrl-btn nav__ctrl-btn--drawer">
            ${currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>

        <nav class="nav__drawer-nav" aria-label="Mobile navigation">
          <ul class="nav__drawer-links" role="list">
            ${links.map(l => `<li><a href="${l.href}" class="nav__drawer-link ${active(l.href)}" data-i18n="${l.key}">${l.label}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="nav__drawer-divider" aria-hidden="true"></div>

        <div class="nav__drawer-cta">
          <a href="/register.html" class="btn btn--primary btn--lg btn--full" data-i18n="nav.join">${t('nav.join', 'Join PDF')}</a>
          <a href="/programs.html" class="btn btn--secondary btn--lg btn--full" data-i18n="nav.explore_programs">${t('nav.explore_programs', 'Explore Programs')}</a>
        </div>

        <div class="nav__drawer-footer">
          <a href="mailto:${CONTACT.email}" class="nav__drawer-email">${CONTACT.email}</a>
        </div>
      </div>`;

    attachControlListeners();
  }

  /* ── Render: Footer ────────────────────────────────────── */
  function renderFooter() {
    const el = document.getElementById('app-footer');
    if (!el) return;

    const t = (k, f) => (window.I18N ? window.I18N.t(k) : f);

    el.className = 'footer';
    el.setAttribute('role', 'contentinfo');
    el.innerHTML = `
      <div class="container">
        <div class="footer__main">

          <!-- Brand block -->
          <div class="footer__brand">
            <img src="/assets/brand/pdf-logo.png" alt="Pak Debate Forum" class="footer__logo" width="40" height="40">
            <p class="footer__brand-name">Pak Debate Forum</p>
            <p class="footer__tagline" data-i18n="footer.tagline">${t('footer.tagline', 'Train your voice. Sharpen your mind. Compete with purpose.')}</p>
          </div>

          <!-- Explore -->
          <div>
            <p class="footer__col-heading" data-i18n="footer.explore">${t('footer.explore', 'Explore')}</p>
            <ul class="footer__links" role="list">
              <li><a href="/about.html" class="footer__link" data-i18n="footer.about">${t('footer.about', 'About PDF')}</a></li>
              <li><a href="/events.html" class="footer__link" data-i18n="footer.events">${t('footer.events', 'Events')}</a></li>
              <li><a href="/results.html" class="footer__link" data-i18n="footer.results">${t('footer.results', 'Results')}</a></li>
            </ul>
          </div>

          <!-- Learn -->
          <div>
            <p class="footer__col-heading" data-i18n="footer.learn">${t('footer.learn', 'Learn')}</p>
            <ul class="footer__links" role="list">
              <li><a href="/academy.html" class="footer__link" data-i18n="footer.academy">${t('footer.academy', 'Academy')}</a></li>
              <li><a href="/programs.html" class="footer__link" data-i18n="footer.programs">${t('footer.programs', 'Programs')}</a></li>
              <li><a href="/coaches.html" class="footer__link" data-i18n="footer.coaches">${t('footer.coaches', 'Coaches')}</a></li>
              <li><a href="/resources.html" class="footer__link" data-i18n="footer.resources">${t('footer.resources', 'Resources')}</a></li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <p class="footer__col-heading" data-i18n="footer.connect">${t('footer.connect', 'Connect')}</p>
            <ul class="footer__links" role="list">
              <li><a href="/contact.html" class="footer__link" data-i18n="footer.contact">${t('footer.contact', 'Contact Us')}</a></li>
              <li><a href="/feedback.html" class="footer__link" data-i18n="footer.feedback">${t('footer.feedback', 'Feedback')}</a></li>
              <li><a href="/register.html" class="footer__link" data-i18n="footer.register">${t('footer.register', 'Register')}</a></li>
            </ul>
          </div>

        </div>

        <!-- Legal / copyright -->
        <div class="footer__bottom">
          <p class="footer__copy">&copy; ${new Date().getFullYear()} <span data-i18n="footer.copyright">${t('footer.copyright', 'Pak Debate Forum. All rights reserved.')}</span></p>
          <nav aria-label="Legal links">
            <ul class="footer__legal" role="list">
              <li><a href="/admin.html" class="footer__legal-link" data-i18n="footer.admin">${t('footer.admin', 'Admin')}</a></li>
            </ul>
          </nav>
        </div>
      </div>`;
  }

  /* ── Event Handlers for Theme & Language Controls ─────── */
  function attachControlListeners() {
    const langBtn = document.getElementById('lang-toggle');
    const drawerLangBtn = document.getElementById('drawer-lang-toggle');

    const themeBtn = document.getElementById('theme-toggle');
    const drawerThemeBtn = document.getElementById('drawer-theme-toggle');

    const toggleLang = () => {
      const current = getLang();
      const next = current === 'zh' ? 'en' : 'zh';
      if (window.I18N) {
        window.I18N.setLang(next);
      } else {
        localStorage.setItem('pdf_lang', next);
        location.reload();
      }
    };

    const toggleTheme = () => {
      const current = getTheme();
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('pdf_theme', next);
      renderNav();
      renderDrawer();
    };

    if (langBtn && !langBtn.dataset.bound) {
      langBtn.dataset.bound = 'true';
      langBtn.addEventListener('click', toggleLang);
    }
    if (drawerLangBtn && !drawerLangBtn.dataset.bound) {
      drawerLangBtn.dataset.bound = 'true';
      drawerLangBtn.addEventListener('click', toggleLang);
    }
    if (themeBtn && !themeBtn.dataset.bound) {
      themeBtn.dataset.bound = 'true';
      themeBtn.addEventListener('click', toggleTheme);
    }
    if (drawerThemeBtn && !drawerThemeBtn.dataset.bound) {
      drawerThemeBtn.dataset.bound = 'true';
      drawerThemeBtn.addEventListener('click', toggleTheme);
    }
  }

  /* ── Behavior: Scroll + Mobile menu ────────────────────── */
  function initBehavior() {
    const nav = document.getElementById('app-nav');
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('app-drawer');
    if (!nav) return;

    /* Scroll state */
    const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Mobile menu */
    if (hamburger && drawer) {
      let scrim = document.getElementById('drawer-scrim');
      if (!scrim) {
        scrim = document.createElement('div');
        scrim.id = 'drawer-scrim';
        scrim.className = 'nav__drawer-scrim';
        document.body.appendChild(scrim);
      }

      const toggle = (force) => {
        drawer.classList.add('has-transited');
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

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
          toggle(false);
          hamburger.focus();
        }
      });

      drawer.querySelectorAll('.nav__drawer-link').forEach(l =>
        l.addEventListener('click', () => toggle(false))
      );
    }
  }

  /* Expose render functions globally */
  window.renderNav = renderNav;
  window.renderDrawer = renderDrawer;
  window.renderFooter = renderFooter;

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderDrawer();
    renderFooter();
    initBehavior();
  });
})();
