# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 21 — COMPONENT SYSTEM SPECIFICATION

Status: Master reusable-component implementation blueprint.

Purpose:
Define the reusable UI building blocks that make the PDF website visually consistent across every page.

This document is intentionally implementation-oriented.

The coding agent should prefer shared components over one-off page markup whenever the same visual or behavioral pattern appears more than once.

---

# 0. COMPONENT PHILOSOPHY

PDF should feel like one designed system.

The component system exists to prevent:

- random button styles
- inconsistent cards
- different border radii
- different gold colors
- different hover behavior
- duplicated navigation logic
- inconsistent mobile behavior
- page-specific visual drift

A component is not merely a piece of code.

A component is a reusable visual and behavioral contract.

---

# 1. COMPONENT LAYERS

Use four conceptual layers:

```text
FOUNDATION
↓
PRIMITIVES
↓
COMPOSITES
↓
PAGE SECTIONS
```

Foundation:

```text
colors
typography
spacing
radius
shadows
motion
breakpoints
```

Primitives:

```text
Button
Icon
Badge
Divider
Container
Heading
Text
Image
```

Composites:

```text
EventCard
ResourceCard
ProfileCard
FilterBar
CTA
FormField
Modal
```

Page sections:

```text
Hero
EventGrid
AcademyPrograms
ResourceGrid
Footer
```

---

# 2. COMPONENT NAMING

Names should describe purpose, not appearance.

Good:

```text
EventCard
PrimaryButton
SectionHeading
MobileNav
```

Avoid:

```text
GoldBox
BigCard
CoolButton
BlackThing
```

---

# 3. COMPONENT VARIANTS

Use explicit variants.

Example:

```text
Button:
primary
secondary
ghost
```

Do not create:

```text
Button2
ButtonGold
ButtonNew
ButtonFinal
```

unless there is genuinely a separate component contract.

---

# 4. DESIGN TOKEN DEPENDENCY

Components must consume global design tokens.

Do not hard-code brand values repeatedly.

---

# 5. CONTAINER

Purpose:

Control page content width and horizontal alignment.

Responsibilities:

```text
max width
side padding
responsive gutters
```

It should not contain page-specific visual decoration.

---

# 6. SECTION

Purpose:

Provide vertical structure.

Responsibilities:

```text
vertical spacing
optional background
optional container
```

---

# 7. SECTION VARIANTS

Possible:

```text
default
compact
large
dark
accent
```

Only create variants that have approved visual meaning.

---

# 8. SECTION HEADING

Anatomy:

```text
optional eyebrow
heading
optional supporting text
optional action
```

---

# 9. SECTION HEADING ALIGNMENT

Supported:

```text
left
center
```

Right alignment should be introduced only where a specific composition requires it.

---

# 10. EYEBROW

Purpose:

Small contextual label above a heading.

Rules:

```text
uppercase or approved casing
tracking controlled by typography system
gold or muted accent
```

Never make the eyebrow visually louder than the heading.

---

# 11. HEADING

Heading component must support semantic levels.

Visual variants should be independent from semantic level where necessary.

---

# 12. BODY TEXT

Body component should provide controlled reading sizes.

Do not create arbitrary paragraph sizes per page.

---

# 13. DISPLAY TEXT

Large display typography is reserved for:

```text
homepage hero
major page hero
major campaign statement
```

---

# 14. TEXT WIDTH

Support readable max-width variants.

Examples:

```text
narrow
reading
wide
```

---

# 15. BUTTON

The Button is a core brand component.

Anatomy:

```text
label
optional icon
interactive surface
```

---

# 16. BUTTON VARIANTS

Recommended:

```text
primary
secondary
ghost
text
```

---

# 17. PRIMARY BUTTON

Purpose:

Highest-priority action.

Visual direction:

```text
PDF gold accent
dark/approved contrasting text
precise shape
```

Do not turn every CTA into a primary button.

---

# 18. SECONDARY BUTTON

Purpose:

Important but lower-priority action.

Should remain visually connected to primary.

---

# 19. GHOST BUTTON

Purpose:

Low-emphasis action over dark backgrounds.

---

# 20. TEXT BUTTON

Purpose:

Navigation-like or tertiary action.

---

# 21. BUTTON STATES

