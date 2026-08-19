# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 22 — DESIGN TOKENS SPECIFICATION

Status: Master numerical and semantic design-token contract.

Purpose:
Provide the concrete values and naming rules that sit underneath the PDF visual system.

This document is the bridge between:
- visual direction
- component specifications
- page specifications
- actual CSS/design-system implementation

IMPORTANT:
Where an exact brand value has already been approved elsewhere, that approved value takes precedence.
Where this document marks a value as `PROVISIONAL`, the coding agent must not treat it as immutable brand truth until approved.

---

# 0. TOKEN PHILOSOPHY

The website should not be built from hundreds of unrelated raw values.

Instead:

```text
DESIGN DECISION
↓
SEMANTIC TOKEN
↓
COMPONENT
↓
PAGE
```

Example:

```text
PDF gold
→ color.accent.primary
→ Button / Badge / Link / Podium lighting
→ pages
```

---

# 1. TOKEN CATEGORIES

The token system contains:

```text
color
typography
spacing
sizing
layout
breakpoints
radius
border
shadow
opacity
z-index
motion
easing
3D
image
container
accessibility
```

---

# 2. TOKEN NAMING

Use semantic names.

Preferred:

```text
color.background.canvas
color.text.primary
color.accent.primary
space.6
radius.md
motion.duration.fast
```

Avoid names based on a single visual implementation:

```text
goldButton
homepageBlack
eventCardPadding
```

---

# 3. RAW VS SEMANTIC TOKENS

Where possible, maintain two layers:

```text
primitive tokens
semantic tokens
```

Primitive:

```text
black-950
gold-500
white-100
```

Semantic:

```text
background.canvas
background.surface
text.primary
accent.primary
```

Components should normally consume semantic tokens.

---

# 4. COLOR SYSTEM — PHILOSOPHY

PDF's visual language is:

```text
deep black
charcoal
warm near-white
controlled gold
```

The palette should feel premium because of contrast and restraint, not because every surface is pure black or every accent is gold.

---

# 5. COLOR — CANVAS

Suggested semantic role:

```text
color.background.canvas
```

Purpose:
Primary page background.

Target:
Near-black.

Exact production value:
`PROVISIONAL — confirm against approved brand visual/token source.`

---

# 6. COLOR — SURFACE

```text
color.background.surface
```

Purpose:
Cards, panels, navigation surfaces.

Should be subtly lighter or tonally distinct from canvas.

---

# 7. COLOR — SURFACE ELEVATED

```text
color.background.surfaceElevated
```

Purpose:
Modals, menus, elevated panels.

---

# 8. COLOR — SURFACE MUTED

```text
color.background.surfaceMuted
```

Purpose:
Secondary areas and quiet grouping.

---

# 9. COLOR — TEXT PRIMARY

```text
color.text.primary
```

Warm near-white rather than harsh pure white where appropriate.

---

# 10. COLOR — TEXT SECONDARY

```text
color.text.secondary
```

For supporting copy.

Must maintain readable contrast.

---

# 11. COLOR — TEXT MUTED

```text
color.text.muted
```

For low-priority metadata.

Never use for essential information if contrast becomes insufficient.

---

# 12. COLOR — TEXT ON ACCENT

```text
color.text.onAccent
```

Text displayed on the approved gold/accent surface.

---

# 13. COLOR — GOLD PRIMITIVE

Suggested:

```text
color.gold.500
```

This is the core PDF accent family.

Exact hexadecimal value:
`PROVISIONAL — derive from approved logo/brand source rather than guessing.`

---

# 14. GOLD SCALE

Reserve a small controlled scale:

```text
gold.300
gold.400
gold.500
gold.600
gold.700
```

Do not create new gold values ad hoc.

---

# 15. GOLD SEMANTIC TOKENS

Potential:

```text
color.accent.primary
color.accent.hover
color.accent.active
color.accent.subtle
color.accent.border
color.accent.glow
```

---

# 16. GOLD USAGE

Gold should primarily indicate:

```text
action
active state
selected state
important accent
brand highlight
controlled lighting
```

---

# 17. GOLD RESTRICTION

Avoid:

```text
gold body paragraphs
gold backgrounds everywhere
gold borders on every card
gold on every heading
```

