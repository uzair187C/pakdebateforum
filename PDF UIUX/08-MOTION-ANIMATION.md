# PAK DEBATE FORUM — DESIGN SYSTEM
# 08 — MOTION & ANIMATION

Status: Design specification / implementation source of truth
Scope: Global motion language, page-load choreography, scroll behavior, hover states, component transitions, 3D interaction, mobile motion, reduced motion, performance, accessibility, and implementation contracts.

---

# 0. PURPOSE

Motion is a core part of the PBF visual identity, but it is not decoration.

The site's motion should communicate:

- confidence;
- intelligence;
- progression;
- presence;
- hierarchy;
- spatial depth;
- premium craftsmanship.

The motion language should feel:

**cinematic, deliberate, restrained, physical, and editorial.**

It must never feel:

- frantic;
- gimmicky;
- game-like;
- overly elastic;
- continuously animated for no reason;
- dependent on motion for comprehension.

---

# 1. MOTION PHILOSOPHY

The primary principle is:

> Motion should explain change.

A transition should help the user understand:

- where something came from;
- where something went;
- what became active;
- what expanded;
- what is now available;
- what has completed;
- what deserves attention.

If an animation does not communicate one of those things, it should be questioned.

---

# 2. MOTION PERSONALITY

PBF motion is:

### Slow enough to feel premium
Not every interaction should happen instantly.

### Fast enough to remain usable
Functional controls must never feel sluggish.

### Directional
Movement should have a reason and direction.

### Layered
Foreground, typography, light, and background may move at different rates.

### Controlled
Motion should stop when its communication job is complete.

---

# 3. MOTION HIERARCHY

Use four broad levels.

## M0 — None

For:

- reduced-motion users;
- purely decorative micro-interactions that add no information;
- emergency/critical states.

## M1 — Micro

For:

- hover;
- icon translation;
- color transition;
- focus;
- button state;
- small accordion movement.

Typical range:

```text
120–250ms
```

## M2 — Component

For:

- card reveal;
- modal;
- dropdown;
- accordion;
- filter drawer;
- image transition.

Typical range:

```text
250–550ms
```

## M3 — Cinematic

For:

- hero entrance;
- podium reveal;
- page transition;
- major section choreography.

Typical range:

```text
700–1800ms
```

M3 should be used sparingly.

---

# 4. CORE DURATION TOKENS

Recommended baseline tokens:

```text
--motion-instant: 100ms
--motion-fast: 160ms
--motion-standard: 220ms
--motion-medium: 320ms
--motion-slow: 500ms
--motion-cinematic: 800ms
--motion-hero: 1200ms
--motion-epic: 1800ms
```

These are starting design tokens.

Individual interactions may use values within a documented range.

Do not create dozens of arbitrary durations.

---

# 5. EASING

The default motion curve should feel controlled.

Preferred:

```text
ease-out
cubic-bezier(0.22, 1, 0.36, 1)
```

for entrances and settling.

For exits:

Use a quicker ease-in or controlled ease-in-out.

For state changes:

Use a balanced ease-in-out.

Avoid default browser `ease` when a more intentional curve is required.

---

# 6. PHYSICALITY

Motion should imply weight.

Large objects:

- move slower;
- settle gently;
- have smaller acceleration changes.

Small UI elements:

- move faster;
- use shorter distances.

A podium should not move like a button.

A chevron should not move like a 3D object.

---

# 7. DISTANCE SCALE

Recommended movement distances:

```text
Micro:
1–4px

Small:
4–12px

Medium:
12–32px

Large:
32–80px

Cinematic:
80px+
```

Large movement should be reserved for:

- hero;
- page transitions;
- large visual objects.

Do not make cards fly in from 500px away.

---

# 8. OPACITY

Opacity is useful for hierarchy.

Preferred transitions:

```text
0 → 1
0.4 → 1
0.7 → 1
```

Avoid dramatic flickering.

Do not animate important text through extremely low-contrast intermediate states if the content needs to be immediately readable.

---

# 9. SCALE

Scale should be subtle.

Default:

```text
0.98 → 1
```

or

```text
0.96 → 1
```

for cinematic reveals.

Hover:

```text
1 → 1.01–1.03
```

