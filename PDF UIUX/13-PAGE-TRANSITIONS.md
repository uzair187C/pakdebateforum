# PAK DEBATE FORUM — DESIGN SYSTEM
# 13 — PAGE TRANSITIONS

Status: Page-transition and navigation-motion source of truth
Scope: route transitions, navigation choreography, page entry/exit, shared visual continuity, podium continuity, mobile behavior, loading states, browser history, reduced motion, accessibility, performance, and AI implementation rules.

---

# 0. PURPOSE

PBF should feel like one coherent premium environment rather than a collection of unrelated pages.

The transition system exists to create continuity between:

```text
Home
Academy
Events
Results
Resources
About
Contact
```

The user should feel that they are moving through the same world.

---

# 1. CORE PRINCIPLE

Transitions communicate:

```text
where the user came from
→
where the user is going
```

They should not exist merely because animation is possible.

---

# 2. EXPERIENCE GOAL

PBF transitions should feel:

```text
cinematic
controlled
confident
fast
premium
quiet
```

Avoid:

```text
flashy
game-like
slow
overanimated
confusing
```

---

# 3. TRANSITION HIERARCHY

Priority:

```text
1. immediate navigation feedback
2. content continuity
3. page structure transition
4. hero transition
5. decorative motion
```

Decorative animation must never delay navigation unnecessarily.

---

# 4. TRANSITION DURATION PHILOSOPHY

Use short, intentional motion.

Recommended conceptual ranges:

```text
micro interaction: ~120–220ms
small component transition: ~180–300ms
page enter/exit: ~300–600ms
major cinematic transition: ~500–800ms
```

Do not turn ordinary navigation into a long intro sequence.

---

# 5. EASING

Default motion should feel smooth and controlled.

Prefer easing curves that:

- accelerate naturally;
- decelerate cleanly;
- avoid abrupt stopping.

Avoid excessive bounce unless a specific interaction calls for it.

---

# 6. NO BOUNCY PAGE TRANSITIONS

Full-page navigation should not bounce.

The PBF visual language is editorial/cinematic, not playful.

---

# 7. TRANSITION LAYERS

Conceptually separate:

```text
navigation state
+
page content
+
hero visual
+
decorative atmosphere
```

This allows individual layers to transition independently.

---

# 8. PAGE SHELL

The global shell should remain visually stable.

Persistent shell candidates:

- global background;
- header;
- navigation language;
- core typography;
- gold accent system.

---

# 9. HEADER CONTINUITY

The header should not unnecessarily disappear and reappear between every route.

Prefer continuity.

---

# 10. HEADER TRANSITION

If the header changes state:

Use a controlled morph/slide/fade rather than a complete reconstruction.

---

# 11. LOGO CONTINUITY

The PBF logo should remain recognizable during route changes.

Avoid unnecessary logo animations on every click.

---

# 12. PODIUM CONTINUITY

The podium is a major visual identity element.

When appropriate, it should feel like a persistent object in the PBF environment.

---

# 13. PODIUM RULE

Do not automatically replay the entire podium entrance every time the user changes pages.

The first arrival can be special.

Subsequent navigation should be lighter.

---

# 14. HOME ARRIVAL

The homepage may use the strongest podium introduction.

Possible sequence:

```text
black atmosphere
→
gold light
→
podium reveal
→
brand/title reveal
→
CTA becomes available
```

---

# 15. SUBSEQUENT HOME RETURN

Returning Home should not necessarily replay the complete intro.

Prefer:

```text
quick continuity transition
→
restore home state
```

---

# 16. ACADEMY TRANSITION

Home → Academy should feel like entering the institutional/educational layer.

Potential visual language:

```text
hero compresses
→
gold line/structure emerges
→
Academy title settles
```

Keep it restrained.

---

# 17. EVENTS TRANSITION

Home/Academy → Events should emphasize activity.

Possible:

```text
current composition darkens slightly
→
event title enters
→
event grid resolves
```

---

# 18. RESULTS TRANSITION

Results should feel more structured/data-driven.

Avoid excessive cinematic movement.

Possible:

```text
hero visual recedes
→
structured content appears
→
standings/results settle
```

---

# 19. RESOURCES TRANSITION

Resources can use a quieter transition.

Possible:

```text
page title
→
category structure
→
resource cards
```

---

# 20. ABOUT TRANSITION

About can emphasize institutional identity.

Use:

- logo;
- typography;
- imagery;
- gold lines.

Avoid excessive 3D motion.

---

# 21. CONTACT TRANSITION

Contact should prioritize immediate usability.

Do not create a long transition before exposing contact information/form.

