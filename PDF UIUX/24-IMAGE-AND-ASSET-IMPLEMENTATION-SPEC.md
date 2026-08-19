# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 24 — IMAGE & ASSET IMPLEMENTATION SPECIFICATION

Status: Master visual-asset handling contract.

Purpose:
Define how every image, logo, illustration, texture, 3D asset, icon, photograph, background, and visual effect is selected, stored, loaded, displayed, cropped, animated, and replaced across the PDF website.

This document exists to prevent the coding AI from making arbitrary asset choices while implementing the visual designs.

---

# 0. ASSET PHILOSOPHY

A premium website is not only about having good images.

It is about:

```text
correct asset
+
correct crop
+
correct scale
+
correct placement
+
correct loading
+
correct motion
+
correct responsive behavior
```

An excellent image used incorrectly can make a page look amateur.

---

# 1. ASSET CATEGORIES

The PDF asset system should distinguish:

```text
brand assets
photography
event imagery
academy imagery
resource imagery
3D assets
icons
illustrations
backgrounds
textures
decorative effects
social/share assets
fallback assets
```

---

# 2. ASSET REGISTER

Every production asset should eventually have an entry containing:

```text
asset ID
filename
type
source
license/permission status where relevant
dimensions
aspect ratio
focal point
intended page
intended component
desktop behavior
mobile behavior
loading priority
alt-text requirement
decorative/content status
```

---

# 3. ASSET ID

Use stable semantic IDs.

Example:

```text
brand.logo.primary
hero.podium.primary
hero.home.background
event.default.image
resource.default.thumbnail
```

Avoid:

```text
finalfinal2.png
newgoldthing.png
coolimage3.jpg
```

---

# 4. FILE NAMING

Use predictable names.

Recommended:

```text
pdf-logo-primary.svg
pdf-podium-primary.glb
event-debate-001.webp
academy-program-001.webp
```

Avoid spaces and ambiguous names.

---

# 5. BRAND LOGO

The official PDF logo is a protected brand asset.

Do not redraw it with CSS or substitute a visually similar logo.

---

# 6. LOGO FORMATS

Preferred:

```text
SVG
```

where a valid vector asset exists.

Raster logo should be a fallback, not the default, when vector is available.

---

# 7. LOGO CLEAR SPACE

Do not place other content too close to the logo.

Follow approved brand spacing.

---

# 8. LOGO COLOR

Use only approved logo variants.

Do not recolor the logo merely to make it fit a page.

---

# 9. LOGO ON DARK BACKGROUNDS

Use the approved light/appropriate variant.

---

# 10. LOGO ON LIGHT BACKGROUNDS

If a light surface is ever introduced, use the approved dark variant.

Do not invent one.

---

# 11. LOGO RESPONSIVENESS

Logo may scale between desktop and mobile but must remain recognizable.

Do not shrink it until it becomes visually insignificant.

---

# 12. LOGO ACCESSIBILITY

Provide appropriate accessible naming when the logo is meaningful.

If the logo is purely decorative beside an accessible site name, avoid redundant announcements.

---

# 13. PODIUM ASSET

The podium is the signature visual object.

Primary asset:

```text
hero.podium.primary
```

Implementation follows:

```text
18-3D-PODIUM-SPEC.md
```

---

# 14. PODIUM ASSET PRIORITY

Preferred hierarchy:

```text
live 3D
→ optimized/reduced 3D
→ approved static render
```

Never:

```text
live 3D
→ random stock podium
```

---

# 15. PODIUM STATIC FALLBACK

Static fallback must visually match the approved 3D object as closely as practical.

It should preserve:

```text
silhouette
black premium material
gold plaque
PDF identity
lighting direction
```

---

# 16. PODIUM TRANSPARENCY

If the implementation uses transparent rendering:

ensure the surrounding background remains coherent.

---

# 17. PODIUM RESOLUTION

Static fallback must be high enough resolution for the largest intended display.

Do not upscale a tiny preview into the hero.

---

# 18. PODIUM MOBILE ASSET

If mobile uses a static asset:

provide an appropriately sized mobile source where beneficial.

Do not load a massive desktop render unnecessarily.

---

# 19. PHOTOGRAPHY

Photography should feel:

```text
authentic
high-quality
purposeful
consistent
```

Avoid generic corporate stock imagery unless explicitly approved.

---

# 20. PHOTOGRAPHY STYLE

Where photography is used, favor:

```text
real debate
speaking
academy activity
audience
competition
community
learning
```

only where those subjects are actually available and approved.

---

# 21. PHOTOGRAPHY COLOR TREATMENT

Do not apply a universal heavy filter to every photograph.

Images should remain natural while fitting the dark/gold environment.