---

# 18. STATUS COLORS

If functional statuses exist:

```text
color.status.success
color.status.warning
color.status.error
color.status.info
```

These should be used semantically, not as decorative alternatives to gold.

---

# 19. COLOR OPACITY

Do not repeatedly invent alpha values.

Create semantic transparency tokens when recurring.

Examples:

```text
color.overlay.scrim
color.border.subtle
color.accent.glowSoft
```

---

# 20. TYPOGRAPHY — PRINCIPLE

PDF typography should feel:

```text
editorial
confident
precise
premium
readable
```

Use a limited font family count.

---

# 21. FONT FAMILY COUNT

Target:

```text
1 primary display/body family
+ optional dedicated accent/display family only if already approved
```

Do not introduce additional fonts for individual pages.

---

# 22. FONT SOURCE

The exact production font must follow the approved typography/brand source.

If not yet approved:

`FONT DECISION REQUIRED`

Do not let the coding AI randomly choose a Google Font because it "looks premium."

---

# 23. FONT WEIGHTS

Use only weights actually available in the chosen font.

Suggested semantic roles:

```text
regular
medium
semibold
bold
```

Avoid loading unnecessary weights.

---

# 24. TYPE SCALE

Use semantic size tokens rather than component-specific pixel values.

Suggested scale:

```text
display-xl
display-lg
display-md
h1
h2
h3
h4
body-lg
body
body-sm
caption
label
eyebrow
```

Exact sizes are implementation tokens and may be tuned during visual QA.

---

# 25. PROVISIONAL DESKTOP TYPE SCALE

Initial working values:

```text
display-xl: 72px
display-lg: 60px
display-md: 48px
h1: 52px
h2: 40px
h3: 32px
h4: 24px
body-lg: 20px
body: 16px
body-sm: 14px
caption: 12px
label: 14px
eyebrow: 12px
```

These are a starting system, not permission to override approved visual references.

---

# 26. MOBILE TYPE SCALE

Initial working values:

```text
display-xl: 48px
display-lg: 42px
display-md: 36px
h1: 38px
h2: 32px
h3: 26px
h4: 21px
body-lg: 18px
body: 16px
body-sm: 14px
caption: 12px
label: 14px
eyebrow: 11px
```

Hero typography may use controlled fluid scaling.

---

# 27. FLUID TYPOGRAPHY

For major display text, use fluid scaling where useful.

Concept:

```css
font-size: clamp(min, fluid, max);
```

Do not make every text token fluid.

---

# 28. LINE HEIGHT

Suggested semantic ranges:

```text
display: 0.95–1.05
heading: 1.05–1.15
body: 1.5–1.7
caption: 1.3–1.5
```

---

# 29. LETTER SPACING

Display typography generally uses tight tracking.

Eyebrows/labels may use increased tracking.

Body text should remain comfortable.

---

# 30. TYPE COLOR HIERARCHY

Default:

```text
primary → near-white
secondary → muted warm gray
accent → approved gold
```

---

# 31. SPACING SYSTEM

Use a consistent base spacing unit.

Recommended working base:

```text
4px
```

---

# 32. SPACING TOKENS

Initial scale:

```text
space.1  = 4px
space.2  = 8px
space.3  = 12px
space.4  = 16px
space.5  = 20px
space.6  = 24px
space.8  = 32px
space.10 = 40px
space.12 = 48px
space.16 = 64px
space.20 = 80px
space.24 = 96px
space.32 = 128px
space.40 = 160px
space.48 = 192px
```

---

# 33. SPACING RULE

Use the nearest existing token before introducing a new value.

---

# 34. COMPONENT INTERNAL SPACING

Typical:

```text
small controls: 8–16px
cards: 16–32px
large feature cards: 24–40px
```

Exact values depend on component size.

---

# 35. SECTION SPACING

Desktop working ranges:

```text
compact section: 64–80px
normal section: 96px
large section: 128px
hero transition: 128–192px
```

Mobile should reduce these intentionally rather than simply applying desktop values.

---

# 36. PAGE GUTTER

Desktop:

```text
24–48px
```

depending on viewport.

Mobile:

```text
20–24px
```

Do not let content touch the viewport edge.

---

# 37. CONTAINER WIDTH

