# Pak Debate Forum — Typography System & Type Specification

**Document:** `03-TYPOGRAPHY.md`  
**Status:** Foundation / v0.1  
**Authority:** Typography, text hierarchy, type metrics, responsive type behavior, and font-loading specification  
**Parent specifications:** `00-DESIGN-MASTER.md`, `01-BRAND-IDENTITY.md`, `02-COLOR-SYSTEM.md`  
**Scope:** Font families, roles, weights, hierarchy, sizes, line-heights, tracking, editorial display treatment, UI typography, numbers, labels, buttons, forms, responsive scaling, accessibility, fallback behavior, and implementation rules

---

# 0. PURPOSE

Typography is one of the strongest identity carriers in the Pak Debate Forum redesign. The site should be recognizable even when all imagery, gold lighting, and 3D effects are removed.

This document therefore defines a strict type system rather than allowing each page or AI-generated component to choose its own font size, weight, or font family.

The system must support all public and internal surfaces:

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
- Navigation
- Modals
- Forms
- Empty states
- Error states
- Success states

The typography system must remain elegant on large cinematic hero sections while staying practical for information-dense program, event, registration, and admin interfaces.

---

# 1. TYPOGRAPHIC NORTH STAR

The typography should combine two ideas that are intentionally different but complementary:

> **Editorial authority + modern usability.**

The display face carries the institution's personality.

The interface face carries clarity, speed, and usability.

The two roles must never compete for attention.

The default relationship is:

**Serif display → institutional, expressive, memorable**  
**Sans-serif interface/body → modern, readable, operational**

The system should feel premium without becoming ornate, and modern without becoming generic SaaS typography.

---

# 2. FONT FAMILY STRATEGY

## 2.1 Number of font families

The website should use **two primary font families** only.

### Display family

**Cormorant Garamond**

Primary purpose:

- Hero headlines
- Major editorial statements
- Section display headlines
- Large pull quotes
- Select large numerals when a serif treatment is intentionally desired
- Brand-adjacent campaign statements

### Interface family

**Manrope**

Primary purpose:

- Body copy
- Navigation
- Buttons
- Labels
- Metadata
- Form fields
- Program/event information
- Tables
- Admin UI
- Numbers by default
- Utility text

## 2.2 Why only two families

Two families are enough to establish hierarchy while keeping the identity disciplined.

A third decorative font must not be introduced merely to make an individual section look more interesting.

Do not use:

- a handwritten font
- a script font
- a futuristic display font
- a monospace font for branding
- an additional serif for quotations

unless explicitly approved in a future design revision.

## 2.3 Fallback stacks

Display:

```css
font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
```

Interface:

```css
font-family: "Manrope", Arial, Helvetica, sans-serif;
```

Fallbacks must preserve the intended role and remain legible if the preferred web font fails to load.

---

# 3. FONT WEIGHT POLICY

## 3.1 Cormorant Garamond

Preferred working weights:

- 500 — medium emphasis
- 600 — strong display emphasis
- 700 — rare, high-impact display emphasis

Default hero headline weight:

**600**

Default section heading weight:

**600**

Do not default to 700 across the entire site. The display face should retain an elegant, airy character.

## 3.2 Manrope

Preferred weights:

- 400 — body/default
- 500 — navigation, metadata, secondary emphasis
- 600 — buttons, labels, compact headings, stronger UI emphasis
- 700 — strong UI/data emphasis
- 800 — rare large numerical or navigation emphasis

The default UI weight should be 400–600.

Do not make entire pages bold.

---

# 4. TYPE ROLES

The type system contains six high-level roles.

| Role | Family | Purpose |
|---|---|---|
| Display | Cormorant Garamond | Hero and major editorial statements |
| Heading | Cormorant Garamond | Section/page headings |
| Body | Manrope | Paragraphs and explanatory content |
| Interface | Manrope | Navigation, controls, UI |
| Meta | Manrope | Labels, dates, categories, supporting information |
| Data | Manrope | Prices, counts, statistics, form values, tabular content |

