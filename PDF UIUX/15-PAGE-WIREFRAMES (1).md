# PAK DEBATE FORUM — DESIGN SYSTEM
# 15 — PAGE WIREFRAMES & COMPOSITION BLUEPRINT

Status: Detailed visual composition handoff
Purpose: Convert the PBF design system and site map into implementable page compositions.

This document is intentionally implementation-oriented.

It defines:
- page anatomy
- section order
- visual hierarchy
- desktop composition
- tablet composition
- mobile composition
- approximate spatial relationships
- overlap rules
- visual focal points
- podium placement
- image placement
- section transitions
- motion hooks
- responsive transformations
- content behavior
- AI implementation constraints

It does NOT invent factual organization content.

---

# 0. CORE PRINCIPLE

A wireframe is not a finished design.

It defines:

```text
WHAT exists
WHERE it exists
HOW important it is
HOW it transforms across breakpoints
WHAT visual relationship it has with neighboring elements
```

It does not prescribe exact final copy unless that copy already exists in approved project content.

---

# 1. PAGE COMPOSITION LANGUAGE

Use these spatial concepts consistently:

```text
FULL BLEED
CONTAINER
ANCHOR
OVERLAP
FLOAT
STACK
GRID
RAIL
DIVIDER
BREATHING SPACE
```

---

# 2. GLOBAL DESKTOP FRAME