Avoid large zooms on ordinary UI.

---

# 10. BLUR

Blur may be used as a temporary reveal effect.

Example:

```text
blur(8px) → blur(0)
```

Use sparingly.

Do not leave large sections permanently blurred.

Avoid heavy blur on text.

---

# 11. TRANSFORM-FIRST RULE

For performant animation, prefer:

- transform;
- opacity;

over animating:

- width;
- height;
- top;
- left;
- margin;
- large box-shadow changes.

Layout-changing animations should be reserved for interactions where they genuinely improve comprehension.

---

# 12. PAGE LOAD PHILOSOPHY

The first viewport should feel composed, not mechanically assembled.

The user should perceive:

1. environment;
2. hero object;
3. identity;
4. message;
5. action.

The page should not reveal every element simultaneously.

---

# 13. HOMEPAGE LOAD SEQUENCE

Recommended sequence:

```text
0ms
Page shell becomes available

100–300ms
Background atmosphere establishes

250–700ms
Podium silhouette / hero visual appears

500–1100ms
Podium lighting resolves

650–1200ms
Logo/identity becomes readable

750–1400ms
Hero eyebrow/headline enters

900–1500ms
Supporting copy enters

1050–1650ms
Primary CTA enters

After final reveal
Idle state begins
```

These are sequencing targets, not rigid frame-by-frame requirements.

---

# 14. HERO LOAD RULE

Do not delay essential navigation or primary content simply to make the animation dramatic.

The hero may choreograph visual elements, but:

- navigation must remain usable;
- important text must become accessible quickly;
- content must not depend on animation completion.

---

# 15. HERO PODIUM REVEAL

The podium should not simply fade in.

Preferred concept:

```text
initial:
slightly lower
slightly smaller
darkened
low opacity

reveal:
position rises subtly
scale resolves
lighting appears
branding becomes readable

settle:
motion decelerates

idle:
very subtle movement
```

The exact behavior is defined in `09-3D-PODIUM.md`.

---

# 16. HERO LIGHT REVEAL

Gold light may establish the podium before the full object is visible.

Sequence:

```text
ambient darkness
↓
soft warm highlight
↓
edge definition
↓
surface visibility
↓
full podium
```

The light should feel like a real stage light.

It should not look like a UI glow suddenly turned on.

---

# 17. HERO TYPOGRAPHY REVEAL

Typography should enter after the visual focal point has established itself.

Preferred:

- opacity;
- slight upward movement;
- subtle clipping/masking;
- controlled line reveal.

Avoid:

- typewriter effects;
- letter-by-letter text for ordinary headings;
- excessive bounce.

---

# 18. HERO CTA REVEAL

CTA should arrive after the heading/copy.

It may use:

- fade;
- 8–16px upward movement;
- subtle border/light resolution.

Do not make the CTA pulse continuously.

---

# 19. HERO IDLE STATE

The hero may continue moving very subtly.

Possible:

- podium micro-rotation;
- light drift;
- atmospheric gradient movement;
- tiny parallax.

The total movement must be difficult to notice consciously.

The user should feel presence, not animation.

---

# 20. IDLE ANIMATION LIMIT

A continuous animation should have one clear purpose.

If multiple idle effects exist, they must be layered with extremely low amplitude.

Avoid:

```text
podium moving
+
particles moving
+
background moving
+
light pulsing
+
text floating
+
cards bouncing
```

This destroys the premium feel.

---

# 21. SCROLL PHILOSOPHY

Scroll should reveal the site's architecture.

Use scroll to communicate:

- progression;
- transition;
- depth;
- hierarchy.

Do not turn the page into a theme-park ride.

---

# 22. SCROLL REVEAL

Sections may reveal when entering the viewport.

Recommended:

```text
opacity: 0 → 1
translateY: 24–48px → 0
```

Duration:

```text
400–800ms
```

Use stagger only for grouped elements.

---

# 23. SECTION STAGGER

For a card grid:

```text
heading
↓
first row
↓
second row
```

Possible stagger:

```text
40–100ms
```

Do not stagger 20 cards individually.

For large lists, reveal by row or viewport batch.

---

# 24. REVEAL THRESHOLD

