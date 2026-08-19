# PAK DEBATE FORUM — DESIGN SYSTEM
# 12 — PERFORMANCE

Status: Performance architecture / implementation source of truth
Scope: loading, rendering, 3D, animation, images, fonts, network, caching, JavaScript, CSS, responsive performance, Cloudflare delivery, Core Web Vitals, degraded modes, budgets, QA, and AI implementation rules.

---

# 0. PURPOSE

PBF is intentionally cinematic.

The performance goal is NOT to remove the visual ambition.

The goal is:

```text
premium visual experience
+
fast initial understanding
+
smooth interaction
+
controlled resource usage
+
graceful degradation
```

The site must feel expensive without behaving like an expensive application.

---

# 1. PERFORMANCE PRINCIPLE

The visitor should see meaningful content quickly.

Do not make the visitor wait for:

- 3D;
- decorative particles;
- secondary images;
- non-critical fonts;
- below-the-fold animation;
- hover effects.

---

# 2. CORE PRIORITY ORDER

Performance decisions follow this hierarchy:

```text
1. content
2. navigation
3. primary CTA
4. primary imagery
5. core interaction
6. cinematic enhancement
7. decorative enhancement
```

If resources are limited, sacrifice items from the bottom first.

---

# 3. PERFORMANCE TIERS

The site should conceptually operate in multiple performance tiers.

## Tier A — Full Experience

Capable device.

Enable:

- 3D podium;
- cinematic lighting;
- controlled parallax;
- richer transitions;
- high-quality imagery.

## Tier B — Balanced

Normal mobile/tablet or mid-range hardware.

Enable:

- optimized 3D or static podium;
- reduced particle count;
- reduced parallax;
- compressed imagery;
- shorter transitions.

## Tier C — Lightweight

Low-power / constrained device.

Enable:

- static podium;
- minimal animation;
- low-resolution imagery where appropriate;
- reduced effects.

## Tier D — Fallback

Unsupported or failed rendering environment.

Enable:

- static composition;
- semantic content;
- normal navigation;
- no WebGL dependency.

---

# 4. PROGRESSIVE ENHANCEMENT

The baseline page must work without cinematic effects.

Architecture:

```text
semantic HTML
↓
CSS layout
↓
content
↓
images
↓
JavaScript interaction
↓
motion
↓
3D
↓
decorative enhancement
```

Never reverse this dependency.

---

# 5. CRITICAL RENDERING PATH

The first viewport should prioritize:

- page background;
- primary heading;
- supporting copy;
- primary CTA;
- essential brand identity;
- critical hero composition.

Do not block first paint on:

- analytics;
- social widgets;
- non-critical APIs;
- below-fold images;
- decorative 3D assets.

---

# 6. INITIAL LOAD PHILOSOPHY

The visitor should not see:

```text
blank black screen
```

while a large 3D scene downloads.

Prefer:

```text
static hero
↓
content visible
↓
enhancement loads
↓
3D replaces/augments static state
```

---

# 7. HERO PLACEHOLDER

The hero should have a deterministic initial visual state.

Possible sequence:

```text
black background
+
logo/text
+
static podium render
↓
3D enhancement
```

The static image should be visually intentional, not a loading placeholder.

---

# 8. 3D IS OPTIONAL

The podium must never be a hard dependency for the page.

If 3D cannot initialize:

```text
static podium
```

must take over.

---

# 9. WEBGL DETECTION

Detect capability before attempting expensive initialization.

Do not initialize a full 3D renderer on every device blindly.

---

# 10. WEBGL FAILURE

Possible causes:

- unsupported browser;
- disabled GPU;
- context failure;
- memory pressure;
- driver issues;
- device restrictions.

The fallback must be automatic.

---

# 11. WEBGL CONTEXT LOSS

Handle context loss where practical.

If recovery is unreliable:

switch to static rendering.

Do not repeatedly crash/reinitialize the renderer.

---

# 12. 3D INITIALIZATION TIMING

Do not initialize the podium before essential hero content becomes usable unless the 3D asset itself is the critical content.

Preferred:

```text
page usable
→
3D initialization
→
3D enhancement
```

---

# 13. 3D VISIBILITY

Do not render 3D scenes when they are far outside the viewport.

Use visibility-aware activation.

---

# 14. INTERSECTION OBSERVER

Use visibility detection for:

- below-fold 3D;
- heavy animations;
- large media;
- expensive interactive sections.

---

# 15. OFFSCREEN RENDERING

Stop or reduce expensive animation when the relevant element is not visible.

Do not continuously render an invisible WebGL scene.

---

# 16. TAB VISIBILITY

When the browser tab becomes hidden:

Reduce or pause expensive rendering.

This is especially important for:

- 3D;
- particles;
- requestAnimationFrame loops;
- video;
- timers.

---

# 17. FRAME RATE

Target smoothness rather than maximum frame rate.

Do not run expensive work simply to force a 120 FPS loop.

---

# 18. FRAME BUDGET

For 60 Hz:

```text
~16.7 ms
```

is the rough frame interval.

The application should avoid regularly consuming the entire frame budget.

---

# 19. MAIN THREAD

Keep expensive work away from the main thread where possible.

Avoid:

- large synchronous computations;
- huge DOM mutations;
- repeated layout reads/writes;
- expensive parsing during interaction.

---

# 20. LONG TASKS

Break up expensive initialization.

Do not execute a huge setup operation during the first user interaction.

---

# 21. JAVASCRIPT BUDGET

Do not ship large libraries merely because they make a small visual effect easier.

Every dependency must have a purpose.

---

# 22. DEPENDENCY RULE

Before adding a dependency, ask:

```text
Can native browser APIs do this?
Can existing project code do this?
Can a small utility do this?
Is the dependency worth its runtime cost?
```

---

# 23. CODE SPLITTING

Separate major features where practical:

```text
core shell
+
route code
+
3D
+
heavy media
+
admin functionality
```

Do not send admin functionality to public visitors.

---

# 24. ROUTE-LEVEL LOADING

Pages that do not need a feature should not download its implementation unnecessarily.

For example:

```text
Events page
```

should not automatically load every Academy-only visualization.

---

# 25. 3D CHUNK

Keep 3D-specific code separable where architecture allows.

This makes fallback and conditional loading easier.

---

# 26. ADMIN CODE

Admin dashboard code should be isolated from public-facing bundles whenever possible.

---

# 27. TREE SHAKING

Use build tooling effectively.

Remove unused code from production bundles.

---

# 28. MINIFICATION

Production assets should be minified appropriately.

---

# 29. SOURCE MAPS

Production source maps should be configured intentionally.

Do not accidentally expose unnecessary internal source material.

---

# 30. CSS PERFORMANCE

Prefer efficient selectors.

Avoid extremely complex selector chains.

---

# 31. CSS EFFECTS

Be careful with:

- giant blur regions;
- huge box shadows;
- multiple backdrop filters;
- expensive filters;
- large fixed overlays.

These can be visually beautiful and computationally expensive.

---

# 32. BACKDROP FILTER

Use sparingly.

Especially on mobile.

Do not apply backdrop blur to huge full-screen regions unless testing proves it is acceptable.

---

# 33. BLUR

Large animated blur can be expensive.

Prefer static blurred assets when possible.

---

# 34. SHADOWS

Use controlled shadows.

Avoid dozens of independently animated large shadows.

---

# 35. GRADIENTS

CSS gradients are generally preferable to shipping unnecessary image assets for simple atmospheric backgrounds.

---

# 36. PARTICLES

Particles are decorative.

They must never become the dominant performance cost.

---

# 37. PARTICLE BUDGET

Scale particle count by performance tier.

Conceptually:

```text
desktop high-end → richer
tablet → moderate
mobile → minimal
low-power → off
reduced-motion → off
```

---

# 38. PARTICLE SIMULATION

Do not use expensive physics when simple deterministic motion achieves the same visual result.

---

# 39. RANDOMNESS

Prefer deterministic or lightweight pseudo-random systems where possible.

Do not regenerate large particle datasets every frame.

---

# 40. SCROLL ANIMATION

Scroll animation must not execute expensive calculations for every scroll event.

Prefer optimized animation techniques and visibility-aware systems.

---

# 41. SCROLL EVENTS

Avoid uncontrolled high-frequency JavaScript scroll handlers.

Use appropriate browser APIs and requestAnimationFrame scheduling where needed.

---

# 42. CSS TRANSFORMS

For movement, prefer compositor-friendly properties such as:

```text
transform
opacity
```

when appropriate.

---

# 43. LAYOUT THRASHING

Avoid repeatedly alternating:

```text
read layout
write layout
read layout
write layout
```

within the same frame.

Batch work.

---

# 44. ANIMATION PROPERTIES

Do not animate layout-heavy properties unnecessarily:

```text
width
height
top
left
margin
padding
```

Prefer transform/opacity when visually equivalent.

---

# 45. WILL-CHANGE

Do not blindly apply:

```text
will-change: transform
```

to everything.

Use it selectively.

---

# 46. FIXED ELEMENTS

Use fixed/sticky elements carefully.

Large animated fixed layers can increase compositing cost.

---

# 47. PARALLAX

Parallax should be subtle.

Avoid moving huge background layers at different rates on low-powered devices.

---

# 48. MOBILE PARALLAX

Reduce or disable parallax on mobile when it harms smoothness.

---

# 49. REDUCED MOTION

When:

```text
prefers-reduced-motion: reduce
```

is active:

- disable decorative 3D motion;
- reduce scroll-linked movement;
- simplify transitions;
- reduce particles;
- stop unnecessary loops.

---

# 50. ACCESSIBILITY PRIORITY

Performance optimization must not violate accessibility.

Reduced motion is both an accessibility and performance optimization.

---

# 51. IMAGES

Images are one of the largest performance risks.

Every image must have an intentional delivery strategy.

---

# 52. IMAGE FORMAT

Use modern formats where browser support and tooling allow:

- AVIF;
- WebP.

Retain suitable fallback strategy where needed.

---

# 53. IMAGE DIMENSIONS

Do not serve a 3000px-wide image into a 300px-wide mobile component unless genuinely necessary.

---

# 54. RESPONSIVE IMAGES

Use responsive image techniques where appropriate.

Conceptually:

```text
small viewport → smaller source
large viewport → larger source
```

---

# 55. SRCSET

Use `srcset`/`sizes` or framework-equivalent mechanisms for responsive raster imagery.

---

# 56. HERO IMAGE

The hero's primary image deserves careful optimization because it affects perceived loading speed.

---

# 57. HERO PRELOAD

Preload only the actual critical hero asset when evidence supports it.

Do not preload every possible responsive variant.

---

# 58. ABOVE-FOLD IMAGES

Critical above-fold imagery should be prioritized appropriately.

---

# 59. BELOW-FOLD IMAGES

Lazy-load images that are not needed immediately.

---

# 60. LAZY LOADING

Do not lazy-load the primary visual content so aggressively that the user sees a blank area.

---

# 61. IMAGE PLACEHOLDERS

Use intentional placeholders:

- dark gradient;
- low-quality preview;
- dominant-color field;
- static composition.

Avoid ugly layout jumps.

---

# 62. ASPECT RATIO

Reserve image dimensions before loading.

This prevents layout shift.

---

