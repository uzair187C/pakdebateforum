# PAK DEBATE FORUM (PDF) — 38 HOMEPAGE / LANDING PAGE MASTER SPECIFICATION

Status: Master implementation specification for the public PDF homepage.

Purpose:
Translate the approved PDF visual direction into an implementation-ready homepage contract.

This document defines:
- homepage purpose
- exact section architecture
- hero composition
- podium behavior
- typography hierarchy
- background treatment
- image usage
- animation choreography
- scroll behavior
- responsive transformations
- component mapping
- content hierarchy
- accessibility
- performance
- loading/fallback behavior
- QA
- AI implementation rules

The homepage is the most cinematic page in the PDF system, but it is still a real website homepage. It must remain:
- understandable
- navigable
- fast
- responsive
- accessible
- maintainable
- content-driven

---

# 1. HOMEPAGE CORE IDEA

The homepage should feel like the visitor has entered a **premium debate stage**.

The visual metaphor is:

```text
DARK SPACE
+
PODIUM
+
GOLD LIGHT
+
EDITORIAL TYPOGRAPHY
+
CONTROLLED MOTION
```

The result should feel:
- prestigious
- intellectual
- modern
- cinematic
- Pakistani in identity where appropriate
- serious without feeling corporate
- futuristic without becoming sci-fi

---

# 2. HOMEPAGE JOB

The homepage has five primary jobs:

1. Establish PDF identity.
2. Explain what PDF is.
3. Direct visitors toward the main journeys.
4. Showcase current/high-value content.
5. Create enough visual distinction that the website is memorable.

---

# 3. HOMEPAGE IS NOT

Do not turn Home into:
- an information dump
- a dashboard
- a giant event archive
- a portfolio of every photograph
- a page made entirely of animations
- a collection of unrelated cards

---

# 4. FIRST IMPRESSION

The first impression should communicate:

```text
THIS IS A DEBATE ORGANIZATION
THIS IS PREMIUM
THIS IS PDF
THERE IS SOMETHING TO EXPLORE
```

The visitor should understand the basic purpose without waiting for a long animation.

---

# 5. HERO PRIORITY

The hero is the strongest visual moment.

Priority order:

```text
1. PDF identity
2. Hero message
3. Primary CTA
4. Podium / 3D object
5. Atmosphere
6. Decorative effects
```

Decorative effects must never overpower the first four.

---

# 6. HERO COMPOSITION

Desktop conceptual composition:

```text
┌─────────────────────────────────────────────┐
│ GLOBAL NAVIGATION                            │
│                                              │
│       TEXT / MESSAGE       PODIUM            │
│                            /     \           │
│       CTA                  /       \          │
│                            /         \        │
│                     GOLD LIGHT / GLOW         │
│                                              │
│                 SCROLL CUE                   │
└─────────────────────────────────────────────┘
```

The exact proportions are governed by the visual reference and responsive rules.

---

# 7. HERO SHOULD NOT BE A STATIC POSTER

The hero must feel alive.

But the motion should be:
- slow
- intentional
- premium
- physically plausible

Avoid:
- bouncing podiums
- excessive particle explosions
- rapid zooms
- aggressive camera movement
- constant text movement

---

# 8. PODIUM ROLE

The podium is the signature visual object.

It should act as:
- visual anchor
- brand-stage metaphor
- depth element
- motion object

It should NOT function as a literal navigation button unless specifically designed that way.

---

# 9. PODIUM DESIGN LANGUAGE

The approved podium direction is:

- mostly black
- less boxy than a traditional podium
- slightly futuristic
- elegant silhouette
- sharp but refined edges
- subtle wood/physical texture
- deep shadow
- premium golden illumination
- restrained gold typography/logo
- visually substantial
- not cartoon-like

---

# 10. PODIUM PROPORTION

Desktop:
- large
- dominant
- partially occupying the hero
- visually grounded

Mobile:
- smaller
- vertically centered or positioned below the message
- never allowed to crush the CTA

---

# 11. PODIUM SILHOUETTE

The silhouette matters more than tiny surface details.

At a glance it should read as:

```text
PODIUM
```

while still feeling custom and premium.

---

# 12. PODIUM MATERIAL

Preferred visual behavior:

```text
near-black body
+
subtle physical grain
+
matte/semi-matte finish
+
controlled edge highlights
```

Do not use:
- glossy plastic
- bright metallic black
- obvious wood texture
- excessive reflections

---

# 13. GOLD DETAIL

Gold should be an accent.

Use gold for:
- logo
- typography
- spotlight
- tiny interface accents
- selected borders/highlights

Do not make entire sections gold.

---

# 14. PODIUM TEXT

The podium branding should remain legible at desktop size.

The text should be:
- centered
- elegant
- appropriately sized
- visually integrated
- not oversized

The logo should sit above the text.

---

# 15. PODIUM TEXT ON MOBILE

Do not simply scale desktop branding down proportionally until it becomes unreadable.

If required:
- simplify the texture
- preserve logo visibility
- preserve wordmark readability

---

# 16. PODIUM ASSET STRATEGY

Preferred implementation order:

```text
Option A:
real-time 3D model

Option B:
transparent high-resolution rendered object

Option C:
responsive image sequence / alternate renders

Option D:
static fallback
```

The implementation should choose the most performant option that achieves the intended visual quality.

---

# 17. REAL-TIME 3D

If using WebGL/Three.js/R3F or equivalent:
- keep geometry efficient
- compress textures
- use reasonable lighting
- avoid unnecessary post-processing
- lazy-load noncritical assets

---

# 18. STATIC RENDER

If using a transparent render:
- preserve alpha
- avoid baked-in webpage background where possible
- export sufficiently large
- provide responsive source variants

---

# 19. PODIUM FALLBACK

If 3D cannot initialize:

```text
show static premium podium render
```

Do not leave an empty rectangle.

---

# 20. PODIUM LOADING

Initial state:

```text
dark background
+
subtle glow
+
stable placeholder/silhouette
```

Then resolve into final object.

---

# 21. HERO BACKGROUND

The background should be predominantly:

```text
near-black
+
very subtle tonal gradients
+
controlled golden atmospheric glow
```

---

# 22. BACKGROUND DEPTH

The hero should not be flat black.

Use extremely subtle depth through:
- radial gradients
- vignette
- soft light
- shadow
- atmospheric haze

---

# 23. GOLD LIGHT

The primary golden light should appear to originate above/around the podium.

It should:
- illuminate the upper podium
- create a soft floor/air glow
- reinforce depth
- remain subtle

