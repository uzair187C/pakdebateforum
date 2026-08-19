# PAK DEBATE FORUM (PDF) — 43 MASTER PROJECT SPECIFICATION

Status: FINAL MASTER INDEX / PROJECT CONTRACT.
Purpose: One authoritative map of the complete PDF website design, UX, content, architecture, implementation, security, and QA documentation.

This is the final document.

No additional design-specification document is required after #43 unless the project team deliberately creates a future revision/version.

---

# 0. WHAT THIS DOCUMENT IS

This document answers:

```text
What are we building?
Why?
What is the design language?
What pages exist?
What components exist?
How does data connect?
How should AI implement it?
How should it be tested?
What must never be improvised?
```

It is the map of the entire documentation system.

---

# 1. PRODUCT

Official organization:

**Pak Debate Forum (PDF)**

Major education/training arm:

**Pak Debate Forum Academy**

The website is one unified organization.

---

# 2. PRODUCT NORTH STAR

The intended emotional progression:

```text
Curiosity
↓
Presence
↓
Authority
↓
Interest
↓
Trust
↓
Ambition
↓
Action
```

The website should feel:

```text
premium
intelligent
modern
purposeful
cinematic
human
credible
accessible
fast
```

---

# 3. PRODUCT IS NOT

The site is not merely:

```text
a tournament website
a debate club
a registration form
an Academy landing page
a generic education marketplace
```

It is the unified PDF ecosystem.

---

# 4. ECOSYSTEM

```text
PAK DEBATE FORUM
│
├── Organization / Community
├── Debate
├── Academy
├── Programs
├── Events
├── Resources
├── Results
├── Registration
├── Feedback
└── Contact
```

---

# 5. OFFICIAL CONTENT PRINCIPLE

Actual approved PDF content outranks placeholder content.

Known official core team:

```text
Abdul Wassay — Co-founder
Hamza Javed — Co-founder
Jawad Ahmad — Vice President
```

Do not invent facts.

---

# 6. DOCUMENTATION SOURCE-OF-TRUTH HIERARCHY

Use:

```text
43 — Master Project Specification
↓
42 — Design-to-Code AI Instructions
↓
40 — Security / Hardening
41 — Browser / Device QA
↓
35–39 — Final-stage design/architecture specifications
↓
00–34 — Existing foundation and page/component specifications
↓
approved visual references
↓
existing application/data contracts
↓
official project content
```

Important clarification:

The numbering was expanded during design work. Therefore #35–39 in the actual project are the final global/design/page specifications currently present, not the older provisional numbering list.

Do not rename or overwrite existing documents simply to force a historical numbering scheme.

---

# 7. EXISTING DOCUMENTATION MAP

## Foundation

```text
00-DESIGN-MASTER.md
01-BRAND-IDENTITY.md
```

These establish:
- design authority
- brand relationship
- visual character
- core philosophy
- source-of-truth behavior

---

# 8. EARLY DESIGN SYSTEM

The earlier documentation establishes the visual foundations, including:

```text
color
typography
grid
spacing
imagery
icons
motion
responsive behavior
3D podium
page transitions
```

These remain part of the system.

---

# 9. PODIUM

The podium is the primary cinematic brand object.

It represents:

```text
voice
argument
presence
leadership
competition
public expression
```

It is strongest on Home.

It should not automatically appear at maximum scale on every page.

---

# 10. GLOBAL VISUAL DNA

The final visual language is:

```text
DEEP BLACK
+
WARM WHITE
+
RESTRAINED GOLD
+
EDITORIAL TYPOGRAPHY
+
ARCHITECTURAL GEOMETRY
+
CINEMATIC LIGHT
+
CONTROLLED MOTION
+
GENEROUS NEGATIVE SPACE
```

---

# 11. PREMIUM RULE

Premium comes from restraint.

Avoid visual drift toward:

```text
glassmorphism
excessive gradients
neon
random glows
over-rounded UI
constant particles
unnecessary 3D
```

