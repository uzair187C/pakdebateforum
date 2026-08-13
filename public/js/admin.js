/**
 * PAK DEBATE FORUM — Admin Panel Logic
 * Handles: auth, panel nav, stats, CRUD, search, drawer, CSV export
 */
'use strict';

// ── State ─────────────────────────────────────────────────
let _drawerType = null;
let _drawerId   = null;
let _coachesList = [];

// ── Auth ──────────────────────────────────────────────────
function tryLogin() {
  const key = document.getElementById('key-in').value.trim();
  if (!key) return;
  sessionStorage.setItem('pdfAdminKey', key);
  API.admin.stats.get().then(() => {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-shell').style.display  = 'grid';
    init();
  }).catch(() => {
    sessionStorage.removeItem('pdfAdminKey');
    document.getElementById('login-err').style.display = 'block';
  });
}

function logout() {
  sessionStorage.removeItem('pdfAdminKey');
  location.reload();
}

document.getElementById('key-in').addEventListener('keydown', e => { if (e.key === 'Enter') tryLogin(); });

// Auto-login if key exists
if (sessionStorage.getItem('pdfAdminKey')) {
  API.admin.stats.get().then(() => {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-shell').style.display  = 'grid';
    init();
  }).catch(() => sessionStorage.removeItem('pdfAdminKey'));
}

// ── Init ──────────────────────────────────────────────────
function init() {
  // Cache coaches for dropdowns
  API.admin.coaches.list().then(d => { _coachesList = d.coaches; });
  loadDashboard();
  loadEvents();
  loadPrograms();
  loadRegistrations();
  loadFeedback();
  loadResources();
  loadCoaches();
}

// ── Panel nav ─────────────────────────────────────────────
document.querySelectorAll('.nav-btn[data-p]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.p).classList.add('active');
  });
});

// ── Helpers ───────────────────────────────────────────────
const $ = id => document.getElementById(id);
const sd = s => s ? s.substring(0, 10) : '—';
const tr = (s, n = 70) => s && s.length > n ? s.substring(0, n) + '…' : (s || '—');
const bx = (t, cls = '') => `<span class="bx ${cls}">${t}</span>`;

function stBadge(s, type) {
  const cls = (type === 'registration')
    ? (s === 'confirmed' ? 'green' : s === 'rejected' ? 'red' : 'gold')
    : (type === 'feedback')
      ? (s === 'new' ? 'gold' : s === 'responded' ? 'green' : '')
      : (s === 'open' ? 'green' : s === 'completed' ? '' : s === 'closed' ? 'red' : 'gold');
  return bx(s, cls);
}

function stSelect(id, cur, type) {
  const opts = type === 'registration' ? ['pending','confirmed','rejected']
    : type === 'feedback' ? ['new','read','responded']
    : ['upcoming','open','closed','completed'];
  return `<select class="st-select" onchange="updateStatus('${type}','${id}',this.value)">
    ${opts.map(o => `<option ${o===cur?'selected':''}>${o}</option>`).join('')}
  </select>`;
}

function actionBtns(type, id, editFn) {
  return `<div class="action-row">
    ${editFn ? `<button class="btn-xs" onclick="${editFn}(${id})">Edit</button>` : ''}
    <button class="btn-xs danger" onclick="del('${type}',${id})">Delete</button>
  </div>`;
}

function setRows(tbodyId, html) {
  const el = $(tbodyId);
  if (el) el.innerHTML = html || `<tr><td colspan="20" class="empty">No records found.</td></tr>`;
}

async function updateStatus(type, id, status) {
  try {
    if (type === 'event')        await API.admin.events.update(id, { status });
    if (type === 'registration') await API.admin.registrations.update(id, { status });
    if (type === 'feedback')     await API.admin.feedback.update(id, { status });
  } catch(e) { showMsg('drawer-msg', e.message, true); }
}

async function del(type, id) {
  if (!confirm(`Delete this ${type}? This cannot be undone.`)) return;
  try {
    if (type === 'event')        { await API.admin.events.delete(id);        loadEvents(); }
    if (type === 'program')      { await API.admin.programs.delete(id);      loadPrograms(); }
    if (type === 'registration') { await API.admin.registrations.delete(id); loadRegistrations(); }
    if (type === 'feedback')     { await API.admin.feedback.delete(id);      loadFeedback(); }
    if (type === 'resource')     { await API.admin.resources.delete(id);     loadResources(); }
    if (type === 'coach')        { await API.admin.coaches.delete(id);       loadCoaches(); }
    loadDashboard();
  } catch(e) { alert('Error: ' + e.message); }
}