A section should generally begin revealing before it reaches the exact center of the viewport.

Typical trigger:

```text
10–25% of element visible
```

The exact trigger may depend on section height.

---

# 25. SCROLL ONCE RULE

Avoid replaying elaborate entrance animations every time the user scrolls slightly upward and downward.

Prefer:

- play once;
- remain visible.

Exception:

- intentional interactive sections;
- pinned scroll storytelling;
- controlled carousels.

---

# 26. IMAGE REVEALS

Images may use:

- mask reveal;
- clip-path;
- opacity;
- slight scale.

Preferred:

```text
image scale 1.03 → 1
opacity 0.7 → 1
```

Avoid dramatic zooming.

---

# 27. IMAGE PARALLAX

Parallax may be used on:

- architectural backgrounds;
- large hero imagery;
- decorative atmospheric layers.

Do not apply strong parallax to text or critical UI.

Recommended amplitude:

```text
small
roughly 5–30px across a full viewport movement
```

---

# 28. PARALLAX MOBILE

Disable or significantly reduce parallax on mobile.

Mobile scroll is already physically constrained.

Use:

- static imagery;
- subtle transform;
- no complex scroll-linked scene.

---

# 29. TEXT SCROLL REVEALS

For major display headings, possible techniques:

- line reveal;
- upward mask;
- opacity + translate;
- word grouping.

Do not animate every paragraph word-by-word.

---

# 30. WORD-BY-WORD RULE

Word-level animation is reserved for:

- major campaign statements;
- special hero moments;
- intentional editorial storytelling.

It should not become the default heading animation across every page.

---

# 31. CARD HOVER

Cards may respond on pointer devices.

Preferred:

- slight upward movement;
- border illumination;
- image scale 1.01–1.03;
- CTA arrow movement.

Example:

```text
transform: translateY(-4px)
```

Do not lift cards by 20px.

---

# 32. CARD IMAGE HOVER

Image movement should remain inside its clipping container.

Preferred:

```text
scale(1.03)
```

Duration:

```text
300–600ms
```

---

# 33. CARD BORDER HOVER

Border can transition:

```text
muted → gold
```

or:

```text
low-opacity → slightly brighter
```

Avoid strong glowing outlines around every card.

---

# 34. CARD HOVER MOBILE

No hover-dependent behavior on touch devices.

Do not simulate hover after every tap.

Mobile should use:

- tap state;
- navigation;
- clear pressed feedback.

---

# 35. BUTTON MOTION

Primary CTA:

- background transition;
- border transition;
- arrow translation where present.

Secondary CTA:

- border;
- text/icon color transition.

No continuous pulse.

---

# 36. BUTTON PRESS

On pointer press:

```text
scale: ~0.98–0.99
```

or subtle translation.

Keep it brief.

Do not make buttons visibly shrink.

---

# 37. NAVIGATION MOTION

Desktop:

- subtle underline/active indicator;
- opacity/color transition;
- optional gold line growth.

Mobile:

- drawer/sliding panel;
- staged menu item reveal if appropriate.

Do not delay navigation usability.

---

# 38. MOBILE NAVIGATION DRAWER

Recommended sequence:

```text
overlay fades in
↓
drawer enters
↓
brand/navigation becomes readable
↓
items settle
```

Duration:

```text
250–500ms
```

The menu should remain easy to close immediately.

---

# 39. ACCORDION MOTION

Accordion:

```text
closed
↓
height expands
↓
content opacity resolves
```

Chevron rotates simultaneously.

Do not animate to a fixed arbitrary height.

Use content-aware expansion.

---

# 40. DROPDOWN MOTION

Dropdown:

- opacity;
- 4–12px vertical movement;
- subtle scale if appropriate.

Do not drop menus from 100px away.

---

# 41. MODAL MOTION

Recommended:

```text
backdrop:
opacity 0 → ~1

modal:
translateY(16–32px) + opacity
→ final
```

Exit should be quicker.

Focus must move to the modal regardless of animation.

---

# 42. DRAWER MOTION

Side drawer:

```text
translateX(100%) → 0
```

or the correct directional equivalent.

Backdrop fades independently.

Do not animate layout of the underlying page unnecessarily.