---

# 24. GOLD LIGHT ANIMATION

Possible motion:

```text
very slow intensity variation
```

Amplitude must be tiny.

It should feel like cinematic lighting, not blinking.

---

# 25. AMBIENT GLOW

Ambient glow can slowly shift position by a small amount.

Avoid obvious looping movement.

---

# 26. PARTICLES

Particles are optional.

If used:
- extremely sparse
- tiny
- low contrast
- slow
- secondary

They should never resemble fireworks.

---

# 27. DUST / ATMOSPHERE

A subtle dust-like layer may enhance cinematic depth.

Keep opacity extremely low.

---

# 28. HERO TYPOGRAPHY

Typography should remain the strongest 2D element.

Hierarchy:

```text
eyebrow / small label
↓
primary headline
↓
supporting sentence
↓
primary CTA
↓
secondary CTA if needed
```

---

# 29. HEADLINE

The headline should be large enough to feel intentional.

Do not make it microscopic simply because the podium is large.

---

# 30. HEADLINE WIDTH

Keep the headline within a controlled measure.

Do not allow a sentence to span the entire desktop viewport.

---

# 31. HEADLINE COLOR

Primary:
- warm white / near-white

Accent:
- approved gold

Use gold sparingly.

---

# 32. SUPPORTING COPY

Supporting copy should be:
- concise
- readable
- lower contrast than headline
- comfortably line-heighted

Avoid long paragraphs above the fold.

---

# 33. CTA

Primary hero CTA should be visually obvious.

The CTA should use the global button system from document 36.

Do not invent a completely separate button style.

---

# 34. CTA COUNT

Preferred:

```text
one primary CTA
optional one secondary CTA
```

Avoid four or five competing actions.

---

# 35. HERO NAVIGATION

The global navigation remains above the hero.

Do not duplicate the main navigation inside hero content.

---

# 36. HERO HEADER RELATIONSHIP

The navigation should feel integrated into the cinematic scene.

It should not look like a generic browser header pasted on top.

---

# 37. HEADER BACKGROUND

Use the approved global header behavior.

If transparent:
- ensure text contrast
- ensure readability over hero
- ensure transition to scroll state

---

# 38. HEADER SCROLL STATE

On scroll, the header may become:
- slightly more opaque
- subtly elevated
- more compact

Transition should be smooth.

---

# 39. HERO HEIGHT

Desktop target:

```text
approximately one viewport
```

but not a rigid requirement.

The actual composition must account for:
- header
- browser viewport
- headline
- podium
- CTA
- scroll cue

---

# 40. MOBILE HERO HEIGHT

Mobile should generally avoid excessive full-screen height if it causes the main message to disappear below the fold.

---

# 41. MOBILE HERO STRUCTURE

Preferred mobile conceptual order:

```text
Header
↓
small brand/eyebrow
↓
headline
↓
supporting copy
↓
CTA
↓
podium
↓
scroll cue
```

Alternative:

```text
Header
↓
podium
↓
headline
↓
CTA
```

may be used only if the visual design proves stronger.

---

# 42. MOBILE PODIUM

The podium should remain large enough to feel special.

But:

```text
PODIUM ≠ entire mobile screen
```

The user still needs to see the message and action.

---

# 43. MOBILE GOLD LIGHT

Reduce:
- glow radius
- post-processing
- shadow complexity

while preserving visual identity.

---

# 44. MOBILE PERFORMANCE

Prefer:
- static render
- lightweight 3D
- reduced particles
- reduced post-processing

over desktop effects scaled down inefficiently.

---

# 45. HERO ACCESSIBILITY

Hero text must remain real HTML text.

Do not bake important messaging into an image.

---

# 46. PODIUM ACCESSIBILITY

The decorative podium should not create meaningless screen-reader noise.

If informative, provide appropriate accessible context.

---

# 47. MOTION REDUCTION

With:

```text
prefers-reduced-motion: reduce
```

disable/reduce:
- camera movement
- parallax
- particles
- large transforms
- continuous glow animation

Keep the final visual composition intact.

---

# 48. HERO ENTRANCE

Initial page load may use:

```text
background
↓
logo/header
↓
headline
↓
CTA
↓
podium
```

with very small stagger intervals.

---

# 49. ENTRANCE TIMING

The visitor should be able to understand the page almost immediately.

Do not make them wait through a cinematic intro before content becomes usable.

---

# 50. PODIUM ENTRANCE

Preferred:
- subtle upward/forward reveal
- opacity transition
- slight scale settle

Avoid:
- dramatic bounce
- spinning
- rotating 360 degrees

---

# 51. HEADLINE ENTRANCE

Possible:
- fade + upward movement
- clip reveal
- line reveal

Choose one shared technique.

---

# 52. CTA ENTRANCE

CTA can follow headline shortly after.

Keep movement minimal.

---

# 53. NAV ENTRANCE

Navigation should appear quickly and remain stable.

---

# 54. HERO SETTLE

After entrance:

```text
Everything becomes mostly still.
```

The atmosphere can continue extremely subtle motion.

---

# 55. CONTINUOUS HERO MOTION

Allowed:
- tiny light variation
- subtle object breathing
- ambient haze

Not allowed:
- constant camera zoom
- repetitive object movement
- distracting loops

---

# 56. POINTER INTERACTION

Desktop may allow subtle pointer-based parallax.

Maximum movement should be very small.

---

# 57. POINTER PARALLAX

Suggested conceptual layers:

```text
background: tiny
glow: tiny
podium: tiny
foreground accent: tiny
```

No layer should follow the cursor aggressively.

---

# 58. TOUCH DEVICES

Do not simulate cursor parallax on touch devices.

---

# 59. SCROLL START

The first scroll should transition the user from:

```text
cinematic introduction
```

to:

```text
real content
```

---

# 60. HERO SCROLL CHOREOGRAPHY

Conceptual sequence:

```text
Hero fully visible
↓
podium subtly recedes
↓
hero atmosphere decreases
↓
next section enters
↓
hero becomes background/context
```

The actual effect must remain smooth.

---

# 61. SCROLL PINNING

A pinned hero may be used if performance permits.

It should not create a long artificial scroll distance.

---

# 62. SCROLL-DRIVEN PODIUM

If implemented:

```text
scroll 0%
→ podium normal

scroll 25%
→ slight scale reduction / movement

scroll 50%
→ visual exits composition

scroll 75%
→ next section dominates

scroll 100%
→ hero released
```

These percentages are conceptual choreography, not hard-coded requirements.

---

