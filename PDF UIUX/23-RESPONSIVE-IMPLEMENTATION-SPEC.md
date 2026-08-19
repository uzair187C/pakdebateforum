# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 23 — RESPONSIVE IMPLEMENTATION SPECIFICATION

Status: Master desktop/tablet/mobile behavior contract.

Purpose:
Define how the PDF visual system transforms across viewport sizes.

Core principle:

> Mobile is a deliberate composition, not a smaller desktop.

Every important visual decision must preserve hierarchy, usability, performance, and the premium black/gold identity across screen sizes.

---

# 0. RESPONSIVE OBJECTIVE

The responsive system must preserve:

```text
brand recognition
visual hierarchy
content priority
navigation usability
CTA visibility
readability
performance
accessibility
```

while allowing layout, scale, spacing, imagery, and motion to change.

---

# 1. RESPONSIVE TIERS

Working tiers:

```text
MOBILE
TABLET
DESKTOP
WIDE
```

Initial reference ranges:

```text
mobile: < 640px
tablet: 640–1023px
desktop: 1024–1439px
wide: 1440px+
```

These are implementation defaults and may be tuned after real-device testing.

---

# 2. MOBILE-FIRST PRINCIPLE

Build the semantic content structure first.

Then progressively enhance:

```text
mobile
→ tablet
→ desktop
→ wide
```

Do not construct desktop markup that becomes impossible to maintain on mobile.

---

# 3. CONTENT ORDER

Responsive transformations may reorder visual presentation when required.

Semantic reading order must remain logical.

---

# 4. MOBILE PRIORITIES

At small widths prioritize:

1. navigation
2. page identity
3. primary content
4. primary CTA
5. supporting information
6. decorative visuals

Decorative 3D or atmospheric elements must never bury important content.

---

# 5. DESKTOP PRIORITIES

Desktop can introduce:

```text
spatial composition
overlap
large imagery
3D
multi-column layouts
asymmetric layouts
```

provided content remains understandable.

---

# 6. WIDE DESKTOP

Wide screens should increase:

```text
breathing room
visual scale
negative space
image presence
```

not simply stretch text to enormous widths.

---

# 7. CONTAINER BEHAVIOR

Default:

```text
full viewport
→ horizontal gutters
→ max-width container
```

Do not let text become excessively wide.

---

# 8. MOBILE GUTTERS

Working:

```text
20–24px
```

Use consistent global tokens.

---

# 9. TABLET GUTTERS

Working:

```text
24–32px
```

---

# 10. DESKTOP GUTTERS

Working:

```text
32–48px
```

depending on viewport.

---

# 11. TYPOGRAPHY RESPONSIVENESS

Display typography may scale fluidly.

Body text should remain comfortably readable.

Do not reduce body copy below usable sizes merely to fit more content.

---

# 12. HEADING WRAPS

Headings should be tested at:

```text
320px
360px
390px
430px
768px
1024px
1280px
1440px+
```

A visually beautiful desktop heading that creates a 5-line mobile block is not acceptable if it damages hierarchy.

---

# 13. HERO RESPONSIVENESS

Hero composition is allowed to change substantially.

Desktop:

```text
copy + visual side-by-side/overlapping
```

Mobile:

```text
copy
actions
visual
```

or another deliberate order defined by the page specification.

---

# 14. HOMEPAGE PODIUM — DESKTOP

The podium is a major visual anchor.

Desktop may allow:

```text
large scale
partial overlap
depth
parallax
light interaction
```

The object should feel integrated into the page rather than pasted into a rectangular image box.

---

# 15. HOMEPAGE PODIUM — TABLET

Reduce:

```text
object scale
overlap
parallax amplitude
```

while preserving recognizability.

---

# 16. HOMEPAGE PODIUM — MOBILE

Do not force the desktop podium composition into the phone.

Preferred model:

```text
hero copy
CTA
podium visual
```

The podium may become:

```text
smaller
centered
partially cropped
lower in the hero
```

depending on the approved final composition.

---

# 17. PODIUM MOBILE PERFORMANCE

If real-time 3D causes performance problems:

use the approved static fallback or a reduced-quality rendering mode.

