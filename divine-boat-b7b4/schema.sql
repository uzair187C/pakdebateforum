-- PAK DEBATE FORUM — Academy Database Schema
-- Apply with: wrangler d1 execute DB --local --file=schema.sql

-- Coaches must come first (programs references it)
CREATE TABLE IF NOT EXISTS coaches (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT    NOT NULL,
  title       TEXT    NOT NULL,
  bio         TEXT,
  expertise   TEXT,                        -- JSON array string
  image_url   TEXT,
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT    DEFAULT (datetime('now'))
);

-- Programs catalog
CREATE TABLE IF NOT EXISTS programs (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  slug          TEXT    UNIQUE NOT NULL,
  title         TEXT    NOT NULL,
  category      TEXT    NOT NULL,          -- debate | public_speaking | writing | workshop
  level         TEXT    NOT NULL,          -- beginner | intermediate | advanced | all
  age_min       INTEGER,
  age_max       INTEGER,
  duration      TEXT,                      -- e.g. "10 weeks"
  delivery_mode TEXT    NOT NULL,          -- in_person | online | hybrid
  description   TEXT    NOT NULL,
  curriculum    TEXT,                      -- JSON array of module strings
  schedule      TEXT,                      -- e.g. "Saturdays 10am–12pm"
  price         INTEGER,                   -- PKR; NULL = contact for pricing
  active        INTEGER NOT NULL DEFAULT 1,
  coach_id      INTEGER REFERENCES coaches(id),
  created_at    TEXT    DEFAULT (datetime('now'))
);

-- Events (tournaments, workshops, seminars)
CREATE TABLE IF NOT EXISTS events (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  slug                  TEXT    UNIQUE NOT NULL,
  title                 TEXT    NOT NULL,
  type                  TEXT    NOT NULL,  -- tournament | workshop | seminar | camp
  description           TEXT,
  venue                 TEXT,
  city                  TEXT,
  date_start            TEXT    NOT NULL,  -- ISO date YYYY-MM-DD
  date_end              TEXT,
  registration_deadline TEXT,
  max_participants      INTEGER,
  fee                   INTEGER DEFAULT 0, -- PKR; 0 = free
  status                TEXT    NOT NULL DEFAULT 'upcoming', -- upcoming | open | closed | completed
  program_id            INTEGER REFERENCES programs(id),
  created_at            TEXT    DEFAULT (datetime('now'))
);

-- Registrations (events & programs share one table)
CREATE TABLE IF NOT EXISTS registrations (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  type             TEXT    NOT NULL,       -- event | program
  reference_id     INTEGER NOT NULL,       -- events.id or programs.id
  full_name        TEXT    NOT NULL,
  email            TEXT    NOT NULL,
  phone            TEXT,
  institution      TEXT,
  age              INTEGER,
  experience_level TEXT,                   -- beginner | intermediate | advanced
  notes            TEXT,
  status           TEXT    NOT NULL DEFAULT 'pending', -- pending | confirmed | rejected
  created_at       TEXT    DEFAULT (datetime('now'))
);

-- Feedback submissions
CREATE TABLE IF NOT EXISTS feedback (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,
  email      TEXT    NOT NULL,
  category   TEXT    NOT NULL,            -- general | program | event | website | coach
  message    TEXT    NOT NULL,
  status     TEXT    NOT NULL DEFAULT 'new', -- new | read | responded
  created_at TEXT    DEFAULT (datetime('now'))
);

-- Resources (downloadable / linked material)
CREATE TABLE IF NOT EXISTS resources (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  category    TEXT    NOT NULL,           -- motions | guides | videos | formats | results
  description TEXT,
  url         TEXT    NOT NULL,
  file_type   TEXT    DEFAULT 'link',     -- pdf | video | link | doc
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT    DEFAULT (datetime('now'))
);