---

# 22. PAGE IDENTITY

Each page can have a distinct motion accent.

However:

```text
motion language ≠ completely different animation system
```

All pages must feel related.

---

# 23. GLOBAL MOTION LANGUAGE

Shared:

- easing;
- durations;
- gold accent;
- opacity behavior;
- typography reveal;
- line movement;
- black atmospheric layers.

---

# 24. PAGE-SPECIFIC MOTION

Allowed to vary:

- direction;
- intensity;
- hero composition;
- card reveal style;
- decorative detail.

---

# 25. TRANSITION DIRECTIONS

Do not use arbitrary directions.

Use direction to communicate hierarchy or context.

---

# 26. HORIZONTAL NAVIGATION

For normal top-level routes, avoid literal left/right sliding page panels unless there is a strong reason.

It can make the site feel like a mobile app.

Prefer atmospheric continuity.

---

# 27. VERTICAL CONTENT

Vertical movement can suggest scrolling deeper into content.

Use subtly.

---

# 28. FADE

Fade is the safest global transition.

But do not make every transition a simple opacity fade.

---

# 29. CROSSFADE

Crossfade is useful when two compositions share similar geometry.

---

# 30. SCALE

Subtle scale can create depth.

Avoid large zooms.

---

# 31. BLUR

Blur should be rare.

It is visually expensive and can make transitions feel muddy.

---

# 32. GOLD LIGHT WIPE

A thin controlled gold light movement may be used as a PBF signature transition.

It should be:

- subtle;
- short;
- low-opacity;
- non-blocking.

---

# 33. GOLD LINE

A gold line can expand or contract to connect sections.

This is preferred over giant flashy wipes.

---

# 34. BLACK ATMOSPHERIC LAYER

A black overlay can provide continuity during major composition changes.

Avoid pure opaque black for long periods.

---

# 35. NO FLASH

Never use a bright white flash between pages.

---

# 36. NO HARD RESET

Avoid visibly destroying the entire page and rebuilding it from zero when a smoother transition is possible.

---

# 37. ROUTE CHANGE SEQUENCE

Conceptually:

```text
user clicks
↓
navigation feedback immediately
↓
current page exit begins
↓
new route becomes available
↓
new page enters
↓
decorative enhancement continues
```

---

# 38. CLICK FEEDBACK

The click should feel acknowledged immediately.

Examples:

- subtle button state;
- gold highlight;
- pressed state.

---

# 39. NAVIGATION LOCK

Do not lock the entire UI for long periods during a transition.

---

# 40. DOUBLE CLICK

Navigation should prevent accidental duplicate route actions without trapping the user.

---

# 41. ROUTE TRANSITION STATE

Maintain a predictable transition state:

```text
idle
→
exiting
→
loading
→
entering
→
complete
```

---

# 42. ERROR STATE

If route loading fails:

```text
transition stops
→
error state appears
→
navigation remains usable
```

---

# 43. SLOW ROUTE

Do not leave a blank screen while waiting for slow data.

Show the page shell immediately where architecture allows.

---

# 44. LOADING CONTENT

Prefer:

```text
existing shell
+
page title
+
intentional loading state
```

over:

```text
full-screen spinner
```

---

# 45. SPINNER POLICY

Avoid giant generic spinners.

They do not fit the PBF premium visual language.

---

# 46. LOADING INDICATOR

If needed, prefer a restrained gold line, pulse, or small progress indicator.

---

# 47. PAGE ENTER

The page should enter in layers.

Example:

```text
background
→
heading
→
supporting copy
→
primary visual
→
content
```

---

# 48. STAGGER

Stagger related elements slightly.

Do not stagger 40 cards individually with huge delays.

---

# 49. STAGGER BUDGET

The final important content should appear quickly.

---

# 50. CARD REVEAL

For grids:

Prefer grouped reveals.

Example:

```text
row/cluster
→
row/cluster
```

rather than:

```text
card 1
card 2
card 3
...
```

with a long cascading delay.

---

# 51. HERO REVEAL

Hero title should not wait behind decorative animation.

---

# 52. CTA REVEAL

Primary CTA should become usable quickly.

---

# 53. NAVIGATION DURING ENTER

Users should be able to navigate before every decorative entrance finishes.

---

# 54. EXIT ANIMATION

Exit animations should be shorter than dramatic intro animations.

---

# 55. EXIT PRIORITY

When navigating:

```text
interaction
→
content transition
→
background transition
```

Do not make the user wait for every particle.

---

# 56. INTERRUPTION

Users should be able to interrupt animations by navigating elsewhere.

---

