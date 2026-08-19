# PAK DEBATE FORUM — COMPONENT SYSTEM

## 0. Document Status

**Status:** Design specification / implementation contract  
**Scope:** Public website component system, shared UI primitives, page-family components, states, responsive variants, accessibility, motion hooks, data contracts, and AI implementation rules.  
**Authority:** This document defines how reusable interface components should look and behave. It must be read together with `00-DESIGN-MASTER.md`, `01-BRAND-IDENTITY.md`, `02-COLOR-SYSTEM.md`, `03-TYPOGRAPHY.md`, and `04-GRID-SPACING-LAYOUT.md`.

This is an implementation specification, not a moodboard. The component system exists to prevent visual drift across pages and to ensure that dynamic production content can be rendered consistently.

---

# 1. COMPONENT SYSTEM PRINCIPLES

## 1.1 Reuse Before Reinvention

Every recurring visual pattern must be implemented once as a reusable component or component family before it is reused across pages.

Do not create separate near-duplicate components such as:

- `EventCard.tsx`
- `UpcomingEventCard.tsx`
- `CompetitionCard.tsx`
- `EventTile.tsx`

when the differences can be represented as props, variants, slots, or composition.

The preferred approach is one canonical event-card system with controlled variants.

## 1.2 Semantic Variant System

Components should expose explicit semantic variants rather than encouraging arbitrary styling at call sites.

Examples:

- `Button variant="primary"`
- `Button variant="secondary"`
- `Button variant="ghost"`
- `Button variant="text"`
- `Card variant="editorial"`
- `Card variant="data"`
- `Card variant="glass"`
- `StatusBadge tone="success"`

Do not allow arbitrary per-instance colors, radii, or shadows unless the design specification explicitly defines an extension point.

## 1.3 Content Is Not Styling

Dynamic content may alter:

- title length
- metadata count
- description length
- dates
- pricing
- status
- image availability

Dynamic content must not force the component to change its visual language.

The component should gracefully accommodate content variation through wrapping, truncation, clamping, expansion, or responsive stacking.

## 1.4 Component Ownership

A component owns its own internal spacing and state visuals.

A parent layout owns:

- placement
- column width
- gap between sibling components
- section rhythm

Avoid double spacing where both parent and child add equivalent external margins.

## 1.5 Visual Restraint

Components should remain visually quiet until hierarchy requires emphasis.

Default components should use:

- controlled borders
- low-contrast surfaces
- restrained radii
- subtle shadows
- selective gold accents
- subtle green accenting

Do not make every card luminous, outlined in gold, or fully glassmorphic.

---

# 2. COMPONENT TAXONOMY

The public UI is organized into the following component layers.

## Layer A — Primitives

- Container
- Stack
- Inline
- Grid
- Divider
- Spacer
- VisuallyHidden
- Icon
- Image
- AspectRatio
- FocusRing

These are structural primitives, not visual decoration.

## Layer B — Global Interface

- SiteHeader
- DesktopNavigation
- MobileNavigation
- GlobalCTA
- Breadcrumbs
- SiteFooter
- SocialLinks
- ScrollIndicator
- PageTransitionShell

## Layer C — Typography / Content Primitives

- Eyebrow
- SectionHeading
- RichTextBlock
- Quote
- StatValue
- Label
- MetaList
- ReadMore

## Layer D — Actions and Controls

- Button
- IconButton
- LinkButton
- TextLink
- Input
- Textarea
- Select
- Checkbox
- Radio
- Toggle
- DateField
- SearchField
- FilterChip
- FilterBar
- Tabs
- Accordion
- Pagination

## Layer E — Content Components

- ImageCard
- ProgramCard
- EventCard
- CoachCard
- ResultCard
- ResourceCard
- TestimonialCard
- StatCard
- FAQItem
- LogoLockup
- FeatureBlock
- TimelineItem
- TrainingStep

## Layer F — Page/Funnel Components

- Hero
- PodiumHero
- AcademyIntro
- ProgramDirectory
- ProgramDetailHero
- ProgramCurriculum
- CoachDirectory
- EventDirectory
- EventDetailHero
- EventInformationPanel
- RegistrationForm
- RegistrationSummary
- RegistrationSuccess
- ResultsHighlight
- ResourceLibrary
- FeedbackForm
- ContactPanel
- FinalCTA

## Layer G — System States