---

# 12. GLOBAL COMPONENT SYSTEM

Reusable UI follows:

```text
tokens
↓
primitives
↓
composites
↓
sections
↓
pages
```

Existing component documentation covers:

- buttons
- links
- logo
- containers
- sections
- cards
- event cards
- resource cards
- Academy cards
- profile cards
- stats
- forms
- filters
- tabs
- accordions
- modals
- drawers
- alerts
- loading
- empty
- error
- skeleton
- navigation
- footer
- other reusable patterns

---

# 13. COMPONENT RULE

Same visual/behavioral problem:

```text
same component
```

Different presentation:

```text
documented variant
```

Never create a pile of near-duplicate components.

---

# 14. GLOBAL SHELL

Public architecture:

```text
Global Header
↓
Page Content
↓
Global Footer
```

---

# 15. SITE-WIDE ROUTE MODEL

The approved information architecture supports the public experience around:

```text
/
 /about
 /academy
 /programs
 /events
 /resources
 /results
 /contact
```

and destination/detail/utility routes where supported:

```text
/programs/[slug]
/events/[slug]
/resources/[slug]
/register
/feedback
```

Existing functional routes should be preserved where the production application already uses them.

---

# 16. PUBLIC VS PRIVATE

Public:

```text
marketing/content pages
events
programs
resources
results
registration
feedback
contact
```

Private:

```text
admin
dashboard
content management
registration management
```

Keep public and administrative layouts/permissions separate.

---

# 17. NAVIGATION

The public navigation must remain concise.

Do not expose every destination as a top-level navigation item simply because the route exists.

Use the approved IA and current application behavior.

---

# 18. PAGE PERSONALITIES

```text
Home
cinematic / identity

About
editorial / institutional

Academy
aspirational / educational

Programs
discovery / conversion

Events
participation / energy

Results
proof / verification

Resources
knowledge / editorial

Contact
direct / human
```

---

# 19. HOME

Home's job:

```text
identity
purpose
orientation
discovery
conversion
```

Its strongest visual element is the podium.

The hero should communicate the organization's purpose without requiring animation to finish.

---

# 20. ABOUT

About's job:

```text
identity
purpose
mission
values
people
story
trust
```

Home says:

```text
LOOK
```

About says:

```text
UNDERSTAND
```

---

# 21. ACADEMY

Academy is a major pillar of PDF.

It should communicate:

```text
learning
training
development
confidence
critical thinking
competitive preparation
```

It must still visibly belong to PDF.

---

# 22. PROGRAMS

Programs is the catalogue/discovery experience.

It should help users:

```text
discover
compare
inspect
act
```

Program detail should contain the complete approved program information.

---

# 23. EVENTS

Events helps users:

```text
discover
filter
inspect
register
```

Event detail owns the complete event experience.

---

# 24. RESULTS

Results communicates:

```text
proof
achievement
competitive record
impact
```

Use only verified data.

---

# 25. RESOURCES

Resources communicates:

```text
knowledge
learning
curation
discovery
```

It should feel like a curated library, not a raw database.

---

# 26. CONTACT

Contact communicates:

```text
accessibility
trust
human connection
```

The form must be simple and state-aware.

---

# 27. FOOTER

The footer is shared infrastructure.

It should provide:

```text
identity
navigation
contact
social
legal where applicable
copyright
```

It must not become a second homepage.

---

# 28. DATA BACKBONE

Existing product context establishes a centralized data system.

Conceptually:

```text
Visitor
↓
Worker/API
↓
D1
↓
Admin
```

Relevant data domains include:

```text
events
programs
registrations
feedback
resources
coaches/team
```

Do not replace this with page-specific hidden storage.

---

# 29. DYNAMIC CONTENT

Dynamic interfaces must support:

```text
loading
success
empty
error
partial/optional fields
```

---

# 30. CMS / DATA PRINCIPLE