# 63. CUMULATIVE LAYOUT SHIFT

Every major media slot should have predictable dimensions.

Do not allow images to push content around after loading.

---

# 64. ART DIRECTION

Desktop and mobile may require different crops.

Do not force one crop everywhere.

---

# 65. IMAGE CROPPING

Use `object-fit`/art-directed assets carefully.

Do not crop faces, logos, or important visual subjects accidentally.

---

# 66. IMAGE COMPRESSION

Compression should preserve the cinematic quality.

Do not over-compress the main brand imagery.

---

# 67. IMAGE QUALITY TIERS

Possible:

```text
high
balanced
light
```

Choose based on device/network context where justified.

---

# 68. IMAGE CACHING

Static assets should have strong cache policies when safely versioned.

---

# 69. FONTS

Fonts can significantly affect first rendering.

Use a small, intentional font system.

---

# 70. FONT COUNT

Do not load many font families.

The PBF design system should remain typographically disciplined.

---

# 71. FONT WEIGHTS

Only load weights actually used.

Do not download the full family unnecessarily.

---

# 72. FONT SUBSETTING

Where possible, subset fonts to required character ranges.

---

# 73. FONT DISPLAY

Avoid invisible text while waiting indefinitely for a custom font.

---

# 74. FONT FALLBACK

Choose fallbacks that preserve:

- approximate width;
- readability;
- hierarchy.

---

# 75. FONT SWAP

Prevent major layout shifts caused by font replacement.

---

# 76. ICON FONTS

Do not introduce an icon font merely for convenience if SVG icons are more efficient and controllable.

---

# 77. SVG

SVG is preferred for:

- logos;
- simple icons;
- vectors;
- decorative linework.

Optimize SVG files.

---

# 78. SVG COMPLEXITY

Do not ship extremely complex SVG filters for simple decorative elements.

---

# 79. LOGO

The PBF logo should be delivered efficiently and remain crisp across DPR levels.

---

# 80. VIDEO

Video is expensive.

Use only when it materially improves the experience.

---

# 81. DECORATIVE VIDEO

If used as a hero background:

- muted;
- optimized;
- short loop;
- compressed;
- poster image available;
- disabled/reduced on constrained devices.

---

# 82. VIDEO MOBILE

Do not assume mobile can handle desktop-quality video.

Provide a static alternative.

---

# 83. AUDIO

Do not load audio unless needed.

---

# 84. THIRD-PARTY SCRIPTS

Third-party scripts can become hidden performance costs.

Audit every:

- analytics script;
- widget;
- social embed;
- tracking script;
- external library.

---

# 85. THIRD-PARTY PRINCIPLE

If a script does not provide meaningful value, remove it.

---

# 86. ANALYTICS

Load analytics in a way that does not block the critical rendering path.

---

# 87. EMBEDS

Avoid embedding heavy external widgets when a lightweight link/component provides equivalent value.

---

# 88. NETWORK REQUESTS

Minimize unnecessary requests.

Combine small related assets where appropriate, while respecting modern HTTP delivery.

---

# 89. REQUEST PRIORITY

The browser should receive:

```text
critical content
↓
critical style
↓
critical image
↓
interactive code
↓
enhancement
↓
non-critical content
```

---

# 90. PRECONNECT

Use preconnect only for genuinely critical third-party origins.

Do not add preconnect hints for every external domain.

---

# 91. DNS

Reduce dependency on unnecessary external domains.

---

# 92. CLOUD DELIVERY

Public static assets should be delivered through an efficient edge/CDN strategy.

PBF infrastructure already uses Cloudflare-oriented architecture.

---

# 93. CACHE STRATEGY

Versioned immutable assets can receive long-lived caching.

HTML/app shell caching must be designed separately because content may change.

---

# 94. CACHE BUSTING

Use hashed/versioned asset names where build tooling supports it.

---

# 95. SERVICE WORKER

Do not add a service worker merely because it sounds fast.

If used, it must have a clear caching strategy and failure behavior.

---

# 96. STALE CONTENT

Caching must not accidentally display obsolete critical information indefinitely.

---

# 97. API PERFORMANCE

Public API calls should be:

- minimized;
- batched where useful;
- cached where appropriate;
- resilient to failure.

---

# 98. DATA FETCHING

Do not fetch data that the user cannot see or use.

---

# 99. ABOVE-FOLD DATA

Fetch critical hero/content data first.

---

# 100. BELOW-FOLD DATA

Defer non-critical data where possible.

---

# 101. ADMIN DATA

Never fetch admin-only datasets on public pages.

---

# 102. JSON PAYLOADS

Keep payloads focused.

Do not send huge objects when the page needs five fields.

---

# 103. API RESPONSE SHAPE

Prefer predictable, compact response structures.

---

# 104. DATABASE

Queries should retrieve only required fields and records.

Avoid loading an entire dataset to render a small list.

---

# 105. PAGINATION

Use pagination/infinite loading when datasets can become large.

Do not render hundreds of event/resource cards simultaneously if unnecessary.

---

# 106. SEARCH

Search should be efficient and should not trigger a full request on every keystroke without debounce/throttling.

---

# 107. FILTERING

Prefer local filtering for small datasets.

Use server-side filtering for genuinely large datasets.

---

# 108. DEBOUNCE

User-driven search/filter requests should be appropriately debounced where needed.

---

# 109. PREFETCHING

Prefetch only when confidence is high that the user will navigate there.

Do not prefetch the entire site.

---

# 110. ROUTE PREFETCH

A likely next route may be prefetched after the current page becomes idle.

---

# 111. IDLE WORK

Use idle time for:

- non-critical module preparation;
- secondary image loading;
- analytics;
- enhancement initialization.