- LoadingShell
- SkeletonCard
- EmptyState
- ErrorState
- SuccessState
- NotFoundState
- InlineValidation
- Toast
- Modal
- Drawer
- ConfirmDialog

---

# 3. GLOBAL COMPONENT CONTRACTS

Every reusable component should document or encode the following:

1. Purpose
2. Semantic HTML root
3. Required props/data
4. Optional props/data
5. Supported variants
6. Supported states
7. Desktop behavior
8. Tablet behavior
9. Mobile behavior
10. Accessibility behavior
11. Motion behavior
12. Loading behavior
13. Error behavior
14. Content-length behavior
15. Prohibited customizations

A component is considered complete only when these behaviors are defined.

---

# 4. CONTAINER

## Purpose

Provides the horizontal alignment boundary for all page content.

## Responsibilities

- apply global max-width tokens
- apply responsive gutters
- maintain consistent page alignment
- prevent content from becoming excessively wide

## Variants

### `standard`
Used for normal page sections.

### `wide`
Used for editorial hero sections and broad visual compositions.

### `narrow`
Used for reading-heavy content, forms, FAQs, and detail copy.

### `fullBleed`
Used when the component itself intentionally spans the viewport.

## Rules

The container does not introduce decorative styles.

No random page-specific `max-width` values unless approved as an explicit editorial exception.

---

# 5. SITE HEADER

## Purpose

Provide global orientation and primary navigation across the public organization.

The header must communicate that Pak Debate Forum is the parent organization and the Academy is a major pillar within it.

The production information architecture defines the primary navigation as:

- Home
- About
- Academy
- Programs
- Events
- Resources
- Results

Primary CTA:

**Join the Academy**

Secondary destinations such as Feedback and Contact remain accessible through utility navigation and/or the footer.

## Desktop Structure

Recommended order:

`Brand Lockup → Primary Navigation → Utility/Secondary → Primary CTA`

The header should remain visually quiet so that the hero owns the first impression.

## Navigation State

### Default

- transparent or near-transparent over the hero
- warm white text
- restrained contrast
- no heavy visible container

### Scrolled

- slightly stronger surface separation
- subtle backdrop treatment where required for readability
- maintain same height unless a deliberate compact state is specified

### Active Page

Use a restrained gold or green indicator.

Do not use large pills around every nav item.

### Hover

- slight color shift
- subtle underline or line reveal
- no bounce
- no scale greater than approximately 1.02

## Mobile Header

Replace the full navigation with:

`Menu button + Logo + optional primary CTA`

The mobile menu should be a deliberate full-height or high-coverage navigation experience rather than a tiny browser-style dropdown.

Mobile navigation should expose all important destinations without overcrowding the first viewport.

## Accessibility

- semantic `header` and `nav`
- `aria-current="page"` for active route
- keyboard-accessible menu button
- visible focus state
- menu closes on escape
- focus returns to trigger after close
- no pointer-only navigation

## Motion

Header transitions must not disorient the user.

Menu panel entrance should use opacity + transform, not a dramatic 3D flip.

---

# 6. LOGO LOCKUP

## Purpose

Represent the official organization identity.

## Variants

- PBF primary logo
- PBF compact mark
- Academy lockup
- monochrome light
- monochrome dark
- gold-accented special-context variant only when approved

## Rules

Do not redraw the logo in CSS.

Do not use generated replacement logos.

Do not change the proportions.

Maintain the required clear space defined by the asset specification.

Do not use a decorative gold glow behind the logo by default.

---

# 7. BUTTON SYSTEM

Buttons are among the highest-visibility components and must remain consistent.

## 7.1 Primary Button

Purpose:

Highest-priority conversion action.

Typical actions:

- Join the Academy
- Register
- Enroll
- Apply
- Start Registration

Visual language:

- strong gold treatment
- dark text or approved high-contrast text depending on exact fill
- restrained radius
- strong but not oversized typography
- precise padding

Hover:

- controlled brightness change
- subtle translation or highlight
- optional animated background sweep

Do not use large springy scaling.

## 7.2 Secondary Button

Purpose:

Important but less dominant action.

Visual language:

- dark/transparent surface
- visible border
- warm text
- restrained gold or green interaction state

## 7.3 Ghost Button

Purpose:

Low-priority action in cinematic sections.

Minimal visual weight.

## 7.4 Text Action

Used for:

- Learn more
- View details
- Read story
- View all

Should appear as a typographic interaction with a directional cue where appropriate.