Conceptual desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                        HERO ZONE                             │
│                                                              │
│     CONTENT                           VISUAL ANCHOR          │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                     SECTION / CONTENT                        │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                       CONTENT GRID                           │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                         CTA                                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                         FOOTER                               │
└──────────────────────────────────────────────────────────────┘
```

---

# 3. GLOBAL MOBILE FRAME

```text
┌─────────────────────────────┐
│ HEADER                      │
├─────────────────────────────┤
│ HERO                        │
│                             │
│ TITLE                       │
│ COPY                        │
│ CTA                         │
│                             │
│ VISUAL                      │
├─────────────────────────────┤
│ SECTION                     │
├─────────────────────────────┤
│ CONTENT                     │
├─────────────────────────────┤
│ CTA                         │
├─────────────────────────────┤
│ FOOTER                      │
└─────────────────────────────┘
```

---

# 4. IMPORTANT RESPONSIVE RULE

Desktop composition must not simply be scaled down.

For every major composition define:

```text
desktop layout
tablet adaptation
mobile layout
```

---

# 5. GLOBAL CONTAINER

All major text/content sections should align to the same global container.

Do not create arbitrary left edges.

---

# 6. GLOBAL GRID

The grid should support:

```text
12-column desktop
reduced tablet grid
single-column mobile
```

Actual token values are controlled by the layout system.

---

# 7. GLOBAL HERO GRID

Recommended conceptual desktop hero:

```text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [TEXT ZONE]                    [3D / IMAGE ZONE]          │
│                                                            │
│  eyebrow                                                     │
│  H1                                                         │
│  supporting text                                            │
│  CTA                                                        │
│                                                            │
│                    visual depth                             │
└────────────────────────────────────────────────────────────┘
```

---

# 8. HERO BALANCE

The hero should generally feel visually heavier on the visual side while keeping the textual message immediately legible.

---

# 9. HERO TEXT WIDTH

Do not allow hero copy to span the entire viewport.

Use controlled line length.

---

# 10. HERO VISUAL WIDTH

The podium/visual may extend beyond the content container.

This is intentional.

---

# 11. PODIUM OVERFLOW

The podium may visually overflow its column but must not create unwanted horizontal scrolling.

---

# 12. HERO LIGHT

The golden spotlight should be part of the visual atmosphere.

It should not become a literal bright circle behind text.

---

# 13. HERO BLACK SPACE

Black negative space is an intentional component.

Do not fill every empty region.

---

# 14. HOME — MASTER WIREFRAME

Concept:

```text
HEADER
↓
CINEMATIC HERO
↓
INTRODUCTION
↓
VALUE / IDENTITY
↓
ACADEMY PREVIEW
↓
EVENTS PREVIEW
↓
RESULTS / ACHIEVEMENT PREVIEW
↓
RESOURCES PREVIEW
↓
TRUST / IDENTITY
↓
FINAL CTA
↓
FOOTER
```

Actual sections can be omitted if not supported by approved content.

---

# 15. HOME HERO — DESKTOP

```text
┌──────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
│                                                              │
│                                                              │
│  SMALL LABEL                                                 │
│                                                              │
│  LARGE PBF HEADLINE                         ╱───────╲        │
│  2–4 lines                                  │ PODIUM │        │
│                                             │        │        │
│  supporting copy                            ╲───────╱        │
│                                                              │
│  [PRIMARY CTA] [SECONDARY]                                  │
│                                                              │
│                            GOLD LIGHT / ATMOSPHERE            │
└──────────────────────────────────────────────────────────────┘
```

---

# 16. HOME HERO — DESKTOP PROPORTION

Conceptual allocation:

```text
text: 40–45%
visual: 55–60%
```

This is a composition guide, not a hard CSS requirement.

---

# 17. HOME HERO — PODIUM

The podium should feel physically present.

It should not look like a card.

---

# 18. HOME HERO — PODIUM POSITION

Default conceptual position:

```text
right-center
slightly below visual center
```

The base may approach the bottom of the hero.

---

# 19. HOME HERO — PODIUM SCALE

Desktop podium may occupy approximately:

```text
45–70% of hero height
```

depending on camera framing.

---

# 20. HOME HERO — TEXT VERTICAL POSITION

Text should sit around the upper-middle region rather than at the absolute top.

---

# 21. HOME HERO — MOBILE

```text
┌─────────────────────────────┐
│ HEADER                      │
│                             │
│ EYEBROW                     │
│                             │
│ LARGE HEADLINE              │
│                             │
│ SUPPORTING COPY             │
│                             │
│ [CTA]                       │
│                             │
│       PODIUM                │
│      ╱─────╲                │
│      │     │                │
│      ╲─────╱                │
│                             │
└─────────────────────────────┘
```

---

# 22. HOME HERO — MOBILE PODIUM

Do not simply shrink desktop podium.

Instead:

```text
reduce camera distance
or
reframe
or
crop
```

while preserving recognizable silhouette.

---

# 23. HOME HERO — MOBILE PODIUM LAYER

The podium may sit behind the lower portion of the hero content if contrast remains safe.

---

# 24. HOME HERO — MOBILE TEXT

Text remains the first priority.

---

# 25. HOME HERO — MOBILE CTA

Primary CTA should remain visible without requiring a visual interaction with the podium.

---

# 26. HOME HERO — TABLET

Tablet may use:

```text
two-column composition
```

but with reduced podium size.

---

# 27. HOME HERO — MOTION HOOKS

Initial:

```text
background atmosphere
→
podium reveal
→
light settle
→
headline reveal
→
CTA reveal
```

Scroll:

```text
podium slight parallax
background depth
```

---

# 28. HOME HERO — NO MOTION

If reduced motion:

```text
static podium
static light
simple content fade
```

---

# 29. HOME INTRODUCTION

Composition:

```text
┌──────────────────────────────────────────────────────────────┐
│ SMALL LABEL                                                  │
│                                                              │
│ LARGE STATEMENT                     SUPPORTING TEXT          │
│                                                              │
│                                      [OPTIONAL CTA]           │
└──────────────────────────────────────────────────────────────┘
```

---

# 30. HOME INTRO — PURPOSE

Immediately answer:

```text
What is PBF?
```

without requiring the user to explore.

---

# 31. HOME INTRO — MOBILE

Stack:

```text
label
heading
text
CTA
```

---

# 32. HOME VALUE SECTION

Recommended:

```text
large heading
+
3–4 feature/value blocks
```

---

# 33. VALUE BLOCK GRID

Desktop:

```text
┌──────────┬──────────┬──────────┬──────────┐
│ VALUE 01 │ VALUE 02 │ VALUE 03 │ VALUE 04 │
└──────────┴──────────┴──────────┴──────────┘
```

Tablet:

```text
┌──────────┬──────────┐
│ VALUE 01 │ VALUE 02 │
├──────────┼──────────┤
│ VALUE 03 │ VALUE 04 │
└──────────┴──────────┘
```

Mobile:

```text
VALUE 01
VALUE 02
VALUE 03
VALUE 04
```

---

# 34. VALUE BLOCK VISUAL

Use:

```text
number / mark
heading
short text
```

Avoid excessive iconography.

---

# 35. ACADEMY PREVIEW

Composition:

```text
┌──────────────────────────────────────────────────────────────┐
│ ACADEMY                                                      │
│                                                              │
│ HEADING                             VISUAL / STRUCTURE        │
│ COPY                                                          │
│ [CTA]                                                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 36. ACADEMY PREVIEW VISUAL

