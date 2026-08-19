# PAK DEBATE FORUM — DESIGN SYSTEM
# 09 — 3D PODIUM

Status: Design specification / implementation source of truth
Scope: The PBF hero podium as a live web object, including asset strategy, geometry, materials, camera, lighting, branding, interaction, animation, scroll choreography, responsive behavior, fallback strategy, loading, performance, accessibility, and engineering architecture.

---

# 0. PURPOSE

The podium is the signature visual object of the PBF website.

It is not simply an image placed in the hero.

It should function as a **live visual anchor** that makes the website feel like a physical stage.

The intended emotional sequence is:

```text
darkness
→
presence
→
stage
→
podium
→
identity
→
invitation to speak
```

The object should communicate:

- debate;
- public speaking;
- confidence;
- institutional credibility;
- premium craftsmanship;
- stage presence;
- modernity.

---

# 1. PRIMARY DESIGN DIRECTION

The podium must be:

- predominantly black;
- sculptural;
- elegant;
- slightly futuristic;
- less boxy than a conventional lectern;
- vertically dominant;
- physically believable;
- minimal;
- premium;
- recognizable at a glance.

The object should look like a designed architectural product rather than office furniture.

---

# 2. PODIUM REFERENCE RULE

The approved visual references establish:

- overall darkness;
- black podium direction;
- gold plaque/branding treatment;
- centralized branding;
- dramatic stage lighting;
- premium cinematic atmosphere.

They do NOT establish a requirement to copy:

- background;
- composition;
- camera;
- environment;
- decorative objects;
- exact geometry;
- unrelated textures.

The final PBF podium must remain its own design.

---

# 3. SILHOUETTE

The silhouette is more important than surface detail.

Target qualities:

```text
wide enough to feel stable
narrow enough to feel elegant
slightly tapered
softened/chamfered edges
subtle futuristic contour
strong vertical centerline
```

Avoid a simple rectangular box.

Avoid exaggerated sci-fi shapes.

---

# 4. GENERAL FORM

Conceptually:

```text
             top
        ┌────────────┐
       /              \
      /                \
     |                  |
     |                  |
     |      BRAND       |
     |                  |
      \                /
       \______________/
```

The actual model may use a more sophisticated taper and curved/chamfered profile.

The key requirement is that the front silhouette remains unmistakably podium-like.

---

# 5. PROPORTION

The object should be tall.

Recommended conceptual ratio:

```text
height : width ≈ 2.0–2.8 : 1
```

Exact dimensions may change based on camera framing.

Do not force the object into a mathematically rigid ratio if the rendered silhouette looks unnatural.

---

# 6. TOP SURFACE

The top should feel:

- thin;
- precise;
- slightly overhanging;
- usable as a speaking surface.

It should not look like a giant flat slab.

A subtle bevel/chamfer may catch the gold light.

---

# 7. FRONT FACE

The front face is the primary branding surface.

It should remain:

- mostly black;
- clean;
- uncluttered;
- large enough for the logo;
- visible under controlled lighting.

Do not fill the front with decorative lines.

---

# 8. SIDE PROFILE

The sides may taper inward slightly.

The side profile should create a refined silhouette when seen from a small angle.

This matters because the object will rotate subtly with pointer movement and/or camera movement.

---

# 9. BASE

The base must feel stable.

Possible treatment:

- slightly wider lower footprint;
- subtle recessed shadow;
- small bevel;
- dark contact surface.

Avoid a giant platform.

---

# 10. EDGE DESIGN

Edges should have small controlled bevels.

Purpose:

- catch light;
- prevent the model from looking artificially sharp;
- reveal form against black.

The bevel should not become visibly rounded furniture edging.

---

# 11. MATERIAL

Primary material:

```text
near-black painted wood / premium matte composite
```

The reference direction favors black rather than glossy piano black.

Recommended appearance:

- matte;
- extremely subtle roughness variation;
- soft specular response;
- almost invisible grain.

---

# 12. WOOD GRAIN

Wood grain must be:

**subtle enough that the user notices the form before the texture.**

Avoid:

- large visible wood patterns;
- rustic furniture texture;
- high-frequency procedural noise.

If the material is generated procedurally, grain should remain low contrast.

---

# 13. MATERIAL ROUGHNESS