The frontend is a presentation layer over real project data.

Do not hard-code records that already exist in the backend.

---

# 31. CONTENT INTEGRITY

Never invent:

```text
statistics
awards
history
team biographies
program claims
event details
pricing
testimonials
```

unless explicitly supplied/approved.

---

# 32. RESPONSIVE SYSTEM

Every desktop composition must have an intentional mobile composition.

The design principle is:

```text
same brand
different composition
```

---

# 33. RESPONSIVE PRIORITY

When space is constrained:

```text
retain hierarchy
retain information
retain action
remove decoration
```

---

# 34. MOBILE

Mobile is a first-class experience.

Required checks:

```text
navigation
hero
podium
typography
cards
forms
images
CTA
footer
```

---

# 35. MOTION

Motion communicates:

```text
hierarchy
continuity
depth
interaction
```

It must not communicate:

```text
technical capability for its own sake
```

---

# 36. MOTION HIERARCHY

Conceptual:

```text
Home       high
Academy    medium-high
About      medium
Events     medium
Programs   medium
Resources  low-medium
Results    low-medium
Contact    low
```

---

# 37. REDUCED MOTION

All cinematic effects are optional.

The information architecture is not.

Reduced-motion mode must preserve complete usability.

---

# 38. PERFORMANCE

Visual ambition must not require poor performance.

Protect:

```text
mobile
initial render
3D
images
fonts
animation
```

Use the existing performance specification as the numeric source of truth.

---

# 39. ACCESSIBILITY

Required:

```text
semantic HTML
keyboard navigation
visible focus
screen-reader compatibility
contrast
accessible forms
touch targets
reduced motion
```

---

# 40. SECURITY

Use #40 as the frontend hardening contract.

Core principle:

```text
frontend is untrusted
server enforces security
```

---

# 41. SEO

Public indexable routes require appropriate:

```text
title
description
canonical
heading hierarchy
social metadata
structured data where appropriate
```

Do not generate false structured data.

---

# 42. QA

Use #41 as the final device/browser/release QA contract.

Minimum visual screenshots:

```text
375×812
390×844
768×1024
1280×800
1440×900
1920×1080
```

---

# 43. AI HANDOFF

Use #42 as the implementation agent's operating manual.

The AI must:

```text
read
understand
reuse
implement
render
compare
test
refine
```

It must not randomly redesign the system.

---

# 44. IMPLEMENTATION ORDER

Recommended:

```text
1. inspect existing application
2. preserve working functionality
3. establish global tokens
4. establish global components
5. establish header/footer
6. establish route shell
7. implement responsive foundations
8. implement Home
9. implement About
10. implement Academy
11. implement Programs
12. implement Events
13. implement Results
14. implement Resources
15. implement Contact
16. implement registration/feedback relationships
17. integrate dynamic data
18. implement states
19. implement motion
20. implement podium/3D
21. optimize
22. accessibility QA
23. security QA
24. SEO QA
25. device/browser QA
26. visual regression
27. production verification
```

---

# 45. BUILD ORDER PRINCIPLE

Do not build the entire website as independent pages first.

Build:

```text
system
→
shell
→
representative page
→
page families
→
dynamic states
→
polish
```

This minimizes drift.

---

# 46. REPRESENTATIVE FIRST PAGE

Home is the best visual validation page because it exercises:

```text
typography
navigation
hero
podium
lighting
CTA
motion
responsive behavior
```

---

# 47. SECOND VALIDATION PAGE

About validates:

```text
editorial layout
long-form content
people
images
story
```

---

# 48. DATA-HEAVY VALIDATION

Events/Programs/Resources validate:

```text
cards
filters
dynamic content
empty
loading
error
detail routes
```

---

# 49. FORM VALIDATION

Contact/Registration validate:

```text
forms
validation
states
security
mobile keyboard
success/error
```

---

# 50. FINAL VISUAL TEST

Ask:

```text
Would a visitor recognize PDF without seeing the logo?
```

If not, the system has drifted.

---

# 51. FINAL MOBILE TEST

Ask:

```text
Does mobile feel intentionally designed?
```

Not:

```text
Did desktop successfully stack?
```

---

# 52. FINAL MOTION TEST

Disable animation.

Ask:

```text
Does the site still work and look complete?
```

If not, too much meaning has been placed inside motion.

---

# 53. FINAL PERFORMANCE TEST

Ask:

```text
Does the visual ambition remain smooth on realistic mobile hardware?
```

If not:

```text
reduce effect complexity
```

before reducing core usability.

---

# 54. FINAL SECURITY TEST

Ask:

```text
Can a browser user access something they should not?
```

If yes:

```text
fix the server/API boundary
```

Do not hide the problem with frontend code.

---

# 55. FINAL CONTENT TEST

Ask:

```text
Is every factual claim actually supplied or approved?
```

If not:

```text
remove or flag it
```

---

# 56. DESIGN DRIFT TEST

Look for:

```text
new fonts
new colors
new card styles
new radius
new shadows
new animations
new navigation patterns
```

If they are not documented:

```text
remove or document through proper approval
```

---

# 57. FINAL DEFINITION OF DONE

The PDF website is ready when:

```text
DESIGN
✓

ARCHITECTURE
✓

CONTENT
✓

DATA
✓

RESPONSIVE
✓

ACCESSIBILITY
✓

PERFORMANCE
✓

SECURITY
✓

SEO
✓

QA
✓

AI HANDOFF
✓
```

---

# 58. FINAL PHILOSOPHY

The objective is not:

```text
the most animated website
```

It is:

```text
the most coherent expression of PDF's identity and purpose.
```

---

# 59. FINAL EXPERIENCE

The finished site should feel like:

```text
a stage
```

when the visitor arrives,

```text
an institution
```

as they explore,

```text
a community
```

as they understand it,

and:

```text
an opportunity
```

when they are ready to act.

---

# 60. FINAL SYSTEM STATEMENT

```text
SAME DNA
+
DIFFERENT ROOMS
+
REAL CONTENT
+
REAL DATA
+
CONTROLLED MOTION
+
RESPONSIVE COMPOSITION
+
ACCESSIBLE INTERACTION
+
STRONG ENGINEERING
=
PAK DEBATE FORUM
```

---

# 61. FINAL DOCUMENT MAP

```text
00–34
Foundation, brand, architecture, components, pages, navigation, footer,
3D, motion, responsive and implementation foundations.

35
Global Design Tokens & Visual System

36
Global Component Library & Reusable UI

37
Site-Wide Page Architecture & Route System

38
Homepage / Landing Page Master Specification

39
About Page Master Specification

40
Security & Frontend Hardening Specification

41
Browser & Device QA Matrix

42
Design-to-Code AI Instructions

43
Master Project Specification
```

---

# 62. FINAL AI COMMAND

If the implementation agent reads only one document:

```text
READ #43
```

Then:

```text
READ #42
```

Then follow the dependency chain into the relevant specifications.

---

# 63. FINAL HUMAN HANDOFF

If a new developer joins the project:

```text
START WITH #43
↓
READ #42
↓
READ GLOBAL SYSTEM
↓
READ PAGE SPEC
↓
INSPECT EXISTING CODE
↓
IMPLEMENT
↓
RUN #41 QA
```

---

# 64. FINAL RULE

No new major design language should be introduced after this handoff without explicit project approval.

---

# 65. FINAL END STATE

The documentation is now complete.

The next phase is implementation.

```text
DESIGN
─────── COMPLETE

DOCUMENTATION
────────────── COMPLETE

AI HANDOFF
────────── COMPLETE

QA CONTRACT
─────────── COMPLETE

IMPLEMENTATION
────────────── NEXT
```

# END OF MASTER PROJECT SPECIFICATION
