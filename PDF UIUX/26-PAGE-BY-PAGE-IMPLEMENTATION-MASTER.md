# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 26 — PAGE-BY-PAGE IMPLEMENTATION MASTER

Status: Master page composition contract.
Depends on: all approved design, responsive, asset, component, and motion specifications.

Purpose:
Define how the approved PDF visual system is translated into complete page experiences.

This document is the bridge between:
- the global design system
- reusable components
- individual page specifications
- responsive implementation
- motion
- content/data
- the final coding-AI handoff

IMPORTANT:
This document defines composition and implementation logic.
It does not invent content that has not been supplied or approved.

---

# 0. IMPLEMENTATION PRINCIPLE

Every page must feel like part of the same product.

The site must NOT feel like:

```text
homepage = premium
events = generic dashboard
academy = unrelated template
resources = random blog
about = plain corporate page
contact = default form
```

Instead:

```text
same brand
same visual grammar
same spacing logic
same typography
same interaction language
same motion philosophy
different content purpose
```

---

# 1. PAGE SYSTEM

Every public page consists conceptually of:

```text
GLOBAL SHELL
+
PAGE HERO
+
PRIMARY CONTENT
+
SUPPORTING SECTIONS
+
PAGE CTA
+
GLOBAL FOOTER
```

Not every page requires every element.

---

# 2. GLOBAL SHELL

All public pages should share:

```text
header
navigation
main content container
footer
global typography
global color system
global motion system
```

---

# 3. HEADER

Header behavior is defined globally.

It may have states:

```text
transparent / hero
solid / scrolled
mobile
menu-open
```

Do not create a separate unrelated header for individual pages.

---

# 4. FOOTER

Footer should remain structurally consistent.

Page-specific footer variants require explicit approval.

---

# 5. PAGE BACKGROUND

Default visual language:

```text
deep black
charcoal
warm white
restrained gold
```

Pages may alternate surfaces for hierarchy.

---

# 6. PAGE HERO TYPES

There are several approved conceptual hero patterns:

```text
A — signature cinematic hero
B — editorial internal-page hero
C — listing hero
D — detail hero
E — utility/contact hero
```

---

# 7. HOMEPAGE HERO

The homepage uses:

```text
signature cinematic hero
```

with the podium as the primary visual object.

Detailed implementation is delegated to:

```text
27-HOMEPAGE-IMPLEMENTATION-SPEC.md
```

---

# 8. INTERNAL PAGE HERO

Internal pages should generally be calmer.

Typical structure:

```text
eyebrow
headline
short supporting copy
optional visual
```

Avoid duplicating the homepage's full cinematic sequence.

---

# 9. LISTING HERO

Listing pages should immediately communicate:

```text
what is being listed
why it matters
how to explore/filter it
```

---

# 10. DETAIL HERO

Detail pages should prioritize:

```text
identity
title
key metadata
primary action
```

---

# 11. UTILITY HERO

Contact/utility pages should prioritize:

```text
clarity
trust
action
```

over visual spectacle.

---

# 12. PAGE CONTAINER

Use the global container tokens.

Do not create page-specific arbitrary max-widths unless required by the composition.

---

# 13. PAGE GUTTERS

Use global responsive gutters.

See:

```text
23-RESPONSIVE-IMPLEMENTATION-SPEC.md
```

---

# 14. PAGE VERTICAL RHYTHM

Sections should use the global spacing system.

Avoid:

```text
section 1 = 200px
section 2 = 47px
section 3 = 143px
```

unless intentionally documented.

---

# 15. SECTION INTRO

A section introduction may contain:

```text
eyebrow
heading
supporting text
action
```

---

# 16. SECTION HEADING

Headings should follow the global typography hierarchy.

---

# 17. SECTION ACTION

If a section has a "View all" or equivalent action:

keep placement consistent.

---

# 18. SECTION CONTENT

Use approved reusable components wherever possible.

---

# 19. HOMEPAGE

Primary goal:

```text
establish PDF identity
create emotional impact
explain value
guide exploration
```

Primary visual anchor:

```text
podium
```

---

# 20. HOMEPAGE SECTION ORDER

Exact order is defined in:

```text
27-HOMEPAGE-IMPLEMENTATION-SPEC.md
```

This master document intentionally does not invent a final section sequence.

---

# 21. EVENTS PAGE

Primary goal:

```text
help users discover PDF events
```

Core experience:

```text
page hero
→ filters/search if required
→ event listing
→ event cards
→ pagination/load-more if required
```

---

# 22. EVENTS PAGE VISUAL PRIORITY

Event identity should be immediately scannable.

Cards should clearly expose:

```text
event image where available
title
date/time where supplied
location where supplied
status/category where supplied
primary action
```

Do not fabricate missing metadata.

---

# 23. EVENTS FILTERING

If filtering is required by the supplied product information:

filters should remain visually lightweight.

Desktop:

```text
inline/sidebar/filter bar
```

Mobile:

```text
compact filter control
→ drawer/sheet
```

---

# 24. EVENTS CARD GRID

Use the global card system.

Desktop may use a multi-column grid.

Mobile should become a single-column or intentionally compact layout according to the approved responsive specification.

---

# 25. EVENT DETAIL PAGE

Primary hierarchy:

```text
event identity
→ title
→ essential metadata
→ description/content
→ registration/action
→ supporting information
```

---

# 26. EVENT DETAIL IMAGE

If an approved event hero image exists:

use it prominently.

If not:

use the documented fallback.

Never invent a fake event photograph.

---

# 27. ACADEMY PAGE

Primary goal:

```text
explain the Academy
show available learning/program opportunities
guide users toward relevant action
```

---

# 28. ACADEMY PAGE STRUCTURE

Potential conceptual structure:

```text
hero
→ academy introduction
→ programs/offerings
→ learning benefits
→ supporting visual/story
→ CTA
```

Final sequence must follow the dedicated academy specification.

---

# 29. ACADEMY VISUAL LANGUAGE

Academy should feel:

```text
intelligent
aspirational
structured
human
premium
```

It should remain part of the PDF brand rather than looking like a separate education platform.

---

# 30. ACADEMY PROGRAM CARDS

Program cards should prioritize:

```text
program name
short description
key metadata where supplied
action
```

Do not overload cards with every piece of information.

---

# 31. PROGRAM DETAIL

Program detail pages should establish:

```text
what it is
who it is for
what it includes
how to participate/apply
```

Only show fields supported by the actual product/content model.

---

# 32. RESOURCES PAGE

Primary goal:

```text
help users find useful PDF material quickly
```

---

# 33. RESOURCES STRUCTURE

Conceptual:

```text
hero
→ categories/search
→ resource grid/list
→ pagination/load more
→ supporting CTA if applicable
```

---

# 34. RESOURCE TYPES

Potential resource types include:

```text
articles
documents
guides
videos
```

Only implement types actually supported by the product data.

---

# 35. RESOURCE CARD

Should communicate:

```text
type
title
short context
date/category where available
action
```

---

# 36. RESOURCE DETAIL

Prioritize:

```text
title
metadata
content/preview
primary action
related resources
```

---

# 37. ABOUT PAGE

Primary goal:

```text
build trust
explain identity
communicate mission
introduce people/history/impact where supplied
```

---

# 38. ABOUT PAGE VISUAL APPROACH

Use editorial storytelling.

Possible tools:

```text
large typography
photography
timeline
stat blocks
quote
team cards
```

Only use the components actually supported by the final content.

---

# 39. ABOUT PAGE WARNING

Do not turn the About page into an animation showcase.

The story is the product.

---

# 40. CONTACT PAGE

Primary goal:

```text
make contacting PDF easy
```

---

# 41. CONTACT STRUCTURE

Conceptual:

```text
hero
→ contact context
→ contact methods where supplied
→ form
→ location/details if supplied
→ footer
```

---

# 42. CONTACT FORM

Must support:

```text
default
focus
valid
invalid
submitting
success
error
```

State behavior is defined in the component/state specifications.

---

# 43. CONTACT FORM UX

