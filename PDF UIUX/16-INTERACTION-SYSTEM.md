# PAK DEBATE FORUM — DESIGN SYSTEM
# 16 — INTERACTION SYSTEM

Status: Detailed interaction and behavioral specification
Purpose: Define how the PBF website feels when users move, hover, click, scroll, search, filter, submit, navigate, and interact with visual elements.

This document sits between:
- visual design
- component architecture
- animation
- accessibility
- frontend implementation

The interaction system must make the website feel:
- premium
- deliberate
- responsive
- intelligent
- calm
- cinematic
- trustworthy

The site must never feel like a collection of unrelated animations.

---

# 0. CORE INTERACTION PHILOSOPHY

Every interaction should answer at least one of these:

```text
What did I just interact with?
What changed?
Why did it change?
What can I do next?
```

Interaction should communicate state, not merely decoration.

---

# 1. INTERACTION HIERARCHY

There are four major interaction levels:

```text
LEVEL 1 — ESSENTIAL
navigation
buttons
links
forms
filters
accordions

LEVEL 2 — FEEDBACK
hover
focus
pressed
loading
success
error

LEVEL 3 — ATMOSPHERIC
scroll reveal
parallax
light movement
background depth

LEVEL 4 — SIGNATURE
podium interaction
3D object movement
cinematic page transitions
```

Level 1 must work even if every other level is disabled.

---

# 2. PROGRESSIVE ENHANCEMENT

The functional website must remain usable without:

```text
WebGL
3D
parallax
complex animation
hover
pointer tracking
```

---

# 3. INPUT TYPES

The system must support:

```text
mouse
trackpad
touch
keyboard
screen reader navigation
```

Do not assume pointer hover exists.

---

# 4. POINTER HOVER

Hover is enhancement only.

Never hide critical information behind hover.

---

# 5. CLICK FEEDBACK

Interactive elements should provide immediate feedback.

Possible states:

```text
default
hover
focus
pressed
disabled
loading
success
error
```

---

# 6. BUTTON INTERACTION

Default button behavior:

```text
hover
→ subtle visual shift

press
→ slight compression

release
→ destination/action
```

Do not use exaggerated scaling.

---

# 7. BUTTON HOVER

Preferred effects:

```text
slight background/light change
subtle translation
border/light sweep
```

Avoid:

```text
large scale
rotation
bouncing
glitch
```

---

# 8. BUTTON PRESS

Button may visually compress by a very small amount.

The interaction should feel physical, not cartoonish.

---

# 9. BUTTON LOADING

When an action is being processed:

```text
disable duplicate submission
retain button position
show concise loading indicator
```

Do not allow the button to jump in width.

---

# 10. BUTTON SUCCESS

If appropriate:

```text
loading
→ success indicator
→ stable completed state
```

Do not animate success forever.

---

# 11. BUTTON DISABLED

Disabled buttons must visibly communicate unavailable state.

Do not rely only on reduced opacity.

---

# 12. LINK INTERACTION

Text links may use:

```text
underline reveal
gold color shift
small directional movement
```

---

# 13. LINK DIRECTION

A link pointing to another page can subtly indicate movement.

Example:

```text
Learn more →
```

The arrow may move slightly on hover.

---

# 14. INTERNAL NAVIGATION

Route changes should feel immediate.

Avoid long transitions between normal content pages.

---

# 15. PAGE TRANSITION

If used:

```text
current page
→ brief transition
→ next page
```

The transition must not delay usability.

---

# 16. PAGE TRANSITION DURATION

Use short, controlled transitions.

The website should feel fast before it feels cinematic.

---

# 17. PAGE TRANSITION RULE

Do not transition every element independently.

Use one coherent transition language.

---

# 18. BACK BUTTON

Browser back behavior must remain normal.

Do not hijack browser navigation.

---

# 19. SCROLL

Scrolling is the primary passive interaction.

The design should respond without fighting the user's scroll.

---

# 20. SCROLL REVEAL

Recommended sequence:

```text
element enters viewport
→ opacity increases
→ small translation resolves
```

---

# 21. SCROLL REVEAL DISTANCE

Keep movement restrained.

The user should perceive arrival, not an element flying in from off-screen.

---

# 22. SCROLL REVEAL STAGGER

Use stagger only for groups.

Example:

```text
heading
→ paragraph
→ cards
```

Avoid 20 separate staggered elements.

---

# 23. SECTION REVEAL

Prefer section-level choreography.

---

