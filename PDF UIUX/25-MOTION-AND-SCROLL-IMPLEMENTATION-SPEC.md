# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 25 — MOTION & SCROLL IMPLEMENTATION SPECIFICATION

Status: Master motion-language contract.

Purpose:
Define the complete animation philosophy for PDF so that the site feels cinematic, premium, intentional, and alive without becoming noisy, gimmicky, slow, or difficult to use.

This document governs:
- page entrance
- scroll reveals
- hero motion
- podium motion
- navigation motion
- hover states
- button states
- card interaction
- image motion
- section transitions
- loading transitions
- reduced-motion behavior
- mobile motion
- performance rules

---

# 0. MOTION PHILOSOPHY

PDF motion should communicate:

```text
confidence
precision
depth
craft
calm
```

It should NOT communicate:

```text
chaos
constant movement
gaming UI
cheap "wow" effects
slow navigation
```

The user should notice that the website feels alive before consciously noticing individual animations.

---

# 1. MOTION HIERARCHY

Motion has four levels:

```text
LEVEL 1 — MICRO
buttons, links, icons, controls

LEVEL 2 — COMPONENT
cards, menus, images, accordions

LEVEL 3 — SECTION
content reveal, hero transition, section entrance

LEVEL 4 — SIGNATURE
podium, major hero lighting, large atmospheric transitions
```

The higher the level, the rarer the animation should be.

---

# 2. MOTION SHOULD HAVE A REASON

Every animation must answer one of:

```text
What changed?
Where did it come from?
What should the user notice?
What interaction occurred?
What establishes depth?
```

If there is no answer, the animation is probably unnecessary.

---

# 3. MOTION DEFAULT

The site should feel mostly still.

Motion appears when:

```text
entering
interacting
scrolling
changing state
```

---

# 4. MOTION DURATION SYSTEM

Use the global motion tokens.

Working:

```text
instant: 100ms
fast: 160ms
normal: 240ms
medium: 360ms
slow: 520ms
cinematic: 800–1200ms
```

---

# 5. MICRO INTERACTIONS

Typical duration:

```text
100–240ms
```

Examples:

```text
button hover
icon shift
border change
text color change
```

---

# 6. COMPONENT MOTION

Typical:

```text
240–400ms
```

Examples:

```text
menu
accordion
card hover
filter panel
```

---

# 7. SECTION MOTION

Typical:

```text
360–600ms
```

Examples:

```text
section reveal
headline entrance
image entrance
```

---

# 8. SIGNATURE MOTION

Typical:

```text
800–1200ms
```

Examples:

```text
podium entrance
major hero composition
large atmospheric transition
```

Use sparingly.

---

# 9. EASING

Use semantic easing tokens.

Conceptual:

```text
standard
enter
exit
emphasis
cinematic
```

Avoid applying one easing curve to everything.

---

# 10. ENTER MOTION

Entrance animation should generally:

```text
start slightly displaced
→ settle into position
```

Typical properties:

```text
opacity
transform
```

---

# 11. EXIT MOTION

Exit should usually be faster than entrance.

Do not make leaving a menu feel slower than opening it.

---

# 12. OPACITY

Opacity should support movement.

Avoid:

```text
opacity: 0
→ giant movement
```

when a subtle transition would communicate the same thing.

---

# 13. TRANSFORM

Prefer GPU-friendly transforms where possible:

```text
translate
scale
rotate
```

Avoid layout-heavy animation when unnecessary.

---

# 14. SCROLL REVEAL PHILOSOPHY

Scroll reveals should create:

```text
rhythm
depth
hierarchy
```

not make every element appear one by one like a slideshow.

---

# 15. SECTION REVEAL

Recommended structure:

```text
section enters
→ heading appears
→ supporting content follows
→ cards/images settle
```

The whole section should feel like one composition.

---

# 16. STAGGER

Use stagger sparingly.

Good:

```text
small card collection
navigation items
short list
```

Bad:

```text
every paragraph
every line of a page
every word
```

---

# 17. STAGGER RANGE

Typical:

```text
40–90ms between related items
```

Do not create extremely long sequences.

---

# 18. HEADING REVEAL

Preferred:

```text
opacity
+
small vertical/clip movement
```

Avoid dramatic spinning or letter-by-letter animation.

---

# 19. BODY COPY REVEAL

Body copy should normally have:

```text
subtle opacity
small movement
```

or simply appear with the section.