The fallback must preserve the visual identity.

---

# 18. PODIUM MOBILE MOTION

Mobile should use less motion than desktop.

Possible:

```text
subtle entrance
very small scroll response
minimal pointer interaction
```

No aggressive parallax.

---

# 19. PODIUM ACCESSIBILITY

If the podium is decorative:

it should not be exposed as meaningful content to screen readers.

If it communicates information:

provide an appropriate accessible representation.

---

# 20. HERO HEIGHT

Never blindly use:

```text
height: 100vh
```

on every device.

Mobile browser chrome can make viewport-height layouts problematic.

Prefer content-driven or carefully constrained hero sizing.

---

# 21. HERO CTA

Primary CTA must remain visible and usable.

Avoid forcing users to scroll through decorative animation before accessing the primary action.

---

# 22. MOBILE NAVIGATION

Desktop navigation transforms into:

```text
brand
menu button
```

The menu opens into a deliberate dark navigation surface.

---

# 23. MOBILE NAV WIDTH

Possible:

```text
full viewport
```

or a controlled panel.

Choose the implementation that best fits the approved visual design.

---

# 24. MOBILE NAV MOTION

Recommended:

```text
opacity
clip/translate
```

Duration:

```text
~240–360ms
```

Do not make menu opening slow.

---

# 25. MOBILE NAV BODY LOCK

When the navigation overlay is open:

prevent accidental background scrolling where appropriate.

---

# 26. MOBILE NAV FOCUS

Focus must move into the menu and return to the trigger when closed.

---

# 27. MOBILE HEADER

Header should remain compact enough to preserve content area.

Working height:

```text
64–76px
```

Tune after real-device testing.

---

# 28. STICKY HEADER

If sticky:

ensure it does not cover anchored content.

---

# 29. HEADER SCROLL STATE

Potential transition:

```text
transparent/overlay
→ dark surface
```

Use a short transition.

---

# 30. DESKTOP GRID

Cards may use:

```text
2 columns
3 columns
4 columns
```

depending on content.

Never force four columns if readability suffers.

---

# 31. TABLET GRID

Typical:

```text
2 columns
```

with exceptions for compact components.

---

# 32. MOBILE GRID

Default:

```text
1 column
```

A horizontal scroller may be used intentionally for small, related collections.

---

# 33. CARD WIDTH

Avoid excessively narrow cards.

Cards should have enough width for:

```text
title
metadata
action
```

without awkward wrapping.

---

# 34. EVENT CARD RESPONSIVENESS

Desktop:

```text
image
metadata
title
action
```

Tablet:

reduce internal spacing.

Mobile:

stack naturally.

---

# 35. EVENT CARD MOBILE

Primary information order:

```text
image/status
title
date/time
location
action
```

Exact order may follow content importance.

---

# 36. RESOURCE CARD RESPONSIVENESS

Desktop can support image + content.

Mobile may use:

```text
image
content
```

or an intentionally compact list representation.

---

# 37. PROFILE CARD RESPONSIVENESS

Desktop:

grid.

Mobile:

single column unless a compact profile layout is explicitly approved.

---

# 38. PROGRAM CARD RESPONSIVENESS

Academy cards should preserve:

```text
program name
key information
action
```

without forcing excessive card height.

---

# 39. SECTION SPACING

Desktop working:

```text
96–128px
```

Mobile working:

```text
56–80px
```

Use global spacing tokens.

---

# 40. LARGE VISUAL SECTIONS

Large desktop atmospheric sections may become shorter on mobile.

Do not preserve empty vertical space solely to maintain desktop proportions.

---

# 41. ASYMMETRIC LAYOUTS

Desktop can use asymmetric compositions.

Mobile should generally resolve them into a logical single flow.

---

# 42. OVERLAPPING ELEMENTS

Desktop overlap:

```text
text over image
card over visual
podium crossing section boundary
```

Mobile overlap must be reduced if it threatens readability or touch interaction.

---

# 43. ABSOLUTE POSITIONING

Absolute positioning is appropriate for:

```text
decorative layers
controlled hero visuals
badges
background elements
```

Avoid absolute positioning for primary document flow.

---