Never reverse these roles casually.

---

# 5. GLOBAL TYPE SCALE

The following is the canonical desktop scale. Responsive values may interpolate between tiers, but components should not invent unrelated sizes.

| Token | Desktop size | Weight | Line-height | Typical use |
|---|---:|---:|---:|---|
| `display-xl` | 88px | 600 | 0.92–1.00 | exceptional hero statement |
| `display-lg` | 72px | 600 | 0.95–1.02 | main hero headline |
| `display-md` | 56px | 600 | 0.98–1.06 | major section heading |
| `display-sm` | 44px | 600 | 1.00–1.08 | large section/page heading |
| `heading-lg` | 36px | 600 | 1.08–1.15 | section heading |
| `heading-md` | 30px | 600 | 1.10–1.18 | component/page subheading |
| `heading-sm` | 24px | 600 | 1.15–1.25 | card/subsection heading |
| `body-lg` | 20px | 400 | 1.55–1.70 | introductory copy |
| `body-md` | 17px | 400 | 1.60–1.75 | default body copy |
| `body-sm` | 15px | 400 | 1.55–1.70 | compact body |
| `label-lg` | 14px | 600 | 1.20 | large labels / CTA support |
| `label-md` | 13px | 600 | 1.20 | standard labels |
| `meta` | 12px | 500 | 1.30 | dates/categories/metadata |
| `micro` | 11px | 500 | 1.25 | rare utility text |

These sizes are starting tokens, not permission to create arbitrary intermediate sizes everywhere.

When a component needs a size not represented here, use the closest semantic token or request a system update rather than inventing a new token.

---

# 6. DISPLAY TYPOGRAPHY

## 6.1 Hero headlines

The hero headline is one of the most visually important pieces on the website.

Default characteristics:

- Cormorant Garamond
- 600 weight
- warm white
- tight but not crushed line-height
- large line breaks intentionally controlled by design
- maximum width defined by composition, not by arbitrary text wrapping

Example conceptual hierarchy:

```text
MASTER THE
ART OF
DEBATE.
```

The line breaks are part of the composition.

Do not allow browser wrapping to accidentally produce four or five awkward lines on desktop.

Use a constrained headline container and, where necessary, explicit semantic line grouping.

## 6.2 Hero line length

Desktop hero display copy should generally remain between **8 and 22 characters per visual line** when intentionally stacked.

Long single-line headlines should only be used when the visual reference explicitly calls for them.

## 6.3 Display contrast

Hero headings should be highly readable against the background but should not require pure #FFFFFF if the section uses warm cinematic lighting.

Use the established warm-white text tokens from the color system.

## 6.4 Display emphasis

Use italic Cormorant sparingly.

Italic is reserved for:

- a poetic subphrase
- a word intended to feel editorial
- an occasional quote treatment

Do not italicize entire hero headlines by default.

---

# 7. SECTION HEADINGS

Section headings should feel connected to the hero typography but slightly more restrained.

Default:

- Cormorant Garamond 56px / 600 desktop
- 44px / 600 tablet
- 38–42px / 600 mobile depending on composition

Section headings should generally occupy a controlled width rather than stretching across the entire viewport.

A heading should communicate the beginning of a section before the supporting paragraph begins.

---

# 8. BODY TYPOGRAPHY

Default body:

```text
Manrope
400
17px desktop
1.60–1.75 line-height
```

Body copy is intentionally larger than many generic websites because the experience is editorial and premium rather than densely dashboard-like.

For long-form explanatory content, prefer approximately 55–75 characters per line.

Do not create paragraphs so wide that they become visually tiring.

## 8.1 Paragraph spacing

Do not use enormous margins between every paragraph.

Instead:

- use consistent paragraph rhythm
- create larger spacing only between content groups
- use headings to break long content

## 8.2 Strong text

Use Manrope 600 for inline emphasis.

Use 700 only where the information hierarchy genuinely needs a stronger anchor.

Avoid all-bold paragraphs.