Do not use idle time for tasks that can still block interaction.

---

# 112. INTERACTION PRIORITY

After the user interacts:

Prioritize responsiveness over decorative work.

---

# 113. INPUT DELAY

A button click should not wait behind a giant visual initialization job.

---

# 114. 3D + INPUT

If 3D is active:

Do not allow the render loop to monopolize the main thread.

---

# 115. POINTER EFFECTS

Mouse-follow effects should be inexpensive.

Avoid creating hundreds of DOM updates per pointer movement.

---

# 116. POINTER THROTTLING

Use efficient scheduling.

Do not perform expensive layout calculations for every raw pointer event.

---

# 117. DEVICE PIXEL RATIO

Do not blindly render WebGL at full device pixel ratio on every phone.

High-DPR mobile screens can dramatically increase rendering cost.

---

# 118. 3D RENDER SCALE

Use a capped effective pixel ratio.

Conceptually:

```text
effective DPR = min(device DPR, configured cap)
```

---

# 119. 3D SHADOWS

Real-time shadows are expensive.

Use them selectively.

---

# 120. 3D LIGHTING

Prefer a small number of purposeful lights.

The hero should not contain dozens of dynamic lights.

---

# 121. 3D MATERIALS

Use efficient materials.

Avoid unnecessary physically expensive shader features.

---

# 122. TEXTURES

Keep 3D textures appropriately sized.

Do not use 4K textures for tiny objects.

---

# 123. TEXTURE COMPRESSION

Use GPU-friendly compressed textures where the chosen 3D pipeline supports them.

---

# 124. GLB / GLTF

The podium asset should be optimized before production deployment.

---

# 125. PODIUM POLYGON BUDGET

The podium should look premium through:

- silhouette;
- bevels;
- lighting;
- materials.

Do not rely on excessive polygon count.

---

# 126. PODIUM DETAIL

Small wood grain details can often be represented through textures/materials rather than geometry.

---

# 127. GOLD PLAQUE

The plaque should not use unnecessary geometry for tiny details.

---

# 128. LOGO IN 3D

Where practical, use optimized texture/vector-derived treatment rather than excessive geometry.

---

# 129. 3D ANIMATION

Prefer animating:

- camera;
- transforms;
- a small number of parameters.

Avoid complex per-object animation unless it materially improves the design.

---

# 130. 3D SCENE GRAPH

Keep scene hierarchy clean.

Remove hidden/unnecessary objects.

---

# 131. FRUSTUM CULLING

Use renderer-supported culling appropriately.

---

# 132. INSTANCING

If many identical decorative objects exist:

Consider instancing rather than individual heavy meshes.

---

# 133. PARTICLE 3D

Keep particle systems minimal.

A few high-quality particles are preferable to thousands.

---

# 134. 3D AUDIO

Avoid adding spatial audio merely for atmosphere.

It increases complexity and creates accessibility concerns.

---

# 135. MOBILE 3D

Mobile should use:

- lower resolution;
- fewer effects;
- fewer lights;
- reduced particles;
- shorter or static motion.

---

# 136. MOBILE PODIUM

If the podium is too large for the viewport:

Do not simply scale the desktop scene down.

Reframe the camera.

---

# 137. MOBILE HERO

The hero must remain compositionally intentional.

The mobile version should feel designed, not cropped.

---

# 138. DESKTOP HERO

Desktop can emphasize:

- podium silhouette;
- negative space;
- cinematic light;
- large typography.

---

# 139. MOBILE HERO

Mobile should emphasize:

- readable title;
- brand;
- CTA;
- recognizable podium;
- controlled vertical composition.

---

# 140. LAYOUT SHIFT

Reserve space for:

- images;
- fonts where possible;
- dynamic components;
- navigation state.

---

# 141. STICKY HEADER

Header dimensions should remain predictable.

Do not resize dramatically after loading.

---

# 142. COOKIE / CONSENT UI

If present, it must not cause severe layout movement.

Prefer overlays or reserved UI areas where appropriate.

---

# 143. LOADING INDICATORS

Do not use giant blocking loaders for normal page navigation.

---

# 144. SKELETON POLICY

Skeletons are justified when content shape is known and waiting is meaningful.

Otherwise prefer immediate static structure.

---

# 145. ERROR RECOVERY

Performance failure should be recoverable.

Examples:

```text
3D fails → static podium
image fails → fallback
API fails → graceful state
animation fails → static state
```

---

# 146. TIMEOUTS

Do not wait forever for optional enhancements.

Set practical time boundaries for enhancement initialization.

---

# 147. ABORT CONTROLLERS

Cancelable network work should be canceled when no longer relevant where practical.

---

# 148. ROUTE CHANGE

If a user navigates away while an expensive request is loading:

Cancel or ignore obsolete work.

---

# 149. MEMORY

Avoid retaining:

- unused images;
- detached DOM;
- old WebGL scenes;
- obsolete event listeners;
- stale route data.

---

# 150. EVENT LISTENERS

Clean up listeners associated with components/routes when they are destroyed.

---

# 151. WEBGL CLEANUP

When disposing a 3D scene:

Release resources appropriately.

Do not keep hidden renderers alive indefinitely.

---

# 152. IMAGE MEMORY

Do not keep giant full-resolution images in memory when smaller versions are sufficient.

---

# 153. CACHE VS MEMORY

Browser cache and runtime memory are different concerns.

Do not assume cached assets are free.

---

# 154. DOM SIZE

Avoid unnecessarily huge DOM trees.

---

# 155. COMPONENT REPETITION

A page with 100 cards should not create excessive nested DOM purely for decoration.

---

# 156. DECORATIVE DOM

Prefer CSS pseudo-elements or lightweight structures for simple decorative effects.