## 7.5 Button States

Every button must support:

- default
- hover
- focus-visible
- active
- disabled
- loading
- success where relevant

## 7.6 Loading

Loading buttons must preserve width to prevent layout shift.

Spinner should remain visually quiet.

Do not replace the entire button with a different shape during loading.

## 7.7 Mobile

Primary touch targets should remain comfortably tappable.

Where two actions are presented side by side on desktop, they may stack vertically on mobile according to hierarchy.

---

# 8. ICON BUTTON

Used for:

- menu
- close
- search
- filters
- previous/next
- share
- expand/collapse

Rules:

- icon must have an accessible label
- hit target must exceed visible icon size
- avoid decorative icon-only buttons without a tooltip/label where function is ambiguous

Interaction should be quick but restrained.

---

# 9. TEXT LINK SYSTEM

Text links should remain identifiable through:

- contrast
- underline or animated underline where appropriate
- context

Do not rely only on color to differentiate links from surrounding text.

A common signature:

`Link text + thin directional arrow`

The arrow may translate slightly on hover.

---

# 10. SECTION HEADING

## Anatomy

1. Eyebrow
2. Main heading
3. Supporting copy
4. Optional action

Example structure:

`ACADEMY / The Academy / Learn with purpose. / View programs →`

## Alignment

Default:

- left aligned
- controlled measure
- strong top/bottom rhythm

Center alignment is permitted for hero statements and deliberately centered sections.

## Motion

Eyebrow enters first, heading second, supporting copy third, action fourth.

The stagger must remain subtle.

---

# 11. EYEBROW / KICKER

Purpose:

Provide context before a major heading.

Examples:

- PAK DEBATE FORUM ACADEMY
- UPCOMING EVENTS
- OUR RESULTS
- WHY PBF

Visual treatment:

- small uppercase or compact label
- increased tracking
- muted gold/green or warm neutral
- no excessive decorative ornament

Do not use it on every small card.

---

# 12. DIVIDER SYSTEM

Use dividers to organize information, not decorate every component.

Approved treatments:

- low-contrast horizontal line
- very subtle vertical rule
- thin gold line only for intentional emphasis

Divider opacity should remain low.

Do not create high-contrast boxes around every text group.

---

# 13. CARD SYSTEM

Cards are content containers, not the defining visual language of the entire website.

The correct default is to balance cards with:

- open editorial blocks
- large imagery
- whitespace
- full-width bands
- typography-led layouts

## Card variants

### Editorial

Used for:

- stories
- testimonials
- leadership
- selected resources

### Data

Used for:

- programs
- events
- results

### Glass

Used sparingly for:

- overlays
- hero information
- floating controls

### Feature

Used for a major highlighted offering.

## Shared card anatomy

Possible slots:

1. media
2. eyebrow/category
3. title
4. metadata
5. description
6. footer/action

Not every variant uses every slot.

## Card radius

Use the global radius tokens from the spatial/design system.

Avoid excessive pill-shaped cards.

## Card hover

Permitted effects:

- subtle image scale
- border illumination
- background shift
- arrow movement
- slight elevation

Avoid large card translation.

---

# 14. PROGRAM CARD

## Purpose

Allow a visitor to quickly understand what a program is and whether they should explore it.

## Required information

When available:

- program title
- category
- level
- age range
- duration
- delivery mode
- coach
- price/status
- concise description

The actual data model supports these structured program fields, and the UI must consume real backend data rather than hardcoded copies.

## Hierarchy

1. category
2. title
3. value proposition/description
4. key metadata
5. action

## Variants

### Directory

Dense enough for browsing.

### Featured

Larger visual treatment for homepage/Academy highlights.

### Compact

Used where many programs must fit into a constrained layout.

## Dynamic resilience

Long titles must wrap without breaking card height hierarchy.

Missing optional metadata should collapse gracefully rather than leaving awkward empty placeholders.

## Action

Preferred:

`View program →`

The card itself may be clickable, but keyboard and screen-reader semantics must remain clear.

---

# 15. EVENT CARD

## Required information

When available:

- event title
- type
- date
- venue
- status
- fee
- capacity or availability
- concise description

## Visual identity

Events can use slightly more energetic imagery than Academy programs, while preserving the same brand system.

Competition photography may be used as the dominant media.

## Event status

Examples:

- Open
- Coming Soon
- Full
- Completed
- Registration Closed

Status should be semantic and visually consistent.

