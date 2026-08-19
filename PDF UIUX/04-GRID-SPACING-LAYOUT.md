# Pak Debate Forum — Grid, Spacing & Layout System

**Document:** `04-GRID-SPACING-LAYOUT.md`  
**Status:** Foundation / v0.1  
**Authority:** Global spatial system, responsive composition, container behavior, grid, spacing, alignment, section geometry, and layout contracts  
**Parent specifications:** `00-DESIGN-MASTER.md`, `01-BRAND-IDENTITY.md`, `02-COLOR-SYSTEM.md`, `03-TYPOGRAPHY.md`  
**Scope:** Viewport rules, containers, breakpoints, grid, gutters, spacing tokens, section rhythm, alignment, page shells, hero geometry, cards, full-bleed content, responsive transformations, overlays, fixed/sticky UI, dynamic-content constraints, and layout QA

---

# 0. PURPOSE

The Pak Debate Forum website should feel spatially deliberate.

The visual quality is not created only by typography, color, imagery, or animation. It depends heavily on how much room each object receives, where visual mass sits inside the viewport, where text starts and stops, how sections breathe, and how the same system behaves across screen sizes.

This document defines the **spatial grammar** of the website.

The objective is that:

- every page feels related;
- every section uses predictable alignment;
- content can expand without breaking the composition;
- the cinematic hero remains intentional at large sizes;
- functional pages remain usable when data becomes dense;
- mobile layouts are designed deliberately instead of merely compressed;
- AI-generated components do not invent arbitrary margins, widths, or grids;
- responsive changes preserve hierarchy rather than preserving desktop geometry at all costs.

This document is a system, not a collection of isolated pixel values.

Where an exact value is not required, the implementation should use the defined token scale and compositional rules instead of inventing one-off spacing.

---

# 1. SPATIAL NORTH STAR

The site's spatial language should communicate:

> **Confidence through restraint.**

The layout should provide enough negative space for the premium visual identity to breathe, while maintaining enough density for real operational content such as programs, events, registrations, resources, and admin interfaces.

The system therefore has two intentionally different spatial modes:

## 1.1 Cinematic mode

Used primarily for:

- Home hero
- Academy hero
- Major editorial statements
- Large campaign sections
- Full-width imagery
- Podium/3D scenes
- Major results statements
- Final conversion sections

Characteristics:

- generous whitespace;
- asymmetric visual mass where appropriate;
- large type;
- deep vertical staging;
- overlapping layers;
- controlled empty space;
- full-bleed imagery or atmospheric backgrounds;
- strong focal point.

## 1.2 Functional mode

Used primarily for:

- Programs catalogue
- Program Detail
- Events catalogue
- Event Detail
- Registration
- Resources
- Feedback
- Contact
- Results data
- Admin

Characteristics:

- stronger grid discipline;
- smaller content widths;
- more predictable columns;
- higher information density;
- clearer grouping;
- persistent alignment;
- reduced decorative overlap.

The two modes are visually related but should not be forced into the same density.

---

# 2. VIEWPORT MODEL

The application should treat the browser viewport as a composition area with three conceptual zones:

```text
┌────────────────────────────────────────────────────┐
│ GLOBAL / NAVIGATION SAFE AREA                      │
├────────────────────────────────────────────────────┤
│                                                    │
│        PRIMARY CONTENT COMPOSITION AREA            │
│                                                    │
├────────────────────────────────────────────────────┤
│ SECTION / FOOTER / CONVERSION AREA                 │
└────────────────────────────────────────────────────┘
```

The actual heights are content-dependent, but the composition must account for:

- browser chrome;
- sticky navigation where present;
- device safe areas on mobile;
- fixed/overlay controls;
- large hero objects;
- accessibility zoom;
- dynamic content length.

Never use `100vh` as the only definition of a mobile hero height. Mobile browser UI makes viewport units unstable across devices.

Prefer modern viewport units such as `svh`, `lvh`, and `dvh` where browser support strategy allows, with a safe fallback.

---

# 3. BREAKPOINT SYSTEM

The site should use a small number of meaningful responsive modes rather than many arbitrary breakpoints.

## 3.1 Primary breakpoints

### Mobile Compact

`< 390px`

Typical examples:

- smaller iPhones;
- narrow Android devices;
- constrained embedded browser widths.

### Mobile

`390px–767px`

Primary small-screen composition.

### Tablet

`768px–1023px`

Touch-first medium layouts.

### Desktop

`1024px–1439px`

Standard desktop/laptop layouts.

### Wide Desktop

`1440px+`

Large cinematic layouts.

These are **design modes**, not requirements that every component must change at every breakpoint.

A component should only change when its content or composition requires it.

## 3.2 Very-wide display behavior

For widths above approximately `1920px`, the website should not simply continue expanding content indefinitely.

Primary content should remain bounded by the master container system.

Atmospheric backgrounds, light fields, imagery, and selected 3D scenes may extend beyond the content container.

---

# 4. MASTER CONTAINER SYSTEM

The website should use a consistent horizontal content container.

## 4.1 Concept

```text
viewport
│
├── outer breathing space
│
│   ┌──────────── MASTER CONTAINER ─────────────┐
│   │                                            │
│   │              content / grid               │
│   │                                            │
│   └────────────────────────────────────────────┘
│
└── outer breathing space
```

The container is not merely a CSS utility. It is a global alignment contract.

## 4.2 Maximum content width

Recommended global max-width:

`1440px`

The primary shell may use a slightly narrower effective content width for text-heavy sections.

Suggested conceptual tiers:

- **Global shell max:** `1440px`
- **Editorial max:** `1240px`
- **Reading max:** `760–820px`
- **Form max:** `680–760px`
- **Data/table max:** full functional container width

These values are starting tokens and should remain centrally defined.