# 24. SCROLL REVEAL REPEAT

Default behavior:

```text
animate once
```

unless the interaction explicitly benefits from repetition.

---

# 25. SCROLL REVEAL ON MOBILE

Reduce:

```text
distance
duration
stagger
```

Mobile should feel faster.

---

# 26. REDUCED MOTION

When reduced motion is enabled:

```text
no parallax
no large transforms
no spinning 3D
no decorative continuous motion
```

Use:

```text
opacity
small state changes
instant layout changes
```

---

# 27. SCROLL PARALLAX

Parallax is reserved for major visual anchors.

---

# 28. PODIUM PARALLAX

Desktop may use very subtle movement relative to scroll.

The podium must remain anchored to the hero's visual environment.

---

# 29. PODIUM SCROLL BEHAVIOR

Possible sequence:

```text
hero entry
→ podium settles
→ scroll begins
→ podium shifts slightly
→ hero exits
→ podium leaves viewport
```

Do not make the podium chase the user down the entire page.

---

# 30. PODIUM PINNING

Avoid permanently pinning the podium unless a specific page composition requires it.

---

# 31. PODIUM INTERACTION

The podium is a brand object.

Interaction should be subtle.

Possible:

```text
cursor proximity
→ tiny rotation

hover
→ light catches edge

scroll
→ camera depth shift
```

---

# 32. PODIUM ROTATION

Rotation must remain small.

The front face containing the identity must remain readable.

---

# 33. PODIUM MOBILE

Prefer:

```text
static
or
very low-intensity movement
```

depending on device capability.

---

# 34. PODIUM FALLBACK

If 3D cannot load:

```text
high-quality static podium image
```

should preserve composition.

---

# 35. PODIUM LOADING

Do not show a broken canvas.

Recommended:

```text
placeholder atmosphere
→ podium loads
→ fade/reveal
```

---

# 36. PODIUM PERFORMANCE

3D must never block:

```text
navigation
headline rendering
CTA interaction
```

---

# 37. BACKGROUND ATMOSPHERE

Background lighting may move very subtly.

---

# 38. CONTINUOUS ANIMATION

Continuous motion should be rare.

Suitable examples:

```text
light drift
very subtle glow
ambient particles if justified
```

---

# 39. CONTINUOUS ANIMATION RULE

If a visitor stops looking at it, it should not become distracting.

---

# 40. CURSOR EFFECTS

Custom cursor effects are optional.

If used:

```text
desktop only
```

---

# 41. CUSTOM CURSOR RULE

Never replace the browser cursor with something that reduces usability.

---

# 42. CURSOR PROXIMITY

If used around the podium:

```text
pointer enters visual zone
→ subtle lighting response
```

---

# 43. CURSOR ON MOBILE

Disable pointer-specific effects.

---

# 44. NAVIGATION INTERACTION

Header must communicate:

```text
current page
available pages
primary action
```

---

# 45. NAVIGATION HOVER

Use subtle text/gold treatment.

---

# 46. NAVIGATION ACTIVE STATE

Active state should remain visible without hover.

---

# 47. NAVIGATION SCROLL STATE

Header may transition between:

```text
transparent / cinematic
```

and:

```text
solid / readable
```

depending on page.

---

# 48. HEADER TRANSITION

Recommended:

```text
transparent hero header
→ scroll threshold
→ compact background header
```

The transition should feel like the interface is gaining structure.

---

# 49. HEADER STICKINESS

Sticky header is allowed if it improves navigation.

Do not consume excessive vertical space.

---

# 50. HEADER MOBILE

Mobile header should remain compact.

---

# 51. MOBILE MENU

Opening:

```text
tap menu
→ background layer appears
→ navigation items reveal
```

---

# 52. MOBILE MENU CLOSING

Closing should be faster than opening.

---

# 53. MOBILE MENU FOCUS

Keyboard/focus users must remain within the open menu until it closes.

---

# 54. MOBILE MENU SCROLL

Background page should not unexpectedly scroll behind the open menu.

---

# 55. DROPDOWNS

Use dropdowns for short option sets.

---

# 56. FILTERS

Filters should communicate immediately that results changed.

---

# 57. FILTER INTERACTION

Recommended:

```text
select filter
→ update active state
→ update result state
→ preserve filter context
```

---

# 58. FILTER LOADING

If server/API data is loading:

```text
preserve filter controls
show loading state
avoid full-page flash
```

---

# 59. FILTER EMPTY STATE