## Actions

Primary:

`View Event`

Secondary if registration is available:

`Register`

Do not make every action visually primary.

---

# 16. COACH CARD

Purpose:

Humanize Academy expertise and establish instructor credibility.

Required/optional content:

- portrait
- name
- title
- expertise
- short bio
- associated programs

Visual approach:

Photography should dominate.

Text should remain minimal on the card itself.

Full detail can live on the page or expanded interaction if such a page is later introduced.

Hover may use:

- image shift
- subtle overlay
- role reveal
- arrow movement

Avoid over-animated portraits.

---

# 17. RESULT CARD

Purpose:

Communicate verified competitive success.

Possible fields:

- event/tournament
- achievement
- participant/team
- date/season
- category
- optional image

Use restrained celebratory emphasis.

Never manufacture numbers or achievements merely to complete the visual pattern.

---

# 18. RESOURCE CARD

Purpose:

Allow visitors to discover useful educational material quickly.

Possible metadata:

- title
- category
- file type
- source
- date
- short description
- external/download action

Use a quiet library/editorial visual language.

Resource cards should not look identical to Program Cards because the information purpose differs.

---

# 19. TESTIMONIAL CARD

Purpose:

Build trust through real participant/community voice.

Anatomy:

- quote
- person name
- role/context
- optional image
- optional program/event association

Quote typography may use the display serif.

Keep quotation decoration minimal.

Do not invent testimonials for production content.

---

# 20. STAT BLOCK

Purpose:

Make verified organizational impact immediately legible.

Anatomy:

- large numeric value
- label
- optional qualifier/source

Examples could include verified:

- students
- programs
- events
- awards

Do not include fabricated impact values.

The component should support values arriving dynamically.

Long values must not overflow.

Animation:

Optional count-up when values are visible for the first time.

Provide a static final value for reduced-motion users.

---

# 21. META LIST

Used for structured fields on detail pages.

Examples:

Program:

- Level
- Age Range
- Duration
- Delivery Mode
- Coach
- Schedule
- Price

Event:

- Date
- Venue
- Type
- Registration Fee
- Capacity
- Status

Visual language:

label + value pairs, not heavy table borders.

On mobile, these become stacked rows.

---

# 22. BADGE / STATUS CHIP

Purpose:

Communicate categorical state.

Examples:

- Upcoming
- Open
- Full
- Completed
- Featured
- New

Avoid using chips as decoration.

Each color must map to a semantic token.

Do not introduce a new color because a status “needs to stand out more.”

---

# 23. SEARCH FIELD

Use on:

- Programs
- Events
- Resources
- Admin where applicable

Behavior:

- visible keyboard focus
- clear button where appropriate
- debounce only if backed by async querying
- preserve query state when navigating where UX requires it

Placeholder text should explain what is searchable.

Do not use placeholder text as the sole label.

---

# 24. FILTER BAR

Used primarily in catalogue pages.

Desktop:

- horizontal grouping
- enough spacing between control groups

Mobile:

- horizontal scroll chips or filter drawer
- never cram 8+ controls into a tiny row

Filter controls should not create unpredictable layout jumps.

Applied filter state must be clearly visible.

---

# 25. TABS

Use only when two or more views belong to the same conceptual page region.

Do not use tabs simply to avoid scrolling.

Active state:

- clear contrast
- subtle gold/green indicator

Tabs must be keyboard navigable.

Mobile may convert to horizontally scrollable tabs where appropriate.

---

# 26. ACCORDION / FAQ

Purpose:

Progressively disclose secondary information.

Anatomy:

- question
- expand icon
- answer

Animation:

height/clip + opacity with restrained duration.

Do not animate giant elastic motion.

Keyboard and assistive technology state must remain correct.

---

# 27. BREADCRUMBS

Use on deep detail pages:

Program Detail
Event Detail
Potential resource detail pages if introduced later

Not required on the homepage.

Structure:

`Home / Academy / Programs / Program Name`

On mobile, may collapse to:

`← Programs`

when full breadcrumb text becomes excessive.

---

# 28. FORM SYSTEM

Forms must feel like part of the same premium product, not a third-party plugin.

## Field anatomy

1. label
2. field
3. helper text where needed
4. validation message

Do not rely on placeholder text as the field label.

## Input states

- default
- hover
- focus
- filled
- invalid
- valid where useful
- disabled
- readonly

## Focus