---

# 43. TOAST MOTION

Toast:

- small entrance;
- short duration;
- clear exit.

Avoid making notifications fly dramatically across the screen.

---

# 44. FORM VALIDATION MOTION

Success:

- subtle icon/state transition.

Error:

- focus;
- border/state change;
- optional short visual emphasis.

Do not violently shake invalid fields.

A small shake may be used only if accessibility and reduced-motion behavior are handled.

---

# 45. FORM SUBMISSION

Submission:

```text
idle
↓
loading
↓
success/error
```

Button should not jump dimensions unexpectedly.

Preserve layout.

---

# 46. LOADING MOTION

Preferred loading:

- subtle skeleton;
- controlled shimmer;
- spinner only when necessary.

Shimmer should be low contrast.

Avoid bright moving bars.

---

# 47. SKELETON SHIMMER

If shimmer is used:

- slow;
- subtle;
- limited to loading surfaces;
- not continuous after content arrives.

The shimmer should never resemble a glowing effect.

---

# 48. CAROUSEL MOTION

Carousel transitions should be:

- horizontal;
- controlled;
- interruptible;
- responsive.

Do not force autoplay for important information.

If autoplay exists:

- pause on hover where appropriate;
- respect reduced motion;
- allow manual navigation.

---

# 49. TESTIMONIAL MOTION

Testimonials may crossfade or slide.

The user should maintain orientation.

Do not rapidly rotate testimonials.

---

# 50. STATS / COUNTERS

Counters may animate once when entering view.

Example:

```text
0 → final value
```

Use only when the value is real data.

Never animate a fabricated placeholder into looking authoritative.

For reduced motion, show the final value immediately.

---

# 51. RESULTS ANIMATION

Results can use:

- number count-up;
- medal/trophy reveal;
- subtle ranking entrance.

But factual content should appear quickly and remain readable.

---

# 52. TRAINING PATH MOTION

Training/progression visuals can use scroll-linked progression.

Potential:

```text
path line gradually illuminates
step 1
step 2
step 3
...
```

The progression must still make sense as a static layout.

Do not make content inaccessible without scrolling.

---

# 53. ACADEMY PROGRESSION MOTION

Academy can use slightly stronger motion than general PBF pages.

Reason:

The Academy represents:

- learning;
- progression;
- development.

Still maintain restraint.

---

# 54. EVENT MOTION

Events may use slightly more energetic motion.

Allowed:

- stronger image reveal;
- directional cards;
- date emphasis;
- event countdown only when genuinely needed.

Avoid gaming-style celebration.

---

# 55. RESULTS MOTION

Results should feel authoritative.

Motion should be:

- precise;
- restrained;
- achievement-oriented.

Avoid fireworks or excessive confetti unless a specific campaign calls for it.

---

# 56. ABOUT MOTION

About should feel slower and more editorial.

Use:

- image reveals;
- story transitions;
- timeline progression;
- subtle architectural movement.

---

# 57. RESOURCES MOTION

Resources should prioritize usability.

Use:

- card reveal;
- filter transitions;
- subtle hover.

Avoid elaborate scroll scenes that make reading difficult.

---

# 58. REGISTRATION MOTION

Registration is functional.

Motion should support:

- step progression;
- validation;
- confirmation.

Do not make the form cinematic.

---

# 59. CONTACT / FEEDBACK MOTION

Minimal.

Use:

- input focus;
- success confirmation;
- subtle CTA transitions.

Do not decorate functional tasks with unnecessary movement.

---

# 60. PAGE TRANSITION PHILOSOPHY

Page transitions should create continuity between pages.

They must not delay navigation excessively.

Possible:

```text
current page
↓
short fade/slide
↓
new page shell
↓
content reveal
```

The detailed page transition system is defined in `13-PAGE-TRANSITIONS.md`.

---

# 61. VIEW TRANSITION SUPPORT

If the implementation uses the browser View Transitions API:

It may be used where:

- supported;
- stable;
- accessible;
- performance-safe.

Fallback must be ordinary navigation without visual breakage.

Do not make the site dependent on View Transitions.

---

# 62. ROUTE CHANGE RULE

