# PAK DEBATE FORUM (PDF) — 42 DESIGN-TO-CODE AI INSTRUCTIONS

Status: FINAL AI HANDOFF.
Priority: ⭐⭐⭐ Highest implementation guidance.
Purpose: Tell an AI coding agent exactly how to turn the approved PDF design documentation and visual references into the actual website without visual or architectural drift.

---

# 0. READ THIS FIRST

You are not being asked to invent a website.

You are being asked to implement an already-designed system.

Your job is:

```text
UNDERSTAND
→
REUSE
→
IMPLEMENT
→
RENDER
→
COMPARE
→
QA
→
REFINE
```

Your job is NOT:

```text
invent
→
modernize randomly
→
replace
→
simplify because it is easier
```

---

# 1. PROJECT IDENTITY

The organization is:

**Pak Debate Forum (PDF)**

The Academy is:

**Pak Debate Forum Academy**

The Academy is a major education/training arm of PDF.

Do not treat the Academy as an unrelated company.

---

# 2. PRODUCT CONTEXT

The website combines:

```text
organization
community
debate
academy
programs
events
resources
results
registration
feedback
contact
```

The homepage represents the entire organization.

---

# 3. OFFICIAL CONTENT RULE

Use actual approved project content.

Known official core team:

```text
Abdul Wassay — Co-founder
Hamza Javed — Co-founder
Jawad Ahmad — Vice President
```

Do not invent additional biographies, achievements, statistics, history, or credentials.

Temporary placeholder content may exist only where the project explicitly permits it.

---

# 4. SOURCE-OF-TRUTH ORDER

Use this order:

```text
1. Final master specification #43
2. #42 AI instructions
3. Existing approved design specifications #00–39
4. Approved visual reference images
5. Existing application architecture and real data
6. Official project content
7. Small implementation judgment
```

If sources conflict:

- preserve the higher-authority source
- do not silently invent a compromise
- if the conflict changes architecture, stop and flag it

---

# 5. MAJOR AMBIGUITY RULE

If an ambiguity affects:

```text
brand
page architecture
data architecture
navigation
authentication
core interaction
major visual identity
```

DO NOT GUESS.

Ask for clarification.

For small details such as:

```text
tiny spacing adjustment
minor alignment
small transition
```

use the established system.

---

# 6. VISUAL NORTH STAR

The PDF world is:

```text
deep black
+
warm white
+
restrained gold
+
editorial typography
+
architectural geometry
+
cinematic light
+
controlled motion
+
generous negative space
```

---

# 7. PREMIUM RULE

The site should look premium because it is controlled.

Do not equate premium with:

```text
glow everywhere
glassmorphism
huge gradients
rounded everything
particles everywhere
3D everywhere
```

---

# 8. GOLD RULE

Gold is scarce.

Use it for:

- important accents
- CTAs
- eyebrows
- selected emphasis
- small borders
- key statistics
- cinematic highlights

Do not turn ordinary body text or entire surfaces gold.

---

# 9. BLACK RULE

Do not make every surface pure `#000`.

Black must have depth through:

```text
surface hierarchy
lighting
subtle borders
shadows
image contrast
```

---

# 10. TYPOGRAPHY RULE

Use only approved global fonts and type roles.

Never introduce a new font because it looks good in one section.

Typography should carry much of the visual identity.

---

# 11. COMPONENT RULE

Before creating a component:

```text
Does a reusable component already exist?
```

If yes:

```text
reuse it
```

If the behavior is slightly different:

```text
create a documented variant
```

Do not duplicate near-identical components.

---

# 12. TOKEN RULE

Use global tokens for:

```text
colors
typography
spacing
radius
shadows
motion
breakpoints
layers
```

Do not scatter arbitrary values throughout the code.

---

# 13. ANTI-DRIFT RULE

Do NOT independently add:

```text
new fonts
new brand colors
random gradients
random glows
random shadows
random rounded cards
random animations
random decorative shapes
random icon styles
```

unless an approved specification explicitly requires them.

---

# 14. REFERENCE IMAGE RULE

Reference images communicate:

```text
composition
hierarchy
mood
proportion
material
lighting
visual rhythm
```

They are not permission to copy unrelated content.

Use the actual PDF logo/assets and actual project content.

---

# 15. SCREENSHOT INTERPRETATION

When implementing from a reference image, identify:

```text
1. page structure
2. container width
3. dominant object
4. typography hierarchy
5. image placement
6. negative space
7. CTA hierarchy
8. lighting
9. motion implication
10. responsive transformation
```

Then implement the system, not a literal flattened screenshot.

---

# 16. HOMEPAGE

Home is the most cinematic page.

Its dominant visual object is the podium.

The podium is a brand object representing:

```text
voice
argument
presence
leadership
competition
public expression
```

---

# 17. PODIUM IMPLEMENTATION

Preferred hierarchy:

```text
interactive 3D
→
optimized static render
→
poster image
→
dark branded fallback
```

Do not make the page unusable if WebGL fails.

---

# 18. PODIUM MOBILE

The mobile podium must be smaller and intentionally composed.

Do not simply shrink the desktop object until it becomes unreadable.

If necessary:

```text
desktop: side-dominant
tablet: balanced
mobile: supporting visual
```

---

# 19. PODIUM BRANDING

Use the approved logo asset.

Do not redraw or distort it.

The Academy text may appear where the approved podium design calls for it.

---

# 20. HERO RULE

The visitor must understand the purpose of PDF without waiting for animation.

Motion enhances the hero; it must not deliver essential information.

---

# 21. SCROLL RULE

Use scroll-driven effects only where they reinforce:

```text
depth
continuity
hierarchy
storytelling
```

Do not create scroll effects merely because scroll libraries are available.

---

# 22. INNER PAGES

Home is cinematic.

About is:

```text
editorial
story-led
human
institutional
```

Events is:

```text
discovery
participation
energy
```

Academy is:

```text
aspirational
educational
action-oriented
```

Resources is:

```text
editorial
knowledge-focused
calm
```

Contact is:

```text
direct
human
trustworthy
```

---

# 23. PAGE CONSISTENCY

Pages should feel like:

```text
same world
different room
```

Not:

```text
same exact template everywhere
```

---

# 24. GLOBAL SHELL

Public pages should inherit:

```text
GlobalHeader
main
GlobalFooter
```

with the global design system.

---

# 25. NAVIGATION

Use the approved route architecture.

Do not create alternate navigation labels without approval.

The public navigation should remain concise even though the application contains more destination pages.

---

# 26. LEGACY FUNCTIONALITY

The visual redesign must preserve working functionality.

Do not replace real:

```text
D1-backed data
events
programs
registrations
feedback
resources
coaches
admin CRUD
```

with static mock content.

---

# 27. DATA-DRIVEN UI

Build UI against real data contracts.

For each dynamic entity, account for:

```text
loaded
empty
error
partial/optional data
```

---

# 28. LOADING

Use reserved layout and subtle skeletons where useful.

Do not create a dramatic loading animation that delays content.

---

# 29. EMPTY

An empty state must explain:

```text
what is empty
why it may be empty
what the user can do next
```

---

# 30. ERROR

Errors should be understandable.

Never expose raw stack traces or database errors.

---

# 31. CONTENT LENGTH

Design for real content.

Test:

```text
short title
long title
short description
long description
missing image
many items
few items
```

---

# 32. IMAGES

Every image must have a reason.

Use approved imagery and consistent crops.

Do not fill empty areas with random stock photos.

---

# 33. RESPONSIVE PRINCIPLE

Mobile is not:

```text
desktop but smaller
```

It is:

```text
same identity
different composition
```

---

# 34. RESPONSIVE IMPLEMENTATION

Every major section must explicitly answer:

```text
desktop
tablet
mobile
```

before implementation is considered complete.

---

# 35. MOBILE PRIORITY

When space becomes constrained:

```text
retain hierarchy
retain content
retain action
remove decoration
```

---

# 36. HORIZONTAL OVERFLOW

There must be no accidental horizontal scrolling.

---

# 37. TABLET

Do not force desktop layout onto tablet if it becomes cramped.

---

# 38. ULTRAWIDE

Do not stretch text to the full screen.

Use global containers.

---

# 39. ACCESSIBILITY

All components must support:

```text
semantic HTML
keyboard
focus
screen readers
contrast
reduced motion
```

---

# 40. HOVER

Hover is enhancement only.

No important information may exist only on hover.

---

# 41. FOCUS

Focus must be visible on dark backgrounds.

---

# 42. FORMS

Use:

```text
label
input
validation
error
submitting
success/error result
```

