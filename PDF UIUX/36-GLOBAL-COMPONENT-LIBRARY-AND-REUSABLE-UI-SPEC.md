# PAK DEBATE FORUM (PDF) — 36 GLOBAL COMPONENT LIBRARY & REUSABLE UI SPECIFICATION

Status: Master reusable-component contract.

Purpose:
Define the reusable interface building blocks that every PDF page should consume.

This document converts the visual system into an implementation system.

The objective is:

```text
DESIGN TOKENS
      ↓
GLOBAL COMPONENTS
      ↓
PAGE COMPOSITIONS
      ↓
INDIVIDUAL ROUTES
```

The AI implementation agent must prefer existing components over creating visually similar one-off components.

---

# 1. CORE COMPONENT PRINCIPLE

PDF should feel like one coherent product.

Therefore:

```text
same action
→ same component

same content type
→ same component family

same interaction
→ same behavior

same responsive pattern
→ same responsive implementation
```

---

# 2. COMPONENT HIERARCHY

Use three conceptual levels:

```text
Primitive
↓
Composite
↓
Section / Feature
```

Primitive examples:
- Button
- Icon
- Text
- Input

Composite examples:
- Search field
- Event card
- Resource card
- Navigation item

Section/feature examples:
- Hero
- Event grid
- Academy CTA
- Contact section

---

# 3. COMPONENT SOURCE OF TRUTH

Reusable components should have one authoritative implementation.

Do not copy a component into another page and modify it independently.

---

# 4. COMPONENT VARIANTS

Variants must be intentional.

Example:

```text
Button
├── primary
├── secondary
├── ghost
└── destructive
```

Do not create:

```text
goldButton2
goldButtonFinal
goldButtonDarkNew
```

---

# 5. COMPONENT STATES

Interactive components should define:

```text
default
hover
active
focus
disabled
loading
error where relevant
success where relevant
```

---

# 6. RESPONSIVE CONTRACT

Every reusable component must define:

```text
desktop behavior
tablet behavior
mobile behavior
```

A component is not complete until mobile behavior is known.

---

# 7. MOTION CONTRACT

Every animated component must define:

```text
trigger
animation
duration
easing
reduced-motion behavior
```

---

# 8. ACCESSIBILITY CONTRACT

Every interactive component must define:

```text
semantic element
keyboard behavior
focus behavior
accessible name
state announcement where relevant
```

---

# 9. GLOBAL COMPONENT INVENTORY

The initial PDF component library should include:

```text
1. Button
2. Icon Button
3. Link
4. Logo
5. Container
6. Section
7. Section Header
8. Badge
9. Divider
10. Card
11. Event Card
12. Resource Card
13. Academy Card
14. Person/Profile Card
15. Stat
16. Stat Group
17. Image Block
18. Media Card
19. Search Field
20. Search Bar
21. Input
22. Textarea
23. Select
24. Checkbox
25. Radio
26. Toggle
27. Form Field
28. Form Group
29. Tabs
30. Accordion
31. Modal
32. Drawer
33. Dropdown Menu
34. Tooltip
35. Toast
36. Alert
37. Breadcrumbs
38. Pagination
39. Filter Bar
40. Empty State
41. Loading State
42. Error State
43. Skeleton
44. CTA Block
45. Quote/Testimonial
46. Timeline
47. Logo Strip
48. Social Links
49. Footer Link Group
50. Back-to-Top
51. Page Transition
52. Reveal Animation Wrapper
53. Image Reveal
54. Number Counter
55. Marquee/Scrolling Strip
56. Hero Shell
57. Navigation Shell
58. Footer Shell
```

Not every component must appear on every page.

---

# 10. BUTTON

The Button is the primary action primitive.

Variants:

```text
primary
secondary
ghost
destructive
```

---

# 11. PRIMARY BUTTON

Use for the most important action in a local context.

Examples:

```text
Explore Academy
Register
Contact PDF
View Events
```

---

# 12. SECONDARY BUTTON

Use for supporting actions.

---

# 13. GHOST BUTTON

Use when the action should remain visually lightweight.

---

# 14. DESTRUCTIVE BUTTON

