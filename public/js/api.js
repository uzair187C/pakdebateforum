/**
 * PAK DEBATE FORUM — API Client  |  PASS 2.1
 * Full CRUD — adds DELETE + adminPatch + stats
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

  adminGet:    (path)       => API._fetch(path, { headers:{'X-Admin-Key': API._adminKey()} }),
  adminPost:   (path, body) => API._fetch(path, { method:'POST',   headers:{'Content-Type':'application/json','X-Admin-Key': API._adminKey()}, body: JSON.stringify(body) }),
  adminPut:    (path, body) => API._fetch(path, { method:'PUT',    headers:{'Content-Type':'application/json','X-Admin-Key': API._adminKey()}, body: JSON.stringify(body) }),
  adminDelete: (path)       => API._fetch(path, { method:'DELETE', headers:{'X-Admin-Key': API._adminKey()} }),

  programs:      { list: ()  => API.get('/programs'),       get: (id) => API.get(`/programs/${id}`) },
  coaches:       { list: ()  => API.get('/coaches') },
  events:        { list: (s) => API.get(`/events${s?`?status=${s}`:''}`), get: (id) => API.get(`/events/${id}`) },
  resources:     { list: (c) => API.get(`/resources${c?`?category=${c}`:''}`) },
  registrations: { create: (d) => API.post('/registrations', d) },
  feedback:      { create: (d) => API.post('/feedback', d) },

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
                     delete:(id)    => API.adminDelete(`/admin/resources/${id}`) },
    coaches:       { list: ()       => API.adminGet('/admin/coaches'),
                     create:(d)     => API.adminPost('/admin/coaches', d),
                     update:(id, d) => API.adminPut(`/admin/coaches/${id}`, d),
                     delete:(id)    => API.adminDelete(`/admin/coaches/${id}`) },
  },
};