Example structure:

```text
No matching results
Clear filters
```

---

# 60. FILTER CLEAR

Provide a clear path to return to the unfiltered state.

---

# 61. SEARCH

Search should feel immediate.

---

# 62. SEARCH INPUT

Use:

```text
label or accessible name
clear control
search action
```

---

# 63. SEARCH DEBOUNCE

If live searching is implemented, use a reasonable debounce.

Do not issue a request for every keystroke.

---

# 64. SEARCH EMPTY STATE

Distinguish:

```text
nothing searched yet
```

from:

```text
search completed with zero results
```

---

# 65. SEARCH RESULTS

Result updates should not cause the page to jump unexpectedly.

---

# 66. ACCORDION

Recommended states:

```text
closed
open
focus
```

---

# 67. ACCORDION ANIMATION

Animate content height carefully.

Do not use huge delays.

---

# 68. ACCORDION ICON

Use a consistent icon.

Avoid switching between unrelated icons.

---

# 69. TABS

Tabs are appropriate when users need to switch between related content without leaving the context.

---

# 70. TAB ACTIVE STATE

Active tab must be unmistakable.

---

# 71. TAB MOBILE

If many tabs exist:

```text
horizontal scroll
```

or another compact control.

Do not wrap into an unreadable multi-line navigation.

---

# 72. MODALS

Use only when the task genuinely requires focused attention.

---

# 73. MODAL OPEN

```text
background dim
→ modal appears
```

---

# 74. MODAL CLOSE

Support:

```text
close button
Escape
outside click
```

where appropriate.

---

# 75. MODAL MOBILE

Modal should respect viewport safe areas.

---

# 76. DRAWERS

Useful for:

```text
mobile filters
navigation
secondary information
```

---

# 77. DRAWER MOTION

Use a simple directional movement.

---

# 78. DRAWER BACKDROP

Backdrop should communicate that the underlying page is temporarily inactive.

---

# 79. EVENT CARD INTERACTION

Hover may provide:

```text
slight image movement
border/light change
arrow movement
```

---

# 80. EVENT CARD CLICK

The whole card may be clickable if it represents one destination.

Do not create nested conflicting click targets.

---

# 81. RESOURCE CARD INTERACTION

Similar interaction language to event cards.

---

# 82. CARD IMAGE HOVER

If image zoom is used:

```text
very subtle scale
```

Avoid aggressive zoom.

---

# 83. CARD LOADING

Use skeleton geometry matching the final card.

---

# 84. CARD ERROR

Failed image should not collapse the card.

---

# 85. TABLE INTERACTION

Rows may highlight on hover.

Do not make the entire row look like a button unless it is clickable.

---

# 86. TABLE MOBILE

If horizontal scrolling is required:

```text
preserve table structure
provide visual overflow cue
```

---

# 87. RESULT ROW CLICK

If a row links to details, communicate clickability subtly.

---

# 88. FORM INTERACTION

Form lifecycle:

```text
idle
→ editing
→ validation
→ submitting
→ success/error
```

---

# 89. FORM FOCUS

Focused fields should have a clear visual state.

---

# 90. FORM VALIDATION

Validate as appropriate.

Do not overwhelm users with errors before they have meaningfully interacted with a field.

---

# 91. FORM ERROR

Error should appear near the affected field.

---

# 92. FORM SUBMISSION

Prevent accidental duplicate submission.

---

# 93. FORM SUCCESS

Success should be visually distinct from an ordinary page state.

---

# 94. FORM NETWORK ERROR

Allow retry.

Preserve user input when possible.

---

# 95. FORM MOBILE

Inputs must remain usable without excessive zoom or tiny targets.

---

# 96. TOASTS

Use only for lightweight feedback.

Good:

```text
Copied
Saved
Updated
```

Bad:

```text
critical form errors hidden in toast
```

---

# 97. TOAST POSITION

Desktop:

```text
corner
```

Mobile:

```text
safe-area-aware lower/upper region
```

depending on interface context.

---

# 98. TOAST DURATION

Long enough to read.

---

# 99. COPY INTERACTION

For copyable data:

```text
click
→ copied state
```

Provide non-visual confirmation too.

---

# 100. DOWNLOAD INTERACTION

If a resource is downloadable:

```text
click
→ loading if necessary
→ browser download/open
```

Do not fake a download.

---

# 101. EXTERNAL LINK

Clearly communicate external destinations when useful.

---

# 102. SOCIAL LINK