Use only for genuinely destructive operations in authenticated/admin interfaces.

Do not use red destructive buttons in the public marketing experience unless the action is actually destructive.

---

# 15. BUTTON CONTENT

A button may contain:

```text
icon + label
label
label + directional icon
```

Do not put arbitrary paragraphs inside buttons.

---

# 16. BUTTON ICONS

Icons should reinforce the action.

Examples:

```text
arrow-right
external-link
download
play
chevron
```

Do not add icons purely for decoration.

---

# 17. BUTTON WIDTH

Buttons should generally size to content.

Full-width buttons are appropriate in:
- mobile layouts
- forms
- special CTA blocks

---

# 18. BUTTON LOADING

Loading state must:
- preserve button dimensions
- communicate progress
- prevent duplicate submission where relevant

---

# 19. BUTTON FOCUS

Use the global focus token.

---

# 20. ICON BUTTON

Icon Button is for actions where an icon is sufficient.

Examples:
- close
- menu
- search
- back-to-top

Every icon button requires an accessible name.

---

# 21. ICON BUTTON SIZE

Use global touch/control dimensions.

Do not make essential icon buttons smaller simply for aesthetic reasons.

---

# 22. LINK

Use semantic anchors for navigation.

Do not turn buttons into links or links into buttons merely through styling.

---

# 23. LINK VARIANTS

Conceptual:

```text
default
muted
accent
inline
navigation
```

---

# 24. LINK UNDERLINE

Inline text links may use underline or another strong affordance.

Navigation links may use hover/active treatment instead.

---

# 25. LOGO

The Logo component owns:
- official PDF mark
- sizing
- responsive variants
- accessible label
- link behavior

Do not recreate the logo with text.

---

# 26. LOGO LINK

The public logo normally links to Home.

---

# 27. CONTAINER

Container owns:
- max-width
- horizontal gutters
- responsive behavior

All major page content should align to it.

---

# 28. SECTION

Section owns:
- vertical spacing
- optional background
- optional anchor ID
- section-level layout

---

# 29. SECTION HEADER

Standard structure:

```text
eyebrow
headline
description
optional action
```

---

# 30. SECTION HEADER VARIANTS

Potential:

```text
left
center
split
compact
```

Use only variants that are actually needed.

---

# 31. EYEBROW

Eyebrows use the global label typography.

---

# 32. BADGE

Badges communicate compact status.

Examples:

```text
Upcoming
Featured
Open
New
```

Only use meaningful states.

---

# 33. BADGE COLORS

Use semantic states where applicable.

Do not make every badge gold.

---

# 34. DIVIDER

Divider separates content when spacing alone is insufficient.

---

# 35. CARD

Base Card should provide:
- surface
- border
- radius
- optional shadow
- interaction state

It should not dictate all content layout.

---

# 36. CARD VARIANTS

Conceptual:

```text
default
interactive
featured
compact
```

---

# 37. EVENT CARD

Event Card is a specialized content component.

Potential content:

```text
date
event title
location/format
short description
status
CTA
image where available
```

---

# 38. EVENT CARD HIERARCHY

Recommended:

```text
event visual/date
↓
title
↓
metadata
↓
short description
↓
action
```

---

# 39. EVENT CARD IMAGE

If an image exists, it should have a consistent aspect ratio.

---

# 40. EVENT CARD STATUS

Status must be visually clear.

Examples:

```text
Upcoming
Registration Open
Completed
```

Use actual data.

---

# 41. EVENT CARD MOBILE

On mobile:
- maintain readable title
- stack metadata
- keep CTA tappable
- avoid tiny date text

---

# 42. RESOURCE CARD

Resource Card is for:
- articles
- documents
- guides
- videos
- learning materials

---

# 43. RESOURCE CARD TYPE

Clearly identify the resource type.

---

# 44. RESOURCE CARD METADATA

Potential:

```text
category
date
author
reading time
format
```

Only display available fields.

---

# 45. ACADEMY CARD

Academy Card communicates a learning opportunity.

Potential:

```text
program title
short description
level
duration
CTA
```

---

# 46. PERSON CARD