# 63. SCROLL EXIT

The podium should feel like it is leaving the stage rather than simply disappearing.

---

# 64. HERO TO SECTION TRANSITION

Use one strong transition.

Possible:
- light fades
- background brightens slightly
- image crosses viewport
- podium recedes

Do not combine every effect.

---

# 65. SECTION 2

Immediately after the hero, the homepage should explain PDF.

The exact content must use the approved organization information.

Possible role:

```text
What is PDF?
```

---

# 66. SECTION 2 COMPOSITION

Recommended:
- strong section heading
- short explanatory copy
- supporting visual
- one CTA where useful

---

# 67. SECTION 2 VISUAL STYLE

More editorial than the hero.

The visitor should feel that the website has transitioned from spectacle into substance.

---

# 68. SECTION 2 MOTION

Use:
- section reveal
- image reveal
- small text stagger

Avoid another cinematic hero sequence.

---

# 69. SECTION 3 — PRIMARY JOURNEYS

The homepage should surface the main things visitors can do.

Potential destinations:

```text
Events
Academy
Resources
About
```

Use only approved primary destinations.

---

# 70. JOURNEY CARDS

Use the global card system.

Cards should have:
- title
- short description
- visual
- action

---

# 71. JOURNEY CARD INTERACTION

Hover:
- slight elevation
- subtle image movement
- controlled border/light response

Avoid:
- excessive tilt
- bouncing
- glowing outlines everywhere

---

# 72. JOURNEY CARD MOBILE

Cards become:
- stacked
- readable
- touch-friendly

Hover-only information must become visible without hover.

---

# 73. SECTION 4 — FEATURED EVENTS

If approved/current event data exists, Home may feature a curated event subset.

---

# 74. EVENT COUNT

Do not show an enormous list.

Recommended concept:
- one featured event
- or a small curated set

---

# 75. EVENT CARD

Use the global Event Card from document 36.

Do not create a Home-only event card unless there is a genuine composition requirement.

---

# 76. EVENT CTA

The card action should lead to:
- event detail
- registration
- approved event destination

---

# 77. FEATURED EVENT VISUAL

One event may receive larger treatment.

The remaining events can use compact cards.

---

# 78. SECTION 5 — ACADEMY

The Academy should have a distinct homepage introduction.

---

# 79. ACADEMY PURPOSE

The section should answer:

```text
What can I learn?
Why should I care?
What should I do next?
```

---

# 80. ACADEMY VISUAL

Use a strong visual or editorial composition.

Do not copy the hero podium literally.

---

# 81. ACADEMY MOTION

Potential:
- reveal
- subtle image movement
- text stagger

Keep it calmer than the hero.

---

# 82. SECTION 6 — RESOURCES

Feature selected useful resources.

---

# 83. RESOURCE COUNT

Use a curated number.

The homepage is not the resource archive.

---

# 84. RESOURCE CARDS

Use the global Resource Card.

---

# 85. RESOURCE SECTION CTA

Example:

```text
Explore Resources
```

Use actual approved wording where available.

---

# 86. SECTION 7 — IMPACT / IDENTITY

If verified organizational impact information exists, Home may include an impact section.

Potential formats:
- statistics
- timeline
- quote
- visual story

Do not fabricate metrics.

---

# 87. STATISTICS

Only display verified numbers.

No placeholder statistics should ship.

---

# 88. STAT COUNTERS

If animated:
- count once
- use reasonable duration
- respect reduced motion
- do not constantly reanimate

---

# 89. QUOTES

If using a testimonial or quote:
- preserve attribution
- preserve approved wording
- avoid anonymous invented quotes

---

# 90. SECTION 8 — FINAL CTA

The homepage should conclude with a strong next action.

Possible:
- explore events
- join Academy
- contact PDF
- explore resources

Use the approved primary business goal.

---

# 91. FINAL CTA VISUAL

This can be:
- large dark panel
- atmospheric image
- gold accent
- oversized typography

But it should remain within PDF visual language.

---

# 92. FINAL CTA MOTION

Use subtle reveal.

Do not create another hero-level animation.

---

# 93. FOOTER

The global footer follows.

The homepage must not invent a special footer unrelated to document 34.

---

# 94. HOMEPAGE SECTION MAP

Conceptual:

```text
GLOBAL HEADER
↓
HERO / PODIUM
↓
PDF INTRODUCTION
↓
PRIMARY JOURNEYS
↓
FEATURED EVENTS
↓
ACADEMY
↓
RESOURCES
↓
IMPACT / IDENTITY (if supported)
↓
FINAL CTA
↓
GLOBAL FOOTER
```

The exact sections depend on the approved content inventory.

---

# 95. SECTION OPTIONALITY

A section may be removed if:
- content is unavailable
- it duplicates another section
- it weakens hierarchy
- it exists only to fill space

---

# 96. NO EMPTY DESIGN

Do not preserve a section simply because it existed in a visual mockup if the real content does not support it.

---

# 97. SECTION SPACING

Use global spacing tokens.

Do not assign random margins to each section.

---

# 98. SECTION CONTAINER

Content aligns to the global container.

---

# 99. SECTION HEADINGS

Use the global heading scale.

---

# 100. SECTION EYEBROWS

Optional eyebrow labels may use:
- uppercase
- tracking
- small gold accent

Do not overuse them.

---

# 101. IMAGE STRATEGY

Every homepage image should have a purpose.

Possible roles:
- identity
- storytelling
- event promotion
- Academy explanation
- editorial atmosphere

---

# 102. IMAGE CONSISTENCY

Images should share:
- tone
- contrast
- cropping logic
- treatment

They should not look like random stock images.

---

# 103. IMAGE TREATMENT

Potential treatment:
- dark overlays
- subtle grain
- monochrome or restrained color
- gold light accents

Do not force every image into identical treatment.

---

# 104. BACKGROUND IMAGE RULE

Background images must remain subordinate to text.

---

# 105. HERO BACKGROUND IMAGE

The hero should prioritize the podium/lighting system.

Avoid adding a busy photograph behind it.

---

# 106. IMAGE CROPPING

Use intentional focal points.

Do not let responsive cropping cut:
- faces
- important objects
- event titles
- logos

---

# 107. RESPONSIVE IMAGE SOURCES

Use responsive image delivery where supported.

---

# 108. IMAGE LAZY LOADING

Below-the-fold images should normally be lazy loaded.

Hero-critical imagery should be prioritized.

---

# 109. IMAGE PLACEHOLDERS

Use stable aspect ratios to prevent layout shift.