Focus state must be highly visible without breaking the cinematic palette.

Use an accessible ring/highlight based on the global color system.

## Validation

Messages should be:

- specific
- brief
- placed near the field
- programmatically associated with it

## Mobile

Use appropriate `inputmode` and `autocomplete` attributes.

Do not use overly small fields or controls.

---

# 29. REGISTRATION COMPONENT FAMILY

The production architecture uses one registration flow for both events and Academy programs.

The visual system should therefore use one reusable registration component family.

Possible sequence depending on the final functional flow:

1. Context summary
2. Participant details
3. Additional information
4. Review
5. Submission
6. Confirmation

Do not visually imply a multi-step process unless the implemented UX actually requires multiple steps.

The design must remain compatible with the existing type/reference approach.

---

# 30. REGISTRATION SUMMARY

On desktop:

Use a two-column layout where appropriate:

`Form / Summary`

On mobile:

`Summary → Form` or collapsible summary depending on page context.

The summary should show:

- event/program name
- relevant date/schedule
- fee where available
- key context

Never invent payment behavior not established in the product requirements.

---

# 31. MODAL

Use sparingly.

Good uses:

- confirmation
- image enlargement
- compact secondary information
- destructive action confirmation

Avoid using modals for core page content that should be navigable.

Rules:

- trap focus
- close on escape where appropriate
- restore focus
- prevent background interaction
- support mobile viewport behavior

---

# 32. DRAWER

Good uses:

- mobile menu
- mobile filters
- secondary detail controls

The drawer should feel like a part of the site architecture, not a generic side panel.

Animation:

- transform + opacity
- controlled duration
- no overshoot

---

# 33. TOAST / ALERT

Used for:

- successful submission
- saved state
- non-blocking errors

Do not use toast for important information that can disappear before it is read.

Toast messages must have sufficient contrast and accessible timing.

---

# 34. LOADING SYSTEM

Every data-driven page requires a planned loading experience.

Examples:

- program catalogue skeleton
- event catalogue skeleton
- coach skeleton
- results skeleton
- resource skeleton

Skeletons should mimic the actual component geometry to avoid layout shift.

Do not show animated skeletons for extremely short loading intervals if they would create more visual noise than value.

---

# 35. EMPTY STATES

Every dynamic collection should define an empty state.

Examples:

### No upcoming events

Explain that no public event is currently scheduled and optionally guide the user toward Academy/news/resources.

### No programs match filters

Provide a clear reset-filter action.

### No results available

Explain without implying failure.

Empty states should remain visually consistent with the brand but less visually prominent than populated content.

---

# 36. ERROR STATES

Error UI must be calm and actionable.

Avoid:

- alarming red full-screen treatments
- vague “Something went wrong” with no next step

Preferred pattern:

`What happened` + `What to do next` + optional retry.

If a page can partially render, preserve available content instead of replacing the entire page with a generic error screen.

---

# 37. NOT FOUND STATE

The 404 experience can be more expressive than ordinary error states while remaining within the design language.

It may use a dark architectural visual and a strong typographic message.

Provide clear navigation back to:

- Home
- Academy
- Programs
- Events

---

# 38. HERO COMPONENT FAMILY

There is no single universal hero layout.

Instead, define a hero family.

### Hero A — Cinematic Organization Hero

Used for homepage.

Features:

- large statement
- visual object / photography
- atmospheric background
- primary CTA

### Hero B — Academy Hero

More educational and developmental.

### Hero C — Catalogue Hero

Simpler, designed to transition quickly into filters/content.

### Hero D — Detail Hero

Used for Program Detail / Event Detail.

Contains metadata and strong primary action.

### Hero E — Utility Hero

Used for Resources, Contact, Feedback where a large cinematic hero is unnecessary.

Consistency means shared type and spacing rules, not identical layouts.

---

# 39. PODIUM HERO COMPONENT

The Podium Hero is a specialized component and has a dedicated specification in `09-3D-PODIUM.md`.

This component must support:

- static fallback image
- transparent asset
- optional real-time 3D asset
- entrance state
- idle state
- pointer-responsive state
- scroll-controlled state
- reduced-motion state
- mobile composition

The component should not spread podium-specific logic through unrelated page components.

---

# 40. FEATURE BLOCK

Used for large editorial storytelling sections.

Common pattern:

`Media + Copy`

Variants:

- media left
- media right
- media background
- centered
- full bleed

Do not create a unique component for every section arrangement.