Person/Profile Card is for public organizational/team profiles.

Potential:

```text
photo
name
role
short bio
social link
```

---

# 47. PERSON IMAGE

Use a consistent crop.

Avoid inconsistent portrait ratios across the same grid.

---

# 48. STAT

Stat presents a single metric.

Structure:

```text
number
label
optional supporting context
```

---

# 49. STAT GROUP

Stat Group aligns multiple statistics.

On mobile it may:
- become a row if space permits
- otherwise stack

---

# 50. STAT ANIMATION

Number animation is optional.

It should not prevent the final number from being accessible.

---

# 51. IMAGE BLOCK

Image Block is a generic controlled image presentation component.

It owns:
- aspect ratio
- crop
- radius
- loading
- responsive source
- alt text

---

# 52. MEDIA CARD

Media Card combines visual media with content and CTA.

---

# 53. SEARCH FIELD

Search Field is a compact input primitive.

---

# 54. SEARCH BAR

Search Bar may include:
- input
- search button
- filters
- clear action

Do not make a large search system when a simple search field is sufficient.

---

# 55. INPUT

Input owns:
- label
- field
- placeholder
- helper
- error
- disabled
- focus

---

# 56. TEXTAREA

Textarea follows the same form system.

---

# 57. SELECT

Use native select where appropriate for accessibility and simplicity.

Custom select is justified only when necessary.

---

# 58. CHECKBOX

Checkbox should use semantic input behavior.

---

# 59. RADIO

Radio groups require:
- group label
- clear options
- selected state

---

# 60. TOGGLE

Toggle is appropriate for binary settings.

Do not use toggles for actions that should be buttons.

---

# 61. FORM FIELD

Form Field wraps:

```text
label
control
helper/error
```

---

# 62. FORM GROUP

Form Group organizes related fields.

---

# 63. FORM VALIDATION

Validation should:
- be understandable
- identify the field
- explain correction
- not rely on color alone

---

# 64. FORM SUBMISSION

Submission should provide:
- loading state
- success state
- failure state

---

# 65. TABS

Tabs are appropriate when users switch between closely related content without changing the overall task.

---

# 66. TABS MOBILE

If tabs overflow:
- horizontal scroll may be used
- labels remain readable
- active state remains visible

Do not compress labels into unreadable text.

---

# 67. ACCORDION

Accordion is appropriate for:
- FAQs
- dense secondary information
- mobile navigation groups
- optional detail

---

# 68. ACCORDION ACCESSIBILITY

Use semantic buttons and proper expanded state.

---

# 69. MODAL

Modal is for focused temporary tasks.

Examples:
- confirmation
- image preview
- registration step
- focused information

---

# 70. MODAL RULE

Do not use modals for ordinary content that could live naturally on the page.

---

# 71. MODAL FOCUS

Focus must move into the modal and return appropriately.

---

# 72. DRAWER

Drawer is appropriate for:
- mobile navigation
- filter panels
- secondary controls

---

# 73. DRAWER MOTION

Use controlled slide/fade.

---

# 74. DROPDOWN MENU

Dropdown is for short contextual navigation/action lists.

---

# 75. DROPDOWN POSITION

It must remain within viewport boundaries.

---

# 76. TOOLTIP

Tooltip provides supplemental non-essential information.

---

# 77. TOAST

Toast communicates temporary feedback.

Examples:

```text
Saved
Copied
Submitted
```

Do not put critical errors only in a toast.

---

# 78. ALERT

Alert is for persistent important messaging.

---

# 79. BREADCRUMBS

Breadcrumbs help users understand hierarchy on deeper pages.

They may be omitted when the route is shallow.

---

# 80. PAGINATION

Pagination is for large collections.

Use:
- previous
- next
- current
- useful page numbers where appropriate

---

# 81. PAGINATION MOBILE

Keep controls compact and understandable.

---

# 82. FILTER BAR

Filter Bar may contain:
- search
- category
- date
- type
- sort

Only include filters supported by actual data.

---

# 83. FILTER MOBILE

Filters may collapse into a drawer.

---

# 84. EMPTY STATE

Empty State should explain:

```text
what is empty
why
what can be done
```