---

# 20. CTA REVEAL

Primary CTA should not arrive excessively late.

It should become usable quickly.

---

# 21. HERO ENTRANCE

The homepage hero can use a coordinated sequence.

Suggested conceptual order:

```text
background atmosphere
↓
navigation
↓
eyebrow/label
↓
headline
↓
supporting copy
↓
CTA
↓
podium
```

Exact timing may be tuned during visual QA.

---

# 22. HERO ENTRANCE PRINCIPLE

Do not make users wait several seconds before seeing the actual message.

Cinematic does not mean slow.

---

# 23. PODIUM ENTRANCE

The podium is the signature animation.

Suggested sequence:

```text
low-opacity silhouette
→ subtle vertical/scale settle
→ material catches light
→ gold spotlight resolves
→ plaque/logo becomes readable
```

The sequence should feel like the object is being revealed by light rather than simply fading in.

---

# 24. PODIUM ENTRANCE DURATION

Working target:

```text
800–1200ms
```

---

# 25. PODIUM INITIAL POSITION

Use a small controlled displacement.

Avoid:

```text
large slide from off-screen
```

The object should feel physically present.

---

# 26. PODIUM IDLE STATE

After entrance:

```text
mostly still
```

Optional:

```text
extremely subtle light movement
micro camera drift
```

---

# 27. PODIUM IDLE RULE

The podium must NOT constantly rotate.

This is a debate podium, not a product configurator.

---

# 28. PODIUM POINTER RESPONSE

Desktop may use subtle pointer interaction.

Possible:

```text
camera shift
lighting shift
small parallax
```

Magnitude should remain low.

---

# 29. POINTER RESPONSE TARGET

The user should perceive:

```text
"there is depth"
```

not:

```text
"the entire podium follows my mouse."
```

---

# 30. PODIUM SCROLL RESPONSE

As the hero scrolls:

```text
podium may move slightly
```

It should not race away from the content.

---

# 31. PODIUM PARALLAX

Use a small movement ratio.

Concept:

```text
scroll distance
→ fraction of movement
```

The exact implementation follows the 3D podium specification.

---

# 32. MOBILE PODIUM

Reduce or disable pointer-based interaction.

Scroll motion should be subtle.

---

# 33. MOBILE PODIUM ENTRANCE

Use the same visual concept but shorter/lighter:

```text
fade
+
small settle
+
light reveal
```

---

# 34. REDUCED MOTION — PODIUM

When reduced motion is requested:

```text
no parallax
no continuous idle motion
no pointer camera movement
```

Use a simple visual appearance transition.

---

# 35. NAVIGATION ENTER

Desktop dropdown:

```text
opacity
+
small vertical displacement
```

---

# 36. MOBILE MENU ENTER

Preferred:

```text
opacity
+
translate/clip
```

Typical:

```text
240–360ms
```

---

# 37. MOBILE MENU EXIT

Slightly faster than entrance.

---

# 38. HEADER SCROLL TRANSITION

If the header changes from transparent to solid:

animate:

```text
background
border
backdrop
shadow if used
```

Do not animate the entire header layout unnecessarily.

---

# 39. HEADER HIDE/SHOW

If implemented:

use restrained movement.

Avoid hiding the navigation during tiny scroll movements.

Use a meaningful threshold.

---

# 40. BUTTON HOVER

Typical:

```text
color
background
border
small transform
```

Duration:

```text
160–240ms
```

---

# 41. BUTTON MOVEMENT

Suggested:

```text
translateY(-1px to -3px)
```

Do not make buttons jump.

---

# 42. BUTTON PRESS

Can use:

```text
scale(0.98)
```

or subtle downward movement.

---

# 43. BUTTON GOLD

Gold CTA may brighten or slightly shift its surface.

Avoid huge glowing effects.

---

# 44. LINK HOVER

Possible:

```text
color change
underline reveal
small directional movement
```

---

# 45. ICON ARROW

Arrow can move:

```text
2–4px
```

on hover.

---

# 46. CARD HOVER

Desktop-only interaction.

Possible:

```text
translateY(-2 to -6px)
border emphasis
image scale 1.02–1.05
```

---

# 47. CARD HOVER RULE

Card should not dramatically enlarge.

The grid must remain stable.

---

# 48. CARD IMAGE HOVER

Prefer:

```text
small scale
```

inside an overflow-hidden image frame.

---