Use moderate/high roughness.

The exact physical value depends on the renderer.

The visual target:

```text
light reveals shape
but does not create a mirror reflection
```

---

# 14. BLACK VALUE

The podium must not become a completely featureless black silhouette.

There must be enough controlled light to reveal:

- top;
- edges;
- front plane;
- side plane;
- base.

However, the object must remain visually dark.

---

# 15. GOLD BRANDING

Branding should be gold.

Gold should feel:

- metallic;
- refined;
- restrained;
- engraved or mounted;
- physically attached to the podium.

Avoid flat yellow text.

---

# 16. LOGO PLACEMENT

The PBF logo should be centralized near the upper portion of the front face.

Then:

```text
logo
↓
small visual gap
↓
Pak Debate Forum Academy
```

The logo should be visibly larger than the text.

---

# 17. BRANDING HIERARCHY

The hierarchy is:

```text
PBF logo
        ↓
Pak Debate Forum Academy
        ↓
podium surface
```

Do not place additional slogans on the podium.

---

# 18. TEXT LEGIBILITY

The branding must remain readable in the hero.

The text must not be so small that it becomes decorative noise.

At desktop hero scale:

- logo should be clearly recognizable;
- Academy text should be legible at normal viewing distance;
- branding should remain subordinate to the overall hero headline if a separate headline exists.

---

# 19. BRANDING IMPLEMENTATION

Preferred if technically feasible:

Use the official logo as a high-quality texture/decal or vector-derived asset.

Do not ask the 3D renderer to approximate the logo from memory.

The exact supplied logo asset must be treated as authoritative.

---

# 20. BRANDING TEXT

If the actual text is rendered into the 3D asset:

Use the approved brand typography defined by the typography system.

Do not substitute random system fonts.

If text remains HTML overlay rather than texture:

The 3D object should not duplicate it.

There must be one clear branding hierarchy.

---

# 21. LOGO LIGHTING

The logo may have:

- subtle metallic response;
- tiny warm highlight;
- very restrained emission.

Do not make it look neon.

The brand should look like engraved/mounted metal, not holographic signage.

---

# 22. GOLD PLAQUE

A plaque may be used if it improves legibility.

Preferred:

- thin;
- architectural;
- integrated;
- not oversized;
- no ornamental border.

The plaque should feel like part of the podium.

---

# 23. PLAQUE DEPTH

The plaque should have enough physical depth to catch light.

Avoid a completely flat floating rectangle.

A shallow inset, extrusion, or mounted plate is acceptable.

---

# 24. PLAQUE COLOR

Target:

```text
dark warm metallic gold
```

not:

```text
bright saturated yellow
```

Gold should work against black through controlled contrast.

---

# 25. CAMERA

The camera should make the podium feel tall and important.

Default camera:

- slightly above the center of the object;
- mild perspective;
- not extreme wide-angle;
- enough depth to reveal sides.

---

# 26. CAMERA LENS

Avoid extreme perspective distortion.

A moderate field of view is preferred.

The podium should not look:

- stretched;
- toy-like;
- miniature;
- excessively wide at the top.

---

# 27. HERO CAMERA COMPOSITION

Desktop:

The podium may occupy approximately:

```text
35–60%
```

of hero visual height depending on surrounding layout.

The actual percentage should be determined by the page composition.

The object must never hide important hero text.

---

# 28. DESKTOP POSITION

The podium should generally occupy one side of the hero or sit as a strong central/lower focal object depending on the approved homepage composition.

Do not automatically center it just because it is the main object.

Composition is determined by the homepage design.

---

# 29. MOBILE POSITION

Mobile is fundamentally different.

Do NOT shrink the desktop podium proportionally until it becomes a tiny object.

Instead:

- crop intelligently;
- reposition;
- reduce camera distance;
- potentially simplify geometry;
- preserve the silhouette;
- preserve branding readability.

---

# 30. MOBILE PODIUM STRATEGY

Preferred mobile approach:

```text
hero headline
+
podium as dominant visual
+
CTA
```

or:

```text
podium visual
↓
headline
↓
CTA
```

depending on the approved mobile hero composition.

The final choice belongs to the page layout document.

---

# 31. MOBILE PODIUM SCALE

The podium may occupy a larger percentage of the visual viewport than desktop.

This is intentional.

