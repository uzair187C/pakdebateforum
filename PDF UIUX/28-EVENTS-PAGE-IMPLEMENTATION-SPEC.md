# PAK DEBATE FORUM (PDF) — 28 EVENTS PAGE IMPLEMENTATION SPECIFICATION

Status: Dedicated Events page implementation contract.

Purpose:
Define the visual, structural, responsive, interaction, state, and motion rules for the PDF Events experience.

This document works with:
- global design system
- page-by-page implementation master
- component/state specifications
- responsive specification
- motion specification
- data/content architecture

The Events experience must feel like the same PDF website as the homepage while becoming more information-oriented.

---

# 1. EVENTS PAGE PURPOSE

The Events experience should make it easy to:

- discover upcoming PDF events
- understand what each event is
- scan essential event information
- filter/search where supported
- open an event detail page
- take the relevant primary action

The page should feel:

```text
organized
editorial
premium
active
clear
community-oriented
```

It should not feel like a generic calendar dashboard.

---

# 2. EVENTS VISUAL ROLE

Homepage:
```text
emotional / cinematic
```

Events page:
```text
editorial / discovery-focused
```

Event detail:
```text
immersive / information-focused
```

The Events page should therefore reduce the amount of cinematic spectacle while retaining:

- black foundation
- restrained gold
- premium typography
- controlled depth
- consistent motion
- strong spacing

---

# 3. GLOBAL SHELL

Use the shared:

- header
- navigation
- typography
- color system
- spacing
- buttons
- cards
- footer
- responsive tokens
- motion tokens

Do not create a separate visual identity for Events.

---

# 4. HEADER

The Events page may begin with a dark/solid header rather than the transparent cinematic homepage header if required by the global navigation system.

The header must remain consistent with the global site.

---

# 5. PAGE HERO

The Events hero should immediately answer:

```text
Where am I?
What can I find here?
```

Recommended hierarchy:

```text
eyebrow/context
H1: Events
short supporting description
optional primary action
```

Do not recreate the homepage podium hero.

---

# 6. EVENTS HERO VISUAL

A subtle approved visual may be used.

Potential treatments:

- atmospheric black/gold gradient
- approved event photography
- restrained abstract texture
- editorial typography

Do not add a random decorative 3D object merely to make the page visually interesting.

---

# 7. HERO HEIGHT

The Events hero should be significantly shorter than the homepage hero.

It should establish context without pushing the event list far below the fold.

---

# 8. HERO MOBILE

Mobile hero should remain compact.

The page title and purpose should become clear quickly.

---

# 9. EVENTS PAGE INFORMATION ARCHITECTURE

Conceptual structure:

```text
HEADER
↓
PAGE HERO
↓
DISCOVERY CONTROLS
↓
EVENT COLLECTION
↓
PAGINATION / LOAD MORE IF REQUIRED
↓
OPTIONAL SUPPORTING CTA
↓
FOOTER
```

Do not add sections that do not serve event discovery.

---

# 10. DISCOVERY CONTROLS

If supported by the product:

- search
- category/type filter
- date filter
- status filter
- location filter
- sort

Only expose filters that exist in the actual data model.

Do not invent filter categories.

---

# 11. FILTER BAR — DESKTOP

Desktop may use:

```text
search
+
compact filter controls
+
optional sort
```

Keep the control area visually restrained.

---

# 12. FILTER BAR — MOBILE

Mobile should generally use:

```text
search
+
Filter button
```

The full filter interface can open in a:

```text
drawer
sheet
modal
```

according to the component system.

Do not squeeze six filter controls into one narrow row.

---

# 13. SEARCH FIELD

Search should communicate:

```text
search events
```

and not look like a generic global search unless it actually is global.

---

# 14. SEARCH STATES

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

# 15. FILTER STATES

Each filter needs:

```text
default
hover
focus
selected
disabled
```

---

# 16. ACTIVE FILTERS

If filters are active, make the active state obvious.

Possible pattern:

```text
filter chips
```

or an equivalent approved pattern.

Users should be able to clear filters easily.

---

# 17. FILTER RESET

Provide a clear reset mechanism when multiple filters are active.

Do not force users to manually undo every filter.

---

# 18. URL FILTER STATE

If the architecture supports URL state:

filters/search should be reflected predictably.

Refreshing the page should not unexpectedly discard the user's discovery state.

---

# 19. BROWSER HISTORY

Do not create a new browser history entry for every trivial filter interaction unless explicitly required.

