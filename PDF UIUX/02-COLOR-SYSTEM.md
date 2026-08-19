# Pak Debate Forum — Color System & Lighting Specification

**Document:** `02-COLOR-SYSTEM.md`  
**Status:** Foundation / v0.1  
**Authority:** Color, contrast, surface, lighting, glow, and color-state specification  
**Parent specifications:** `00-DESIGN-MASTER.md`, `01-BRAND-IDENTITY.md`  
**Scope:** Global color tokens, semantic roles, surfaces, text hierarchy, borders, accents, gradients, lighting, glow, states, accessibility, responsive behavior, and implementation rules  

---

# 0. PURPOSE

This document defines the color language for the complete Pak Debate Forum website.

It converts the approved visual direction into a usable system that can be implemented consistently by a human designer or AI coding agent without inventing colors from page to page.

The system must support the entire PBF ecosystem:

- Home
- About
- Academy
- Programs
- Program Detail
- Coaches
- Events
- Event Detail
- Registration
- Resources
- Results
- Feedback
- Contact
- Admin

The color system must remain visually coherent whether a page is highly cinematic, data-heavy, form-heavy, editorial, or operational.

---

# 1. COLOR PHILOSOPHY

## 1.1 Primary rule

The visual foundation is **near-black first, warm light second, gold as a precision accent, and green as a restrained identity accent**.

The site must never become a wall of gold or green.

The premium feeling comes from contrast, restraint, lighting, material separation, and hierarchy.

## 1.2 Emotional role of each family

### Near-black

Represents:

- seriousness
- depth
- focus
- stage atmosphere
- institutional confidence
- cinematic contrast

### Warm white

Represents:

- clarity
- human communication
- readability
- editorial confidence

### Gold

Represents:

- achievement
- distinction
- focus
- recognition
- premium emphasis
- stage light

Gold should feel like a **light source or precious material**, not a paint bucket.

### Green

Represents:

- PBF identity
- Pakistan-related visual continuity
- growth
- community
- action
- positive progression

Green must remain secondary to the black foundation except in intentionally identity-forward areas.

---

# 2. MASTER PALETTE

These values are the initial canonical palette. They should be implemented as design tokens, not scattered literal hex values.

| Token | Hex | Primary purpose |
|---|---|---|
| `--pbf-black-950` | `#030404` | deepest page background / full-bleed cinematic field |
| `--pbf-black-900` | `#050505` | default page background |
| `--pbf-black-850` | `#090A09` | elevated dark region |
| `--pbf-black-800` | `#0D0E0D` | card / panel foundation |
| `--pbf-black-750` | `#121313` | elevated panel / interactive surface |
| `--pbf-black-700` | `#181A18` | tertiary surface / hover foundation |
| `--pbf-white-100` | `#F7F5EF` | primary warm text |
| `--pbf-white-200` | `#EEECE5` | secondary strong text |
| `--pbf-white-300` | `#D8D6CF` | supporting text |
| `--pbf-gray-400` | `#A8A7A1` | muted copy / metadata |
| `--pbf-gray-500` | `#7E7D78` | tertiary copy / disabled content |
| `--pbf-gold-100` | `#F1D48A` | highlight gold / strongest gold accent |
| `--pbf-gold-200` | `#E4BF62` | bright brand gold |
| `--pbf-gold-300` | `#C9A24A` | canonical gold |
| `--pbf-gold-400` | `#A97F2E` | shadowed metallic gold |
| `--pbf-gold-500` | `#76561E` | deep gold / dark edge |
| `--pbf-green-100` | `#4BAA85` | accessible bright green accent |
| `--pbf-green-200` | `#13815F` | active/brand green |
| `--pbf-green-300` | `#087A58` | core green accent |
| `--pbf-green-400` | `#064C39` | deep green |
| `--pbf-green-500` | `#032F25` | deepest green field |

These values are a controlled starting system. Any later brand-approved color changes must be applied by updating tokens rather than replacing individual values throughout the codebase.

---

# 3. SEMANTIC COLOR TOKENS

Do not design components directly around raw hex values where a semantic token can express the intent.

## 3.1 Background tokens

```css
--color-bg-page: var(--pbf-black-900);
--color-bg-deep: var(--pbf-black-950);
--color-bg-section: var(--pbf-black-850);
--color-bg-surface: var(--pbf-black-800);
--color-bg-surface-elevated: var(--pbf-black-750);
--color-bg-surface-hover: var(--pbf-black-700);
```

### Usage