---

# 157. BACKGROUND EFFECTS

If an effect can be one background layer instead of 20 DOM elements:

Prefer the simpler architecture.

---

# 158. GOLD PARTICLES

Use CSS or canvas strategically.

Do not create hundreds of individual animated HTML elements.

---

# 159. GRAIN

Film grain should preferably use:

- optimized image texture;
- CSS-compatible technique;
- lightweight static layer.

Do not generate expensive procedural grain every frame.

---

# 160. GLOW

Prefer static or low-cost glow effects.

---

# 161. SHIMMER

Do not apply shimmer animation to every loading component simultaneously.

---

# 162. CURSOR EFFECTS

Custom cursor effects are optional.

They should never interfere with:

- pointer accuracy;
- touch;
- keyboard;
- performance.

---

# 163. CUSTOM CURSOR MOBILE

Disable custom cursor behavior on touch devices.

---

# 164. HOVER TRANSITIONS

Keep them short and inexpensive.

Avoid huge blur/filter transitions.

---

# 165. PAGE TRANSITIONS

Transitions should not block navigation for several seconds.

---

# 166. TRANSITION BUDGET

The interface should communicate movement without delaying access to the destination.

---

# 167. NAVIGATION FEEDBACK

A clicked link should provide immediate feedback.

Do not make users wonder whether the click worked while a cinematic animation runs.

---

# 168. SCROLL RESTORATION

Preserve appropriate browser navigation behavior.

Do not randomly force scroll to top in situations where browser history expects restoration.

---

# 169. BACK BUTTON

Browser Back should feel natural.

Do not create navigation traps.

---

# 170. PERFORMANCE + SEO

Performance should support search discoverability.

Do not hide essential content behind client-only enhancement.

---

# 171. SSR / STATIC CONTENT

Where the architecture supports it, important public content should be available without waiting for expensive client-side effects.

---

# 172. CONTENT VISIBILITY

Use deferred rendering carefully.

Do not make important above-fold content invisible to crawlers or assistive technology unnecessarily.

---

# 173. SEO + IMAGES

Important imagery should have appropriate semantic context.

---

# 174. PERFORMANCE + ACCESSIBILITY

A performance optimization is invalid if it makes the experience inaccessible.

---

# 175. CORE WEB VITALS

Monitor at minimum:

```text
LCP
INP
CLS
```

Use them as practical indicators, not as the only definition of quality.

---

# 176. LCP

Primary focus:

- hero content;
- hero image;
- critical typography;
- server/network response;
- render-blocking resources.

---

# 177. INP

Primary focus:

- menu;
- buttons;
- filters;
- forms;
- route navigation;
- interactive 3D controls.

---

# 178. CLS

Primary focus:

- images;
- fonts;
- header;
- dynamic content;
- cards;
- embeds.

---

# 179. FIELD DATA

When production traffic exists, use real-user performance data where available.

Lab testing alone is insufficient.

---

# 180. LAB TESTING

Test using:

- mobile emulation;
- throttled CPU;
- throttled network;
- low-memory scenarios where available.

---

# 181. NETWORK PROFILES

At minimum test:

```text
fast broadband
normal mobile
slow mobile
offline/failure
```

---

# 182. CPU PROFILES

At minimum test:

```text
high-end desktop
mid-range laptop
mid-range mobile
low-end mobile
```

---

# 183. DEVICE TESTING

Do not rely entirely on desktop emulation.

Test on real phones.

---

# 184. REAL MOBILE TEST

The podium must be tested on actual mobile hardware.

---

# 185. LOW-END TEST

The site should remain navigable even when the cinematic layer is disabled.

---

# 186. MEMORY PRESSURE

Test route navigation repeatedly.

Watch for:

- increasing memory;
- repeated WebGL allocation;
- accumulating listeners;
- duplicate assets.

---

# 187. LONG SESSION TEST

Leave the site open and interact with it for an extended period.

The performance should not progressively degrade.

---

# 188. MULTI-ROUTE TEST

Navigate:

```text
Home
→ Academy
→ Events
→ Results
→ Resources
→ About
→ Home
```

Repeatedly.

---

# 189. CACHE TEST

Test:

```text
first visit
repeat visit
hard refresh
new deployment
```

---

# 190. COLD LOAD

Cold load should establish the baseline.

---

# 191. WARM LOAD

Warm load should become substantially faster where caching applies.

---

# 192. SLOW NETWORK

On slow networks:

Content should appear before optional effects.

---

# 193. OFFLINE / FAILURE

The site should provide understandable fallback behavior.

---

# 194. ASSET FAILURE

Intentionally fail:

- podium model;
- hero image;
- font;
- API.

Verify fallback.

---

# 195. JAVASCRIPT FAILURE

Disable JavaScript where practical during QA.

The resulting experience should still communicate the core content hierarchy.

---

# 196. WEBGL FAILURE TEST

Force the static podium fallback.

The design should remain intentional.

---

# 197. REDUCED MOTION TEST

Enable reduced motion.

Verify:

```text
no unnecessary motion
no broken spacing
no missing information
no stuck loading state
```

---

# 198. MOBILE ORIENTATION

Test:

- portrait;
- landscape.

---

# 199. DYNAMIC VIEWPORT

Test browsers with dynamic mobile address bars.

Do not assume:

```text
100vh
```

always means the visible viewport.

---

# 200. SAFE AREA

Respect device safe-area insets when necessary.

---

# 201. NOTCHES

Critical content must not sit behind notches or system UI.

---

# 202. LARGE SCREEN

Test ultra-wide displays.

Do not allow content to stretch endlessly.

---

# 203. CONTENT MAX WIDTH

Use intentional max-widths for readability.

---