---

# 9. NAVIGATION TYPOGRAPHY

Desktop navigation:

- Manrope
- 13–14px
- 500 default
- 600 active/important state
- modest tracking

Navigation should feel refined rather than oversized.

Primary navigation must not compete with the hero headline.

### Navigation states

Default:

Muted warm white / supporting text.

Hover:

Move toward primary text and optionally reveal a subtle gold indicator.

Active:

Use primary text plus the canonical active indicator defined in the component system.

Do not use large glowing text for active navigation.

---

# 10. BUTTON TYPOGRAPHY

Buttons use Manrope.

Default:

- 14px
- 600
- line-height 1
- subtle letter spacing

Large hero CTA:

- 14–15px
- 600

Do not use serif text inside normal buttons.

The serif face is reserved for editorial/display communication, not transactional controls.

## 10.1 Button text casing

Preferred:

**Title Case / sentence-like case**

Examples:

- Join the Academy
- Explore Programs
- View Event
- Register Now

Avoid excessive ALL CAPS.

All caps may be used selectively for tiny eyebrow labels, not for every button.

---

# 11. EYEBROW / KICKER TYPOGRAPHY

Small labels above large headings are allowed and encouraged when they improve hierarchy.

Default:

- Manrope
- 11–13px
- 600
- uppercase only where appropriate
- tracking around 0.12em–0.18em

Examples:

`PAK DEBATE FORUM ACADEMY`

`UPCOMING EVENTS`

`OUR PROGRAMS`

These labels should be visually quiet.

Gold may be used as an accent, but the label should not become the loudest thing in the section.

---

# 12. NUMBERS AND STATISTICS

Numbers are a major credibility device on the website.

Default:

**Manrope 700**

For major impact statistics, 48–96px may be used depending on the section.

Example structure:

```text
500+
Students Trained
```

The number should dominate the supporting label.

Do not use the serif display font for all statistics; statistics should primarily feel factual and measurable.

A serif numeral may be used in a deliberately editorial achievement panel, but this is an exception.

---

# 13. PRICES

Prices should use Manrope.

Recommended hierarchy:

```text
PKR 18,500
per program
```

Price number:

- 28–48px depending on card scale
- 700

Currency/unit:

- 12–14px
- 500

Do not style prices as decorative gold objects unless the component specifically calls for a premium highlight.

---

# 14. DATES, CATEGORIES, AND METADATA

Event and program metadata should use Manrope.

Recommended:

- 12–14px
- 500
- muted text color

Category labels may use uppercase + tracking.

Example:

`COMPETITIVE DEBATE`

`12 AUG 2026`

Do not use large serif typography for metadata.

---

# 15. CARD TYPOGRAPHY

## Program cards

Title:

- Cormorant Garamond
- 24–30px
- 600

Metadata:

- Manrope
- 12–13px
- 500

Description:

- Manrope
- 14–16px
- 400

CTA:

- Manrope
- 13–14px
- 600

## Event cards

Event title:

- Cormorant Garamond
- 24–28px
- 600

Date/category:

- Manrope
- 12–13px
- 600

Description:

- Manrope
- 14–16px
- 400

This creates an editorial title + operational metadata relationship.

---

# 16. PROGRAM DETAIL TYPOGRAPHY

Program detail pages are content-heavy and require greater hierarchy.

Recommended hierarchy:

1. Eyebrow / category
2. Program title
3. Introductory summary
4. Key metadata row
5. Section heading
6. Body copy
7. Curriculum item title
8. Curriculum description
9. Coach information
10. Pricing / schedule data
11. FAQ
12. CTA

The program title can use Cormorant Garamond 56–72px on desktop and approximately 38–48px on mobile depending on title length.

The body must remain Manrope to preserve readability.

---

# 17. EVENT DETAIL TYPOGRAPHY

Event pages should feel more energetic than standard Academy pages while maintaining the same family system.

Event title:

- Cormorant Garamond
- large display scale

Date/location/format:

- Manrope
- high-clarity metadata scale

Important event facts can use semi-bold Manrope and gold emphasis.

Rules and logistical information should never rely on decorative typography alone.

---

# 18. FORMS

Forms must prioritize usability over visual drama.

Input label:

- Manrope 13–14px
- 600

Input text:

- Manrope 15–16px
- 400

Placeholder:

- Manrope 14–15px
- 400
- muted color

Error text:

- Manrope 12–13px
- 500/600

Success text:

- Manrope 12–13px
- 500/600

Never use serif text for labels or form control values.

---

# 19. FAQ TYPOGRAPHY

FAQ question:

- Manrope 16–18px
- 600

FAQ answer:

- Manrope 15–17px
- 400

Optional category heading:

- Cormorant Garamond
- 32–40px
- 600

The question must remain readable even when collapsed.

---

# 20. QUOTATIONS / TESTIMONIALS

Testimonials are one of the areas where the editorial serif can become more expressive.

Recommended:

Quote:

- Cormorant Garamond
- 32–48px desktop
- 28–34px mobile
- 500/600

Attribution:

- Manrope
- 13–15px
- 500/600

Use italic only when deliberately supported by the composition.

Do not turn testimonials into oversized decorative poetry that becomes difficult to scan.

---

# 21. ABOUT / STORY TYPOGRAPHY

Long-form institutional storytelling should feel editorial.

Use:

- Cormorant Garamond for major story headings
- Manrope for all sustained reading

A long section can begin with a large serif statement followed by body paragraphs.

Do not use serif for long paragraphs.

---

# 22. RESULTS / ACHIEVEMENT TYPOGRAPHY

Results pages should emphasize measurable evidence.

Use:

- large Manrope numbers
- Cormorant editorial headings
- Manrope supporting labels and details

A result should remain understandable if every decorative effect is removed.

---

# 23. RESOURCE TYPOGRAPHY

Resources are knowledge-oriented and should prioritize scanability.

Title:

- Cormorant Garamond 22–28px

Category / file type:

- Manrope 11–13px
- 600

Description:

- Manrope 14–16px

Download/action:

- Manrope 13–14px
- 600

---

# 24. MOBILE TYPE SYSTEM

Mobile is not a proportional shrink of desktop.

The type hierarchy is intentionally re-composed.

Recommended mobile display scale:

| Token | Mobile range |
|---|---:|
| `display-xl` | 52–64px |
| `display-lg` | 48–58px |
| `display-md` | 40–48px |
| `display-sm` | 34–42px |
| `heading-lg` | 30–36px |
| `heading-md` | 26–30px |
| `heading-sm` | 22–26px |
| `body-lg` | 18–19px |
| `body-md` | 16px |
| `body-sm` | 14–15px |
| `label-lg` | 13–14px |
| `label-md` | 12–13px |
| `meta` | 11–12px |

The correct mobile value depends on composition and content length.

Do not allow a hero headline to become so large that the actual hero object has nowhere to breathe.

---

# 25. FLUID TYPE

Where supported, major display sizes may use `clamp()`.

Example pattern:

```css
font-size: clamp(3.25rem, 6vw, 5.5rem);
```

However, fluid typography must remain bounded by a deliberate minimum and maximum.

Do not use unlimited viewport-driven sizing.

The type system should remain predictable across intermediate laptop/tablet widths.

---

# 26. LETTER SPACING

## Display serif

Default:

`-0.01em` to `-0.025em`

Avoid aggressive negative tracking that causes letters to collide.

## Body

Usually:

`0`

## Small uppercase labels

Usually:

`0.10em` to `0.18em`

## Buttons/navigation

Usually:

`0` to `0.04em`

Do not letter-space normal body copy for stylistic effect.

---

# 27. LINE HEIGHT

Typography should feel spacious enough for a premium editorial interface.

General guidance:

- Display: 0.92–1.08
- Large heading: 1.00–1.15
- Body: 1.55–1.75
- Metadata: 1.25–1.40
- Buttons: ~1.0–1.2