`--color-bg-page` is the default page canvas.

`--color-bg-deep` is used for hero sections, major cinematic transitions, and final CTA areas where almost-black is desirable.

`--color-bg-section` separates major areas without creating obvious gray bands.

`--color-bg-surface` is the default foundation for cards and panels.

`--color-bg-surface-elevated` is reserved for elements that intentionally sit above nearby surfaces.

`--color-bg-surface-hover` is used for interactive elevation, not as a normal card background.

---

## 3.2 Text tokens

```css
--color-text-primary: var(--pbf-white-100);
--color-text-secondary: var(--pbf-white-200);
--color-text-supporting: var(--pbf-white-300);
--color-text-muted: var(--pbf-gray-400);
--color-text-tertiary: var(--pbf-gray-500);
--color-text-on-gold: var(--pbf-black-950);
--color-text-on-green: var(--pbf-white-100);
```

### Hierarchy

Primary text should carry the strongest visual contrast.

Secondary text should remain comfortably readable but visually subordinate.

Supporting text can be used for descriptions and lower-level content.

Muted and tertiary text are for metadata, timestamps, labels, helper text, and secondary information—not critical instructions.

---

## 3.3 Accent tokens

```css
--color-accent-gold: var(--pbf-gold-300);
--color-accent-gold-bright: var(--pbf-gold-200);
--color-accent-gold-highlight: var(--pbf-gold-100);
--color-accent-gold-deep: var(--pbf-gold-400);

--color-accent-green: var(--pbf-green-300);
--color-accent-green-active: var(--pbf-green-200);
--color-accent-green-deep: var(--pbf-green-400);
```

---

# 4. GOLD USAGE RULES

Gold is one of the strongest identity signals in the new visual language. Because of that, overuse will weaken the entire system.

## 4.1 Gold is for emphasis

Preferred uses:

- primary CTA highlights
- key CTA borders
- active navigation indicators
- important numerical statistics
- major labels
- small separators
- logo-related treatments
- podium lighting
- premium card details
- section ornaments
- selected icons
- progress indicators
- important results/achievements

Avoid using gold for:

- large paragraph blocks
- full-page backgrounds
- every heading
- every border
- every icon
- every hover state simultaneously
- large tables
- large forms

## 4.2 Gold proportion

As a default, most visible page pixels should remain neutral dark or warm white.

A rough visual target is:

- **70–85%** dark neutrals / atmospheric darks
- **10–20%** warm white / gray content
- **3–8%** gold
- **1–5%** green or green atmospheric accents

These are visual balancing guidelines, not mathematical rendering requirements.

A page may temporarily exceed them in a highly intentional hero or results moment, but the overall site should remain restrained.

## 4.3 Gold hierarchy

Use the gold family as a depth ladder:

`gold-100` → highlight / active light

`gold-200` → bright visible accent

`gold-300` → standard brand gold

`gold-400` → metallic shadow / darker edge

`gold-500` → subtle deep metallic boundary

Never use five gold values in one small component simply because they exist. Components should typically use one base gold plus one light or shadow companion when necessary.

---

# 5. GREEN USAGE RULES

Green is the secondary identity accent.

## 5.1 Green should communicate identity and progress

Preferred uses:

- Academy identity moments
- PBF identity accents
- selected active states
- success states
- progression systems
- training-path indicators
- secondary CTA systems
- subtle atmospheric lighting
- small graphic accents

## 5.2 Green should not compete with gold

Do not place saturated green and bright gold at equal visual intensity within the same small component unless the component is explicitly a PBF identity lockup.

A strong combination is:

**black surface + warm white text + gold primary accent + faint green atmosphere**.

Another strong combination is:

**black surface + green active state + restrained gold detail**.

Avoid:

**bright green button + bright gold border + bright green glow + gold text**.

That becomes visually noisy and starts looking like a gaming UI.

---

# 6. BLACK AND DARK-SURFACE SYSTEM

The site should never rely on one black value everywhere.

Layered black is essential for perceived depth.

Recommended surface relationship:

```text
PAGE
#050505

SECTION
#090A09

CARD
#0D0E0D

ELEVATED CARD
#121313

HOVER / ACTIVE SURFACE
#181A18
```

The differences should be subtle.

The user should generally perceive **depth**, not obvious gray boxes.

## 6.1 Surface separation

Prefer surface separation through a combination of:

1. small luminance differences
2. hairline borders
3. shadows
4. directional light
5. spacing

Do not make every card look like a floating rounded rectangle.