Use the official destination.

Do not fabricate social profiles.

---

# 103. BREADCRUMBS

Use on deeper pages when they improve orientation.

---

# 104. BREADCRUMB INTERACTION

Each parent level should be clickable except the current page.

---

# 105. BACK LINK

On detail pages, a contextual back link can supplement breadcrumbs.

---

# 106. SCROLL-TO-TOP

Useful after:

```text
long lists
pagination
```

Do not force it after every interaction.

---

# 107. PAGINATION

When changing page:

```text
update content
maintain context
move focus appropriately
```

---

# 108. LOAD MORE

If using Load More:

```text
button
→ loading
→ new content
→ button position updates
```

---

# 109. INFINITE SCROLL

Avoid unless genuinely beneficial.

Content-heavy organizational sites generally benefit from explicit navigation.

---

# 110. IMAGE GALLERY

If galleries exist:

```text
thumbnail
→ enlarged view
```

Keyboard and mobile interaction must be supported.

---

# 111. IMAGE LIGHTBOX

Use:

```text
close
next
previous
caption if available
```

---

# 112. LIGHTBOX MOTION

Simple fade/scale.

---

# 113. VIDEO

Video should not autoplay with sound.

---

# 114. VIDEO CONTROLS

Use native or accessible controls.

---

# 115. AUDIO

No unexpected audio.

---

# 116. HERO AUTOPLAY

If hero media is animated:

```text
muted
loop
low cognitive load
```

and provide reduced-motion fallback.

---

# 117. SCROLL-BASED STORYTELLING

Use only for major narrative sections.

---

# 118. SCROLL STORY STRUCTURE

```text
scroll
→ state changes
→ content remains readable
→ next state enters
```

Do not lock the page into an unusable scroll trap.

---

# 119. STICKY STORY SECTIONS

If used:

```text
visual remains
text changes
```

Keep the number of states limited.

---

# 120. STICKY SECTION MOBILE

Usually simplify to normal stacking.

---

# 121. HOVER-ONLY CONTENT

Do not hide essential information only on hover.

---

# 122. TOUCH EQUIVALENT

Any meaningful hover interaction should have an equivalent touch-safe behavior.

---

# 123. SWIPE

Use only when the user naturally expects it.

---

# 124. CAROUSELS

Avoid unnecessary carousels.

If used:

```text
previous
next
position
```

must be understandable.

---

# 125. CAROUSEL AUTOPLAY

Prefer off by default unless there is a strong content reason.

---

# 126. CAROUSEL MOBILE

Touch interaction should be smooth and not conflict with page scrolling.

---

# 127. HORIZONTAL SCROLL

If intentional:

```text
clear overflow
visible continuation cue
```

---

# 128. MOBILE GESTURES

Do not create custom gestures for ordinary navigation.

---

# 129. DEVICE CAPABILITY

Interaction intensity may adapt to:

```text
viewport
pointer type
reduced-motion preference
performance capability
```

---

# 130. PERFORMANCE FALLBACK

If the device struggles:

```text
reduce 3D
reduce ambient effects
reduce parallax
preserve core interactions
```

---

# 131. WEBGL FAILURE

Fallback hierarchy:

```text
3D
→ static image
→ styled placeholder
```

Never:

```text
broken canvas
```

---

# 132. INTERACTION Z-INDEX

Interactive content must remain above decorative layers.

---

# 133. DECORATIVE LAYERS

Decorative effects must not intercept pointer events unless intentionally interactive.

---

# 134. POINTER EVENTS

Typical decorative layer:

```text
pointer-events: none
```

---

# 135. PODIUM POINTER EVENTS

If interactive:

```text
pointer-events enabled
```

only within its actual interaction region.

---

# 136. FOCUS MANAGEMENT

Every interactive component must expose a clear focus state.

---

# 137. KEYBOARD NAVIGATION

Order should follow visual/content order.

---

# 138. TAB ORDER

Do not create confusing jumps between decorative and functional elements.

---

# 139. ESCAPE

Escape should close:

```text
modal
drawer
menu
lightbox
```

where appropriate.

---

# 140. ENTER / SPACE

Buttons and controls must behave according to semantic HTML expectations.

---

# 141. SCREEN READER

State changes must be communicated where necessary.

Examples:

```text
filter updated
form submitted
menu opened
```

---

# 142. LIVE REGIONS

Use sparingly.

Do not make the entire interface announce every change.

---

# 143. ERROR ANNOUNCEMENT

