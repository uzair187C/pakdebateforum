# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 17 — ANIMATION & MOTION SPECIFICATION

Status: Motion bible / implementation handoff
Purpose: Define the complete motion language of the Pak Debate Forum website.

This document controls:
- animation hierarchy
- durations
- easing
- entrance choreography
- exit choreography
- scroll motion
- hero motion
- podium motion
- lighting motion
- component motion
- navigation motion
- page transitions
- responsive motion
- reduced-motion behavior
- performance constraints
- implementation boundaries

This document must be read together with:
- 01–16 design documents
- page wireframes
- interaction system
- 3D podium specification when available
- component catalog when available

IMPORTANT:
The abbreviation for Pak Debate Forum is PDF.
Do not use PBF in implementation labels, documentation, comments, variables, routes, or visible branding unless an explicitly approved technical reason requires it.

---

# 0. MOTION PHILOSOPHY

Motion should make PDF feel:

```text
cinematic
physical
premium
controlled
responsive
quiet
intentional
```

The goal is not to demonstrate animation technology.

The goal is to make the interface feel like a coherent physical environment.

---

# 1. MOTION PRINCIPLE

The hierarchy is:

```text
USABILITY
↓
CLARITY
↓
FEEDBACK
↓
ATMOSPHERE
↓
CINEMATIC DETAIL
```

Never reverse this order.

---

# 2. MOTION MUST HAVE PURPOSE

Every animation must belong to one of these categories:

```text
FEEDBACK
ORIENTATION
HIERARCHY
TRANSITION
ATMOSPHERE
BRAND SIGNATURE
```

If an animation fits none of these, remove it.

---

# 3. MOTION CATEGORIES

## 3.1 MICRO

Used for:

```text
buttons
links
icons
toggles
hover
focus
pressed states
```

Fast and subtle.

---

## 3.2 COMPONENT

Used for:

```text
cards
accordions
filters
menus
modals
content blocks
```

Moderate movement.

---

## 3.3 SECTION

Used for:

```text
scroll reveal
section entrance
large visual transitions
```

More noticeable but still restrained.

---

## 3.4 CINEMATIC

Used for:

```text
Home hero
podium
major page transition
signature visual moments
```

This is the slowest and most expressive category.

---

# 4. MOTION SHOULD FEEL PHYSICAL

The visual metaphor is:

```text
light
material
architecture
stage
space
depth
```

Not:

```text
cartoon
game UI
social media
gaming HUD
```

---

# 5. MOTION LANGUAGE

Preferred:

```text
fade
rise
settle
slide
reveal
parallax
light sweep
depth shift
scale settle
```

Avoid as defaults:

```text
bounce
elastic overshoot
spin
shake
jelly
rubber
glitch
random rotation
```

---

# 6. MOTION INTENSITY

Three levels:

```text
LOW
standard UI

MEDIUM
section and component transitions

HIGH
hero / signature visual
```

No page should be continuously HIGH intensity.

---

# 7. DURATION SYSTEM

Use conceptual duration tokens:

```text
instant
micro
short
standard
long
cinematic
```

Recommended starting ranges:

```text
instant:    0–80ms
micro:      80–160ms
short:      160–280ms
standard:   280–450ms
long:       450–750ms
cinematic:  750–1400ms
```

These are starting ranges, not permission to make every animation long.

---

# 8. DURATION RULE

The more important the movement:

```text
larger visual object
→ potentially longer duration
```

But larger duration must never make the interface feel slow.

---

# 9. MICRO INTERACTION DURATION

Target:

```text
80–180ms
```

Examples:

```text
button hover
icon shift
underline
```

---

# 10. COMPONENT DURATION

Target:

```text
180–400ms
```

Examples:

```text
accordion
drawer
card state
filter state
```

---

# 11. SECTION DURATION

Target:

```text
300–650ms
```

Examples:

```text
scroll reveal
section content entrance
```

---

# 12. CINEMATIC DURATION

Target:

```text
700–1400ms
```

Use sparingly.

---

# 13. EASING SYSTEM

Use a small approved easing vocabulary.