The closer the text is to the display end of the hierarchy, the tighter the line-height can become.

The more sustained the reading, the more generous the line-height should become.

---

# 28. LINE LENGTH / MEASURE

For long-form content:

Preferred measure:

**55–75 characters per line**

For compact cards:

Shorter measures are acceptable.

For navigation:

Do not constrain by reading measure; use component geometry.

For hero headlines:

Composition takes priority over text measure.

---

# 29. TEXT CONTAINER WIDTHS

Recommended maximum widths:

### Hero display

Approximately:

`8–10ch` to `14ch` for deliberately stacked hero lines, depending on copy.

### Section heading

Approximately:

`12–20ch`

### Intro paragraph

Approximately:

`40–60rem`

### Long-form body

Approximately:

`45–52rem`

### Card body

Width should be controlled by the card component rather than a global text max-width.

These are composition targets, not rigid pixel dimensions.

---

# 30. TEXT BREAKING

Breaking is a design decision.

For major hero statements:

- use controlled line groups where needed
- prevent embarrassing orphan words
- review at key breakpoints

For body copy:

- allow natural wrapping
- avoid excessive manual `<br>` tags

Manual breaks should be used only when the design intentionally depends on the break.

---

# 31. TEXT CASE RULES

## Sentence case

Default for:

- headings
- buttons
- paragraphs
- cards
- navigation
- CTA text

## Uppercase

Allowed for:

- eyebrows
- compact categories
- metadata
- small system labels

Use tracking when using uppercase.

## ALL CAPS

Do not use for long sentences or paragraphs.

---

# 32. TYPOGRAPHY AND GOLD

Gold typography is an accent.

Use it selectively for:

- eyebrow labels
- key numbers
- active category
- small highlighted phrases
- decorative rules
- select CTA emphasis

Do not make all major headings gold.

The default major heading remains warm white.

Gold should feel more valuable because it is used less often.

---

# 33. TYPOGRAPHY AND GREEN

Green text is primarily for:

- identity-linked labels
- positive progression
- selected accent states
- certain Academy-specific metadata

Green should not replace primary text on dark surfaces where contrast suffers.

When green and gold are both present, gold should usually have higher visual priority unless the component is explicitly green-led.

---

# 34. TEXT OVER IMAGERY

When typography overlays photography or 3D assets:

1. Ensure the text remains readable without relying on text shadow alone.
2. Use a controlled overlay, vignette, or gradient when necessary.
3. Preserve the photograph's important subject area.
4. Do not place thin gray text over busy imagery.
5. Test the layout at mobile widths.

The image must support the text, not fight it.

---

# 35. TEXT SHADOWS

Text shadows should be rare.

Use them only where required to maintain legibility over high-contrast imagery.

Preferred strategy:

- environmental dark gradient
- controlled background overlay
- slight shadow only as a final readability layer

Avoid large glowing text effects.

---

# 36. FONT LOADING

The chosen families should be locally hosted or served from an approved production font source according to the project's infrastructure policy.

Recommended loading strategy:

1. Preconnect or otherwise optimize the approved font source.
2. Load only required weights.
3. Use `font-display: swap` or the project's approved equivalent.
4. Avoid loading unused language subsets or weights.
5. Do not block initial page rendering waiting for every font variant.

For the hero, the layout must remain stable if the display font is temporarily unavailable.

---

# 37. FONT WEIGHT BUDGET

Do not load every possible font weight.

Initial production target:

### Cormorant Garamond

- 500
- 600
- 700 only if required by approved components

### Manrope

- 400
- 500
- 600
- 700

An 800 weight should be treated as optional and loaded only if an approved component actually requires it.

---

# 38. LAYOUT SHIFT PREVENTION

Typography must not cause visible page jumping when web fonts load.

The implementation should:

- reserve appropriate space for headings
- use predictable line-height
- avoid significant font-size changes after hydration
- test loading states under throttled conditions

The hero should not visibly jump after the custom fonts arrive.