---

# 110. HOMEPAGE COLOR RHYTHM

The page should generally maintain:

```text
BLACK
↓
DARK ELEVATED
↓
IMAGE / ATMOSPHERE
↓
BLACK
↓
GOLD ACCENT
```

Do not introduce unrelated colors.

---

# 111. GOLD USAGE

Gold communicates:
- focus
- premium quality
- importance

It should not become the page's dominant fill color.

---

# 112. TYPOGRAPHY COUNT

The homepage should use the approved global font system.

Do not introduce an additional decorative font solely for the hero unless explicitly approved.

---

# 113. FONT WEIGHTS

Use approved weights.

Do not simulate hundreds of weight variations.

---

# 114. HEADLINE SCALE

Desktop headline may be dramatic.

Mobile headline must remain:
- readable
- balanced
- not horizontally overflowing

---

# 115. TEXT WRAPPING

Wrapping should be deliberately controlled where the design depends on a specific line structure.

Do not use hard-coded `<br>` everywhere.

---

# 116. COPY LENGTH

Design should tolerate realistic copy changes.

Do not build a layout that collapses if a headline gains one line.

---

# 117. BUTTON WIDTH

Buttons should size according to content with sensible minimum touch dimensions.

---

# 118. HERO CTA MOBILE

CTA may become:
- full width
- near-full width
- stacked

depending on composition.

---

# 119. HERO SAFE AREA

Keep important content away from:
- viewport edges
- device cutouts
- sticky UI
- browser controls

---

# 120. MOBILE SAFE AREA

Respect safe-area insets where relevant.

---

# 121. DESKTOP LARGE SCREEN

At 1920px+:
- do not allow content to become excessively stretched
- constrain text
- preserve podium composition
- maintain focal point

---

# 122. ULTRAWIDE

Do not let the hero become a giant empty black canvas.

Use max-width composition.

---

# 123. TABLET HERO

Tablet is a transition state.

The design may move from:
```text
side-by-side
```
to:
```text
stacked/overlapping
```

before full mobile.

---

# 124. BREAKPOINT PHILOSOPHY

Breakpoints should be driven by composition failure, not device names.

---

# 125. HERO COLLISION TEST

At every breakpoint verify:

```text
headline
+
copy
+
CTA
+
podium
+
header
```

do not collide.

---

# 126. HERO OVERFLOW

Never allow horizontal page scrolling due to the podium or hero effects.

---

# 127. 3D CANVAS

If using WebGL:
- canvas should not intercept unnecessary pointer events
- keyboard focus should remain on actual controls
- canvas dimensions should track its container

---

# 128. 3D CAMERA

Camera should be tuned to the podium composition.

Do not dynamically alter camera parameters wildly on scroll.

---

# 129. 3D LIGHTING

Lighting hierarchy:

```text
key golden light
↓
soft fill
↓
very subtle environment
```

Avoid many competing lights.

---

# 130. SHADOWS

Shadows should ground the podium.

Do not create an obviously detached floating object unless intentionally designed.

---

# 131. FLOOR / GROUND

If the podium uses a visible ground plane:
- keep it subtle
- avoid horizon lines
- avoid a visible studio floor unless desired

---

# 132. PODIUM CONTACT SHADOW

A soft contact shadow helps sell physical presence.

---

# 133. PODIUM CAMERA MOVEMENT

Maximum movement should be restrained.

The object should remain visually stable.

---

# 134. PODIUM ROTATION

If interactive rotation exists:
- tiny range
- desktop only
- optional
- never required

---

# 135. PODIUM HOVER

Do not make the podium look like a button unless it is one.

---

# 136. PODIUM CLICK

If clickable, provide a clear semantic destination and accessible label.

Otherwise it remains decorative.

---

# 137. GOLD LOGO

The logo should match the approved PDF branding asset.

Do not redraw it with approximate typography if an official logo asset exists.

---

# 138. LOGO PLACEMENT

Centered on podium.

Keep sufficient breathing room around it.

---

# 139. LOGO SCALE

Large enough to recognize.

Small enough to remain elegant.

---

# 140. PODIUM TEXT SCALE

The wordmark/supporting text should sit visually below the logo.

---

# 141. HERO BRANDING

Do not duplicate the podium logo unnecessarily in the hero text area.

The global header already contains PDF branding.

---

# 142. VISUAL HIERARCHY

The eye should generally travel:

```text
headline
→ podium
→ CTA
→ atmosphere
```

or, depending on composition:

```text
podium
→ headline
→ CTA
```

The design should intentionally choose one.

---

# 143. HERO BALANCE

Do not allow the podium to visually overpower the text by more than intended.

---

# 144. NEGATIVE SPACE

Black negative space is part of the design.

Do not fill every empty area.

---

# 145. CINEMATIC PAUSE

Empty space around the podium should feel intentional.

---

# 146. GOLD ACCENT RESTRAINT

If every component glows gold, nothing feels premium.

---

# 147. SCROLL CUE

A tiny line, arrow, or indicator may appear near the lower hero.

It should be subtle.

---

# 148. SCROLL CUE ACCESSIBILITY

It must not be the only indication that content exists below.

---

# 149. SCROLL CUE MOTION

Use slow movement/fade.

No bouncing arrow.

---

# 150. NAVIGATION TO HERO

Navigation should remain usable immediately.

---

# 151. HERO INTERACTION PRIORITY

Interactive elements:
1. navigation
2. CTA
3. optional podium interaction

Decorative canvas must not capture all pointer input.

---

# 152. TOUCH SCROLL

Do not prevent native scrolling for cinematic effects.

---

# 153. SCROLL PERFORMANCE

Scroll-linked effects should use performant transforms/opacity where possible.

Avoid expensive layout recalculation on every scroll event.

---

# 154. OBSERVER STRATEGY

Use appropriate intersection/visibility mechanisms for reveal animations.

---

# 155. ANIMATION CLEANUP

Animations must clean up on unmount/route change.

---

# 156. MEMORY MANAGEMENT

3D assets/textures should be disposed appropriately.

---

# 157. WEBGL FAILURE

If WebGL fails:
- use static render
- maintain hero layout
- preserve CTA and text

---

# 158. LOW-POWER DEVICES

Consider reduced visual complexity.

---

# 159. CONNECTION-AWARE LOADING

Where appropriate, avoid loading the heaviest 3D/visual asset immediately on constrained connections.

---

# 160. HERO IMAGE PRELOAD

Only preload genuinely critical hero assets.

---

# 161. FONT LOADING

