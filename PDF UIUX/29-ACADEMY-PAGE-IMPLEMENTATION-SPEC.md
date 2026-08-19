# PAK DEBATE FORUM (PDF) — 29 ACADEMY PAGE IMPLEMENTATION SPECIFICATION

Status: Dedicated Academy experience implementation contract.

Purpose:
Define the Academy page as a premium learning/development experience inside the PDF ecosystem.

The Academy must feel:
- intelligent
- structured
- aspirational
- human
- rigorous
- premium
- distinctly PDF

It must NOT look like a generic LMS, tutoring marketplace, school portal, or SaaS dashboard.

This specification governs:
- information architecture
- visual hierarchy
- course/program presentation
- learning discovery
- cards
- detail views
- progress states where applicable
- motion
- responsive behavior
- accessibility
- content/data integrity
- performance
- QA

Use together with the global design system and all previously approved PDF specifications.

---

# 1. ACADEMY ROLE IN THE PDF ECOSYSTEM

The homepage establishes the PDF identity.

Events establish participation.

Academy establishes development.

Resources establish knowledge.

The Academy should answer:

```text
What can I learn here?
Who is it for?
What will I gain?
How do I begin?
```

---

# 2. EXPERIENCE CHARACTER

The Academy should communicate:

```text
discipline
growth
confidence
intellectual development
practice
community
progress
```

Avoid visual clichés such as:

- generic graduation caps
- stock classrooms
- excessive chalkboard imagery
- generic education illustrations
- childish gamification
- overly corporate SaaS dashboards

---

# 3. VISUAL RELATIONSHIP TO HOMEPAGE

Retain:

- deep black foundation
- warm off-white typography
- restrained gold accents
- premium spacing
- editorial typography
- subtle depth
- controlled motion

Reduce:

- cinematic hero intensity
- large 3D spectacle
- dramatic spotlighting

The podium belongs primarily to the homepage.

---

# 4. ACADEMY PAGE NARRATIVE

Recommended journey:

```text
IDENTITY
↓
WHAT THE ACADEMY IS
↓
LEARNING PATHWAYS
↓
PROGRAMS / COURSES
↓
HOW LEARNING WORKS
↓
WHY IT MATTERS
↓
SUPPORTING PROOF / INFORMATION
↓
START LEARNING
```

Only include sections supported by the actual Academy product.

---

# 5. PAGE SHELL

Use:

```text
GLOBAL HEADER
ACADEMY HERO
INTRODUCTION
PROGRAM/PATHWAY DISCOVERY
PROGRAM/CURRICULUM CONTENT
LEARNING MODEL
OPTIONAL FACULTY/MENTORS
OPTIONAL TESTIMONIALS/IMPACT
FINAL CTA
GLOBAL FOOTER
```

Do not add sections simply to make the page longer.

---

# 6. ACADEMY HERO

The Academy hero should be visually strong but calmer than the homepage.

Primary hierarchy:

```text
eyebrow
H1
supporting copy
primary CTA
approved visual
```

The H1 must immediately identify the Academy.

---

# 7. HERO VISUAL OPTIONS

Preferred possibilities:

- approved Academy photography
- sophisticated abstract educational imagery
- typography-led composition
- subtle architectural/debate imagery
- restrained PDF visual motif

Do not introduce a second competing brand mascot/object without approval.

---

# 8. HERO BACKGROUND

Default:

```text
near-black
subtle tonal variation
restrained warm light
```

Avoid:
- loud gradients
- neon
- excessive particles
- generic AI-generated education imagery

---

# 9. HERO HEIGHT

The Academy hero should establish the page without forcing a long cinematic intro.

Approximate goal:

```text
short-to-medium hero
```

The user should reach learning content quickly.

---

# 10. HERO MOBILE

On mobile:

- heading remains dominant
- copy remains concise
- CTA remains visible
- visual moves into the natural content flow
- no oversized decorative object

---

# 11. ACADEMY PRIMARY CTA

CTA must correspond to actual functionality.

Possible conceptual actions:

```text
Explore Programs
Start Learning
View Courses
Apply
Join Academy
```