Conceptual tokens:

```text
ease-standard
ease-enter
ease-exit
ease-emphasis
ease-linear
```

---

# 14. STANDARD EASING

Use for ordinary UI transitions.

Characteristics:

```text
quick response
smooth settle
no dramatic overshoot
```

---

# 15. ENTER EASING

Entrance motion may feel slightly softer.

---

# 16. EXIT EASING

Exit motion should generally feel quicker.

---

# 17. EMPHASIS EASING

Reserved for:

```text
hero
podium
major visual reveal
```

Still avoid cartoon-like bounce.

---

# 18. LINEAR

Use for:

```text
continuous ambient movement
progress indicators
rotating environmental lighting
```

Not for ordinary UI entrance animations.

---

# 19. TRANSFORM PRIORITY

Prefer:

```text
transform
opacity
```

over expensive layout-changing animation.

---

# 20. DO NOT ANIMATE LAYOUT UNNECESSARILY

Avoid animating:

```text
width
height
top
left
margin
padding
```

when transform alternatives exist.

---

# 21. OPACITY

Opacity can support reveals.

Do not use opacity alone for every animation.

---

# 22. TRANSFORM + OPACITY

Default section entrance combination:

```text
opacity
+
small translate
```

---

# 23. SCALE

Use small scale adjustments.

Example:

```text
0.98 → 1
```

rather than:

```text
0.5 → 1
```

for ordinary content.

---

# 24. ROTATION

Rotation should be rare.

Use mostly for:

```text
3D objects
small decorative geometry
```

---

# 25. ROTATION LIMIT

UI elements should generally avoid large rotation.

---

# 26. TRANSLATION LIMIT

Content should move a restrained distance relative to its size.

---

# 27. STAGGER

Stagger is a hierarchy tool.

It communicates:

```text
this comes first
then this
then this
```

---

# 28. STAGGER GROUPS

Recommended groups:

```text
hero text group
card grid
navigation links
feature list
```

---

# 29. STAGGER LIMIT

Do not stagger every child individually.

Group related elements.

---

# 30. STAGGER DIRECTION

Prefer:

```text
top → bottom
left → right
```

depending on composition.

---

# 31. STAGGER TIMING

Keep gaps small enough that the group feels connected.

---

# 32. HERO MASTER TIMELINE

Default Home hero sequence:

```text
T+0
background atmosphere exists

T+100
ambient light begins settling

T+200
podium begins reveal

T+350
podium material/light becomes clear

T+450
eyebrow enters

T+550
headline enters

T+700
supporting copy enters

T+800
CTA enters

T+1000+
scene settles into idle state
```

This is a conceptual choreography.

Exact timing may be tuned during implementation.

---

# 33. HERO RULE

The headline must not wait for the podium to become fully interactive.

---

# 34. HERO PERFORMANCE

Text must render immediately.

3D is enhancement.

---

# 35. HERO BACKGROUND

Background motion should begin subtly.

Avoid obvious moving gradients.

---

# 36. HERO LIGHT REVEAL

Golden light may intensify during hero entrance.

It should feel like a spotlight being revealed, not a flash.

---

# 37. PODIUM REVEAL

Possible sequence:

```text
low visibility
→ silhouette
→ material definition
→ gold plaque visibility
→ stable final state
```

---

# 38. PODIUM REVEAL METHOD

Can combine:

```text
opacity
scale
camera movement
light intensity
```

Do not animate all four aggressively.

---

# 39. PODIUM CAMERA

Camera movement should be smooth and restrained.

---

# 40. PODIUM IDLE

Idle motion may include:

```text
very subtle lighting drift
very subtle camera depth
```

Avoid constant obvious rotation.

---

# 41. PODIUM HOVER

Optional:

```text
pointer approaches
→ tiny orientation response
→ edge catches light
```

---

# 42. PODIUM HOVER LIMIT

The user should not feel like they are controlling a spinning object unless explicitly intended.

---

# 43. PODIUM SCROLL

During hero exit:

```text
slight depth movement
+
fade/reframe
```

---

# 44. PODIUM EXIT

