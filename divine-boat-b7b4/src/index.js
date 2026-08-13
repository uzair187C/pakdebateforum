/**
 * PAK DEBATE FORUM — Academy Worker API
 * PASS 2 — Functional Build
 *
 * Routes:
 *   Public:  GET /api/programs, /api/programs/:id
 *            GET /api/coaches
 *            GET /api/events, /api/events/:id
 *            GET /api/resources
 *            POST /api/registrations
 *            POST /api/feedback
 *
 *   Admin:   GET|POST /api/admin/events, /api/admin/events/:id
 *            GET|POST /api/admin/programs
 *            GET /api/admin/registrations
 *            PUT /api/admin/registrations/:id
 *            GET /api/admin/feedback
 *            PUT /api/admin/feedback/:id
 *            GET|POST /api/admin/resources
 *            GET /api/admin/coaches
 *            POST /api/admin/coaches
 *
 *   Static:  everything else → ASSETS (../public)
 */

// ─── Helpers ───────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function err(message, status = 400) {
  return json({ error: message }, status);
}

async function body(req) {
  try { return await req.json(); } catch { return null; }
}

function isAdmin(req, env) {
  const key = req.headers.get('X-Admin-Key') || '';
  return key === (env.ADMIN_KEY || 'local-admin-2024');
}

// Simple path pattern matcher: '/api/events/:id'
function match(pattern, actual) {
  const pp = pattern.split('/'), ap = actual.split('/');
  if (pp.length !== ap.length) return null;
  const params = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(':')) params[pp[i].slice(1)] = ap[i];
    else if (pp[i] !== ap[i]) return null;
  }
  return params;
}

// ─── Public Handlers ───────────────────────────────────────

async function listPrograms(env) {
  const { results } = await env.DB.prepare(`
    SELECT p.*, c.name AS coach_name, c.title AS coach_title
    FROM programs p
    LEFT JOIN coaches c ON p.coach_id = c.id
    WHERE p.active = 1
    ORDER BY p.category, p.level
  `).all();
  return json({ programs: results });
}

async function getProgram(env, id) {
  const row = await env.DB.prepare(`
    SELECT p.*, c.name AS coach_name, c.title AS coach_title, c.bio AS coach_bio
    FROM programs p
    LEFT JOIN coaches c ON p.coach_id = c.id
    WHERE p.id = ?
  `).bind(id).first();
  if (!row) return err('Program not found', 404);
  return json({ program: row });
}

async function listCoaches(env) {
  const { results } = await env.DB.prepare(
    'SELECT * FROM coaches WHERE active = 1 ORDER BY name'
  ).all();
  return json({ coaches: results });
}

async function listEvents(env, url) {
  const s = url.searchParams.get('status') || 'upcoming,open';
  const placeholders = s.split(',').map(() => '?').join(',');
  const vals = s.split(',');
  const { results } = await env.DB.prepare(`
    SELECT e.*, p.title AS program_title
    FROM events e
    LEFT JOIN programs p ON e.program_id = p.id
    WHERE e.status IN (${placeholders})
    ORDER BY e.date_start ASC
  `).bind(...vals).all();
  return json({ events: results });
}

async function getEvent(env, id) {
  const row = await env.DB.prepare(`
    SELECT e.*, p.title AS program_title
    FROM events e
    LEFT JOIN programs p ON e.program_id = p.id
    WHERE e.id = ?
  `).bind(id).first();
  if (!row) return err('Event not found', 404);
  const rc = await env.DB.prepare(
    'SELECT COUNT(*) AS cnt FROM registrations WHERE type = ? AND reference_id = ?'
  ).bind('event', id).first();
  return json({ event: { ...row, registration_count: rc.cnt } });
}

async function listResources(env, url) {
  const cat = url.searchParams.get('category');
  const { results } = cat
    ? await env.DB.prepare('SELECT * FROM resources WHERE active=1 AND category=? ORDER BY created_at DESC').bind(cat).all()
    : await env.DB.prepare('SELECT * FROM resources WHERE active=1 ORDER BY category, created_at DESC').all();
  return json({ resources: results });
}