Do not make the form visually complicated.

The premium look should come from:

```text
spacing
typography
surface treatment
borders
motion
```

not excessive decoration.

---

# 44. SEARCH

If global/site search exists:

search should be treated as a product feature, not a decorative field.

It needs:

```text
empty
loading
results
no-results
error
```

---

# 45. GLOBAL SEARCH

Search UI must use the same visual system.

---

# 46. 404 PAGE

The 404 page should retain PDF identity.

Recommended concept:

```text
large restrained typography
short explanation
return-home CTA
```

Avoid cartoon/error-template styling.

---

# 47. ERROR PAGES

System errors should remain calm and useful.

---

# 48. EMPTY STATES

Empty states should:

```text
explain what is empty
tell the user what they can do
remain visually consistent
```

---

# 49. LOADING STATES

Loading should never look like broken content.

Use:

```text
subtle skeleton
reserved layout
minimal animation
```

only where useful.

---

# 50. DETAIL PAGE CONSISTENCY

All detail pages should share a recognizable structure:

```text
breadcrumb/context if used
hero
metadata
main content
supporting content
related content
CTA/footer
```

Specific details vary by entity.

---

# 51. RELATED CONTENT

Related content should be based on actual relationships/data.

Do not generate arbitrary "related" items.

---

# 52. PAGE-SPECIFIC COMPONENTS

A page may introduce a unique component if:

```text
content requires it
visual design requires it
reusable abstraction is inappropriate
```

Document it before implementation.

---

# 53. REUSABLE FIRST

Before creating a new component ask:

```text
Does an existing component already solve this?
```

If yes:

reuse it.

---

# 54. VARIANT FIRST

If the difference is small:

use a component variant rather than duplicating the component.

---

# 55. DUPLICATION PROHIBITION

Do not create:

```text
EventCard
EventCard2
EventCardPremium
EventCardFinal
```

when one configurable component can represent the states.

---

# 56. PAGE DATA

Pages should consume structured data where appropriate.

Avoid hardcoding content directly into deeply nested visual components.

---

# 57. PAGE CONTENT/VIEW SEPARATION

Conceptually:

```text
data
→ page composition
→ reusable components
→ visual styling
```

---

# 58. ROUTING

Routes should map clearly to page types.

Do not duplicate page implementations solely because URLs differ.

---

# 59. DEEP LINKS

Detail pages must work when opened directly.

---

# 60. BROWSER BACK

Interactive filters/modals/routes should not create confusing browser history.

---

# 61. URL STATE

If filters/search are represented in URL state:

keep the behavior predictable.

---

# 62. RESPONSIVE PAGE RECOMPOSITION

Never simply scale the desktop layout down.

Each page must have:

```text
desktop composition
tablet composition
mobile composition
```

---

# 63. MOBILE PAGE PRIORITY

Mobile order should prioritize:

```text
identity
message
primary action
essential information
secondary content
```

---

# 64. MOBILE HERO

Hero height may shrink significantly.

The message must remain immediately understandable.

---

# 65. MOBILE PODIUM

The podium should remain a signature visual but must not consume the entire screen.

See:

```text
23-RESPONSIVE-IMPLEMENTATION-SPEC.md
18-3D-PODIUM-SPEC.md
```

---

# 66. MOBILE NAVIGATION

Use the global mobile navigation.

Do not create page-specific menus.

---

# 67. TABLET

Tablet should be treated as its own layout state when necessary.

Do not blindly choose between desktop and mobile.

---

# 68. WIDE DESKTOP

At very wide screens:

content should remain constrained.

Do not stretch text across enormous widths.

---

# 69. ULTRAWIDE HERO

The podium and key content should remain compositionally anchored.

Avoid giant empty regions caused by naive percentage positioning.

---

# 70. IMAGE RESPONSIVENESS

Follow:

```text
24-IMAGE-AND-ASSET-IMPLEMENTATION-SPEC.md
```

---

# 71. MOTION RESPONSIVENESS

Follow:

```text
25-MOTION-AND-SCROLL-IMPLEMENTATION-SPEC.md
```