The podium should leave naturally with the hero.

Do not abruptly disappear.

---

# 45. PODIUM MOBILE

Default:

```text
reduced motion
```

---

# 46. MOBILE PODIUM

If 3D is used:

```text
small camera movement
minimal light movement
no aggressive pointer behavior
```

---

# 47. MOBILE FALLBACK

Static image fallback is acceptable and should preserve the intended composition.

---

# 48. SECTION REVEAL

Default:

```text
opacity 0 → 1
translateY small → 0
```

---

# 49. SECTION REVEAL TRIGGER

Trigger when the section approaches the viewport.

Do not wait until the section is almost completely visible.

---

# 50. SECTION REVEAL ONCE

Default:

```text
once per page visit
```

---

# 51. RE-ENTRY

Avoid repeatedly replaying animations every time the user scrolls a few pixels backward.

---

# 52. CARD GRID REVEAL

Recommended:

```text
section heading
→ grid container
→ cards stagger
```

---

# 53. CARD REVEAL

Cards should feel like a group.

---

# 54. CARD HOVER

Possible:

```text
translateY small
image scale tiny
border/light change
arrow movement
```

---

# 55. CARD HOVER RULE

Do not combine:

```text
scale
rotate
glow
shadow
image zoom
border animation
```

all at once.

Choose a small combination.

---

# 56. CARD EXIT

Hover state should reverse smoothly.

---

# 57. BUTTON ANIMATION

Default:

```text
hover → subtle color/light shift
press → tiny compression
release → settle
```

---

# 58. BUTTON ARROW

Arrow may shift slightly on hover.

---

# 59. BUTTON LIGHT SWEEP

Optional for primary premium CTA.

Use very rarely.

---

# 60. LINK UNDERLINE

Possible:

```text
line grows
or
line shifts
```

Keep subtle.

---

# 61. HEADER ENTER

At initial page load:

```text
header stable
```

Do not animate the entire header dramatically.

---

# 62. HEADER SCROLL

Transition:

```text
transparent
→
structured background
```

---

# 63. HEADER COMPACTION

May reduce vertical padding slightly.

---

# 64. HEADER RULE

Never make navigation controls move unpredictably during scroll.

---

# 65. MOBILE MENU OPEN

Recommended:

```text
backdrop fade
→ menu panel/layer
→ links stagger
→ CTA
```

---

# 66. MOBILE MENU CLOSE

Recommended:

```text
links fade
→ backdrop closes
```

Fast.

---

# 67. MOBILE MENU STAGGER

Keep stagger short.

Users opened the menu to navigate, not watch an animation.

---

# 68. FILTER ANIMATION

Filter state:

```text
selection changes
→ active visual state
→ result transition
```

---

# 69. FILTER RESULT TRANSITION

Avoid making an entire page disappear and reappear.

Prefer:

```text
small loading state
→ content update
```

---

# 70. SEARCH RESULT ANIMATION

Use minimal transition.

---

# 71. SEARCH INPUT

Typing must never be delayed by decorative animation.

---

# 72. ACCORDION OPEN

Recommended:

```text
icon rotates slightly
content reveals
```

---

# 73. ACCORDION CLOSE

Faster than open if appropriate.

---

# 74. ACCORDION HEIGHT

Do not hardcode content height when it can change.

---

# 75. TAB TRANSITION

Use subtle content replacement.

Avoid large page-like transitions between tabs.

---

# 76. DRAWER OPEN

Use:

```text
backdrop fade
+
drawer translation
```

---

# 77. DRAWER CLOSE

Reverse quickly.

---

# 78. MODAL OPEN

Use:

```text
backdrop opacity
modal opacity
small scale/translate
```

---

# 79. MODAL CLOSE

Quick and predictable.

---

# 80. TOAST

Simple:

```text
enter
→ hold
→ exit
```

---

# 81. TOAST MOTION

Avoid bouncing.

---

# 82. FORM FIELD

Focus transition should be immediate.

---

# 83. FORM ERROR

Use subtle emphasis.

Do not shake the entire field repeatedly.

---