async function createRegistration(env, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  for (const f of ['type', 'reference_id', 'full_name', 'email']) {
    if (!b[f]) return err(`Missing required field: ${f}`);
  }
  if (!['event', 'program'].includes(b.type)) return err('type must be event or program');

  // Validate reference exists
  const tbl = b.type === 'event' ? 'events' : 'programs';
  const ref = await env.DB.prepare(`SELECT id FROM ${tbl} WHERE id = ?`).bind(b.reference_id).first();
  if (!ref) return err(`${b.type} not found`, 404);

  // Duplicate check
  const dup = await env.DB.prepare(
    'SELECT id FROM registrations WHERE type=? AND reference_id=? AND email=?'
  ).bind(b.type, b.reference_id, b.email).first();
  if (dup) return err('This email is already registered for this item', 409);

  const r = await env.DB.prepare(`
    INSERT INTO registrations
      (type, reference_id, full_name, email, phone, institution, age, experience_level, notes)
    VALUES (?,?,?,?,?,?,?,?,?)
  `).bind(
    b.type, b.reference_id, b.full_name, b.email,
    b.phone || null, b.institution || null, b.age || null,
    b.experience_level || null, b.notes || null
  ).run();
  return json({ success: true, id: r.meta.last_row_id }, 201);
}

async function createFeedback(env, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  for (const f of ['name', 'email', 'category', 'message']) {
    if (!b[f]) return err(`Missing required field: ${f}`);
  }
  const r = await env.DB.prepare(
    'INSERT INTO feedback (name, email, category, message) VALUES (?,?,?,?)'
  ).bind(b.name, b.email, b.category, b.message).run();
  return json({ success: true, id: r.meta.last_row_id }, 201);
}

// ─── Admin Handlers ────────────────────────────────────────

async function adminListEvents(env) {
  const { results } = await env.DB.prepare('SELECT * FROM events ORDER BY date_start DESC').all();
  return json({ events: results });
}

async function adminCreateEvent(env, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  for (const f of ['slug', 'title', 'type', 'date_start']) if (!b[f]) return err(`Missing: ${f}`);
  const r = await env.DB.prepare(`
    INSERT INTO events (slug,title,type,description,venue,city,date_start,date_end,
      registration_deadline,max_participants,fee,status,program_id)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
  `).bind(
    b.slug, b.title, b.type, b.description || null,
    b.venue || null, b.city || null, b.date_start, b.date_end || null,
    b.registration_deadline || null, b.max_participants || null,
    b.fee ?? 0, b.status || 'upcoming', b.program_id || null
  ).run();
  return json({ success: true, id: r.meta.last_row_id }, 201);
}

async function adminUpdateEvent(env, id, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  await env.DB.prepare(`
    UPDATE events SET status=?,title=?,description=?,venue=?,city=?,
      date_start=?,date_end=?,registration_deadline=?,max_participants=?,fee=?
    WHERE id=?
  `).bind(
    b.status, b.title, b.description, b.venue, b.city,
    b.date_start, b.date_end, b.registration_deadline,
    b.max_participants, b.fee, id
  ).run();
  return json({ success: true });
}

async function adminListRegistrations(env, url) {
  const type = url.searchParams.get('type');
  const ref  = url.searchParams.get('reference_id');
  let q = 'SELECT * FROM registrations', params = [], where = [];
  if (type) { where.push('type=?');         params.push(type); }
  if (ref)  { where.push('reference_id=?'); params.push(ref);  }
  if (where.length) q += ' WHERE ' + where.join(' AND ');
  q += ' ORDER BY created_at DESC';
  const { results } = params.length
    ? await env.DB.prepare(q).bind(...params).all()
    : await env.DB.prepare(q).all();
  return json({ registrations: results });
}

async function adminUpdateRegistration(env, id, req) {
  const b = await body(req);
  if (!b?.status) return err('Missing status');
  await env.DB.prepare('UPDATE registrations SET status=? WHERE id=?').bind(b.status, id).run();
  return json({ success: true });
}

async function adminListFeedback(env) {
  const { results } = await env.DB.prepare('SELECT * FROM feedback ORDER BY created_at DESC').all();
  return json({ feedback: results });
}

async function adminUpdateFeedback(env, id, req) {
  const b = await body(req);
  if (!b?.status) return err('Missing status');
  await env.DB.prepare('UPDATE feedback SET status=? WHERE id=?').bind(b.status, id).run();
  return json({ success: true });
}

async function adminListPrograms(env) {
  const { results } = await env.DB.prepare(`
    SELECT p.*, c.name AS coach_name FROM programs p
    LEFT JOIN coaches c ON p.coach_id = c.id ORDER BY p.category
  `).all();
  return json({ programs: results });
}

async function adminCreateProgram(env, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  for (const f of ['slug','title','category','level','delivery_mode','description'])
    if (!b[f]) return err(`Missing: ${f}`);
  const r = await env.DB.prepare(`
    INSERT INTO programs (slug,title,category,level,age_min,age_max,duration,
      delivery_mode,description,curriculum,schedule,price,active,coach_id)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `).bind(
    b.slug, b.title, b.category, b.level,
    b.age_min||null, b.age_max||null, b.duration||null,
    b.delivery_mode, b.description, b.curriculum||null,
    b.schedule||null, b.price||null, 1, b.coach_id||null
  ).run();
  return json({ success: true, id: r.meta.last_row_id }, 201);
}