Use only the action the product actually supports.

---

# 12. ACADEMY INTRODUCTION

Immediately after the hero, explain the Academy in practical terms.

The section should answer:

```text
What is it?
Who is it for?
What does it provide?
```

Keep copy concise.

---

# 13. INTRODUCTION LAYOUT

Desktop:

Possible:
- editorial split
- large statement + supporting copy
- text/image composition

Mobile:

stack deliberately.

Do not compress desktop columns until they become unreadable.

---

# 14. LEARNING PATHWAYS

If Academy has distinct pathways, represent them clearly.

Examples conceptually:

```text
beginner
intermediate
advanced
competition preparation
```

Only use actual categories.

---

# 15. PATHWAY DESIGN

Each pathway should communicate:

```text
name
purpose
target learner
next action
```

Optional:
- duration
- level
- number of modules

Only if actual data exists.

---

# 16. PATHWAY CARDS

Cards should feel editorial rather than software-dashboard-like.

Preferred visual anatomy:

```text
small label
title
short explanation
metadata
arrow/action
```

---

# 17. CARD VISUAL STYLE

Use:

- dark surface
- subtle border
- controlled gold accent
- strong typography
- generous whitespace

Avoid:
- excessive icons
- gradients on every card
- glassmorphism everywhere

---

# 18. CARD HOVER

Desktop:

- subtle lift
- small image movement
- accent shift
- arrow movement

Do not rotate cards.

---

# 19. MOBILE CARD

No hover dependency.

Press state should be obvious.

Touch target must be generous.

---

# 20. PROGRAM / COURSE DISCOVERY

If the Academy contains courses/programs, discovery must be simple.

Possible controls:

- category
- level
- topic
- duration
- search

Only expose real data dimensions.

---

# 21. COURSE GRID

Desktop may use:

```text
2–3 columns
```

depending on content density.

---

# 22. COURSE LIST

A list may be preferable if programs contain heavy metadata.

Choose based on information architecture, not visual fashion.

---

# 23. COURSE CARD CONTENT

Potential fields:

```text
image
category
title
summary
level
duration
instructor
status
CTA
```

Only display fields actually available.

---

# 24. COURSE CARD HIERARCHY

Recommended:

```text
title
→ purpose
→ essential metadata
→ action
```

The card should not become a wall of metadata.

---

# 25. COURSE IMAGE

Use approved Academy imagery.

Images should support the subject.

Do not use random stock imagery.

---

# 26. IMAGE CONSISTENCY

Maintain one visual crop system.

Important subjects should remain visible.

---

# 27. COURSE STATUS

If supported:

```text
available
upcoming
in progress
completed
closed
```

Only implement real statuses.

---

# 28. STATUS DESIGN

Status should be communicated with:

- text
- badge
- shape
- optional color

Never color alone.

---

# 29. SEARCH

If Academy search exists:

search should focus on Academy content.

Do not confuse it with site-wide search unless explicitly designed as such.

---

# 30. SEARCH STATES

Support:

```text
default
focus
typing
loading
results
no results
error
clear
```

---

# 31. FILTERS

If supported, filters should be:

- understandable
- minimal
- useful
- data-driven

Do not expose every database field as a filter.

---

# 32. MOBILE FILTERS

On mobile:

```text
search
+
Filter button
```

Filters can open in a sheet/drawer.

---

# 33. FILTER ACCESSIBILITY

Support:

- keyboard navigation
- focus
- selected state
- close behavior
- Escape
- touch targets

---

# 34. LEARNING MODEL SECTION

If relevant, explain how Academy learning works.

Potential structure:

```text
Learn
Practice
Receive feedback
Compete / apply
Improve
```

Only use the actual Academy methodology.

---

# 35. LEARNING MODEL VISUAL

This section can use a restrained process diagram or numbered sequence.

Avoid over-animated infographics.

---

# 36. PROCESS MOTION

Process items may reveal sequentially as the user scrolls.

Animation must remain understandable with motion disabled.

---

# 37. CURRICULUM

If curriculum is public:

show its structure clearly.

Possible:

```text
module
lesson
practice
assessment
```

Only where supported.

---