# 57. ROUTE CHANGE DURING TRANSITION

If another navigation occurs while transitioning:

The system should settle on the latest intended route.

Avoid stacking multiple transition timelines.

---

# 58. TRANSITION CANCELLATION

Use cancellation/cleanup mechanisms for obsolete transitions.

---

# 59. BROWSER BACK

Back navigation should not replay a completely unrelated forward animation.

---

# 60. BROWSER FORWARD

Forward navigation should feel consistent with normal route movement.

---

# 61. SCROLL RESTORATION

Respect browser expectations.

For a new route:

```text
usually → top
```

For history restoration:

```text
restore previous position when appropriate
```

---

# 62. ANCHOR NAVIGATION

Same-page anchors should not trigger full page transitions.

---

# 63. SAME-PAGE HASH

Use smooth scrolling only when appropriate and compatible with reduced motion.

---

# 64. MODALS

Modal appearance is a local transition, not a page transition.

---

# 65. MODAL ENTER

Possible:

```text
backdrop fade
+
panel subtle rise/scale
```

---

# 66. MODAL EXIT

Exit quickly.

Do not delay dismissal.

---

# 67. MOBILE DRAWER

Mobile navigation drawer should have a dedicated motion system.

---

# 68. DRAWER ENTER

Possible:

```text
backdrop
→
panel
→
nav items
```

Keep it fast.

---

# 69. DRAWER EXIT

Close immediately enough to feel responsive.

---

# 70. DRAWER BACKDROP

Backdrop should support focus and visual separation.

---

# 71. MOBILE PAGE TRANSITIONS

Reduce cinematic complexity.

The mobile user should not be forced through long sequences.

---

# 72. MOBILE PRIORITY

Mobile transitions prioritize:

```text
speed
clarity
orientation
```

over cinematic spectacle.

---

# 73. TOUCH

Do not depend on hover state to understand a transition.

---

# 74. TOUCH NAVIGATION

Tap feedback should be immediate.

---

# 75. REDUCED MOTION

If reduced motion is enabled:

Replace elaborate page transitions with:

```text
minimal fade
or
instant state change
```

---

# 76. REDUCED MOTION PODIUM

Do not animate the podium continuously.

A static podium is acceptable.

---

# 77. REDUCED MOTION SCROLL

Disable scroll-linked cinematic movement.

---

# 78. ACCESSIBILITY

Transitions must never:

- trap focus;
- hide the active page from assistive technology;
- delay keyboard navigation;
- cause disorientation.

---

# 79. FOCUS AFTER ROUTE CHANGE

After navigation, focus should move logically to the new page context.

For standard page navigation, a main-content heading or main landmark can become the logical focus target where appropriate.

---

# 80. FOCUS VISIBILITY

The focused element must remain visibly focused.

---

# 81. SCREEN READER

Do not announce every decorative transition.

---

# 82. LIVE REGION

Only announce meaningful route/status changes where necessary.

---

# 83. MOTION + COGNITION

Motion should reinforce hierarchy.

It should never obscure where the user is.

---

# 84. URL

The URL must update correctly and predictably.

Visual transitions must not replace proper navigation semantics.

---

# 85. DEEP LINKS

Every important page must be directly addressable.

Example concept:

```text
/site
/site/academy
/site/events
/site/results
/site/resources
/site/about
```

Actual routing structure follows the application architecture.

---

# 86. REFRESH

Refreshing a route should load the correct page directly.

It should not require entering through Home.

---

# 87. SHAREABLE ROUTES

A user can share a route and another user can open it directly.

---

# 88. TRANSITION + SEO

Important page content must not depend on transition completion.

---

# 89. JAVASCRIPT FAILURE

Without JavaScript:

- navigation remains understandable;
- content remains available where architecture permits;
- transitions disappear rather than becoming blockers.

---

# 90. WEBGL FAILURE

Page transition must not depend on WebGL.

---

# 91. STATIC FALLBACK

The static podium can participate in a simple fade/transform transition.

---

# 92. 3D → STATIC

If 3D fails during a transition:

```text
freeze/stop 3D
→
fade/match static composition
→
continue navigation
```

---

# 93. STATIC → 3D

If 3D initializes after initial content:

```text
static composition
→
3D loads
→
visual match
→
3D becomes active
```

Avoid visible jumps.

---

# 94. PODIUM CAMERA CONTINUITY

When the podium persists between routes, maintain a related camera language.

Do not suddenly rotate the object 180° without purpose.

---

# 95. PODIUM STATE

Possible persistent states:

```text
home-intro
home-idle
route-transition
mobile-idle
fallback
```

---