Do not create independent arbitrary `max-width` values across sections without a documented reason.

## 4.3 Outer horizontal padding

Recommended baseline:

### Mobile Compact
`20px`

### Mobile
`20–24px`

### Tablet
`32–40px`

### Desktop
`40–64px`

### Wide Desktop
`56–80px`

The exact implementation should use fluid interpolation when useful rather than abrupt jumps.

For example, a CSS `clamp()` can be used for hero padding and major page gutters.

---

# 5. CONTENT WIDTH TIERS

Not all content should occupy the same width.

## 5.1 Full visual width

Used for:

- backgrounds;
- hero imagery;
- podium scenes;
- architectural transitions;
- full-width CTA backgrounds;
- atmospheric effects.

These may span the viewport.

## 5.2 Section container width

Used for:

- section headings;
- cards;
- feature blocks;
- program grids;
- event grids;
- team grids.

Use the master container.

## 5.3 Editorial width

Used for:

- story copy;
- academy philosophy;
- about-page narrative;
- results explanations;
- testimonial text.

Long paragraphs should not stretch across the entire desktop viewport.

## 5.4 Reading width

Used for:

- FAQs;
- terms/rules;
- detailed explanatory content;
- registration instructions;
- resource descriptions.

The goal is readable line length, not visual maximalism.

---

# 6. GLOBAL GRID

The website should use a **12-column conceptual grid** on desktop.

The exact CSS implementation may use grid or flexbox, but all macro layouts should be expressible in terms of the 12-column system.

## 6.1 Desktop conceptual grid

```text
01 02 03 04 05 06 07 08 09 10 11 12
│  │  │  │  │  │  │  │  │  │  │  │
```

Typical allocations:

### Text + visual

`5 columns + 7 columns`

### Balanced two-column

`6 + 6`

### Text-dominant editorial

`4 + 8`

### Visual-dominant editorial

`7 + 5`

### Three-card grid

`4 + 4 + 4`

### Four-card grid

`3 + 3 + 3 + 3`

These are composition patterns, not mandatory templates for every section.

## 6.2 Tablet grid

Prefer a 6-column conceptual system.

Typical allocations:

- `3 + 3`
- `2 + 4`
- `4 + 2`
- full-width `6`

## 6.3 Mobile grid

Use a single primary column.

Internal two-column layouts may exist only when both items remain comfortably readable.

The default mobile assumption is:

`1 full-width column`

---

# 7. GRID GUTTERS

Grid gaps should be tokenized.

Suggested conceptual gutter scale:

- `xs` — 8px
- `sm` — 12px
- `md` — 16px
- `lg` — 24px
- `xl` — 32px
- `2xl` — 40px
- `3xl` — 56px
- `4xl` — 72px

Large editorial layouts may use larger separation through explicit section spacing rather than extreme internal grid gaps.

Avoid random values such as `27px`, `43px`, or `61px` unless they are justified by a specific visual object.

---

# 8. SPACING TOKEN SYSTEM

A predictable spacing scale is mandatory.

Recommended base unit:

`4px`

Primary tokens:

| Token | Value | Typical use |
|---|---:|---|
| `space-1` | 4px | icon/text micro-gap |
| `space-2` | 8px | compact internal gap |
| `space-3` | 12px | labels and small controls |
| `space-4` | 16px | standard component gap |
| `space-5` | 20px | mobile card padding |
| `space-6` | 24px | standard spacing |
| `space-7` | 28px | medium grouping |
| `space-8` | 32px | component sections |
| `space-10` | 40px | major component separation |
| `space-12` | 48px | standard section subdivision |
| `space-14` | 56px | large subdivision |
| `space-16` | 64px | desktop section spacing |
| `space-20` | 80px | major section separation |
| `space-24` | 96px | cinematic breathing room |
| `space-28` | 112px | major editorial rhythm |
| `space-32` | 128px | hero/large section spacing |

Higher values can exist for bespoke hero composition, but should be rare.

---

# 9. VERTICAL RHYTHM

The site should feel rhythmically consistent from top to bottom.

A recommended section rhythm is:

```text
Section label
   ↓
headline
   ↓ medium gap
supporting copy
   ↓ large gap
primary content
   ↓
secondary content
```

The vertical system must distinguish between:

- text-to-text spacing;
- text-to-component spacing;
- component-to-component spacing;
- section-to-section spacing.

Never use one generic margin for all four.

---

# 10. SECTION SPACING

## 10.1 Standard content sections

Desktop:

Approximately `96–144px` top and bottom breathing room depending on section complexity.

Tablet:

Approximately `72–112px`.

Mobile:

Approximately `64–96px`.

## 10.2 Editorial / cinematic sections

Desktop:

Approximately `128–200px` may be appropriate.

Mobile:

Reduce deliberately rather than proportionally.

Target:

Approximately `80–120px`.

## 10.3 Dense functional sections

Desktop:

Approximately `64–96px`.

Mobile:

Approximately `48–72px`.

The exact value should depend on information density.

---

# 11. SECTION HEADING SYSTEM

Each major section should usually contain:

1. optional eyebrow/kicker;
2. primary heading;
3. optional description;
4. optional action.

Example structure:

```text
EYEBROW
THE ACADEMY

We build stronger voices.

Supporting copy explaining the section.

[Explore Academy →]
```

The heading block must not automatically occupy half the viewport.

Its width should be controlled intentionally.

Suggested heading widths:

- compact: `8–12ch`
- standard editorial: `14–22ch`
- long functional heading: `100% of a readable content column`

The type system controls actual font sizes. This document controls placement and width.

---

# 12. HERO LAYOUT SYSTEM

The hero is an exception to normal page geometry.

The primary goal is to establish the organization emotionally before the visitor starts consuming detailed information.

## 12.1 Home hero hierarchy

