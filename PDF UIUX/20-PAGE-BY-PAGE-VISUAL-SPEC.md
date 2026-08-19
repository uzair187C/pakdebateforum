# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 20 — PAGE-BY-PAGE VISUAL SPECIFICATION

Status: Master page-level visual implementation blueprint.

Purpose:
Define the visual and interaction contract for every public-facing page without inventing content that has not been approved.

IMPORTANT:
This document controls presentation. Actual page names, content fields, event counts, academy offerings, resource records, routes, and other factual information must come from the approved product/information-architecture specification.

If a factual requirement is not present in the source information:
- DO NOT invent it.
- Mark it as `DESIGN DECISION REQUIRED` or `CONTENT SOURCE REQUIRED`.

---

## 0. GLOBAL PAGE CONTRACT

Every public PDF page inherits:

- brand system
- typography system
- spacing system
- color system
- motion system
- responsive system
- asset system
- accessibility system
- navigation system

No page may introduce a completely independent design language.

## 1. PAGE COMPOSITION MODEL

Default structure:

`GLOBAL HEADER → PAGE INTRO / HERO → PRIMARY CONTENT → SUPPORTING CONTENT → OPTIONAL CTA → GLOBAL FOOTER`

Not every page requires every layer.

## 2. PAGE HERO PRINCIPLE

The hero establishes:
- where the visitor is
- what the page is about
- why the content matters

It should not consume space merely for decoration.

## 3. HERO SCALE

- Homepage: strongest visual statement.
- Interior pages: more restrained.
- Detail pages: content-first where appropriate.

## 4. HERO VISUAL LANGUAGE

Use:
- black / deep charcoal
- approved gold accent
- controlled cinematic lighting
- precise typography
- generous negative space

## 5. HERO IMAGE RULE

Only use a large image when it improves the story. Interior pages may use photography, an abstract background, the 3D system, or a typographic hero depending on approved content.

## 6. PAGE TITLE

Every page has one clear primary title. Visual scale must not replace semantic heading hierarchy.

## 7. PAGE INTRO

Where useful:

`eyebrow → H1 → supporting copy → primary action → secondary action`

Do not invent copy merely to fill this structure.

## 8. HOMEPAGE — PURPOSE

The homepage is the strongest expression of PDF's identity.

Visual priorities:
- identity
- value
- activity
- credibility
- pathways into the organization

Exact factual claims and section order follow approved product content.

## 9. HOMEPAGE — HERO

Primary visual:
`signature black futuristic podium`

Reference:
`18-3D-PODIUM-SPEC.md`

Desktop concept:
- copy and CTA occupy the primary reading zone
- podium occupies the visual anchor zone
- the object may overlap the atmospheric environment

## 10. HOMEPAGE — MOBILE HERO

Mobile is a recomposition, not a scaled desktop.

Preferred priority:
`headline → supporting copy → CTA → podium`

The podium must remain recognizable and must not push essential content excessively far below the fold.

## 11. HOMEPAGE — HERO MOTION

- initial: subtle entrance
- scroll: controlled depth/parallax
- pointer: very subtle response
- reduced motion: static composition

## 12. HOMEPAGE — HERO BACKGROUND

Default:
`near-black`

Optional:
- restrained gold light
- subtle atmospheric gradient
- minimal grain

Avoid busy particle fields or generic sci-fi backgrounds.

## 13. HOMEPAGE — BELOW HERO

The next section should provide informational context rather than another competing spectacle.

Recommended rhythm:
`visual hero → informational section → activity/content → visual section → proof/credibility → CTA`

Actual sections depend on approved content.

## 14. HOMEPAGE — CARDS

Shared card rules:
- consistent radius
- consistent padding
- consistent title hierarchy
- consistent action placement

Desktop hover may use small lift, small translation, and an accent response.

Mobile should remove hover-only behavior.

## 15. HOMEPAGE — FINAL CTA

The closing CTA should feel like a natural conclusion, not a disconnected promotional banner.

## 16. ABOUT PAGE — PURPOSE

Tone:
`credible · human · institutional · purposeful`

It should not look like a second homepage.

## 17. ABOUT PAGE — HERO

Possible structure:
`eyebrow → H1 → introduction → optional approved visual`

Do not invent a hero photograph if none is approved.

## 18. ABOUT PAGE — STORY

Long-form narrative uses:
- readable content width
- generous vertical rhythm
- clear section hierarchy
- restrained decorative elements

## 19. ABOUT PAGE — TIMELINE

If approved content includes chronology, use a restrained timeline. Do not introduce decorative complexity merely to fill the page.

## 20. ABOUT PAGE — TEAM

If team information exists, use consistent profile cards.