# 44. FIXED ELEMENTS

Fixed controls should be used sparingly.

Examples:

```text
sticky header
optional floating action
```

A fixed element must never obscure essential content.

---

# 45. IMAGE RESPONSIVENESS

Every important image defines:

```text
aspect ratio
object-fit
object-position
desktop size
mobile size
loading behavior
```

---

# 46. IMAGE CROPPING

The focal subject must survive mobile cropping.

Do not blindly use:

```text
object-position: center
```

when the subject is positioned elsewhere.

---

# 47. HERO IMAGE CROPPING

Hero imagery may use different object positioning by breakpoint.

---

# 48. IMAGE QUALITY

Use responsive image sources where practical.

Do not load an enormous desktop asset at full resolution on a phone.

---

# 49. LAZY LOADING

Below-the-fold images should generally lazy-load.

Above-the-fold hero imagery should receive appropriate loading priority.

---

# 50. LAYOUT SHIFT

Reserve image dimensions/aspect ratios before the image loads.

---

# 51. BACKGROUND IMAGE RESPONSIVENESS

Background images should not become unreadable behind mobile text.

Use breakpoint-specific positioning and overlays where needed.

---

# 52. GOLD EFFECT RESPONSIVENESS

Desktop may use larger atmospheric gold light.

Mobile should reduce:

```text
glow
blur
particle density
light intensity
```

if performance or readability requires it.

---

# 53. PARTICLE SYSTEM

If used:

Desktop:

```text
low density
```

Mobile:

```text
very low density or disabled
```

Particles are optional decoration, not required branding.

---

# 54. GRAIN

Subtle grain may remain global.

If implemented through a texture/noise layer:

ensure it does not interfere with text clarity.

---

# 55. BACKGROUND GRADIENTS

Desktop may use larger gradients.

Mobile should preserve the same visual language but reduce complexity.

---

# 56. MOTION RESPONSIVENESS

Motion intensity should decrease as viewport size decreases when the interaction is decorative.

---

# 57. SCROLL REVEAL

Desktop:

```text
moderate translate + opacity
```

Mobile:

```text
smaller translate + opacity
```

---

# 58. PARALLAX

Desktop:

allowed at subtle intensity.

Tablet:

reduce.

Mobile:

usually disable or make extremely subtle.

---

# 59. HOVER

Hover behavior must not be required on touch devices.

---

# 60. TOUCH INTERACTIONS

Tap targets should be comfortable.

Target approximately:

```text
44×44px minimum where practical
```

---

# 61. SWIPE

Horizontal swiping should only exist where users can reasonably discover it.

Do not hide critical navigation in an undiscoverable carousel.

---

# 62. CAROUSELS

If a carousel exists:

Desktop:
may show multiple cards.

Mobile:
may show one card with partial next-card preview if that improves discoverability.

---

# 63. CAROUSEL CONTROLS

Controls must remain usable and accessible.

Do not rely exclusively on tiny dots.

---

# 64. FILTERS — MOBILE

Desktop filter bars may transform into:

```text
Filter button
→ filter drawer/panel
```

when horizontal space is insufficient.

---

# 65. SEARCH — MOBILE

Search should remain accessible without consuming most of the viewport.

---

# 66. FORMS — MOBILE

Inputs should generally occupy full available width.

Avoid side-by-side fields when labels or validation become cramped.

---

# 67. FORM BUTTON

Primary submit action should be easy to reach and clearly associated with the form.

---

# 68. TABLES

If tabular data exists:

Desktop:
normal table.

Mobile:
consider:

```text
horizontal scroll
stacked rows
card representation
```

depending on information density.

Do not force unreadable miniature tables.

---

# 69. LONG-FORM CONTENT

Mobile reading width is naturally constrained.

Prioritize:

```text
font size
line height
paragraph spacing
heading hierarchy
```

---

# 70. BREADCRUMBS — MOBILE

Can become:

```text
Back
```

or a compact breadcrumb if the full trail becomes noisy.

---

# 71. FOOTER — DESKTOP

Can use multiple columns.

---

# 72. FOOTER — MOBILE

Stack groups vertically.

Accordion behavior may be used if there are many groups.