The homepage hero should visually prioritize:

1. identity/navigation;
2. headline;
3. podium/hero visual;
4. supporting statement;
5. primary action;
6. secondary action where useful;
7. scroll cue.

The hierarchy should remain visually clear even when the podium overlaps the composition.

## 12.2 Hero layer model

Conceptually:

```text
Layer 0 — page background
Layer 1 — atmospheric lighting / texture
Layer 2 — ambient imagery or architectural field
Layer 3 — podium / primary 3D object
Layer 4 — typography
Layer 5 — CTA
Layer 6 — navigation / fixed interface
Layer 7 — temporary interaction effects
```

The object must never obscure essential text.

## 12.3 Hero text placement

Desktop may use centered or carefully offset editorial composition depending on the approved page design.

For the primary PBF hero, centered composition is preferred when the podium is centered.

If the headline is offset, the podium must compensate visually so the full composition still feels balanced.

## 12.4 Hero height

Desktop:

Use a large viewport composition, usually approximately `82–100dvh`, depending on navigation and CTA requirements.

The hero must not trap content below the fold if essential information becomes inaccessible.

Mobile:

Use approximately `auto` / `min-height` behavior with viewport-aware limits rather than forcing a fixed full-screen scene.

Very small phones must prioritize:

- headline;
- primary CTA;
- meaningful view of the podium;
- scroll accessibility.

---

# 13. PODIUM COMPOSITION RULES

The podium is the primary hero object, not a decorative sticker.

## 13.1 Desktop scale

The podium may occupy approximately:

`35–60%` of the hero visual height

depending on the viewport and headline arrangement.

It should feel substantial.

## 13.2 Desktop position

Preferred default:

- horizontally centered;
- slightly below optical center;
- base allowed to approach the lower hero boundary;
- enough negative space around the upper silhouette for typography.

## 13.3 Mobile position

The podium should be repositioned rather than proportionally shrunk.

Preferred behavior:

- centered;
- narrower visible width;
- slightly lower vertical anchor;
- deliberate crop permitted;
- branding remains readable;
- full base may be partially omitted if necessary for composition.

A mobile crop that makes the podium feel large can be preferable to showing the entire object at an unusably small scale.

## 13.4 Podium text protection

The logo and “PAK DEBATE FORUM / ACADEMY” mark must remain within a readable region.

Do not let responsive cropping remove the mark.

---

# 14. HERO CONTENT COLLISION RULES

Dynamic text can become longer than the original reference copy.

The layout must therefore support:

- headline wrapping;
- longer event/program titles;
- accessibility font scaling;
- translation expansion where applicable.

The podium must have enough positional flexibility that text can expand without overlapping the brand object.

Do not use absolute positioning for critical text if it depends on an assumed headline length.

---

# 15. CARD GRID SYSTEM

Cards should use a consistent outer grid and internal padding system.

## 15.1 Program cards

Desktop default:

- 3-column grid for standard catalogue presentation;
- 4-column grid only when content is short and visual hierarchy remains strong.

Tablet:

- 2-column grid.

Mobile:

- 1-column stack by default.

Cards should never become so narrow that:

- titles wrap awkwardly;
- metadata becomes unreadable;
- CTA labels wrap unexpectedly.

## 15.2 Event cards

Similar to program cards, but allow stronger date/metadata hierarchy.

A date block may occupy a visually distinct area.

## 15.3 Coach cards

Portrait should dominate.

Text can remain compact.

Desktop may use 3 or 4 columns depending on portrait ratio.

Mobile should use 1 column or an intentional horizontal rail if sufficient context is available.

---

# 16. CARD INTERNAL LAYOUT

Recommended internal structure:

```text
┌─────────────────────────────┐
│ MEDIA / HEADER              │
│                             │
├─────────────────────────────┤
│ EYEBROW / METADATA          │
│                             │
│ TITLE                       │
│                             │
│ SHORT DESCRIPTION           │
│                             │
│ KEY DETAILS                 │
│                             │
│ CTA / LINK                  │
└─────────────────────────────┘
```

Use consistent internal padding.

Do not vertically center arbitrary content just to fill card height.

Cards should have predictable content anchors:

- metadata near top;
- title below;
- body in middle;
- CTA toward bottom when a fixed-height card is used.

For dynamic content, prefer natural height over forced identical height unless equal card heights clearly improve the grid.

---

# 17. FULL-BLEED SECTIONS

A section may be full bleed when one or more of the following is true:

- it contains cinematic imagery;
- it is intended as an immersive transition;
- it uses the podium or another 3D object;
- it is a final CTA;
- it acts as a visual reset between dense sections.

Full-bleed backgrounds should still contain a master content container for text and controls.

Use:

```text
viewport-wide background
        +
contained foreground content
```

not unconstrained content across the viewport.

---

# 18. ASYMMETRICAL LAYOUTS

Asymmetry is allowed and encouraged in cinematic/editorial sections.

However, asymmetry must be intentional and repeated according to a recognizable pattern.

Good:

```text
headline / copy      large image
       \
        visual mass
```

Bad:

randomly offset elements with no alignment relationship.

Every asymmetrical section should still align to the underlying grid.

---

# 19. OVERLAPPING CONTENT

Overlap is appropriate for:

- hero objects;
- architectural visuals;
- image captions;
- selected editorial cards;
- final CTA compositions.

Overlap is not appropriate for:

- primary form fields;
- navigation labels;
- dense data tables;
- essential mobile content;
- long dynamic text blocks.

Whenever overlap is used, content must remain accessible in the normal document flow or have an explicit responsive alternative.

---

# 20. IMAGE COMPOSITION

Images should be treated as composition elements, not generic backgrounds.

## 20.1 Image containers

Use an intentional aspect ratio.

Avoid letting images resize unpredictably from their intrinsic dimensions.