---

# 20. EVENT COLLECTION

The event collection is the core of the page.

It should feel curated and structured rather than like a database table.

---

# 21. EVENT CARD — PURPOSE

Each card should answer:

```text
What is it?
When is it?
Where is it?
Why should I open it?
What can I do?
```

Only display fields that actually exist.

---

# 22. EVENT CARD CONTENT

Possible hierarchy:

```text
image
status/category
event title
date/time
location
short description
primary action
```

The exact fields depend on the actual event model.

---

# 23. EVENT TITLE

The title should be the strongest card text.

Long titles must wrap gracefully.

Do not truncate aggressively unless the component explicitly provides an accessible full-title mechanism.

---

# 24. EVENT DATE

Date should be visually scannable.

Use consistent formatting across all events.

Do not let every card format dates differently.

---

# 25. EVENT TIME

If available:

display it consistently with the date.

If no time exists:

do not show an empty placeholder.

---

# 26. EVENT LOCATION

If available:

display concise location information.

If virtual/online events are supported by the data model, use the approved virtual status terminology.

Do not invent location data.

---

# 27. EVENT STATUS

Possible states depend on actual product data.

Examples conceptually:

```text
upcoming
registration open
sold out
completed
cancelled
```

Only implement statuses actually supported.

---

# 28. STATUS VISUALS

Status should be noticeable without becoming louder than the event title.

Use restrained badges/labels.

---

# 29. EVENT IMAGE

Preferred:

approved event photography/artwork.

Fallback:

approved PDF visual treatment.

Never use an unrelated stock image simply to fill a card.

---

# 30. EVENT IMAGE RATIO

Choose one consistent image aspect ratio for the collection.

Do not let each card have a different image shape.

---

# 31. IMAGE CROPPING

Use deliberate focal-point handling.

Important people, podiums, logos, or text in the source image must not be accidentally cropped where art direction identifies them as important.

---

# 32. CARD SURFACE

Default:

```text
deep charcoal / near-black
subtle border
restrained depth
```

The card should separate from the background without becoming a bright panel.

---

# 33. CARD RADIUS

Use global radius tokens.

---

# 34. CARD BORDER

Border should be subtle.

Gold border should be reserved for meaningful emphasis, not every card.

---

# 35. CARD SHADOW

Use restrained shadow/depth.

Avoid floating-card overload.

---

# 36. EVENT CARD HOVER

Desktop may use:

- slight lift
- subtle image zoom
- border/accent change
- arrow/icon movement

Keep movement small.

---

# 37. EVENT CARD ACTIVE/PRESS

On touch devices:

provide a clear press state without relying on hover.

---

# 38. EVENT CARD FOCUS

Keyboard focus must be clearly visible.

The entire card may be a link if appropriate, but avoid nested interactive elements that create confusing keyboard behavior.

---

# 39. CARD ACTION

If the entire card links to the event detail:

the primary CTA may be visually integrated.

Avoid having multiple competing links.

---

# 40. EVENT GRID — DESKTOP

Use a consistent responsive grid.

Typical composition:

```text
2–3 columns
```

depending on card width/content and the approved design.

Do not force three columns if the cards become cramped.

---

# 41. EVENT GRID — TABLET

Allow the grid to reduce columns naturally.

Avoid awkward card widths.

---

# 42. EVENT GRID — MOBILE

Default:

```text
1 column
```

Each card should have enough vertical breathing room.

---

# 43. EVENT LIST ALTERNATIVE

If the actual content is metadata-heavy, a list layout may be more appropriate.

Do not choose grid simply because cards look visually attractive.

The data density determines the layout.

---

# 44. FEATURED EVENT

If the product requires a featured event:

it may receive a larger editorial treatment.

Possible structure:

```text
large image
+
event identity
+
date
+
description
+
CTA
```

---

# 45. FEATURED EVENT RULE

Featured treatment must be data-driven.

Do not arbitrarily select an event simply because it looks good.

---

# 46. UPCOMING EVENTS

If upcoming events are available, prioritize them.

---

# 47. COMPLETED EVENTS

Completed events may be accessible through:

```text
status filter
archive
past events
```

only if supported by the product.

---

# 48. EMPTY STATE

If there are no events:

communicate clearly:

```text
No events currently available.
```

plus the relevant next action if one exists.

Do not leave a large blank grid.

Do not fabricate an event.

---

# 49. NO-SEARCH-RESULTS STATE

If a query produces no matches:

tell the user:

```text
No events match your search/filter.
```

Provide:

```text
clear filters
```

when applicable.

---

# 50. ERROR STATE

If the event API fails:

show a calm user-facing error state.

Do not expose:

```text
stack traces
API URLs
database errors
internal identifiers
```

Provide retry where appropriate.

---

# 51. LOADING STATE

The collection should reserve expected geometry.

Use subtle skeletons if appropriate.

Do not make skeletons brighter or more animated than the actual interface.

---

# 52. SKELETON

Skeleton should resemble:

```text
image
title
metadata
description
action
```

without exposing actual placeholder content as if it were real.

---

# 53. PAGINATION

Use pagination if the content architecture calls for it.

---

# 54. LOAD MORE

Load-more may be used where appropriate.

If implemented:

- preserve existing results
- show loading state
- prevent duplicate requests
- maintain scroll position naturally

---

# 55. INFINITE SCROLL

Do not introduce infinite scrolling merely because it is technically easy.

Events often benefit from explicit navigation.

---

# 56. EVENT DETAIL ROUTE

Every event that is intended to have a detail page should link to a stable route.

Do not create routes from arbitrary UI labels.

---

# 57. EVENT DETAIL TRANSITION

Opening a detail page should feel like entering deeper content.

Avoid dramatic page-transition animation.

---

# 58. EVENT DETAIL PAGE

The detail experience should establish:

```text
event identity
title
essential metadata
main visual
description/content
registration/action
supporting information
```

---

# 59. EVENT DETAIL HERO

Use a calmer cinematic/editorial treatment than the homepage.

A large event image can serve as the main visual anchor.

---

# 60. EVENT DETAIL TITLE

Large enough to feel important.

Constrained enough to remain readable.

---

# 61. EVENT DETAIL METADATA

Use a clear information row/stack:

```text
date
time
location
status
```

only where available.

---

# 62. EVENT DETAIL CTA

Primary CTA should reflect actual event functionality.

Examples conceptually:

```text
Register
Learn more
View details
```

Do not invent registration functionality if none exists.

---

# 63. REGISTRATION STATES

If registration is supported:

```text
available
submitting
success
closed
full
error
```

must be designed.

---

# 64. EVENT DESCRIPTION

Long-form content should be readable.

Do not place large paragraphs into narrow card-like containers.

---

# 65. EVENT CONTENT WIDTH

Use an editorial reading width for long descriptions.

---

# 66. EVENT DETAIL SUPPORTING CONTENT

Possible:

```text
schedule
speakers
venue
requirements
related events
```

Only if supported by actual content/data.

---

# 67. SPEAKERS

If speakers exist, use shared person/profile components where available.

Do not create a different person-card design solely for events.

---

# 68. SCHEDULE

If a schedule exists, make time and activity hierarchy easy to scan.

Avoid a giant dense text block.

---

# 69. RELATED EVENTS

Only show related events when an actual relationship exists.

---

# 70. EVENT DETAIL MOBILE

Mobile priority:

```text
title
date/status
primary action
image
content
supporting details
```

Exact order may change based on the visual composition.

---

# 71. EVENT DETAIL IMAGE MOBILE

Use art-directed crop.

Do not let image cropping hide essential event identity.

---

# 72. EVENTS MOTION

Events page motion should be calmer than homepage motion.

Recommended:

```text
hero reveal
→ controls settle
→ cards reveal/stagger
```

---

# 73. CARD STAGGER

Keep stagger short.

Users should never wait for cards to finish animating.

---

# 74. FILTER MOTION

Filter drawer/sheet should use:

```text
short slide/fade
```

not elaborate transitions.

---

# 75. SEARCH MOTION

Search results should update without visually jarring the page.

---

# 76. LAYOUT STABILITY

Changing filters should not cause unnecessary page jumps.

---

# 77. REDUCED MOTION

Disable:

- card parallax
- image zoom
- large slide transitions
- decorative continuous effects

Use simple state changes.

---

# 78. ACCESSIBILITY — FILTERS

Ensure:

- labels
- keyboard navigation
- focus management
- selected-state announcements where needed
- Escape behavior for overlays
- usable touch targets

---

# 79. ACCESSIBILITY — CARDS

Card links must have meaningful accessible names.

Do not make screen readers announce decorative text as actionable.

---

# 80. ACCESSIBILITY — IMAGES

Use meaningful alt text for informative event images.

Decorative images should be treated as decorative.

---