Recommended working maximum:

```text
1200–1280px
```

Exact production width should be standardized once the actual layout is implemented.

---

# 38. WIDE VISUAL CONTAINER

Some visual sections may use:

```text
1400–1600px
```

while text remains inside the normal reading container.

---

# 39. READING WIDTH

Long-form content should generally remain around:

```text
60–75ch
```

depending on typography.

---

# 40. GRID GUTTER

Working:

```text
desktop: 24–32px
tablet: 20–24px
mobile: 16–20px
```

---

# 41. RADIUS SYSTEM

PDF should use restrained geometry.

Suggested:

```text
radius.none = 0
radius.sm   = 6px
radius.md   = 10px
radius.lg   = 16px
radius.xl   = 24px
radius.pill = 999px
```

---

# 42. RADIUS RULE

Do not mix rounded cards, sharp cards, and pill shapes randomly.

Each has a semantic role.

---

# 43. CARD RADIUS

Default:

```text
radius.lg
```

or approved design value.

---

# 44. BUTTON RADIUS

Use:

```text
radius.md
```

unless the approved button design specifies another geometry.

---

# 45. BADGE RADIUS

Use:

```text
radius.pill
```

for compact semantic badges.

---

# 46. BORDER SYSTEM

Suggested:

```text
border.width.thin = 1px
border.width.medium = 2px
```

Most surfaces should use the thin border.

---

# 47. BORDER COLORS

Semantic:

```text
color.border.subtle
color.border.default
color.border.strong
color.border.accent
```

---

# 48. SHADOW SYSTEM

PDF should avoid generic "floating SaaS" shadows.

Suggested levels:

```text
shadow.none
shadow.sm
shadow.md
shadow.lg
shadow.modal
```

---

# 49. SHADOW PHILOSOPHY

Dark interfaces often benefit more from:

```text
tonal contrast
border
light
```

than huge black shadows.

---

# 50. GLOW SYSTEM

Gold glow should be rare.

Semantic:

```text
glow.accent.soft
glow.accent.medium
glow.accent.strong
```

---

# 51. GLOW USAGE

Good:

```text
podium light
hero accent
active control
selected element
```

Bad:

```text
every button
every card
every heading
```

---

# 52. OPACITY SYSTEM

Useful semantic values:

```text
opacity.disabled
opacity.muted
opacity.overlay
opacity.decorative
```

Avoid arbitrary opacity values scattered through CSS.

---

# 53. Z-INDEX SYSTEM

Use named layers.

Suggested:

```text
z.base
z.content
z.header
z.dropdown
z.modal
z.toast
```

Example working values:

```text
base: 0
content: 10
header: 100
dropdown: 200
modal: 500
toast: 700
```

Do not create random `z-index: 999999`.

---

# 54. BREAKPOINT SYSTEM

Use a small number of intentional responsive ranges.

Working reference:

```text
mobile: < 640px
tablet: 640–1023px
desktop: 1024–1439px
wide: 1440px+
```

These may be tuned to the actual implementation.

---

# 55. BREAKPOINT RULE

Components should respond to available space, not merely device labels.

---

# 56. MOBILE-FIRST

Prefer mobile-first CSS where practical.

---

# 57. MOTION SYSTEM

Motion must be consistent across the site.

---

# 58. MOTION DURATIONS

Suggested:

```text
instant: 100ms
fast: 160ms
normal: 240ms
medium: 360ms
slow: 520ms
cinematic: 800–1200ms
```

Cinematic motion is reserved for hero/3D entrances and major visual transitions.

---

# 59. MOTION EASINGS

Suggested semantic set:

```text
ease.standard
ease.enter
ease.exit
ease.emphasis
ease.cinematic
```

---

# 60. MOTION PRINCIPLE

Use:

```text
fast for controls
normal for components
medium for section reveals
cinematic for major visual objects
```

---

# 61. HOVER MOTION

Typical:

```text
160–240ms
```

---

# 62. MENU MOTION

Typical:

```text
240–360ms
```

---

# 63. SECTION REVEAL

Typical:

```text
360–600ms
```

---

# 64. PODIUM MOTION

Follow:

`18-3D-PODIUM-SPEC.md`