# 96. PODIUM IDLE

Idle motion should be extremely subtle.

Examples:

- tiny light movement;
- nearly imperceptible camera drift;
- subtle atmospheric particles.

---

# 97. NO CONSTANT SPIN

Do not continuously spin the podium.

The podium should feel like an architectural object, not a product carousel.

---

# 98. ROUTE-SPECIFIC PODIUM

If a page needs a different podium composition:

Prefer camera/material/lighting changes before replacing the entire model.

---

# 99. PAGE TRANSITION BACKGROUND

A common black atmospheric base can persist.

This makes routes feel connected.

---

# 100. GOLD ACCENT CONTINUITY

Gold should appear consistently.

Do not change accent colors between pages without a system-level reason.

---

# 101. TYPOGRAPHY CONTINUITY

Page titles should use the established typography system.

Transition animation must not change typography style.

---

# 102. GRID CONTINUITY

Content can transition from hero composition into the established page grid.

---

# 103. SECTION TRANSITION

Within a page:

Use section reveals rather than full-page transitions.

---

# 104. SCROLL REVEALS

Scroll reveals should be:

- subtle;
- once-per-appearance where appropriate;
- reversible only when visually necessary.

---

# 105. SCROLL REVEAL PERFORMANCE

Do not attach expensive animation logic to every DOM node.

---

# 106. INTERSECTION OBSERVER

Use visibility-based triggers where appropriate.

---

# 107. REVEAL DISTANCE

Avoid requiring the user to scroll far before content becomes visible.

---

# 108. REVEAL FAILURE

If animation fails, content must simply be visible.

---

# 109. NO CONTENT DEPENDENCY

Never keep essential text:

```text
opacity: 0
```

indefinitely because an animation failed.

---

# 110. TRANSITION TOKENS

Maintain centralized tokens for:

```text
duration
easing
delay
distance
opacity
scale
blur
```

---

# 111. TOKENIZED MOTION

Do not scatter arbitrary:

```text
transition: 743ms
```

values across the project.

---

# 112. DURATION SCALE

Conceptual scale:

```text
instant
micro
short
medium
cinematic
```

---

# 113. EASING SCALE

Conceptual:

```text
standard
emphasized
enter
exit
```

---

# 114. ENTER VS EXIT

Enter can be slightly more expressive.

Exit should be faster.

---

# 115. MOTION DISTANCE

Keep travel distances controlled.

Large elements should not fly across the entire viewport unless explicitly designed.

---

# 116. OPACITY

Avoid stacking many semi-transparent layers.

---

# 117. BLUR TRANSITION

If blur is used:

Keep it subtle and brief.

---

# 118. SCALE TRANSITION

Use small scale ranges.

Conceptually:

```text
0.98 → 1
```

is often enough.

---

# 119. ROTATION

Avoid page-wide rotation.

Tiny decorative rotations may be used for selected objects.

---

# 120. CLIP-PATH

Use carefully.

Complex animated clipping can be expensive.

---

# 121. MASKS

Do not use complex masks merely to make a standard fade look different.

---

# 122. GOLD WIPE IMPLEMENTATION

If a gold wipe is used:

It should be a lightweight layer.

Do not create dozens of DOM nodes.

---

# 123. PAGE TRANSITION OVERLAY

A dedicated overlay may be used to control global transition choreography.

---

# 124. OVERLAY Z-INDEX

Define a central z-index hierarchy.

Avoid random values throughout the codebase.

---

# 125. TRANSITION OVERLAY INPUT

The overlay must not permanently block pointer interaction.

---

# 126. TRANSITION OVERLAY ACCESSIBILITY

It must not trap keyboard focus during ordinary route navigation.

---

# 127. PERFORMANCE

Transition overlays should use inexpensive properties.

---

# 128. GPU

Use GPU-friendly transforms when appropriate.

---

# 129. PAGE EXIT MEMORY

Do not retain entire old pages merely to animate them unless necessary.

---

# 130. SHARED ELEMENTS

Shared-element transitions may be used selectively.

Good candidates:

- logo;
- hero image;
- event card image;
- article thumbnail.

---

# 131. SHARED ELEMENT RULE

Only use shared-element motion when it improves orientation.

Do not animate every shared element.

---

# 132. LOGO SHARED ELEMENT

A logo can transition from navigation/hero into another branded state.

Keep it subtle.

---

# 133. EVENT CARD

An event card can expand into an event detail page if the architecture supports it.

---

# 134. IMAGE CONTINUITY

If an image expands into detail view:

Match:

- crop;
- aspect ratio;
- position;
- scale.

---

# 135. FAILED SHARED ELEMENT

