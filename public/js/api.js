/**
 * PAK DEBATE FORUM — API Client  |  PASS 2
 * Used by all frontend pages. Import via <script src="/js/api.js">
 */
const API = {
  BASE: '/api',

  _adminKey() { return sessionStorage.getItem('pdfAdminKey') || ''; },

  async _fetch(path, opts = {}) {
    const res = await fetch(this.BASE + path, opts);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { status: res.status });
    return data;
  },

  get:  (path)       => API._fetch(path),
  post: (path, body) => API._fetch(path, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) }),

  adminGet: (path) => API._fetch(path, { headers:{'X-Admin-Key': API._adminKey()} }),
  adminPost:(path, body) => API._fetch(path, { method:'POST', headers:{'Content-Type':'application/json','X-Admin-Key': API._adminKey()}, body: JSON.stringify(body) }),
  adminPut: (path, body) => API._fetch(path, { method:'PUT',  headers:{'Content-Type':'application/json','X-Admin-Key': API._adminKey()}, body: JSON.stringify(body) }),

  programs:      { list: ()  => API.get('/programs'),       get: (id) => API.get(`/programs/${id}`) },
  coaches:       { list: ()  => API.get('/coaches') },
  events:        { list: (s) => API.get(`/events${s?`?status=${s}`:''}`), get: (id) => API.get(`/events/${id}`) },
  resources:     { list: (c) => API.get(`/resources${c?`?category=${c}`:''}`) },
  registrations: { create: (d) => API.post('/registrations', d) },
  feedback:      { create: (d) => API.post('/feedback', d) },

  admin: {
    events:        { list: ()       => API.adminGet('/admin/events'),
                     create:(d)     => API.adminPost('/admin/events', d),
                     update:(id, d) => API.adminPut(`/admin/events/${id}`, d) },
    programs:      { list: ()       => API.adminGet('/admin/programs'),
                     create:(d)     => API.adminPost('/admin/programs', d) },
    registrations: { list: (q)      => API.adminGet(`/admin/registrations${q||''}`),
                     update:(id, d) => API.adminPut(`/admin/registrations/${id}`, d) },
    feedback:      { list: ()       => API.adminGet('/admin/feedback'),
                     update:(id, d) => API.adminPut(`/admin/feedback/${id}`, d) },
    resources:     { list: ()       => API.adminGet('/admin/resources'),
                     create:(d)     => API.adminPost('/admin/resources', d) },
    coaches:       { list: ()       => API.adminGet('/admin/coaches'),
                     create:(d)     => API.adminPost('/admin/coaches', d) },
  },
};