---

# 39. ACCESSIBILITY

Typography must remain readable at all breakpoints.

Do not use tiny text to create a premium aesthetic.

Minimum practical body size:

**16px on mobile for normal sustained reading.**

Smaller text may be used for metadata, but must remain readable and must not contain essential information alone.

Ensure sufficient contrast using the semantic colors defined in `02-COLOR-SYSTEM.md`.

Do not communicate meaning through font weight alone.

Do not use italic alone to communicate an important state.

---

# 40. LANGUAGE / CONTENT EXPANSION

The system must tolerate longer labels and translated content.

Do not create layouts that assume every heading is the same length as the reference image.

Buttons should grow horizontally when needed before shrinking typography below its approved threshold.

Navigation should support a mobile collapse rather than allowing text collisions.

Program/event titles must tolerate:

- short titles
- medium titles
- long titles
- multi-line titles

without breaking card geometry.

---

# 41. ACADEMY TYPOGRAPHIC EXPRESSION

The Academy may use the serif display face more prominently than operational PBF pages because it emphasizes learning, confidence, and aspiration.

However:

Academy ≠ different font system.

It inherits the same two families and hierarchy.

The difference should come from:

- composition
- imagery
- wording
- display scale
- section rhythm
- motion

not from adding extra fonts.

---

# 42. EVENT TYPOGRAPHIC EXPRESSION

Events may feel slightly more energetic through:

- larger dates
- strong metadata
- condensed information groups
- bolder numeric emphasis

but still use the same family system.

Event excitement should come from composition and imagery, not novelty fonts.

---

# 43. RESULTS TYPOGRAPHY

Results should prioritize evidence.

Use:

- strong numbers
- clear labels
- restrained serif headings
- high information contrast

Avoid making statistics so decorative that users cannot immediately understand what they represent.

---

# 44. ADMIN TYPOGRAPHY

Admin is a functional environment.

Use **Manrope almost exclusively**.

The serif family may appear only in a top-level admin title if a future approved admin theme calls for it.

Default admin hierarchy:

- Page title: 28–36px, 600
- Section heading: 20–24px, 600
- Body: 14–16px, 400
- Table: 13–14px, 400/500
- Label: 12–13px, 600
- Metadata: 11–12px, 500

Admin typography must optimize scanning and operations rather than cinematic expression.

---

# 45. TYPOGRAPHIC ANIMATION RULES

Text animation must respect the role of the text.

## Hero display

Allowed:

- masked upward reveal
- subtle fade
- controlled line stagger
- slight y-translation

Not allowed:

- bounce
- typewriter effect
- random letter scrambling
- aggressive blur-to-sharp transitions

## Body text

Normally:

- fade + small upward movement

Avoid animating every paragraph individually.

## Navigation

Use minimal hover/active transitions.

## Numbers

Animated counters are allowed where semantically appropriate.

The counter should settle cleanly on the real value.

---

# 46. HERO TEXT ANIMATION SPECIFICATION

Default sequence:

1. Kicker enters softly.
2. First display line reveals.
3. Remaining display lines follow with a small stagger.
4. Supporting copy appears.
5. Primary CTA appears.
6. Secondary CTA appears if present.
7. The podium/hero object remains the visual anchor throughout.

The text should never visually overpower the hero object so completely that the podium becomes irrelevant.

The exact timings belong to `08-MOTION-ANIMATION.md`, but the typography system reserves the hero for controlled, editorial motion only.

---

# 47. SEO / SEMANTIC HEADINGS

Visual scale must not dictate semantic HTML.

Use:

- one appropriate page-level `h1`
- logical `h2` / `h3` hierarchy
- supporting text in paragraphs or metadata elements

A visually small heading may still be an `h2`.

A giant decorative label must not be promoted to an `h1` merely because it is large.

The AI implementation must preserve semantic hierarchy while matching the visual hierarchy.

---

# 48. COMMON AI ERRORS TO PREVENT

The coding agent must not:

- introduce a third font for a single section
- use serif body text
- make every heading gold
- use all caps everywhere
- use 800-weight text throughout the site
- shrink body text below readability to preserve a card design
- create random font sizes between approved tokens
- use oversized display typography inside dense operational UI
- turn every title into a serif heading
- animate every text node
- rely on shadows for readability instead of contrast
- hardcode manual line breaks into reusable database-driven titles unless explicitly supported

When a text component does not fit, fix composition or component geometry before breaking the type system.

---

# 49. TYPE TOKEN IMPLEMENTATION MODEL

The CSS implementation should expose semantic variables similar to:

```css
:root {
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-ui: "Manrope", Arial, sans-serif;

  --type-display-xl: clamp(3.25rem, 7vw, 5.5rem);
  --type-display-lg: clamp(3rem, 6vw, 4.5rem);
  --type-display-md: clamp(2.5rem, 5vw, 3.5rem);
  --type-display-sm: clamp(2.125rem, 4vw, 2.75rem);

  --type-heading-lg: 2.25rem;
  --type-heading-md: 1.875rem;
  --type-heading-sm: 1.5rem;

  --type-body-lg: 1.25rem;
  --type-body-md: 1.0625rem;
  --type-body-sm: 0.9375rem;

  --type-label-lg: 0.875rem;
  --type-label-md: 0.8125rem;
  --type-meta: 0.75rem;
}
```

The exact CSS architecture can differ, but the semantic token approach should remain.

---

# 50. COMPONENT TYPE CONTRACT

Every reusable component should declare which typography roles it uses.

For example:

```text
Hero
- eyebrow: label-md
- title: display-lg
- description: body-lg
- primary CTA: label-lg

ProgramCard
- category: meta
- title: heading-sm
- description: body-sm
- CTA: label-md

EventCard
- date: meta
- title: heading-sm
- description: body-sm
- CTA: label-md

StatsBlock
- value: data-xl
- label: meta
```

The implementation agent should consult the component's typography contract instead of guessing from surrounding text.

---

# 51. TYPOGRAPHY QA CHECKLIST

Before a page is considered complete, verify:

- [ ] Correct font family for every text role
- [ ] Correct weight
- [ ] Correct hierarchy
- [ ] Correct line-height
- [ ] Correct tracking
- [ ] No unauthorized third font
- [ ] Hero line breaks are intentional
- [ ] Long database-driven titles do not break layouts
- [ ] Mobile typography remains readable
- [ ] Body copy remains comfortable to scan
- [ ] Metadata remains visually subordinate
- [ ] Buttons remain readable and correctly sized
- [ ] Gold/green text has sufficient contrast
- [ ] No important meaning is communicated only through typography styling
- [ ] Font loading does not cause large layout shifts
- [ ] Reduced-motion mode does not reduce text legibility

---

# 52. TYPOGRAPHY DECISION PRINCIPLE

When deciding between two typographic treatments, prefer the one that is:

1. More consistent with the two-family system.
2. Easier to scan.
3. More semantically correct.
4. More reusable.
5. More stable across responsive widths.
6. More compatible with dynamic backend content.

Do not sacrifice system consistency for a single attractive screenshot.

---

# 53. HANDOFF TO NEXT SPECIFICATIONS

This document establishes the typographic vocabulary used by the rest of the design system.

Next documents should build on these roles rather than redefining them.

Expected dependencies:

- `04-GRID-SPACING-LAYOUT.md` → type placement, widths, rhythm
- `05-COMPONENT-SYSTEM.md` → component-level type contracts
- `06-IMAGERY-ASSET-SYSTEM.md` → text/image relationship
- `08-MOTION-ANIMATION.md` → timing and choreography for type animation
- `09-3D-PODIUM.md` → hero typography relationship with the podium
- `10-RESPONSIVE-SYSTEM.md` → final breakpoint-specific type behavior
- page specifications → exact content hierarchy and component usage

The typography system should be considered **locked at the family/role level** unless a future approved design revision explicitly changes it.
