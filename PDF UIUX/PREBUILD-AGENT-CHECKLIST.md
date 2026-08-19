# PAK DEBATE FORUM (PDF) — PREBUILD AGENT CHECKLIST

Type: Operational preflight checklist.
Purpose: This is NOT another design specification. It is a final checklist for the coding AI immediately before implementation begins.

Read #43 first, then #42, then the relevant dependent specifications.

---

# 1. BEFORE TOUCHING CODE

[ ] Identify the existing framework and deployment architecture.
[ ] Inspect the existing repository.
[ ] Inspect current routes.
[ ] Inspect current API/Worker routes.
[ ] Inspect current database/content integration.
[ ] Inspect authentication/admin boundaries.
[ ] Inspect current public assets.
[ ] Inspect current CSS/design tokens.
[ ] Inspect current reusable components.
[ ] Inspect current working pages.
[ ] Identify functionality that must be preserved.
[ ] Do not replace working functionality with mock/static data.

---

# 2. DOCUMENTATION CHECK

[ ] Read #43 Master Project Specification.
[ ] Read #42 Design-to-Code AI Instructions.
[ ] Read #40 Security & Frontend Hardening.
[ ] Read #41 Browser & Device QA Matrix.
[ ] Read #35 Global Design Tokens.
[ ] Read #36 Global Component Library.
[ ] Read #37 Site-Wide Architecture.
[ ] Read #38 Homepage Master.
[ ] Read #39 About Master.
[ ] Read the earlier approved specifications that apply to the target page.
[ ] Confirm whether any current repository behavior conflicts with the docs.
[ ] If a conflict changes architecture, STOP and ask.

---

# 3. CONTENT CHECK

[ ] Identify the official organization name: Pak Debate Forum (PDF).
[ ] Treat Pak Debate Forum Academy as part of PDF, not a separate brand unless explicitly instructed.
[ ] Confirm current official team data before publishing biographies.
[ ] Do not invent statistics.
[ ] Do not invent events.
[ ] Do not invent testimonials.
[ ] Do not invent partners.
[ ] Do not invent program details.
[ ] Do not invent contact information.
[ ] Do not invent historical dates.
[ ] Mark unresolved content as a content decision rather than guessing.

---

# 4. ROUTE CHECK

[ ] Map every existing route.
[ ] Map every intended public route.
[ ] Map every dynamic/detail route.
[ ] Identify legacy routes that must remain functional.
[ ] Verify nested direct loads.
[ ] Verify refresh on nested routes.
[ ] Verify browser back/forward behavior.
[ ] Verify 404 behavior.
[ ] Do not delete a working route merely because the redesign does not show it visually.

---

# 5. COMPONENT CHECK

[ ] Identify existing reusable components.
[ ] Match new UI to the global component library.
[ ] Reuse before creating.
[ ] Prefer variants over duplicates.
[ ] Identify genuinely new components.
[ ] Document why a new component is needed.
[ ] Keep page-specific components scoped.
[ ] Do not create duplicate Header/Footer/Button/Card systems.

---

# 6. DESIGN TOKEN CHECK

[ ] Confirm approved font roles.
[ ] Confirm approved color tokens.
[ ] Confirm gold usage rules.
[ ] Confirm surface hierarchy.
[ ] Confirm spacing scale.
[ ] Confirm container widths.
[ ] Confirm radius scale.
[ ] Confirm shadows.
[ ] Confirm motion tokens.
[ ] Confirm breakpoints.
[ ] Confirm z-index/layering.
[ ] Remove magic numbers that duplicate design tokens.

---

# 7. ASSET CHECK

Create a canonical asset inventory before implementation.

Required categories:

```text
01-brand/
02-podium/
03-home/
04-about/
05-events/
06-academy/
07-programs/
08-resources/
09-results/
10-social/
11-ui/
12-backgrounds/
13-reference/
```

For each asset record:

[ ] filename
[ ] purpose
[ ] page/section
[ ] desktop/mobile applicability
[ ] dimensions/aspect ratio
[ ] light/dark behavior
[ ] crop/focal point where important
[ ] approved / draft status
[ ] fallback asset

---

# 8. HOMEPAGE ASSET CHECK

Keep:

[ ] official PDF logo SVG
[ ] official logo PNG fallback if needed
[ ] canonical podium transparent/high-resolution asset
[ ] podium mobile fallback
[ ] podium static fallback
[ ] podium texture/material assets if required by 3D
[ ] approved hero background/atmosphere assets
[ ] selected homepage photography
[ ] event highlight imagery
[ ] Academy imagery
[ ] resource preview imagery