# 204. ULTRA-WIDE PODIUM

The podium should remain compositionally relevant.

Do not let it become tiny because the viewport is enormous.

---

# 205. DPR

Test different device pixel ratios.

High DPR is not automatically better for rendering quality if it destroys performance.

---

# 206. IMAGE DPR

Responsive images should account for display density where useful.

---

# 207. GPU MEMORY

Large textures and render targets can consume substantial GPU memory.

Keep them proportional to actual display needs.

---

# 208. TEXTURE ATLAS

Where appropriate, consolidate small compatible textures rather than creating excessive texture objects.

---

# 209. MATERIAL COUNT

Minimize unnecessary unique materials in the 3D scene.

---

# 210. DRAW CALLS

Keep 3D draw calls under control.

The visual goal is a premium single podium, not a complex game scene.

---

# 211. SHADER COMPLEXITY

Prefer simple, purposeful shaders.

---

# 212. POST-PROCESSING

Post-processing is optional.

Use only effects that materially improve the visual result.

---

# 213. BLOOM

If bloom is used:

Keep intensity and resolution controlled.

Do not make bloom the primary visual effect.

---

# 214. DEPTH OF FIELD

If used, evaluate its performance and mobile fallback carefully.

---

# 215. AMBIENT OCCLUSION

Use only if the visual gain justifies the cost.

---

# 216. REAL-TIME REFLECTIONS

Avoid expensive real-time reflections for the standard podium experience.

Use controlled material/environment techniques instead.

---

# 217. ENVIRONMENT MAPS

Use optimized environment assets.

Do not load multiple giant HDRIs for one scene.

---

# 218. LIGHTMAPS

Static lighting can be preferable to expensive dynamic lighting where appropriate.

---

# 219. SHADOW MAPS

Keep shadow resolution controlled.

---

# 220. CAMERA

A simple camera animation can create cinematic movement without animating the entire object.

---

# 221. PODIUM PERFORMANCE PRIORITY

The podium should communicate premium quality primarily through:

```text
silhouette
+
material
+
gold plaque
+
lighting
+
camera
```

not raw polygon count.

---

# 222. IMAGE-BASED PODIUM FALLBACK

Maintain a high-quality static podium render matching the 3D camera composition.

---

# 223. FALLBACK MATCHING

The transition:

```text
static → 3D
```

must not visibly jump in scale or composition.

---

# 224. PRELOAD STRATEGY

Preload only genuinely critical assets.

Potential candidates:

- primary font;
- logo;
- hero static image.

3D model should be loaded strategically rather than automatically blocking content.

---

# 225. PREFETCH STRATEGY

Prefetch likely next resources only after current interaction is stable.

---

# 226. PRIORITY HINTS

Use resource priority mechanisms carefully.

Do not mark every asset as high priority.

---

# 227. CACHE HEADERS

Production static assets should be cache-friendly.

---

# 228. COMPRESSED DELIVERY

Serve compressible text assets through modern compression such as Brotli where infrastructure supports it.

---

# 229. HTML SIZE

Keep initial HTML reasonable.

Do not embed enormous data payloads into the document unnecessarily.

---

# 230. INLINE ASSETS

Inline only assets where the performance tradeoff makes sense.

Do not inline megabytes of imagery.

---

# 231. CRITICAL CSS

If critical CSS extraction is used, keep it intentional.

Do not create a huge inline stylesheet.

---

# 232. CSS DELIVERY

Avoid unnecessary render-blocking CSS.

---

# 233. JAVASCRIPT DELIVERY

Use appropriate module/defer strategies.

---

# 234. THIRD-PARTY FONT HOSTING

Minimize font-origin dependencies where architecture allows.

---

# 235. FONT PRELOAD

Only preload fonts that are definitely critical.

---

# 236. FONT MIME

Serve fonts with correct MIME types and cache behavior.

---

# 237. IMAGE CDN

If an image transformation/CDN layer is available, use it intelligently.

---

# 238. CROP AT DELIVERY

Do not download a giant original merely to crop it with CSS.

---

# 239. RESPONSIVE ART DIRECTION

Use separate mobile crops when visual composition genuinely requires them.

---

# 240. BACKGROUND IMAGE PERFORMANCE

CSS background images should be loaded intentionally.

Do not place massive desktop backgrounds on mobile when unnecessary.

---

# 241. CSS IMAGE MEDIA QUERIES

Where suitable, responsive CSS can prevent irrelevant background assets from loading.

---

# 242. SVG PERFORMANCE

Avoid huge SVG path counts for simple graphics.

---

# 243. SVG ANIMATION

Animate simple properties.

Avoid complex path recalculation for decorative effects.

---

# 244. LOTTIE / VECTOR ANIMATION

Do not introduce animation frameworks unless justified.

---

# 245. CANVAS

Canvas should be reserved for effects that genuinely benefit from it.

---

# 246. CANVAS ACCESSIBILITY

Canvas is not a substitute for semantic HTML.

---

# 247. CANVAS RESOLUTION

Cap canvas resolution on high-DPR devices.

---

# 248. CANVAS VISIBILITY

Pause when hidden/offscreen.

---

# 249. CSS CONTAINMENT

Use CSS containment where it provides measurable isolation benefits and does not break layout.

---

# 250. CONTENT VISIBILITY

Use content-visibility selectively for large below-fold sections where appropriate.

---

# 251. CONTENT-VISIBILITY TESTING

Do not apply it blindly to elements involved in measurement, anchor navigation, or critical SEO/content behavior.

---

# 252. DOM HYDRATION

If a framework with hydration is used:

Avoid hydrating components that do not require client-side behavior.

---

# 253. SERVER VS CLIENT

Prefer server/static rendering for content that does not need interactivity.