If the shared-element system fails:

Use a normal page transition.

---

# 136. ROUTE LOADING

Route loading should be decoupled from visual transition where possible.

---

# 137. FAST ROUTES

If content is already available:

Do not show a heavy loading animation.

---

# 138. SLOW ROUTES

If content takes time:

Maintain visual context.

---

# 139. CACHE HIT

Cached route data should transition quickly.

---

# 140. CACHE MISS

A cache miss may show a restrained loading state.

---

# 141. API DATA

The page shell can enter before secondary API data.

---

# 142. DATA PLACEHOLDER

Use content-shaped placeholders when necessary.

---

# 143. ERROR TRANSITION

Do not animate an error endlessly.

---

# 144. RETRY

Retry should be immediate and obvious.

---

# 145. BACK NAVIGATION

If browser Back returns to a cached page:

Restore quickly.

---

# 146. FORWARD NAVIGATION

Maintain the same page-shell continuity.

---

# 147. HISTORY

Do not push redundant history entries for visual-only state changes.

---

# 148. QUERY PARAMETER

Changing filters/search parameters may not require a full page transition.

---

# 149. TAB SWITCHING

Tabs should use local transitions.

---

# 150. ACCORDIONS

Accordion motion should not affect unrelated page elements unnecessarily.

---

# 151. MODAL ROUTES

If modal state is represented in the URL, browser Back should close the modal naturally where appropriate.

---

# 152. MOBILE MENU ROUTES

Opening a menu should not modify route state unless architecture explicitly requires it.

---

# 153. NAVIGATION ERROR

A failed route must return control to the user.

---

# 154. NETWORK ERROR

Do not confuse network failure with a transition still running.

---

# 155. TIMEOUT

Optional visual enhancement should have a timeout/fallback.

---

# 156. TRANSITION WATCHDOG

If a transition somehow becomes stuck:

The system should fail open rather than leaving the UI inaccessible.

---

# 157. FAIL OPEN

After a reasonable safety threshold:

```text
complete transition
→
show content
→
restore interaction
```

---

# 158. NO PERMANENT LOCK

Never permanently disable scrolling/clicking because an animation promise failed.

---

# 159. CLEANUP

Every transition should clean up:

- listeners;
- timers;
- animation frames;
- temporary classes;
- temporary DOM;
- stale state.

---

# 160. MEMORY

Repeated navigation must not progressively consume memory.

---

# 161. LONG SESSION

Test repeated route transitions.

---

# 162. TRANSITION PERFORMANCE

Monitor:

- frame rate;
- long tasks;
- layout;
- paint;
- scripting.

---

# 163. TRANSITION BUDGET

A transition should not monopolize CPU/GPU while the user is waiting.

---

# 164. MOBILE PERFORMANCE

Mobile transition complexity should be automatically reduced where needed.

---

# 165. DEVICE CLASSIFICATION

Use conservative signals.

Do not assume every device reporting a high DPR is powerful.

---

# 166. NETWORK-AWARE ENHANCEMENT

Optional cinematic enhancement may be deferred on constrained networks.

---

# 167. DATA SAVER

Respect data-saving contexts where detectable.

---

# 168. LOW POWER

Reduce continuous motion in low-power situations where practical.

---

# 169. REDUCED DATA

Prefer static assets over video/heavy enhancement.

---

# 170. REDUCED MOTION

Always wins over decorative transition preferences.

---

# 171. USER CONTROL

If a future settings system exposes motion controls:

Honor them globally.

---

# 172. TRANSITION CONSISTENCY

Do not allow one page to introduce a completely different transition philosophy.

---

# 173. PAGE PERSONALITY

Pages may differ in intensity:

```text
Home → strongest
Academy → structured
Events → energetic
Results → precise
Resources → calm
About → institutional
Contact → direct
```

---

# 174. HOME

Home is the cinematic anchor.

---

# 175. ACADEMY

Academy is the structured learning environment.

---

# 176. EVENTS

Events emphasize active participation.

---

# 177. RESULTS

Results emphasize clarity and precision.

---

# 178. RESOURCES

Resources emphasize discovery and utility.

---

# 179. ABOUT

About emphasizes identity and trust.

---

# 180. CONTACT

Contact emphasizes action.

---

# 181. PAGE TRANSITION MATRIX