Avoid blocking the entire page on noncritical font variants.

---

# 162. LAYOUT STABILITY

Reserve space for:
- podium
- images
- fonts where possible

to reduce layout shift.

---

# 163. FIRST CONTENT

The hero headline should not wait for every visual effect.

---

# 164. INTERACTION READINESS

Buttons/navigation should become interactive quickly.

---

# 165. CONTENT BEFORE EFFECT

If technical constraints arise:

```text
content
>
navigation
>
CTA
>
imagery
>
motion
>
decorative effects
```

---

# 166. MOBILE FALLBACK

The mobile design is not a degraded desktop.

It is a deliberate composition.

---

# 167. MOBILE TYPOGRAPHY

Maintain:
- hierarchy
- readability
- contrast
- line length

---

# 168. MOBILE SECTION SPACING

Reduce spacing proportionally, but preserve breathing room.

---

# 169. MOBILE CARDS

Avoid cards becoming unnecessarily tall because desktop aspect ratios were preserved.

---

# 170. MOBILE IMAGE CROPS

Use alternate focal positioning where required.

---

# 171. MOBILE NAV

Follow global navigation specification.

Do not create a homepage-specific mobile menu.

---

# 172. DESKTOP NAV

Follow global navigation specification.

---

# 173. FOOTER

Follow global footer specification.

---

# 174. GLOBAL COMPONENT REUSE

Use:
- Button
- Heading
- SectionHeader
- EventCard
- ResourceCard
- AcademyCard
- CTA
- Reveal
- Navigation
- Footer

from document 36 where applicable.

---

# 175. NEW COMPONENTS

Homepage-specific components may include:

```text
PodiumHero
HeroAtmosphere
HeroScene
HomepageJourneyGrid
FeaturedEventSpotlight
```

Only create these if the composition genuinely requires them.

---

# 176. COMPONENT OWNERSHIP

Homepage-only components should live in a homepage-specific namespace/module.

---

# 177. NO DUPLICATE GLOBAL COMPONENTS

Do not create:

```text
HomeButton
HomeCard
HomeHeader
```

when the global equivalents already work.

---

# 178. DATA FLOW

The homepage should receive content from approved content/data sources.

Avoid hard-coding dynamic event/resource content into the visual component.

---

# 179. STATIC CONTENT

Stable brand messaging can remain in the page specification/code where appropriate.

---

# 180. DYNAMIC CONTENT

Events/resources/programs should be data-driven where the application architecture supports it.

---

# 181. FEATURE SELECTION

Featured content should be explicitly selected or ranked through approved logic.

Do not randomly choose content.

---

# 182. EMPTY FEATURED CONTENT

If no featured event exists:
- use the next approved content
- or hide the section gracefully

Do not show an empty featured card.

---

# 183. HOMEPAGE ERROR ISOLATION

An events API failure should not destroy:
- hero
- about section
- Academy section
- footer

---

# 184. SECTION FALLBACK

Dynamic sections should have graceful fallback behavior.

---

# 185. ANALYTICS

Track meaningful interactions.

Potential:
```text
hero_primary_cta
hero_secondary_cta
event_card_click
academy_cta
resource_click
final_cta
```

---

# 186. ANALYTICS PRIVACY

Do not send:
- private form content
- sensitive user information
- unnecessary personal data

---

# 187. ACCESSIBILITY QA

Check:
- heading order
- keyboard navigation
- focus visibility
- color contrast
- image alt text
- reduced motion
- form labels
- touch targets

---

# 188. HERO CONTRAST

Text must remain readable even if the glow/background changes.

---

# 189. DYNAMIC BACKGROUND CONTRAST

Do not rely on a single exact background pixel value for readability.

---

# 190. FOCUS STYLE

Focus states must remain visible against dark surfaces.

---

# 191. KEYBOARD

Tab sequence should be:

```text
navigation
→ hero CTA(s)
→ page content
→ footer
```

with any additional interactive elements in logical order.

---

# 192. SCREEN READER ORDER

The screen-reader experience should tell the story logically without needing the visual animation.

---

# 193. SEMANTIC HTML

Prefer:
```text
header
nav
main
section
article
footer
```

where appropriate.

---

# 194. HERO SEMANTICS

The hero is a section with a clear heading, not merely a canvas.

---

# 195. EVENT SEMANTICS

Featured events should use appropriate semantic structures.

---

# 196. CTA SEMANTICS

Use actual links for navigation and buttons for actions.

Do not use clickable `<div>` elements.

---

# 197. HOMEPAGE TEST CONTENT

During development, use representative content lengths.

Do not only test with perfect short mock text.

---

# 198. LONG HEADLINE TEST

Test:
- one line
- two lines
- three lines

and ensure the composition survives.

---

# 199. LONG EVENT TITLE TEST

Ensure event cards remain stable.

---

# 200. NO CONTENT TEST

Remove optional content and inspect layout.

---

# 201. SLOW NETWORK TEST

The page should remain understandable while assets load.

---

# 202. 3D BLOCKED TEST

Disable WebGL and verify fallback.

---

# 203. REDUCED MOTION TEST

Enable reduced motion and verify:
- no distracting motion
- content still appears
- no awkward blank states

---

# 204. MOBILE TEST

Check at least:
```text
320
360
390
430
```

---

# 205. TABLET TEST

Check:
```text
768
820
1024
```

---

# 206. DESKTOP TEST

Check:
```text
1280
1440
1920
```

---

# 207. ULTRAWIDE TEST

Check that:
- hero remains centered
- text does not stretch
- podium remains focal
- black space feels intentional

---

# 208. HEIGHT TEST

Test short laptop viewport heights.

A 1080px-wide screen with low height can expose hero overflow problems.

---

# 209. MOBILE LANDSCAPE

Do not allow hero content to become unusable in landscape orientation.

---

# 210. ACCESSIBILITY ZOOM

At high browser zoom:
- content should remain usable
- navigation should not become inaccessible
- no horizontal overflow where avoidable

---

# 211. HOMEPAGE PERFORMANCE BUDGET

The homepage is visually heavy by design.

Therefore every expensive effect must justify itself.

Priority:
```text
brand quality
+
interaction quality
+
performance
```

not:

```text
maximum number of effects
```

---

# 212. ASSET BUDGET

Prefer:
- compressed textures
- modern image formats
- responsive images
- optimized 3D assets
- lazy loading

---

# 213. 3D BUDGET

Set an explicit geometry/texture/post-processing budget during implementation.

Do not keep adding visual effects without measuring performance.

---