# 49. CARD GLOW

Use extremely restrained accent glow only for selected/high-priority cards.

---

# 50. TOUCH DEVICE CARD

Do not require hover to expose important information.

---

# 51. ACCORDION

Open:

```text
height/content expansion
opacity
```

Close:

```text
reverse
```

Do not animate `height: auto` naïvely if it causes layout issues; use an appropriate implementation.

---

# 52. ACCORDION ICON

Chevron can rotate approximately:

```text
90–180°
```

depending on the icon convention.

---

# 53. FILTER PANEL

Opening:

```text
opacity
+
translate/clip
```

Closing:

faster reverse.

---

# 54. MODAL ENTER

Preferred:

```text
overlay fade
+
modal scale from ~0.98/translate
```

Avoid large zoom effects.

---

# 55. MODAL EXIT

Fast and clean.

---

# 56. MODAL BACKDROP

Backdrop should transition independently.

---

# 57. LIGHTBOX

Image should settle into the viewport smoothly.

Avoid excessive zoom travel.

---

# 58. PAGE TRANSITIONS

A global page transition is optional.

Do not introduce one if routing already feels immediate.

---

# 59. PAGE TRANSITION PRINCIPLE

Content should feel available immediately.

A page transition must never become a loading screen.

---

# 60. SCROLL-BASED COLOR TRANSITIONS

Can be used for major visual transitions.

Example:

```text
black hero
→ slightly lighter section
```

Changes should be gradual and purposeful.

---

# 61. BACKGROUND TRANSITION

Large background transitions should be implemented efficiently.

Do not animate giant expensive image filters continuously.

---

# 62. SECTION PINNING

Pinned/scroll-driven sections may be used for signature storytelling.

Use only where it adds meaningful narrative value.

---

# 63. PINNED PODIUM CONCEPT

Potential pattern:

```text
hero enters
→ podium remains visually anchored
→ content moves around it
→ podium releases
```

This should only be implemented if the final homepage design explicitly calls for it.

---

# 64. PINNED SECTION RULE

Pinned sections must not create confusing mobile behavior.

---

# 65. MOBILE PINNING

Prefer disabling complex pinning on mobile unless carefully tested.

---

# 66. SCROLL PROGRESS

A subtle progress indicator may be used on long-form pages.

It should not compete with the header.

---

# 67. SCROLLBAR CUSTOMIZATION

Do not heavily customize the browser scrollbar solely for aesthetics.

Native behavior is acceptable.

---

# 68. SMOOTH SCROLL

Smooth scrolling may be used carefully.

Do not override native scrolling in ways that damage:

```text
accessibility
momentum
anchor links
keyboard navigation
```

---

# 69. ANCHOR NAVIGATION

When jumping to sections:

account for sticky header height.

---

# 70. SCROLL REVEAL LIBRARY

A library may be used if it:

```text
is lightweight
supports reduced motion
does not cause layout shift
does not overanimate
```

A custom IntersectionObserver/CSS solution may be preferable for simple reveals.

---

# 71. OBSERVER PERFORMANCE

Observe only necessary elements.

Do not attach expensive scroll handlers to every element.

---

# 72. SCROLL EVENT RULE

Prefer:

```text
IntersectionObserver
requestAnimationFrame
CSS
```

where appropriate.

Avoid unthrottled scroll handlers.

---

# 73. ANIMATION FRAME RULE

Do not perform heavy calculations every frame.

---

# 74. 3D RENDER LOOP

The podium renderer should render only what is necessary.

Pause/reduce activity when:

```text
offscreen
tab hidden
reduced motion
low capability
```

where technically practical.

---

# 75. OFFSCREEN 3D

If the podium is far outside the viewport:

reduce or pause expensive rendering.

---

# 76. VISIBILITY CHANGE

If the browser tab is hidden:

pause expensive animation/rendering where practical.

---

# 77. LOW-END DEVICES

Prefer:

```text
static fallback
lower DPR
fewer effects
reduced particle count
less post-processing
```

over forcing maximum quality.

---

# 78. DPR

Do not blindly render a high-resolution 3D canvas at extreme device pixel ratios.

Cap DPR appropriately.

---

# 79. CANVAS RESIZE

Canvas dimensions should follow the displayed size without creating unnecessary rendering resolution.

---

# 80. WEBGL FAILURE

If 3D initialization fails:

```text
do not break the hero
do not show a blank rectangle
do not throw visible errors
```