async function adminListResources(env) {
  const { results } = await env.DB.prepare('SELECT * FROM resources ORDER BY category, created_at DESC').all();
  return json({ resources: results });
}

async function adminCreateResource(env, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  for (const f of ['title','category','url']) if (!b[f]) return err(`Missing: ${f}`);
  const r = await env.DB.prepare(
    'INSERT INTO resources (title,category,description,url,file_type) VALUES (?,?,?,?,?)'
  ).bind(b.title, b.category, b.description||null, b.url, b.file_type||'link').run();
  return json({ success: true, id: r.meta.last_row_id }, 201);
}

async function adminListCoaches(env) {
  const { results } = await env.DB.prepare('SELECT * FROM coaches ORDER BY name').all();
  return json({ coaches: results });
}

async function adminCreateCoach(env, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  for (const f of ['name','title']) if (!b[f]) return err(`Missing: ${f}`);
  const r = await env.DB.prepare(
    'INSERT INTO coaches (name,title,bio,expertise,image_url,active) VALUES (?,?,?,?,?,?)'
  ).bind(b.name, b.title, b.bio||null, b.expertise||null, b.image_url||null, 1).run();
  return json({ success: true, id: r.meta.last_row_id }, 201);
}

// ─── Main Router ───────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    const url    = new URL(request.url);
    const path   = url.pathname;
    const method = request.method;

    // Preflight
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // Only handle /api/* in the worker
    if (!path.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }

    try {
      // ── Admin routes (/api/admin/*) ──────────────────────
      if (path.startsWith('/api/admin/')) {
        if (!isAdmin(request, env)) return err('Unauthorized', 401);

        let p;

        // Events
        if (path === '/api/admin/events') {
          if (method === 'GET')  return await adminListEvents(env);
          if (method === 'POST') return await adminCreateEvent(env, request);
        }
        if ((p = match('/api/admin/events/:id', path))) {
          if (method === 'PUT') return await adminUpdateEvent(env, p.id, request);
        }

        // Programs
        if (path === '/api/admin/programs') {
          if (method === 'GET')  return await adminListPrograms(env);
          if (method === 'POST') return await adminCreateProgram(env, request);
        }

        // Registrations
        if (path === '/api/admin/registrations') {
          if (method === 'GET') return await adminListRegistrations(env, url);
        }
        if ((p = match('/api/admin/registrations/:id', path))) {
          if (method === 'PUT') return await adminUpdateRegistration(env, p.id, request);
        }

        // Feedback
        if (path === '/api/admin/feedback') {
          if (method === 'GET') return await adminListFeedback(env);
        }
        if ((p = match('/api/admin/feedback/:id', path))) {
          if (method === 'PUT') return await adminUpdateFeedback(env, p.id, request);
        }

        // Resources
        if (path === '/api/admin/resources') {
          if (method === 'GET')  return await adminListResources(env);
          if (method === 'POST') return await adminCreateResource(env, request);
        }

        // Coaches
        if (path === '/api/admin/coaches') {
          if (method === 'GET')  return await adminListCoaches(env);
          if (method === 'POST') return await adminCreateCoach(env, request);
        }

        return err('Admin route not found', 404);
      }

      // ── Public routes (/api/*) ───────────────────────────

      // Programs
      if (path === '/api/programs' && method === 'GET') return await listPrograms(env);
      let p;
      if ((p = match('/api/programs/:id', path)) && method === 'GET') return await getProgram(env, p.id);

      // Coaches
      if (path === '/api/coaches' && method === 'GET') return await listCoaches(env);

      // Events
      if (path === '/api/events' && method === 'GET') return await listEvents(env, url);
      if ((p = match('/api/events/:id', path)) && method === 'GET') return await getEvent(env, p.id);

      // Resources
      if (path === '/api/resources' && method === 'GET') return await listResources(env, url);

      // Registrations
      if (path === '/api/registrations' && method === 'POST') return await createRegistration(env, request);

      // Feedback
      if (path === '/api/feedback' && method === 'POST') return await createFeedback(env, request);

      // Ping
      if (path === '/api/ping') return json({ ok: true, ts: Date.now() });

      return err('Not found', 404);

    } catch (e) {
      console.error('Worker error:', e);
      return err(e.message || 'Internal server error', 500);
    }
  },
};
