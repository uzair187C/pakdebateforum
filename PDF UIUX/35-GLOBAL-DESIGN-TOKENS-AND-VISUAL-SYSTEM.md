# PAK DEBATE FORUM (PDF) — 35 GLOBAL DESIGN TOKENS & VISUAL SYSTEM

Status: Master visual-language contract.

Purpose:
Define the reusable visual rules that every PDF page, component, animation, illustration, navigation element, card, form, modal, and responsive layout must consume.

This document exists to prevent implementation drift.

The AI coding system must NOT independently invent:
- random colors
- random font sizes
- random spacing
- random shadows
- random border radii
- random breakpoints
- random animation durations
- random gold gradients
- random component dimensions

If a value belongs to the design system, use the corresponding token.

---

# 1. CORE DESIGN PHILOSOPHY

PDF should feel like:

```text
A modern debate institution
+
a cinematic digital stage
+
a premium editorial publication
```

The design must balance:

```text
DRAMA
with
CLARITY

PREMIUM
with
ACCESSIBILITY

CINEMATIC
with
PERFORMANCE

TRADITION
with
FUTURISM
```

---

# 2. VISUAL DNA

The core visual language is:

```text
BLACK
GOLD
WARM WHITE
DEEP SHADOW
PRECISION
SPACE
GEOMETRY
CONTROLLED MOTION
```

---

# 3. DESIGN PRINCIPLE

The interface should feel expensive because of:

- proportion
- typography
- spacing
- contrast
- material treatment
- motion
- restraint

Not because every element is glowing.

---

# 4. COLOR SYSTEM

The color system has four conceptual layers:

```text
Foundation
Surface
Content
Accent
```

---

# 5. FOUNDATION

Primary foundation:

```text
near-black
```

The site should generally avoid absolute `#000000` as its only black.

The exact production hex values should be centralized in the implementation token file.

---

# 6. DARK FOUNDATION

Use the deepest dark layer for:

- global footer
- cinematic backgrounds
- modal backdrops
- major hero backgrounds
- deep visual transitions

---

# 7. SURFACE SYSTEM

Use progressively lighter dark surfaces for hierarchy.

Conceptual scale:

```text
Blackest
↓
Deep Black
↓
Near Black
↓
Charcoal
↓
Elevated Charcoal
```

Do not create dozens of nearly identical surface colors.

---

# 8. SURFACE USAGE

Example:

```text
surface-0
page foundation

surface-1
large sections

surface-2
cards/panels

surface-3
interactive/elevated surfaces

surface-4
menus/dialogs where necessary
```

---

# 9. CONTENT COLORS

Primary content:

```text
warm white
```

Secondary content:

```text
muted warm gray
```

Tertiary content:

```text
quiet gray
```

Do not use pure gray randomly.

---

# 10. WHITE

The primary text color should be slightly warmer than pure white where the visual system benefits from it.

This avoids a sterile UI feeling.

---

# 11. GOLD

Gold is PDF's signature accent.

It represents:

```text
achievement
prestige
stage light
recognition
precision
```

---

# 12. GOLD USAGE

Gold may appear in:

- logo context
- active navigation
- primary accents
- selected states
- thin dividers
- buttons
- key labels
- podium details
- focus treatment when contrast is sufficient
- decorative geometry

---

# 13. GOLD RESTRAINT

Do NOT make:

```text
every heading gold
every border gold
every icon gold
every button gold
every paragraph gold
```

Gold must retain scarcity.

---

# 14. GOLD HIERARCHY

Conceptual:

```text
gold-quiet
subtle decorative use

gold-standard
normal accent

gold-bright
high-priority interaction

gold-highlight
rare cinematic emphasis
```

The exact values belong in code tokens.

---

# 15. GOLD GRADIENTS

Gradients are allowed only when they support a material/cinematic effect.

Avoid rainbow-like or highly saturated gold gradients.

---

# 16. GOLD TEXT

Gold text should be used selectively.

Large amounts of body copy should remain warm white.

---

# 17. GOLD ON BLACK

Gold should generally be paired with deep black for the strongest PDF identity.

---

# 18. COLOR SEMANTICS

Separate visual brand colors from semantic states.

Semantic system:

```text
success
warning
error
info
```

These must remain distinguishable from PDF gold.

Do not use gold as the error color.

---

# 19. ERROR