# 38. CURRICULUM DISPLAY

Avoid exposing an entire curriculum as an enormous accordion on the homepage.

Use progressive disclosure.

---

# 39. PROGRAM DETAIL PAGE

If individual programs have pages, they should support:

```text
program identity
summary
outcomes
curriculum
requirements
duration
instructor/mentor
CTA
```

Only where actual data exists.

---

# 40. PROGRAM HERO

Program detail hero should be more focused than the Academy landing page.

It should immediately establish:

```text
program name
level/category
core promise
primary action
```

---

# 41. PROGRAM CTA

Use the real action:

```text
Enroll
Apply
Start
Register
Contact
```

Never imply self-service enrollment if the actual process is manual.

---

# 42. ENROLLMENT STATES

If enrollment is supported:

```text
available
submitting
success
closed
full
error
```

must have intentional UI.

---

# 43. PROGRAM OUTCOMES

If outcomes are provided:

make them scannable.

Avoid vague claims.

Use supplied/approved wording.

---

# 44. PROGRAM REQUIREMENTS

If requirements exist:

show them clearly before the CTA.

---

# 45. PROGRAM DURATION

If duration is known:

format consistently.

Do not estimate duration from curriculum size.

---

# 46. INSTRUCTORS / MENTORS

If the Academy has instructors:

reuse global person/profile components.

Potential information:

```text
name
role
short bio
photo
```

Only show approved/public information.

---

# 47. INSTRUCTOR VISUALS

Do not create artificial portraits.

Use approved photographs or branded fallback.

---

# 48. TESTIMONIALS

Testimonials may be used only when supplied and approved.

Never fabricate student quotes.

---

# 49. IMPACT METRICS

Metrics may be used only when verified.

Examples conceptually:

```text
students
programs
events
countries
```

Never invent values.

---

# 50. TRUST CONTENT

Potential trust signals:

- faculty
- partner organizations
- competition results
- verified outcomes
- community activity

Only use real supplied information.

---

# 51. ACADEMY STORY

If Academy has an origin/story:

use an editorial story section.

It should add meaning rather than repeat the hero.

---

# 52. VISUAL STORYTELLING

Use:

- large image
- quote
- short narrative
- timeline

only where supported.

---

# 53. FINAL CTA

The final CTA should be stronger than ordinary section links.

It should answer:

```text
What should I do now?
```

---

# 54. FINAL CTA VISUAL

Use:

- dark premium surface
- restrained gold
- large statement
- clear action

Do not recreate the homepage podium.

---

# 55. FOOTER

Use the global footer.

---

# 56. ACADEMY MOTION PHILOSOPHY

Academy motion should feel:

```text
intentional
intellectual
calm
progressive
```

Avoid:
- bouncy education animations
- excessive counters
- spinning icons
- constant floating objects

---

# 57. HERO ENTRANCE

Suggested:

```text
background
→ eyebrow
→ heading
→ supporting copy
→ CTA
→ visual
```

Short, controlled timing.

---

# 58. SECTION REVEALS

Use subtle reveal when entering viewport.

Suggested properties:

- opacity
- small translate
- slight blur only where performance permits

Avoid large movement.

---

# 59. CARD STAGGER

Use a short stagger.

Do not make the user wait for a grid to appear.

---

# 60. COURSE HOVER

Use subtle:

```text
image scale
border/accent
arrow movement
```

---

# 61. PROGRESS ANIMATION

If actual learning progress exists:

progress may animate when first displayed.

It must reflect real values.

Never animate from 0 to a fake value merely for visual effect.

---

# 62. GAMIFICATION

Do not add gamification unless the product actually supports it.

No fake:

- badges
- points
- streaks
- ranks
- XP

---

# 63. DASHBOARD BOUNDARY

If students have authenticated dashboards, do not confuse the public Academy landing page with the dashboard.

Public Academy:
```text
discover
understand
choose
```

Student dashboard:
```text
track
learn
submit
progress
```

These are different experiences.

---

# 64. AUTHENTICATED STATES

If Academy content changes after login:

clearly distinguish:

```text
public
logged-in
```

Do not expose private data in public UI.