Do not duplicate numerical 3D behavior here if the dedicated specification contains a more precise value.

---

# 65. REDUCED MOTION

When:

```text
prefers-reduced-motion: reduce
```

then:

- remove non-essential parallax
- remove decorative continuous motion
- shorten transitions
- avoid large transform travel
- keep state changes understandable

---

# 66. INTERACTION TRANSFORMS

Typical hover movement:

```text
2–6px
```

Avoid dramatic movement.

---

# 67. IMAGE SCALE

Typical hover image scale:

```text
1.02–1.05
```

---

# 68. CARD LIFT

Typical:

```text
translateY(-2px to -6px)
```

---

# 69. SCROLL PARALLAX

Parallax should be subtle.

Typical effective movement:

```text
small percentage of scroll distance
```

Do not create nausea-inducing movement.

---

# 70. 3D DEPTH TOKENS

Semantic concepts:

```text
podium.depth.near
podium.depth.mid
podium.depth.far
```

Actual values follow the dedicated 3D implementation.

---

# 71. 3D LIGHTING TOKENS

Semantic:

```text
light.key
light.fill
light.rim
light.accent
```

The signature gold spotlight is the primary visual light.

---

# 72. 3D MATERIAL TOKENS

Podium:

```text
material.blackWood
material.darkMetal
material.goldPlaque
```

Exact material parameters follow the 3D specification.

---

# 73. IMAGE RATIO TOKENS

Suggested:

```text
ratio.square = 1 / 1
ratio.landscape = 16 / 9
ratio.portrait = 4 / 5
ratio.hero = 16 / 9
ratio.event = 16 / 10
ratio.avatar = 1 / 1
```

Exact ratios may be overridden by approved assets.

---

# 74. OBJECT POSITION

Image focal points should be semantic where possible:

```text
center
top
bottom
left
right
```

Avoid arbitrary percentage values unless required by the asset.

---

# 75. OVERLAY TOKENS

Hero images may use:

```text
overlay.dark
overlay.gradient
overlay.accent
```

The purpose is readability, not decoration.

---

# 76. BACKDROP BLUR

Use sparingly.

Possible semantic:

```text
blur.nav
blur.modal
```

Avoid making the entire site permanently blurred.

---

# 77. BORDER RADIUS + MOTION

Rounded surfaces should animate without changing radius unexpectedly.

---

# 78. FOCUS RING

Create one shared focus token.

Concept:

```text
focus.color
focus.width
focus.offset
```

Do not remove focus outlines merely for aesthetics.

---

# 79. TOUCH TARGET

Interactive controls should target at least approximately:

```text
44 × 44px
```

where practical.

---

# 80. ICON SIZE TOKENS

Suggested:

```text
icon.xs = 12px
icon.sm = 16px
icon.md = 20px
icon.lg = 24px
icon.xl = 32px
```

---

# 81. ICON STROKE

The icon family must use consistent stroke/fill conventions.

---

# 82. LOGO SIZE

Logo dimensions should be controlled by the brand/asset specification.

Do not manually resize the logo differently on every page.

---

# 83. NAV HEIGHT

Desktop and mobile header heights should be global tokens.

Working starting point:

```text
desktop: 72–88px
mobile: 64–76px
```

Tune against the approved header composition.

---

# 84. FORM CONTROL HEIGHT

Working:

```text
44–52px
```

depending on control size.

---

# 85. CARD MINIMUM HEIGHT

Avoid fixed card heights unless the design specifically requires them.

Prefer content-driven height.

---

# 86. BUTTON MINIMUM HEIGHT

Working:

```text
44px+
```

for accessible touch targets.

---

# 87. TEXT TRUNCATION

Do not truncate primary information unless explicitly required.

---

# 88. TRANSITION PROPERTY RULE

Animate only properties that support the interaction.

Prefer:

```text
transform
opacity
color
background-color
border-color
box-shadow
clip-path
```

Avoid expensive layout animation where possible.

---

# 89. PERFORMANCE TOKEN RULE

Do not turn every CSS property into a transition.

---

# 90. CSS TOKEN IMPLEMENTATION

Recommended architecture:

```text
tokens.css
global.css
components/
pages/
```

Exact project architecture follows the implementation repository.

---

# 91. CSS VARIABLES