Can use:

```text
typographic architecture
course cards
abstract gold lines
subtle podium motif
```

Do not repeat the Home hero exactly.

---

# 37. EVENTS PREVIEW

Recommended composition:

```text
section heading
featured event
secondary events
view all
```

---

# 38. FEATURED EVENT

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│ IMAGE / VISUAL                 EVENT INFORMATION             │
│                                                              │
│                                title                         │
│                                metadata                      │
│                                description                   │
│                                CTA                           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 39. EVENT PREVIEW MOBILE

```text
visual
title
metadata
description
CTA
```

Do not force side-by-side content on narrow screens.

---

# 40. RESULTS PREVIEW

Results preview should feel data-driven.

Example:

```text
heading
highlight/result
supporting result items
view all
```

---

# 41. RESULTS PREVIEW VISUAL

Prefer:

```text
large rank/score
+
clean typography
```

over decorative graphs unless actual data warrants them.

---

# 42. RESOURCES PREVIEW

Use a small set of selected resources.

Do not render the entire library.

---

# 43. TRUST SECTION

Possible:

```text
large statement
logos / verified metrics / testimonial
```

Only use approved evidence.

---

# 44. HOME FINAL CTA

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    LARGE STATEMENT                            │
│                                                              │
│                 supporting sentence                          │
│                                                              │
│                     [PRIMARY CTA]                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 45. HOME FINAL CTA VISUAL

Could use:

```text
soft gold radial glow
thin architectural line
subtle podium silhouette
```

No giant decorative object required.

---

# 46. ACADEMY — MASTER WIREFRAME

```text
HEADER
↓
ACADEMY HERO
↓
ACADEMY INTRO
↓
PROGRAM STRUCTURE
↓
BENEFITS
↓
LEARNING PROCESS
↓
OPTIONAL FACULTY
↓
OPTIONAL TESTIMONIALS
↓
FAQ
↓
FINAL CTA
↓
FOOTER
```

---

# 47. ACADEMY HERO DESKTOP

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│ LABEL                                                         │
│ H1                         STRUCTURED VISUAL                 │
│ COPY                       / ABSTRACT                         │
│ CTA                        / PODIUM MOTIF                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 48. ACADEMY HERO VISUAL

Less cinematic than Home.

Use controlled depth and geometry.

---

# 49. ACADEMY INTRO

Large editorial statement on left.

Supporting content on right.

---

# 50. PROGRAM STRUCTURE

Desktop:

```text
┌──────────────────────┬───────────────────────────────────────┐
│ PROGRAM / LEVEL      │ DESCRIPTION / MODULES                │
├──────────────────────┼───────────────────────────────────────┤
│ PROGRAM / LEVEL      │ DESCRIPTION / MODULES                │
├──────────────────────┼───────────────────────────────────────┤
│ PROGRAM / LEVEL      │ DESCRIPTION / MODULES                │
└──────────────────────┴───────────────────────────────────────┘
```

---

# 51. PROGRAM MOBILE

Use stacked expandable cards if content becomes long.

---

# 52. PROGRAM INTERACTION

If accordion:

```text
closed → open
```

with restrained height/opacity transition.

---

# 53. ACADEMY BENEFITS

Use 3-column desktop grid.

---

# 54. ACADEMY PROCESS

Use numbered vertical or horizontal sequence.

Desktop:

```text
01 → 02 → 03 → 04
```

Mobile:

```text
01
↓
02
↓
03
↓
04
```

---

# 55. ACADEMY FACULTY

If included:

```text
photo
name
role
short credential
```

Do not make portrait cards visually louder than program information.