Preferred ratios can include:

- `16:9` cinematic;
- `4:5` portraits;
- `3:2` editorial imagery;
- `1:1` compact cards.

## 20.2 Object positioning

Use `object-position` intentionally.

For people:

- preserve faces;
- preserve relevant body language;
- avoid cutting meaningful gestures.

For architecture:

- preserve leading lines;
- maintain horizon/vanishing-point intent;
- do not crop away the visual feature responsible for the section's identity.

---

# 21. BACKGROUND SYSTEM AND LAYOUT

Backgrounds may span beyond the content container.

Foreground content should remain aligned.

The background may contain:

- gradient fields;
- image textures;
- architectural silhouettes;
- soft light blooms;
- particles/noise;
- podium shadow fields.

These elements must not alter the primary layout flow.

Decorative background layers should therefore generally be `absolute` or otherwise non-flowing.

---

# 22. NAVIGATION GEOMETRY

The global navbar should have a stable spatial contract.

Desktop:

- contained within master shell;
- logo anchored left;
- primary navigation centered or right-weighted according to approved composition;
- primary CTA at right;
- adequate click targets.

Mobile:

- logo remains visible;
- menu control remains reachable;
- primary CTA may move into menu drawer or become a prominent drawer action;
- navigation must not consume disproportionate vertical space.

The header may be transparent/overlaying in cinematic heroes and switch to a solid/semi-opaque surface when content requires higher contrast.

---

# 23. STICKY / FIXED ELEMENTS

Potential fixed elements:

- global header;
- mobile navigation drawer trigger;
- event/program registration CTA where justified;
- transient notification/toast.

Avoid fixed elements that cover content.

Persistent CTAs must not block:

- form fields;
- event information;
- mobile browser safe areas;
- accessibility controls.

Respect mobile safe-area insets.

---

# 24. DETAIL PAGE LAYOUT

Reusable detail pages should use a two-stage spatial model.

## Stage A — Identity

Large visual/typographic header containing:

- category;
- title;
- key metadata;
- hero image/visual;
- primary CTA.

## Stage B — Information

Structured content sections.

Desktop may use:

`main content + supporting rail`

Example:

```text
┌────────────────────────────┬───────────────┐
│ Main description           │ key details   │
│ curriculum / rules        │ registration  │
│ outcomes                   │ coach / date  │
│ FAQ                        │ CTA           │
└────────────────────────────┴───────────────┘
```

Mobile should collapse into a single flow with the primary CTA moved to a prominent position.

---

# 25. PROGRAM DETAIL SPATIAL RULES

Program pages should make comparison of practical information easy.

Suggested information grouping:

- level;
- age range;
- duration;
- delivery mode;
- schedule;
- price;
- coach;
- outcomes;
- curriculum;
- FAQs;
- enrollment CTA.

The information side should remain scannable.

Long curriculum text should not push the primary enrollment action an unreasonable distance away.

A desktop sticky registration/enrollment rail can be considered when the page becomes long, but it must collapse responsibly on mobile.

---

# 26. EVENT DETAIL SPATIAL RULES

Event pages should prioritize:

1. event title;
2. date/time;
3. location/venue;
4. registration state;
5. primary CTA.

Supporting rules, descriptions, eligibility, and additional information follow.

A date or event-status module can visually anchor the right rail on desktop.

Mobile should place the registration action near the top before long content.

---

# 27. REGISTRATION LAYOUT

Registration is a functional interaction and should not inherit excessive hero-style spacing.

The form should use a focused content width.

Recommended desktop:

- centered or two-column guided layout;
- form field column around `560–720px`;
- progress/status area where applicable.

Mobile:

- single-column;
- full available width minus page gutters;
- large touch targets;
- clear step separation;
- minimal decorative interference.

A registration page can remain premium through typography, lighting, and surfaces without sacrificing form efficiency.

---

# 28. RESULTS PAGE LAYOUT

Results should balance editorial credibility and scanability.

Possible structures:

- large headline/statement;
- impact numbers;
- achievement timeline;
- result cards;
- tournament highlights;
- featured achievements.

Desktop may use asymmetric editorial blocks.

Mobile should become a clear vertical narrative.

Numbers should receive enough surrounding whitespace that achievements feel significant rather than like table entries.

---

# 29. RESOURCES LAYOUT

Resources are a knowledge-discovery experience.

Use:

- search/filter area;
- category controls;
- resource cards/list rows;
- metadata;
- download/view action.

Desktop may use a grid/list hybrid.

Mobile should prioritize scanning and filtering.

Do not turn a large resource catalogue into a wall of identical cards.

---

# 30. ABOUT PAGE LAYOUT

About should use an editorial narrative structure.

Recommended hierarchy:

```text
Hero statement
↓
Our Story
↓
Mission / Vision
↓
What We Do
↓
Leadership
↓
Community / Impact
↓
Achievements
↓
CTA
```

Large full-width visuals may separate major narrative chapters.

Text blocks should remain readable and not be stretched to full viewport width.

---

# 31. COACHES / TEAM LAYOUT

The people sections should not become an overly dense directory.

The visual priority should be:

`portrait → name → role → expertise → optional detail`

On desktop, use enough space around portraits to preserve status and credibility.

On mobile, a vertical stack or controlled horizontal rail is acceptable.

Never sacrifice readable names/roles just to show more people above the fold.

---

# 32. HOME PAGE SECTION RHYTHM

The homepage should alternate between cinematic and functional density.

Possible rhythm:

```text
HERO — cinematic
↓
ORGANIZATION INTRO — editorial
↓
IMPACT — compact/statistical
↓
ACADEMY INTRO — cinematic/editorial
↓
FEATURED PROGRAMS — functional grid
↓
UPCOMING EVENTS — functional/cinematic hybrid
↓
LEADERSHIP — editorial
↓
RESULTS — high-impact
↓
RESOURCES — compact discovery
↓
TESTIMONIAL — editorial pause
↓
FINAL CTA — cinematic
↓
FOOTER — quiet
```