Use composition props/variants.

---

# 41. TRAINING STEP

Used in Academy training journey.

Anatomy:

- step number
- stage title
- description
- optional supporting metric/icon
- visual progression indicator

The progression may visually connect steps using a thin line or spatial path.

Desktop may be horizontal or stepped editorial.

Mobile should become vertically sequential.

---

# 42. FINAL CTA

Purpose:

Convert interest into a clear next action.

Visual treatment should become more concentrated and dramatic than ordinary content sections, but it must remain consistent with the overall system.

Primary CTA usually:

`Join the Academy`

Secondary actions may point to programs/events.

Do not place 5 competing CTA buttons in the final section.

---

# 43. FOOTER

The footer is a system component, not an afterthought.

## Required regions

- logo/identity
- short organization description
- key navigation
- Academy/program links
- social/contact links
- legal/copyright area

The visual weight should be lower than the hero.

Footer may use a darker black surface and a restrained architectural background treatment.

Do not turn the footer into another visually exhausting hero.

---

# 44. PAGE-FAMILY COMPONENT MATRIX

## Home

- SiteHeader
- PodiumHero
- SectionHeading
- StatBlock
- FeatureBlock
- ProgramCard
- EventCard
- CoachCard
- ResultCard
- TestimonialCard
- ResourceCard
- FinalCTA
- SiteFooter

## About

- SiteHeader
- EditorialHero
- FeatureBlock
- TimelineItem
- Coach/Leadership cards as appropriate
- StatBlock
- ResultCard
- FinalCTA
- Footer

## Academy

- AcademyHero
- AcademyIntro
- TrainingStep
- ProgramCard
- CoachCard
- FeatureBlock
- TestimonialCard
- FAQItem
- FinalCTA

## Programs

- CatalogueHero
- SearchField
- FilterBar
- ProgramCard
- EmptyState
- LoadingShell
- FinalCTA

## Program Detail

- Breadcrumbs
- ProgramDetailHero
- MetaList
- ProgramCurriculum
- LearningOutcome list
- CoachCard/CoachSummary
- FAQItem
- RegistrationCTA
- RelatedProgram cards

## Coaches

- DirectoryHero
- Search/filter if needed
- CoachCard
- EmptyState
- FinalCTA

## Events

- CatalogueHero
- SearchField
- FilterBar
- EventCard
- EmptyState
- EventCTA

## Event Detail

- Breadcrumbs
- EventDetailHero
- MetaList
- EventInformationPanel
- Rules/content blocks
- RegistrationCTA
- RelatedEvents

## Registration

- ContextHeader
- RegistrationForm
- RegistrationSummary
- Validation
- SuccessState
- ErrorState

## Resources

- ResourceHero
- SearchField
- FilterBar
- ResourceCard
- EmptyState

## Results

- ResultsHero
- StatBlock
- ResultCard
- TimelineItem or season group
- FinalCTA

## Feedback

- UtilityHero
- FeedbackForm
- SuccessState
- ErrorState

## Contact

- UtilityHero
- ContactPanel
- Contact/Feedback form infrastructure
- SocialLinks
- SuccessState

---

# 45. COMPONENT STATES ARE PART OF DESIGN

A component is incomplete if only its default state exists.

At minimum, interactive components should account for:

- default
- hover
- focus-visible
- pressed/active
- disabled

Data components should account for:

- loading
- populated
- empty
- error

Form components should account for:

- default
- focused
- filled
- invalid
- valid where useful
- disabled

Responsive behavior must be explicit rather than assumed.

---

# 46. MOTION CONTRACT FOR COMPONENTS

Motion must be predictable across the component system.

## Shared motion rules

- default to transform/opacity for performance
- do not animate layout properties unnecessarily
- avoid excessive simultaneous animations
- honor reduced-motion preferences
- do not use motion as a substitute for hierarchy

## Hover

Hover effects must communicate affordance.

They must not radically alter component size.

## Enter animations

Content should enter in a sequence that follows hierarchy.

Recommended order:

`context → title → supporting content → action`

## Exit animations

Shorter and less noticeable than entry animations.

---

# 47. ACCESSIBILITY CONTRACT

Every component must have a semantic and keyboard-safe implementation.

Requirements include:

- semantic HTML where possible
- visible focus
- accessible name for controls
- correct role only when native semantics are insufficient
- correct expanded/selected/pressed states
- sufficient contrast
- no color-only communication
- touch targets large enough to operate
- reduced-motion support