---

# 56. ACADEMY FAQ

Accordion.

Avoid multiple accordions nested inside each other.

---

# 57. ACADEMY CTA

Should feel like a natural next step after understanding the program.

---

# 58. EVENTS — MASTER WIREFRAME

```text
HEADER
↓
EVENTS HERO
↓
FEATURED EVENT
↓
FILTER / SEARCH
↓
EVENT GRID
↓
PAGINATION / LOAD MORE
↓
CTA
↓
FOOTER
```

---

# 59. EVENTS HERO

Desktop:

```text
small label
large title
supporting copy
subtle visual
```

---

# 60. EVENTS HERO VISUAL

Can use:

```text
gold line geometry
abstract stage lighting
cropped podium detail
```

Avoid using the exact Home hero.

---

# 61. FEATURED EVENT

Large editorial card.

---

# 62. EVENT FILTER BAR

Desktop:

```text
[Search] [Status] [Type] [Date]
```

Only include applicable controls.

---

# 63. EVENT FILTER MOBILE

Use:

```text
[Search]
[Filters]
```

with filter drawer/sheet.

---

# 64. EVENT GRID

Desktop:

```text
┌──────────────┬──────────────┬──────────────┐
│ EVENT        │ EVENT        │ EVENT        │
├──────────────┼──────────────┼──────────────┤
│ EVENT        │ EVENT        │ EVENT        │
└──────────────┴──────────────┴──────────────┘
```

---

# 65. EVENT GRID TABLET

Two columns.

---

# 66. EVENT GRID MOBILE

One column.

---

# 67. EVENT CARD HEIGHT

Cards should accommodate variable content without ugly overflow.

---

# 68. EVENT DETAIL — MASTER

```text
HEADER
↓
BREADCRUMB / BACK
↓
EVENT HERO
↓
KEY INFORMATION
↓
OVERVIEW
↓
SCHEDULE / DETAILS
↓
RULES / ELIGIBILITY
↓
REGISTRATION
↓
RESULTS IF COMPLETED
↓
RELATED CONTENT
↓
FOOTER
```

Only include applicable sections.

---

# 69. EVENT DETAIL HERO

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ EVENT VISUAL                     EVENT TITLE                 │
│                                  STATUS                      │
│                                  DATE                        │
│                                  CTA                         │
└──────────────────────────────────────────────────────────────┘
```

---

# 70. EVENT KEY INFORMATION

Use a compact information rail:

```text
DATE
STATUS
LOCATION / FORMAT
OTHER VERIFIED METADATA
```

---

# 71. EVENT DETAIL MOBILE

Place the key action close to the title.

---

# 72. EVENT SCHEDULE

If schedule exists, use a timeline/list.

---

# 73. EVENT RULES

Use readable content blocks.

Do not compress rules into tiny cards.

---

# 74. EVENT REGISTRATION

Registration CTA may be sticky on desktop if appropriate.

Do not create an obstructive sticky CTA on mobile.

---

# 75. RESULTS — MASTER WIREFRAME

```text
HEADER
↓
RESULTS HERO
↓
FILTERS
↓
SUMMARY
↓
RESULT DATA
↓
PAGINATION
↓
FOOTER
```

---

# 76. RESULTS HERO

Minimal visual decoration.

---

# 77. RESULTS FILTER DESKTOP

```text
[Year] [Event] [Category] [Search]
```

Only applicable filters.

---

# 78. RESULTS FILTER MOBILE

Use compact filter trigger.

---

# 79. RESULTS SUMMARY

If data exists:

```text
selected event/year
summary values
```

---

# 80. RESULTS DATA DESKTOP

Use semantic table when appropriate.

---

# 81. RESULTS DATA MOBILE

Choose:

```text
horizontal scroll
```

when table comparison is important.

Or:

```text
stacked result cards
```

when records are better read individually.

---

# 82. RESULTS ROW HIERARCHY

Primary participant/team information should be visually dominant.

---

# 83. RESULTS DETAIL

If individual result pages exist, rows/cards may link to detail.

---

# 84. RESOURCES — MASTER WIREFRAME

```text
HEADER
↓
RESOURCE HERO
↓
SEARCH / FILTER
↓
FEATURED RESOURCE
↓
RESOURCE GRID
↓
PAGINATION
↓
FOOTER
```

---

# 85. RESOURCE HERO

Editorial and calm.

---

# 86. RESOURCE SEARCH

Large enough to feel useful.

---

# 87. RESOURCE FILTER

Category chips/dropdown depending on number of categories.

---

# 88. RESOURCE GRID

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

---

# 89. RESOURCE CARD

Recommended:

```text
TYPE
TITLE
SHORT DESCRIPTION
META
ACTION
```

---

# 90. FEATURED RESOURCE

One resource may receive a larger composition.

---

# 91. RESOURCE DETAIL — MASTER

```text
HEADER
↓
BREADCRUMB
↓
RESOURCE HERO
↓
CONTENT
↓
RELATED RESOURCES
↓
CTA
↓
FOOTER
```

---

# 92. RESOURCE DETAIL HERO

Use a readable title width.

---

# 93. RESOURCE CONTENT WIDTH

Long-form content should use a narrower reading column.

---

# 94. RESOURCE SIDE RAIL

Desktop may use:

```text
table of contents
metadata
download/action
```

if useful.

---

# 95. RESOURCE MOBILE

Side rail becomes:

```text
top metadata
collapsible TOC
```

where applicable.

---

# 96. ABOUT — MASTER WIREFRAME

```text
HEADER
↓
ABOUT HERO
↓
STORY
↓
MISSION
↓
VISION
↓
VALUES
↓
TEAM / PEOPLE
↓
TIMELINE
↓
PARTNERS / TRUST
↓
CTA
↓
FOOTER
```

Optional sections remain data/content dependent.

---

# 97. ABOUT HERO

Strong editorial composition.

---

# 98. ABOUT HERO VISUAL

Possible:

```text
architectural podium detail
photography
abstract gold light
```

Do not duplicate Home's exact composition.

---

# 99. ABOUT STORY

Use large statement + narrative.

---

# 100. ABOUT MISSION/VISION

Could be:

```text
MISSION
────────────
text