A route change should never leave the user looking at an empty black screen while an animation runs.

Navigation and content loading must remain robust.

---

# 63. INTERRUPTIBILITY

Animations must respond correctly if the user:

- scrolls quickly;
- clicks another control;
- navigates away;
- closes a modal;
- changes filters;
- submits a form.

Never trap the user inside an animation.

---

# 64. INPUT DURING ANIMATION

Controls should remain usable unless interaction is intentionally disabled.

Do not block clicks for an arbitrary animation duration.

---

# 65. SCROLL-LINKED MOTION

Scroll-linked effects should be:

- progressive;
- deterministic;
- smooth;
- low amplitude.

Avoid creating motion that changes dramatically with tiny scroll movements.

---

# 66. SCROLL VELOCITY

Animation should not become more aggressive simply because the user scrolls faster.

The interface should remain predictable.

---

# 67. PINNED SECTIONS

Pinned/scroll-story sections may be used selectively.

Good candidates:

- Academy training path;
- major homepage storytelling;
- podium transition.

Bad candidates:

- registration forms;
- long text;
- event details;
- resources.

---

# 68. PINNED SECTION EXIT

Pinned content must have a clear exit.

The user should never feel trapped in a section.

---

# 69. POINTER PARALLAX

Pointer movement may influence:

- podium;
- light;
- background atmosphere.

Use extremely small values.

Example:

```text
pointer X:
±3–8deg rotation
or
±4–12px translation
```

Do not make the podium chase the cursor aggressively.

---

# 70. POINTER PARALLAX MOBILE

Disabled on:

- touch devices;
- coarse pointer environments.

No substitute required.

---

# 71. POINTER LIGHT

A subtle pointer-responsive highlight may exist.

It should be:

- low opacity;
- localized;
- smooth;
- optional.

The page must remain visually complete without it.

---

# 72. PODIUM IDLE MOTION

Potential behaviors:

- micro-rotation;
- camera drift;
- light movement;
- subtle shadow change.

Maximum amplitude should be very small.

The podium should still read as stationary.

---

# 73. PODIUM SCROLL MOTION

The podium may:

- scale slightly;
- shift laterally;
- move downward/out of the hero;
- transition into the next section.

The motion should visually communicate:

**hero → content**

not:

**object disappears randomly.**

Detailed values belong in `09-3D-PODIUM.md`.

---

# 74. GOLD LIGHT MOTION

Gold light may:

- sweep gently;
- brighten on interaction;
- respond to podium rotation.

Avoid repetitive pulsing.

---

# 75. BACKGROUND MOTION

Background gradients may move slowly.

Suggested timescale:

```text
8–30 seconds
```

if continuous motion is used.

This should be almost imperceptible.

---

# 76. PARTICLES

Particles are generally discouraged.

If used:

- very low density;
- extremely slow;
- low contrast;
- never essential.

They should not resemble a technology startup particle background.

---

# 77. NOISE MOTION

Animated grain is optional.

If used:

- low amplitude;
- low opacity;
- low frame impact;
- disabled for reduced motion if necessary.

Static noise is preferred.

---

# 78. TEXT REVEAL CLIPPING

Mask/clip reveals may be used for major headings.

The implementation must ensure:

- no clipped descenders;
- no unexpected horizontal scroll;
- correct responsive wrapping;
- correct accessibility tree.

---

# 79. CONTENT DYNAMICITY

Dynamic text may change length.

Animation must not assume:

- fixed title length;
- fixed number of lines;
- fixed card height.

Avoid brittle transforms that clip longer titles.

---

# 80. DYNAMIC CARD MOTION

When backend data changes:

- new cards may enter normally;
- existing cards should not unexpectedly replay every animation;
- filtering may use a short layout transition.

Avoid animating dozens of records at once.

---

# 81. FILTER MOTION

Filter changes may use:

- fade;
- opacity;
- controlled layout transition.

Avoid large grid reflows that make cards difficult to track.

---

# 82. SEARCH MOTION

Search suggestions may:

- fade;
- slide 4–8px;
- appear immediately.

Do not delay search results for cinematic effect.

---

# 83. TAB MOTION

Tabs:

- active underline may slide;
- content may crossfade or transition minimally.