---

# 254. CLIENT INTERACTIVITY

Hydrate only where interaction requires it.

---

# 255. STATE

Keep global client state minimal.

---

# 256. RE-RENDERING

Avoid unnecessary whole-page rerenders for small state changes.

---

# 257. COMPONENT ISOLATION

Interactive components should update only the necessary region.

---

# 258. MEMOIZATION

Use memoization where profiling demonstrates benefit.

Do not memoize everything by default.

---

# 259. PROFILING

Optimize based on evidence.

Do not assume an effect is expensive without measurement.

---

# 260. BROWSER DEVTOOLS

Use browser performance tools to identify:

- long tasks;
- layout;
- paint;
- scripting;
- GPU issues;
- network bottlenecks.

---

# 261. PERFORMANCE MARKS

For important milestones, instrumentation may track:

```text
app start
hero ready
content ready
3D ready
interactive
```

---

# 262. OBSERVABILITY

Production performance should be observable without collecting unnecessary personal data.

---

# 263. ERROR MONITORING

Track technical failures such as:

- WebGL initialization failure;
- asset loading failure;
- API failure.

Avoid exposing technical details to users.

---

# 264. PERFORMANCE BUDGETS

Use explicit budgets.

The exact numeric budgets may evolve after measurement, but the principle is mandatory:

```text
bundle budget
image budget
3D asset budget
request budget
DOM budget
animation budget
```

---

# 265. BUNDLE BUDGET

No dependency should silently increase the public bundle without review.

---

# 266. IMAGE BUDGET

Every major image should have a target delivered size.

---

# 267. 3D BUDGET

The podium scene should have explicit limits for:

- model size;
- texture size;
- draw calls;
- shader complexity;
- render resolution.

---

# 268. ANIMATION BUDGET

Not every component receives animation.

Animation must have hierarchy.

---

# 269. MOTION HIERARCHY

Priority:

```text
hero transition
>
major section reveal
>
primary CTA
>
important interaction
>
micro-interaction
>
decorative motion
```

---

# 270. DECORATIVE MOTION LIMIT

If the page already contains major hero motion:

Do not animate every card simultaneously.

---

# 271. PERFORMANCE DEGRADATION

When performance is poor, reduce in this order:

```text
1. particles
2. cursor effects
3. secondary parallax
4. heavy post-processing
5. real-time shadows
6. 3D resolution
7. 3D animation
8. 3D itself
```

Do NOT sacrifice:

```text
navigation
content
CTA
readability
core interaction
```

---

# 272. MOBILE DEGRADATION

Mobile defaults should already be conservative.

---

# 273. BATTERY

Avoid continuous expensive loops when the user is not looking at them.

---

# 274. THERMAL THROTTLING

Long-running GPU effects can cause thermal throttling.

Shorter, lighter animation is preferable to a high-quality effect that becomes slower over time.

---

# 275. LOW POWER MODE

If the platform exposes useful signals, treat low-power contexts conservatively.

Do not rely on one browser-specific signal for correctness.

---

# 276. DATA SAVER

Where appropriate, reduce:

- video;
- large imagery;
- optional 3D;
- prefetching.

---

# 277. USER PREFERENCE

Performance enhancement should never override explicit accessibility preferences.

---

# 278. NO SURPRISES

Do not suddenly activate a large video or 3D scene after the user begins interacting unless expected.

---

# 279. VISUAL CONSISTENCY

Performance fallback must remain within the same visual language.

Fallback should still use:

- black;
- gold;
- deep shadows;
- premium typography;
- same podium silhouette.

---

# 280. STATIC PODIUM

Maintain a production-quality static podium asset.

It is not a second-rate fallback.

---

# 281. MOBILE STATIC PODIUM

Maintain a mobile-appropriate static composition if necessary.

---

# 282. PERFORMANCE + BRAND

A fast black screen is not enough.

The first meaningful render should feel like PBF.

---

# 283. PERCEIVED PERFORMANCE

Optimize what users perceive first:

```text
logo
headline
CTA
hero composition
```

---

# 284. SKELETON VS REAL CONTENT

Prefer real lightweight content over elaborate skeletons.

---

# 285. FIRST INTERACTION

The user should be able to interact as soon as practical.

---

# 286. HYDRATION DELAY

Do not block basic navigation on non-critical hydration.

---

# 287. ROUTE TRANSITIONS

Do not delay route change merely to finish decorative exit animation.

---

# 288. ANIMATION CANCELLATION

When a user navigates away:

Cancel obsolete animation.

---

# 289. SCROLL ANIMATION CANCELLATION

If the target section is no longer visible, stop unnecessary work.

---

# 290. EVENT CLEANUP

Animation observers and listeners must be cleaned up.

---

# 291. RESIZE

Do not perform expensive full-scene recalculation on every resize event.

Use efficient scheduling.

---

# 292. ORIENTATION CHANGE

3D and layout should update without reconstructing everything unnecessarily.

---

# 293. RESIZE DEBOUNCE

Use appropriate scheduling for expensive resize operations.

---

# 294. MOBILE BROWSER RESIZE

Dynamic browser chrome can trigger viewport changes.

Do not recreate the entire scene on every tiny viewport fluctuation.

---

# 295. FONT LOADING

Do not trigger large layout recalculation cascades when fonts load.

---

# 296. IMAGE DECODE

Where supported, coordinate image decoding/loading with visual priority.

---

# 297. NETWORK CANCELLATION

Cancel obsolete image/API work where useful.

---

# 298. ERROR RETRIES

Do not retry failed heavy resources endlessly.

---

# 299. RETRY UI

If an important request fails:

Provide a clear retry mechanism where useful.

---

# 300. PERFORMANCE SECURITY