# 214. EFFECT BUDGET

Limit simultaneous:
- particles
- blur layers
- shadows
- filters
- large transparent canvases

---

# 215. CSS EFFECTS

Prefer performant CSS where possible.

---

# 216. FILTER EFFECTS

Heavy blur/filter stacks should be used sparingly.

---

# 217. BACKDROP BLUR

Use only where it materially improves navigation/surface separation.

---

# 218. HERO GLOW

CSS gradients can often create atmospheric glow without expensive graphics.

---

# 219. GRAIN

If grain is used, keep it subtle and performance-conscious.

---

# 220. VIDEO

Do not introduce hero video unless the visual direction specifically requires it.

A high-quality podium render may communicate the concept more efficiently.

---

# 221. BACKGROUND VIDEO

Avoid as default.

It adds:
- bandwidth
- complexity
- accessibility considerations
- mobile cost

---

# 222. PAGE WEIGHT

The cinematic homepage should still feel fast.

---

# 223. CACHE

Cache static assets according to deployment architecture.

---

# 224. VERSIONING

Version changing visual assets where necessary to prevent stale caches.

---

# 225. SEO HERO

Hero copy must be actual crawlable text.

---

# 226. SEO IMAGE

Important images should have meaningful metadata where appropriate.

---

# 227. HOMEPAGE TITLE

Use the approved official PDF title convention.

Do not invent SEO keyword stuffing.

---

# 228. HOMEPAGE DESCRIPTION

Write a concise description explaining PDF.

Use approved organizational language when available.

---

# 229. SOCIAL SHARE

The homepage should have a polished default social preview.

---

# 230. SOCIAL IMAGE

Use the approved PDF visual language:
- black
- gold
- podium/identity where appropriate

---

# 231. FAVICON

Use official PDF logo/mark.

---

# 232. HOMEPAGE CONTENT GOVERNANCE

Content owners should be able to update dynamic areas without redesigning the page.

---

# 233. DESIGN GOVERNANCE

Developers should not change:
- fonts
- gold usage
- spacing scale
- component shapes
- motion language

without updating the design system/spec.

---

# 234. AI CODING GOVERNANCE

The implementation AI must read this document before changing the homepage.

---

# 235. AI MUST NOT

- invent new fonts
- invent new colors
- replace the podium with a generic stock podium
- turn the hero into a generic SaaS landing page
- use random gradients
- add neon cyberpunk effects
- overuse glassmorphism
- add excessive particles
- make every section full-screen
- add animations simply because they are possible

---

# 236. AI MUST

- reuse global components
- preserve the dark/gold identity
- preserve the podium as signature visual
- implement responsive composition
- provide fallbacks
- respect reduced motion
- keep content semantic
- test mobile
- test performance

---

# 237. REFERENCE IMAGE RULE

The visual reference images communicate:
- silhouette
- composition
- mood
- hierarchy
- lighting
- material direction

They are not pixel-perfect implementation specifications.

---

# 238. NO BLIND IMAGE COPYING

Do not blindly reproduce every artifact in a reference image.

Translate the visual intent into a real responsive interface.

---

# 239. HOMEPAGE DESIGN TOKEN DEPENDENCY

The homepage inherits:
- global colors
- typography
- spacing
- radii
- shadows
- motion curves
- breakpoints

from the global design system.

---

# 240. HOMEPAGE EXCEPTIONS

Only hero-specific visual tokens may be introduced when necessary.

Examples:
- hero glow intensity
- podium scale
- hero atmospheric opacity

These should remain scoped.

---

# 241. HERO Z-INDEX

Establish a clear stacking system:

```text
background
↓
atmosphere
↓
podium
↓
content
↓
navigation
↓
interactive overlays
```

Avoid arbitrary z-index values.

---

# 242. POINTER EVENTS

Decorative layers should generally use:

```text
pointer-events: none
```

unless interaction is intentional.

---

# 243. SCROLL LOCK

Do not lock body scrolling during ordinary hero animation.

---

# 244. PAGE EXIT

When navigating away, animations should not continue consuming resources.

---

# 245. CLEANUP

Dispose:
- observers
- animation loops
- WebGL resources
- event listeners

---

# 246. ROUTE CHANGE

If using SPA transitions:
- stop page-specific animation
- clean page-specific state
- load next page
- preserve global shell

---

# 247. HOME RE-ENTRY

Returning to Home may restore the hero in a stable state.

Avoid restarting a long cinematic intro every time the visitor taps Home.

---

# 248. BACK BUTTON

Browser back should not unexpectedly replay a long entrance sequence.

---

# 249. SESSION EXPERIENCE

The homepage should feel fresh without becoming repetitive.

---

# 250. FIRST VISIT

Full subtle entrance is acceptable.

---

# 251. RETURN VISIT

A shorter/instant presentation may be preferable if technically supported.

---

# 252. NO SPLASH SCREEN

Do not add a blocking splash screen solely for aesthetics.

---

# 253. NO INTRO VIDEO GATE

Do not force users to watch an intro before accessing the website.

---

# 254. HOMEPAGE FINAL STRUCTURE

Recommended baseline:

```text
01 GLOBAL NAVIGATION
02 CINEMATIC PODIUM HERO
03 PDF INTRODUCTION
04 PRIMARY JOURNEYS
05 FEATURED EVENTS
06 ACADEMY
07 RESOURCES
08 IMPACT / IDENTITY
09 FINAL CTA
10 GLOBAL FOOTER
```

Sections 05–08 are content-dependent.

---

# 255. HOMEPAGE INFORMATION HIERARCHY

The visitor should progressively move from:

```text
IDENTITY
↓
MEANING
↓
OPTIONS
↓
PROOF / CONTENT
↓
ACTION
```

---

# 256. HOMEPAGE EMOTIONAL ARC

The intended emotional progression:

```text
WOW
↓
INTEREST
↓
UNDERSTANDING
↓
CURIOSITY
↓
TRUST
↓
ACTION
```

---

# 257. VISUAL ARC

```text
CINEMATIC DARK
↓
EDITORIAL DARK
↓
CONTENT-RICH DARK
↓
ATMOSPHERIC
↓
STRONG CTA
↓
QUIET FOOTER
```

---

# 258. MOTION ARC

```text
HIGH
↓
MEDIUM
↓
MEDIUM
↓
LOW
↓
LOW
```

---

# 259. MOTION SHOULD DECAY

The closer the visitor gets to detailed information, the less motion should compete for attention.

---

# 260. HOMEPAGE SHOULD BREATHE

Use deliberate empty space.