This contrast prevents the entire homepage from becoming visually exhausting.

---

# 33. SECTION TRANSITION SPACING

Adjacent high-impact sections should not visually collide.

Use one of three transition strategies:

### Hard reset

Background/surface changes cleanly.

### Soft overlap

Light, image, or architecture visually bridges two sections.

### Continuity

The same object/line/visual motif travels between sections.

The transition type must be explicit in the page-specific design document.

Do not invent a new transition for every section.

---

# 34. DESKTOP / MOBILE COMPOSITION PHILOSOPHY

The desktop layout is **not** the master artwork from which mobile is derived by scaling.

Instead:

> Desktop and mobile are two compositions governed by the same system.

The following may legitimately change:

- alignment;
- object crop;
- order of content;
- number of columns;
- image position;
- CTA placement;
- navigation model;
- animation intensity;
- decorative elements;
- section height.

The following should remain consistent:

- visual hierarchy;
- brand colors;
- typography roles;
- component language;
- content meaning;
- interaction purpose;
- spacing logic;
- visual identity.

---

# 35. MOBILE STACK ORDER

When a desktop layout becomes vertical, preserve semantic priority.

Default order:

1. eyebrow/category;
2. headline;
3. primary visual;
4. primary information;
5. secondary information;
6. supporting CTA.

However, a primary action may be promoted higher on transactional pages.

Do not preserve a desktop column order if it creates a confusing mobile reading sequence.

---

# 36. MOBILE GUTTER RULES

Default mobile page gutter:

`20–24px`

Use smaller gutters only for intentionally full-bleed media.

The following must align to the same mobile text gutter unless intentionally full bleed:

- headings;
- body copy;
- filters;
- form labels;
- card grids;
- footer columns.

Do not alternate randomly between 12px, 18px, 24px, and 28px margins.

---

# 37. MOBILE CARD BEHAVIOR

Cards should generally be full-width or nearly full-width.

Avoid tiny two-column cards that require excessive scrolling within narrow blocks.

For horizontal rails:

- show part of the next card to suggest continuation;
- maintain comfortable swipe targets;
- do not hide essential content off-screen;
- provide another accessible navigation method if horizontal scrolling is not obvious.

---

# 38. TOUCH TARGETS

Interactive controls should generally provide at least approximately `44×44px` of usable touch area.

Do not reduce a control below comfortable touch size simply to preserve a desktop visual ratio.

This applies to:

- menu buttons;
- icon buttons;
- carousel controls;
- filter toggles;
- accordion headers;
- form controls;
- card actions.

---

# 39. FORM LAYOUT SYSTEM

Forms should use vertical field rhythm.

Recommended conceptual order:

```text
field label
field
helper/error text
↓
next field
```

Grouping:

- identity/contact fields;
- event/program context;
- optional additional details;
- consent/confirmation;
- submission.

Long forms should be visually chunked rather than presented as one uninterrupted wall.

---

# 40. ERROR / EMPTY / LOADING LAYOUT

Every dynamic collection page must account for non-success states.

## Loading

Use skeletons or restrained placeholders with the same grid dimensions as the final content.

Do not let layout jump dramatically after data loads.

## Empty

Use:

- concise explanation;
- contextual illustration/visual when appropriate;
- next useful action.

## Error

Keep the error state within the same content container and hierarchy.

Do not replace the entire brand layout with a generic browser-like error.

---

# 41. DYNAMIC CONTENT CONSTRAINTS

PBF content is dynamic for programs, events, registrations, feedback, resources, coaches, and related data.

Layouts must survive:

- short titles;
- long titles;
- missing optional images;
- missing optional descriptions;
- long names;
- additional metadata;
- changing event dates;
- changed pricing;
- changed coach associations;
- additional FAQ entries.

Do not design around a single seeded record.

The product handoff explicitly states that program and event detail pages are reusable templates and content comes from the functional system. The visual system must honor that constraint.

---

# 42. DYNAMIC TITLE RULES

Cards and detail pages must tolerate long titles.

Do not use fixed-height title boxes solely to force identical visual lines unless the truncation strategy is explicit and accessible.

If a title exceeds the designed measure:

1. allow natural wrapping;
2. preserve card structure;
3. adjust internal spacing if needed;
4. use line clamping only where the UI explicitly requires a fixed card height;
5. never truncate the actual detail-page title.

---

# 43. DATA-DENSE TABLES / ADMIN

The admin dashboard should share the same brand language but not the cinematic density of the public marketing pages.

Admin layout priorities:

- data visibility;
- filters;
- CRUD actions;
- status indicators;
- export actions;
- readable tables;
- responsive data handling.

Use the functional spacing mode.

On mobile, wide tables should transform into:

- horizontally scrollable tables;
- stacked records;
- detail drawers;
- compact card representations;

according to the actual workflow.

Do not sacrifice operational usability for decorative styling.

---

# 44. Z-INDEX / LAYERING MODEL

Use a small standardized z-index scale.

Suggested layers:

```text
base content
background effects
media
floating content
sticky header
dropdown/popover
modal/backdrop
toast/notification
```

Avoid random values like `z-index: 999999` across components.

One global token system should control layering.

---

# 45. DECORATIVE ELEMENT POSITIONING

Decorative objects should be positioned relative to a section's visual anchor rather than the browser viewport whenever possible.

Examples:

- gold line attached to heading group;
- glow behind podium;
- architectural frame aligned to section container;
- floating particle field tied to a section.

Avoid viewport-wide absolute coordinates that break when text changes.

---