---

# 22. IMAGE OVERLAYS

Use overlays only when necessary for:

```text
text readability
visual integration
atmosphere
```

---

# 23. IMAGE OVERLAY STRENGTH

Overlay should be:

```text
just strong enough
```

to preserve readable content.

Do not crush photographs into near-black silhouettes unless intentionally designed.

---

# 24. EVENT IMAGES

Event imagery should communicate the specific event when possible.

Avoid using one generic photograph for every event unless it is explicitly the approved fallback.

---

# 25. EVENT IMAGE RATIO

Use the global event ratio token.

Default working concept:

```text
landscape
```

Exact production ratio follows the page/component specification.

---

# 26. EVENT IMAGE CROPPING

Use:

```text
object-fit: cover
```

when a fixed card ratio is required.

Set focal point intentionally.

---

# 27. EVENT IMAGE FALLBACK

If an event has no image:

use the approved PDF event fallback treatment.

Do not create random gradients or unrelated images.

---

# 28. ACADEMY IMAGES

Academy visuals should feel educational and purposeful.

Potential categories:

```text
training
speaking
classroom
competition
mentoring
```

Only use categories represented by approved assets/content.

---

# 29. RESOURCE IMAGES

Resources do not automatically require photographs.

Possible visual representations:

```text
document preview
article image
video thumbnail
approved category graphic
```

---

# 30. DOCUMENT PREVIEWS

Never fabricate the contents of a document preview.

Use an actual preview or a clearly generic branded resource placeholder.

---

# 31. ICON SYSTEM

Use one coherent icon family.

Preferred characteristics:

```text
minimal
precise
consistent stroke/fill behavior
```

---

# 32. ICON SOURCE

Prefer one approved icon library or custom SVG set.

Do not mix five unrelated icon families.

---

# 33. ICON SIZE

Use global icon tokens.

Do not manually create:

```text
17px here
19px there
23px somewhere else
```

unless the optical design genuinely requires it and is documented.

---

# 34. ICON COLOR

Icons should normally inherit semantic text/accent colors.

---

# 35. DECORATIVE ICONS

Decorative icons should not create redundant screen-reader content.

---

# 36. BACKGROUND IMAGES

Background imagery should support content.

It should never compete with:

```text
headline
CTA
navigation
```

---

# 37. HERO BACKGROUND

The homepage hero should remain predominantly:

```text
black
dark charcoal
controlled gold light
```

unless a specific approved visual establishes another treatment.

---

# 38. BACKGROUND POSITIONING

Background assets may require breakpoint-specific positioning.

Do not assume center-center works everywhere.

---

# 39. BACKGROUND CROP

Important subjects must remain visible.

---

# 40. BACKGROUND IMAGE LOADING

If the background is decorative and below the fold:

load lazily or defer where practical.

If it is the primary hero visual:

prioritize appropriately.

---

# 41. CSS BACKGROUNDS VS IMG

Use `<img>`/responsive image components when the image is meaningful content.

Use CSS/background layers for decorative imagery.

---

# 42. DECORATIVE LAYERS

Possible:

```text
grain
light
gradient
glow
vignette
particles
```

These must be isolated from semantic content.

---

# 43. GRAIN

If used:

keep it extremely subtle.

The goal is premium texture, not visible noise.

---

# 44. LIGHT EFFECT

Gold light should feel physical and cinematic.

Avoid cheap radial-gradient effects that look like UI decoration unless they visually match the approved design.

---

# 45. VIGNETTE

Can be used to improve focus around hero content.

Do not make corners excessively dark.

---

# 46. PARTICLES

Optional.

If implemented:

```text
low density
slow motion
low opacity
```

They must never become the main visual.

---

# 47. PARTICLES MOBILE

Prefer disabling or drastically reducing them on mobile.

---

# 48. DECORATIVE EFFECT PERFORMANCE

Decorative effects should not consume more performance than the actual content.

---

# 49. ASSET FORMATS

Preferred modern image formats where supported:

```text
AVIF
WebP
```

Use PNG/JPEG when appropriate for compatibility or source constraints.

---

# 50. SVG

Use SVG for:

```text
logos
icons
simple vector graphics
```

when appropriate.

---

# 51. SVG SECURITY

Do not blindly inject arbitrary SVG markup from untrusted sources.

---

# 52. VIDEO

If approved video exists:

define:

```text
poster
autoplay policy
muted behavior
controls
mobile behavior
reduced-motion/low-bandwidth behavior
```

---

# 53. HERO VIDEO

Video should not be introduced merely because the site is cinematic.

It must improve the story.

---

# 54. VIDEO MOBILE

Mobile may use:

```text
static poster
shorter video
reduced quality
```

depending on performance.

---

# 55. GIF

Avoid GIF when a more efficient video or animation format exists.

---

# 56. LOTTIE / VECTOR ANIMATION

Only use if the animation has a clear purpose and fits the visual system.

---

# 57. IMAGE LOADING PRIORITY

Classify images:

```text
critical
high
normal
lazy
```

---

# 58. CRITICAL ASSETS

Usually:

```text
logo
hero visual
above-the-fold primary image
```

---

# 59. NORMAL ASSETS

Usually:

```text
first content section imagery
visible cards
```

---

# 60. LAZY ASSETS

Usually:

```text
below-the-fold cards
galleries
secondary images
```

---

# 61. IMAGE PRELOADING

Do not preload the entire site.

Only preload genuinely critical visual assets.

---

# 62. RESPONSIVE IMAGE SOURCES

Where practical:

provide size-appropriate sources.

Conceptually:

```text
mobile
tablet
desktop
```

---

# 63. IMAGE WIDTHS

Generate sensible source widths rather than dozens of near-identical files.

---

# 64. IMAGE QUALITY

Balance:

```text
visual quality
file size
loading speed
```

Do not optimize to the point of visible compression artifacts.

---

# 65. IMAGE DIMENSION RULE

The source image should be large enough for its largest intended rendered size.

---

# 66. UPSCALING

Avoid major upscaling.

---

# 67. CROPPING RULE

Never crop away essential:

```text
person's face
speaker
logo
event title
key object
```

unless intentionally approved.

---

# 68. OBJECT POSITION TOKENS

Use semantic focal positions:

```text
center
top
bottom
left
right
```

and documented custom positions when required.

---

# 69. ART DIRECTION

When the same source needs radically different desktop/mobile crops, use art-directed sources rather than forcing one crop to work everywhere.

---

# 70. MOBILE IMAGE PRIORITY

If an image becomes too visually dominant:

reduce its height/scale before reducing content readability.

---

# 71. IMAGE BORDER RADIUS

Use the global image/card radius system.

---

# 72. IMAGE SHADOW

Avoid heavy shadows on every image.

---

# 73. IMAGE HOVER

Interactive image cards may use subtle:

```text
scale
brightness/overlay
```

Never excessive zoom.

---

# 74. IMAGE CAPTIONS

If captions exist:

use consistent typography and spacing.

---

# 75. IMAGE ALT TEXT

Alt text describes meaningful content.

Do not write:

```text
image
photo
picture
```

unless that is genuinely the content.

---

# 76. DECORATIVE IMAGE ALT

Decorative images should use appropriate empty alt semantics.

---

# 77. ALT TEXT SOURCE

Do not invent factual details that are not visible or supplied by the content source.

---

# 78. ASSET ERROR

If an image fails:

show an approved fallback.

Do not leave broken-image UI visible.

---

# 79. IMAGE ERROR FALLBACK

Fallback may contain:

```text
PDF mark
neutral surface
category indicator
```

depending on component.

---

# 80. BROKEN 3D FALLBACK

3D failure should be handled independently from page failure.

The page must remain functional.

---

# 81. ASSET CACHE

Static assets should use appropriate long-lived caching when deployment architecture permits.

---

# 82. ASSET VERSIONING

Use hashed build assets or equivalent cache-busting when supported by the framework/build system.

---

# 83. ASSET DIRECTORY

Recommended conceptual organization:

```text
assets/
  brand/
  podium/
  events/
  academy/
  resources/
  icons/
  backgrounds/
  textures/
  fallbacks/
```

Actual repository architecture may differ.

---

# 84. ASSET IMPORT RULE

Components should not contain dozens of arbitrary asset paths.

Use a centralized asset mapping when appropriate.

---

# 85. ASSET MANIFEST

A manifest can map:

```text
semantic asset ID
→ source path
→ metadata
```

This makes AI implementation more reliable.

---

# 86. ASSET MANIFEST EXAMPLE

Conceptual:

```text
hero.podium.primary
hero.home.background
brand.logo.primary
fallback.event
fallback.resource
```

---

# 87. CONTENT/ASSET SEPARATION

Content records should reference semantic asset IDs rather than hard-coded paths where practical.

---

# 88. AI ASSET RULE

Before adding an image:

1. Search the approved asset register.
2. Check whether an approved asset already exists.
3. Check intended usage.
4. Check responsive behavior.
5. Check licensing/source requirements.
6. Only then implement.

---

# 89. AI ASSET RULE — NO INVENTED PHOTOGRAPHY

Do not silently add stock imagery to fill empty areas.

If no suitable asset exists:

```text
ASSET REQUIRED
```