Premium design often comes from restraint rather than density.

---

# 261. NO CARD WALL

Do not make the homepage look like:

```text
card
card
card
card
card
card
```

Use editorial composition between card groups.

---

# 262. VISUAL BREAKS

Use:
- large typography
- imagery
- atmospheric space
- asymmetric composition

to break repeated grids.

---

# 263. IMAGE + TEXT BALANCE

Alternate compositions where appropriate:

```text
text | image
image | text
centered
full-width
```

But do not create arbitrary alternation.

---

# 264. HOMEPAGE GRID

Use a consistent underlying grid.

Even asymmetry should align to the same grid.

---

# 265. HERO GRID

Hero content and podium should align to the global grid where possible.

---

# 266. HERO MOBILE GRID

Mobile collapses to one primary column with intentional offsets.

---

# 267. SECTION WIDTH

Text should generally remain within readable line lengths.

---

# 268. LARGE DISPLAY TYPE

Large typography is a visual asset.

Use it selectively.

---

# 269. GOLD TYPOGRAPHY

Gold may highlight:
- eyebrow
- key word
- small metadata
- CTA accents

Do not render long paragraphs in gold.

---

# 270. WHITE TYPOGRAPHY

Primary content remains near-white for readability.

---

# 271. SECONDARY TEXT

Use approved muted text token.

Do not lower contrast below accessible levels.

---

# 272. BORDER USAGE

Borders should be subtle.

Avoid boxes around everything.

---

# 273. RADIUS

Use global radius system.

The podium itself may use custom geometry rather than UI radius.

---

# 274. SHADOW

UI shadows should be restrained.

The hero podium uses physical lighting/shadow rather than generic card shadows.

---

# 275. BUTTON GLOW

If the global button uses a gold accent/glow, keep it subtle.

---

# 276. HOVER STATES

Desktop hover should feel responsive, not flashy.

---

# 277. ACTIVE STATES

Provide clear active/pressed states.

---

# 278. DISABLED STATES

Disabled actions should look unavailable without becoming invisible.

---

# 279. FOCUS STATES

Focus should be visibly distinct from hover.

---

# 280. HOMEPAGE FORM

Avoid placing a full contact form on Home unless explicitly required.

A CTA should generally lead to Contact.

---

# 281. HOMEPAGE SEARCH

Do not place search prominently unless it is a primary user need.

---

# 282. SOCIAL LINKS

Social links should generally live in the footer or approved content sections.

---

# 283. INSTAGRAM / SOCIAL CONTENT

If social media is featured, it should use official approved channels only.

Do not embed unstable social feeds unless there is a strong product reason.

---

# 284. FOOTER CTA

The footer may include a compact final action if defined globally.

---

# 285. HOMEPAGE COPY PRINCIPLE

Write for people first.

Avoid:
- vague corporate jargon
- excessive buzzwords
- artificial AI language

---

# 286. BRAND VOICE

The voice should feel:
- confident
- intelligent
- welcoming
- purposeful

---

# 287. HEADLINE STYLE

Prefer memorable, concise statements.

---

# 288. SUPPORTING COPY STYLE

Use short paragraphs.

---

# 289. CTA LANGUAGE

Prefer action-oriented language.

---

# 290. COPY LENGTH LIMIT

If a section requires a large paragraph to explain itself, consider whether it belongs on a dedicated page.

---

# 291. HOMEPAGE CONTENT PRIORITY

Content hierarchy should be revisited when new information is added.

---

# 292. DYNAMIC CONTENT PRIORITY

Current important content can rise above older content.

---

# 293. STALE CONTENT

Avoid making outdated events appear as current featured content.

---

# 294. EVENT STATUS

Current event status must control the CTA.

---

# 295. RESOURCE RECENCY

If resources are date-sensitive, use approved sorting/filter logic.

---

# 296. ACADEMY AVAILABILITY

Do not imply enrollment is open if it is not.

---

# 297. FINAL CTA STATE

The final CTA should reflect the organization's current priority.

---

# 298. CONTENT FALLBACK

If no dynamic content is available, the homepage still needs to look intentionally complete.

---

# 299. NO PLACEHOLDER TEXT

Do not ship:
```text
Lorem ipsum
Coming soon
Event title
Sample text
```
unless explicitly part of an approved placeholder state.

---

# 300. NO FAKE METRICS

Never fabricate:
- participants
- events
- countries
- awards
- years
- followers

---

# 301. NO FAKE TESTIMONIALS

Only approved quotes.

---

# 302. NO INVENTED PARTNERS

Only official/verified partners.

---

# 303. NO INVENTED PHOTOGRAPHY

Use provided/approved assets or clearly marked generated concept assets during design phase.

---

# 304. IMAGE GENERATION

If new visual assets are generated, they should follow the established PDF art direction.

---

# 305. PODIUM IMAGE GENERATION

The podium reference should preserve:
- black silhouette
- subtle futuristic geometry
- gold branding
- dramatic top light
- premium dark atmosphere

---

# 306. PODIUM AS WEBSITE ASSET

The final asset should be generated/exported specifically for:
- transparent background where possible
- web-friendly dimensions
- high-quality desktop presentation
- mobile variant/fallback

---

# 307. ASSET NAMING

Use predictable names.

Conceptual:

```text
pdf-podium-hero.webp
pdf-podium-hero-mobile.webp
pdf-podium-fallback.png
pdf-logo.svg
```

---

# 308. ASSET DIRECTORY

Keep homepage-specific assets organized separately from global assets.

---

# 309. NO DUPLICATES

Do not store multiple near-identical podium exports without documenting which is canonical.

---

# 310. CANONICAL PODIUM

One approved podium design should become the source asset for implementation.

---

# 311. VERSION CONTROL

When the podium changes materially, version it intentionally.

---

# 312. VISUAL QA

Compare implementation against:
- approved homepage reference
- podium reference
- global design system

---

# 313. PIXEL-PERFECT PRINCIPLE

Aim for fidelity to:
- composition
- hierarchy
- mood
- spacing
- typography
- motion

rather than literal pixel copying at one viewport.

---

# 314. RESPONSIVE FIDELITY

A good mobile implementation is not a failed desktop implementation.

---

# 315. AI SCREENSHOT QA

When the coding AI can render screenshots, it should compare:
- hero alignment
- podium scale
- typography
- CTA position
- section spacing
- mobile composition

---

# 316. ITERATION ORDER

Fix in this order:

```text
1. structure
2. hierarchy
3. typography
4. spacing
5. podium scale
6. color/light
7. motion
8. micro-details
```