The mobile composition should prioritize:

```text
recognition
+
branding
+
hero mood
```

over showing the entire object at once.

---

# 32. TABLET PODIUM

Tablet should use an intermediate configuration.

Possible:

- reduced 3D interaction;
- smaller camera movement;
- less pointer response;
- moderate object scale.

---

# 33. LIGHTING SYSTEM

The default scene should use a restrained cinematic lighting setup.

Conceptually:

```text
Key:
warm/gold overhead spotlight

Fill:
very weak cool/neutral ambient

Rim:
subtle edge separation

Environment:
near-black
```

The podium must remain mostly black.

---

# 34. KEY LIGHT

The key light is the hero light.

It should reveal:

- top;
- front upper edge;
- logo;
- subtle side contour.

The spotlight should feel physically motivated.

---

# 35. KEY LIGHT MOVEMENT

The key light may drift extremely subtly during idle motion.

Avoid obvious sweeping spotlights.

The user should not see a theatrical light show.

---

# 36. RIM LIGHT

A faint rim can separate the podium from a black background.

The rim should be:

- narrow;
- subtle;
- controlled.

Do not outline the entire podium with bright gold.

---

# 37. SHADOW

The podium should cast a deep shadow.

The shadow helps communicate:

- physical contact;
- scale;
- stage presence.

Avoid a completely detached floating-object look.

---

# 38. FLOOR / CONTACT

The podium may sit on:

- a dark stage floor;
- a near-black plane;
- an extremely subtle gradient surface.

The floor should not become visually dominant.

---

# 39. BACKGROUND

Default:

```text
pitch/near-black
```

with subtle atmospheric variation.

Possible:

- black gradient;
- faint vignette;
- barely visible warm light haze.

Avoid visible studio walls unless specifically designed.

---

# 40. ENVIRONMENT

The default scene should feel like a dark stage, not a room.

No:

- furniture;
- audience;
- curtains;
- microphones;
- unrelated props.

The podium is the environment's primary object.

---

# 41. FOG / VOLUMETRIC LIGHT

Optional.

If used:

- very low density;
- warm;
- localized around the spotlight;
- performance-conscious.

Do not turn the scene into a foggy concert stage.

---

# 42. CAMERA DEPTH

A small amount of depth-of-field may be used in cinematic renders.

For interactive WebGL:

Prefer clarity.

The branding must remain readable.

Heavy blur is discouraged.

---

# 43. INTERACTIVE ROTATION

The podium may respond to pointer movement.

Recommended maximum:

```text
X rotation: ±2–4°
Y rotation: ±3–6°
```

depending on the final model/camera.

Keep it subtle.

---

# 44. POINTER RESPONSE

Pointer movement should create the feeling of inspecting a physical object.

It should NOT feel like dragging a toy.

Use interpolation/spring smoothing.

---

# 45. POINTER RESPONSE SPEED

The object should follow the pointer with a slight delay.

Conceptually:

```text
pointer
→
target rotation
→
smoothed interpolation
→
podium
```

This creates physicality.

---

# 46. POINTER RETURN

When the pointer leaves the hero:

The podium should gradually return toward its neutral orientation.

Do not snap instantly.

---

# 47. TOUCH BEHAVIOR

On touch:

Do not require users to drag the podium to understand the hero.

Touch interaction should be optional.

The default should be:

- stable;
- readable;
- scroll-friendly.

---

# 48. GYROSCOPE

Do not require device orientation.

If implemented at all:

- opt-in;
- low amplitude;
- permission-aware;
- gracefully disabled.

It is not necessary for the core experience.

---

# 49. IDLE ROTATION

Idle movement should be almost imperceptible.

Potential:

```text
rotationY:
-0.5° → +0.5°
```

over a long interval.

Do not create obvious continuous spinning.

---

# 50. IDLE LIGHT

Light may drift independently from the object by a tiny amount.

This gives the scene life without making the podium move continuously.

---

# 51. IDLE SHADOW

Shadow may change minimally as the object/camera shifts.

If dynamic shadow is too expensive:

Use a carefully designed static contact shadow.

---

# 52. SCROLL RESPONSE

As the user scrolls away from the hero, the podium may transition.

Potential sequence:

```text
hero top:
full presence

mid-scroll:
slight scale down
slight vertical shift

hero exit:
moves toward its designated composition
fades only if necessary

next section:
removed from active interaction
```

Do not simply fade it out immediately.

---

# 53. PODIUM AS SCROLL STORYTELLING OBJECT

The podium can represent:

```text
stage
→
speaker
→
education
→
community
→
results
```

But this metaphor should remain visual.

Do not force literal podium appearances throughout the entire site.

---

# 54. PODIUM TRANSITION INTO CONTENT

A premium transition could use:

- camera movement;
- object translation;
- light transition;
- background change.

The object should feel like it belongs to the page, not like a floating sticker.

---

# 55. EXIT BEHAVIOR

When the hero ends:

- interaction should stop;
- animation should stop;
- WebGL rendering may reduce or pause;
- object may remain as a static visual if useful.

Do not keep expensive 3D running below the fold indefinitely.

---

# 56. VISIBILITY PAUSE

If the podium is outside the viewport:

Prefer pausing or reducing rendering where practical.

Use browser visibility/intersection mechanisms.

---

# 57. WEBGL ARCHITECTURE

If using real-time 3D, recommended architecture:

```text
React component
    ↓
Podium scene wrapper
    ↓
renderer / 3D library
    ↓
scene
 ├─ camera
 ├─ lights
 ├─ podium mesh
 ├─ materials
 └─ interaction controller
```

Exact library choice is an engineering decision.

---

# 58. THREE.JS / R3F OPTION

A Three.js-based implementation is acceptable.

React Three Fiber is acceptable if the existing application architecture supports it.

Do not introduce a large 3D stack solely because it is fashionable.

---

# 59. GLTF / GLB ASSET

Preferred production asset format for real-time 3D:

```text
GLB / glTF
```

Advantages:

- compact;
- structured;
- web-friendly;
- supports materials;
- supports animation;
- supports multiple meshes.

---

# 60. MODEL STRUCTURE

The model should ideally separate:

```text
PodiumBody
PodiumTop
PodiumBase
GoldPlaque
Logo
BrandText
```

or equivalent logical meshes.

This allows controlled material/animation changes.

---

# 61. MATERIAL SEPARATION

At minimum:

```text
black body material
gold branding material
optional dark floor material
```

Do not create dozens of materials.

---

# 62. TEXTURE BUDGET

Textures should be high enough quality for hero viewing but optimized for web.

Avoid huge 4K/8K textures unless genuinely required.

Where possible:

- compressed textures;
- appropriate mipmaps;
- efficient formats.

---

# 63. MODEL POLYGON BUDGET

The podium is a single hero object.

It can receive more geometry than a normal decorative object.

But geometry must remain appropriate for mobile.

Use:

- clean topology;
- bevels only where visually meaningful;
- no invisible subdivision waste.

---

# 64. LOD STRATEGY

Optional.

If needed:

```text
desktop:
high

tablet:
medium

mobile:
low
```

A static rendered fallback may be preferable to a complex low-poly version.

---

# 65. NORMALS / SMOOTHING

The model must avoid visibly broken shading.

Use:

- appropriate normals;
- controlled smoothing;
- bevels where required.

Black surfaces are especially unforgiving of bad shading.

---

# 66. MODEL SCALE

Use a consistent world scale.

Do not arbitrarily resize the object in different code branches.

Camera and composition should determine visual scale.

---

# 67. CAMERA RESPONSIVENESS

Camera framing must adapt to:

- viewport aspect ratio;
- device width;
- hero height;
- surrounding typography.

Do not use one fixed camera transform for all devices.

---

# 68. RESPONSIVE CAMERA RULE

Desktop:

```text
wider framing
more environmental space
```

Mobile:

```text
closer framing
less empty space
stronger vertical composition
```

---

# 69. SAFE AREA

The podium must never cover:

- browser-critical content;
- hero CTA;
- navigation;
- essential heading.

Reserve safe zones around content.

---

# 70. Z-INDEX

The 3D canvas should sit in a deliberate layer.

Conceptually:

```text
background
↓
3D podium
↓
atmosphere
↓
hero content
↓
navigation / controls
```

Exact stacking depends on the page implementation.

---

# 71. POINTER EVENTS

If the canvas is decorative:

It should not block normal page interaction.

If the canvas captures pointer movement:

Use passive/controlled behavior and ensure buttons remain clickable.

---

# 72. INTERACTION BOUNDARY

Do not make the entire viewport behave as though it is the podium.

Pointer response should be limited to the hero interaction zone.

---

# 73. LOADING STATE

Before the model loads:

Show a deliberate fallback.

Preferred:

- black composition;
- subtle gold light;
- static podium poster.

Avoid:

- empty white canvas;
- broken WebGL area;
- loading spinner in the center of the hero unless necessary.

---

# 74. POSTER FALLBACK

A high-quality static render of the podium should exist as the fallback/poster asset.

It should match the live 3D scene closely.

This guarantees visual continuity.

---

# 75. PROGRESSIVE ENHANCEMENT

The website must work in this order:

```text
HTML/content
↓
CSS composition
↓
static hero visual
↓
optional real-time 3D enhancement
```

The user must never need WebGL for the site's core message.

---

# 76. WEBGL FAILURE

If WebGL fails:

Do not display an error.

Automatically fall back to:

```text
static podium image
```

The hero should still look intentional.

---

# 77. LOW-POWER DEVICE

If device capability is poor:

Prefer:

```text
static image
```

or simplified 3D.

Do not sacrifice usability for the effect.

---

# 78. REDUCED MOTION PODIUM

When reduced motion is enabled:

- no idle rotation;
- no pointer parallax;
- no scroll-linked 3D movement;
- no camera animation.

The object may still be rendered as a static 3D frame or static poster.

---

# 79. DATA SAVER

If the browser/device indicates data-saving behavior:

Prefer a static asset.

Do not force a large 3D download.

---

# 80. NETWORK CONDITIONS

The podium model should not block the initial HTML or critical text.

Load it progressively.

Critical hero text should appear before or alongside the visual fallback.

---

# 81. PRELOAD STRATEGY

Only preload the podium model if:

- it is truly critical to the first viewport;
- the asset is sufficiently optimized;
- preload does not compete with critical fonts/images.

Otherwise load after the initial shell.

---

# 82. ASSET PRELOADING

Possible priority order:

```text
critical fonts
↓
hero fallback/poster
↓
critical CSS
↓
3D model
↓
noncritical textures/effects
```

Exact implementation should be validated against real performance data.

---

# 83. CACHING

The model and textures should be cache-friendly.

Use stable asset names/versioning.

Do not force users to redownload unchanged large assets on every deployment.

---

# 84. MODEL COMPRESSION

Use appropriate mesh compression when supported.

The exact compression pipeline may include:

- geometry compression;
- texture compression;
- unused data removal.

Validate visual quality after compression.

---

# 85. RENDER LOOP

Do not run a full animation loop when the scene does not need updates.

Potential optimizations:

- render on demand;
- pause outside viewport;
- pause when tab hidden;
- reduce frame rate for idle effects;
- use event-driven updates.

---

# 86. FRAME RATE TARGET

Aim for:

```text
60fps
```

on capable desktop hardware.

For mobile:

A stable lower frame rate is preferable to an unstable attempt at 60fps.

The user experience matters more than an arbitrary FPS number.

---

# 87. GPU MEMORY

Keep:

- texture sizes controlled;
- unnecessary meshes removed;
- duplicate materials minimized.

Do not create multiple copies of the same model.

---

# 88. SHADOW PERFORMANCE

Real-time shadows can be expensive.

Use them only where visually important.

A high-quality baked/static shadow may outperform expensive dynamic shadows.

---

# 89. LIGHT COUNT

Keep the real-time scene simple.

Suggested:

```text
1 primary key
1 subtle fill/environment
1 optional rim
```

More lights are not automatically better.

---

# 90. POST-PROCESSING

Post-processing should be minimal.

Potential:

- subtle bloom;
- vignette;
- tone mapping.

Avoid:

- heavy film effects;
- excessive bloom;
- chromatic aberration;
- fake lens effects.

---

# 91. BLOOM

If used:

Gold branding may receive a tiny bloom.

The effect should be:

```text
barely visible
```

The logo must still look metallic.

---

# 92. VIGNETTE

A subtle vignette can reinforce the stage atmosphere.

It must not create a dark ring that looks like a photo filter.

---

# 93. COLOR MANAGEMENT