---

# 7. BORDERS

Borders should be understated.

## 7.1 Default border

```css
--color-border-subtle: rgba(247, 245, 239, 0.10);
```

## 7.2 Strong border

```css
--color-border-strong: rgba(247, 245, 239, 0.18);
```

## 7.3 Gold border

```css
--color-border-gold: rgba(201, 162, 74, 0.55);
```

## 7.4 Green border

```css
--color-border-green: rgba(8, 122, 88, 0.55);
```

Borders should generally be used to **define an edge**, not to decorate the entire interface.

Avoid gold borders around every card.

---

# 8. GRADIENT SYSTEM

Gradients are allowed, but they must feel like **light**, not like generic web gradients.

## 8.1 Background atmosphere

Preferred forms:

```css
radial-gradient(
  circle at 50% 0%,
  rgba(201,162,74,0.10),
  rgba(201,162,74,0) 42%
)
```

or:

```css
radial-gradient(
  circle at 20% 30%,
  rgba(8,122,88,0.08),
  transparent 38%
)
```

These must remain subtle.

## 8.2 Gold lighting gradient

Use gold gradients to simulate reflective material or directional light.

Do not use a simple left-to-right gold rainbow inside ordinary buttons.

## 8.3 Green atmospheric gradient

Green gradients should generally be:

- low opacity
- large radius
- blurred
- used behind content rather than directly under text

---

# 9. LIGHTING SYSTEM

Lighting is part of the brand, not merely a decorative effect.

## 9.1 Primary light

The signature light source is a **warm golden directional light from above or a diagonal upper angle**.

This echoes the stage/podium concept.

## 9.2 Secondary light

A faint green atmospheric fill may appear from a lower, side, or background direction.

It should provide identity without becoming a green spotlight.

## 9.3 Lighting hierarchy

Preferred order:

1. Warm white content light
2. Gold key light
3. Green ambient fill
4. Neutral shadow

## 9.4 Shadow color

Shadows should usually remain close to black rather than neutral gray.

Preferred:

```css
rgba(0,0,0,0.45)
```

through

```css
rgba(0,0,0,0.78)
```

depending on object depth and environment.

---

# 10. GLOW SYSTEM

Glow must be used sparingly.

A glow should imply one of three things:

- light
- focus
- active state

## 10.1 Gold glow

Typical uses:

- podium edge light
- hero spotlight
- active CTA halo
- important statistic emphasis
- highlighted result

Suggested starting range:

```css
box-shadow:
  0 0 24px rgba(201,162,74,0.18),
  0 0 80px rgba(201,162,74,0.08);
```

The exact blur values belong to component implementation and may vary.

## 10.2 Green glow

Green glows should be weaker than gold in most contexts.

Suggested starting range:

```css
box-shadow:
  0 0 24px rgba(8,122,88,0.14),
  0 0 72px rgba(8,122,88,0.06);
```

## 10.3 No-glow zones

Do not use glow on:

- body paragraphs
- every navigation item
- normal input fields
- every card
- every icon
- footer links

---

# 11. TEXT ON DARK BACKGROUNDS

The preferred reading relationship is:

**warm white primary → warm gray supporting → muted gray metadata**

Avoid pure `#FFFFFF` for most long-form copy because warm white is better aligned with the cinematic system and is softer against black.

Pure white may be used sparingly for exceptional high-contrast UI states or accessibility exceptions.

---

# 12. HEADLINE COLOR RULES

Large display headlines are normally warm white.

Use gold in headlines only when:

- a specific phrase is being intentionally emphasized
- the section is an achievement moment
- the title is extremely short
- the visual composition benefits from a single gold word/phrase

Do not make every heading gold.

For a hero such as:

> MASTER THE ART OF DEBATE.

The default treatment should be predominantly warm white, with optional gold emphasis on a single word or supporting line—not the entire headline.

---

# 13. CTA COLOR SYSTEM

The system needs more than one button treatment.

## 13.1 Primary CTA — Gold

Use for the most important conversion action on a page.

Example:

**Join the Academy**

Treatment:

- gold background or carefully defined gold surface
- dark text
- strong contrast
- restrained hover illumination

Do not use a full-blown gold gradient unless explicitly designed for the hero.

## 13.2 Secondary CTA — Dark/outlined

Use when a page has a primary gold CTA already.

Treatment:

- dark translucent surface
- subtle light border
- warm white text
- gold hover edge or text emphasis

## 13.3 Green CTA