Do not use a clickable `div` where a button or link is semantically appropriate.

---

# 48. CONTENT LENGTH CONTRACT

Because programs/events/resources are dynamic, components must survive:

- very short titles
- long titles
- missing descriptions
- long names
- long category labels
- variable dates
- long locations
- large price values
- empty optional metadata

Do not use fixed-height text boxes that clip content unless truncation is an explicit design decision.

If truncation is used, the complete content must remain discoverable.

---

# 49. IMAGE CONTRACT

Every media component must define:

- aspect ratio
- object-fit
- object-position
- loading strategy
- placeholder/fallback
- alt-text behavior

Do not use arbitrary image crops across similar card types.

Photography must preserve faces and meaningful subjects when cropping.

---

# 50. RESPONSIVE COMPONENT CONTRACT

Every component must state which of the following applies:

1. Same geometry, scaled
2. Same geometry, stacked
3. Same content, alternate composition
4. Desktop-only element removed on mobile
5. Mobile-only control introduced
6. Reduced-motion variant
7. Alternate image/asset

Do not assume a desktop card can simply be shrunk.

---

# 51. DATA / API CONTRACT

Components that display production content should receive normalized data from the data layer rather than importing database behavior directly into visual primitives.

Preferred architecture:

`API/data layer → page/container → reusable component`

Avoid:

`Card → direct D1/API call`

A presentational component should not own data fetching unless it is explicitly designed as a data-aware container component.

This preserves testability and reuse.

---

# 52. SECURITY BOUNDARY

Public components must not expose admin-only controls merely because they share data types with the admin application.

Admin functionality remains separate from the public design system.

The existing JWT authentication/security architecture must not be modified during visual component refactoring without explicit technical justification.

---

# 53. ADMIN COMPONENT RELATIONSHIP

The admin UI may reuse foundational primitives such as:

- typography
- buttons
- form fields
- tables
- status badges
- modals
- feedback states

However, admin pages should not inherit every cinematic public-page effect.

Admin priority is:

**clarity → speed → correctness → consistency**

not cinematic spectacle.

---

# 54. TABLES / DATA-DENSE INTERFACES

Where admin or future public data requires tables:

- keep headers clear
- maintain readable row height
- use sticky headers only when genuinely helpful
- provide mobile transformation
- avoid forcing wide tables into tiny screens

Mobile may convert a row into a stacked record card rather than horizontal overflow.

---

# 55. PROHIBITED COMPONENT PATTERNS

Do not introduce:

- generic Bootstrap-like cards everywhere
- excessive rounded pills
- random gradients
- emoji as primary icons
- arbitrary neumorphism
- heavy glassmorphism on every surface
- giant shadows
- inconsistent button sizes
- random border radii
- decorative animation on every component
- auto-playing carousels that users cannot control
- inaccessible custom dropdowns
- click-only cards with no keyboard semantics
- component-specific fonts
- one-off color values

---

# 56. AI CODING RULES

When the coding AI needs a UI pattern, it must follow this decision tree:

### Step 1
Search this component document for an existing component.

### Step 2
Check whether an existing variant can solve the requirement.

### Step 3
If not, compose existing components.

### Step 4
Only create a new component when the pattern is semantically distinct and reusable.

### Step 5
Document the new component before reusing it elsewhere.

The AI must not silently fork an existing component merely because it wants slightly different spacing or a different color.

---

# 57. COMPONENT NAMING

Use semantic names.

Good:

- `ProgramCard`
- `EventCard`
- `SectionHeading`
- `RegistrationSummary`
- `TrainingStep`

Bad:

- `CoolCard`
- `GoldBox`
- `FancySection`
- `BigThing`

Names should describe purpose, not appearance.

---

# 58. VARIANT NAMING

Variants should describe intent:

Good:

- `primary`
- `secondary`
- `editorial`
- `featured`
- `compact`
- `inverse`
- `data`

Avoid purely visual names:

- `goldCard`
- `blackCard2`
- `roundedBig`

---

# 59. COMPONENT COMPOSITION RULE

Complex sections should be composed of smaller components rather than becoming one giant page-specific component.

Example:

`ProgramDetailPage`

should compose:

- `Breadcrumbs`
- `ProgramDetailHero`
- `MetaList`
- `RichTextBlock`
- `CurriculumList`
- `CoachSummary`
- `FAQList`
- `RegistrationCTA`