# 84. FORM SUCCESS

Optional:

```text
submit button
→ success
```

then show success message.

---

# 85. LOADING INDICATOR

Use minimal motion.

---

# 86. SKELETON SHIMMER

Optional.

If used, it must be subtle.

---

# 87. REDUCED MOTION SKELETON

Static skeleton is acceptable.

---

# 88. ERROR STATE

No dramatic animation.

---

# 89. EMPTY STATE

No dramatic animation.

---

# 90. PAGE TRANSITIONS

Page transitions are optional.

If used, they must be:

```text
short
consistent
interruptible
accessible
```

---

# 91. PAGE TRANSITION STYLE

Preferred:

```text
fade
+
slight depth/translate
```

---

# 92. PAGE TRANSITION ANTI-PATTERN

Never use a long black screen between pages.

---

# 93. ROUTE TRANSITION

Navigation should begin immediately after user intent.

---

# 94. BROWSER NAVIGATION

Back/forward transitions should not feel broken.

---

# 95. DETAIL PAGE ENTER

A detail page can use:

```text
hero reveal
→ metadata
→ content
```

---

# 96. DETAIL PAGE EXIT

Do not animate the entire page away before navigation.

---

# 97. SCROLL PARALLAX SYSTEM

Three levels:

```text
LEVEL 0 — NONE
ordinary content

LEVEL 1 — SUBTLE
backgrounds

LEVEL 2 — SIGNATURE
podium / major hero visual
```

Avoid Level 3.

---

# 98. PARALLAX PERFORMANCE

Use transform-based movement.

---

# 99. PARALLAX ACCESSIBILITY

Disabled under reduced motion.

---

# 100. PARALLAX MOBILE

Reduce substantially or disable.

---

# 101. BACKGROUND MOTION

Can include:

```text
light gradient drift
very subtle grain
architectural lines
```

---

# 102. BACKGROUND GRAIN

If used:

```text
very low opacity
non-interactive
```

---

# 103. PARTICLES

Particles are optional and should not become a generic "AI website" effect.

---

# 104. PARTICLE RULE

If particles are used:

```text
few
slow
subtle
non-distracting
```

---

# 105. GOLD LIGHT MOTION

Light should appear to have physical direction.

---

# 106. LIGHT MOVEMENT

Use:

```text
slow drift
intensity breathing
subtle positional change
```

---

# 107. LIGHT BREATHING

Should be almost imperceptible.

---

# 108. LIGHT FLASH

Avoid sudden flashes.

---

# 109. GOLD PARTICLES + LIGHT

Do not automatically combine both.

---

# 110. SECTION TRANSITIONS

Each major section may have a distinct visual transition:

```text
dark → dark
dark → slightly lighter surface
dark → gold-accented
```

---

# 111. SECTION TRANSITION RULE

Do not make every section dramatically different.

---

# 112. VISUAL RHYTHM

Recommended:

```text
high
↓
quiet
↓
high
↓
quiet
```

This creates visual breathing room.

---

# 113. MOTION RHYTHM

Recommended:

```text
hero = cinematic
intro = quiet
grid = moderate
data = minimal
CTA = cinematic
```

---

# 114. ACADEMY MOTION PROFILE

```text
medium
structured
educational
```

Less cinematic than Home.

---

# 115. ACADEMY HERO

Use:

```text
heading reveal
structured visual reveal
small light movement
```

---

# 116. ACADEMY PROGRAMS

Accordion/grid transitions should be functional and fast.

---

# 117. ACADEMY PROCESS

Timeline can reveal sequentially.

---

# 118. EVENTS MOTION PROFILE

```text
moderate
discoverable
energetic
```

---

# 119. EVENT CARD

Use subtle hover and reveal.

---

# 120. EVENT FILTER

Fast state change.

---

# 121. EVENT DETAIL MOTION

Hero may be cinematic.

Content should be restrained.

---

# 122. RESULTS MOTION PROFILE

```text
low
precise
data-focused
```

Avoid excessive movement.

---

# 123. RESULTS TABLE

Rows can have subtle hover.

---

