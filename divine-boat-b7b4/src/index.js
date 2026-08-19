/**
 * PAK DEBATE FORUM — Academy Worker API
 * PASS 2.1 — Full CRUD + Stats
 *
 * Public:  GET /api/programs, /api/programs/:id
 *          GET /api/coaches
 *          GET /api/events, /api/events/:id
 *          GET /api/resources
 *          POST /api/registrations
 *          POST /api/feedback
 *          GET /api/ping
 *
 * Admin:   GET  /api/admin/stats
 *          GET|POST|DELETE /api/admin/events
 *          PUT|DELETE      /api/admin/events/:id
 *          GET|POST        /api/admin/programs
 *          PUT|DELETE      /api/admin/programs/:id
 *          GET             /api/admin/registrations
 *          PUT|DELETE      /api/admin/registrations/:id
 *          GET             /api/admin/feedback
 *          PUT|DELETE      /api/admin/feedback/:id
 *          GET|POST        /api/admin/resources
 *          DELETE          /api/admin/resources/:id
 *          GET|POST        /api/admin/coaches
 *          PUT|DELETE      /api/admin/coaches/:id
 *
 * Static:  everything else → ASSETS (../public)
 */

// ─── Helpers ───────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Key',
};

// ─── JWT Helpers ───────────────────────────────────────────
const b64url = (str) => btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
const strToU8 = (str) => new TextEncoder().encode(str);
const b64dec = (str) => {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return atob(str);
};