---

# 72. TYPOGRAPHY RESPONSIVENESS

Typography must scale according to the global type system.

Do not manually shrink headings until they fit.

Use deliberate responsive values.

---

# 73. CONTENT LENGTH

Components must tolerate realistic content length.

Do not design only for the shortest possible title.

---

# 74. LONG TITLES

Cards and hero sections must gracefully support longer titles.

---

# 75. SHORT CONTENT

Do not make layouts look broken when content is short.

Use deliberate minimum structures rather than arbitrary whitespace.

---

# 76. ACCESSIBILITY

Every page must support:

```text
keyboard
screen reader
focus
reduced motion
responsive zoom
```

Detailed requirements are delegated to the accessibility specification.

---

# 77. PERFORMANCE

Page composition must respect:

```text
3D cost
image cost
font cost
animation cost
JavaScript cost
```

---

# 78. HOMEPAGE PERFORMANCE

Homepage may contain the richest visual experience.

Therefore it requires the strictest performance discipline.

---

# 79. INTERNAL PAGE PERFORMANCE

Internal pages should generally be lighter than the homepage.

---

# 80. PAGE TRANSITION PERFORMANCE

Do not introduce expensive global transitions.

---

# 81. SEO

Each public page must provide the appropriate:

```text
title
description
canonical behavior
social metadata
```

where supported.

---

# 82. SEMANTIC STRUCTURE

Each page should have a logical semantic hierarchy:

```text
header
nav
main
section
article
footer
```

where appropriate.

---

# 83. ONE PRIMARY H1

Avoid multiple competing H1 elements unless the content model genuinely requires a specialized semantic structure.

---

# 84. CTA HIERARCHY

Every page should have a clear primary action.

Secondary actions must remain visually secondary.

---

# 85. GOLD USAGE

Gold should identify:

```text
brand accent
primary emphasis
important interactive state
signature visual detail
```

It should not cover every component.

---

# 86. BLACK USAGE

Black/deep charcoal remains the dominant visual foundation.

---

# 87. WHITE USAGE

Warm/light text provides readable contrast and hierarchy.

---

# 88. BORDER USAGE

Borders should remain subtle.

Avoid outlining every element.

---

# 89. SHADOW USAGE

Use shadow for depth, not as decoration on every card.

---

# 90. GLASS EFFECTS

If used, glass should be restrained.

Do not turn the site into a generic glassmorphism template.

---

# 91. PAGE TRANSITIONS BETWEEN VISUAL THEMES

If a page section changes surface:

use spacing, color, and subtle motion to make the transition intentional.

---

# 92. VISUAL ANCHOR

Each page should have one clear visual anchor.

Examples:

```text
homepage → podium
event detail → event identity/image
academy → program/learning visual
about → story imagery/typography
```

---

# 93. VISUAL COMPETITION

Avoid placing multiple equally dominant visuals beside each other.

---

# 94. INFORMATION DENSITY

Premium design does not mean hiding information.

It means organizing it clearly.

---

# 95. PAGE SCANNABILITY

Users should understand the page structure through:

```text
heading scale
spacing
cards
metadata
CTA hierarchy
```

without reading every word.

---

# 96. PAGE FOOTER CTA

If a page benefits from a final CTA:

it should feel like the conclusion of the page rather than an unrelated advertisement.

---

# 97. CTA VARIANTS

Use approved variants:

```text
primary
secondary
ghost/text
```

Do not invent arbitrary button styles.

---

# 98. PAGE-SPECIFIC GOLD

A page may use more or less gold depending on its content.

The base palette remains global.

---

# 99. PAGE-SPECIFIC BACKGROUND

A page may use an approved background asset if it supports its story.

Do not assign a unique background simply to make pages look different.

---

# 100. PAGE-SPECIFIC MOTION

Unique motion should be rare.

---

# 101. PAGE SPECIFICATION DEPENDENCY

Detailed page files should override this master only when explicitly documented.

---

# 102. OVERRIDE RULE

A page-specific rule must state:

```text
what changes
why
where
desktop behavior
mobile behavior
```

---

# 103. NO SILENT OVERRIDES

The coding AI must not quietly alter global design tokens for one page.

---

# 104. DESIGN SYSTEM INTEGRITY

If a page appears impossible using the current system:

```text
flag the conflict
```

Do not silently create an incompatible design.

---

# 105. CONTENT UNKNOWN

If the actual content is not known:

```text
use a clearly marked placeholder
```

Do not invent facts.

---

# 106. ASSET UNKNOWN

If the required asset does not exist:

```text
flag ASSET REQUIRED
```

or use the documented fallback.

---

# 107. ROUTE UNKNOWN

If a page route is not established:

```text
flag ROUTE REQUIRED
```

Do not invent URLs casually.

---

# 108. FEATURE UNKNOWN

If a requested interaction is not confirmed:

```text
flag FEATURE DECISION REQUIRED
```

---

# 109. IMPLEMENTATION ORDER

For each page:

```text
1. semantic structure
2. content/data
3. layout
4. typography
5. surfaces
6. imagery
7. interaction
8. motion
9. responsive behavior
10. accessibility
11. performance
12. QA
```

---

# 110. DO NOT ANIMATE BEFORE LAYOUT

The static layout must be correct before animation is layered on.

---

# 111. DO NOT OPTIMIZE BEFORE CORRECTNESS

First establish:

```text
correct visual composition
```

then optimize without changing the design.

---

# 112. DO NOT BUILD FROM SCREENSHOT PIXELS

Reference images communicate:

```text
composition
hierarchy
mood
proportion
```

They are not instructions to hard-code every coordinate.

---

# 113. USE DESIGN TOKENS

Spacing, colors, typography, radius, and motion must reference the global token system.

---

# 114. USE COMPONENTS

Repeated patterns should use shared components.

---

# 115. USE SEMANTIC DATA

Dynamic entities should use structured data.

---

# 116. TEST REAL CONTENT

Do not validate pages only with placeholder text.

---

# 117. TEST EMPTY STATES

Every dynamic listing should be checked without content.

---

# 118. TEST ERROR STATES

Network/API failures must not destroy the visual layout.

---

# 119. TEST LOADING STATES

Loading should preserve expected geometry.

---

# 120. TEST LONG CONTENT

Use long titles, long descriptions, and multiple metadata fields during QA.

---

# 121. TEST MOBILE FIRST

For each component:

```text
mobile
→ tablet
→ desktop
→ wide desktop
```

should be checked.

---

# 122. TEST DESKTOP DETAIL

Then inspect:

```text
spacing
alignment
visual balance
motion
```

---

# 123. TEST ACCESSIBILITY

Then inspect:

```text
keyboard
focus
contrast
reduced motion
screen reader semantics
```

---

# 124. TEST PERFORMANCE

Then inspect:

```text
loading
image weight
3D
animations
layout shifts
```

---

# 125. PAGE COMPLETION CRITERIA

A page is not complete merely because:

```text
it renders
```

It is complete when:

```text
design
+
content
+
responsive behavior
+
motion
+
accessibility
+
performance
+
states
```

are all verified.

---

# 126. FINAL PAGE QUALITY BAR

Every page should feel like it was designed by the same team.

If a component looks like it came from a different website:

```text
stop
```

and reconcile it with the design system.

---

# 127. AI IMPLEMENTATION CHECKLIST

Before implementing a page, AI must answer:

```text
What page type is this?
What is the visual anchor?
What global components are used?
What unique components are required?
What assets are approved?
What data is required?
What are desktop/mobile compositions?
What motion is approved?
What states exist?
What fallback exists?
What accessibility requirements apply?
What performance risks exist?
```

---

# 128. FINAL PAGE RULE

The coding AI should not treat these specifications as inspiration.

They are implementation constraints.

Where a specification is explicit:

```text
follow it.
```

Where a specification intentionally leaves a decision open:

```text
flag the decision.
```

Do not silently invent a new visual language.

# END OF PAGE-BY-PAGE IMPLEMENTATION MASTER