Use the approved fallback.

---

# 81. LOADING STATE

3D can have a very subtle loading state.

Avoid:

```text
spinner covering the hero
```

unless necessary.

---

# 82. HERO LOADING

Critical content should render independently of decorative 3D.

---

# 83. IMAGE LOADING

Use aspect-ratio reservation to avoid layout shifts.

---

# 84. SKELETONS

Use skeletons only when content genuinely takes enough time to load to justify one.

Do not skeletonize everything.

---

# 85. SKELETON STYLE

If used:

```text
dark
subtle
minimal
```

It should fit the PDF visual language.

---

# 86. TEXT REVEAL

Avoid typewriter effects for ordinary site copy.

They reduce readability and make content feel artificial.

---

# 87. LETTER-BY-LETTER

Reserved for special editorial moments only, if explicitly approved.

---

# 88. WORD-BY-WORD

Generally avoid.

---

# 89. TEXT MASK REVEAL

A heading can use a subtle mask/clip reveal.

Keep it quick and readable.

---

# 90. IMAGE REVEAL

A restrained:

```text
clip-path
+
opacity
```

can create an editorial image entrance.

---

# 91. IMAGE PARALLAX

Use subtle vertical movement.

Never make the image visibly lag behind the page.

---

# 92. PARALLAX MOBILE

Disable or drastically reduce.

---

# 93. BACKGROUND PARALLAX

Use only on large atmospheric imagery.

---

# 94. GOLD LIGHT PARALLAX

A background gold glow can move independently at extremely low intensity.

This is optional.

---

# 95. MOTION COLOR

Motion should not introduce random colors.

The visual palette remains:

```text
black
charcoal
warm white
gold
```

plus semantic status colors where necessary.

---

# 96. MOTION SOUND

Do not add sound automatically.

The website should remain silent by default.

---

# 97. AUTOPLAY MEDIA

If any media is autoplayed:

```text
muted
accessible
performance-aware
```

---

# 98. MOTION ACCESSIBILITY

All non-essential motion must respect:

```text
prefers-reduced-motion
```

---

# 99. REDUCED MOTION STRATEGY

Replace:

```text
movement
parallax
rotation
stagger
```

with:

```text
instant/subtle opacity
simple state transition
```

where appropriate.

---

# 100. REDUCED MOTION — NO EMPTY DELAYS

Do not keep long animation durations but remove movement.

The content should become available quickly.

---

# 101. FOCUS MOTION

Focus indicators should appear immediately enough to remain usable.

---

# 102. ERROR MOTION

Do not use shaking/error animations as the sole way of communicating errors.

---

# 103. SUCCESS MOTION

Optional subtle confirmation.

Must not distract from the result.

---

# 104. TOAST MOTION

Typical:

```text
fade/slide in
```

and exit naturally.

---

# 105. NOTIFICATION STACK

Multiple notifications should not create chaotic animations.

---

# 106. MOBILE TOAST

Keep within safe viewport areas.

---

# 107. PAGE-SCROLL RHYTHM

A good page should alternate:

```text
stillness
→ subtle motion
→ stillness
→ focal motion
→ stillness
```

Not:

```text
constant animation everywhere
```

---

# 108. MOTION DENSITY

Homepage may have the highest motion density.

Secondary pages should generally be calmer.

---

# 109. INTERNAL PAGE MOTION

Events/resources/academy pages:

```text
low-to-moderate motion
```

---

# 110. DETAIL PAGE MOTION

Use motion to establish hierarchy, not to entertain.

---

# 111. ADMIN MOTION

If an admin interface exists:

prioritize speed over cinematic effects.

---

# 112. MOTION CONSISTENCY

A button should behave like the same button everywhere.

A card hover should behave consistently across pages unless intentionally overridden.

---

# 113. EXCEPTION RULE

A page-specific animation is allowed only when documented in that page's specification.

---

# 114. NO RANDOM ANIMATIONS

The coding AI must not add:

```text
floating blobs
random particles
random spins
random bounce
random text effects
```

because a section feels empty.

---

# 115. NO EXCESSIVE PARALLAX

Parallax is a seasoning, not the visual system.

---

# 116. NO EXCESSIVE GLOW

Gold glow should reinforce the brand, not turn the page into neon cyberpunk.

---

# 117. NO CONSTANT PODIUM ROTATION

This is explicitly prohibited unless the design is changed and approved.