where useful.

---

# 85. LOADING STATE

Loading state should preserve approximate layout dimensions.

---

# 86. ERROR STATE

Error state should explain the problem and offer recovery where possible.

---

# 87. SKELETON

Skeletons should mirror actual content geometry.

Do not use generic skeleton rectangles everywhere.

---

# 88. CTA BLOCK

CTA Block is a reusable high-priority action section.

Structure:

```text
eyebrow
headline
supporting copy
action(s)
optional visual
```

---

# 89. CTA BLOCK VARIANTS

Potential:

```text
dark
gold-accent
image-backed
split
compact
```

Only implement variants used by the actual site.

---

# 90. CTA HIERARCHY

CTA blocks should not overpower the homepage hero.

---

# 91. QUOTE / TESTIMONIAL

Quote component may contain:

```text
quote
person
role
optional photo
```

Only use verified statements.

---

# 92. TIMELINE

Timeline is appropriate for:
- organizational history
- program journey
- event sequence
- process

---

# 93. TIMELINE MOBILE

On mobile, prefer a single vertical axis.

---

# 94. LOGO STRIP

Logo Strip displays partner/organization logos if the site has verified partners.

Do not invent logos.

---

# 95. LOGO STRIP MOTION

A continuously scrolling logo strip should only be used when there are enough logos to make the pattern meaningful.

Provide a static fallback.

---

# 96. SOCIAL LINKS

Social Links component centralizes official social destinations.

---

# 97. SOCIAL LINK ACCESSIBILITY

Every icon has an accessible destination label.

---

# 98. FOOTER LINK GROUP

Footer Link Group owns:
- heading
- list
- responsive behavior

---

# 99. BACK-TO-TOP

Back-to-top appears only after meaningful scrolling.

It should not constantly occupy the viewport.

---

# 100. PAGE TRANSITION

Page Transition controls route-level visual continuity.

Use subtle:
- opacity
- short movement
- crossfade

Do not create cinematic transitions between every route if they delay navigation.

---

# 101. REVEAL ANIMATION WRAPPER

Reveal wrapper provides standardized viewport entrance motion.

It should support:

```text
fade
fade-up
fade-down
fade-left
fade-right
scale-soft
```

Avoid a giant library of effects.

---

# 102. IMAGE REVEAL

Image Reveal may use:
- mask
- clip
- fade
- subtle scale

Keep it restrained.

---

# 103. NUMBER COUNTER

Number Counter is optional for statistics.

It must:
- respect reduced motion
- expose final value
- avoid excessive duration

---

# 104. MARQUEE

Marquee is an enhancement.

Do not use it for essential information.

---

# 105. MARQUEE ACCESSIBILITY

Provide a readable static representation.

Avoid infinite motion for critical content.

---

# 106. HERO SHELL

Hero Shell defines:
- viewport composition
- text region
- visual region
- CTA region
- background layers

It does not dictate one universal hero design.

---

# 107. HERO VARIANTS

Possible:

```text
cinematic
editorial
split
minimal
image-led
```

Use only variants that match actual page designs.

---

# 108. NAVIGATION SHELL

Navigation Shell owns:
- desktop navigation
- mobile menu
- logo
- route states
- global CTA where applicable

Detailed rules live in the global navigation specification.

---

# 109. FOOTER SHELL

Footer Shell owns:
- brand
- secondary navigation
- contact
- social
- legal
- copyright

Detailed rules live in the global footer specification.

---

# 110. COMPONENT COMPOSITION

Pages should be assembled from components.

Conceptual:

```jsx
<Page>
  <HeroShell />
  <Section>
    <SectionHeader />
    <EventCard />
  </Section>
  <CTA />
  <GlobalFooter />
</Page>
```

---

# 111. COMPONENT DEPENDENCY

Lower-level components must not depend on entire pages.

Example:

```text
Button
```

should not know about:

```text
Homepage
Events page
Academy page
```

---

# 112. DATA VS PRESENTATION

Reusable components should preferably receive structured data.

Example:

```text
EventCard(event)
```

rather than hard-coded event content.

---

# 113. CONTENT MODEL