The real-time render must align visually with the rest of the website.

Check:

- gold;
- black;
- warm whites;
- shadows.

Do not allow the 3D scene to look like a separate product.

---

# 94. TONEMAPPING

Use a consistent tone-mapping approach appropriate to the chosen renderer.

The exact technical setting should be decided during implementation and visual QA.

---

# 95. BRAND COLOR MATCHING

Gold in the podium should match the approved gold system as closely as physical rendering allows.

It should not be a random yellow selected by the 3D library.

---

# 96. CAMERA TEST SET

Render/test the podium at:

```text
360×800
390×844
430×932
768×1024
1024×768
1280×800
1440×900
1920×1080
```

---

# 97. PODIUM MOBILE QA

Check:

- logo readability;
- text readability;
- no crop of essential branding;
- no overlap with CTA;
- no overflow;
- no excessive black void;
- acceptable load time;
- fallback quality.

---

# 98. PODIUM DESKTOP QA

Check:

- silhouette;
- perspective;
- lighting;
- brand placement;
- hero balance;
- text relationship;
- pointer response;
- scroll exit.

---

# 99. PODIUM TABLET QA

Check:

- intermediate framing;
- whether 3D interaction should be reduced;
- text/podium overlap;
- performance.

---

# 100. BRANDING QA

The final rendered podium must be checked against the official logo asset.

Never accept:

- distorted logo;
- incorrect spacing;
- wrong proportions;
- blurry text;
- accidental perspective distortion;
- fake logo reconstruction.

---

# 101. VISUAL QA CHECKLIST

Before production approval:

```text
[ ] silhouette feels premium
[ ] not too boxy
[ ] predominantly black
[ ] wood/composite texture subtle
[ ] gold is metallic and restrained
[ ] logo is correct
[ ] Academy text is readable
[ ] lighting reveals form
[ ] background remains dark
[ ] shadow grounds object
[ ] perspective feels natural
[ ] no sci-fi excess
[ ] no furniture-like rustic appearance
```

---

# 102. INTERACTION QA CHECKLIST

```text
[ ] pointer response is subtle
[ ] return-to-neutral is smooth
[ ] touch does not require dragging
[ ] buttons remain clickable
[ ] scroll remains natural
[ ] no animation trap
[ ] reduced motion works
[ ] canvas pauses when appropriate
```

---

# 103. PERFORMANCE QA CHECKLIST

```text
[ ] static fallback exists
[ ] model compressed
[ ] textures optimized
[ ] no unnecessary render loop
[ ] offscreen rendering reduced/paused
[ ] WebGL failure handled
[ ] low-power fallback exists
[ ] data-saving behavior considered
[ ] critical content is not blocked
```

---

# 104. ENGINEERING CONTRACT

The coding agent must implement the podium as a progressive enhancement.

The architecture should resemble:

```text
<Hero>
  <HeroBackground />
  <PodiumFallback />
  <Podium3D />
  <HeroContent />
</Hero>
```

The exact component names may differ.

The conceptual separation must remain.

---

# 105. PODIUM CONTROLLER

A dedicated controller/hook/service should own:

- target rotation;
- smoothing;
- idle state;
- visibility;
- reduced-motion state;
- device capability;
- scroll progress;
- fallback state.

Do not scatter podium behavior across unrelated components.

---

# 106. CONFIGURATION

Podium motion should be configurable.

Conceptual configuration:

```ts
{
  maxRotationX,
  maxRotationY,
  idleAmplitude,
  idleDuration,
  hoverSmoothing,
  scrollRange,
  desktopScale,
  tabletScale,
  mobileScale
}
```

Values should be centralized.

---

# 107. NO MAGIC NUMBERS

Do not hardcode values repeatedly in event handlers.

Bad:

```text
rotateX(3deg)
rotateY(4deg)
rotateX(2deg)
...
```

Use shared constants/configuration.

---

# 108. INTERACTION PRIORITY

If several effects compete:

```text
user interaction
>
scroll state
>
idle animation
```

User control must override idle behavior.

---

# 109. SCROLL + POINTER CONFLICT

The final rotation should combine inputs in a controlled manner.

Do not let:

```text
pointer rotation
+
scroll rotation
```

create excessive angles.

Clamp the final transform.

---

# 110. STATE PRIORITY

Suggested:

```text
hidden
loading
fallback
active
idle
pointer-active
scroll-transition
reduced-motion
```

Only one effective visual state should control the final output at a time.

---

# 111. HERO EXIT OPTIMIZATION

After the podium leaves the active hero:

- reduce rendering;
- remove pointer listeners if appropriate;
- stop idle animation;
- retain static representation if needed.

This prevents unnecessary battery/GPU usage.

---

# 112. STATIC FALLBACK DESIGN

The fallback must not be an unrelated stock image.

It must be a render of the same approved podium.

The visual difference between:

```text
3D loaded
```

and:

```text
fallback
```

should be minimal.

---

# 113. FALLBACK TRANSITION

When the 3D model loads:

```text
fallback remains visible
↓
3D scene becomes ready
↓
crossfade carefully
↓
fallback removed
```

Do not show a blank frame between them.

---

# 114. LOADING FAILURE FALLBACK

If the model fails:

```text
keep static poster
```

Do not retry endlessly.

Log the technical error appropriately.

The visitor should not know that WebGL failed.

---

# 115. PODIUM AND SEO

The podium is visual enhancement.

Important textual content must remain actual HTML.

Do not put:

- page title;
- mission;
- CTA;
- critical information

inside a 3D texture only.

---

# 116. PODIUM AND ACCESSIBILITY

The podium is decorative unless it contains essential semantic content.

If decorative:

```text
aria-hidden="true"
```

or equivalent treatment.

The important information must exist in accessible HTML.

---

# 117. PODIUM AND KEYBOARD

The podium itself does not need to become a keyboard-controlled object unless it is made an actual interactive control.

Do not create fake focusable 3D objects.

---

# 118. PODIUM AND SCREEN READERS

Screen readers should receive:

- hero heading;
- supporting text;
- CTA;
- relevant page information.

They do not need a verbose description of the 3D implementation unless the podium itself conveys essential meaning.

---

# 119. PODIUM AND MOTION PREFERENCES

The system must respect:

```text
prefers-reduced-motion
```

at the controller level.

Do not rely solely on CSS if JavaScript is controlling 3D motion.

---

# 120. PODIUM AND BATTERY

Continuous rendering is expensive.

If the podium is idle and no visual update is required:

Reduce or stop updates.

Battery preservation is part of premium engineering.

---

# 121. PODIUM AND LOW-END HARDWARE

The site should degrade gracefully.

Possible decision:

```text
capable device
→ real-time 3D

uncertain device
→ simplified 3D

low-power / WebGL failure
→ static render
```

The decision should be based on practical capability signals, not arbitrary device-brand assumptions.

---

# 122. PODIUM AND NETWORK

A user on a slow connection should see the page before the model.

The fallback image is therefore part of the production architecture, not an emergency afterthought.

---

# 123. ASSET DIRECTORY

Recommended conceptual structure:

```text
/public
  /3d
    /podium
      podium.glb
      podium-mobile.glb   (optional)
      podium-poster.webp
      podium-preview.webp
      podium-manifest.json
```

Actual project conventions may differ.

---

# 124. PODIUM MANIFEST

A manifest may describe:

```json
{
  "model": "...",
  "poster": "...",
  "version": "...",
  "materials": "...",
  "recommendedQuality": "..."
}
```

Do not hardcode asset paths across multiple components.

---

# 125. VERSIONING

When the podium model changes:

Use versioned/cache-safe asset naming or deployment hashing.

Avoid stale models appearing beside new CSS.

---

# 126. MODEL REVIEW PIPELINE

Before integrating a new model:

```text
concept render
↓
silhouette approval
↓
branding approval
↓
material approval
↓
lighting approval
↓
mobile render approval
↓
optimization
↓
WebGL integration
↓
performance test
↓
final approval
```

---

# 127. DESIGN VS ENGINEERING SEPARATION

Design decides:

- shape;
- composition;
- color;
- lighting intent;
- branding;
- motion personality.

Engineering decides:

- renderer;
- compression;
- loading;
- capability detection;
- implementation;
- performance optimization.

Neither should silently overwrite the other's core requirements.

---

# 128. AI IMPLEMENTATION RULE

When asking an AI coding agent to implement the podium, provide:

1. this document;
2. approved podium reference renders;
3. official logo asset;
4. brand/typography documents;
5. motion document;
6. responsive document;
7. actual page layout.

The AI should not infer the podium design from a short sentence.

---

# 129. AI PROMPT CONTRACT

Recommended implementation instruction:

```text
Treat 09-3D-PODIUM.md as the authoritative podium behavior specification.

Do not invent a different podium.
Do not replace the object with a generic lectern.
Do not add unrelated particles, neon, glass, or sci-fi elements.
Do not make the podium continuously rotate.
Do not make the interaction aggressive.
Do not sacrifice mobile usability.
Do not remove the static fallback.
Do not block page content while loading 3D.
```

---

# 130. AI VISUAL QA LOOP

The coding agent should iterate using:

```text
implement
↓
render screenshot
↓
compare against approved reference
↓
identify geometry/composition/lighting mismatch
↓
adjust
↓
repeat
```

The agent should not declare success merely because the model technically renders.

---

# 131. REFERENCE COMPARISON

Compare:

### Silhouette
Does it have the same intended visual character?

### Lighting
Does the gold light reveal the black form?

### Branding
Is the logo correctly placed and readable?

### Scale
Does the podium have sufficient presence?

### Composition
Does it coexist with the hero content?

### Atmosphere
Does it feel premium rather than generic?

---

# 132. MOBILE REFERENCE COMPARISON

Do not compare mobile to desktop by pixel-for-pixel scaling.

Compare:

- emotional impact;
- hierarchy;
- readability;
- silhouette;
- branding;
- usability.

---

# 133. WHAT THE PODIUM MUST NEVER BECOME

Never turn it into:

- a generic office lectern;
- a wooden classroom stand;
- a DJ booth;
- a futuristic spaceship console;
- a glowing gaming prop;
- a golden trophy;
- a giant black rectangle;
- a floating box;
- an animated advertisement.

---

# 134. WHAT THE PODIUM SHOULD FEEL LIKE

It should feel like:

**a modern national debate stage condensed into one architectural object.**

It should have enough visual authority that the visitor immediately understands:

**someone is about to speak.**

---

# 135. FINAL PODIUM PRINCIPLE

The podium is the visual signature of the homepage.

It should not demand attention through noise.

It earns attention through:

- silhouette;
- darkness;
- gold;
- light;
- scale;
- physicality;
- restraint.

The final experience should make the podium feel like a real object occupying the browser's space.

---

# 136. HANDOFF

This document establishes the 3D podium.

Related systems:

- brand → `01-BRAND-IDENTITY.md`
- color → `02-COLOR-SYSTEM.md`
- typography → `03-TYPOGRAPHY.md`
- layout → `04-GRID-SPACING-LAYOUT.md`
- components → `05-COMPONENT-SYSTEM.md`
- imagery → `06-IMAGERY-ASSET-SYSTEM.md`
- icons → `07-ICONOGRAPHY.md`
- motion → `08-MOTION-ANIMATION.md`
- responsive → `10-RESPONSIVE-SYSTEM.md`
- accessibility → `11-ACCESSIBILITY.md`
- performance → `12-PERFORMANCE.md`
- page transitions → `13-PAGE-TRANSITIONS.md`

---

# 137. FINAL IMPLEMENTATION TEST

The podium implementation is not complete until all of the following are true:

```text
[ ] Looks correct as a static render
[ ] Looks correct as live 3D
[ ] Matches approved silhouette
[ ] Matches approved branding
[ ] Works on desktop
[ ] Works on tablet
[ ] Works on mobile
[ ] Has static fallback
[ ] Handles WebGL failure
[ ] Handles reduced motion
[ ] Does not block hero content
[ ] Does not break navigation
[ ] Does not create horizontal overflow
[ ] Does not consume excessive GPU
[ ] Pauses/reduces when offscreen
[ ] Pointer response is subtle
[ ] Scroll response is subtle
[ ] Idle animation is subtle
[ ] Logo remains readable
[ ] Gold remains restrained
[ ] Black surface remains dimensional
[ ] The object feels premium
```

---

# 138. FINAL WORD

The podium is not there to prove that the site uses 3D.

It is there to make the site feel like **PBF has a physical place in the world**.

The browser becomes the stage.

The podium becomes the anchor.

The visitor becomes the person being invited to step forward.