Do not rely only on placeholder text.

---

# 43. REDUCED MOTION

When reduced motion is enabled:

```text
remove/reduce transforms
disable parallax
shorten transitions
show content immediately
```

---

# 44. PERFORMANCE

Visual ambition must not destroy performance.

Especially protect:

```text
mobile
initial load
3D
images
fonts
animations
```

---

# 45. 3D PERFORMANCE

Use:

```text
lazy initialization
reasonable geometry
compressed assets
device-aware quality
fallback
```

Do not render unnecessary 3D on every page.

---

# 46. IMAGE PERFORMANCE

Use:

```text
responsive images
appropriate dimensions
lazy loading below fold
optimized formats where supported
```

---

# 47. ANIMATION PERFORMANCE

Prefer:

```text
transform
opacity
clip-path where appropriate
```

Avoid animating expensive layout properties continuously.

---

# 48. PAGE TRANSITIONS

Keep global route transitions short and consistent.

Do not make every route feel like a cinematic intro.

---

# 49. SEO

Every public indexable page needs:

```text
meaningful title
description
canonical
appropriate heading hierarchy
social metadata where configured
```

Do not duplicate metadata blindly.

---

# 50. SECURITY

Never expose:

```text
secrets
admin credentials
private tokens
private data
```

Frontend validation is not security.

Server-side validation remains mandatory.

---

# 51. ANALYTICS

Track meaningful product actions.

Do not capture sensitive form contents.

---

# 52. AI IMPLEMENTATION LOOP

For every major page:

```text
1. Read its page specification.
2. Read global tokens.
3. Read global components.
4. Read route architecture.
5. Inspect existing implementation.
6. Inspect approved assets.
7. Implement structure.
8. Implement responsive layout.
9. Implement states.
10. Implement motion.
11. Render screenshots.
12. Compare with references.
13. Fix hierarchy.
14. Run accessibility checks.
15. Run performance checks.
16. Repeat until stable.
```

---

# 53. DO NOT POLISH TOO EARLY

Build in this order:

```text
structure
→
responsive
→
content
→
visual tokens
→
interaction
→
motion
→
3D
→
performance
→
polish
```

---

# 54. SCREENSHOT REVIEW

The AI must render at minimum:

```text
375×812
390×844
768×1024
1280×800
1440×900
1920×1080
```

---

# 55. VISUAL REVIEW QUESTIONS

Ask:

```text
Is the headline dominant enough?
Is text too small?
Is the podium too large?
Is gold too loud?
Is black too flat?
Are sections too crowded?
Is there enough negative space?
Are cards overused?
Does mobile feel designed?
```

---

# 56. COMPONENT REVIEW

Ask:

```text
Could this use an existing component?
Could this be a variant?
Did I introduce a new token?
Did I duplicate code?
```

---

# 57. DESIGN REVIEW

Ask:

```text
Does this look like PDF?
Does it belong to the same world?
Does it preserve the intended page personality?
```

---

# 58. AI STOP CONDITIONS

Stop and request clarification when:

```text
brand identity is ambiguous
navigation conflicts
content conflicts
data model conflicts
a major page section is undefined
a new major interaction is required
a reference contradicts a written specification
```

Do not silently invent a new architecture.

---

# 59. AI MAY DECIDE

Small details may be chosen using the existing system:

```text
minor spacing
small alignment
micro-transition
exact image crop
minor breakpoint interpolation
```

provided they do not contradict an approved rule.

---

# 60. AI MUST NOT DECIDE

The AI must not independently redefine:

```text
brand colors
font families
logo
navigation architecture
page purpose
data model
authentication
major 3D concept
major animation system
organization facts
```

---

# 61. FINAL DEFINITION OF DONE

A page is done only when:

```text
structure ✓
content ✓
responsive ✓
components ✓
states ✓
accessibility ✓
motion ✓
performance ✓
SEO ✓
security ✓
visual QA ✓
```

---

# 62. FINAL AI MINDSET

Think like:

```text
senior product engineer
+
design-system engineer
+
frontend architect
+
visual QA reviewer
```

not:

```text
AI website generator
```

---

# 63. MOST IMPORTANT RULE

When in doubt:

```text
PRESERVE THE SYSTEM.
DO NOT INVENT A NEW ONE.
```

# END OF DESIGN-TO-CODE AI INSTRUCTIONS