The content layer owns:
- titles
- descriptions
- dates
- images
- links
- metadata

The component owns presentation.

---

# 114. IMAGE MODEL

Image data should ideally include:

```text
src
alt
width
height
focal point where needed
```

---

# 115. LINK MODEL

Links should distinguish:

```text
internal
external
download
```

where implementation requires it.

---

# 116. COMPONENT PROPS

Props should represent meaningful variation.

Avoid prop explosions.

Bad conceptual example:

```text
gold=true
dark=true
small=true
rounded=true
glow=true
special=true
```

Prefer named variants.

---

# 117. VARIANT API

Prefer:

```text
variant="primary"
size="md"
```

over dozens of booleans.

---

# 118. SIZE SYSTEM

Common control sizes:

```text
sm
md
lg
```

Not every component needs all three.

---

# 119. RESPONSIVE PROPS

Avoid excessive breakpoint-specific props.

Prefer CSS responsive behavior.

---

# 120. CONDITIONAL CONTENT

Components should not render empty structural blocks.

---

# 121. SEMANTIC HTML

Use:
- button for actions
- anchor for navigation
- heading hierarchy
- lists for navigation/link collections
- form controls for forms

---

# 122. DIV USAGE

Divs are layout tools, not semantic replacements for interactive elements.

---

# 123. HEADING HIERARCHY

Components must not blindly render headings at arbitrary levels.

Page composition should determine correct heading hierarchy.

---

# 124. ARIA

Use ARIA to improve semantics when native HTML is insufficient.

Do not add ARIA unnecessarily.

---

# 125. KEYBOARD

All interactive components must work without a mouse.

---

# 126. TOUCH

All mobile interactions must be comfortable without hover.

---

# 127. HOVER FALLBACK

Hover-only information must have a touch/keyboard equivalent.

---

# 128. FOCUS MANAGEMENT

Menus, dialogs, drawers, and popovers need deliberate focus handling.

---

# 129. REDUCED MOTION

Every animated reusable component must have a reduced-motion behavior.

---

# 130. PERFORMANCE

Reusable components should avoid unnecessary JavaScript.

Prefer CSS for:
- transitions
- simple reveals
- hover effects
- basic responsive behavior

---

# 131. LAZY LOADING

Below-the-fold heavy media should generally load lazily.

---

# 132. PRIORITY MEDIA

Only truly critical hero assets should receive priority loading.

---

# 133. COMPONENT BUNDLE SIZE

Do not import a huge animation/icon library when a small local implementation is sufficient.

---

# 134. SVG

Prefer optimized SVGs for:
- logos
- simple icons
- decorative vector geometry

---

# 135. SVG SECURITY

Do not inject untrusted SVG markup.

---

# 136. IMAGE ALT

Decorative images should have appropriate empty alt behavior.

Informative images require meaningful descriptions.

---

# 137. CARD CLICK AREA

If an entire card is clickable, use a semantically appropriate link structure.

Avoid nested interactive elements that conflict.

---

# 138. CARD ACCESSIBILITY

Card titles should remain meaningful when read without visual context.

---

# 139. INTERACTIVE CARD

Do not make an entire card clickable if it contains multiple independent actions unless the interaction model is carefully designed.

---

# 140. MOBILE CARD DENSITY

Cards should become simpler rather than merely smaller.

---

# 141. TABLES

If data requires a table, use a real semantic table.

Do not force table data into cards when comparison is important.

---

# 142. DATA VISUALIZATION

Charts should follow the global palette while maintaining semantic clarity.

---

# 143. TOOLTIP DATA

Important chart values should not be available only through hover.

---

# 144. VIDEO COMPONENT

If video exists:
- poster
- controls
- accessible label
- responsive aspect ratio
- reduced-motion considerations

---

# 145. AUDIO

If audio exists, use native accessible controls unless a custom player is justified.

---

# 146. DOWNLOAD LINK

Download links should identify the file type/size when useful.

---

# 147. EXTERNAL LINK

External destinations should be visually understandable when context requires it.

---

# 148. PRINT

Components should degrade sensibly in print.

Interactive-only controls may be hidden in print.