---

# 317. DO NOT POLISH A BROKEN STRUCTURE

Do not spend time tuning shadows while the hero layout is incorrect.

---

# 318. HOMEPAGE ACCEPTANCE CRITERIA

The homepage is not considered complete until:

```text
✓ global navigation works
✓ hero communicates PDF
✓ podium is visually strong
✓ CTA is clear
✓ mobile hero works
✓ all primary routes are discoverable
✓ dynamic content works
✓ fallbacks work
✓ reduced motion works
✓ keyboard works
✓ no horizontal overflow
✓ performance is acceptable
✓ 404 works
✓ footer works
```

---

# 319. VISUAL ACCEPTANCE

At a glance:

```text
Does it look like PDF?
Does it look premium?
Does the podium feel intentional?
Does the gold feel restrained?
Does the page feel cinematic?
Does the page still feel like a real website?
```

All should be yes.

---

# 320. UX ACCEPTANCE

Ask:

```text
Can I understand PDF?
Can I navigate?
Can I find Events?
Can I find Academy?
Can I find Resources?
Can I contact PDF?
```

---

# 321. MOBILE ACCEPTANCE

Ask:

```text
Does the podium still look good?
Can I read the headline?
Can I reach the CTA?
Can I scroll naturally?
Does anything overflow?
Is the page fast enough?
```

---

# 322. MOTION ACCEPTANCE

Ask:

```text
Does motion add meaning?
Is it smooth?
Is it restrained?
Does it stop competing with content?
Does reduced motion work?
```

---

# 323. PERFORMANCE ACCEPTANCE

Ask:

```text
Does the hero become usable quickly?
Does 3D fail gracefully?
Are images optimized?
Are below-fold assets lazy?
Is scroll smooth?
```

---

# 324. FINAL AI BUILD SEQUENCE

The coding AI should implement the homepage in this order:

```text
01 global shell
02 hero structure
03 typography
04 podium placeholder
05 hero responsive behavior
06 hero lighting/background
07 real podium asset/3D
08 hero animation
09 scroll choreography
10 intro section
11 journey section
12 events
13 Academy
14 resources
15 impact/identity if approved
16 final CTA
17 footer
18 accessibility
19 performance
20 QA
```

---

# 325. DO NOT BUILD EVERYTHING AT ONCE

The AI should validate each major layer before proceeding.

---

# 326. HERO-FIRST DEVELOPMENT

The hero should be implemented and reviewed independently before the rest of the homepage is built.

---

# 327. HERO REVIEW QUESTIONS

Before continuing:

```text
Is the podium too large?
Is it too small?
Is the headline too small?
Is the gold too strong?
Is the hero too empty?
Is the hero too busy?
Does mobile work?
```

---

# 328. SECTION REVIEW

After hero approval, review the homepage section rhythm.

---

# 329. FULL-PAGE REVIEW

Then review:
- visual pacing
- content density
- CTA frequency
- motion decay
- consistency

---

# 330. FINAL HOMEPAGE PRINCIPLE

The homepage should feel like:

```text
A STAGE
not
A TEMPLATE
```

But beneath that stage is a disciplined system.

---

# 331. FINAL HOMEPAGE EXPERIENCE

The intended visitor experience:

```text
OPEN
↓
SEE THE PODIUM
↓
RECOGNIZE PDF
↓
READ THE MESSAGE
↓
EXPLORE
↓
DISCOVER EVENTS / ACADEMY / RESOURCES
↓
TRUST THE ORGANIZATION
↓
TAKE ACTION
```

---

# 332. FINAL DESIGN BALANCE

The homepage must balance:

```text
SPECTACLE ↔ USABILITY
PREMIUM ↔ ACCESSIBILITY
MOTION ↔ PERFORMANCE
DARKNESS ↔ READABILITY
MINIMALISM ↔ INFORMATION
FUTURISM ↔ INSTITUTIONAL TRUST
```

---

# 333. FINAL RULE

If a visual effect makes the website look cooler but makes the website harder to understand, slower to load, less accessible, or less maintainable:

**remove or simplify the effect.**

---

# 334. FINAL RULE — PODIUM

The podium is the signature.

It should be memorable enough that a visitor can associate:

```text
black podium
+
gold light
+
PDF
```

with the organization.

---

# 335. FINAL RULE — RESTRAINT

The premium feeling comes from control.

Black space.
Controlled gold.
Controlled motion.
Controlled typography.
Controlled composition.

---

# 336. FINAL RULE — RESPONSIVE

Desktop and mobile are two deliberate compositions of the same identity.

---

# 337. FINAL RULE — AI

The AI should never improvise the design language when the specification already defines it.

If something is genuinely undefined, flag it for human/design approval rather than silently inventing a new visual system.

---

# 338. FINAL HOMEPAGE ARCHITECTURE

```text
PDF GLOBAL SYSTEM
        │
        ▼
GLOBAL HEADER
        │
        ▼
CINEMATIC PODIUM HERO
        │
        ├── Typography
        ├── CTA
        ├── Atmosphere
        └── Podium / 3D
        │
        ▼
PDF INTRODUCTION
        │
        ▼
PRIMARY JOURNEYS
        │
        ├── Events
        ├── Academy
        ├── Resources
        └── Other approved destination
        │
        ▼
FEATURED CONTENT
        │
        ├── Events
        ├── Academy
        └── Resources
        │
        ▼
IDENTITY / IMPACT
        │
        ▼
FINAL CTA
        │
        ▼
GLOBAL FOOTER
```

---

# 339. END STATE

When implemented correctly, the homepage should not feel like a collection of generated sections.

It should feel like one continuous experience.

The visitor enters a dark, premium debate stage.

The podium establishes identity.

The typography explains purpose.

The scroll reveals substance.

The content creates trust.

The final CTA creates action.

Then the footer closes the experience quietly.

---

# 340. MASTER HOMEPAGE CONTRACT

This document is the implementation contract for the PDF homepage.

It must be read together with:

```text
35 — Global Visual DNA / Design System
36 — Global Component Library
37 — Site-Wide Page Architecture
```

The hierarchy is:

```text
GLOBAL DESIGN SYSTEM
        ↓
GLOBAL COMPONENT SYSTEM
        ↓
SITE ARCHITECTURE
        ↓
HOMEPAGE SPECIFICATION
        ↓
REFERENCE IMAGES
        ↓
IMPLEMENTATION
```

# END OF HOMEPAGE / LANDING PAGE MASTER SPECIFICATION