# 81. ACCESSIBILITY — STATUS

Status must not rely only on color.

Example:

do not communicate “cancelled” solely through red.

---

# 82. TYPOGRAPHY

Events page should use the global type system.

Hierarchy:

```text
page H1
section heading
event title
metadata
body
supporting labels
```

---

# 83. COLOR

Primary palette remains:

```text
black / charcoal
warm white
restrained gold
```

Status colors may be introduced only where the global system defines them.

---

# 84. GOLD USAGE

Gold can highlight:

- active filters
- important event status
- CTA
- accent details

Do not turn the entire event grid gold.

---

# 85. BACKGROUND

Prefer subtle visual depth.

Avoid noisy event-specific backgrounds for every card.

---

# 86. CONTENT DENSITY

The Events page should be easy to scan.

Use:

- clear grouping
- whitespace
- metadata hierarchy
- consistent card anatomy

---

# 87. DESKTOP SCANNABILITY

A visitor should understand multiple events at a glance.

---

# 88. MOBILE SCANNABILITY

One card should communicate its identity within a few seconds.

---

# 89. LONG TITLES

Cards must support realistic long event titles.

Do not assume all titles are short.

---

# 90. LONG DESCRIPTIONS

Cards should use a controlled summary field rather than dumping the full event description.

---

# 91. DATE FORMATTING

Use one date formatting convention across the entire Events experience.

---

# 92. TIMEZONE

If events can span locations/timezones, the data model must define how timezone is represented.

Do not silently convert event times in a way that could confuse users.

---

# 93. LOCATION DATA

Use actual event location data.

Do not guess addresses.

---

# 94. VIRTUAL EVENTS

If virtual events are supported, use an explicit approved label.

---

# 95. SEARCH PERFORMANCE

Search/filter interactions should remain responsive.

Use debouncing only where appropriate.

---

# 96. DATA FETCHING

Do not make every filter interaction trigger unnecessary full-page reload behavior.

---

# 97. CACHE / REVALIDATION

Follow the actual application architecture.

Do not invent a separate caching system inside the page.

---

# 98. IMAGE PERFORMANCE

Event images should be:

- appropriately sized
- responsive
- lazy-loaded when below the fold
- optimized
- given dimensions/reserved space

---

# 99. ABOVE-THE-FOLD IMAGE

If the featured event image is above the fold, treat it as a priority asset.

---

# 100. ICONS

Use the approved icon library/system.

Do not mix random icon styles.

---

# 101. ARROWS

Arrow direction and movement should be consistent across the site.

---

# 102. BUTTONS

Use global button variants.

---

# 103. FILTER CHIPS

Use global chip/tag treatment.

---

# 104. BADGES

Use a consistent badge system for event status/type.

---

# 105. COMPONENT REUSE

Expected shared components may include:

```text
EventsHero
EventFilters
SearchField
FilterChip
EventGrid
EventCard
EventStatus
EventDetailHero
EventMetadata
EventSchedule
RegistrationCTA
RelatedEvents
```

Only implement components actually required.

---

# 106. NO DUPLICATED CARDS

Do not create:

```text
EventCard
HomepageEventCard
EventsEventCard
FeaturedEventCard
```

when variants/data can support the same base system.

---

# 107. FEATURED VARIANT

If featured event treatment is required:

implement:

```text
EventCard variant="featured"
```

or equivalent architecture.

---

# 108. DATA MODEL EXPECTATIONS

Conceptually an event may contain:

```text
id
title
slug
description
summary
image
date
time
timezone
location
status
category
featured
registration/action
```

Only fields actually supported by the product should be implemented.

---

# 109. CONTENT/VIEW SEPARATION

Event data should not be embedded inside presentational components.

---

# 110. SECURITY

Never expose internal database IDs or private API details unnecessarily in user-facing UI.

---

# 111. SEO — EVENTS INDEX

The Events page should have accurate metadata and crawlable event content where appropriate.

---

# 112. SEO — EVENT DETAIL

Each public event detail page should have unique metadata based on actual event information.

Do not generate misleading metadata.

---

# 113. SOCIAL PREVIEW

Event social previews should use approved event imagery when available.

---

# 114. 404 EVENT

If an event slug no longer exists:

show a useful not-found state and navigation back to Events.

---

# 115. CANCELLED EVENT

If cancellation is a real supported status:

show it clearly and preserve useful event context.

---

# 116. PAST EVENT

If past events remain publicly available:

make status/time context clear.