| From | To | Intensity | Primary Motion |
|---|---|---:|---|
| Home | Academy | Medium | Hero compression + title reveal |
| Home | Events | Medium | Atmosphere shift + content reveal |
| Home | Results | Low/Medium | Structure reveal |
| Home | Resources | Low | Clean fade/line |
| Home | About | Medium | Brand/image continuity |
| Home | Contact | Low | Direct content transition |
| Academy | Events | Medium | Structured → active |
| Academy | Results | Low | Structured transition |
| Events | Results | Low/Medium | Grid → data |
| Events | Resources | Low | Content crossfade |
| Results | Resources | Low | Minimal transition |
| About | Contact | Low | Direct transition |

---

# 182. MATRIX RULE

The matrix defines visual intention, not mandatory exact implementation.

Implementation may evolve after actual UI testing.

---

# 183. PAGE ENTER TEMPLATE

Default:

```text
background already present
↓
page heading
↓
supporting content
↓
primary visual
↓
secondary content
```

---

# 184. PAGE EXIT TEMPLATE

Default:

```text
interactive state acknowledged
↓
content softens
↓
visuals recede
↓
new page begins
```

---

# 185. HOME EXIT

Do not destroy the podium dramatically.

Let it become part of the transition atmosphere.

---

# 186. HOME ENTER

Allow the strongest cinematic treatment here.

---

# 187. ACADEMY ENTER

Use typography and structured lines more than particles.

---

# 188. EVENTS ENTER

Cards may enter in grouped motion.

---

# 189. RESULTS ENTER

Numbers/data should settle quickly.

---

# 190. RESOURCES ENTER

Cards/list should become available quickly.

---

# 191. ABOUT ENTER

Large identity imagery can use a controlled reveal.

---

# 192. CONTACT ENTER

Form should be usable immediately.

---

# 193. NAVIGATION HEADER

Desktop:

- subtle active-state transition;
- no excessive movement.

Mobile:

- drawer transition;
- clear focus.

---

# 194. ACTIVE NAV

Active navigation can use:

- gold underline;
- gold indicator;
- subtle text shift;
- opacity change.

Do not use large movement.

---

# 195. NAV HOVER

Hover should be faster than page transition.

---

# 196. NAV PRESS

Pressed state should feel immediate.

---

# 197. LINK SEMANTICS

Use real links for navigation.

Do not turn every navigation action into a JavaScript-only button.

---

# 198. ACCESSIBILITY

Navigation remains keyboard-accessible regardless of transition state.

---

# 199. FOCUS RESTORATION

If a menu closes:

Return focus logically to the triggering control.

---

# 200. FOCUS AFTER ROUTE

Focus should move to meaningful new content rather than remain trapped on an old element.

---

# 201. SCREEN READER ROUTE

Route changes should be understandable without visual animation.

---

# 202. PAGE TITLE

Update the document title appropriately.

---

# 203. ANNOUNCEMENT

If an SPA route changes without a full document navigation, provide an accessible route-change mechanism where needed.

---

# 204. NO DECORATIVE ANNOUNCEMENTS

Do not announce:

```text
gold glow started
podium moved
particle animation active
```

---

# 205. POINTER EVENTS

Temporary overlays must be carefully managed.

---

# 206. SCROLL LOCK

Only lock scroll when genuinely necessary, such as an open modal/drawer.

---

# 207. SCROLL LOCK CLEANUP

Always restore scroll after closing.

---

# 208. MOBILE BODY SCROLL

Avoid fragile scroll-lock implementations that cause jumps.

---

# 209. ANCHOR OFFSET

Account for sticky header height when scrolling to anchors.

---

# 210. TRANSITION + SCROLL

Do not start a giant page transition and then unexpectedly scroll the user somewhere else.

---

# 211. SCROLL POSITION

New top-level routes normally begin at the top.

---

# 212. HISTORY RESTORE

History restoration takes precedence where appropriate.

---

# 213. DEEP LINK

Deep-linked page should enter directly without replaying unrelated Home animation.

---

# 214. FIRST VISIT

The first visit may receive a slightly stronger cinematic introduction.

---

# 215. RETURN VISIT

Returning visitors should experience a faster path.

---

# 216. SESSION STATE

If the architecture tracks first-visit state, keep it lightweight and respectful of privacy.

---

# 217. NO FORCED INTRO

Do not force a long intro animation on every visit.

---

# 218. LOADING INTRO

A loading screen is not a substitute for performance.

---

# 219. NO FAKE LOADING

Do not intentionally delay content to make the site feel premium.

---

# 220. PREMIUM ≠ SLOW

This is a hard rule.

---

# 221. CINEMATIC ≠ BLOCKING

Cinematic effects must run alongside usable content.

---

# 222. TRANSITION ≠ WAIT

The user should not be waiting simply to watch an animation.

---

# 223. VISUAL CONTINUITY

The system should make route changes feel intentional.