# 46. VISUAL ANCHOR RULE

Every major section should have one primary visual anchor.

Examples:

- Home hero → podium
- Academy → architectural/academy visual or training object
- Programs → featured program/card system
- Events → event imagery / date motif
- About → institutional photography/architecture
- Results → large achievement/statistic
- Final CTA → returning podium/light motif

Secondary decorative objects must support the anchor rather than compete with it.

---

# 47. ALIGNMENT RULES

Use repeated alignment lines.

Important shared lines include:

- page left edge;
- section heading left edge;
- card grid left edge;
- CTA edge;
- major media edge;
- footer content edge.

Intentional full-bleed exceptions should be obvious.

A page should feel aligned even when individual sections are asymmetrical.

---

# 48. OPTICAL ALIGNMENT

Mathematical alignment is not always visually correct.

The team may make small optical adjustments for:

- serif headlines;
- circular logos;
- podium silhouettes;
- portrait subjects;
- oversized numerals;
- icon-heavy components.

Optical adjustments should be local and documented, not used to excuse inconsistent global spacing.

---

# 49. BORDER AND EDGE SPACING

Where cards use visible borders, the content should not touch the edge.

Minimum internal padding should generally be:

- mobile: `20px`;
- desktop: `24–32px`;
- cinematic/editorial cards: potentially more.

Borders should not force an extra wrapper margin unless visually required.

---

# 50. SECTION MAX-HEIGHT RULE

Do not force content sections to a fixed height unless they are explicitly cinematic scenes.

Marketing sections with dynamic text should generally use content-driven height.

Fixed heights are appropriate for:

- hero scenes;
- controlled visual transitions;
- image panels;
- specific media compositions.

Never create vertical clipping of meaningful text solely to preserve a screenshot composition.

---

# 51. SCROLL RHYTHM

The site should alternate between:

- reading;
- visual pause;
- interaction;
- reading;
- visual pause.

Avoid placing five high-motion sections consecutively.

Likewise, avoid long sequences of dense cards without a cinematic reset.

This is a spatial principle as much as a motion principle.

---

# 52. PAGE-FAMILY SPATIAL LANGUAGE

Different page families may express different density while sharing the same system.

## Home

Most cinematic.

## About

Editorial and spacious.

## Academy

Cinematic + educational.

## Programs

Structured catalogue.

## Program Detail

Editorial identity + functional information.

## Coaches

Portrait-led grid.

## Events

Structured catalogue with stronger competition energy.

## Event Detail

Event identity + transaction.

## Registration

Focused functional flow.

## Resources

Discovery and knowledge density.

## Results

Achievement-led editorial layout.

## Feedback / Contact

Simple, focused interaction.

## Admin

Dense operational layout.

---

# 53. FOOTER LAYOUT

The footer should be spatially quiet.

Suggested structure:

```text
brand statement

navigation groups          social/contact

────────────────────────────────────────
legal / copyright / secondary links
```

Desktop can use multiple columns.

Mobile should stack groups with intentional spacing.

The footer should not feel like an afterthought.

It is the final navigation map of the organization.

---

# 54. MOBILE FOOTER

Mobile footer should use collapsible or stacked groups when link count becomes high.

Priorities:

1. brand;
2. primary navigation;
3. contact/social;
4. legal.

Do not create tiny columns of links that are difficult to tap.

---

# 55. RESPONSIVE TYPOGRAPHY / LAYOUT RELATIONSHIP

Typography and container width must scale together.

When heading size decreases on mobile:

- width may increase relative to the viewport;
- line length should remain intentional;
- vertical spacing should decrease enough to maintain balance;
- adjacent visual objects may need repositioning.

Never simply decrease font-size while leaving desktop line breaks and padding assumptions intact.

---

# 56. RESPONSIVE PODIUM / 3D RULES

The podium is a special responsive asset.

### Wide desktop

Maximum visual drama.

### Desktop

Full silhouette and readable branding.

### Tablet

Slightly reduced scale and reduced parallax.

### Mobile

Intentional crop and stronger vertical stacking.

### Very small mobile

Prioritize:

- headline readability;
- CTA accessibility;
- visible brand mark;
- performance.

A static fallback image may be preferable when real-time 3D would negatively affect performance.

---

# 57. DECORATIVE MOTIF DISTRIBUTION

Decorative gold lines, green arcs, light streaks, particles, or architectural motifs should be distributed intentionally.

Do not place a motif in every section.

Recommended rhythm:

- strong motif in hero;
- quieter motif in one or two transitional sections;
- restrained motif in final CTA;
- mostly clean functional pages.

This prevents visual fatigue.

---

# 58. SPATIAL CONTRAST

The site should intentionally contrast:

### Large
with
### compact

### Full bleed
with
### contained

### Dark open space
with
### dense information

### Centered hero
with
### asymmetric editorial section

This contrast is part of the premium visual identity.

Uniform density everywhere would make the site feel flat.

---

# 59. PAGE TRANSITION SPATIAL CONTRACT

When navigating between pages, the entering page should not appear to jump from an unrelated coordinate system.

Where practical, retain:

- header position;
- container alignment;
- page title origin;
- primary visual anchor.

The exact transition behavior is specified in `13-PAGE-TRANSITIONS.md`.

This document only establishes that the spatial origin should feel coherent.

---

# 60. ACCESSIBILITY AND SPACING

The layout must survive browser zoom and accessibility text scaling.

Do not rely on:

- fixed-height text containers;
- absolute-positioned essential text;
- clipped controls;
- text embedded in images for essential information.

Interactive items must maintain comfortable target sizes.

Focus indicators require enough surrounding space to remain visible.

---

# 61. REDUCED-MOTION LAYOUT

When reduced motion is requested, layout should remain substantially unchanged.

Animations become immediate/faded transitions rather than causing a fundamentally different composition.