Every button must define:

```text
default
hover
focus-visible
active
disabled
loading
```

---

# 22. BUTTON HOVER

Use restrained motion.

Potential:

```text
small translate
subtle glow
border/accent transition
```

Do not use large scale changes.

---

# 23. BUTTON FOCUS

Focus must be visible independently of hover.

---

# 24. BUTTON ACTIVE

Pressed state should be perceptible but subtle.

---

# 25. BUTTON DISABLED

Disabled controls must communicate unavailable state without destroying contrast.

---

# 26. BUTTON LOADING

If asynchronous:

show loading state without changing layout width unnecessarily.

---

# 27. BUTTON ICON

Icons must align optically with label text.

---

# 28. BUTTON SIZE

Use global size tokens.

Possible:

```text
small
medium
large
```

Do not invent page-specific dimensions.

---

# 29. ICON BUTTON

For controls with no visible label.

Must have accessible name.

Examples:

```text
menu
close
search
previous
next
```

---

# 30. ICON BUTTON STATES

Same state system as buttons.

---

# 31. ICON

Use the approved icon family.

Preferred:

```text
SVG
minimal line language
consistent stroke
```

---

# 32. LINK

Links should have a consistent text treatment.

Do not make every link gold.

---

# 33. LINK HOVER

Possible:

```text
gold transition
underline
small arrow movement
```

Use one coherent interaction pattern.

---

# 34. DIVIDER

Purpose:

Separate related content.

Variants:

```text
subtle
gold-accent
```

Gold divider should be rare.

---

# 35. BADGE

Purpose:

Small semantic label.

Examples:

```text
Upcoming
Past
Academy
Resource type
Category
```

---

# 36. BADGE STATES

Badges may have:

```text
neutral
accent
success
warning
```

only when those meanings are actually needed.

---

# 37. BADGE RULE

Do not use badges as decorative stickers.

---

# 38. IMAGE

Central image wrapper should standardize:

```text
ratio
radius
object-fit
object-position
loading
fallback
```

---

# 39. IMAGE VARIANTS

Potential:

```text
card
hero
editorial
avatar
thumbnail
full
```

---

# 40. IMAGE FALLBACK

Fallback should use the PDF visual environment.

Never display an unrelated placeholder photograph.

---

# 41. AVATAR

If profile images exist:

use a consistent crop.

---

# 42. AVATAR SIZES

Possible:

```text
small
medium
large
```

---

# 43. CARD

Generic card primitive.

Responsibilities:

```text
surface
border
radius
padding
hover state
```

It should not automatically contain an image.

---

# 44. CARD VARIANTS

Potential:

```text
default
interactive
featured
flat
```

---

# 45. CARD SURFACE

Default dark surface should remain distinguishable from surrounding background through subtle:

```text
tonal difference
border
shadow
```

Use restraint.

---

# 46. CARD HOVER

Interactive cards may use:

```text
translateY
border/accent response
image scale
```

No excessive 3D tilt.

---

# 47. EVENT CARD

Composite built from:

```text
Image
Badge
Title
Metadata
Action
```

Only render available data.

---

# 48. EVENT CARD VARIANTS

Possible:

```text
grid
featured
compact
```

---

# 49. FEATURED EVENT CARD

Larger visual hierarchy.

Should not simply be a normal card scaled up.

---

# 50. COMPACT EVENT CARD

Used where density is more important.

---

# 51. RESOURCE CARD

Composite:

```text
type
image/preview if available
title
description
action
```

---

# 52. RESOURCE CARD VARIANTS

Possible:

```text
grid
list
featured
```

---

# 53. PROFILE CARD

For team/people where approved data exists.

Structure:

```text
portrait
name
role
bio
optional action
```

---

# 54. PROFILE IMAGE

Must share crop and visual treatment across all profiles.

---

# 55. PROGRAM CARD

Academy composite.

Potential:

```text
title
summary
metadata
action
```

Only fields supplied by content.

---

# 56. PROGRAM CARD PRIORITY

Primary:

```text
what it is
```

Secondary:

```text
supporting metadata
```

Action:

```text
clear
```

---

# 57. CTA BLOCK

Purpose:

Provide a visually clear next step.

Anatomy:

```text
eyebrow
heading
supporting copy
primary action
optional secondary action
```

---

# 58. CTA VARIANTS

Potential:

```text
dark
gold-accent
image-backed
minimal
```

Use image-backed only when an approved image exists.

---

# 59. CTA BACKGROUND

Avoid giant generic gradients.

Use the established black/gold atmosphere.

---

# 60. HERO

Hero is a composite page-level component.

Potential anatomy:

```text
background
header integration
eyebrow
heading
description
actions
visual
```

---

# 61. HERO VARIANTS

Potential:

```text
home
interior
detail
editorial
```

These are composition variants, not completely separate design systems.

---

# 62. HERO VISUAL

May contain:

```text
3D podium
photography
abstract graphic
none
```

---

# 63. HERO HEIGHT

Do not force every page into viewport-height hero.

Hero height follows content and visual importance.

---

# 64. HOMEPAGE HERO

The most immersive hero.

The podium is the primary signature object.

---

# 65. INTERIOR HERO

More compact and information-oriented.

---

# 66. DETAIL HERO

Can prioritize title and metadata over decoration.

---

# 67. NAVBAR

Global public navigation.

Responsibilities:

```text
brand
navigation
CTA/utility
scroll state
mobile state
```

---

# 68. NAVBAR DESKTOP

Use one shared component.

Navigation labels come from approved IA.

---

# 69. NAVBAR MOBILE

Uses the MobileNav component.

---

# 70. MOBILE NAV

Potential structure:

```text
brand/header controls
navigation list
active state
CTA
```

---

# 71. MOBILE NAV ANIMATION

Recommended:

```text
opacity + translate/clip
```

Keep duration short.

---

# 72. MOBILE NAV ACCESSIBILITY

Required:

```text
escape to close
focus management
visible focus
aria-expanded
appropriate labels
```

---

# 73. FILTER BAR

For Events/Resources where applicable.

Anatomy:

```text
filter controls
optional search
optional sort
```

---

# 74. FILTER CONTROL

Can be:

```text
select
segmented control
dropdown
chip
```

depending on actual interaction requirements.

---

# 75. ACTIVE FILTER

Must be clearly distinguishable.

Use gold carefully.

---

# 76. FILTER MOBILE

Controls may stack or use a dedicated filter panel.

Do not make tiny controls that are difficult to touch.

---

# 77. SEARCH

If search exists:

support:

```text
input
clear
submit
loading
empty
```

---

# 78. SEARCH FIELD

Do not make it visually dominate a resource page unless search is the main purpose.

---

# 79. FORM FIELD

Anatomy:

```text
label
input
helper text
error text
```

---

# 80. INPUT

Shared styling across forms.

States:

```text
default
hover
focus
filled
error
disabled
```

---

# 81. TEXTAREA

Same visual language as input.

---

# 82. SELECT

Same control family.

---

# 83. CHECKBOX / RADIO

Use consistent custom styling only if native controls cannot meet the design requirement.

Accessibility must remain intact.

---

# 84. FORM ERROR

Error message must identify what needs correction.

---

# 85. FORM SUCCESS

Success should be clear without relying only on color.

---

# 86. MODAL

Use for:

```text
lightbox
confirmation
important contextual content
```

Only when necessary.

---

# 87. MODAL BACKDROP

Dark, restrained.

Avoid excessive blur unless justified.

---

# 88. MODAL PANEL

Should feel like part of the PDF surface system.

---

# 89. MODAL ACCESSIBILITY

Required:

```text
focus trap
escape
accessible name
return focus
```

---

# 90. LIGHTBOX

Image-specific modal.

Features:

```text
image
close
previous/next if gallery
caption if available
```

---

# 91. LIGHTBOX MOBILE

Near full-screen.

Controls must remain touch-friendly.

---

# 92. TOOLTIP

Use sparingly.

Never use tooltips for information that is essential to completing a task.

---

# 93. DROPDOWN

Use for navigation or controls where appropriate.

Must align with keyboard behavior.

---

# 94. ACCORDION

Potentially useful for:

```text
FAQ
mobile footer groups
long secondary content
```

---

# 95. ACCORDION MOTION

Height animation should be smooth but quick.

Respect reduced motion.

---

# 96. TABS

If tabs exist:

active state must be unmistakable.

---

# 97. TABS MOBILE

May become horizontal scrolling or a select depending on content.

---

# 98. PAGINATION

If required:

keep controls compact and accessible.

---

# 99. PAGINATION ACTIVE

Use PDF accent consistently.

---

# 100. SKELETON

Skeleton should mimic actual layout dimensions.

Do not use generic gray blocks unrelated to the final component.

---

# 101. LOADING SPINNER

Use only where a skeleton is inappropriate.

Keep it minimal.

---

# 102. EMPTY STATE

Anatomy:

```text
title
short explanation
recovery/action
optional small icon
```

---

# 103. ERROR STATE

Anatomy:

```text
title
clear explanation
retry/recovery
```

Never expose stack traces.

---

# 104. BREADCRUMBS

Use on deeper detail pages if they improve orientation.

Do not force breadcrumbs onto mobile if they add noise.

---

# 105. METADATA ROW

Useful for:

```text
event date
location
duration
resource type
```

---

# 106. METADATA ICONS

Icons should support scanning, not replace text.

---

# 107. SOCIAL LINKS

Use approved social destinations only.

Icons should use the global icon system.

---

# 108. FOOTER NAV GROUP

Shared footer navigation group.

Do not duplicate arbitrary link styling.

---

# 109. FOOTER

Composite of:

```text
brand
navigation groups
contact/social
legal
```

Exact fields follow approved IA.

---

# 110. PAGE GRID

Page-level sections should use the global layout grid.

Components should not invent their own unrelated grid.

---

# 111. COMPONENT SPACING

Internal spacing should use global spacing tokens.

---

# 112. COMPONENT RADIUS

Use global radius tokens.

Avoid mixing many corner styles.

---

# 113. COMPONENT BORDER

Default border should be subtle.

---

# 114. COMPONENT SHADOW

Shadows are optional and restrained.

Do not make every component float.

---

# 115. GOLD USAGE

Gold is an accent.

Good:

```text
CTA
active state
small divider
icon
highlight
light
```

Bad:

```text
entire page covered in gold
every border gold
every heading gold
```

---

# 116. COMPONENT MOTION

Motion should communicate:

```text
interaction
state change
depth
continuity
```

not decoration for its own sake.

---

# 117. COMPONENT HOVER RULE

Hover exists only on pointer-capable environments.

Never make essential information depend on hover.

---

# 118. TOUCH RULE

Touch targets must be comfortable.

---

# 119. MOBILE RULE

Components may change layout rather than merely shrink.

---

# 120. REDUCED MOTION

All animated components need a reduced-motion path.

---

# 121. COMPONENT COMPOSITION

Prefer composition:

```text
Card + Image + Badge + Heading + Metadata + Button
```

over creating dozens of nearly identical card components.

---

# 122. VARIANT EXPLOSION

If a component reaches too many variants, reconsider whether the underlying concepts should be split.

---

# 123. ONE-OFF COMPONENT RULE

A one-off component is acceptable when:
- interaction is unique
- layout is genuinely unique
- semantic responsibility is unique

Do not create one-off components solely for color changes.

---

# 124. COMPONENT DATA CONTRACT

Dynamic components should receive structured data rather than arbitrary HTML wherever practical.

---

# 125. EVENT CARD DATA

Conceptually:

```text
id
title
image
status/category
date
time
location
summary
href
```

Only fields actually supported by the product should be used.

---

# 126. RESOURCE CARD DATA

Conceptually:

```text
id
title
type
image/preview
summary
date
href
```

---

# 127. PROFILE CARD DATA

Conceptually:

```text
id
name
role
image
bio
links
```

---

# 128. COMPONENT ERROR BOUNDARIES

Dynamic/remote content should fail gracefully.

A broken image must not destroy the entire card.

---

# 129. COMPONENT PERFORMANCE

Avoid unnecessary re-renders for animated or interactive components.

---

# 130. 3D COMPONENT

The podium should be isolated as a dedicated component.

Suggested conceptual API:

```text
Podium
- interactive
- intensity
- mode
- reducedMotion
- fallback
```

Actual implementation follows `18-3D-PODIUM-SPEC.md`.

---

# 131. PODIUM FALLBACK