---

# 224. IMPLEMENTATION ABSTRACTION

Centralize route transition logic.

Do not duplicate full transition code on every page.

---

# 225. TRANSITION MANAGER

A shared transition manager/system is preferred.

Responsibilities may include:

- route lifecycle;
- transition state;
- cancellation;
- reduced motion;
- performance tier;
- focus;
- scroll;
- cleanup.

---

# 226. PAGE REGISTRATION

Each page may declare:

```text
page identity
transition intensity
hero type
entry variant
exit variant
```

---

# 227. DEFAULTS

Pages without custom transition settings use the global default.

---

# 228. CUSTOMIZATION

Custom page motion must remain inside global tokens.

---

# 229. NO INLINE RANDOMNESS

Do not invent random transition values per component.

---

# 230. TESTABILITY

Transitions should be testable independently.

---

# 231. DETERMINISM

The same route transition should behave predictably.

---

# 232. RANDOM DECORATION

Decorative particles may be varied, but route behavior must remain deterministic.

---

# 233. DEBUG MODE

Development may expose transition debug information.

Production should not visibly expose debug UI.

---

# 234. PERFORMANCE MODE

Development may include a mechanism to force:

```text
full
balanced
light
fallback
```

for QA.

---

# 235. FALLBACK TESTING

The team must be able to intentionally disable 3D.

---

# 236. REDUCED MOTION TESTING

The team must be able to test reduced-motion behavior.

---

# 237. MOBILE TESTING

The team must be able to test mobile transition variants without relying only on CSS width.

---

# 238. NETWORK TESTING

The team should be able to simulate slow asset/API loading.

---

# 239. FAILURE TESTING

The team should be able to intentionally fail:

- route load;
- 3D;
- images;
- APIs.

---

# 240. TRANSITION QA MATRIX

Test:

```text
first visit
return visit
desktop
mobile
tablet
slow network
low power
reduced motion
WebGL failure
JavaScript failure
back
forward
deep link
refresh
rapid navigation
```

---

# 241. RAPID NAVIGATION

Click multiple routes quickly.

The application must settle cleanly on the intended final route.

---

# 242. INTERRUPTED NAVIGATION

Start transition → navigate elsewhere.

No broken overlays.

---

# 243. MOBILE INTERRUPT

Open drawer → navigate → close state correctly.

---

# 244. MODAL INTERRUPT

Open modal → navigate if allowed → modal state must not leak into another route.

---

# 245. ERROR INTERRUPT

Route fails during transition.

The user retains navigation control.

---

# 246. PERFORMANCE REGRESSION

Any transition change should be tested for:

- scripting;
- paint;
- layout;
- memory;
- network.

---

# 247. VISUAL REGRESSION

Compare:

- timing;
- composition;
- spacing;
- hierarchy;
- fallback.

---

# 248. BRAND REGRESSION

A transition should not accidentally alter:

- logo treatment;
- gold color;
- typography;
- background language.

---

# 249. PAGE TRANSITION TOKENS

Recommended conceptual variables:

```text
--motion-duration-micro
--motion-duration-short
--motion-duration-medium
--motion-duration-cinematic

--motion-ease-standard
--motion-ease-enter
--motion-ease-exit
--motion-ease-emphasis
```

Actual values should live in the central motion system.

---

# 250. TRANSITION DISTANCE TOKENS

Possible:

```text
--motion-distance-xs
--motion-distance-sm
--motion-distance-md
```

Keep movement controlled.

---

# 251. OPACITY TOKENS

Use a small controlled range.

---

# 252. SCALE TOKENS

Use small scale changes.

---

# 253. BLUR TOKENS

Keep blur values limited.

---

# 254. Z-INDEX TOKENS

Centralize:

```text
content
header
overlay
drawer
modal
system
```

---

# 255. TRANSITION CSS

Prefer classes/data attributes/state-driven styles over scattered inline styles where practical.

---

# 256. JAVASCRIPT

JavaScript coordinates transitions.

CSS performs lightweight visual interpolation where possible.

---

# 257. WEB ANIMATION API

May be used where it provides cleaner control.

---

# 258. ANIMATION LIBRARY

A motion library may be used only if it materially improves reliability and remains within performance budgets.

---

# 259. LIBRARY RULE

Do not install an animation library simply because the AI knows its syntax.

---

# 260. ROUTER INTEGRATION

Transition logic must cooperate with the actual routing architecture.

---

# 261. ROUTER AGNOSTICITY

The design specification should survive changes in framework/router implementation.

---

# 262. SERVER NAVIGATION