or use the documented fallback.

---

# 90. AI ASSET RULE — NO RANDOM LOGOS

Never replace the PDF logo with a text rendering.

---

# 91. AI ASSET RULE — NO RANDOM ICONS

Do not import an unrelated icon library just because one icon is missing.

---

# 92. AI ASSET RULE — NO SCREENSHOT AS PRODUCTION ASSET

Reference screenshots are design references.

Do not crop pieces out of screenshots and use them as production UI assets unless explicitly approved.

---

# 93. AI ASSET RULE — REFERENCE IMAGES

The supplied podium/reference images communicate:

```text
shape direction
lighting direction
premium atmosphere
logo/text treatment
composition
```

They do not authorize copying unrelated visual elements from those references.

---

# 94. AI ASSET RULE — GENERATED ASSETS

Generated visuals should be treated as approved assets only after review.

Do not generate replacements automatically without documenting them.

---

# 95. SOCIAL PREVIEW

The site may require:

```text
Open Graph image
social preview
favicon
```

These should use approved PDF branding.

---

# 96. FAVICON

Use the approved PDF mark or brand favicon.

---

# 97. APPLE/TOUCH ICONS

If required, generate from approved branding.

---

# 98. PWA ASSETS

Only implement if PWA functionality is actually required.

---

# 99. OG IMAGE

Should communicate:

```text
PDF identity
site/page context where appropriate
strong visual hierarchy
```

Avoid tiny unreadable text.

---

# 100. PAGE-SPECIFIC SOCIAL IMAGES

Only generate when the product requires them.

---

# 101. ASSET ACCESSIBILITY

Every meaningful asset needs an accessibility decision:

```text
meaningful → alt/semantic description
decorative → hidden from assistive technology
interactive → accessible name
```

---

# 102. ASSET RESPONSIVENESS

Every major asset must answer:

```text
What happens on mobile?
What happens on tablet?
What happens on desktop?
What happens if it fails?
```

---

# 103. ASSET MOTION

Animated assets need:

```text
trigger
duration
loop behavior
reduced-motion behavior
performance strategy
```

---

# 104. CONTINUOUS ANIMATION

Continuous animation should be rare.

Examples that may justify it:

```text
very subtle atmospheric light
3D object idle movement
```

---

# 105. IDLE PODIUM MOTION

If approved:

keep it nearly imperceptible.

The podium should feel alive, not like a spinning product viewer.

---

# 106. POINTER INTERACTION

Desktop pointer response can include:

```text
small lighting shift
small parallax
```

Avoid exaggerated cursor-following.

---

# 107. TOUCH INTERACTION

Do not require touch dragging to understand the podium.

---

# 108. PODIUM PLAQUE

The gold plaque is a brand-identifying detail.

It must remain legible at intended sizes.

---

# 109. PODIUM LOGO

Use the approved logo asset/model treatment.

Do not rebuild it with random text if a correct asset exists.

---

# 110. PODIUM MATERIAL

Visual target:

```text
predominantly black
subtle wood/material texture
sharp elegant edges
controlled highlights
```

Texture should remain subtle.

---

# 111. PODIUM LIGHT

Primary visual direction:

```text
single controlled golden spotlight from above
```

Additional lighting must support rather than compete with this.

---

# 112. PODIUM BACKGROUND

Predominantly:

```text
pitch/deep black
```

with restrained atmospheric gold.

---

# 113. PODIUM SHADOW

Shadow should reinforce depth.

Do not make the shadow visually louder than the object.

---

# 114. ASSET QA — DESKTOP

Inspect:

```text
resolution
crop
sharpness
contrast
position
loading
motion
```

---

# 115. ASSET QA — MOBILE

Inspect:

```text
crop
focal point
file size
visibility
contrast
motion
fallback
```

---

# 116. ASSET QA — ACCESSIBILITY

Inspect:

```text
alt text
decorative semantics
focus behavior
contrast
```

---

# 117. ASSET QA — PERFORMANCE

Inspect:

```text
file size
loading priority
LCP impact
lazy loading
3D cost
animation cost
```

---

# 118. ASSET QA — BRAND

Inspect:

```text
logo integrity
gold consistency
image tone
podium consistency
visual language
```

---

# 119. FINAL ASSET RULE

The asset system should make it impossible for the coding AI to think:

> "There is an empty space here, I'll just put a cool image."

Instead it should think:

```text
What visual role exists here?
Is there an approved asset?
What is its intended crop?
How does it behave responsively?
What is the fallback?
What is its performance cost?
```

If those answers are not known, the implementation must flag the missing decision.

# END OF IMAGE & ASSET IMPLEMENTATION SPECIFICATION