---

# 117. RESPONSIVE BREAKPOINT PRINCIPLE

Do not design only for named breakpoints.

The layout must remain coherent between breakpoints.

---

# 118. RESPONSIVE GRID

Cards should resize/reflow naturally.

Avoid fixed pixel widths that create overflow.

---

# 119. MOBILE FILTER DRAWER

Drawer should:

- cover/overlay correctly
- trap focus where required
- close with Escape
- have visible close control
- preserve selected state

---

# 120. MOBILE SEARCH

Search must remain usable with mobile keyboards and small widths.

---

# 121. MOBILE EVENT CARD

Prioritize:

```text
image
title
date/status
location
CTA
```

Avoid excessive metadata.

---

# 122. TABLET EVENT CARD

Tablet may use two columns if card content remains readable.

---

# 123. WIDE EVENT GRID

Do not stretch cards indefinitely.

Use a max-width content container.

---

# 124. PAGE LOAD PERFORMANCE

The event list should not block rendering of the page hero/header.

---

# 125. DYNAMIC DATA FAILURE

If the backend is unavailable:

the shell should still render.

---

# 126. ERROR COPY

Error messages must be human-readable.

---

# 127. NO TECHNICAL LEAKAGE

Never show raw:

```text
stack traces
database errors
API exceptions
```

---

# 128. EVENT PAGE ANIMATION QUALITY

Motion should communicate:

```text
arrival
hierarchy
interaction
```

not decoration.

---

# 129. NO SCROLL JACKING

Never hijack normal browser scrolling to force event-page sequences.

---

# 130. NO CAROUSEL BY DEFAULT

Do not convert events into a carousel unless there is a strong content reason.

A grid/list is generally more discoverable.

---

# 131. NO AUTO-PLAY

Do not auto-play event videos or audio unless explicitly required.

---

# 132. VISUAL PRIORITY

The Events page should prioritize:

```text
events
```

not decorative backgrounds.

---

# 133. EVENT DETAIL VISUAL PRIORITY

The event itself should be the visual anchor.

---

# 134. CTA PRIORITY

There should be one obvious primary action per event context.

---

# 135. CONTENT FALLBACKS

If an event has no image:

use the approved branded fallback rather than a random placeholder.

---

# 136. NO BROKEN IMAGE ICONS

Image failures must have a controlled visual fallback.

---

# 137. EMPTY FILTER OPTION

Do not show filter options that currently cannot produce meaningful results unless the product intentionally supports them.

---

# 138. FILTER COUNTS

If result counts are shown:

they must be data-driven.

Never fabricate counts.

---

# 139. SORTING

If sorting exists, use human-readable labels.

---

# 140. FILTER PERSISTENCE

Follow the global URL/state strategy.

---

# 141. EVENT DETAIL RELATED CONTENT

Related content must not create a dead-end.

---

# 142. BACK TO EVENTS

Provide a clear return path where appropriate.

---

# 143. BREADCRUMBS

If the global design system uses breadcrumbs:

Events detail should support:

```text
Home → Events → Event
```

Do not introduce breadcrumbs only on one page type without system support.

---

# 144. EVENT DETAIL MOBILE NAVIGATION

The primary action should not disappear below an enormous image.

---

# 145. STICKY ACTION

A sticky mobile registration/action bar may be considered only if the product requires it and the global system supports it.

Do not invent it merely because it looks modern.

---

# 146. PERFORMANCE BUDGET

Avoid excessive:
- shadows
- blur
- filters
- simultaneous animations
- large unoptimized images

---

# 147. VISUAL QA

Compare implementation against approved references for:

- hierarchy
- card scale
- typography
- spacing
- image crops
- gold usage
- background depth
- interaction states

Do not pixel-copy screenshots.

---

# 148. FUNCTIONAL QA

Verify:

- event links
- filters
- search
- reset
- pagination/load more
- empty state
- error state
- loading state
- direct event URLs
- back navigation

---

# 149. MOBILE QA

Verify:

- no horizontal overflow
- readable cards
- usable filters
- usable search
- touch targets
- image crops
- detail page hierarchy

---

# 150. FINAL QUALITY BAR

The Events page should feel like:

```text
PDF's editorial event desk
```

not:

```text
a generic calendar plugin
```

It should preserve the brand's premium black/gold visual language while shifting the emotional weight from cinematic spectacle to clear discovery.

# END OF EVENTS PAGE IMPLEMENTATION SPECIFICATION