---

# 149. DARK UI PRINT

Do not force enormous black backgrounds onto printed pages.

---

# 150. ERROR BOUNDARIES

Global application boundaries should catch failures around complex interactive sections.

---

# 151. COMPONENT FAILURE

A failed enhancement should not destroy surrounding content.

---

# 152. 3D COMPONENT

3D visual components should be isolated from content components.

They must support:

```text
loading
ready
fallback
reduced-motion
mobile quality
```

---

# 153. PODIUM COMPONENT

The podium should eventually be implemented as a dedicated hero visual component rather than an enormous static page background.

It should support:

```text
desktop composition
mobile composition
lighting
motion
fallback
```

---

# 154. PODIUM TEXT

The physical podium asset should not be responsible for critical website text if responsive/readable HTML text is required.

Critical messaging belongs in accessible HTML.

---

# 155. PODIUM BRANDING

Logo/branding rendered into the 3D object is decorative brand reinforcement.

The main page heading remains HTML.

---

# 156. COMPONENT MOTION OWNERSHIP

A component should own its local interaction motion.

Page-level scroll orchestration should own sequencing between components.

---

# 157. GLOBAL MOTION

Do not let every component register its own global scroll listener.

Use a shared motion system where possible.

---

# 158. REVEAL GROUPS

For lists/grids, a parent may coordinate staggered child reveals.

---

# 159. REVEAL LIMIT

Do not stagger dozens of elements individually.

Group reveals logically.

---

# 160. PAGE COMPOSITION

A page should use approximately:

```text
1 major hero
2–6 meaningful content sections
1 strong closing action
global footer
```

Exact page count varies by route.

---

# 161. COMPONENT REPETITION

Repetition is good when it creates rhythm.

It is bad when it creates monotony.

---

# 162. COMPONENT NOVELTY

Introduce a new component only when an existing component cannot communicate the content properly.

---

# 163. ONE-OFF COMPONENTS

One-off sections are acceptable for major brand moments.

They must still consume the global design system.

---

# 164. DESIGN REVIEW QUESTION

Before creating a new component:

```text
Can an existing component variant solve this?
```

If yes, reuse it.

---

# 165. AI IMPLEMENTATION RULE

The coding AI must inspect the component library before creating a new component.

---

# 166. AI DUPLICATION RULE

If two components are visually/functionally 80%+ equivalent, consolidate them unless there is a clear architectural reason not to.

---

# 167. AI STYLE RULE

Never create page-specific CSS for a global component merely to repair a local composition.

Create a supported variant if the variation is reusable.

---

# 168. AI CONTENT RULE

Do not invent:
- event details
- team members
- statistics
- social accounts
- partner logos
- testimonials
- contact information

Use actual project data only.

---

# 169. AI ASSET RULE

Do not substitute generic stock imagery when a specified PDF asset exists.

---

# 170. AI TYPOGRAPHY RULE

Never introduce a new font to solve a local typography problem without approval.

---

# 171. AI COLOR RULE

Never introduce a new brand color to solve a local visual problem without approval.

---

# 172. AI MOTION RULE

Never introduce a new animation style merely because an existing effect is technically possible.

---

# 173. AI RESPONSIVE RULE

Never hide important content on mobile solely to preserve the desktop composition.

Recompose it.

---

# 174. COMPONENT QA

Each component should be tested in isolation and in realistic page composition.

---

# 175. VISUAL QA

Check:
- spacing
- alignment
- hierarchy
- contrast
- state transitions
- responsive behavior

---

# 176. FUNCTIONAL QA

Check:
- navigation
- forms
- buttons
- links
- loading
- errors
- keyboard

---

# 177. MOTION QA

Check:
- entrance
- hover
- active
- exit
- reduced motion
- low-performance devices

---

# 178. MOBILE QA

Check:
- 320px
- 360px
- 390px
- 430px
- tablet
- landscape where relevant

---

# 179. DESKTOP QA

Check:
- laptop
- desktop
- wide desktop

---

# 180. TOUCH QA

Ensure:
- no hover dependency
- comfortable target size
- no accidental activation
- drawers/menus can be dismissed