Use only when green has a meaningful semantic or brand role.

Examples:

- Academy progression
- success-related action
- community/participation action

Do not use green simply to create variety.

---

# 14. LINK COLORS

Default links should not all be bright gold.

Normal body links:

- warm white or supporting white
- gold underline/hover emphasis

Important navigation links:

- warm white
- gold active state

Utility links may use muted gray until hovered.

---

# 15. FORM COLOR SYSTEM

Forms must remain readable and trustworthy.

### Input background

Use:

`--pbf-black-800`

or

`--pbf-black-750`

### Input border

Use subtle neutral border by default.

### Focus

Use a visible but controlled gold or green focus ring.

Recommended:

```css
outline: 2px solid rgba(228,191,98,0.80);
outline-offset: 2px;
```

### Filled/selected state

Increase surface contrast slightly; do not fill the entire control gold.

---

# 16. STATUS COLORS

Functional pages require semantic states that remain clear even within the luxury palette.

The following are semantic starting points:

| State | Color direction | Notes |
|---|---|---|
| Success | deep/medium green | pair with icon/text, not color alone |
| Warning | warm amber | distinguish from brand gold when needed |
| Error | muted red | reserved for errors, not decorative use |
| Info | cool muted blue | rare; use only where information semantics require it |
| Pending | gold/amber | avoid implying success |
| Active | green or gold depending on context | must follow component specification |
| Disabled | muted gray | clearly lower contrast while remaining understandable |

Semantic status colors are functional and should not be forced to match the decorative brand palette.

---

# 17. RESULT / ACHIEVEMENT COLOR LANGUAGE

Results pages may use stronger gold because gold carries an achievement meaning.

Preferred composition:

- black field
- large warm-white title
- gold statistic/numeric emphasis
- subtle green supporting accent
- gold highlight on selected result

Do not turn every achievement card into a gold card.

---

# 18. EVENT COLOR LANGUAGE

Events should feel more energetic than static organizational sections, but should still belong to the master system.

Use:

- stronger image contrast
- gold date or event-type emphasis
- green status where appropriate
- deeper backgrounds
- occasional atmospheric colored lighting

Avoid introducing bright multi-color event branding into the core PBF interface unless the actual event itself has an official identity that must be preserved.

Event-specific branding may appear inside a bounded event context.

---

# 19. PROGRAM / ACADEMY COLOR LANGUAGE

Academy sections may use slightly more green because green supports growth and progression.

Preferred relationship:

**black → warm white → gold → green progression accent**

Examples:

- gold: academy brand / CTA
- green: learning progress
- green: level progression
- gold: premium/featured program
- neutral: ordinary program metadata

This creates a subtle semantic language without creating two competing brands.

---

# 20. ADMIN COLOR RULES

The admin dashboard may be more functional and less cinematic.

It must still inherit the same base system.

Priorities for admin:

1. readability
2. information density
3. status recognition
4. focus/keyboard accessibility
5. efficient scanning
6. brand consistency

Do not force hero-style gold lighting or elaborate atmospheric effects into the admin dashboard merely to match the public website.

The admin can use simpler surfaces while preserving the same palette and typography hierarchy.

---

# 21. IMAGE COLOR TREATMENT

Photography and imagery should normally sit inside the same visual world rather than looking imported from a different site.

Preferred treatment:

- slightly desaturated environments
- rich blacks
- warm highlights
- controlled green accents when naturally present
- dark edge gradients when text overlays an image

Avoid heavy, destructive filters that make real people look artificially green or gold.

## 21.1 Image overlay

For text-over-image sections, use a dark overlay that preserves the photograph while providing reliable contrast.

The overlay may be:

```css
linear-gradient(
  180deg,
  rgba(3,4,4,0.10) 0%,
  rgba(3,4,4,0.45) 55%,
  rgba(3,4,4,0.88) 100%
)
```

The exact strength must respond to the image itself.

Never apply a fixed overlay blindly to every photograph.

---

# 22. COLOR + TEXTURE

The site may use very subtle texture/noise to prevent pure digital flatness.

Noise must:

- be extremely low opacity
- remain nearly invisible during normal viewing
- never interfere with text
- never be used to hide compression artifacts

Texture should enhance the material feeling of black surfaces rather than become a visible grain filter.

---

# 23. RESPONSIVE COLOR BEHAVIOR

Color itself generally remains consistent across breakpoints, but intensity may change.

## Desktop

Can support:

- more atmosphere
- more lighting depth
- larger glows
- stronger image treatment