Do not animate full page layouts unnecessarily.

---

# 84. BREADCRUMB MOTION

Breadcrumbs generally should not animate independently.

They may appear as part of page-load reveal.

---

# 85. FOOTER MOTION

Footer may have:

- subtle link hover;
- CTA transition;
- social icon hover.

Avoid animated footer backgrounds.

---

# 86. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduced-motion mode should:

- remove large translations;
- remove continuous idle movement;
- remove parallax;
- remove animated background effects;
- shorten or remove page transitions;
- show final content states;
- preserve functional state transitions where needed.

---

# 87. REDUCED MOTION PRINCIPLE

Reduced motion does not mean ugly static mode.

The visual design must still contain:

- hierarchy;
- lighting;
- contrast;
- composition;
- depth.

Only unnecessary movement is removed.

---

# 88. ACCESSIBILITY + MOTION

Never use motion as the sole indicator of:

- success;
- error;
- active state;
- navigation;
- availability.

Always provide semantic/textual/state alternatives.

---

# 89. PERFORMANCE

Motion should primarily use:

- transform;
- opacity.

Avoid scroll handlers that cause excessive main-thread work.

Use:

- IntersectionObserver;
- CSS transitions;
- requestAnimationFrame only when necessary;
- efficient animation libraries only where justified.

---

# 90. GPU / COMPOSITING

Do not blindly add:

```css
will-change: transform;
```

to everything.

Use compositing hints only when justified.

Too many promoted layers can hurt performance.

---

# 91. 3D PERFORMANCE

3D motion must have:

- mobile fallback;
- loading poster;
- controlled frame cost;
- capped complexity;
- no dependency on expensive physics.

The podium is a premium enhancement, not a requirement for basic page functionality.

---

# 92. MOBILE MOTION BUDGET

Mobile should generally use:

- fewer simultaneous animations;
- shorter distances;
- less parallax;
- simpler backgrounds;
- fewer continuous effects.

Keep the hero cinematic through composition and lighting rather than brute-force animation.

---

# 93. MOBILE HERO

Recommended:

```text
background
↓
podium reveal
↓
headline
↓
CTA
```

Do not run multiple independent cinematic scenes simultaneously.

---

# 94. DESKTOP HERO

Desktop may support:

- deeper layered motion;
- pointer interaction;
- stronger podium presence;
- subtle background parallax.

Only when performance permits.

---

# 95. TABLET HERO

Tablet should sit between desktop and mobile.

Reduce:

- pointer effects;
- parallax;
- scene complexity.

Maintain:

- podium;
- hierarchy;
- CTA;
- atmosphere.

---

# 96. ANIMATION INTERRUPTION

If a user starts a new interaction:

- cancel obsolete animation;
- transition to new state;
- never queue a long chain of outdated animations.

Example:

User opens accordion A, then B.

Do not force them to wait for A's entire animation before B can respond.

---

# 97. MOTION STATE MACHINE

Interactive components should conceptually use states:

```text
idle
hover
focus
pressed
active
disabled
loading
success
error
```

Motion belongs to transitions between states.

---

# 98. MOTION NAMING

Use semantic names.

Examples:

```text
heroReveal
cardEnter
accordionOpen
drawerEnter
buttonPress
pageExit
podiumIdle
podiumScroll
```

Avoid vague names:

```text
coolAnimation
thingMove
test2
newEffect
```

---

# 99. MOTION TOKENS

Centralize:

- duration;
- easing;
- distance;
- opacity;
- scale;
- stagger.

Do not scatter magic numbers across components.

---

# 100. COMPONENT MOTION CONTRACT

Every animated reusable component should define:

```text
Trigger
Initial state
Final state
Duration
Easing
Distance
Opacity
Stagger
Interrupt behavior
Reduced-motion behavior
Mobile behavior
Performance notes
```

---

# 101. BUTTON MOTION CONTRACT

```text
Trigger:
hover / focus / press

Default:
stable

Hover:
color/border transition + optional arrow shift

Press:
~0.98 scale

Reduced motion:
color/state transition only
```

---

# 102. CARD MOTION CONTRACT