Do not remove content simply because an animation has been disabled.

The layout itself must make sense statically.

---

# 62. PERFORMANCE AND LAYOUT STABILITY

The spatial system must minimize cumulative layout shift.

Reserve dimensions for:

- images;
- 3D containers;
- hero media;
- card thumbnails;
- fonts where practical;
- asynchronous dynamic content.

Use aspect-ratio boxes when appropriate.

Do not allow a large podium image to load and push the hero content downward after first paint.

---

# 63. CSS IMPLEMENTATION PRINCIPLES

Preferred patterns:

- CSS custom properties for design tokens;
- CSS Grid for macro layout;
- Flexbox for internal component alignment;
- `clamp()` for fluid values where useful;
- `min()`, `max()`, and container-relative units where appropriate;
- logical properties where practical;
- component-level responsive rules only when necessary.

Avoid:

- scattered inline spacing values;
- arbitrary magic numbers;
- per-page copies of the same grid system;
- layout coordinates tied to one screenshot.

---

# 64. CONTAINER QUERY OPPORTUNITY

Where the frontend architecture supports it, components such as cards, media/text blocks, and reusable rails may use container queries rather than relying exclusively on viewport breakpoints.

This is especially useful when the same component appears in:

- a full-width section;
- a sidebar;
- a modal;
- an alternate page layout.

The global breakpoint system remains the primary page-level rule.

---

# 65. COMPONENT SPACING CONTRACT

Reusable components must own their **internal** spacing.

Parent sections own the **external** spacing between components.

For example:

```text
Section
  ├── HeadingBlock
  ├── Grid
  │    ├── Card
  │    ├── Card
  │    └── Card
  └── CTA
```

`HeadingBlock` owns spacing between eyebrow/heading/description.

`Card` owns internal padding.

`Section` owns spacing between HeadingBlock and Grid.

This prevents nested margins from becoming unpredictable.

---

# 66. NO RANDOM MARGIN STACKS

Avoid component patterns such as:

```css
margin-bottom: 37px;
```

followed by a parent:

```css
margin-bottom: 41px;
```

and a sibling:

```css
padding-top: 19px;
```

The design system should make spacing relationships explicit.

Use tokens and layout gaps.

---

# 67. CONTENT-TO-WHITESPACE RATIO

The premium aesthetic depends on not filling every empty region.

For major marketing sections, whitespace should often represent a meaningful part of the composition rather than unused area.

However, empty space must have purpose:

- spotlighting an object;
- isolating a statement;
- improving reading rhythm;
- separating page chapters;
- creating anticipation before an interaction.

Avoid empty space that simply exists because an AI copied a screenshot's dimensions without understanding its composition.

---

# 68. MOBILE INFORMATION PRIORITY

When available vertical space is restricted, remove visual decoration before removing useful content.

Priority order:

1. essential message;
2. primary action;
3. primary information;
4. secondary information;
5. decorative detail.

For example, on the mobile hero, preserve the headline and CTA before preserving every atmospheric particle.

---

# 69. DESKTOP INFORMATION PRIORITY

Desktop can support more simultaneous content, but the visual hierarchy still needs one dominant focal point.

A section should not have:

- giant heading;
- giant image;
- giant stat;
- giant CTA;

all competing equally.

Use scale contrast.

---

# 70. SPATIAL TREATMENT OF GOLD

Gold elements require breathing space.

Do not crowd gold borders, gold icons, gold headings, and gold CTAs together.

When several gold accents coexist, at least one should be visually subordinate.

This reinforces the material/luxury aesthetic without becoming ornate.

---

# 71. SPATIAL TREATMENT OF GREEN

Green should generally appear as a supporting visual field or strategic accent.

Use larger areas of green only when a specific section is intentionally themed around community, growth, or the Academy identity.

Do not create a green strip on every page merely to “brand” it.

---

# 72. PAGE-SPECIFIC GRID OVERRIDES

A page-specific design document may override the global grid when there is a clear reason.

Examples:

- Admin data table;
- registration multi-step flow;
- full-screen 3D experience;
- special event landing page;
- media-rich resource detail.

Any override must define:

- scope;
- reason;
- breakpoint behavior;
- fallback;
- interaction impact.

The override should never silently replace the global system.

---

# 73. DESIGN-TOKEN OWNERSHIP

Global spatial tokens should be defined once.

Suggested CSS variable groups:

```text
--container-max
--gutter-mobile
--gutter-tablet
--gutter-desktop
--space-1 ... --space-32
--grid-columns
--grid-gutter
--section-space
--content-max
--reading-max
--form-max
--radius-* 
--layer-*
```

The final implementation may use different variable names, but the conceptual ownership should remain centralized.

---

# 74. PAGE INVENTORY COVERAGE

This layout system must be applied to the current public inventory:

1. Home
2. About
3. Academy
4. Programs
5. Program Detail
6. Coaches
7. Events
8. Event Detail
9. Registration
10. Resources
11. Results
12. Feedback
13. Contact

Admin is treated separately as an internal functional surface.

---

# 75. HOME PAGE LAYOUT CONTRACT

Home-specific layout decisions will be documented in `pages/HOME.md`.

That page specification must reference this document rather than redefining:

- global container;
- spacing tokens;
- breakpoints;
- grid basics;
- general mobile gutters.

HOME.md may define hero-specific geometry, section ordering, object placement, and deliberate exceptions.

---

# 76. ACADEMY PAGE LAYOUT CONTRACT

Academy-specific layout should inherit:

- master container;
- global spacing;
- typography;
- color;
- component structure.

The Academy page may use more cinematic visual transitions and educational progression patterns, but must remain part of the same overall geometry.

---

# 77. PROGRAM PAGE LAYOUT CONTRACT

Programs should favor:

- scannable filter area;
- clear card grid;
- strong title hierarchy;
- manageable density;
- responsive catalogue behavior.

The page should not become a cinematic poster where users cannot quickly compare offerings.

---

# 78. EVENT PAGE LAYOUT CONTRACT

Events should favor:

- date visibility;
- event status;
- category;
- location;
- CTA;
- discoverability.

Visual competition energy may increase, but information hierarchy remains primary.

---

# 79. REGISTRATION PAGE LAYOUT CONTRACT

Registration is one of the clearest examples of **functional mode**.

Use premium materials and typography, but avoid excessive decorative layers.

The user's form completion path must remain visually obvious.

---

# 80. ABOUT / RESULTS LAYOUT CONTRACT

About and Results may use the most editorial asymmetric layouts outside the hero.

However, all major content must remain aligned to the master container and grid.

---

# 81. ADMIN LAYOUT CONTRACT

Admin should inherit the same visual tokens but can use:

- denser spacing;
- smaller type;
- more compact cards;
- persistent navigation rails;
- data tables;
- utility surfaces.

The admin should feel like the **operations layer of the same organization**, not a different visual product.

---

# 82. WHAT AI MUST NOT DO

The implementation agent must not:

- pick arbitrary max widths;
- invent new breakpoints for convenience;
- copy desktop coordinates to mobile;
- create fixed-height text sections without justification;
- use absolute positioning for essential dynamic text;
- randomly change card padding;
- create unrelated grid systems;
- shrink the entire desktop site into mobile;
- use decorative elements to fill empty space without purpose;
- let a screenshot override the responsive/content requirements;
- duplicate layout components when a shared pattern exists.

---

# 83. WHAT AI MAY DO

The implementation agent may:

- make small optical adjustments;
- choose a reasonable flex/grid implementation;
- use container queries when they improve robustness;
- interpolate spacing fluidly with `clamp()`;
- make a component more resilient to dynamic content;
- choose the best implementation method between grid/flex/absolute layering when visual behavior is preserved.

It must not alter the intended composition.

---

# 84. VISUAL QA — DESKTOP

Every major page should be reviewed at minimum at:

- 1440×900
- 1280×800
- 1024×768

Check:

- container alignment;
- heading width;
- card columns;
- section rhythm;
- image crop;
- CTA alignment;
- hero object scale;
- navigation spacing;
- whitespace balance.

---

# 85. VISUAL QA — MOBILE

Review at minimum at:

- 390×844
- 375×812
- 360×800

Check:

- horizontal overflow;
- hero height;
- podium crop;
- headline wrapping;
- CTA width;
- card readability;
- touch target size;
- footer stacking;
- form width;
- fixed UI overlap.

---

# 86. VISUAL QA — DYNAMIC CONTENT

Test at least one long and one short example for:

- program title;
- event title;
- coach name;
- resource title;
- event description;
- program description;
- FAQ answer;
- registration form validation.

The layout must remain coherent.

---

# 87. SPATIAL REGRESSION TEST

When a global token changes, inspect:

- Home hero;
- Academy section;
- Programs grid;
- Event grid;
- detail page;
- form;
- footer;
- mobile menu;
- admin table.

A global spacing change can have large downstream effects.

---

# 88. DESIGN REVIEW QUESTIONS

Before approving a layout, ask:

1. What is the focal point?
2. Is the content aligned to the shared grid?
3. Is there enough negative space to establish hierarchy?
4. Is the section too dense for its purpose?
5. Can dynamic content expand safely?
6. Does the mobile composition still make sense independently?
7. Does the layout preserve accessibility zoom?
8. Does the visual object have enough room to breathe?
9. Are decorative elements supporting rather than competing?
10. Does the section belong to the same PBF visual system?

---

# 89. IMPLEMENTATION CHECKLIST

Before marking the global layout system complete, verify:

- [ ] master container implemented;
- [ ] breakpoint tokens centralized;
- [ ] spacing tokens centralized;
- [ ] 12-column desktop grid available;
- [ ] tablet grid available;
- [ ] mobile single-column behavior defined;
- [ ] global page gutters defined;
- [ ] cinematic vs functional density modes documented;
- [ ] hero geometry documented;
- [ ] podium responsive rules documented;
- [ ] card grid behavior documented;
- [ ] detail-page rails documented;
- [ ] form width documented;
- [ ] dynamic content resilience documented;
- [ ] admin density documented;
- [ ] safe-area behavior considered;
- [ ] layout stability strategy defined;
- [ ] visual QA sizes defined.

---

# 90. RELATIONSHIP TO NEXT DOCUMENTS

This document defines **where things live and how space behaves**.

It does not fully define:

- individual component visual styling → `05-COMPONENT-SYSTEM.md`
- image/asset selection → `06-IMAGERY-ASSET-SYSTEM.md`
- icon design → `07-ICONOGRAPHY.md`
- animation → `08-MOTION-ANIMATION.md`
- podium implementation → `09-3D-PODIUM.md`
- responsive micro-behaviors → `10-RESPONSIVE-SYSTEM.md`
- accessibility → `11-ACCESSIBILITY.md`
- performance implementation → `12-PERFORMANCE.md`
- navigation/page-transition motion → `13-PAGE-TRANSITIONS.md`
- individual page composition → `/pages/*.md`

Those documents must inherit this spatial system rather than re-invent it.

---

# 91. FINAL PRINCIPLE

The layout system should make the site feel **expensive without feeling wasteful**.

Whitespace is intentional.

Grid is invisible.

Hierarchy is obvious.

Responsive behavior is designed rather than improvised.

Dynamic content is respected.

Cinematic sections have room to breathe.

Functional sections remain efficient.

The result should feel like one coherent institution from the first pixel of the homepage to the last administrative table.

**The page may change. The spatial language should not.**