## Tablet

Reduce unnecessary atmospheric complexity.

## Mobile

Prioritize:

- text contrast
- performance
- readability
- smaller glows
- less simultaneous atmospheric lighting

Do not make mobile visually brighter simply because elements are smaller.

---

# 24. ACCESSIBILITY / CONTRAST

No color system should depend on color alone to communicate meaning.

Examples:

- success state = icon + text + color
- error state = icon + text + color
- selected filter = color + shape/border/state change
- active navigation = color + underline/indicator/weight where appropriate

Use accessible contrast for all functional content.

Decorative low-contrast gold or gray may be used only for non-essential decoration.

Primary UI labels, form text, buttons, alerts, and navigation must remain readable without relying on a user's ability to distinguish subtle color differences.

---

# 25. REDUCED-MOTION COLOR RULES

When `prefers-reduced-motion` is enabled, color transitions may remain but should not flash or pulse continuously.

Disable or reduce:

- animated glow pulses
- moving spotlights
- color cycling
- continuous light sweeps

Static lighting may remain.

---

# 26. COLOR TRANSITION RULES

Color transitions should be subtle.

Typical interactive transition target:

**120–250ms** for ordinary UI.

Longer transitions belong to cinematic sections, not form controls.

Do not animate between unrelated hues just for visual spectacle.

Gold should transition to a brighter or darker gold.

Green should transition within the green family.

Neutral surfaces should move through nearby luminance values.

---

# 27. CSS TOKEN IMPLEMENTATION

Recommended global structure:

```css
:root {
  /* Brand neutrals */
  --pbf-black-950: #030404;
  --pbf-black-900: #050505;
  --pbf-black-850: #090A09;
  --pbf-black-800: #0D0E0D;
  --pbf-black-750: #121313;
  --pbf-black-700: #181A18;

  /* Warm whites / gray */
  --pbf-white-100: #F7F5EF;
  --pbf-white-200: #EEECE5;
  --pbf-white-300: #D8D6CF;
  --pbf-gray-400: #A8A7A1;
  --pbf-gray-500: #7E7D78;

  /* Gold */
  --pbf-gold-100: #F1D48A;
  --pbf-gold-200: #E4BF62;
  --pbf-gold-300: #C9A24A;
  --pbf-gold-400: #A97F2E;
  --pbf-gold-500: #76561E;

  /* Green */
  --pbf-green-100: #4BAA85;
  --pbf-green-200: #13815F;
  --pbf-green-300: #087A58;
  --pbf-green-400: #064C39;
  --pbf-green-500: #032F25;

  /* Semantic */
  --color-bg-page: var(--pbf-black-900);
  --color-bg-deep: var(--pbf-black-950);
  --color-bg-section: var(--pbf-black-850);
  --color-bg-surface: var(--pbf-black-800);
  --color-bg-surface-elevated: var(--pbf-black-750);
  --color-bg-surface-hover: var(--pbf-black-700);

  --color-text-primary: var(--pbf-white-100);
  --color-text-secondary: var(--pbf-white-200);
  --color-text-supporting: var(--pbf-white-300);
  --color-text-muted: var(--pbf-gray-400);
  --color-text-tertiary: var(--pbf-gray-500);

  --color-accent-gold: var(--pbf-gold-300);
  --color-accent-gold-bright: var(--pbf-gold-200);
  --color-accent-gold-highlight: var(--pbf-gold-100);
  --color-accent-gold-deep: var(--pbf-gold-400);

  --color-accent-green: var(--pbf-green-300);
  --color-accent-green-active: var(--pbf-green-200);
  --color-accent-green-deep: var(--pbf-green-400);

  --color-border-subtle: rgba(247,245,239,0.10);
  --color-border-strong: rgba(247,245,239,0.18);
  --color-border-gold: rgba(201,162,74,0.55);
  --color-border-green: rgba(8,122,88,0.55);
}
```

The implementation agent should import or centralize these tokens rather than scattering magic values through component files.

---

# 28. COMPONENT COLOR DECISION MATRIX

| Component | Background | Text | Main accent | Secondary accent |
|---|---|---|---|---|
| Navbar | deep black / transparent | warm white | gold active | green optional |
| Hero | deepest black | warm white | gold light | green atmosphere |
| Primary CTA | gold | near-black | bright gold hover | none |
| Secondary CTA | dark surface | warm white | gold border | none |
| Program card | surface | warm white | gold/green depending semantics | muted gray |
| Event card | surface | warm white | gold date/type | green status |
| Result card | dark | warm white | gold achievement | green supporting |
| Form | surface | warm white | gold focus | green success |
| Footer | deepest black | muted/warm white | gold links | green identity detail |
| Admin table | dark surface | warm white | restrained gold/green status | semantic colors |