If the site uses normal document navigation, use CSS/page-load enhancement appropriately.

---

# 263. SPA NAVIGATION

If using SPA routing, preserve semantic links and browser history.

---

# 264. MPA NAVIGATION

A multi-page architecture can still use consistent transitions.

---

# 265. NO ARCHITECTURE ASSUMPTION

Do not force SPA architecture merely to obtain transitions.

---

# 266. TRANSITION PRIORITY

Correct routing is more important than transition smoothness.

---

# 267. DATA PRIORITY

Correct content is more important than transition smoothness.

---

# 268. ACCESSIBILITY PRIORITY

Accessible navigation is more important than transition smoothness.

---

# 269. PERFORMANCE PRIORITY

Responsive interaction is more important than transition smoothness.

---

# 270. FINAL PRIORITY STACK

```text
correctness
>
accessibility
>
content
>
interaction
>
performance
>
visual transition
>
decoration
```

---

# 271. WHAT AI MUST NOT DO

Do not:

- block navigation for long animations;
- replay the Home intro on every page;
- create a unique animation framework per page;
- animate every card;
- use giant full-screen wipes by default;
- trap focus during transitions;
- hide content until animation completes;
- keep old routes alive indefinitely;
- leave WebGL render loops running offscreen;
- ignore reduced motion;
- assume desktop performance applies to mobile.

---

# 272. WHAT AI SHOULD DO

AI should:

- reuse motion tokens;
- reuse transition primitives;
- preserve shell continuity;
- keep route changes fast;
- degrade intelligently;
- clean up animation resources;
- respect accessibility;
- test mobile;
- test reduced motion;
- test fallback;
- measure before optimizing.

---

# 273. IMPLEMENTATION TEMPLATE

For every new route transition, document:

```text
FROM:
TO:
INTENSITY:
ENTRY:
EXIT:
PODIUM:
BACKGROUND:
TITLE:
CONTENT:
MOBILE:
REDUCED MOTION:
FALLBACK:
PERFORMANCE:
```

---

# 274. EXAMPLE

```text
FROM: Home
TO: Events

INTENSITY: Medium

ENTRY:
Events title fades/rises in.

EXIT:
Home content softens.

PODIUM:
Does not replay intro.

BACKGROUND:
Black/gold atmosphere persists.

TITLE:
Gold accent line resolves.

CONTENT:
Event grid enters in grouped rows.

MOBILE:
Reduced movement.

REDUCED MOTION:
Simple fade.

FALLBACK:
No 3D dependency.

PERFORMANCE:
No continuous route-transition render loop.
```

---

# 275. FINAL EXPERIENCE

The ideal PBF route change should feel like:

```text
"I moved somewhere new"
```

not:

```text
"I watched a loading animation."
```

---

# 276. THE PODIUM

The podium is the visual anchor.

It should feel present without becoming a navigation gimmick.

---

# 277. THE WEBSITE AS A WORLD

The ultimate design goal is:

```text
one brand
one atmosphere
many destinations
```

---

# 278. FINAL TRANSITION PRINCIPLE

The visitor should always understand:

```text
where they are
where they came from
where they are going
```

without needing to understand the animation itself.

---

# 279. RELEASE CHECKLIST

Before launch:

```text
[ ] Home intro works
[ ] Home return is fast
[ ] all routes transition consistently
[ ] deep links work
[ ] refresh works
[ ] back works
[ ] forward works
[ ] scroll restoration works
[ ] mobile menu works
[ ] modals work
[ ] reduced motion works
[ ] WebGL fallback works
[ ] static podium works
[ ] slow network works
[ ] rapid navigation works
[ ] transition cleanup works
[ ] focus management works
[ ] no permanent overlay
[ ] no permanent scroll lock
[ ] no transition-induced layout shift
```

---

# 280. HANDOFF

This document defines route and page-transition behavior.

Related systems:

- brand → `01-BRAND-IDENTITY.md`
- color → `02-COLOR-SYSTEM.md`
- typography → `03-TYPOGRAPHY.md`
- layout → `04-GRID-SPACING-LAYOUT.md`
- components → `05-COMPONENT-SYSTEM.md`
- imagery → `06-IMAGERY-ASSET-SYSTEM.md`
- icons → `07-ICONOGRAPHY.md`
- motion → `08-MOTION-ANIMATION.md`
- 3D podium → `09-3D-PODIUM.md`
- responsive → `10-RESPONSIVE-SYSTEM.md`
- accessibility → `11-ACCESSIBILITY.md`
- performance → `12-PERFORMANCE.md`

The implementation team must treat this document as the source of truth for how navigation feels across the PBF experience.