function showMsg(elId, msg, isErr = false) {
  const el = $(elId);
  if (!el) return;
  el.innerHTML = `<div class="alert-banner ${isErr?'err':'ok'}" style="margin-top:.75rem">${msg}</div>`;
  setTimeout(() => el.innerHTML = '', 4000);
}

function filterTable(tbodyId, query, colIdxs) {
  const q = query.toLowerCase();
  document.querySelectorAll(`#${tbodyId} tr`).forEach(row => {
    const text = colIdxs.map(i => (row.cells[i]?.textContent || '')).join(' ').toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

function exportCSV(tbodyId, headers, filename) {
  const rows = [headers];
  document.querySelectorAll(`#${tbodyId} tr`).forEach(row => {
    if (row.style.display === 'none') return;
    const cells = Array.from(row.cells).map(c => `"${c.textContent.replace(/"/g,'""').trim()}"`);
    rows.push(cells.slice(0, headers.length));
  });
  const blob = new Blob([rows.map(r => r.join(',')).join('\n')], { type: 'text/csv' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: `${filename}_${Date.now()}.csv` });
  a.click();
}

// ── Dashboard ─────────────────────────────────────────────
async function loadDashboard() {
  try {
    const { stats: s } = await API.admin.stats.get();
    $('stats-grid').innerHTML = `
      <div class="stat-box"><div class="stat-box__val">${s.events}</div><div class="stat-box__lbl">Total Events</div></div>
      <div class="stat-box"><div class="stat-box__val">${s.programs}</div><div class="stat-box__lbl">Active Programs</div></div>
      <div class="stat-box"><div class="stat-box__val">${s.coaches}</div><div class="stat-box__lbl">Coaches</div></div>
      <div class="stat-box"><div class="stat-box__val">${s.registrations}</div><div class="stat-box__lbl">Registrations</div></div>
      <div class="stat-box alert"><div class="stat-box__val">${s.pending_registrations}</div><div class="stat-box__lbl">Pending Review</div></div>
      <div class="stat-box alert"><div class="stat-box__val">${s.new_feedback}</div><div class="stat-box__lbl">New Messages</div></div>
      <div class="stat-box"><div class="stat-box__val">${s.open_events}</div><div class="stat-box__lbl">Open / Upcoming</div></div>
      <div class="stat-box"><div class="stat-box__val">${s.resources}</div><div class="stat-box__lbl">Resources</div></div>
    `;
    // Update sidebar dots
    const dotEl = (id, n) => { const d = $(id); if(d){ d.textContent=n; d.classList.toggle('show', n>0); }};
    dotEl('dot-regs', s.pending_registrations);
    dotEl('dot-fb',   s.new_feedback);
    dotEl('dot-events', s.open_events);
  } catch(e) {
    $('stats-grid').innerHTML = `<div class="empty">Could not load stats: ${e.message}</div>`;
  }
}

// ── Events ────────────────────────────────────────────────
async function loadEvents() {
  try {
    const { events } = await API.admin.events.list();
    setRows('events-body', events.map(e => `<tr>
      <td>${e.id}</td>
      <td><strong>${e.title}</strong></td>
      <td>${bx(e.type)}</td>
      <td>${e.city||'—'}</td>
      <td>${sd(e.date_start)}</td>
      <td>${e.reg_count||0}</td>
      <td>${stSelect(e.id, e.status, 'event')}</td>
      <td>${actionBtns('event', e.id, 'editEvent')}</td>
    </tr>`).join(''));
  } catch(e) { setRows('events-body', `<tr><td colspan="8" class="empty">${e.message}</td></tr>`); }
}

function editEvent(id) {
  API.admin.events.list().then(({ events }) => {
    const ev = events.find(e => e.id === id);
    if (!ev) return;
    openDrawer('event', ev);
  });
}

// ── Programs ──────────────────────────────────────────────
async function loadPrograms() {
  try {
    const { programs } = await API.admin.programs.list();
    setRows('programs-body', programs.map(p => `<tr>
      <td>${p.id}</td>
      <td><strong>${p.title}</strong></td>
      <td>${bx(p.category)}</td>
      <td>${p.level}</td>
      <td>${p.delivery_mode}</td>
      <td>${p.coach_name||'—'}</td>
      <td>${p.price ? 'PKR '+p.price.toLocaleString() : '—'}</td>
      <td>${p.reg_count||0}</td>
      <td>${actionBtns('program', p.id, 'editProgram')}</td>
    </tr>`).join(''));
  } catch(e) { setRows('programs-body', `<tr><td colspan="9" class="empty">${e.message}</td></tr>`); }
}

function editProgram(id) {
  API.admin.programs.list().then(({ programs }) => {
    const pr = programs.find(p => p.id === id);
    if (!pr) return;
    openDrawer('program', pr);
  });
}

// ── Registrations ─────────────────────────────────────────
async function loadRegistrations() {
  const type   = $('reg-type-f')?.value   || '';
  const status = $('reg-status-f')?.value || '';
  const search = $('reg-search')?.value   || '';
  let q = '';
  const parts = [];
  if (type)   parts.push(`type=${type}`);
  if (search) parts.push(`search=${encodeURIComponent(search)}`);
  if (parts.length) q = '?' + parts.join('&');
  try {
    let { registrations } = await API.admin.registrations.list(q);
    if (status) registrations = registrations.filter(r => r.status === status);
    setRows('regs-body', registrations.map(r => `<tr>
      <td>${r.id}</td>
      <td>${bx(r.type)}</td>
      <td style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.ref_title||''}">${tr(r.ref_title,30)}</td>
      <td><strong>${r.full_name}</strong></td>
      <td>${r.email}</td>
      <td>${r.institution||'—'}</td>
      <td>${r.experience_level||'—'}</td>
      <td>${stSelect(r.id, r.status, 'registration')}</td>
      <td>${sd(r.created_at)}</td>
      <td>${actionBtns('registration', r.id, null)}</td>
    </tr>`).join(''));
  } catch(e) { setRows('regs-body', `<tr><td colspan="10" class="empty">${e.message}</td></tr>`); }
}

// ── Feedback ──────────────────────────────────────────────
async function loadFeedback() {
  const cat    = $('fb-cat-f')?.value    || '';
  const status = $('fb-status-f')?.value || '';
  const parts  = [];
  if (cat)    parts.push(`category=${cat}`);
  if (status) parts.push(`status=${status}`);
  const q = parts.length ? '?' + parts.join('&') : '';
  try {
    const { feedback } = await API.admin.feedback.list(q);
    setRows('fb-body', feedback.map(f => `<tr>
      <td>${f.id}</td>
      <td><strong>${f.name}</strong></td>
      <td>${f.email}</td>
      <td>${bx(f.category)}</td>
      <td title="${f.message}">${tr(f.message)}</td>
      <td>${stSelect(f.id, f.status, 'feedback')}</td>
      <td>${sd(f.created_at)}</td>
      <td>${actionBtns('feedback', f.id, null)}</td>
    </tr>`).join(''));
  } catch(e) { setRows('fb-body', `<tr><td colspan="8" class="empty">${e.message}</td></tr>`); }
}

// ── Resources ─────────────────────────────────────────────
async function loadResources() {
  try {
    const { resources } = await API.admin.resources.list();
    setRows('res-body', resources.map(r => `<tr>
      <td>${r.id}</td>
      <td><strong>${r.title}</strong></td>
      <td>${bx(r.category)}</td>
      <td>${r.file_type}</td>
      <td><a href="${r.url}" target="_blank" style="color:var(--c-accent);font-size:.8rem">Open ↗</a></td>
      <td>${actionBtns('resource', r.id, null)}</td>
    </tr>`).join(''));
  } catch(e) { setRows('res-body', `<tr><td colspan="6" class="empty">${e.message}</td></tr>`); }
}

// ── Coaches ───────────────────────────────────────────────
async function loadCoaches() {
  try {
    const { coaches } = await API.admin.coaches.list();
    _coachesList = coaches;
    setRows('coaches-body', coaches.map(c => {
      let exp = '—';
      try { const a = JSON.parse(c.expertise); exp = Array.isArray(a) ? a.join(', ') : (c.expertise||'—'); } catch { exp = c.expertise||'—'; }
      return `<tr>
        <td>${c.id}</td>
        <td><strong>${c.name}</strong></td>
        <td>${c.title}</td>
        <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${exp}</td>
        <td>${c.active ? bx('Active','green') : bx('Inactive','red')}</td>
        <td>${actionBtns('coach', c.id, 'editCoach')}</td>
      </tr>`;
    }).join(''));
  } catch(e) { setRows('coaches-body', `<tr><td colspan="6" class="empty">${e.message}</td></tr>`); }
}

function editCoach(id) {
  const coach = _coachesList.find(c => c.id === id);
  if (coach) openDrawer('coach', coach);
}

// ── Drawer ────────────────────────────────────────────────
const coachOpts = () => `<option value="">— No coach —</option>` +
  _coachesList.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

const FORMS = {
  event: (d) => `
    <div class="drow">
      <div class="fg"><label>Slug *</label><input id="d-slug" value="${d?.slug||''}" placeholder="e.g. nsdc-2027"/></div>
      <div class="fg"><label>Title *</label><input id="d-title" value="${d?.title||''}" placeholder="Event title"/></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Type *</label><select id="d-type">
        ${['tournament','workshop','camp','seminar'].map(t=>`<option ${d?.type===t?'selected':''}>${t}</option>`).join('')}
      </select></div>
      <div class="fg"><label>Status</label><select id="d-status">
        ${['upcoming','open','closed','completed'].map(s=>`<option ${d?.status===s?'selected':''}>${s}</option>`).join('')}
      </select></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Start Date *</label><input id="d-date-start" type="date" value="${d?.date_start||''}"/></div>
      <div class="fg"><label>End Date</label><input id="d-date-end" type="date" value="${d?.date_end||''}"/></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Venue</label><input id="d-venue" value="${d?.venue||''}" placeholder="Venue name"/></div>
      <div class="fg"><label>City</label><input id="d-city" value="${d?.city||''}" placeholder="City"/></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Reg Deadline</label><input id="d-deadline" type="date" value="${d?.registration_deadline||''}"/></div>
      <div class="fg"><label>Max Participants</label><input id="d-max" type="number" value="${d?.max_participants||''}" placeholder="0 = unlimited"/></div>
    </div>
    <div class="fg"><label>Fee (PKR)</label><input id="d-fee" type="number" value="${d?.fee||0}"/></div>
    <div class="fg"><label>Description</label><textarea id="d-desc">${d?.description||''}</textarea></div>`,

  program: (d) => `
    <div class="drow">
      <div class="fg"><label>Slug *</label><input id="d-slug" value="${d?.slug||''}" placeholder="e.g. beginner-debate"/></div>
      <div class="fg"><label>Title *</label><input id="d-title" value="${d?.title||''}" placeholder="Program title"/></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Category *</label><select id="d-category">
        ${['debate','public_speaking','writing','workshop'].map(c=>`<option ${d?.category===c?'selected':''}>${c}</option>`).join('')}
      </select></div>
      <div class="fg"><label>Level *</label><select id="d-level">
        ${['beginner','intermediate','advanced','all'].map(l=>`<option ${d?.level===l?'selected':''}>${l}</option>`).join('')}
      </select></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Delivery Mode *</label><select id="d-mode">
        ${['in_person','online','hybrid'].map(m=>`<option ${d?.delivery_mode===m?'selected':''}>${m}</option>`).join('')}
      </select></div>
      <div class="fg"><label>Coach</label><select id="d-coach">${coachOpts()}</select></div>
    </div>
    <div class="drow">
      <div class="fg"><label>Duration</label><input id="d-duration" value="${d?.duration||''}" placeholder="e.g. 10 weeks"/></div>
      <div class="fg"><label>Price (PKR)</label><input id="d-price" type="number" value="${d?.price||''}"/></div>
    </div>
    <div class="fg"><label>Schedule</label><input id="d-schedule" value="${d?.schedule||''}" placeholder="e.g. Saturdays 10am–12pm"/></div>
    <div class="fg"><label>Description *</label><textarea id="d-desc">${d?.description||''}</textarea></div>`,

  resource: (d) => `
    <div class="fg"><label>Title *</label><input id="d-title" value="${d?.title||''}" placeholder="Resource title"/></div>
    <div class="fg"><label>URL *</label><input id="d-url" type="url" value="${d?.url||''}" placeholder="https://…"/></div>
    <div class="drow">
      <div class="fg"><label>Category *</label><select id="d-category">
        ${['formats','motions','guides','videos','results'].map(c=>`<option ${d?.category===c?'selected':''}>${c}</option>`).join('')}
      </select></div>
      <div class="fg"><label>File Type</label><select id="d-filetype">
        ${['link','pdf','video','doc'].map(t=>`<option ${d?.file_type===t?'selected':''}>${t}</option>`).join('')}
      </select></div>
    </div>
    <div class="fg"><label>Description</label><input id="d-desc" value="${d?.description||''}" placeholder="Brief description"/></div>`,

  coach: (d) => `
    <div class="drow">
      <div class="fg"><label>Name *</label><input id="d-name" value="${d?.name||''}" placeholder="Full name"/></div>
      <div class="fg"><label>Title *</label><input id="d-title" value="${d?.title||''}" placeholder="e.g. Head Coach"/></div>
    </div>
    <div class="fg"><label>Expertise (comma-separated)</label><input id="d-expertise" value="${(() => { try { const a=JSON.parse(d?.expertise||'[]'); return Array.isArray(a)?a.join(', '):''; } catch { return d?.expertise||''; }})()}" placeholder="World Schools, British Parliamentary"/></div>
    <div class="fg"><label>Bio</label><textarea id="d-bio">${d?.bio||''}</textarea></div>
    <div class="fg"><label>Image URL</label><input id="d-img" value="${d?.image_url||''}" placeholder="https://…"/></div>
    <div class="fg"><label>Active</label><select id="d-active">
      <option value="1" ${d?.active!==0?'selected':''}>Active</option>
      <option value="0" ${d?.active===0?'selected':''}>Inactive</option>
    </select></div>`,
};

function openDrawer(type, data) {
  _drawerType = type;
  _drawerId   = data?.id || null;
  $('drawer-title').textContent = (_drawerId ? 'Edit' : 'New') + ' ' + type.charAt(0).toUpperCase() + type.slice(1);
  $('drawer-body').innerHTML    = FORMS[type] ? FORMS[type](data) : '<p>Unknown type</p>';
  $('drawer-msg').innerHTML     = '';
  // Pre-select coach if editing program
  if (type === 'program' && data?.coach_id) {
    const sel = $('d-coach');
    if (sel) sel.value = data.coach_id;
  }
  $('drawer-overlay').classList.add('open');
  $('drawer').classList.add('open');
}

function closeDrawer() {
  $('drawer-overlay').classList.remove('open');
  $('drawer').classList.remove('open');
  _drawerType = null; _drawerId = null;
}

function g(id) { const el = $(id); return el ? el.value.trim() : ''; }

async function saveDrawer() {
  $('drawer-msg').innerHTML = '';
  const btn = $('drawer-save');
  btn.disabled = true; btn.textContent = 'Saving…';

  try {
    if (_drawerType === 'event') {
      const d = {
        slug: g('d-slug'), title: g('d-title'), type: g('d-type'), status: g('d-status'),
        date_start: g('d-date-start'), date_end: g('d-date-end')||null,
        venue: g('d-venue')||null, city: g('d-city')||null,
        registration_deadline: g('d-deadline')||null,
        max_participants: parseInt(g('d-max'))||null,
        fee: parseInt(g('d-fee'))||0, description: g('d-desc')||null,
      };
      _drawerId ? await API.admin.events.update(_drawerId, d) : await API.admin.events.create(d);
      loadEvents();
    }
    else if (_drawerType === 'program') {
      const d = {
        slug: g('d-slug'), title: g('d-title'), category: g('d-category'),
        level: g('d-level'), delivery_mode: g('d-mode'),
        coach_id: g('d-coach')||null, duration: g('d-duration')||null,
        price: parseInt(g('d-price'))||null, schedule: g('d-schedule')||null,
        description: g('d-desc'),
      };
      _drawerId ? await API.admin.programs.update(_drawerId, d) : await API.admin.programs.create(d);
      loadPrograms();
    }
    else if (_drawerType === 'resource') {
      const d = { title: g('d-title'), url: g('d-url'), category: g('d-category'), file_type: g('d-filetype'), description: g('d-desc')||null };
      await API.admin.resources.create(d);
      loadResources();
    }
    else if (_drawerType === 'coach') {
      const exp = g('d-expertise');
      const expertise = exp ? JSON.stringify(exp.split(',').map(s=>s.trim())) : '[]';
      const d = { name: g('d-name'), title: g('d-title'), bio: g('d-bio')||null, expertise, image_url: g('d-img')||null, active: parseInt(g('d-active')) };
      _drawerId ? await API.admin.coaches.update(_drawerId, d) : await API.admin.coaches.create(d);
      loadCoaches();
    }
    loadDashboard();
    closeDrawer();
  } catch(e) {
    showMsg('drawer-msg', e.message, true);
  } finally {
    btn.disabled = false; btn.textContent = 'Save';
  }
}