Important validation/network errors should be accessible.

---

# 144. FOCUS AFTER NAVIGATION

When route content changes, focus should move appropriately so keyboard users understand the new page.

---

# 145. FOCUS AFTER MODAL CLOSE

Return focus to the element that opened it.

---

# 146. FOCUS AFTER FILTER

Do not unexpectedly move focus unless required.

---

# 147. SCROLL POSITION AFTER FILTER

Usually preserve the filter context.

---

# 148. SCROLL POSITION AFTER ROUTE

Follow standard navigation expectations.

---

# 149. INTERACTION SOUND

Default:

```text
NO sound
```

---

# 150. HAPTICS

Do not assume haptic support.

---

# 151. LOADING PHILOSOPHY

Loading should communicate progress without becoming a spectacle.

---

# 152. PAGE LOADING

Prefer:

```text
shell immediately
content progressively
```

over a full-screen branded loader.

---

# 153. GLOBAL LOADER

Only use for operations where the user truly has to wait.

---

# 154. SKELETONS

Skeletons should use the same geometry as final components.

---

# 155. SKELETON ANIMATION

Keep subtle.

Reduced-motion mode should remove shimmer if needed.

---

# 156. EMPTY STATE

Empty states should be useful.

Structure:

```text
heading
explanation
action
```

---

# 157. ERROR STATE

Structure:

```text
what happened
what can user do
retry
```

---

# 158. OFFLINE STATE

If relevant:

```text
connection unavailable
retry
```

Do not invent offline capabilities.

---

# 159. SUCCESS STATE

Success should be calm and confident.

---

# 160. SUCCESS ANIMATION

Short confirmation only.

---

# 161. ERROR ANIMATION

Avoid shaking the entire interface.

---

# 162. FORM ERROR ANIMATION

A small visual emphasis around the field may be used.

---

# 163. MOTION CURVE

Use a coherent easing system.

Do not mix arbitrary animation curves.

---

# 164. MOTION SCALE

Three conceptual levels:

```text
MICRO
button/link feedback

STANDARD
component reveal

CINEMATIC
hero/podium/page atmosphere
```

---

# 165. MICRO MOTION

Fastest.

---

# 166. STANDARD MOTION

Moderate.

---

# 167. CINEMATIC MOTION

Slower but still subordinate to usability.

---

# 168. MOTION INTERRUPTION

User input always takes priority over decorative animation.

---

# 169. SCROLL INTERRUPTION

Do not force a user into a predefined scroll position.

---

# 170. INPUT INTERRUPTION

If the user begins typing, do not move the field because of animation.

---

# 171. CONTENT SHIFT

Avoid layout shifts caused by animations or late-loading assets.

---

# 172. IMAGE DIMENSIONS

Reserve image space before loading.

---

# 173. FONT LOADING

Prevent major typography jumps.

---

# 174. 3D LOADING

Reserve visual space for the podium.

---

# 175. RESPONSIVE INTERACTION

Desktop:

```text
hover + pointer
```

Mobile:

```text
tap + scroll
```

Tablet:

```text
mixed capability
```

---

# 176. POINTER MEDIA QUERY

Pointer-specific enhancements should use pointer capability rather than assuming desktop.

---

# 177. TOUCH TARGETS

Interactive controls must have sufficiently large touch targets.

---

# 178. MOBILE BUTTON SPACING

Avoid adjacent controls that are too easy to hit accidentally.

---

# 179. MOBILE FILTERS

Prefer a dedicated filter sheet when controls become crowded.

---

# 180. MOBILE NAVIGATION

Primary navigation should never require horizontal precision.

---

# 181. MOBILE PODIUM

The podium should never cover:

```text
headline
CTA
navigation
```

---

# 182. MOBILE HERO DEPTH

Reduce background effects if they reduce text contrast.

---

# 183. MOBILE IMAGE PRIORITY

If space is limited:

```text
content
→ CTA
→ essential visual
→ decorative visual
```

---

# 184. TABLET

Do not simply treat tablet as small desktop.

Check:

```text
navigation
hero
cards
filters
tables
podium
```

---

# 185. DESKTOP LARGE SCREENS

Do not allow content to stretch indefinitely.

Maintain readable max widths.

---

# 186. ULTRAWIDE

Hero visual may expand, but text should remain constrained.

---

# 187. ACCESSIBILITY OVERRIDES

Accessibility settings always override decorative interaction.

---

# 188. REDUCED MOTION + 3D