Potential fields:
- portrait
- name
- role
- short bio
- optional approved social/action

Only render fields actually available.

## 21. ABOUT PAGE — VALUES

If approved values exist, represent them as concise visual modules rather than oversized decorative blocks.

## 22. EVENTS PAGE — PURPOSE

Events should feel:
`energetic + organized`

## 23. EVENTS PAGE — HERO

More dynamic than About, but still controlled.

Possible:
`H1 → supporting copy → event atmosphere`

## 24. EVENTS PAGE — FILTERS

If filters exist:
- functional first
- compact
- clear active state
- keyboard accessible
- consistent with global control styling

## 25. EVENTS PAGE — GRID

Use a responsive multi-column grid on larger screens and a clean single-column or intentionally designed mobile layout on phones.

## 26. EVENTS PAGE — EVENT CARD

Recommended hierarchy when the data exists:

`image → status/category → title → date/time → location → metadata → action`

Do not render unavailable metadata.

## 27. EVENTS PAGE — EVENT IMAGE

Use one consistent ratio and crop system.

Hover:
- subtle image scale
- small accent response
- small card elevation

## 28. EVENTS PAGE — EMPTY / LOADING STATES

No results:
- intentional branded empty state

Loading:
- skeletons or placeholders matching final dimensions

Never show a blank grid.

## 29. EVENT DETAIL PAGE — PURPOSE

Prioritize:
`what → when → where → why/description → participation action`

Only where those fields are actually part of the product.

## 30. EVENT DETAIL — HERO

Use a major approved event image or a restrained dark visual treatment.

## 31. EVENT DETAIL — METADATA

Present important metadata in a structured, easily scannable block.

## 32. EVENT DETAIL — CONTENT

Long content uses article-like reading width.

Optional gallery uses the global image/lightbox system.

## 33. EVENT DETAIL — MOBILE

Important event metadata and the primary action must remain easy to access without excessive scrolling.

## 34. ACADEMY PAGE — PURPOSE

Communicate the approved learning pathway.

Tone:
`educational + disciplined + confident`

## 35. ACADEMY HERO

Possible:
`eyebrow → H1 → supporting copy → CTA → approved academy visual`

## 36. ACADEMY VISUALS

Potential sources:
- approved academy photography
- controlled podium variation
- abstract academic composition

Do not create a new visual language for Academy.

## 37. ACADEMY PROGRAMS

If programs/courses exist, present them as structured cards.

Only display fields supplied by the product content.

## 38. ACADEMY PROCESS

If a learning process exists, show it as numbered steps.

Potential structure:
`number → title → short description`

Scroll animation may use a restrained line progression and step reveal.

## 39. ACADEMY TESTIMONIALS

If approved testimonials exist:
- editorial presentation
- restrained cards
- real/approved portraits only

## 40. ACADEMY MOBILE

Program cards generally become single-column unless content explicitly benefits from horizontal scrolling.

## 41. RESOURCES PAGE — PURPOSE

Tone:
`organized · intelligent · useful · editorial`

## 42. RESOURCES HERO

Keep compact and information-oriented.

## 43. RESOURCE CATEGORIES / FILTERS

If categories exist, provide clear controls using the global filter system.

## 44. RESOURCE CARD

Potential:
`type/category → title → description → date → action`

Only render fields that exist.

## 45. RESOURCE MEDIA

Not every resource needs an image.

For documents, use actual previews when available. Never fabricate document content inside thumbnails.

## 46. RESOURCE DETAIL

Text-heavy resources use:
- readable width
- clear heading hierarchy
- controlled inline imagery
- compact hero

## 47. CONTACT PAGE — PURPOSE

Functional and trustworthy.

## 48. CONTACT PAGE — LAYOUT

If the approved structure includes a form, a possible desktop composition is:

`contact context | form`

Mobile becomes one column.

## 49. CONTACT FORM

Requirements:
- visible labels
- keyboard accessibility
- strong focus state
- inline validation
- intentional success state

## 50. AUTH / LOGIN

If authentication exists, prioritize function over cinematic decoration.

Structure:
`title → supporting text → fields → primary action → secondary links`

## 51. 404 / ERROR

404 should still feel like PDF.

Potential:
- large 404 typography
- small gold accent
- clear recovery action

Technical errors should never be exposed directly to users.

## 52. GLOBAL HEADER

Shared across public pages.

Desktop concept:
`logo → navigation → primary CTA/utility`

Exact navigation follows approved IA.

## 53. HEADER SCROLL STATE

If the hero uses an overlay header, it may transition to a darker solid surface after scrolling.

Transition should be fast and subtle.

## 54. MOBILE NAVIGATION