```text
Trigger:
pointer hover

Transform:
translateY(-2 to -4px)

Image:
scale 1.01–1.03

Duration:
~300–500ms

Mobile:
no hover

Reduced motion:
remove transform
```

---

# 103. ACCORDION MOTION CONTRACT

```text
Trigger:
click/tap

Chevron:
rotate 180°

Content:
expand/collapse

Duration:
~250–400ms

Reduced motion:
instant state transition
```

---

# 104. MODAL MOTION CONTRACT

```text
Backdrop:
fade

Panel:
translateY(16–32px) + fade

Duration:
~250–400ms

Exit:
shorter

Focus:
managed independently of animation
```

---

# 105. HERO MOTION CONTRACT

```text
Trigger:
initial page load

Background:
establish atmosphere

Podium:
rise + reveal

Lighting:
resolve

Typography:
staggered reveal

CTA:
final primary action reveal

Idle:
very subtle

Reduced motion:
final composition immediately
```

---

# 106. SCROLL SECTION CONTRACT

```text
Trigger:
viewport intersection

Initial:
opacity 0
translateY 24–48px

Final:
opacity 1
translateY 0

Duration:
400–800ms

Replay:
normally no

Reduced motion:
immediate
```

---

# 107. MOTION QA

Test:

```text
fast scroll
slow scroll
keyboard navigation
mouse
touch
reduced motion
slow CPU
slow network
short viewport
long viewport
long content
dynamic data
```

---

# 108. MOTION QA QUESTIONS

Ask:

- Does the page feel slower because of animation?
- Is anything important delayed?
- Does motion explain something?
- Does the podium remain premium?
- Does mobile feel overloaded?
- Does reduced motion remain beautiful?
- Can users interrupt transitions?
- Are animations smooth on realistic hardware?
- Is any animation competing with the content?

---

# 109. COMMON AI MOTION FAILURES

The coding agent must not:

- animate everything on page load;
- use bounce everywhere;
- use typewriter effects for all headings;
- make cards fly in from random directions;
- create constant floating objects;
- add particle backgrounds automatically;
- use large parallax;
- make gold glows pulse endlessly;
- animate every icon;
- block navigation during transitions;
- ignore reduced motion;
- use JavaScript scroll listeners unnecessarily;
- introduce random easing values;
- create motion that breaks on mobile.

---

# 110. MOTION PRIORITY

When performance is constrained, preserve in this order:

1. navigation/functionality;
2. readable hero;
3. essential component state;
4. major content reveal;
5. podium presence;
6. subtle atmospheric motion;
7. decorative motion.

Decorative animation is always expendable.

---

# 111. MOTION AND BRAND

The motion should reinforce the PBF metaphor:

**A stage is prepared.**

**A speaker steps forward.**

**An idea is presented.**

**The audience engages.**

**A learner progresses.**

**An achievement is recognized.**

This should be felt through pacing and spatial movement, not literal theatrical gimmicks.

---

# 112. FINAL MOTION RULE

The best PBF animation should make a visitor think:

> “This feels alive.”

not:

> “This website has a lot of animations.”

That distinction is central to the entire experience.

---

# 113. HANDOFF

This document establishes global motion.

Related systems:

- brand → `01-BRAND-IDENTITY.md`
- color → `02-COLOR-SYSTEM.md`
- typography → `03-TYPOGRAPHY.md`
- layout → `04-GRID-SPACING-LAYOUT.md`
- components → `05-COMPONENT-SYSTEM.md`
- imagery → `06-IMAGERY-ASSET-SYSTEM.md`
- icons → `07-ICONOGRAPHY.md`
- 3D podium → `09-3D-PODIUM.md`
- responsive → `10-RESPONSIVE-SYSTEM.md`
- accessibility → `11-ACCESSIBILITY.md`
- performance → `12-PERFORMANCE.md`
- page transitions → `13-PAGE-TRANSITIONS.md`

No page-specific animation should contradict this document without explicit review.

---

# 114. FINAL PRINCIPLE

Motion is not the decoration on top of the design.

Motion is the behavior of the design.

It should reveal hierarchy, communicate state, create depth, and make the PBF world feel intentional.

When the user stops noticing the animation but still feels that the interface is polished, the motion system is working.