---

# 73. FOOTER — MOBILE PRIORITY

Keep:

```text
brand
essential navigation
contact/action
legal
```

accessible.

---

# 74. MODALS — MOBILE

Modal may become near-full-screen.

Do not preserve a desktop floating box with tiny content area.

---

# 75. LIGHTBOX — MOBILE

Use nearly full viewport.

Image should remain the primary focus.

---

# 76. DROPDOWNS — MOBILE

Use touch-friendly controls.

If native select is more usable, use it.

---

# 77. TOOLTIP — MOBILE

Do not depend on hover tooltips.

Provide the information another way.

---

# 78. ACCORDION — MOBILE

Good candidate for long secondary content.

Do not hide essential information inside accordions merely to save space.

---

# 79. TYPOGRAPHY WRAP TEST

Every major heading must be checked at:

```text
320
360
390
430
768
1024
1280
1440
```

---

# 80. BUTTON WRAP TEST

Buttons should not unexpectedly become multi-line unless explicitly designed.

If label length varies, design the component to accommodate it.

---

# 81. NAV LABEL TEST

Long navigation labels must remain readable.

If space becomes insufficient:

collapse to mobile navigation rather than shrinking typography excessively.

---

# 82. CARD CONTENT VARIABILITY

Test:

```text
short title
long title
missing image
missing metadata
long metadata
```

The card should remain visually coherent.

---

# 83. DYNAMIC DATA

Responsive layout must work with real content, not only ideal placeholder strings.

---

# 84. EMPTY STATES — MOBILE

Empty states should remain compact and useful.

Do not create huge empty screens.

---

# 85. ERROR STATES — MOBILE

Error recovery action should remain obvious.

---

# 86. ACCESSIBILITY — RESPONSIVE

Responsive behavior must not remove:

```text
focus
labels
semantic structure
keyboard access
screen-reader meaning
```

---

# 87. REDUCED MOTION — RESPONSIVE

At all breakpoints:

```text
prefers-reduced-motion: reduce
```

must suppress non-essential motion.

---

# 88. CONTRAST — RESPONSIVE

Changing background imagery on mobile can alter contrast.

Re-test text overlays at every major breakpoint.

---

# 89. PERFORMANCE BUDGET

Mobile receives the strictest performance treatment.

Prioritize:

```text
small images
limited 3D
limited effects
minimal JS
lazy loading
stable layout
```

---

# 90. 3D FALLBACK DECISION

The implementation should detect whether live 3D is appropriate.

Potential fallback hierarchy:

```text
live 3D
→ reduced 3D
→ approved static podium
```

Do not fallback to an unrelated image.

---

# 91. WEBGL / DEVICE CAPABILITY

Do not assume every phone can render the same 3D quality.

Quality can be adaptive.

---

# 92. PODIUM RESPONSIVE COMPOSITION

Desktop:
large and atmospheric.

Tablet:
medium and integrated.

Mobile:
smaller and deliberate.

The object must remain visually recognizable at every tier.

---

# 93. PODIUM CROPPING

If cropping is used:

crop should preserve:

```text
silhouette
logo/plaque
primary shape
```

unless the approved composition intentionally hides a portion.

---

# 94. PODIUM TEXT LEGIBILITY

If the plaque contains the PDF name:

ensure it remains visually readable at intended display sizes.

Do not make the plaque so small that it becomes meaningless.

---

# 95. HERO TEXT + PODIUM COLLISION

Never allow podium geometry to visually collide with critical text.

Use responsive repositioning.

---

# 96. MOBILE HERO HEIGHT + PODIUM

Do not let the podium force an enormous first-screen height.

If necessary:

reduce podium size before reducing essential text legibility.

---

# 97. DESKTOP HERO BALANCE

Do not allow the podium to dominate so strongly that users miss:

```text
headline
value proposition
CTA
```

---

# 98. TABLET HERO BALANCE

Tablet often requires the greatest compromise.

Prioritize content hierarchy over preserving desktop overlap.

---

# 99. RESPONSIVE SECTION ORDER

Each page's approved specification determines section order.

Do not automatically preserve desktop visual ordering if mobile becomes confusing.