VISION
────────────
text
```

or a two-column composition.

---

# 101. ABOUT VALUES

Grid:

```text
01
VALUE

02
VALUE

03
VALUE

04
VALUE
```

---

# 102. ABOUT TEAM

Desktop may use asymmetrical editorial grid.

---

# 103. ABOUT TEAM MOBILE

Stack portraits/cards.

---

# 104. ABOUT TIMELINE

Desktop:

```text
YEAR ───── EVENT
      │
YEAR ───── EVENT
      │
YEAR ───── EVENT
```

Mobile:

```text
YEAR
│
EVENT
│
YEAR
│
EVENT
```

---

# 105. CONTACT — MASTER WIREFRAME

```text
HEADER
↓
CONTACT HERO
↓
CONTACT METHODS
↓
FORM + OPTIONAL LOCATION
↓
FAQ / EXPECTATIONS
↓
FOOTER
```

---

# 106. CONTACT DESKTOP

```text
┌──────────────────────────┬─────────────────────────────────┐
│ CONTACT INFORMATION      │ CONTACT FORM                    │
│                          │                                 │
│ email                    │ name                            │
│ phone                    │ email                           │
│ social                   │ subject                         │
│ location                 │ message                         │
│                          │ submit                          │
└──────────────────────────┴─────────────────────────────────┘
```

---

# 107. CONTACT MOBILE

```text
hero
methods
form
optional location
```

---

# 108. CONTACT FORM SUCCESS

Do not navigate away unnecessarily.

Use a clear success state.

---

# 109. CONTACT FORM ERROR

Preserve entered information when possible.

---

# 110. 404 WIREFRAME

```text
HEADER
↓
LARGE 404
SHORT MESSAGE
[GO HOME]
[BROWSE]
↓
FOOTER
```

---

# 111. ERROR PAGE VISUAL

Can use a subtle podium silhouette.

No giant 3D load required.

---

# 112. GLOBAL SECTION HEADER

Recommended structure:

```text
EYEBROW
H2
SUPPORTING COPY
```

---

# 113. SECTION HEADER ALIGNMENT

Default left aligned.

Centered headings should be used deliberately.

---

# 114. SECTION HEADER CENTERED

Best for:

```text
final CTA
selected feature sections
simple grids
```

---

# 115. ASYMMETRICAL SECTIONS

Use asymmetry where it creates editorial sophistication.

Do not make every section asymmetrical.

---

# 116. IMAGE + TEXT

Preferred composition:

```text
40% text
60% visual
```

or inverse depending on section.

---

# 117. IMAGE + TEXT MOBILE

Always stack intentionally.

---

# 118. IMAGE CROP MOBILE

Use a mobile-specific crop where needed.

---

# 119. DIVIDERS

Thin gold/neutral dividers may establish hierarchy.

Use low frequency.

---

# 120. GOLD RULE

Gold is a punctuation mark.

Not a background color.

---

# 121. BLACK SPACE RULE

Black space should remain visible.

---

# 122. GLOW RULE

Glow should imply light source.

Do not use glow as generic decoration.

---

# 123. SHADOW RULE

Shadows should support depth.

Avoid excessive drop shadows around every card.

---

# 124. CARD RULE

Cards should not all look like floating rectangles.

Some content can be borderless.

---

# 125. PREMIUM RULE

Premium comes from:

```text
spacing
typography
contrast
materiality
consistency
motion
```

not from adding more effects.

---

# 126. HOMEPAGE CARD VARIETY

Use a limited number of card treatments.

---

# 127. INTERIOR CARD VARIETY

Keep component language consistent.

---

# 128. BORDER RADIUS

Use global radius tokens.

No page-specific random radius values.

---

# 129. BUTTONS

Use shared button component.

---

# 130. BUTTON PLACEMENT

Buttons should visually attach to the content they act on.

---

# 131. BUTTON MOTION

Hover can use:

```text
gold shift
micro-translate
light sweep
```

depending on approved motion system.

---

# 132. BUTTON MOBILE

Touch target must remain comfortable.

---

# 133. NAVIGATION ACTIVE STATE

Use a subtle gold/typographic indication.

---

# 134. NAVIGATION HOVER

Keep it refined.

No large scale distortions.

---

# 135. MOBILE MENU

Menu opens as a coherent branded layer.

---

# 136. MOBILE MENU COMPOSITION

```text
logo
close
navigation
primary CTA
optional utility links
```

---

# 137. MOBILE MENU MOTION

```text
background fade
panel/links reveal
stagger
```

Keep it quick.

---

# 138. MOBILE MENU PODIUM

Generally do not load full 3D podium solely for the menu.

---

# 139. SCROLL POSITION

Route changes should restore/position scroll appropriately.

---

# 140. SCROLL REVEAL

Use section-level reveals.

Do not animate every paragraph separately.

---

# 141. SCROLL PARALLAX

Use sparingly.

---

# 142. HOME PARALLAX

Most appropriate around:

```text
hero
large visual sections
```

---

# 143. INTERIOR PARALLAX

Minimal.

---

# 144. REDUCED MOTION

Replace:

```text
parallax
large transforms
complex 3D movement
```

with simple opacity/instant state changes.

---

# 145. PAGE HEIGHT

Do not artificially increase height for animation.

---

# 146. SECTION EXIT

Sections should not disappear before content can be read.

---

# 147. INTERACTION PRIORITY

Interactive motion must provide feedback quickly.

---

# 148. LOADING COMPOSITION

Maintain page structure while content loads.

---

# 149. SKELETON COMPOSITION

Skeletons should resemble final geometry.

---

# 150. EMPTY STATE COMPOSITION

Use same container/typography system.

---

# 151. ERROR COMPOSITION

Do not use a completely different page template.

---

# 152. CONTENT FAILURE

If an image fails:

```text
branded fallback
```

If text fails:

```text
graceful omission
```

---

# 153. AI LAYOUT IMPLEMENTATION

The coding AI should implement pages from the wireframe in this order:

```text
1. route
2. page shell
3. container/grid
4. semantic content structure
5. responsive structure
6. visual assets
7. motion
8. 3D enhancement
9. loading/error states
10. polish
```

---

# 154. AI MUST NOT START WITH ANIMATION

Structure first.

---

# 155. AI MUST NOT START WITH 3D

Layout first.

---

# 156. AI MUST NOT START WITH DECORATION

Content hierarchy first.

---

# 157. AI MUST TEST MOBILE EARLY

Do not wait until desktop is complete.

---

# 158. AI IMPLEMENTATION CHECK

For every section ask:

```text
What is its purpose?
What is its primary content?
What is its visual anchor?
What happens on mobile?
What happens with missing data?
What happens with reduced motion?
```

---

# 159. VISUAL REFERENCE IMAGE STRATEGY

Reference images should be generated for:

```text
Home hero
Home full page
Academy hero
Academy full page
Events page
Event detail
Results
Resources
Resource detail
About
Contact
Mobile Home
Mobile interior
```

---

# 160. REFERENCE IMAGE RULE

Generated reference images are visual targets, not literal source code.

---

# 161. AI IMAGE INTERPRETATION

The coding AI should follow:

```text
wireframe
+
design tokens
+
component system
+
reference image
```

not the image alone.

---

# 162. REFERENCE IMAGE CONFLICT

If reference image conflicts with written system:

Written system wins unless the design team explicitly approves the image change.

---

# 163. FINAL WIREFRAME PRINCIPLE

The goal is not pixel-perfect coordinates.

The goal is:

```text
predictable hierarchy
+
repeatable composition
+
responsive transformation
+
clear implementation intent
```

---

# 164. PAGE COMPOSITION SUMMARY

HOME:

```text
cinematic → informative → discoverable → CTA
```

ACADEMY:

```text
identity → structure → learning → action
```

EVENTS:

```text
discover → filter → inspect → act
```

EVENT DETAIL:

```text
identify → understand → act
```

RESULTS:

```text
filter → scan → verify
```

RESOURCES:

```text
discover → filter → read
```

RESOURCE DETAIL:

```text
identify → read → continue
```

ABOUT:

```text
identity → story → trust
```

CONTACT:

```text
find → communicate → submit
```

---

# 165. MASTER MOBILE RULE

When in doubt:

```text
remove complexity
retain hierarchy
retain identity
retain action
```

---

# 166. MASTER DESKTOP RULE

When in doubt:

```text
use negative space
use hierarchy
use controlled asymmetry
avoid clutter
```

---

# 167. MASTER PODIUM RULE

The podium is:

```text
brand object
```

not:

```text
page content
```

It should enhance the environment without becoming a navigation obstacle.

---

# 168. MASTER GOLD RULE

Gold communicates:

```text
attention
importance
light
premium identity
```

Use it intentionally.

---

# 169. MASTER BLACK RULE

Black provides:

```text
depth
focus
premium contrast
```

Do not flatten the entire site into pure #000 surfaces.

---

# 170. MASTER TYPOGRAPHY RULE

Typography should carry much of the visual identity.

---

# 171. MASTER IMAGE RULE

Every image must have a reason to exist.

---

# 172. MASTER ANIMATION RULE

Every animation must have a reason to exist.

---

# 173. MASTER SECTION RULE

Every section must have a reason to exist.

---

# 174. MASTER COMPONENT RULE

Every custom component must solve a real recurring problem.

---

# 175. MASTER RESPONSIVE RULE

Every desktop decision must have a mobile consequence.

---

# 176. MASTER AI RULE

The AI must not "improve" the design by adding random UI.

---

# 177. MASTER IMPLEMENTATION RULE

Build from the system outward:

```text
tokens
→
components
→
page compositions
→
routes
→
data
→
motion
→
3D
→
optimization
```

---

# 178. FINAL WIREFRAME STANDARD

When a developer opens a page specification, they should be able to answer:

```text
What is on this page?
Why is it here?
What comes first?
What is visually dominant?
Where does the user act?
What does desktop look like?
What does mobile look like?
What happens while loading?
What happens if data is missing?
What moves?
What does not move?
What is optional?
What component should be reused?
```

If those answers are clear, the wireframe has done its job.

---

# 179. END STATE

The finished implementation should preserve the visual language across every route while allowing each page to have its own personality.

The visitor should feel:

```text
same world
different room
```

That is the intended page architecture for Pak Debate Forum.