---

# 65. ACCESSIBILITY

Must support:

- semantic headings
- keyboard navigation
- visible focus
- adequate contrast
- meaningful link names
- alt text
- reduced motion
- screen-reader-friendly status

---

# 66. SEMANTIC STRUCTURE

Use one logical H1.

Use heading hierarchy according to content.

Do not use headings purely for visual sizing.

---

# 67. COURSE CARD ACCESSIBILITY

Interactive cards must have meaningful accessible names.

Avoid nested links/buttons that create confusing focus order.

---

# 68. REDUCED MOTION

Disable or simplify:

- large scroll reveals
- parallax
- image zoom
- continuous effects

Keep content visible.

---

# 69. RESPONSIVE ARCHITECTURE

Academy is responsive by composition, not by shrinking.

---

# 70. DESKTOP

Desktop may use:

- editorial splits
- multi-column program grids
- large typography
- larger imagery

---

# 71. TABLET

Tablet may reduce:

- columns
- image scale
- horizontal spacing

without immediately becoming mobile.

---

# 72. MOBILE

Mobile should prioritize:

```text
title
purpose
action
program discovery
```

---

# 73. MOBILE HERO

Do not use an oversized hero image that pushes the Academy content too far down.

---

# 74. MOBILE PROGRAM CARDS

Use one column by default unless a two-column composition remains genuinely readable.

---

# 75. MOBILE FILTERS

Use a compact filter trigger.

Do not expose a desktop filter bar squeezed into the viewport.

---

# 76. MOBILE CURRICULUM

Accordions/expanders may be used if the content is long.

Ensure:

- clear expanded state
- keyboard accessibility
- no hidden content that is required to understand the program

---

# 77. MOBILE CTA

Primary CTA must remain easy to reach.

---

# 78. WIDE DESKTOP

Constrain the Academy content width.

Do not let text lines become excessively long.

---

# 79. TYPOGRAPHY

Use the global PDF typography system.

Hierarchy:

```text
Academy H1
section headings
program titles
metadata
body
labels
```

---

# 80. COLOR SYSTEM

Base:

```text
near-black
charcoal
warm white
gold accent
```

Additional semantic colors only when defined globally.

---

# 81. GOLD DISTRIBUTION

Gold should emphasize:

- CTA
- active state
- selected pathway
- important accent
- small dividers/details

Do not make every heading gold.

---

# 82. BACKGROUND DEPTH

Use subtle surface changes between sections.

Do not make every section a different gradient.

---

# 83. IMAGE TREATMENT

Photography may receive:

- dark overlay
- restrained warm grading
- consistent crop
- subtle border/radius

Do not over-process every image.

---

# 84. NO STOCK-IMAGE FEEL

Approved imagery should feel connected to PDF's real identity.

---

# 85. ICON SYSTEM

Use the global icon library.

Do not mix outlined, filled, cartoon, and 3D icon styles.

---

# 86. BUTTON SYSTEM

Reuse global button variants.

---

# 87. CARD SYSTEM

Academy cards should use the shared card architecture with Academy-specific variants only where needed.

---

# 88. COMPONENT INVENTORY

Potential components:

```text
AcademyHero
AcademyIntro
LearningPathway
ProgramGrid
ProgramCard
CourseCard
AcademyFilters
LearningModel
Curriculum
InstructorCard
OutcomeBlock
TestimonialBlock
AcademyCTA
```

This is an inventory, not a requirement to create every component.

---

# 89. COMPONENT VARIANTS

Prefer:

```text
ProgramCard variant="featured"
ProgramCard variant="compact"
```

over duplicated components.

---

# 90. DATA SEPARATION

Content/data must not be hard-coded into purely presentational components.

---

# 91. DATA MODEL — CONCEPTUAL

A program may contain:

```text
id
slug
title
summary
description
image
category
level
duration
status
instructor
outcomes
curriculum
requirements
action
```

Only fields supported by the actual architecture should be implemented.

---

# 92. PROGRAM ROUTES

Use stable slugs/routes.

Do not construct unsafe routes directly from arbitrary display strings.

---

# 93. DATA LOADING