---

# 118. NO FULL-PAGE SCROLLJACKING

Do not hijack native scroll behavior to force users through animation sequences.

---

# 119. NO DELAYED CONTENT

Do not hide important content for several seconds purely for cinematic timing.

---

# 120. MOTION PERFORMANCE TARGET

Animations should remain visually smooth under normal supported conditions.

If an effect causes noticeable frame drops:

```text
reduce complexity
```

rather than accepting the performance problem.

---

# 121. GPU-FRIENDLY RULE

Prefer compositing-friendly properties.

---

# 122. WILL-CHANGE

Use `will-change` sparingly.

Do not add it to everything.

---

# 123. FILTERS

Blur and large filters can be expensive.

Use them selectively.

---

# 124. BACKDROP FILTER

If used:

test on mobile.

Provide a graceful non-blur appearance if necessary.

---

# 125. SHADOW PERFORMANCE

Avoid huge animated shadows.

---

# 126. 3D POST-PROCESSING

Only use post-processing that visibly improves the approved render.

---

# 127. QUALITY ADAPTATION

Possible quality tiers:

```text
high
medium
low
fallback
```

---

# 128. HIGH QUALITY

Desktop/high-capability:

```text
full material detail
soft lighting
controlled shadows
```

---

# 129. MEDIUM QUALITY

Reduce:

```text
render resolution
shadow complexity
post-processing
```

---

# 130. LOW QUALITY

Reduce:

```text
texture resolution
lighting complexity
effects
```

---

# 131. FALLBACK

Static approved render.

---

# 132. MOTION QA

Every animated element must be checked for:

```text
timing
easing
distance
visual weight
performance
accessibility
mobile behavior
```

---

# 133. MOTION QA — DESKTOP

Test:

```text
mouse
trackpad
scroll
keyboard
slow scroll
fast scroll
resize
```

---

# 134. MOTION QA — MOBILE

Test:

```text
tap
swipe
orientation
slow network
low-power conditions
reduced motion
```

---

# 135. MOTION QA — KEY VIEWPORTS

At minimum:

```text
320
360
390
430
768
1024
1280
1440
```

---

# 136. MOTION QA — REDUCED MOTION

Test actual OS/browser reduced-motion behavior.

Do not assume the CSS query works without testing.

---

# 137. MOTION QA — INTERRUPTION

Users may interrupt an animation.

The interface must remain coherent if:

```text
user scrolls quickly
user clicks immediately
user navigates away
menu opens while another animation runs
```

---

# 138. ANIMATION CANCELLATION

Avoid animation logic that creates stale or conflicting states.

---

# 139. ROUTE CHANGE

When navigation occurs:

stop page-specific animation work that no longer matters.

---

# 140. ASSET + MOTION

Do not animate an asset before it is ready in a way that creates visible popping.

---

# 141. IMAGE + MOTION

Image dimensions should be established before reveal animation.

---

# 142. 3D + MOTION

3D loading and entrance animation should be coordinated.

---

# 143. PODIUM + TEXT TIMING

The podium should not visually reveal itself so late that it appears unrelated to the hero message.

---

# 144. PODIUM + CTA TIMING

CTA should be usable before or around the time the podium completes its signature entrance.

---

# 145. HERO FINAL STATE

After entrance animations complete:

the hero should become visually calm.

---

# 146. HERO IDLE

The hero may contain:

```text
subtle lighting
very small atmospheric motion
```

but should otherwise settle.

---

# 147. SCROLL EXIT

When leaving the hero:

the podium may:

```text
fade
move
scale
```

subtly.

Do not create a dramatic exit unless the page design specifically requires it.

---

# 148. SECTION TRANSITION

Hero-to-content transition should feel like a deliberate handoff.

---

# 149. GOLD LIGHT HANDOFF

If a gold light exists in the hero, it may visually transition into a smaller accent in the following section.

This is optional and should remain subtle.

---

# 150. MOTION DESIGN LANGUAGE

The final PDF motion language should be describable as:

```text
cinematic
restrained
editorial
physical
premium
responsive
purposeful
```

---

# 151. FINAL MOTION PRINCIPLE

If the user can remove an animation and the page becomes:

```text
clearer
faster
more usable
```

then the animation probably did not earn its place.

The goal is not to animate everything.

The goal is to make the important things feel intentional.

# END OF MOTION & SCROLL IMPLEMENTATION SPECIFICATION