rather than containing every visual rule directly.

---

# 60. CSS / STYLE OWNERSHIP

Prefer centralized design tokens and component styles over scattered magic values.

Repeated values should live in:

- CSS custom properties
- design token files
- shared component styles
- utility system where appropriate

If the same visual value appears repeatedly, it should not be copied manually into many unrelated files.

---

# 61. VISUAL QA CONTRACT

Every major component must be checked at minimum against:

- desktop wide
- desktop standard
- tablet
- mobile standard
- mobile compact

Check:

- hierarchy
- wrapping
- alignment
- spacing
- contrast
- state transitions
- image cropping
- keyboard focus
- loading state
- error/empty state

---

# 62. REFERENCE IMAGE USE

Reference images are visual authority for:

- composition
- mood
- hierarchy
- material treatment
- lighting
- density
- typography relationship
- visual pacing

They are not literal templates to copy pixel-for-pixel.

Do not reproduce unrelated content or invented labels from generated reference boards as real PBF information.

---

# 63. PRODUCTION CONTENT INTEGRITY

The product context establishes that official PBF information takes precedence over generated placeholder information.

Components must therefore distinguish between:

- official content
- verified dynamic content
- temporary placeholder content

Never create permanent-looking fabricated achievements, statistics, testimonials, biographies, or prices simply because the component visually expects them.

---

# 64. DESIGN-SYSTEM EXTENSION RULE

A new design pattern is permitted only when all of the following are true:

1. Existing components cannot reasonably express the requirement.
2. The pattern is likely to recur or is strategically important.
3. It fits the established visual language.
4. Its responsive behavior is defined.
5. Its motion behavior is defined if interactive.
6. Its accessibility behavior is defined.
7. It is documented before broad reuse.

---

# 65. COMPONENT INVENTORY — IMPLEMENTATION CHECKLIST

The implementation should eventually contain or map the following canonical pieces:

### Global

- [ ] Container
- [ ] SiteHeader
- [ ] Navigation
- [ ] MobileNavigation
- [ ] Footer
- [ ] LogoLockup
- [ ] Breadcrumbs

### Typography/content

- [ ] Eyebrow
- [ ] SectionHeading
- [ ] RichTextBlock
- [ ] Quote
- [ ] StatValue
- [ ] Label

### Actions

- [ ] Button
- [ ] IconButton
- [ ] TextLink
- [ ] SearchField
- [ ] FilterChip
- [ ] FilterBar
- [ ] Tabs
- [ ] Accordion

### Cards

- [ ] ProgramCard
- [ ] EventCard
- [ ] CoachCard
- [ ] ResultCard
- [ ] ResourceCard
- [ ] TestimonialCard
- [ ] StatCard

### Page structures

- [ ] Hero family
- [ ] PodiumHero
- [ ] FeatureBlock
- [ ] TrainingStep
- [ ] FinalCTA
- [ ] DetailHero
- [ ] RegistrationSummary

### States

- [ ] Skeleton
- [ ] LoadingShell
- [ ] EmptyState
- [ ] ErrorState
- [ ] SuccessState
- [ ] NotFoundState
- [ ] Toast
- [ ] Modal
- [ ] Drawer

---

# 66. HANDOFF TO NEXT DESIGN DOCUMENTS

This component document defines the component architecture and behavior contract.

Detailed component visual values should continue to inherit from:

- `02-COLOR-SYSTEM.md`
- `03-TYPOGRAPHY.md`
- `04-GRID-SPACING-LAYOUT.md`

Component animation details continue in:

- `08-MOTION-ANIMATION.md`
- `09-3D-PODIUM.md`
- `13-PAGE-TRANSITIONS.md`

Asset rules continue in:

- `06-IMAGERY-ASSET-SYSTEM.md`
- `07-ICONOGRAPHY.md`

Responsive details continue in:

- `10-RESPONSIVE-SYSTEM.md`

The individual page documents should reference these components rather than redefining their appearance independently.

---

# 67. FINAL COMPONENT PRINCIPLE

The component system exists so that Pak Debate Forum feels like **one intentional institution** even when the user moves between:

Home → About → Academy → Programs → Program Detail → Coaches → Events → Event Detail → Registration → Resources → Results → Feedback → Contact.

The user should never feel that one page was designed by a different team, with a different product, using a different visual language.

The component system is the mechanism that turns the visual direction into a consistent product.