Do not load arbitrary external resources merely for performance convenience.

---

# 301. THIRD-PARTY TRUST

Every external asset/service should have a reason and ownership/security review.

---

# 302. FONT LICENSE

Ensure production fonts are legally usable and distributable.

---

# 303. IMAGE LICENSE

Ensure imagery is legally usable.

---

# 304. 3D ASSET LICENSE

Ensure the podium and environmental assets are owned/licensed appropriately.

---

# 305. BUILD OUTPUT

Production builds should contain only necessary public assets.

---

# 306. DEAD ASSETS

Remove abandoned:

- images;
- models;
- fonts;
- scripts;
- styles.

---

# 307. FILE NAMING

Use predictable asset naming.

Avoid dozens of ambiguous copies such as:

```text
final.png
final2.png
final-final.png
```

---

# 308. ASSET MANIFEST

Maintain a clear mapping of major visual assets to their purpose.

---

# 309. IMAGE VARIANTS

Track:

```text
desktop
tablet
mobile
thumbnail
retina/high-DPR
```

only when actually needed.

---

# 310. 3D VARIANTS

If multiple 3D quality levels are created:

Track them explicitly.

---

# 311. PERFORMANCE DOCUMENTATION

Any new heavy asset should document:

- why it exists;
- approximate size;
- loading strategy;
- fallback;
- mobile behavior.

---

# 312. AI CODING RULE

The coding AI must not add a visually impressive feature without considering:

```text
desktop
mobile
reduced motion
low-power
WebGL failure
network failure
```

---

# 313. AI PROHIBITED SHORTCUT

Do not solve visual problems by:

```text
adding another library
```

without evaluating the existing architecture.

---

# 314. AI PROHIBITED SHORTCUT

Do not solve performance problems by:

```text
removing the entire visual identity
```

before attempting targeted degradation.

---

# 315. AI IMPLEMENTATION ORDER

For a new visual feature:

```text
1. semantic structure
2. static visual
3. responsive layout
4. interaction
5. animation
6. enhancement
7. performance optimization
8. fallback
9. accessibility verification
```

---

# 316. FEATURE ACCEPTANCE

A feature is not complete until:

```text
desktop works
mobile works
keyboard works
reduced motion works
fallback works
performance is acceptable
```

---

# 317. PERFORMANCE QA CHECKLIST

Before release:

```text
[ ] LCP checked
[ ] INP checked
[ ] CLS checked
[ ] mobile tested
[ ] desktop tested
[ ] low-end tested
[ ] slow network tested
[ ] WebGL fallback tested
[ ] reduced motion tested
[ ] image failure tested
[ ] API failure tested
[ ] cache tested
[ ] route transitions tested
[ ] long session tested
```

---

# 318. HERO QA

```text
[ ] static hero appears quickly
[ ] 3D does not block content
[ ] podium is recognizable
[ ] mobile composition works
[ ] fallback matches visual identity
[ ] CTA remains immediately usable
```

---

# 319. PODIUM QA

```text
[ ] model optimized
[ ] textures optimized
[ ] DPR capped
[ ] scene visibility-aware
[ ] tab visibility handled
[ ] mobile reduced
[ ] reduced motion static
[ ] WebGL failure fallback
[ ] context loss considered
```

---

# 320. IMAGE QA

```text
[ ] dimensions reserved
[ ] responsive sources
[ ] modern format
[ ] compression
[ ] lazy loading
[ ] critical image priority
[ ] fallback
```

---

# 321. FONT QA

```text
[ ] minimal families
[ ] only required weights
[ ] fallback works
[ ] no invisible text
[ ] no major layout shift
```

---

# 322. ANIMATION QA

```text
[ ] transform/opacity preferred
[ ] no excessive layout animation
[ ] reduced motion
[ ] offscreen pause
[ ] tab visibility pause
[ ] mobile reduction
```

---

# 323. NETWORK QA

```text
[ ] first load
[ ] repeat load
[ ] slow network
[ ] offline/failure
[ ] third-party blocked
```

---

# 324. BUNDLE QA

```text
[ ] public bundle reviewed
[ ] unused dependencies removed
[ ] admin code isolated
[ ] 3D code appropriately split
[ ] route code split where useful
```

---

# 325. PRODUCTION MONITORING

After launch, monitor real behavior.

Performance is not finished when the deployment succeeds.

---

# 326. REGRESSION POLICY

Any major visual change requires performance regression testing.

Especially:

- hero changes;
- 3D changes;
- new animation system;
- new imagery;
- new fonts;
- new third-party integrations.

---

# 327. PERFORMANCE REVIEW QUESTIONS

Before merging a major feature:

1. What resources does it add?
2. Does it block first render?
3. Does it run continuously?
4. Does it affect mobile?
5. Does it affect reduced motion?
6. Does it have a fallback?
7. Can it be lazy-loaded?
8. Can it be simplified?
9. What does profiling show?
10. Is the visual gain worth the cost?

---

# 328. THE PBF PERFORMANCE PHILOSOPHY

PBF should feel:

```text
cinematic
not sluggish

detailed
not bloated

animated
not chaotic

3D
not game-heavy

premium
not wasteful
```

---

# 329. FINAL STANDARD

The visitor should never have to know that the website contains:

- WebGL;
- optimized GLB assets;
- responsive image pipelines;
- code splitting;
- Cloudflare caching;
- performance tiers;
- fallback systems.

They should simply experience:

```text
PBF
fast
smooth
premium
confident
```

---

# 330. HANDOFF

This document defines performance behavior.

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
- page transitions → `13-PAGE-TRANSITIONS.md`

Any implementation that materially increases resource usage should be reviewed against this document before being considered production-ready.