Do NOT keep multiple near-identical “final” podium files without a canonical designation.

---

# 9. ABOUT ASSETS

Keep where available:

[ ] team portraits
[ ] authentic PDF event photography
[ ] historical images
[ ] community imagery
[ ] institutional/brand imagery
[ ] approved partner logos
[ ] impact/achievement imagery

Do not fabricate team portraits.

---

# 10. EVENTS ASSETS

Keep:

[ ] event hero images
[ ] event card thumbnails
[ ] fallback event image
[ ] speaker/judge photos if actually public
[ ] event-specific branded graphics if approved

Use filenames that identify the event slug or canonical ID.

---

# 11. ACADEMY / PROGRAM ASSETS

Keep:

[ ] Academy hero image
[ ] program/course images
[ ] instructor/mentor photos if approved
[ ] program fallback covers
[ ] curriculum/supporting visuals
[ ] Academy-specific brand visuals

Do not use random classroom stock photography just to fill cards.

---

# 12. RESOURCES ASSETS

Keep:

[ ] article cover images
[ ] document/PDF cover images
[ ] guide/report covers
[ ] video thumbnails/posters
[ ] branded fallback covers
[ ] approved author/profile photos where needed

Each resource should have a predictable image fallback.

---

# 13. RESULTS ASSETS

Where applicable:

[ ] competition/result supporting images
[ ] event/team imagery
[ ] award/achievement visuals
[ ] branded fallback

Never invent result graphics.

---

# 14. SOCIAL / SEO ASSETS

Keep:

[ ] favicon / app icon
[ ] default Open Graph image
[ ] homepage social image
[ ] About social image if approved
[ ] Event social image strategy
[ ] Resource social image strategy
[ ] Academy/program social image strategy

---

# 15. UI ASSETS

Keep:

[ ] official SVG icons or approved icon library
[ ] any approved decorative vector geometry
[ ] subtle grain/noise asset if actually used
[ ] no unnecessary decorative asset collection

---

# 16. BACKGROUND ASSETS

Keep only approved/relevant:

[ ] black atmospheric backgrounds
[ ] dark gradients/textures
[ ] gold-light atmospheric assets
[ ] editorial background imagery
[ ] podium-supporting environment assets

Avoid a giant collection of random gradients.

---

# 17. REFERENCE FOLDER

Create:

```text
13-reference/
  homepage/
  podium/
  about/
  events/
  academy/
  resources/
  contact/
  global/
  mobile/
```

These are DESIGN REFERENCES only.

Do not let the implementation treat them as production assets.

---

# 18. PRODUCTION VS REFERENCE

Strict separation:

```text
reference/  = inspiration / design reference
assets/     = approved production files
```

Never accidentally ship a screenshot as a website image.

---

# 19. IMAGE TECHNICAL CHECK

For every production image:

[ ] correct format
[ ] sensible dimensions
[ ] correct aspect ratio
[ ] no accidental watermark
[ ] no unintended crop
[ ] no broken transparency
[ ] no embedded screenshot UI
[ ] compressed appropriately
[ ] responsive version available where necessary

---

# 20. SVG CHECK

For each SVG:

[ ] optimized
[ ] trusted source
[ ] no unsafe embedded script
[ ] correct viewBox
[ ] correct dimensions
[ ] correct brand treatment

---

# 21. LOGO CHECK

Verify:

[ ] official PDF mark
[ ] correct proportions
[ ] correct color treatment
[ ] no stretched logo
[ ] no recreated approximation
[ ] sufficient clear space

---

# 22. PODIUM CHECK

Before implementation:

[ ] choose one canonical podium design
[ ] verify logo placement
[ ] verify typography on podium
[ ] verify black material
[ ] verify gold lighting
[ ] verify transparent/static version
[ ] verify mobile fallback
[ ] verify no unwanted background baked into the asset
[ ] verify performance budget if 3D

---

# 23. FONT CHECK

The AI should use the APPROVED font configuration from the repository/specification.

Do not substitute a font without approval.

Do not generate or download a random new font because a screenshot looks different.

---

# 24. DATA CHECK

Before building dynamic UI:

[ ] inspect actual API responses
[ ] inspect actual database schema/content model
[ ] identify optional fields
[ ] identify status values
[ ] identify empty states
[ ] identify invalid/missing data cases
[ ] identify public/private fields

---

# 25. DYNAMIC ENTITY CHECK

For each entity:

```text
Event
Program
Resource
Result
Team member
```

confirm:

[ ] identifier
[ ] slug
[ ] title/name
[ ] description/summary
[ ] image
[ ] metadata
[ ] status
[ ] public visibility
[ ] detail route
[ ] CTA/action

Use only real fields.

---

# 26. STATE CHECK

For every dynamic component test:

```text
default
loading
loaded
empty
partial
error
```

For interactive controls:

```text
hover
focus
active
disabled
loading
success
error
mobile
reduced motion
```

---

# 27. ACCESSIBILITY CHECK

[ ] semantic HTML
[ ] one logical H1 per page
[ ] heading hierarchy
[ ] visible focus
[ ] keyboard navigation
[ ] labels for forms
[ ] accessible names for icon buttons
[ ] no hover-only information
[ ] alt text strategy
[ ] reduced-motion support
[ ] sufficient contrast
[ ] comfortable touch targets

---

# 28. PERFORMANCE CHECK

Before adding heavy effects:

[ ] measure current baseline
[ ] identify critical assets
[ ] identify 3D cost
[ ] identify image cost
[ ] identify font cost
[ ] identify animation cost
[ ] define mobile fallback

---

# 29. SECURITY CHECK

[ ] no client-side secrets
[ ] API validates server-side
[ ] public API returns public fields only
[ ] admin remains protected
[ ] forms protected
[ ] errors sanitized
[ ] external embeds reviewed
[ ] upload paths validated
[ ] CSP/security headers reviewed
[ ] no private data in analytics

---

# 30. QA CHECK

At minimum render:

```text
375×812
390×844
768×1024
1280×800
1440×900
1920×1080
```

And test:

[ ] Chrome
[ ] Safari
[ ] Firefox
[ ] Edge
[ ] iOS Safari
[ ] Android Chrome

where supported/relevant.

---

# 31. VISUAL REVIEW

For every major page ask:

[ ] Is the hierarchy correct?
[ ] Is the typography large enough?
[ ] Is gold restrained?
[ ] Is black dimensional?
[ ] Is the dominant visual correct?
[ ] Is the spacing intentional?
[ ] Are cards overused?
[ ] Does the page still look like PDF?
[ ] Does mobile feel intentionally designed?

---

# 32. HOMEPAGE REVIEW

Specifically inspect:

[ ] podium scale
[ ] podium position
[ ] headline scale
[ ] CTA
[ ] gold spotlight
[ ] negative space
[ ] scroll transition
[ ] first content section
[ ] mobile podium
[ ] 3D fallback

---

# 33. CROSS-PAGE CONSISTENCY REVIEW

Compare:

```text
Home
About
Academy
Programs
Events
Results
Resources
Contact
```

Check that these stay consistent:

[ ] header
[ ] footer
[ ] buttons
[ ] typography
[ ] cards
[ ] focus states
[ ] motion language
[ ] spacing
[ ] color
[ ] responsive principles

---

# 34. DO NOT START FULL IMPLEMENTATION YET IF

Stop and clarify if:

[ ] major route is missing
[ ] major brand asset is unavailable
[ ] actual data model conflicts with documentation
[ ] authentication boundary is unclear
[ ] a major visual reference conflicts with written specification
[ ] the canonical podium asset is not decided
[ ] major page content is unknown
[ ] a new feature is required but undocumented

---

# 35. SAFE TO PROCEED WHEN

```text
documentation understood
+
routes understood
+
existing code understood
+
assets inventoried
+
data understood
+
global tokens identified
+
component library identified
+
major ambiguities resolved
```

---

# 36. FINAL AGENT INSTRUCTION

Do not begin by generating a new website from scratch.

Begin by auditing the existing application.

Then implement the redesign into the existing functional architecture.

The first deliverable should be a verified global shell + homepage skeleton using real assets and real routes.

Only after that should the agent progressively implement the rest of the site.

---

# 37. FINAL ASSET FOLDER

Recommended structure:

```text
public/
  assets/
    brand/
    podium/
    home/
    about/
    events/
    academy/
    programs/
    resources/
    results/
    social/
    ui/
    backgrounds/
  reference/
    homepage/
    podium/
    about/
    events/
    academy/
    resources/
    contact/
    global/
    mobile/
```

The exact framework folder structure can differ.

---

# 38. FINAL RULE

The AI should never have to ask:

```text
"What kind of website should I make?"
```

It should only need to answer:

```text
"How do I implement the already-defined PDF system correctly?"
```

# END OF PREBUILD AGENT CHECKLIST
