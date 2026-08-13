/**
 * PAK DEBATE FORUM — Shared Nav + Footer  |  PASS 2
 * Renders into #app-nav, #app-drawer, #app-footer on every page.
 */
(function () {
  const LINKS = [
    { href: '/',              label: 'Home' },
    { href: '/academy.html',  label: 'Academy' },
    { href: '/programs.html', label: 'Programs' },
    { href: '/coaches.html',  label: 'Coaches' },
    { href: '/events.html',   label: 'Events' },
    { href: '/resources.html',label: 'Resources' },
    { href: '/results.html',  label: 'Results' },
    { href: '/contact.html',  label: 'Contact' },
  ];

  function active(href) {
    const p = location.pathname;
    if (href === '/') return p === '/' ? 'is-active' : '';
    return p.startsWith(href.replace('.html','')) ? 'is-active' : '';
  }

  function renderNav() {
    const el = document.getElementById('app-nav');
    if (!el) return;
    el.innerHTML = `
      <div class="nav__inner container">
        <a href="/" class="nav__logo" aria-label="Pak Debate Forum Academy">
          <span class="nav__logo-mark">Pak Debate Forum</span>
          <span class="nav__logo-badge">Academy</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul class="nav__links" role="list">
            ${LINKS.map(l=>`<li><a href="${l.href}" class="nav__link ${active(l.href)}">${l.label}</a></li>`).join('')}
          </ul>
        </nav>
        <div class="nav__actions">
          <a href="/register.html" class="btn btn--primary btn--sm">Join the Academy</a>
          <button id="hamburger" class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="app-drawer">
            <span class="nav__hamburger-line"></span>
            <span class="nav__hamburger-line"></span>
            <span class="nav__hamburger-line"></span>
          </button>
        </div>
      </div>`;
  }

  function renderDrawer() {
    const el = document.getElementById('app-drawer');
    if (!el) return;
    el.innerHTML = `
      <nav><ul class="nav__drawer-links" role="list">
        ${LINKS.map(l=>`<li><a href="${l.href}" class="nav__drawer-link">${l.label}</a></li>`).join('')}
      </ul></nav>
      <div class="nav__drawer-cta">
        <a href="/register.html" class="btn btn--primary btn--lg">Join the Academy</a>
        <a href="/programs.html" class="btn btn--ghost btn--lg">Explore Programs</a>
      </div>`;
  }

  function renderFooter() {
    const el = document.getElementById('app-footer');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <div class="footer__main">
          <div>
            <p class="footer__brand-name">Pak Debate Forum</p>
            <p class="footer__brand-badge">Academy</p>
            <p class="footer__tagline">Train your voice. Sharpen your mind.<br>Compete with purpose.</p>
          </div>
          <div>
            <p class="footer__col-heading">Academy</p>
            <ul class="footer__links">
              <li><a href="/academy.html"  class="footer__link">Academy Home</a></li>
              <li><a href="/programs.html" class="footer__link">Programs</a></li>
              <li><a href="/coaches.html"  class="footer__link">Coaches</a></li>
              <li><a href="/results.html"  class="footer__link">Results</a></li>
            </ul>
          </div>
          <div>
            <p class="footer__col-heading">Participate</p>
            <ul class="footer__links">
              <li><a href="/events.html"   class="footer__link">Events</a></li>
              <li><a href="/register.html" class="footer__link">Register</a></li>
              <li><a href="/resources.html"class="footer__link">Resources</a></li>
            </ul>
          </div>
          <div>
            <p class="footer__col-heading">Connect</p>
            <ul class="footer__links">
              <li><a href="/contact.html"  class="footer__link">Contact Us</a></li>
              <li><a href="/feedback.html" class="footer__link">Feedback</a></li>
              <li><a href="/admin.html"    class="footer__link">Admin</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__copy">&copy; ${new Date().getFullYear()} Pak Debate Forum. All rights reserved.</p>
          <nav aria-label="Legal links"><ul class="footer__legal">
            <li><a href="#" class="footer__legal-link">Privacy Policy</a></li>
            <li><a href="#" class="footer__legal-link">Terms of Use</a></li>
          </ul></nav>
        </div>
      </div>`;
  }

  function initScrollAndMobile() {
    const nav = document.getElementById('app-nav');
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('app-drawer');
    if (!nav) return;

    const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (hamburger && drawer) {
      const toggle = (force) => {
        const open = force !== undefined ? force : !drawer.classList.contains('is-open');
        drawer.classList.toggle('is-open', open);
        hamburger.classList.toggle('is-open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      };
      hamburger.addEventListener('click', () => toggle());
      document.addEventListener('keydown', e => { if (e.key==='Escape') toggle(false); });
      drawer.querySelectorAll('.nav__drawer-link').forEach(l => l.addEventListener('click', () => toggle(false)));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderDrawer();
    renderFooter();
    initScrollAndMobile();
  });
})();
