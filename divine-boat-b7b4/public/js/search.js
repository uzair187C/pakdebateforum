/**
 * PAK DEBATE FORUM — Search Controller
 */
(function () {
  'use strict';

  let currentQuery = '';
  let activeTab = 'all';
  let rawResults = { programs: [], events: [], resources: [], coaches: [] };
  let debounceTimer = null;

  const inputEl = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  const tabsContainer = document.getElementById('search-tabs');
  const gridEl = document.getElementById('search-results-grid');
  const metaEl = document.getElementById('search-results-meta');
  const countText = document.getElementById('search-count-text');
  const loadingEl = document.getElementById('search-loading');
  const emptyEl = document.getElementById('search-empty');
  const initialEl = document.getElementById('search-initial');

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function init() {
    if (!inputEl) return;

    // Read URL query parameter
    const params = new URLSearchParams(window.location.search);
    const urlQuery = params.get('q') || '';
    if (urlQuery) {
      inputEl.value = urlQuery;
      clearBtn.style.display = 'block';
      performSearch(urlQuery);
    }

    // Browser Back / Forward sync
    window.addEventListener('popstate', () => {
      const p = new URLSearchParams(window.location.search);
      const q = p.get('q') || '';
      inputEl.value = q;
      clearBtn.style.display = q.length > 0 ? 'block' : 'none';
      if (q !== currentQuery) {
        performSearch(q);
      }
    });

    // Input listener with 300ms debounce
    inputEl.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      clearBtn.style.display = q.length > 0 ? 'block' : 'none';

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (q !== currentQuery) {
          updateUrl(q);
          performSearch(q);
        }
      }, 300);
    });

    clearBtn.addEventListener('click', () => {
      inputEl.value = '';
      clearBtn.style.display = 'none';
      updateUrl('');
      resetState();
      inputEl.focus();
    });

    // Tab switching
    if (tabsContainer) {
      tabsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;
        tabsContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeTab = btn.dataset.category || 'all';
        renderResults();
      });
    }
  }

  function updateUrl(q) {
    const url = new URL(window.location.href);
    if (q) {
      url.searchParams.set('q', q);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  }

  function resetState() {
    currentQuery = '';
    rawResults = { programs: [], events: [], resources: [], coaches: [] };
    gridEl.style.display = 'none';
    metaEl.style.display = 'none';
    loadingEl.style.display = 'none';
    emptyEl.style.display = 'none';
    initialEl.style.display = 'block';
  }

  async function performSearch(query) {
    currentQuery = query;
    if (!query || query.length < 2) {
      resetState();
      return;
    }

    initialEl.style.display = 'none';
    emptyEl.style.display = 'none';
    gridEl.style.display = 'none';
    metaEl.style.display = 'none';
    loadingEl.style.display = 'block';

    try {
      const data = await API.search(query);
      rawResults = data.results || { programs: [], events: [], resources: [], coaches: [] };
      renderResults();
    } catch (err) {
      console.error('Search error:', err);
      loadingEl.style.display = 'none';
      if (window.showToast) window.showToast('Unable to perform search at this time.', 'error');
    }
  }

  function renderResults() {
    loadingEl.style.display = 'none';

    let items = [];
    if (activeTab === 'all' || activeTab === 'programs') {
      items = items.concat(rawResults.programs.map(p => ({ ...p, _type: 'program' })));
    }
    if (activeTab === 'all' || activeTab === 'events') {
      items = items.concat(rawResults.events.map(e => ({ ...e, _type: 'event' })));
    }
    if (activeTab === 'all' || activeTab === 'resources') {
      items = items.concat(rawResults.resources.map(r => ({ ...r, _type: 'resource' })));
    }
    if (activeTab === 'all' || activeTab === 'coaches') {
      items = items.concat(rawResults.coaches.map(c => ({ ...c, _type: 'coach' })));
    }

    if (items.length === 0) {
      gridEl.style.display = 'none';
      metaEl.style.display = 'none';
      emptyEl.style.display = 'block';
      return;
    }

    emptyEl.style.display = 'none';
    metaEl.style.display = 'block';
    countText.textContent = `Found ${items.length} ${items.length === 1 ? 'result' : 'results'} for "${currentQuery}"`;

    gridEl.innerHTML = items.map(item => renderResultCard(item)).join('');
    gridEl.style.display = 'grid';

    if (window.I18N) window.I18N.translateDOM(gridEl);
    if (window.initReveals) window.initReveals();
  }

  function renderResultCard(item) {
    const title = window.I18N ? window.I18N.db(item.slug, 'title', item.title) : item.title;
    const rawDesc = window.I18N ? window.I18N.db(item.slug, 'description', item.description || item.bio || item.expertise) : (item.description || item.bio || item.expertise || '');
    const desc = rawDesc ? (rawDesc.length > 150 ? rawDesc.substring(0, 150) + '…' : rawDesc) : '';

    if (item._type === 'program') {
      const levelLabel = window.I18N ? window.I18N.t(`level.${item.level}`) : (item.level || 'All Levels');
      const badgeText = window.I18N ? window.I18N.t('type.program') : 'Program';
      const btnText = window.I18N ? window.I18N.t('btn.view_program') : 'View Program →';
      return `
        <div class="card card--interactive" data-reveal="fade-up">
          <div class="card__header">
            <span class="badge badge--gold" data-i18n="type.program">${badgeText}</span>
            <span class="text-xs text-muted" data-i18n="level.${item.level}">${escapeHtml(levelLabel)}</span>
          </div>
          <h3 class="card__title">${escapeHtml(title)}</h3>
          <p class="card__description">${escapeHtml(desc)}</p>
          <div class="card__footer margin-top-4">
            <a href="/program.html?id=${encodeURIComponent(item.id)}" class="btn btn--secondary btn--sm" data-i18n="btn.view_program">${btnText}</a>
          </div>
        </div>
      `;
    }
    if (item._type === 'event') {
      const badgeText = window.I18N ? window.I18N.t('type.event') : 'Event';
      const btnText = window.I18N ? window.I18N.t('btn.view_details') : 'View Details →';
      return `
        <div class="card card--interactive" data-reveal="fade-up">
          <div class="card__header">
            <span class="badge badge--gold" data-i18n="type.event">${badgeText}</span>
            <span class="text-xs text-muted">${escapeHtml(item.city || item.venue || 'Online')}</span>
          </div>
          <h3 class="card__title">${escapeHtml(title)}</h3>
          <p class="card__description">${escapeHtml(desc)}</p>
          <div class="card__footer margin-top-4">
            <a href="/event.html?id=${encodeURIComponent(item.id)}" class="btn btn--secondary btn--sm" data-i18n="btn.view_details">${btnText}</a>
          </div>
        </div>
      `;
    }
    if (item._type === 'resource') {
      const safeUrl = item.url && (item.url.startsWith('http://') || item.url.startsWith('https://') || item.url.startsWith('/')) ? item.url : '#';
      const badgeText = window.I18N ? window.I18N.t('type.resource') : 'Resource';
      const catText = window.I18N ? window.I18N.t(`category.${item.category}`) : (item.category || 'General');
      const btnText = window.I18N ? window.I18N.t('btn.download_pdf') : 'Download Resource';
      return `
        <div class="card card--interactive" data-reveal="fade-up">
          <div class="card__header">
            <span class="badge badge--subtle" data-i18n="type.resource">${badgeText}</span>
            <span class="text-xs text-muted" data-i18n="category.${item.category}">${escapeHtml(catText)}</span>
          </div>
          <h3 class="card__title">${escapeHtml(title)}</h3>
          <p class="card__description">${escapeHtml(desc)}</p>
          <div class="card__footer margin-top-4">
            <a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm" data-i18n="btn.download_pdf">${btnText}</a>
          </div>
        </div>
      `;
    }
    if (item._type === 'coach') {
      const badgeText = window.I18N ? window.I18N.t('type.coach') : 'Coach';
      const btnText = window.I18N ? window.I18N.t('btn.learn_more') : 'Learn More';
      return `
        <div class="card card--interactive" data-reveal="fade-up">
          <div class="card__header">
            <span class="badge badge--subtle" data-i18n="type.coach">${badgeText}</span>
            <span class="text-xs text-muted">${escapeHtml(item.title || 'Faculty')}</span>
          </div>
          <h3 class="card__title">${escapeHtml(item.name)}</h3>
          <p class="card__description">${escapeHtml(desc)}</p>
          <div class="card__footer margin-top-4">
            <a href="/coaches.html" class="btn btn--secondary btn--sm" data-i18n="btn.learn_more">${btnText}</a>
          </div>
        </div>
      `;
    }
    return '';
  }

  document.addEventListener('DOMContentLoaded', init);
})();