# 124. RESULTS FILTER

Fast and clear.

---

# 125. RESOURCES MOTION PROFILE

```text
low-medium
editorial
calm
```

---

# 126. RESOURCE CARD

Subtle reveal.

---

# 127. RESOURCE DETAIL

Reading content should not continuously move.

---

# 128. ABOUT MOTION PROFILE

```text
medium
editorial
story-driven
```

---

# 129. ABOUT TIMELINE

Sequential reveal can reinforce chronology.

---

# 130. CONTACT MOTION PROFILE

```text
low
clear
functional
```

---

# 131. CONTACT FORM

Do not over-animate.

---

# 132. FINAL CTA MOTION

Can increase visual energy slightly.

---

# 133. CTA LIGHT

Subtle golden atmospheric movement may emphasize the action.

---

# 134. CTA BUTTON

Primary CTA can use the strongest button treatment.

---

# 135. FOOTER MOTION

Keep minimal.

---

# 136. FOOTER LINKS

Normal link interactions.

---

# 137. SOCIAL ICONS

Subtle hover only.

---

# 138. ICON MOTION

Icons should not spin by default.

---

# 139. ARROW MOTION

Small directional movement is acceptable.

---

# 140. CHEVRON MOTION

Rotation for open/closed state.

---

# 141. CLOSE ICON

Do not rotate unnecessarily.

---

# 142. LOADING SCREEN

Avoid a full cinematic loader unless technically necessary.

---

# 143. INITIAL LOAD

Priority:

```text
HTML
→ typography
→ main content
→ CTA
→ visual enhancement
```

---

# 144. 3D LOAD

The 3D podium may load after the primary content.

---

# 145. 3D PLACEHOLDER

Placeholder must resemble the final visual silhouette.

---

# 146. 3D FADE-IN

Once ready:

```text
placeholder
→ 3D
```

Use a short crossfade.

---

# 147. 3D FAILURE

Immediately preserve fallback image.

---

# 148. PERFORMANCE TIERS

Conceptual:

```text
HIGH
full intended experience

MEDIUM
reduced ambient effects

LOW
static visuals + essential motion

NO MOTION
accessibility mode
```

---

# 149. HIGH PERFORMANCE

Can enable:

```text
3D
parallax
ambient light
hover depth
```

---

# 150. MEDIUM PERFORMANCE

Reduce:

```text
particle count
parallax
3D quality
ambient movement
```

---

# 151. LOW PERFORMANCE

Prefer:

```text
static podium
CSS transitions
minimal scroll effects
```

---

# 152. REDUCED MOTION

Disable:

```text
parallax
large transforms
continuous decorative movement
complex 3D animation
```

---

# 153. REDUCED MOTION HERO

Use:

```text
static composition
simple opacity reveal
```

---

# 154. REDUCED MOTION NAVIGATION

Still allow concise menu transition if comfortable, or use instant state change.

---

# 155. REDUCED MOTION CARDS

Keep hover/focus state changes.

---

# 156. REDUCED MOTION FORMS

Keep functional feedback.

---

# 157. REDUCED MOTION PAGE TRANSITIONS

Use immediate or very short fade.

---

# 158. ANIMATION OWNERSHIP

Use CSS for:

```text
simple hover
focus
color
opacity
small transform
```

---

# 159. JAVASCRIPT ANIMATION

Use JavaScript only when state or scroll information is required.

---

# 160. GSAP / MOTION LIBRARY

A motion library may be used for:

```text
timeline choreography
scroll-driven sequences
complex coordinated transitions
```

Do not introduce a library solely for simple CSS transitions.

---

# 161. 3D ENGINE

Use a 3D engine only for actual 3D requirements.

---

# 162. 3D + UI ANIMATION

Keep responsibilities separated:

```text
UI animation system
3D scene animation system
```

Coordinate them through state/timeline events.

---

# 163. STATE-BASED ANIMATION

Preferred for:

```text
menu
modal
accordion
filters
form
```

---

# 164. SCROLL-BASED ANIMATION

Preferred for:

```text
hero
large visual sections
storytelling
```