---

# 181. ACCESSIBILITY QA

Verify:
- keyboard
- focus
- semantics
- contrast
- screen reader labels
- zoom/text scaling
- reduced motion

---

# 182. PERFORMANCE QA

Verify:
- component JS cost
- media weight
- animation performance
- layout shifts
- lazy loading

---

# 183. COMPONENT DOCUMENTATION

Every major component should eventually have a short implementation reference covering:

```text
Purpose
Props
Variants
States
Responsive behavior
Motion
Accessibility
Examples
```

---

# 184. COMPONENT NAMING

Use clear names.

Preferred:

```text
EventCard
ResourceCard
SectionHeader
GlobalFooter
```

Avoid vague:

```text
Box2
Thing
CoolCard
NewSection
```

---

# 185. FILE NAMING

Follow the project's established naming convention consistently.

---

# 186. COMPONENT FOLDERS

Keep related components grouped logically.

---

# 187. TEST FILES

Where the framework supports it, reusable components should have focused tests.

---

# 188. SNAPSHOT TESTS

Visual snapshots may be useful, but they do not replace actual design review.

---

# 189. STORY/SHOWCASE PAGE

A component showcase route may be useful during development.

If created, keep it development-only or clearly separate from public IA.

---

# 190. DESIGN TOKENS DEPENDENCY

Components should consume the global token system defined in document 35.

---

# 191. GLOBAL NAV DEPENDENCY

Navigation components must follow document 33.

---

# 192. GLOBAL FOOTER DEPENDENCY

Footer components must follow document 34.

---

# 193. PODIUM DEPENDENCY

The podium component must follow the approved podium/hero visual specifications.

---

# 194. PAGE DEPENDENCY

Page-specific specifications override composition, not the global visual foundation.

---

# 195. CONFLICT RESOLUTION

When specifications appear to conflict:

```text
Accessibility
↓
Functionality
↓
Global design system
↓
Page composition
↓
Decorative preference
```

---

# 196. NO DECORATIVE OVERRIDE

A decorative idea never overrides:
- readability
- accessibility
- navigation
- performance

---

# 197. FUTURE COMPONENTS

New components can be added as the actual site requires them.

They should be documented and evaluated for reuse.

---

# 198. COMPONENT MATURITY

A component becomes global when:
- it appears in multiple contexts
- its behavior is stable
- its styling is system-aligned
- its API is clear

---

# 199. REFACTORING

If repeated page-specific patterns emerge, refactor them into a reusable component.

---

# 200. FINAL COMPONENT PRINCIPLE

The PDF component library should make implementation faster, not more restrictive.

The purpose is to give the AI a vocabulary.

Instead of inventing UI:

```text
"make something premium here"
```

the agent should think:

```text
"this is an Event Card inside a Section with a Section Header,
using the global Button and Reveal system."
```

---

# 201. FINAL COMPONENT STACK

Conceptually:

```text
DESIGN TOKENS
    ↓
PRIMITIVES
    ↓
COMPOSITES
    ↓
CONTENT COMPONENTS
    ↓
SECTION COMPONENTS
    ↓
PAGE SHELLS
    ↓
PAGES
```

---

# 202. FINAL DESIGN SYSTEM PRINCIPLE

The goal is not maximum component count.

The goal is:

```text
MINIMUM NECESSARY COMPONENTS
+
MAXIMUM REUSE
+
CLEAR VARIANTS
+
CONSISTENT BEHAVIOR
```

---

# 203. FINAL EXPERIENCE

When a visitor moves from:

```text
Home
→ Events
→ Academy
→ Resources
→ About
→ Contact
```

the interface should feel immediately familiar.

Buttons should behave the same.

Cards should feel related.

Typography should feel related.

Motion should feel related.

Navigation should feel related.

Footer should feel related.

Yet each page can still have its own cinematic composition.

---

# 204. FINAL PDF COMPONENT PHILOSOPHY

```text
ONE SYSTEM
ONE VOCABULARY
ONE BRAND WORLD
MANY PURPOSES
```

# END OF GLOBAL COMPONENT LIBRARY & REUSABLE UI SPECIFICATION