The global Academy shell should not be blocked unnecessarily by program data.

---

# 94. LOADING STATE

Reserve layout for program cards.

Use skeletons only where helpful.

---

# 95. EMPTY STATE

If there are no programs:

explain clearly.

Do not display fake courses.

---

# 96. SEARCH NO RESULTS

Provide:

```text
No programs match your search.
Clear filters
```

where appropriate.

---

# 97. ERROR STATE

Provide a calm retry state.

Never expose backend errors.

---

# 98. IMAGE FALLBACK

Missing program image:

use approved PDF/Academy branded fallback.

---

# 99. CONTENT FALLBACK

Missing optional metadata should cause that metadata to disappear rather than displaying:

```text
N/A
Unknown
—
```

unless the product specifically requires such treatment.

---

# 100. PERFORMANCE

Academy can contain many images/cards.

Use:

- responsive images
- lazy loading below fold
- reserved image dimensions
- optimized assets
- sensible component rendering

---

# 101. INTERACTION PERFORMANCE

Filters/search should feel immediate.

Avoid unnecessary full-page rerenders.

---

# 102. ANIMATION PERFORMANCE

Prefer transform/opacity for frequent motion.

Avoid expensive layout animations.

---

# 103. VIDEO

If Academy uses video:

- do not autoplay with sound
- provide controls
- use poster imagery
- lazy-load when appropriate
- ensure mobile performance

Only use video if actually supported by content.

---

# 104. SEO — ACADEMY LANDING

Use accurate page title/description.

---

# 105. SEO — PROGRAM DETAIL

Each public program page should have unique metadata from actual program content.

---

# 106. STRUCTURED DATA

If structured data is implemented, it must represent actual public content.

Do not generate false course/provider information.

---

# 107. SOCIAL PREVIEW

Use approved imagery and real program titles.

---

# 108. 404 PROGRAM

If a program disappears:

show a useful not-found experience and link back to Academy.

---

# 109. CLOSED PROGRAM

If closed programs remain visible:

clearly communicate status and available next action.

---

# 110. APPLICATION FLOW

If application is external/manual:

make that clear.

Do not create a fake in-site enrollment flow.

---

# 111. LEARNING FLOW

If the Academy actually provides online lessons:

the public page should lead naturally into the authenticated learning environment.

---

# 112. PUBLIC VS PRIVATE CONTENT

Never expose:

- private student progress
- private submissions
- internal instructor notes
- private enrollment information

on public pages.

---

# 113. TRUST AND AUTHENTICITY

Every major claim must be traceable to approved content.

---

# 114. NO INVENTED TESTIMONIALS

This rule is absolute.

---

# 115. NO INVENTED STATISTICS

This rule is absolute.

---

# 116. NO INVENTED FACULTY

Only actual/public faculty or mentors.

---

# 117. NO INVENTED COURSES

Only actual Academy offerings.

---

# 118. CONTENT HIERARCHY

The Academy page should not bury the available learning opportunities beneath a long brand story.

---

# 119. FIRST SCROLL

The first scroll should begin answering:

```text
What can I learn?
```

---

# 120. SECOND SCROLL

The second major region should deepen:

```text
How does it work?
```

---

# 121. LOWER PAGE

Lower content should support:

```text
Why PDF?
Why this Academy?
What next?
```

---

# 122. NEGATIVE SPACE

Negative space is intentional.

Do not fill every empty area with cards or decorative objects.

---

# 123. EDITORIAL RHYTHM

Alternate:

```text
text-heavy
visual-heavy
card-based
process-based
```

where appropriate.

Avoid repeating identical 3-column grids.

---

# 124. VISUAL ANCHOR

The Academy page may use one dominant visual anchor.

Do not introduce multiple competing hero objects.

---

# 125. PODIUM USAGE

The podium can appear as a subtle brand reference if useful, but it should not dominate the Academy page.

---

# 126. GOLD LIGHT

Use gold light sparingly.

The Academy should not look like the homepage hero repeated.

---

# 127. PAGE TRANSITION FROM HOMEPAGE

Navigation should feel continuous.

The Academy should appear as entering a deeper part of the same institution.