---

# 165. TIME-BASED ANIMATION

Preferred for:

```text
ambient light
idle atmosphere
```

---

# 166. POINTER-BASED ANIMATION

Preferred for:

```text
desktop podium response
optional visual effects
```

---

# 167. INPUT PRIORITY

Order:

```text
user input
>
functional UI
>
scroll
>
ambient animation
```

---

# 168. INTERRUPTION

Animations must tolerate interruption.

---

# 169. RAPID INTERACTION

Repeated clicks should not create animation stacking.

---

# 170. ANIMATION CLEANUP

When components unmount:

```text
listeners removed
timelines killed
observers disconnected
animation frames canceled
```

---

# 171. SCROLL OBSERVERS

Do not create one observer per tiny element unnecessarily.

Use efficient grouping where possible.

---

# 172. RAF

Avoid unnecessary requestAnimationFrame loops.

---

# 173. POINTER TRACKING

Throttle or smooth pointer-driven effects.

---

# 174. 3D RENDER LOOP

Do not render unnecessary high-frequency work when the scene is not visible.

---

# 175. VISIBILITY

Pause expensive animation when the hero/scene is off-screen where technically appropriate.

---

# 176. TAB VISIBILITY

Reduce or pause continuous effects when the browser tab is hidden.

---

# 177. MEMORY

Dispose of:

```text
textures
geometry
materials
event listeners
observers
```

when appropriate.

---

# 178. ANIMATION QA

Every animation must be checked at:

```text
slow network
low-end device
mobile
desktop
reduced motion
```

---

# 179. VISUAL QA

Check:

```text
does motion preserve hierarchy?
does it hide content?
does it create layout shift?
does it distract?
does it feel consistent?
```

---

# 180. TIMING QA

Ask:

```text
Does it feel instant?
Does it feel too slow?
Does the user wait for it?
```

---

# 181. MOTION QA

Ask:

```text
Is the animation visible enough to communicate state?
Is it subtle enough to remain premium?
```

---

# 182. MOBILE QA

Ask:

```text
Does mobile feel lighter?
Does scrolling remain natural?
Does the podium remain subordinate?
```

---

# 183. ACCESSIBILITY QA

Ask:

```text
Does reduced motion work?
Does keyboard interaction remain clear?
Are state changes communicated?
```

---

# 184. PERFORMANCE QA

Ask:

```text
Does animation block rendering?
Does 3D delay content?
Are there unnecessary animation loops?
```

---

# 185. AI IMPLEMENTATION RULE

The coding AI must implement motion only after:

```text
layout
responsive behavior
semantic structure
```

are stable.

---

# 186. AI MOTION ORDER

```text
1. functional state transitions
2. hover/focus/pressed
3. menu/filter/modal
4. section reveal
5. page transition
6. atmospheric motion
7. podium motion
8. optimization
```

---

# 187. AI MUST NOT

Do not:

```text
add random GSAP effects
add arbitrary parallax
animate every heading
add spinning icons
add excessive glow
add particle fields automatically
```

---

# 188. REFERENCE IMAGE RULE

If a reference image appears static:

do not assume the implementation should have zero motion.

Instead infer motion from this document.

---

# 189. REFERENCE VIDEO RULE

If future motion references are supplied:

they supplement this specification but do not automatically override it.

---

# 190. MOTION TOKENIZATION

Motion values should be centralized.

Example conceptual structure:

```text
--motion-micro
--motion-short
--motion-standard
--motion-long
--motion-cinematic
```

---

# 191. EASING TOKENIZATION

Centralize easing curves.

Do not scatter arbitrary cubic-bezier values throughout the codebase.

---

# 192. TRANSFORM TOKENIZATION

Where practical, centralize common movement distances.

---

# 193. REDUCED MOTION TOKEN

Provide a single system-level motion preference strategy.

---

# 194. DEBUG MODE

Development builds may expose:

```text
animation boundaries
trigger markers
timelines
3D debug camera
```

but these must never ship visibly.

---

# 195. MOTION DOCUMENTATION

Complex animations should have comments explaining:

```text
purpose
trigger
fallback
cleanup
```

not comments merely describing obvious syntax.

---

# 196. MOTION NAMING

Use descriptive names:

```text
heroReveal
podiumEnter
sectionReveal
filterOpen
menuEnter
```

Avoid:

```text
coolAnimation1
testAnim
wowEffect
```

---

# 197. COMPONENT MOTION CONTRACT

Every animated component should define:

```text
initial
active
hover
focus
pressed
disabled
loading
exit
reducedMotion
```

only where relevant.

---

# 198. HERO MOTION CONTRACT

Hero should define:

```text
initial load
scroll
pointer
idle
exit
reduced motion
fallback
```

---

# 199. PODIUM MOTION CONTRACT

Podium should define:

```text
load
idle
pointer
scroll
mobile
reduced motion
fallback
dispose
```

---

# 200. CARD MOTION CONTRACT

Card should define:

```text
enter
hover
focus
pressed
exit
loading
```

---

# 201. MENU MOTION CONTRACT

Menu should define:

```text
open
close
focus
keyboard
reduced motion
```

---

# 202. FILTER MOTION CONTRACT

Filter should define:

```text
open
select
clear
loading
empty
error
```

---

# 203. FORM MOTION CONTRACT

Form should define:

```text
focus
validation
submit
loading
success
error
```

---

# 204. PAGE MOTION CONTRACT

Every route should define:

```text
initial state
page enter
scroll behavior
page exit if applicable
reduced motion
```

---

# 205. MOTION BUDGET

A page should not have every layer moving simultaneously.

---

# 206. MOTION DENSITY

Recommended:

```text
hero: high
first content section: medium
ordinary sections: low-medium
data sections: low
footer: low
```

---

# 207. QUIET ZONES

Intentional areas of almost no animation should exist.

These make cinematic areas feel more powerful.

---

# 208. CINEMATIC PEAK

Each major page should have no more than a small number of true cinematic peaks.

---

# 209. HOME MOTION PEAKS

Recommended:

```text
hero
final CTA
```

---

# 210. ACADEMY MOTION PEAK

Recommended:

```text
hero
learning/process visualization
```

---

# 211. EVENTS MOTION PEAK

Recommended:

```text
hero
featured event
```

---

# 212. RESULTS MOTION PEAK

Recommended:

```text
hero only
```

---

# 213. RESOURCES MOTION PEAK

Recommended:

```text
hero or featured resource
```

---

# 214. ABOUT MOTION PEAK

Recommended:

```text
hero
timeline/story
```

---

# 215. CONTACT MOTION PEAK

Recommended:

```text
hero
```

---

# 216. MOTION CONTRAST

If everything moves:

nothing feels special.

---

# 217. MOTION SILENCE

Static content is intentional.

---

# 218. FINAL MOTION CHECKLIST

Before shipping:

```text
[ ] Functional UI works without animation
[ ] Hover states are subtle
[ ] Focus states are clear
[ ] Pressed states are clear
[ ] Scroll reveals are restrained
[ ] Hero choreography feels cinematic
[ ] Podium feels physical
[ ] Podium does not dominate content
[ ] Mobile motion is reduced
[ ] Reduced motion works
[ ] No unexpected audio
[ ] No excessive particles
[ ] No unnecessary infinite loops
[ ] No layout shifts
[ ] No animation blocks content
[ ] 3D fallback works
[ ] Low-performance fallback works
[ ] Keyboard navigation works
[ ] Browser navigation works
[ ] Page transitions are not slow
[ ] Motion tokens are centralized
[ ] Complex animations are cleaned up
```

---

# 219. FINAL MOTION STANDARD

PDF motion should feel like:

```text
walking into a dark auditorium
the lights slowly finding the stage
the podium becoming visible
the room revealing its structure
and every interaction responding with quiet precision
```

It should never feel like:

```text
an animation demo
```

---

# 220. END STATE

The finished website should have a recognizable motion signature:

```text
restrained
cinematic
physical
gold-lit
architectural
responsive
premium
```

The user should notice the experience before noticing the machinery behind it.