Mobile:
`logo + menu trigger`

Menu may become a full-height dark panel with:
- large navigation links
- gold active indicator
- primary CTA

Must support close, escape, focus management, and touch-friendly targets.

## 55. GLOBAL FOOTER

Shared across pages.

Possible structure:
`brand → navigation groups → contact/social if approved → legal`

Use a dark, spacious treatment with restrained gold.

## 56. PAGE TRANSITIONS

Optional:
- opacity
- clip
- small translation

Never delay navigation simply to show an animation.

## 57. SCROLL REVEAL

Use a shared reveal language.

Good:
- opacity + translate
- controlled clip reveal
- restrained image scale

Bad:
- every element animating independently
- excessive stagger
- constant motion

## 58. MOTION GROUPING

Animate related content together.

A section should feel like one composition, not dozens of unrelated animations.

## 59. RESPONSIVE CONTRACT

Desktop may use:
- overlap
- large typography
- spatial layouts
- 3D

Tablet reduces overlap while preserving hierarchy.

Mobile prioritizes:
- readability
- navigation
- CTA access
- content order
- performance

Never simply scale everything down.

## 60. IMAGE CONTRACT

Every major image must define:
- source
- aspect ratio
- focal point
- object position
- responsive behavior
- loading strategy
- fallback

## 61. DYNAMIC CONTENT

Cards must survive:
- short titles
- long titles
- missing images
- missing metadata
- different metadata lengths

Do not hide important content merely to preserve aesthetics.

## 62. EMPTY STATES

Zero events/resources/results must receive an intentional state.

Do not leave an empty layout.

## 63. PERFORMANCE

Each page loads only the visual assets it needs.

Only the primary above-the-fold visual should receive aggressive loading priority.

Below-the-fold images should generally lazy-load.

Reserve image dimensions to prevent layout shift.

## 64. ACCESSIBILITY

Every page must support:
- semantic heading hierarchy
- visible keyboard focus
- adequate contrast
- meaningful image alt text
- decorative images excluded from unnecessary assistive output
- reduced motion

## 65. AI IMPLEMENTATION CONTRACT

Before implementing a page, the coding agent must inspect:
1. global design docs
2. this page specification
3. asset register
4. content/information architecture
5. component rules
6. responsive rules
7. motion rules

## 66. AI — UNKNOWN REQUIREMENT

If documents conflict:
STOP and report the conflict.

Do not silently choose a direction.

## 67. AI — MISSING ASSET

If an asset is required but unavailable:
- use an approved fallback, or
- mark `ASSET REQUIRED`

Do not silently invent production imagery.

## 68. AI — NEW COMPONENT

Before creating a new component, check whether an existing shared component solves the requirement.

Shared candidates:
- Header
- Footer
- Button
- Card
- Section heading
- Image wrapper
- Modal/lightbox
- Filter
- Form controls

## 69. AI — PAGE-SPECIFIC CSS

If a rule belongs to the design system, do not hide it inside a one-off page stylesheet.

## 70. AI — MOTION

Every animation needs:
`purpose → trigger → duration → easing → reduced-motion behavior`

## 71. AI — 3D

The podium must follow `18-3D-PODIUM-SPEC.md`.

Never recreate a generic CSS lectern because the 3D asset is temporarily unavailable.

## 72. CROSS-PAGE VISUAL QA

Compare pages for:
- header
- footer
- buttons
- cards
- typography
- spacing
- background treatment
- gold usage
- image treatment
- motion

## 73. PAGE DIFFERENTIATION

Consistency does not mean identical pages.

Use the same system while giving each page its own emphasis:

`HOME = brand`
`ABOUT = identity`
`EVENTS = activity`
`EVENT DETAIL = participation`
`ACADEMY = learning`
`RESOURCES = knowledge`
`CONTACT = action`
`AUTH = function`
`404 = recovery`

This is a visual priority model, not permission to invent unsupported content.

## 74. FINAL PAGE DEFINITION

A page is considered visually specified only when these are defined:

- purpose
- hierarchy
- sections
- assets
- components
- responsive behavior
- motion
- loading/empty/error states
- accessibility
- performance

If any major answer is unknown, explicitly flag the missing decision.

---

# FINAL PRINCIPLE

These page specifications are implementation contracts.

They should answer:

What is this page?
What should the visitor notice first?
What should they do?
What should they feel?
What visual assets support it?
How does it behave on desktop?
How does it behave on mobile?
How does it animate?
What happens when content is missing?
What happens when an asset fails?
What happens with reduced motion?

If the approved information does not answer a factual question, do not guess.

# END OF PAGE-BY-PAGE VISUAL SPECIFICATION