---

# 128. BACKGROUND TRANSITIONS

Use smooth but restrained surface changes.

---

# 129. NO SCROLL JACKING

Never hijack normal scrolling.

---

# 130. NO EXCESSIVE PARALLAX

Parallax is optional and should remain subtle.

---

# 131. REDUCED MOTION FALLBACK

All essential content remains visible without animation.

---

# 132. COURSE DETAIL MOTION

Program detail may use:

```text
hero reveal
metadata settle
content reveal
```

Avoid cinematic transitions that delay access to information.

---

# 133. INTERACTION FEEDBACK

Every interactive element should have:

```text
hover
focus
active/press
disabled
```

where applicable.

---

# 134. DISABLED STATES

Disabled controls should be understandable and not misleading.

---

# 135. FORM STATES

Any Academy form must support:

```text
idle
focus
invalid
submitting
success
error
```

---

# 136. FORM ACCESSIBILITY

Every field must have a label.

Errors must be associated with the relevant field.

---

# 137. FORM VALIDATION

Validate according to actual business rules.

Do not invent restrictions.

---

# 138. MOBILE FORMS

Use appropriate mobile input types and comfortable controls.

---

# 139. CONTENT WIDTH

Long-form Academy content should remain within an editorial reading width.

---

# 140. SIDEBARS

A sidebar may be used on program detail for:

- metadata
- CTA
- curriculum navigation

only when content density justifies it.

---

# 141. MOBILE SIDEBAR

Sidebar content should move into:

```text
top metadata
accordion
sticky action
```

only where appropriate.

---

# 142. STICKY CTA

A sticky CTA can be considered for long program pages if the primary action must remain accessible.

It must not obscure content.

---

# 143. PROGRAM CURRICULUM NAVIGATION

If curriculum is long:

support efficient navigation.

Do not make users manually scroll through an enormous undifferentiated page.

---

# 144. PROGRESSIVE DISCLOSURE

Show essential information first.

Advanced details can expand.

---

# 145. ACADEMY LANDING PAGE LENGTH

Do not optimize for maximum page length.

Optimize for:

```text
understanding
discovery
confidence
action
```

---

# 146. CONTENT PRIORITY

If content becomes too long, remove repetition before reducing readability.

---

# 147. VISUAL PRIORITY

The Academy's actual programs should remain more prominent than decorative visuals.

---

# 148. QUALITY CHECK — BRAND

Ask:

- Does this look unmistakably PDF?
- Is the black/gold identity intact?
- Is it premium without being excessive?
- Does it feel intellectually serious?

---

# 149. QUALITY CHECK — LEARNING

Ask:

- Can I understand the Academy quickly?
- Can I discover programs?
- Can I tell which one is relevant to me?
- Is the next action obvious?

---

# 150. QUALITY CHECK — MOBILE

Ask:

- Is the hero compact?
- Are programs readable?
- Are filters usable?
- Are cards touch-friendly?
- Is there no horizontal overflow?

---

# 151. QUALITY CHECK — ACCESSIBILITY

Ask:

- Is there one logical H1?
- Are headings hierarchical?
- Are controls keyboard accessible?
- Is focus visible?
- Does reduced motion work?
- Is color not the only status signal?

---

# 152. QUALITY CHECK — PERFORMANCE

Ask:

- Are images optimized?
- Is below-fold content lazy-loaded?
- Does the page remain responsive?
- Are animations lightweight?
- Does content render before optional visual effects?

---

# 153. QUALITY CHECK — DATA

Ask:

- Are all programs real?
- Are all claims approved?
- Are statuses real?
- Are instructor details public?
- Are CTA destinations real?
- Are empty/error states handled?

---

# 154. FINAL DESIGN PRINCIPLE

The Academy should feel like:

```text
a place where people become better debaters
```

not:

```text
an online course catalog
```

The visual system should create aspiration.

The information architecture should create clarity.

The program system should create confidence.

The CTA should create action.

The entire experience should make the visitor feel that PDF is not merely hosting content—it is building people.

# END OF ACADEMY PAGE IMPLEMENTATION SPECIFICATION