Error state needs an unmistakable semantic treatment.

Do not rely on a dark-red glow alone.

---

# 20. SUCCESS

Success should not be confused with gold.

Use the global semantic success token.

---

# 21. WARNING

Warning should remain readable on dark surfaces.

---

# 22. INFO

Information states should remain visually subordinate to brand accents.

---

# 23. OPACITY SCALE

Use a small global opacity vocabulary.

Conceptual:

```text
subtle
soft
medium
strong
overlay
```

Do not invent values for every component.

---

# 24. OVERLAYS

Cinematic overlays should usually be built from dark translucent layers rather than opaque black blocks.

---

# 25. BACKDROP

Modal backdrops should visually separate the dialog from the page without making the page disappear completely.

---

# 26. TYPOGRAPHY SYSTEM

Typography is one of the most important parts of PDF.

It must feel:

```text
editorial
intelligent
authoritative
modern
```

---

# 27. FONT COUNT

Use a deliberately small font system.

Preferred architecture:

```text
Display font
+
UI/body font
```

Do not introduce a third/fourth font without a documented reason.

---

# 28. DISPLAY FONT

The display face is reserved for:

- hero headline
- major page titles
- high-impact editorial statements
- selected cinematic labels

It should not be used everywhere.

---

# 29. UI/BODY FONT

The body/UI font handles:

- navigation
- paragraphs
- buttons
- forms
- cards
- metadata
- labels
- utility text

---

# 30. FONT SOURCE

The actual approved font family must be defined by the master project font specification.

This token system references the semantic role rather than allowing components to choose fonts independently.

---

# 31. FONT WEIGHT

Use a limited weight scale.

Conceptual:

```text
regular
medium
semibold
bold
```

Avoid using every available font weight.

---

# 32. DISPLAY WEIGHT

Hero headings may use a strong display weight, but excessive boldness should be avoided.

---

# 33. BODY WEIGHT

Body copy should normally remain regular or medium.

---

# 34. NAV WEIGHT

Navigation should be medium/semibold depending on the chosen font.

Do not use heavy bold navigation by default.

---

# 35. BUTTON WEIGHT

Buttons should use a clear medium/semibold weight.

---

# 36. TYPOGRAPHIC SCALE

Use a global modular scale.

Conceptual roles:

```text
display-hero
display-xl
display-lg
heading-xl
heading-lg
heading-md
heading-sm
body-lg
body-md
body-sm
label
caption
```

---

# 37. HERO SIZE

Hero typography is fluid.

Do not use one fixed desktop font size for every viewport.

---

# 38. FLUID TYPE

Use a controlled responsive function such as `clamp()` where appropriate.

Do not allow unlimited scaling.

---

# 39. HERO LINE LENGTH

Hero headlines should generally remain compact enough to create strong visual composition.

---

# 40. BODY LINE LENGTH

Long-form text should use a readable measure.

Avoid extremely wide paragraphs.

---

# 41. TEXT MEASURE

Conceptually:

```text
body
comfortable reading width

hero
composition-dependent width

metadata
short width
```

---

# 42. LINE HEIGHT

Line height must be defined by semantic role.

Conceptually:

```text
hero
tight

headings
tight-to-normal

body
comfortable

labels
compact
```

---

# 43. LETTER SPACING

Use letter spacing deliberately.

Large display text may be slightly tightened.

Small uppercase labels may use slight tracking.

Do not globally add letter spacing.

---

# 44. UPPERCASE

Uppercase is appropriate for:

- small category labels
- eyebrow text
- metadata
- navigation micro-labels

Avoid entire paragraphs in uppercase.

---

# 45. TITLE CASE

Primary navigation should generally use clean title/normal casing according to approved content.

---

# 46. TEXT HIERARCHY

Every section should communicate hierarchy through:

```text
size
weight
spacing
contrast
```

not color alone.

---

# 47. SPACING SYSTEM

Spacing is structural.

Use one global spacing scale.

