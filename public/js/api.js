/**
 * PAK DEBATE FORUM — API Client  |  PASS 2.1
 * Full CRUD — adds DELETE + adminPatch + stats
 */
const API = {
  BASE: '/api',

  _adminToken() { return sessionStorage.getItem('pdfAdminToken') || ''; },

  async _fetch(path, opts = {}) {
    const res = await fetch(this.BASE + path, opts);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      if (res.status === 401 && sessionStorage.getItem('pdfAdminToken')) {
        sessionStorage.removeItem('pdfAdminToken');
        location.reload();
      }
      throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { status: res.status });
    }
    return data;
  },

  get:  (path)       => API._fetch(path),
  post: (path, body) => API._fetch(path, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) }),

  adminGet:    (path)       => API._fetch(path, { headers:{'Authorization': `Bearer ${API._adminToken()}`} }),
  adminPost:   (path, body) => API._fetch(path, { method:'POST',   headers:{'Content-Type':'application/json','Authorization': `Bearer ${API._adminToken()}`}, body: JSON.stringify(body) }),
  adminPut:    (path, body) => API._fetch(path, { method:'PUT',    headers:{'Content-Type':'application/json','Authorization': `Bearer ${API._adminToken()}`}, body: JSON.stringify(body) }),
  adminDelete: (path)       => API._fetch(path, { method:'DELETE', headers:{'Authorization': `Bearer ${API._adminToken()}`} }),

  programs:      { list: ()  => API.get('/programs'),       get: (id) => API.get(`/programs/${id}`) },
  coaches:       { list: ()  => API.get('/coaches') },
  events:        { list: (s) => API.get(`/events${s?`?status=${s}`:''}`), get: (id) => API.get(`/events/${id}`) },
  resources:     { list: (c) => API.get(`/resources${c?`?category=${c}`:''}`) },
  registrations: { create: (d) => API.post('/registrations', d) },
  feedback:      { create: (d) => API.post('/feedback', d) },
  search:        (q) => API.get(`/search?q=${encodeURIComponent(q)}`),

  admin: {
    stats:         { get: ()        => API.adminGet('/admin/stats') },
    events:        { list: ()       => API.adminGet('/admin/events'),
                     create:(d)     => API.adminPost('/admin/events', d),
                     update:(id, d) => API.adminPut(`/admin/events/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/events/${id}`) },
    programs:      { list: ()       => API.adminGet('/admin/programs'),
                     create:(d)     => API.adminPost('/admin/programs', d),
                     update:(id, d) => API.adminPut(`/admin/programs/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/programs/${id}`) },
    registrations: { list: (q)      => API.adminGet(`/admin/registrations${q||''}`),
                     update:(id, d) => API.adminPut(`/admin/registrations/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/registrations/${id}`) },
    feedback:      { list: (q)      => API.adminGet(`/admin/feedback${q||''}`),
                     update:(id, d) => API.adminPut(`/admin/feedback/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/feedback/${id}`) },
    resources:     { list: ()       => API.adminGet('/admin/resources'),
                     create:(d)     => API.adminPost('/admin/resources', d),
                     update:(id, d) => API.adminPut(`/admin/resources/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/resources/${id}`) },
    coaches:       { list: ()       => API.adminGet('/admin/coaches'),
                     create:(d)     => API.adminPost('/admin/coaches', d),
                     update:(id, d) => API.adminPut(`/admin/coaches/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/coaches/${id}`) },
  },
};