---

# 29. COMMON COLOR MISTAKES TO PREVENT

The implementation agent must actively avoid these:

### Mistake 1 — Gold everywhere

Makes the entire site visually flat and cheap.

### Mistake 2 — Green as a second dominant background

Makes the visual identity split into two competing brands.

### Mistake 3 — Pure black and pure white only

Removes material depth.

### Mistake 4 — Generic purple/blue gradients

Breaks brand coherence.

### Mistake 5 — Glow on every interactive object

Removes the meaning of glow.

### Mistake 6 — Low-contrast gray text for critical content

Damages accessibility.

### Mistake 7 — Different colors for every page family

Destroys the sense of one PBF ecosystem.

### Mistake 8 — Hardcoded color values inside random components

Makes future brand refinement expensive and inconsistent.

---

# 30. PAGE-FAMILY COLOR EMPHASIS

The base palette is global, but emphasis varies by page family.

## PBF institutional pages

Black + warm white + restrained gold.

## Academy pages

Black + warm white + gold + slightly more green progression/identity.

## Programs

Black/surface hierarchy + gold CTA + green level/progression semantics.

## Events

Black + stronger image contrast + gold event emphasis + green status where useful.

## Results

Black + gold achievement emphasis.

## Resources

Black/surface + warm white + restrained green/gold classification.

## Feedback / Contact

Neutral dark functional interface + gold/green focus and success states.

## Registration

Calm dark surfaces, strong warm-white readability, gold primary action, unmistakable semantic states.

## Admin

Functional dark system with lower decorative intensity.

---

# 31. THE GOLDEN LIGHT RULE

A recurring signature motif may be used throughout the public experience:

> **A narrow warm-gold light appearing from above or from a diagonal angle.**

This motif connects:

- podium
- hero
- academy introduction
- results
- final CTA

It should feel like stage lighting.

It should not become a generic page decoration repeated identically in every section.

Each use should have a slightly different spatial purpose.

---

# 32. FINAL COLOR PRINCIPLES

1. **Black is the canvas.**
2. **Warm white is the voice.**
3. **Gold is the spotlight.**
4. **Green is the identity/progression accent.**
5. **Lighting creates depth.**
6. **Contrast creates hierarchy.**
7. **Restraint creates premium quality.**
8. **Semantic states must remain accessible.**
9. **Page families may emphasize different meanings but never become separate brands.**
10. **Color tokens belong in the design system, not inside individual page improvisations.**

---

# 33. IMPLEMENTATION CHECKLIST

Before declaring the color system implemented, verify:

- [ ] All primary colors exist as centralized tokens.
- [ ] Components use semantic tokens instead of scattered raw hex values where practical.
- [ ] Gold is not overused.
- [ ] Green remains a secondary accent except where deliberately emphasized.
- [ ] Major text remains readable on all surfaces.
- [ ] Focus states are visible.
- [ ] Error/success/warning states use semantic cues beyond color.
- [ ] Images receive adaptive overlays rather than one universal overlay.
- [ ] Decorative glow is restrained.
- [ ] Mobile retains the same identity with lower visual complexity.
- [ ] Admin UI remains functional rather than overly cinematic.
- [ ] No unapproved third-party color family has entered the interface.
- [ ] No page introduces its own unrelated palette.

---

# 34. RELATIONSHIP TO NEXT DOCUMENTS

This document defines **color and lighting**, not typography, spacing, components, or motion.

Next:

- `03-TYPOGRAPHY.md` → font families, weights, type scale, line height, tracking, text hierarchy, responsive typography, and loading/fallback rules.
- `04-GRID-SPACING-LAYOUT.md` → container architecture, grids, gutters, section rhythm, breakpoints, alignment, and responsive geometry.
- `05-COMPONENT-SYSTEM.md` → buttons, cards, navigation, forms, data displays, and reusable UI anatomy.
- `06-IMAGERY-ASSET-SYSTEM.md` → photography, generated imagery, podium assets, background art, cropping, art direction, and asset variants.
- `08-MOTION-ANIMATION.md` → animation timing, easing, choreography, interaction, and scroll behavior.
- `09-3D-PODIUM.md` → the podium as a dedicated interactive hero asset/system.