Conceptual base:

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
128px
160px
```

The production token values may be adjusted globally, but individual components should consume semantic tokens.

---

# 48. MICRO SPACING

Small gaps:

```text
icon ↔ label
label ↔ input
metadata ↔ title
```

should use the smallest spacing tokens.

---

# 49. COMPONENT SPACING

Cards/buttons/forms should use medium spacing tokens.

---

# 50. SECTION SPACING

Major page sections should use large spacing tokens.

---

# 51. HERO SPACING

Hero spacing is composition-dependent but must still reference the global scale.

---

# 52. VERTICAL RHYTHM

Sections should feel related through repeated spacing intervals.

Avoid every section having a completely different height.

---

# 53. CONTAINER SYSTEM

Use a global content container.

Conceptually:

```text
viewport
│
├── responsive gutter
│
└── max-width content
```

---

# 54. MAX WIDTH

Use one principal site max-width token.

Specialized narrower text measures may exist inside it.

---

# 55. GUTTERS

Desktop, tablet, and mobile gutters are global tokens.

---

# 56. GRID

Use a consistent grid system.

Recommended conceptual model:

```text
12-column desktop
fewer columns on smaller screens
```

The implementation may use CSS Grid/Flexbox according to component needs.

---

# 57. GRID GAPS

Grid gaps consume the global spacing system.

---

# 58. ALIGNMENT

Prefer alignment to arbitrary margins.

Major content should align to shared vertical axes.

---

# 59. EDGE ALIGNMENT

Logo, hero copy, section headings, cards, footer content, and major CTAs should share intentional edges.

---

# 60. BORDER RADIUS

PDF should use restrained corner radii.

The visual language is architectural rather than bubbly.

---

# 61. RADIUS SCALE

Conceptual:

```text
none
small
medium
large
pill
```

Use:
- small for controls
- medium for cards/panels
- large only where composition supports it
- pill for pills/tags only

---

# 62. RADIUS CONSISTENCY

Do not use five different radii on one card.

---

# 63. SHADOW SYSTEM

Shadows should feel like cinematic light rather than generic UI elevation.

---

# 64. SHADOW LEVELS

Conceptual:

```text
none
soft
medium
deep
cinematic
```

---

# 65. SOFT SHADOW

For ordinary cards and controls.

---

# 66. DEEP SHADOW

For elevated panels/dialogs.

---

# 67. CINEMATIC SHADOW

Reserved for hero objects such as the podium or major 3D visual elements.

---

# 68. GLOW

Glow is a rare accent.

Use only where it communicates:

```text
light
gold
focus
stage atmosphere
```

---

# 69. NO CONSTANT GLOW

Buttons and cards should not constantly glow.

Glow should be:
- contextual
- restrained
- performance-conscious

---

# 70. BORDERS

Borders are subtle structural separators.

Prefer low-opacity light/dark borders over thick solid lines.

---

# 71. GOLD BORDER

Gold borders should be rare.

A thin gold line can work for selected/cinematic elements.

---

# 72. SURFACE DEPTH

Use combinations of:

```text
surface color
border
shadow
light
```

rather than stacking gradients everywhere.

---

# 73. GLASS EFFECTS

Glassmorphism is optional and should be extremely restrained.

If used:
- dark translucent surface
- subtle blur
- thin border
- readable content

Never make the entire website glass.

---

# 74. BLUR

Blur is an enhancement, not a dependency.

Every blurred surface must have a readable fallback.

---

# 75. BACKGROUND SYSTEM

PDF backgrounds should be mostly dark and atmospheric.

Possible layers:

```text
solid foundation
+
subtle radial light
+
image
+
gradient overlay
+
decorative geometry
```

---

# 76. BACKGROUND IMAGES

Background images should support content rather than compete with it.

---

# 77. IMAGE CONTRAST

Use overlays to ensure text remains readable.

Do not rely on an image naturally being dark enough.

---

# 78. IMAGE CROP

Use intentional responsive crop rules.

Do not accept accidental focal-point loss.

---

# 79. HERO IMAGE

Hero imagery may be cinematic.

The rest of the page should generally become more restrained.

---

# 80. BACKGROUND VIDEO

Only use video when it materially improves the experience.

Do not add video merely because it looks impressive in a mockup.

---

# 81. VIDEO PERFORMANCE

If used:
- optimize
- lazy-load where appropriate
- provide poster
- support reduced motion
- avoid blocking first paint

---

# 82. PARTICLES

Particles are optional and should be rare.

They must never become the primary visual identity.

---

# 83. NOISE/TEXTURE

Subtle grain can be used in cinematic scenes.

Keep opacity extremely low.

---

# 84. WOOD/PHYSICAL MATERIAL

The podium may use subtle wood grain because it is a physical object.

Do not spread wood texture throughout the website.

---

# 85. METALLIC GOLD

Gold plaque/metal effects should remain physically believable.

Avoid cartoon chrome.

---

# 86. 3D OBJECTS

3D objects should follow:

```text
black material
controlled specular highlight
soft gold light
deep shadow
clean silhouette
```

---

# 87. PODIUM

The podium is a hero-specific object, not a universal component.

Its styling belongs to the homepage/hero specification.

Global tokens control:
- shadow
- gold
- black surfaces
- lighting language
- motion timing

---

# 88. ICON SYSTEM

Use one consistent icon family.

Do not mix:
- outline icons
- filled icons
- emoji
- random SVG styles

without a deliberate reason.

---

# 89. ICON SIZE

Use semantic icon sizes.

Conceptual:

```text
xs
sm
md
lg
xl
```

---

# 90. ICON STROKE

Keep stroke weights visually consistent.

---

# 91. ICON COLOR

Default icons inherit content color.

Gold is used for active/emphasis states.

---

# 92. BUTTON SYSTEM

Buttons must use a shared system.

Primary:

```text
dark/gold or gold/dark depending on context
```

Secondary:

```text
transparent/dark surface
```

Ghost:

```text
minimal
```

---

# 93. PRIMARY BUTTON

Primary action should be visually obvious.

Do not use multiple competing primary buttons in one small region.

---

# 94. SECONDARY BUTTON

Secondary actions should remain clearly available without competing with primary action.

---

# 95. BUTTON HEIGHT

Use global control-height tokens.

Do not set random heights per page.

---

# 96. BUTTON PADDING

Use horizontal/vertical tokens.

---

# 97. BUTTON RADIUS

Use the shared control radius.

---

# 98. BUTTON MOTION

Possible:
- subtle background transition
- slight border change
- tiny elevation

Avoid exaggerated scale.

---

# 99. BUTTON FOCUS

Focus must be visible even when the button is gold.

---

# 100. FORM CONTROL SYSTEM

Inputs, selects, textareas, and buttons should share:

```text
height language
radius
border
surface
typography
focus
error
disabled
```

---

# 101. INPUT SURFACE

Dark input surfaces are appropriate.

They must remain distinguishable from page backgrounds.

---

# 102. INPUT BORDER

Use subtle borders.

Focus may introduce the PDF accent if contrast is sufficient.

---

# 103. INPUT PLACEHOLDER

Placeholder text should be visually subordinate but readable.

---

# 104. INPUT ERROR

Use semantic error color and supporting text.

Never rely solely on red borders.

---

# 105. CARDS

Cards should not become the default container for every piece of content.

Use cards when grouping needs a visual surface.

---

# 106. CARD STYLE

Preferred PDF card direction:

```text
dark surface
subtle border
controlled radius
deep but soft shadow
restrained gold interaction
```

---

# 107. CARD HOVER

Hover can subtly lift or illuminate the card.

Avoid large movement.

---

# 108. CARD GRID

Cards should align to the global grid.

---

# 109. MODALS

Modal surfaces should use elevated dark surfaces.

---

# 110. MODAL BACKDROP

Use a dark translucent backdrop.

---

# 111. MODAL MOTION

Short fade/scale or slide.

Reduced motion removes movement.

---

# 112. TOOLTIPS

Use only when information is not otherwise understandable.

Never put essential instructions only in a tooltip.

---

# 113. BADGES

Badges should be small and purposeful.

Potential:
- upcoming
- featured
- status

Do not decorate every card with badges.

---

# 114. TAGS

Tags use compact typography and small radius/pill treatment.

---

# 115. DIVIDERS

Use dividers only when they improve grouping.

Avoid lines between every paragraph.

---

# 116. DECORATIVE LINES

Gold or light decorative lines can reinforce editorial composition.

They should remain secondary.

---

# 117. SECTION EYEBROWS

Small uppercase labels can introduce sections.

Example conceptual:

```text
ACADEMY
```

Then:

```text
Build your voice.
```

---

# 118. EYEBROW STYLE

Use:
- small size
- slight tracking
- muted or gold accent
- strong spacing below/above

Do not make eyebrows larger than necessary.

---

# 119. HEADLINE STYLE

Headlines should use high contrast and deliberate line breaks.

---

# 120. MANUAL LINE BREAKS

Manual line breaks may be used in hero headlines when they are part of composition.

Do not hard-code them into ordinary responsive copy unless necessary.

---

# 121. BODY COPY

Body text should prioritize readability.

---

# 122. MUTED TEXT

Muted text should still pass accessibility requirements.

---

# 123. MICROCOPY

Use compact text for:
- metadata
- helper text
- captions
- timestamps

---

# 124. NUMBERS

Numbers can use stronger typography for:
- statistics
- event counts
- rankings
- metrics

But avoid turning every number into a giant display element.

---

# 125. EDITORIAL RHYTHM

PDF pages should alternate between:

```text
large visual moment
↓
information
↓
breathing space
↓
interaction
↓
large visual moment
```

This is a page-composition principle, not a component requirement.

---

# 126. VISUAL WEIGHT

Every viewport should have a clear focal point.

Do not allow:
- five competing headlines
- multiple glowing cards
- equal visual emphasis everywhere

---

# 127. FOCAL HIERARCHY

Preferred hierarchy:

```text
primary visual
primary headline
supporting copy
primary action
secondary content
utility
```

---

# 128. MOTION SYSTEM

Motion is part of the brand language.

It should feel:

```text
smooth
cinematic
controlled
intentional
```

---

# 129. MOTION PRINCIPLE

Animation should communicate:

```text
arrival
depth
continuity
feedback
hierarchy
```

Never animate simply because something can move.

---

# 130. DURATION SCALE

Use a small global scale.

Conceptual:

```text
instant
micro
short
medium
long
cinematic
```

---

# 131. MICRO MOTION

For:
- hover
- icon change
- button state

Use short duration.

---

# 132. COMPONENT MOTION

For:
- menus
- dropdowns
- cards
- panels

Use short-to-medium duration.

---

# 133. HERO MOTION

For:
- podium reveal
- ambient lighting
- parallax
- large scene transitions

Use longer cinematic timing.

---

# 134. EASING

Use a small global easing vocabulary:

```text
standard
emphasized
entrance
exit
spring/physical where justified
```

Do not scatter random cubic-bezier values.

---

# 135. ENTRANCE

Elements should generally enter with:

```text
opacity
+
small translation
```

rather than dramatic spins.

---

# 136. EXIT

Exit animations can be slightly faster than entrances.

---

# 137. STAGGER

Stagger can be used for:
- navigation menu items
- card lists
- editorial content

Keep the total sequence short.

---

# 138. STAGGER LIMIT

Do not make users wait for a long cascade before content becomes usable.

---

# 139. PARALLAX

Parallax is allowed for cinematic hero sections.

It must be subtle.

---

# 140. PARALLAX MOBILE

Reduce or remove parallax on mobile.

Mobile should prioritize performance and stability.

---

# 141. SCROLL-TRIGGERED ANIMATION

Use scroll reveal sparingly.

A page should remain understandable if animations do not execute.

---

# 142. INTERSECTION REVEALS

Preferred pattern:

```text
initial state
↓
element enters viewport
↓
subtle reveal
↓
stable
```

Do not repeatedly animate every time an element crosses the viewport.

---

# 143. REPEATED MOTION

Avoid loops that constantly distract users.

Ambient hero motion can be continuous if extremely subtle.

---

# 144. REDUCED MOTION

When `prefers-reduced-motion` is enabled:

- remove parallax
- remove large translations
- remove continuous decorative motion
- shorten or remove page transitions
- preserve opacity changes where comfortable

---

# 145. MOTION PERFORMANCE

Prefer GPU-friendly transforms and opacity.

Avoid expensive layout animation when possible.

---

# 146. LAYOUT ANIMATION

Do not animate width/height/top/left unnecessarily when transforms can achieve the same visual result.

---

# 147. SCROLL PERFORMANCE

Do not attach heavy per-frame JavaScript to scroll.

---

# 148. CURSOR EFFECTS

Custom cursor effects are optional and should be desktop-only enhancements.

Never make them necessary for understanding interactions.

---

# 149. CURSOR MOBILE

Disable custom cursor effects on touch devices.

---

# 150. HOVER MEDIA

Use hover enhancements only where hover exists.

---

# 151. BREAKPOINT SYSTEM

Breakpoints should be semantic and global.

Conceptual:

```text
mobile
tablet
desktop
wide
```

Actual numeric thresholds belong in implementation tokens.

---

# 152. CONTENT-DRIVEN BREAKPOINTS

If a component breaks before the global breakpoint, redesign the component before adding a one-off breakpoint.

---

# 153. MOBILE-FIRST

Components should be designed to work at small widths first, then enhanced for larger screens.

---

# 154. MOBILE PRINCIPLE

Mobile is not a shrunken desktop.

It is a deliberate composition.

---

# 155. DESKTOP PRINCIPLE

Desktop provides space for:
- cinematic scale
- multiple columns
- layered composition
- 3D hero objects

But it must remain readable and restrained.

---

# 156. TABLET PRINCIPLE

Tablet is a real layout mode.

Do not treat it as a broken desktop.

---

# 157. SAFE AREA

Use safe-area insets where fixed controls approach device edges.

---

# 158. ASPECT RATIO

Hero media and visual objects should have defined responsive behavior.

Do not rely on arbitrary image stretching.

---

# 159. IMAGE FIT

Choose deliberately between:

```text
cover
contain
natural
```

based on the asset.

---

# 160. IMAGE POSITION

Use explicit focal positioning for important photography/3D imagery.

---

# 161. OBJECT FIT

The podium and other hero objects should preserve silhouette.

Do not crop important structural edges.

---

# 162. MOBILE PODIUM

The podium should remain a strong visual anchor but must never occupy so much width/height that content becomes inaccessible.

---

# 163. PODIUM RESPONSIVE PRINCIPLE

Desktop:

```text
large
hero-dominant
three-dimensional
```

Mobile:

```text
smaller
centered
controlled depth
headline still readable
CTA still reachable
```

---

# 164. MOBILE 3D PERFORMANCE

If real-time 3D is used, provide a lower-cost mobile mode where appropriate.

---

# 165. STATIC FALLBACK

Every critical 3D hero should have a visual fallback.

The website must remain understandable if WebGL/3D cannot run.

---

# 166. HIGH-DPI

Images and 3D textures must be optimized for high-density screens without unnecessarily huge files.

---

# 167. IMAGE QUALITY

Premium appearance comes from:
- correct asset
- correct crop
- correct lighting
- correct contrast

not simply maximum file size.

---

# 168. IMAGE OPTIMIZATION

Use:
- responsive sizes
- modern formats
- lazy loading for below-the-fold media
- priority loading for critical hero media

---

# 169. CONTENT VISIBILITY

Do not animate critical content from `display:none` states that harm accessibility or SEO.

---

# 170. SKELETONS

Skeleton loaders should only exist where content genuinely loads asynchronously.

---

# 171. SKELETON STYLE

Skeletons should use dark surfaces and subtle contrast.

Do not create bright shimmering skeletons.

---

# 172. LOADING ANIMATION

Use restrained opacity/pulse.

Avoid aggressive shimmer.

---

# 173. EMPTY STATES

Empty states use the same typography/color system.

They should feel designed rather than like browser errors.

---

# 174. ERROR STATES

Errors should be clear and actionable.

---

# 175. SUCCESS STATES

Success should feel calm and confident.

---

# 176. FOCUS RINGS

Global focus treatment should be consistent.

Possible:

```text
gold outer ring
+
dark separation
```

but actual contrast must be tested.

---

# 177. DISABLED STATES

Disabled controls should be visually subdued but still understandable.

Do not reduce opacity so far that labels disappear.

---

# 178. INTERACTION STATES

Every interactive component should define:

```text
default
hover
active/pressed
focus
disabled
loading where relevant
```

---

# 179. POINTER TARGETS

Interactive targets should be comfortable for touch.

Do not make important actions tiny to preserve visual minimalism.

---

# 180. ACCESSIBILITY PRINCIPLE

Premium does not mean inaccessible.

The visual system must coexist with:
- keyboard access
- screen readers
- zoom
- reduced motion
- high contrast
- touch

---

# 181. CONTRAST

Text and interactive controls must meet the project's accessibility target.

Dark aesthetics do not excuse insufficient contrast.

---

# 182. COLOR-ONLY INFORMATION

Never communicate critical information through color alone.

---

# 183. TYPOGRAPHY ACCESSIBILITY

Do not use tiny text to preserve the aesthetic.

---

# 184. MOTION ACCESSIBILITY

No interaction should depend on animation to communicate its meaning.

---

# 185. COMPONENT CONSISTENCY

If two components perform the same role, they should look and behave similarly.

---

# 186. DESIGN TOKEN NAMING

Tokens should be semantic.

Prefer:

```text
color.surface.0
color.text.primary
color.accent.gold
space.section.lg
radius.card
shadow.cinematic
motion.duration.short
```

rather than:

```text
black2
gold3
margin47
shadowNew
```

---

# 187. TOKEN LAYERS

Recommended:

```text
primitive tokens
↓
semantic tokens
↓
component tokens
```

---

# 188. PRIMITIVE TOKENS

Raw values:

```text
colors
spacing
font sizes
weights
radii
durations
```

---

# 189. SEMANTIC TOKENS

Meaningful usage:

```text
page background
primary text
secondary text
brand accent
card surface
interactive focus
```

---

# 190. COMPONENT TOKENS

Only when a component genuinely needs a distinct controlled variation.

---

# 191. NO MAGIC NUMBERS

Do not sprinkle arbitrary values throughout JSX/CSS.

If a value repeats or defines visual identity, make it a token.

---

# 192. EXCEPTIONS

One-off values are acceptable for:
- mathematical positioning
- asset-specific crop
- complex 3D scene tuning

Document them when they materially affect design.

---

# 193. CSS VARIABLES

Prefer CSS variables or the framework's equivalent for global runtime design tokens.

---

# 194. DARK MODE

PDF's primary experience is inherently dark.

Do not create a light mode unless the product requirements explicitly call for it.

---

# 195. LIGHT SURFACES

Warm-white surfaces may appear in specific content/editorial contexts only if approved.

They should not accidentally turn the website into a generic light theme.

---

# 196. PRINT COLORS

Print styles may simplify dark backgrounds to preserve ink and readability.

---

# 197. DESIGN SYSTEM DOCUMENTATION

When a new visual value is introduced, ask:

```text
Is this truly new?
Or does an existing token already solve it?
```

Prefer reuse.

---

# 198. COMPONENT REVIEW

Before approving a component:

```text
Does it use global typography?
Does it use global spacing?
Does it use global color?
Does it use global radius?
Does it use global motion?
Does it work responsively?
Does it work accessibly?
```

---

# 199. VISUAL REGRESSION

Global token changes can affect every page.

Any token modification requires cross-page visual review.

---

# 200. TOKEN CHANGE DISCIPLINE

Changing a global token is effectively changing the entire product.

Do not adjust a token to fix one component unless the new value is genuinely correct system-wide.

---

# 201. PAGE-SPECIFIC STYLING

Pages may establish unique visual compositions, but they must consume the global language.

---

# 202. UNIQUE HEROES

A page may have a unique hero.

It still uses:

```text
global typography
global colors
global spacing
global motion
global responsive principles
```

---

# 203. UNIQUE ILLUSTRATIONS

Illustrations may have unique shapes but should use the same palette and lighting language.

---

# 204. PHOTOGRAPHY

Photography should generally feel:
- authentic
- high-quality
- purposeful
- editorial
- human

Avoid generic stock imagery whenever possible.

---

# 205. PHOTO TREATMENT

When appropriate:
- dark overlay
- controlled contrast
- subtle desaturation
- gold highlight

Do not apply a heavy filter to every image.

---

# 206. IMAGE CORNERS

Image radius follows context.

Large cinematic hero images may be edge-to-edge.

Cards may use shared card radius.

---

# 207. VIDEO POSTERS

Poster frames should follow the same color treatment as the site.

---

# 208. 3D LIGHTING LANGUAGE

Hero 3D objects should generally use:

```text
dark environment
key light
subtle gold rim/accent
deep shadow
```

---

# 209. 3D REFLECTIONS

Reflections should be physically plausible and restrained.

---

# 210. 3D MATERIALS

Avoid excessive roughness variation unless material identity requires it.

---

# 211. 3D BLACK

Black objects still need controlled highlights to remain visible.

Pure black with no edge light can disappear.

---

# 212. CINEMATIC COMPOSITION

Large hero objects should not sit exactly on every page's center just because the center is available.

Composition can deliberately balance object and text.

---

# 213. NEGATIVE SPACE

Negative space is a first-class design element.

Do not fill empty areas just because they are empty.

---

# 214. VISUAL BREATHING

Large empty areas can communicate:
- confidence
- prestige
- focus

---

# 215. DENSITY

PDF should alternate between:

```text
high-impact cinematic moments
+
comfortable information density
```

---

# 216. NO UI CLUTTER

If a component does not help the visitor:
- understand
- navigate
- decide
- act

question whether it belongs.

---

# 217. PREMIUM RULE

Remove before adding.

If a visual effect can be removed without reducing meaning, it probably should be subtle or absent.

---

# 218. GOLD RULE

Gold should feel discovered, not sprayed.

---

# 219. BLACK RULE

Black should have depth.

Use light, texture, surfaces, and contrast so the interface does not become a flat black void.

---

# 220. TYPOGRAPHY RULE

Typography should do most of the visual heavy lifting.

---

# 221. MOTION RULE

Motion should reveal hierarchy rather than compete with it.

---

# 222. RESPONSIVE RULE

Every desktop composition must have an intentional mobile composition.

---

# 223. PERFORMANCE RULE

Visual ambition must never require poor performance.

---

# 224. ACCESSIBILITY RULE

Every cinematic effect is optional.

The information architecture is not.

---

# 225. IMPLEMENTATION RULE

AI coding agents must consult this document before creating new UI styles.

---

# 226. AI AGENT INSTRUCTION

When implementing a new component:

1. Identify its semantic role.
2. Reuse existing tokens.
3. Reuse existing components.
4. Reuse existing motion.
5. Reuse existing responsive rules.
6. Only introduce a new token if no existing token is appropriate.
7. Document meaningful exceptions.

---

# 227. AI AGENT ANTI-DRIFT RULE

The agent must NOT "improve" the design by independently adding:

- gradients
- glows
- rounded cards
- new fonts
- arbitrary colors
- extra animations
- random spacing
- glassmorphism

unless the design specification calls for them.

---

# 228. AI AGENT VISUAL QA

After implementation, compare the result against the design intent:

```text
Is the visual hierarchy correct?
Is gold restrained?
Is black dimensional?
Is typography dominant?
Is spacing deliberate?
Is motion subtle?
Is mobile intentional?
```

---

# 229. DESIGN SYSTEM SOURCE OF TRUTH

The eventual implementation should have one authoritative token file/configuration.

Example conceptual:

```text
design-tokens
├── colors
├── typography
├── spacing
├── radius
├── shadows
├── motion
├── breakpoints
└── layers
```

---

# 230. TOKEN DOCUMENTATION

Every token should have:
- semantic name
- value
- intended usage
- restrictions if necessary

---

# 231. COMPONENT DOCUMENTATION

Every major reusable component should document:
- supported variants
- responsive behavior
- states
- accessibility
- motion
- token dependencies

---

# 232. DESIGN REVIEW CHECKLIST

Before considering a new page complete:

```text
[ ] Uses approved font roles
[ ] Uses global colors
[ ] Uses global spacing
[ ] Uses global container
[ ] Uses global radii
[ ] Uses global shadows
[ ] Uses global motion
[ ] Uses global breakpoints
[ ] Has mobile composition
[ ] Has reduced-motion behavior
[ ] Has keyboard states
[ ] Has accessible contrast
[ ] Does not introduce unnecessary effects
```

---

# 233. FINAL VISUAL SYSTEM

The final PDF visual language can be summarized as:

```text
DEEP BLACK
    +
WARM WHITE
    +
RESTRAINED GOLD
    +
EDITORIAL TYPOGRAPHY
    +
ARCHITECTURAL GEOMETRY
    +
CINEMATIC LIGHT
    +
CONTROLLED MOTION
    +
GENEROUS NEGATIVE SPACE
```

---

# 234. FINAL EXPERIENCE TEST

At any random point in the site, a visitor should be able to recognize:

```text
This is Pak Debate Forum.
```

without seeing the logo.

That is the standard for a successful visual system.

---

# 235. FINAL PRINCIPLE

The goal is not to make every page look identical.

The goal is to make every page look like it belongs to the same world.

```text
SAME DNA
DIFFERENT COMPOSITIONS
```

That is the foundation of the PDF design system.

# END OF GLOBAL DESIGN TOKENS & VISUAL SYSTEM