If WebGL/3D is unavailable:

render approved static fallback.

Do not show a broken canvas.

---

# 132. IMAGE COMPONENT + PODIUM

Do not wrap the live podium in unnecessary image-like abstractions.

It is a spatial component.

---

# 133. HEADER + HERO

Header may visually integrate with hero but remains a separate reusable component.

---

# 134. SECTION + CARD

Cards should not control global section spacing.

Section controls spacing; card controls internal layout.

---

# 135. BUTTON + CARD

Cards may contain buttons, but the card should not automatically become a button unless its interaction model explicitly requires it.

---

# 136. ACCESSIBILITY CONTRACT

Every interactive component must define:

```text
semantic element
keyboard behavior
focus state
accessible name
disabled behavior
reduced-motion behavior where relevant
```

---

# 137. VISUAL QA CONTRACT

Every component must be checked in:

```text
default
hover
focus
active
disabled
loading
empty/error where applicable
mobile
desktop
reduced motion
```

---

# 138. AI CODING RULE

Before creating a component, search the existing component library.

If an existing component can support the requirement through a documented variant, reuse it.

---

# 139. AI CODING RULE — NO DUPLICATES

Do not create:

```text
EventCardNew
EventCardFinal
EventCardV2
```

to solve a visual variation.

First determine whether the variation belongs as a documented variant.

---

# 140. AI CODING RULE — NO RANDOM CSS

Do not add arbitrary values solely to match one screenshot.

If a value represents a reusable design rule, convert it into a token.

---

# 141. AI CODING RULE — SCREENSHOT MATCHING

Reference images are evidence of intended visual direction.

They are not permission to reproduce hidden implementation details that are not known.

---

# 142. AI CODING RULE — CONTENT

Never invent organization facts, event information, people, programs, dates, statistics, or claims.

Use the approved content source.

---

# 143. AI CODING RULE — ASSETS

Never substitute unrelated stock images when an approved asset is missing.

Use the asset register.

---

# 144. AI CODING RULE — RESPONSIVE

Never solve mobile by shrinking desktop typography until it technically fits.

Recompose.

---

# 145. AI CODING RULE — MOTION

Never add an animation without identifying:

```text
trigger
purpose
duration
easing
reduced-motion behavior
```

---

# 146. COMPONENT INVENTORY

Core system should eventually include, as needed:

```text
Container
Section
SectionHeading
Eyebrow
Heading
Text
Button
IconButton
Link
Icon
Divider
Badge
Image
Avatar
Card
EventCard
ResourceCard
ProfileCard
ProgramCard
CTA
Hero
Navbar
MobileNav
FilterBar
Search
FormField
Input
Textarea
Select
Checkbox
Radio
Modal
Lightbox
Tooltip
Dropdown
Accordion
Tabs
Pagination
Skeleton
Spinner
EmptyState
ErrorState
Breadcrumbs
MetadataRow
SocialLinks
Footer
Podium
```

This is a planning inventory, not a requirement to implement unused components.

---

# 147. COMPONENT CREATION ORDER

Recommended implementation order:

```text
1. foundation/tokens
2. typography
3. Container/Section
4. Button/Link/Icon
5. Image/Card
6. Header/MobileNav
7. Footer
8. Hero
9. Event/Resource/Profile/Program cards
10. Filters/search/forms
11. Modal/lightbox
12. states
13. Podium integration
14. page-specific composites
```

---

# 148. COMPONENT TESTING ORDER

For each component:

```text
desktop
mobile
keyboard
hover
focus
loading/error
reduced motion
```

Then integrate into pages.

---

# 149. CROSS-COMPONENT CONSISTENCY

Check:

```text
radius
padding
typography
gold
border
shadow
motion
icon size
```

---

# 150. FINAL COMPONENT PRINCIPLE

The component system should make it easy for an AI coding agent to build the entire website without repeatedly inventing visual decisions.

The agent should be able to ask:

```text
Is this component already defined?
What variant is required?
What are its states?
How does it behave on mobile?
How does it animate?
What happens when data is missing?
```

If the answer exists in this system, implementation should follow it.

If the answer does not exist and the decision materially changes the design, the agent should flag the decision rather than invent it.

# END OF COMPONENT SYSTEM SPECIFICATION