Use static composition.

---

# 189. HIGH CONTRAST

Maintain readable states.

---

# 190. KEYBOARD + PODIUM

Podium should generally not enter keyboard focus unless it performs an actual action.

---

# 191. DECORATIVE PODIUM

Treat as:

```text aria-hidden
```

when it has no semantic function.

---

# 192. INTERACTIVE PODIUM

Only expose interaction if it communicates useful information or performs an action.

---

# 193. DECORATIVE LIGHT

Never receive focus.

---

# 194. DECORATIVE PARTICLES

Never receive focus.

---

# 195. INTERACTION CONSISTENCY

A button that looks the same should behave the same across pages.

---

# 196. CARD CONSISTENCY

Same card type:

```text
same hover logic
same focus logic
same spacing
```

---

# 197. FORM CONSISTENCY

Same field:

```text
same focus
same error
same success
```

---

# 198. FILTER CONSISTENCY

Same filter control:

```text
same open
same active
same clear
```

---

# 199. NAVIGATION CONSISTENCY

Header behavior remains predictable across routes.

---

# 200. SIGNATURE INTERACTION

The PBF signature should come from the combination:

```text
premium typography
+
cinematic light
+
podium depth
+
restrained motion
+
excellent spacing
```

Not from flashy effects.

---

# 201. INTERACTION ANTI-PATTERNS

Never:

```text
animate everything
```

Never:

```text
make every card glow
```

Never:

```text
rotate the podium dramatically
```

Never:

```text
force smooth-scroll that breaks native behavior
```

Never:

```text
hide important content behind hover
```

Never:

```text
use animation to compensate for weak layout
```

Never:

```text
make mobile behave like desktop
```

Never:

```text
delay navigation for cinematic transitions
```

Never:

```text
use autoplay audio
```

---

# 202. AI IMPLEMENTATION ORDER

The coding AI should implement interaction in this order:

```text
1. semantic HTML interaction
2. keyboard accessibility
3. focus states
4. functional states
5. loading/error/success
6. responsive interaction
7. micro-interactions
8. scroll reveals
9. atmospheric effects
10. podium/3D interaction
11. performance tuning
```

---

# 203. AI MUST NOT

The coding AI must not:

```text
invent interaction patterns
invent gestures
invent page transitions
invent sounds
invent UI controls
```

unless explicitly approved.

---

# 204. INTERACTION QA — BASIC

Check:

```text
mouse
keyboard
touch
```

---

# 205. INTERACTION QA — STATES

Check:

```text
default
hover
focus
pressed
disabled
loading
success
error
empty
```

---

# 206. INTERACTION QA — RESPONSIVE

Check:

```text
mobile
tablet
desktop
large desktop
```

---

# 207. INTERACTION QA — MOTION

Check:

```text
normal motion
reduced motion
slow device
3D unavailable
```

---

# 208. INTERACTION QA — NAVIGATION

Check:

```text
direct route
internal link
back
forward
refresh
deep link
404
```

---

# 209. INTERACTION QA — FORMS

Check:

```text
valid
invalid
empty
partial
slow network
failed network
success
duplicate submission
```

---

# 210. INTERACTION QA — FILTERS

Check:

```text
one filter
multiple filters
clear
zero results
loading
pagination
```

---

# 211. INTERACTION QA — SEARCH

Check:

```text
empty
query
no results
results
clear
slow response
```

---

# 212. INTERACTION QA — PODIUM

Check:

```text
loads
does not load
hover
scroll
mobile
reduced motion
low-performance device
```

---

# 213. INTERACTION QA — LAYOUT

Check:

```text
no horizontal overflow
no unexpected layout jumps
no covered CTAs
no clipped text
no inaccessible controls
```

---

# 214. FINAL INTERACTION STANDARD

The website should feel:

```text
instant for actions
smooth for transitions
quiet for decoration
dramatic for hero moments
clear for states
predictable for navigation
```

---

# 215. FINAL INTERACTION PRINCIPLE

The visitor should never think:

> "That's a cool animation."

and then wonder:

> "What am I supposed to do?"

Instead, the ideal response is:

> "That felt really good."

while the interface quietly makes the next action obvious.

---

# 216. END STATE

PBF interaction should feel like a physical environment:

```text
navigation = architecture
content = exhibition
podium = signature object
gold light = atmosphere
scroll = movement through space
buttons = physical controls
transitions = changes of room
```

The technology should remain invisible.

The experience should feel intentional.