async function signJWT(payload, secret) {
  const head64 = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const pay64 = b64url(JSON.stringify(payload));
  const data = `${head64}.${pay64}`;
  const key = await crypto.subtle.importKey(
    'raw', strToU8(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, strToU8(data));
  const sig64 = btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${data}.${sig64}`;
}

async function verifyJWT(token, secret) {
  try {
    const [head64, pay64, sig64] = token.split('.');
    if (!head64 || !pay64 || !sig64) return false;
    const data = `${head64}.${pay64}`;
    const key = await crypto.subtle.importKey(
      'raw', strToU8(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
    );
    const sigU8 = new Uint8Array(b64dec(sig64).split('').map(c => c.charCodeAt(0)));
    const isValid = await crypto.subtle.verify('HMAC', key, sigU8, strToU8(data));
    if (!isValid) return false;
    const payload = JSON.parse(b64dec(pay64));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return false;
    return payload;
  } catch (e) { return false; }
}

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

async function isAdmin(req, env) {
  const auth = req.headers.get('Authorization') || req.headers.get('X-Admin-Key'); // Fallback for transition
  const token = auth?.startsWith('Bearer ') ? auth.substring(7) : auth;
  if (!token) return false;
  const secret = env.ADMIN_KEY || 'local-admin-2024';
  const payload = await verifyJWT(token, secret);
  return !!payload;
}

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
  const vals = s.split(',');
  const placeholders = vals.map(() => '?').join(',');
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

  const tbl = b.type === 'event' ? 'events' : 'programs';
  const ref = await env.DB.prepare(`SELECT id FROM ${tbl} WHERE id = ?`).bind(b.reference_id).first();
  if (!ref) return err(`${b.type} not found`, 404);

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

async function globalSearch(env, url) {
  try {
    const q = (url.searchParams.get('q') || '').trim();
    if (!q || q.length < 2) {
      return json({ query: q, results: { programs: [], events: [], resources: [], coaches: [] } });
    }
    const safeQuery = q.slice(0, 100);
    const escapedQuery = safeQuery.replace(/[%_\\]/g, '\\$&');
    const term = `%${escapedQuery}%`;

    const [programs, events, resources, coaches] = await Promise.all([
      env.DB.prepare("SELECT id, title, category, level, description FROM programs WHERE active=1 AND (title LIKE ? ESCAPE '\\' OR description LIKE ? ESCAPE '\\' OR category LIKE ? ESCAPE '\\') LIMIT 10").bind(term, term, term).all(),
      env.DB.prepare("SELECT id, title, type, venue, city, description FROM events WHERE (title LIKE ? ESCAPE '\\' OR description LIKE ? ESCAPE '\\' OR city LIKE ? ESCAPE '\\') LIMIT 10").bind(term, term, term).all(),
      env.DB.prepare("SELECT id, title, category, description, url, file_type FROM resources WHERE active=1 AND (title LIKE ? ESCAPE '\\' OR description LIKE ? ESCAPE '\\' OR category LIKE ? ESCAPE '\\') LIMIT 10").bind(term, term, term).all(),
      env.DB.prepare("SELECT id, name, title, expertise, bio FROM coaches WHERE active=1 AND (name LIKE ? ESCAPE '\\' OR bio LIKE ? ESCAPE '\\' OR expertise LIKE ? ESCAPE '\\') LIMIT 10").bind(term, term, term).all(),
    ]);

    return json({
      query: safeQuery,
      results: {
        programs: programs.results || [],
        events: events.results || [],
        resources: resources.results || [],
        coaches: coaches.results || []
      }
    });
  } catch (e) {
    console.error('Search query error:', e);
    return json({ query: '', results: { programs: [], events: [], resources: [], coaches: [] } }, 500);
  }
}

// ─── Admin: Stats ──────────────────────────────────────────

async function adminStats(env) {
  const [events, programs, coaches, registrations, feedback, resources,
         pendingRegs, newFeedback, openEvents] = await Promise.all([
    env.DB.prepare('SELECT COUNT(*) AS c FROM events').first(),
    env.DB.prepare('SELECT COUNT(*) AS c FROM programs WHERE active=1').first(),
    env.DB.prepare('SELECT COUNT(*) AS c FROM coaches WHERE active=1').first(),
    env.DB.prepare('SELECT COUNT(*) AS c FROM registrations').first(),
    env.DB.prepare('SELECT COUNT(*) AS c FROM feedback').first(),
    env.DB.prepare('SELECT COUNT(*) AS c FROM resources WHERE active=1').first(),
    env.DB.prepare("SELECT COUNT(*) AS c FROM registrations WHERE status='pending'").first(),
    env.DB.prepare("SELECT COUNT(*) AS c FROM feedback WHERE status='new'").first(),
    env.DB.prepare("SELECT COUNT(*) AS c FROM events WHERE status IN ('open','upcoming')").first(),
  ]);
  return json({
    stats: {
      events: events.c, programs: programs.c, coaches: coaches.c,
      registrations: registrations.c, feedback: feedback.c, resources: resources.c,
      pending_registrations: pendingRegs.c, new_feedback: newFeedback.c,
      open_events: openEvents.c,
    }
  });
}

// ─── Admin: Events ─────────────────────────────────────────

async function adminListEvents(env) {
  const { results } = await env.DB.prepare(`
    SELECT e.*, p.title AS program_title,
      (SELECT COUNT(*) FROM registrations r WHERE r.type='event' AND r.reference_id=e.id) AS reg_count
    FROM events e
    LEFT JOIN programs p ON e.program_id = p.id
    ORDER BY e.date_start DESC
  `).all();
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
    UPDATE events SET status=COALESCE(?,status), title=COALESCE(?,title),
      description=COALESCE(?,description), venue=COALESCE(?,venue), city=COALESCE(?,city),
      date_start=COALESCE(?,date_start), date_end=?, registration_deadline=?,
      max_participants=COALESCE(?,max_participants), fee=COALESCE(?,fee)
    WHERE id=?
  `).bind(
    b.status||null, b.title||null, b.description||null, b.venue||null, b.city||null,
    b.date_start||null, b.date_end||null, b.registration_deadline||null,
    b.max_participants??null, b.fee??null, id
  ).run();
  return json({ success: true });
}

async function adminDeleteEvent(env, id) {
  await env.DB.prepare('DELETE FROM events WHERE id=?').bind(id).run();
  return json({ success: true });
}

// ─── Admin: Programs ───────────────────────────────────────