Semantic tokens should be exposed as CSS custom properties where appropriate.

Concept:

```css
--color-bg-canvas
--color-text-primary
--color-accent-primary
--space-4
--radius-md
--motion-duration-fast
```

---

# 92. DARK THEME

PDF is primarily dark.

Do not create a light theme unless the product explicitly requires one.

---

# 93. GOLD ACCESSIBILITY

Gold text must be checked against its actual background.

A gold visual accent is not automatically a readable text color.

---

# 94. RESPONSIVE TOKEN OVERRIDES

Only tokens that genuinely need responsive changes should change.

Good:

```text
hero typography
section spacing
page gutters
navigation height
```

Avoid changing every token at every breakpoint.

---

# 95. CONTAINER TOKEN EXAMPLE

Conceptual:

```text
container.sm
container.md
container.lg
container.xl
```

---

# 96. CONTENT ALIGNMENT

Default:

```text
left aligned
```

Centered composition should be intentional.

---

# 97. GRID COLUMN TOKENS

Components may use:

```text
grid.1
grid.2
grid.3
grid.4
```

depending on available width.

Do not hard-code a 4-column layout when the content requires 3.

---

# 98. STACK GAP TOKENS

For vertical/horizontal flex layouts:

use spacing tokens.

---

# 99. TOKEN DOCUMENTATION

Every non-obvious token should include:

```text
purpose
semantic role
default value
responsive behavior
usage restriction
```

---

# 100. TOKEN CHANGE RULE

If a value is changed globally:

review every component that consumes it.

---

# 101. BRAND VALUE LOCK

Once the exact approved:
- gold
- fonts
- radii
- container width
- typography scale

are confirmed, mark them:

`LOCKED`

The AI should not change locked values without explicit approval.

---

# 102. PROVISIONAL VALUE RULE

Values marked:

`PROVISIONAL`

may be tuned during implementation.

However, tuning must remain consistent with the visual direction.

---

# 103. VISUAL QA LOOP

Token tuning follows:

```text
implement
→ render
→ compare with reference
→ identify mismatch
→ change token
→ re-render
→ verify other pages
```

---

# 104. TOKEN QA

Check:

```text
contrast
spacing rhythm
typography hierarchy
mobile density
desktop density
gold consistency
motion consistency
component consistency
```

---

# 105. AI IMPLEMENTATION RULE

Before writing a raw CSS value, ask:

```text
Is this a design token?
Does an existing token already represent this?
Would this value recur?
```

If yes, use/create the appropriate token rather than a one-off value.

---

# 106. AI IMPLEMENTATION RULE — NO MAGIC NUMBERS

Avoid unexplained values such as:

```text
margin-top: 37px;
left: 13px;
z-index: 99999;
```

unless they are genuinely required by a specific asset/composition and documented.

---

# 107. AI IMPLEMENTATION RULE — VISUAL MATCHING

A screenshot mismatch should be solved at the lowest correct layer.

Example:

If every card is too rounded:
change the card radius token.

Do not override 14 cards individually.

---

# 108. AI IMPLEMENTATION RULE — MOBILE

If mobile spacing is wrong across the site:
change the responsive token.

Do not patch every page separately.

---

# 109. AI IMPLEMENTATION RULE — COMPONENT EXCEPTIONS

An exception is acceptable when the composition is genuinely unique.

Document it.

---

# 110. TOKEN INVENTORY

Core token families:

```text
color.*
font.*
type.*
space.*
size.*
container.*
grid.*
radius.*
border.*
shadow.*
glow.*
opacity.*
z.*
motion.*
ease.*
breakpoint.*
ratio.*
icon.*
focus.*
podium.*
```

---

# 111. FINAL TOKEN PRINCIPLE

The design-token layer is the numerical source of truth beneath the visual system.

The coding AI should not have to repeatedly guess:

```text
How much spacing?
Which black?
Which gold?
Which radius?
Which font size?
How fast?
How far?
How much glow?
How much movement?
How wide?
```

The answer should exist here or in the dedicated specification that owns the specialized behavior.

Where a value is not yet approved, the token must clearly say:

`PROVISIONAL`

rather than pretending an arbitrary value is final.

# END OF DESIGN TOKENS SPECIFICATION