---

# 100. RESPONSIVE COMPONENT VARIANTS

Prefer:

```text
same component
+ responsive layout
```

over:

```text
DesktopEventCard
MobileEventCard
```

unless the interaction model is genuinely different.

---

# 101. WHEN SEPARATE MOBILE COMPONENTS ARE VALID

Only when:

- interaction differs fundamentally
- accessibility requires it
- content structure genuinely changes
- maintaining one component would become unreasonably complex

---

# 102. RESPONSIVE CSS RULE

Prefer CSS media/container queries for presentation.

Use JavaScript only when behavior genuinely depends on runtime conditions.

---

# 103. CONTAINER QUERIES

Use where component layout should respond to its own available width rather than viewport width.

Good candidates:

```text
cards
composite content blocks
sidebars
```

---

# 104. VIEWPORT QUERIES

Use for:

```text
global navigation
page composition
hero layout
```

---

# 105. RESIZE BEHAVIOR

Do not cause expensive JavaScript re-renders on every resize event.

Use CSS where possible.

---

# 106. ORIENTATION

Landscape phones and narrow tablets should be tested.

Do not assume portrait-only usage.

---

# 107. SAFE AREAS

If fixed/floating UI exists, consider device safe areas.

---

# 108. MOBILE OVERFLOW

No page should accidentally produce horizontal scrolling.

Exceptions:

intentional carousels/tables/filter rows.

---

# 109. OVERFLOW QA

Test:

```text
320px
360px
390px
430px
```

for horizontal overflow.

---

# 110. DESKTOP OVERFLOW

Test wide screens for:

```text
unbounded images
text stretching
broken absolute positioning
```

---

# 111. WIDE SCREEN EMPTY SPACE

Negative space is acceptable.

Do not fill every wide screen with larger text and larger cards.

---

# 112. ULTRAWIDE

At very wide widths:

keep content anchored inside a sensible max-width.

Decorative background can extend beyond it.

---

# 113. PRINT

If printing is not a product requirement, do not over-optimize.

If needed later, define a dedicated print system rather than allowing screen styles to dictate it.

---

# 114. RESPONSIVE QA CHECKLIST

For every page:

```text
□ 320px
□ 360px
□ 390px
□ 430px
□ 768px
□ 1024px
□ 1280px
□ 1440px
□ wide
```

Check:

```text
□ no accidental horizontal overflow
□ navigation works
□ headings wrap correctly
□ CTA accessible
□ images crop correctly
□ podium behaves correctly
□ cards remain coherent
□ footer works
□ motion feels intentional
□ reduced motion works
□ focus works
```

---

# 115. AI IMPLEMENTATION RULE

The AI must not treat the desktop screenshot as the mobile specification.

Desktop is one state of the system.

The responsive document defines the transformation.

---

# 116. AI IMPLEMENTATION RULE — NO SHRINK EVERYTHING

Do not solve responsive design by applying:

```text
transform: scale(...)
```

to entire desktop compositions.

Reflow the layout.

---

# 117. AI IMPLEMENTATION RULE — NO DEVICE HACKS

Avoid brittle device-specific hacks.

Prefer:

```text
layout constraints
media queries
container queries
fluid sizing
```

---

# 118. AI IMPLEMENTATION RULE — CONTENT FIRST

When space becomes constrained:

remove/reduce decorative elements before removing essential content.

---

# 119. AI IMPLEMENTATION RULE — 3D SECOND

When mobile performance is poor:

reduce 3D complexity before compromising page usability.

---

# 120. AI IMPLEMENTATION RULE — VISUAL CONSISTENCY

Responsive pages must still feel unmistakably like PDF.

The following remain consistent:

```text
color
typography
buttons
cards
icon family
gold treatment
motion language
surface treatment
```

---

# 121. FINAL RESPONSIVE PRINCIPLE

A successful responsive implementation should make the user feel:

```text
Desktop:
"this is an immersive premium debate platform."

Mobile:
"this is the same premium platform, intentionally designed for my screen."
```

Not:

```text
"the desktop site got squeezed into a phone."
```

# END OF RESPONSIVE IMPLEMENTATION SPECIFICATION