async function adminListPrograms(env) {
  const { results } = await env.DB.prepare(`
    SELECT p.*, c.name AS coach_name,
      (SELECT COUNT(*) FROM registrations r WHERE r.type='program' AND r.reference_id=p.id) AS reg_count
    FROM programs p
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

async function adminUpdateProgram(env, id, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  await env.DB.prepare(`
    UPDATE programs SET
      title=COALESCE(?,title), category=COALESCE(?,category), level=COALESCE(?,level),
      delivery_mode=COALESCE(?,delivery_mode), description=COALESCE(?,description),
      price=?, schedule=?, duration=?, active=COALESCE(?,active), coach_id=?
    WHERE id=?
  `).bind(
    b.title||null, b.category||null, b.level||null, b.delivery_mode||null,
    b.description||null, b.price??null, b.schedule||null, b.duration||null,
    b.active??null, b.coach_id||null, id
  ).run();
  return json({ success: true });
}

async function adminDeleteProgram(env, id) {
  await env.DB.prepare('DELETE FROM programs WHERE id=?').bind(id).run();
  return json({ success: true });
}

// ─── Admin: Registrations ──────────────────────────────────

async function adminListRegistrations(env, url) {
  const type = url.searchParams.get('type');
  const ref  = url.searchParams.get('reference_id');
  const search = url.searchParams.get('search');
  let q = `
    SELECT r.*,
      CASE r.type
        WHEN 'event'   THEN (SELECT title FROM events   WHERE id=r.reference_id)
        WHEN 'program' THEN (SELECT title FROM programs WHERE id=r.reference_id)
      END AS ref_title
    FROM registrations r
  `;
  const params = [], where = [];
  if (type)   { where.push('r.type=?');         params.push(type); }
  if (ref)    { where.push('r.reference_id=?');  params.push(ref); }
  if (search) { where.push('(r.full_name LIKE ? OR r.email LIKE ? OR r.institution LIKE ?)');
                params.push(`%${search}%`, `%${search}%`, `%${search}%`); }
  if (where.length) q += ' WHERE ' + where.join(' AND ');
  q += ' ORDER BY r.created_at DESC';
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

async function adminDeleteRegistration(env, id) {
  await env.DB.prepare('DELETE FROM registrations WHERE id=?').bind(id).run();
  return json({ success: true });
}

// ─── Admin: Feedback ───────────────────────────────────────

async function adminListFeedback(env, url) {
  const cat = url.searchParams.get('category');
  const status = url.searchParams.get('status');
  let q = 'SELECT * FROM feedback', params = [], where = [];
  if (cat)    { where.push('category=?'); params.push(cat); }
  if (status) { where.push('status=?');   params.push(status); }
  if (where.length) q += ' WHERE ' + where.join(' AND ');
  q += ' ORDER BY created_at DESC';
  const { results } = params.length
    ? await env.DB.prepare(q).bind(...params).all()
    : await env.DB.prepare(q).all();
  return json({ feedback: results });
}

async function adminUpdateFeedback(env, id, req) {
  const b = await body(req);
  if (!b?.status) return err('Missing status');
  await env.DB.prepare('UPDATE feedback SET status=? WHERE id=?').bind(b.status, id).run();
  return json({ success: true });
}

async function adminDeleteFeedback(env, id) {
  await env.DB.prepare('DELETE FROM feedback WHERE id=?').bind(id).run();
  return json({ success: true });
}

// ─── Admin: Resources ──────────────────────────────────────

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

async function adminUpdateResource(env, id, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  await env.DB.prepare(`
    UPDATE resources SET
      title=COALESCE(?,title), category=COALESCE(?,category),
      description=?, url=COALESCE(?,url), file_type=COALESCE(?,file_type)
    WHERE id=?
  `).bind(b.title||null, b.category||null, b.description||null, b.url||null, b.file_type||null, id).run();
  return json({ success: true });
}

async function adminDeleteResource(env, id) {
  await env.DB.prepare('DELETE FROM resources WHERE id=?').bind(id).run();
  return json({ success: true });
}

// ─── Admin: Coaches ────────────────────────────────────────

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

async function adminUpdateCoach(env, id, req) {
  const b = await body(req);
  if (!b) return err('Invalid JSON');
  await env.DB.prepare(`
    UPDATE coaches SET
      name=COALESCE(?,name), title=COALESCE(?,title), bio=?,
      expertise=?, image_url=?, active=COALESCE(?,active)
    WHERE id=?
  `).bind(
    b.name||null, b.title||null, b.bio||null,
    b.expertise||null, b.image_url||null, b.active??null, id
  ).run();
  return json({ success: true });
}

async function adminDeleteCoach(env, id) {
  await env.DB.prepare('DELETE FROM coaches WHERE id=?').bind(id).run();
  return json({ success: true });
}

// ─── Main Router ───────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    const url    = new URL(request.url);
    const path   = url.pathname;
    const method = request.method;

    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (!path.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }

    try {
      // ── Admin Login ──────────────────────────────────────
      if (path === '/api/admin/login' && method === 'POST') {
        const b = await body(request);
        const secret = env.ADMIN_KEY || 'local-admin-2024';
        if (b?.key === secret) {
          const token = await signJWT({ admin: true, exp: Math.floor(Date.now()/1000) + (60*60*24) }, secret);
          return json({ token });
        }
        return err('Invalid credentials', 401);
      }

      // ── Admin routes (/api/admin/*) ──────────────────────
      if (path.startsWith('/api/admin/')) {
        if (!(await isAdmin(request, env))) return err('Unauthorized', 401);

        let p;

        // Stats
        if (path === '/api/admin/stats' && method === 'GET') return await adminStats(env);

        // Events
        if (path === '/api/admin/events') {
          if (method === 'GET')  return await adminListEvents(env);
          if (method === 'POST') return await adminCreateEvent(env, request);
        }
        if ((p = match('/api/admin/events/:id', path))) {
          if (method === 'PUT')    return await adminUpdateEvent(env, p.id, request);
          if (method === 'DELETE') return await adminDeleteEvent(env, p.id);
        }

        // Programs
        if (path === '/api/admin/programs') {
          if (method === 'GET')  return await adminListPrograms(env);
          if (method === 'POST') return await adminCreateProgram(env, request);
        }
        if ((p = match('/api/admin/programs/:id', path))) {
          if (method === 'PUT')    return await adminUpdateProgram(env, p.id, request);
          if (method === 'DELETE') return await adminDeleteProgram(env, p.id);
        }

        // Registrations
        if (path === '/api/admin/registrations') {
          if (method === 'GET') return await adminListRegistrations(env, url);
        }
        if ((p = match('/api/admin/registrations/:id', path))) {
          if (method === 'PUT')    return await adminUpdateRegistration(env, p.id, request);
          if (method === 'DELETE') return await adminDeleteRegistration(env, p.id);
        }

        // Feedback
        if (path === '/api/admin/feedback') {
          if (method === 'GET') return await adminListFeedback(env, url);
        }
        if ((p = match('/api/admin/feedback/:id', path))) {
          if (method === 'PUT')    return await adminUpdateFeedback(env, p.id, request);
          if (method === 'DELETE') return await adminDeleteFeedback(env, p.id);
        }

        // Resources
        if (path === '/api/admin/resources') {
          if (method === 'GET')  return await adminListResources(env);
          if (method === 'POST') return await adminCreateResource(env, request);
        }
        if ((p = match('/api/admin/resources/:id', path))) {
          if (method === 'PUT')    return await adminUpdateResource(env, p.id, request);
          if (method === 'DELETE') return await adminDeleteResource(env, p.id);
        }

        // Coaches
        if (path === '/api/admin/coaches') {
          if (method === 'GET')  return await adminListCoaches(env);
          if (method === 'POST') return await adminCreateCoach(env, request);
        }
        if ((p = match('/api/admin/coaches/:id', path))) {
          if (method === 'PUT')    return await adminUpdateCoach(env, p.id, request);
          if (method === 'DELETE') return await adminDeleteCoach(env, p.id);
        }

        return err('Admin route not found', 404);
      }

      // ── Public routes (/api/*) ───────────────────────────

      if (path === '/api/search' && method === 'GET') return await globalSearch(env, url);

      if (path === '/api/programs' && method === 'GET') return await listPrograms(env);
      let p;
      if ((p = match('/api/programs/:id', path)) && method === 'GET') return await getProgram(env, p.id);

      if (path === '/api/coaches' && method === 'GET') return await listCoaches(env);

      if (path === '/api/events' && method === 'GET') return await listEvents(env, url);
      if ((p = match('/api/events/:id', path)) && method === 'GET') return await getEvent(env, p.id);

      if (path === '/api/resources' && method === 'GET') return await listResources(env, url);

      if (path === '/api/registrations' && method === 'POST') return await createRegistration(env, request);
      if (path === '/api/feedback'      && method === 'POST') return await createFeedback(env, request);

      if (path === '/api/ping') return json({ ok: true, ts: Date.now() });

      return err('Not found', 404);

    } catch (e) {
      console.error('Worker error:', e);
      return err('Internal server error', 500);
    }
  },
};
