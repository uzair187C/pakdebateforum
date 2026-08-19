# PAK DEBATE FORUM (PDF) — DESIGN SYSTEM
# 19 — VISUAL ASSET SPECIFICATION

Status: Visual asset master specification / implementation handoff
Purpose: Define how every image, graphic, texture, logo, icon, illustration, background, and generated visual is selected, prepared, placed, and made responsive.

IMPORTANT:
This document is an asset-system specification, not a claim that all final assets already exist.
Where an asset has not yet been approved/generated, mark it as REQUIRED rather than inventing one.

The visual system must feel like one website.

No page should look as though it was designed independently by a different designer.

---

# 0. CORE OBJECTIVE

Every visual asset must support the PDF identity:

```text
premium
academic
debate-focused
modern
cinematic
confident
minimal
editorial
black + gold
```

The asset system should never become:

```text
generic education website
generic university template
stock-photo collage
overly futuristic SaaS
overly dark page with unreadable content
```

---

# 1. ASSET HIERARCHY

Assets are divided into:

```text
A — Brand assets
B — Signature 3D assets
C — Hero imagery
D — Editorial imagery
E — Event imagery
F — Academy imagery
G — Decorative assets
H — UI icons
I — Background textures
J — Motion assets
K — Fallback assets
```

---

# 2. BRAND ASSETS

Required:

```text
PDF logo
PDF logo light
PDF logo dark
academy lockup if approved
favicon
social/share image
```

Never recreate the logo with ordinary text.

---

# 3. LOGO SOURCE

Use the approved original logo asset whenever available.

Preferred source:

```text
SVG
```

Raster versions are secondary.

---

# 4. LOGO COLOR

Maintain the approved PDF gold.

Do not manually approximate the logo color page-by-page.

---

# 5. LOGO CLEAR SPACE

Logo must have consistent minimum clear space.

Do not place important visual detail directly against it.

---

# 6. LOGO ON PHOTOGRAPHY

If the logo is placed over an image:

```text
contrast must remain high
```

Use a controlled dark overlay when necessary.

---

# 7. SIGNATURE 3D ASSET

The podium is a special asset class.

Reference:

```text
18-3D-PODIUM-SPEC.md
```

The podium should not be treated as an ordinary image.

---

# 8. PODIUM ASSET PACKAGE

Recommended package:

```text
pdf-podium-v01.glb
pdf-podium-fallback.webp
pdf-podium-mobile.webp
pdf-podium-preview.webp
```

Optional:

```text
textures/
environment/
```

---

# 9. HERO ASSET STRATEGY

The homepage should use a controlled visual hierarchy.

The hero does not require multiple competing photographs.

Primary visual:

```text
podium / signature object
```

Secondary visual layer:

```text
dark atmospheric background
```

Optional tertiary layer:

```text
subtle gold light / particles / texture
```

---

# 10. HERO BACKGROUND

Default direction:

```text
deep black
```

with restrained tonal variation.

Avoid bright photographic hero backgrounds unless a specific campaign requires one.

---

# 11. HERO ATMOSPHERE

Allowed:

```text
soft gold glow
very subtle haze
controlled light falloff
subtle grain
```

Avoid:

```text
floating gold particles everywhere
star fields
neon grids
random lens flares
```

---

# 12. HERO IMAGE RULE

If an image is introduced into the hero, it must have a clear narrative purpose.

Do not add an image merely to fill empty space.

---

# 13. HERO PHOTOGRAPHY

If future photography is used, prioritize:

```text
debate
speaking
auditorium
academic discussion
competition
students
stage
argumentation
public speaking
```

---

# 14. PHOTOGRAPHY STYLE

Preferred:

```text
cinematic
editorial
authentic
high contrast
natural expressions
professional
```

---

# 15. AVOID STOCK PHOTO LOOK

Avoid obvious:

```text
handshake stock photos
fake smiling office teams
generic classroom poses
overly staged business people
```

---

# 16. PEOPLE IN PHOTOGRAPHY

Images should show genuine activity where possible.

Preferred:

```text
speaking
listening
thinking
competing
researching
presenting
collaborating
```

---

# 17. DEBATE PHOTOGRAPHY

When showing debate:

the image should communicate:

```text
intellect
confidence
attention
argument
respect
energy
```

not aggression.

---

# 18. ACADEMY PHOTOGRAPHY

Academy-related imagery can emphasize:

```text
learning
practice
coaching
discussion
public speaking
competition preparation
```

---

# 19. EVENT PHOTOGRAPHY

Event images should prioritize:

```text
stage
participants
audience
awards
interaction
speaker moments
competition atmosphere
```

---

# 20. EVENT IMAGE CONSISTENCY

A single event page should not contain wildly different image treatments.

Use consistent:

```text
crop
corner radius
overlay
caption style
```

---

# 21. IMAGE CROP SYSTEM

Define a focal point for every important image.

Possible focal points:

```text
center
center-left
center-right
top-center
bottom-center
```

---

# 22. OBJECT POSITION

Do not blindly use:

```text
object-position: center
```

for every image.

---

# 23. HERO CROPPING

Hero imagery should be art-directed per breakpoint.

Desktop:

```text
wide cinematic crop
```

Mobile:

```text
vertical crop
```

---

# 24. MOBILE IMAGE CROP

Never allow CSS to crop the subject's face or key action accidentally.

---

# 25. MOBILE ART DIRECTION

If the desktop image cannot crop safely:

use a dedicated mobile asset.

---

# 26. IMAGE ORIENTATION

Preferred:

```text
landscape for wide sections
portrait for mobile-first visual moments
square for cards
```

depending on component.

---

# 27. CARD IMAGES

Event/resource/card imagery should share a consistent ratio.

Recommended starting point:

```text
16:10 or 16:9
```

Final ratio follows the actual component layout.

---

# 28. CARD CROP

Use `object-fit: cover` where appropriate.

Focal point must be configured.

---

# 29. FULL-BLEED IMAGES

Use sparingly.

A full-bleed image should represent a major storytelling moment.

---

# 30. IMAGE OVERLAY

Dark overlay may be applied when:

```text
white text sits over image
```

---

# 31. OVERLAY STRENGTH

Use the minimum overlay needed for readability.

Do not automatically make every image nearly black.

---

# 32. GRADIENT OVERLAY

For text over images:

```text
directional gradient
```

is often preferable to a uniform black layer.

---

# 33. GOLD OVERLAY

Gold should not be used as a heavy photo filter.

Use gold as:

```text
accent
light
border
small gradient
```

---

# 34. IMAGE CORNER LANGUAGE

Use a consistent corner strategy.

Preferred:

```text
restrained radius
```

Avoid mixing:

```text
sharp
pill
huge rounded
```

without component logic.

---

# 35. IMAGE BORDER

Optional subtle border for dark-on-dark separation.

---

# 36. IMAGE SHADOW

Use restrained shadow.

Avoid generic floating-card shadows everywhere.

---

# 37. IMAGE DEPTH

Depth can be created through:

```text
scale
shadow
overlap
light
blur
```

not necessarily heavy borders.

---

# 38. BLUR

Background-only imagery may use subtle blur.

Never blur important content.

---

# 39. BACKGROUND IMAGE

Background images must remain subordinate.

---

# 40. BACKGROUND DETAIL

If background detail competes with typography:

reduce:

```text
opacity
contrast
sharpness
saturation
```

---

# 41. DARK BACKGROUND PRINCIPLE

Dark does not mean empty.

Use:

```text
tonal gradients
light falloff
architectural depth
very subtle texture
```

---

# 42. BLACK GRADIENT SYSTEM

Preferred backgrounds may transition between:

```text
near-black
deep charcoal
black
```

with restrained warm highlights.

---

# 43. GOLD GRADIENT

Gold gradients should be subtle.

Avoid:

```text
rainbow
bright yellow-to-orange
gaming gold
```

---

# 44. TEXTURE ASSET

Optional textures:

```text
very subtle grain
fine paper
dark architectural texture
soft wood grain where relevant
```

---

# 45. TEXTURE OPACITY

Extremely low.

The visitor should notice atmosphere before texture.

---

# 46. TEXTURE REPEAT

Avoid obvious repeating patterns.

---

# 47. TEXTURE SCALE

Texture should feel large enough to avoid visible tiling.

---

# 48. TEXTURE PERFORMANCE

Prefer small optimized textures with CSS repetition where appropriate.

Do not ship huge textures unnecessarily.

---

# 49. DECORATIVE LINES

Potential asset/system:

```text
thin gold line
hairline divider
architectural rule
```

---

# 50. DECORATIVE LINES

Should communicate precision.

Not:

```text
ornament
```

---

# 51. GEOMETRIC DECORATION

Use only simple controlled geometry.

Examples:

```text
thin rectangles
subtle arcs
fine grids
minimal frames
```

---

# 52. GOLD PARTICLES

Particles are optional atmosphere.

They must never become the primary design language.

---

# 53. PARTICLE DENSITY

Very low.

---

# 54. PARTICLE MOTION

Slow and subtle.

---

# 55. PARTICLE MOBILE

Reduce or disable if unnecessary.

---

# 56. ICON SYSTEM

All UI icons must share a coherent style.

Preferred:

```text
minimal
line-based
clean
```

---

# 57. ICON STROKE

Use consistent stroke weight within the icon family.

---

# 58. ICON COLOR

Default:

```text
muted light
```

Active:

```text
PDF gold
```

---

# 59. ICON SIZE

Define a small fixed scale system.

Avoid random icon sizes.

---

# 60. ICON SOURCE

Prefer:

```text
SVG
```

over raster images.

---

# 61. UI ICONS

Examples:

```text
menu
close
search
arrow
chevron
calendar
location
clock
filter
download
external link
```

---

# 62. CUSTOM ICONS

Create custom icons only where generic icons do not communicate the intended meaning.

---

# 63. ICON ANIMATION

Icons can animate subtly:

```text
arrow translation
chevron rotation
menu morph
```

Avoid flashy animations.

---

# 64. EVENT BADGES

If event categories use badges:

keep them visually consistent.

---

# 65. BADGE ASSET

Prefer CSS/SVG rather than rasterized badge images.

---

# 66. AWARD/ACHIEVEMENT GRAPHICS

If the Academy uses award graphics:

they should inherit:

```text
black
gold
white
```

and the same visual precision.

---

# 67. MEDALS

Do not introduce generic shiny medal stock imagery unless specifically needed.

---

# 68. CERTIFICATES

If displayed:

use real PDF-approved certificate artwork or carefully designed digital mockups.

---

# 69. SOCIAL MEDIA GRAPHICS

Share graphics should use:

```text
PDF logo
strong title
black/gold system
clear hierarchy
```

---

# 70. OG IMAGE

Maintain a dedicated social preview asset.

Recommended:

```text
1200 × 630
```

unless the platform requirements change.

---

# 71. FAVICON

Use a simplified recognizable mark.

Do not use a tiny full lockup that becomes unreadable.

---

# 72. APPLE TOUCH ICON

Provide when required by deployment architecture.

---

# 73. EVENT THUMBNAILS

Each event should have:

```text
consistent ratio
consistent crop
consistent overlay
```

---

# 74. EVENT HERO

A major event may receive a larger visual treatment.

---

# 75. EVENT HERO VARIATION

Event-specific colors may exist only if approved.

PDF's core identity remains dominant.

---

# 76. ACADEMY HERO

Academy visual should communicate:

```text
learning
discipline
confidence
growth
```

---

# 77. ACADEMY VISUALS

Avoid turning Academy into a completely different brand.

---

# 78. RESOURCE VISUALS

Resources can use:

```text
editorial imagery
document previews
topic illustrations
```

---

# 79. DOCUMENT PREVIEWS

If a resource is a PDF/document:

use a real preview when available.

Do not fabricate content inside a thumbnail.

---

# 80. BLOG/ARTICLE IMAGES

If editorial content exists:

use a consistent image treatment.

---

# 81. ARTICLE HERO

Prefer a cinematic wide image with enough negative space for title placement.

---

# 82. ARTICLE INLINE IMAGES

Use appropriate aspect ratios.

Do not force every image into one ratio.

---

# 83. IMAGE CAPTIONS

Captions should be visually subordinate.

---

# 84. IMAGE CREDIT

If photography requires credit:

design a consistent credit treatment.

---

# 85. COPYRIGHT

Do not use random internet images without appropriate rights.

---

# 86. GENERATED IMAGES

Generated imagery may be used for concept/reference assets.

Production use must still follow the project's rights and approval process.

---

# 87. REFERENCE VS PRODUCTION

Every generated image must be classified:

```text
REFERENCE ONLY
```

or:

```text
APPROVED PRODUCTION ASSET
```

---

# 88. REFERENCE IMAGE PURPOSE

A reference image can communicate:

```text
composition
lighting
material
mood
camera
```

without being the final website asset.

---

# 89. DO NOT ACCIDENTALLY SHIP REFERENCES

Reference images belong in the design/reference directory, not automatically in production assets.

---

# 90. IMAGE NAMING

Recommended:

```text
pdf-[page]-[purpose]-[variant]-v01.ext
```

Examples:

```text
pdf-home-hero-podium-v01.webp
pdf-events-hero-v01.webp
pdf-academy-hero-mobile-v01.webp
```

---

# 91. FILE NAMING

Avoid:

```text
final-final2.png
newimage.png
coolpic.jpg
IMG_1234.jpg
```

---

# 92. VERSIONING

Approved changes increment version.

---

# 93. DIRECTORY STRUCTURE

Recommended conceptual structure:

```text
public/
  assets/
    brand/
    3d/
    heroes/
    events/
    academy/
    resources/
    backgrounds/
    textures/
    icons/
    social/
    fallbacks/
```

---

# 94. SOURCE ASSETS

Keep editable/source assets outside the public production directory when architecture allows.

---

# 95. SOURCE DIRECTORY

Conceptually:

```text
design/
  source/
  references/
  exports/
```

---

# 96. REFERENCE DIRECTORY

Store visual references separately from production exports.

---

# 97. EXPORT DIRECTORY

Only approved optimized assets should reach production.

---

# 98. IMAGE FORMATS

Preferred modern formats:

```text
WebP
AVIF
```

with fallback where required.

---

# 99. SVG

Use SVG for:

```text
logos
icons
simple line graphics
vectors
```

---

# 100. PNG

Use when:

```text
transparency
lossless raster
```

is genuinely required.

---

# 101. JPEG

Use mainly for legacy photographic workflows if modern formats are unavailable.

---

# 102. GIF

Avoid GIF for modern animation.

Use:

```text
CSS
WebGL
video
modern animated formats
```

as appropriate.

---

# 103. VIDEO

Video may be used for major storytelling sections only.

---

# 104. VIDEO HERO

Do not introduce hero video merely because it looks impressive.

The podium is already the signature motion object.

---

# 105. VIDEO PERFORMANCE

If used:

provide:

```text
poster
mobile strategy
reduced-motion alternative
```

---

# 106. VIDEO AUTOPLAY

If used, it should be:

```text
muted
looped
carefully optimized
```

subject to browser behavior.

---

# 107. VIDEO MOBILE

Consider replacing video with a still when performance or bandwidth matters.

---

# 108. ANIMATED DECORATION

Prefer lightweight CSS/WebGL for small effects.

---

# 109. LARGE DECORATIVE ASSETS

Do not ship large transparent PNGs when a CSS/SVG/WebGL equivalent is practical.

---

# 110. IMAGE RESOLUTION

Provide enough resolution for intended display density.

Do not use 4000px images where a 1600px export is sufficient.

---

# 111. RESPONSIVE IMAGE SIZES

Where supported:

```text
srcset
sizes
responsive image service
```

should be used.

---

# 112. IMAGE PRELOADING

Only preload the primary above-the-fold image.

Do not preload every page image.

---

# 113. LAZY LOADING

Below-the-fold imagery should generally lazy-load.

---

# 114. DECODING

Use browser-friendly asynchronous decoding where appropriate.

---

# 115. LAYOUT SHIFT

Image dimensions/aspect ratios must be known before loading.

---

# 116. ASPECT RATIO

Always reserve image space.

Do not let content jump when images load.

---

# 117. BLUR-UP

Optional for large imagery.

If used, it must remain subtle.

---

# 118. IMAGE PLACEHOLDER

Placeholder should match:

```text
background tone
```

not appear as a random gray box.

---

# 119. IMAGE ERROR

If an image fails:

provide a designed fallback.

---

# 120. IMAGE ERROR FALLBACK

For editorial images:

```text
dark branded placeholder
```

may be preferable to broken-image iconography.

---

# 121. ACCESSIBILITY

Important content images require meaningful alt text.

Decorative images should use empty alt where appropriate.

---

# 122. ALT TEXT

Describe the content, not the design effect.

Bad:

```text
beautiful premium black image
```

Good:

```text
debate participants speaking on stage
```

when factually accurate.

---

# 123. DECORATIVE ASSETS

Do not add unnecessary alt text.

---

# 124. 3D ACCESSIBILITY

The podium itself can be decorative.

Do not force screen readers to describe visual effects.

---

# 125. CONTRAST

Every image-overlay text combination must pass the project's readability target.

---

# 126. GOLD TEXT

Gold text over imagery must be checked carefully.

Gold is an accent, not an automatic readable body-text color.

---

# 127. BODY TEXT OVER IMAGES

Prefer light/white text where contrast requires it.

---

# 128. IMAGE COLOR GRADING

Maintain a consistent visual grade:

```text
deep blacks
controlled highlights
warm gold accents
natural skin tones
```

---

# 129. SKIN TONES

Do not allow gold color grading to make people look unnaturally yellow.

---

# 130. SATURATION

Overall imagery should not be excessively saturated.

---

# 131. BLACK LEVEL

Avoid crushed blacks that remove important photographic detail.

---

# 132. HIGHLIGHTS

Avoid clipped white highlights in important imagery.

---

# 133. GOLD HIGHLIGHTS

Gold can be brighter than normal accents in cinematic scenes, but should remain controlled.

---

# 134. PAGE BACKGROUND ASSET

Background may be entirely CSS-generated.

Do not create an image asset when a gradient is sufficient.

---

# 135. CSS-FIRST PRINCIPLE

Use CSS for:

```text
gradients
simple shadows
simple lines
simple glow
basic shapes
```

---

# 136. SVG-FIRST PRINCIPLE

Use SVG for:

```text
logos
icons
simple diagrams
brand geometry
```

---

# 137. RASTER-FIRST PRINCIPLE

Use raster photography for:

```text
complex real-world imagery
```

---

# 138. WEBGL-FIRST PRINCIPLE

Use WebGL/3D for:

```text
podium
complex spatial objects
```

when performance allows.

---

# 139. ASSET DECISION TREE

Ask:

```text
Can CSS do it?
→ CSS

Can SVG do it cleanly?
→ SVG

Is it a real photograph?
→ optimized image

Is it a spatial signature object?
→ 3D

Is it motion-heavy?
→ appropriate motion technology
```

---

# 140. NO-ASSET PRINCIPLE

Do not create an asset just because an asset can be created.

---

# 141. VISUAL RESTRAINT

Empty space is part of the design system.

---

# 142. NEGATIVE SPACE

Images should often be paired with intentional negative space.

---

# 143. TEXT SAFE ZONE

When an image carries text:

reserve a safe zone for typography.

---

# 144. HERO SAFE ZONE

For desktop hero images:

prefer visual subject placement that allows headline/CTA space.

---

# 145. MOBILE SAFE ZONE

For portrait crops:

keep the primary subject away from text collision zones.

---

# 146. ASSET ART DIRECTION

Every major asset should answer:

```text
What is the visitor supposed to feel?
```

---

# 147. EMOTIONAL TARGET

PDF visuals should generally communicate:

```text
confidence
intellect
ambition
discipline
belonging
opportunity
```

---

# 148. EVENT EMOTION

Event visuals may increase:

```text
energy
competition
celebration
```

without breaking the core identity.

---

# 149. ACADEMY EMOTION

Academy visuals may emphasize:

```text
growth
learning
mentorship
confidence
```

---

# 150. RESOURCES EMOTION

Resource visuals should feel:

```text
clear
useful
intelligent
editorial
```

---

# 151. ABOUT PAGE EMOTION

About visuals should feel:

```text
human
credible
institutional
purposeful
```

---

# 152. CONTACT PAGE

Do not require a giant hero image.

A refined visual treatment may be enough.

---

# 153. AUTHENTICATION PAGES

If authentication exists:

keep imagery restrained.

Function should dominate.

---

# 154. ADMIN UI

Do not automatically use cinematic imagery in admin screens.

Admin should prioritize usability.

---

# 155. PUBLIC VS ADMIN ASSET LANGUAGE

Public site:

```text
cinematic
premium
brand-forward
```

Admin:

```text
functional
clear
compact
```

---

# 156. PAGE ASSET MAP

Each public page should have an explicit asset list.

Recommended format:

```text
PAGE
PRIMARY VISUAL
SECONDARY VISUAL
DECORATIVE ASSETS
MOBILE VARIANT
FALLBACK
STATUS
```

---

# 157. HOME ASSET MAP

Primary:

```text
3D podium
```

Secondary:

```text
dark atmospheric background
```

Decorative:

```text
subtle gold light
```

Fallback:

```text
podium static render
```

---

# 158. ABOUT ASSET MAP

To be determined from final information architecture.

Do not invent final imagery before the page design is approved.

---

# 159. EVENTS ASSET MAP

Likely:

```text
event hero
event thumbnails
event detail imagery
```

Exact quantity depends on actual event content.

---

# 160. ACADEMY ASSET MAP

Likely:

```text
academy hero
learning imagery
coach/instructor imagery
program visuals
```

Only use assets corresponding to real content.

---

# 161. RESOURCES ASSET MAP

Likely:

```text
resource thumbnails
document previews
editorial imagery
```

---

# 162. ASSET STATUS SYSTEM

Every asset should have one status:

```text
REQUIRED
CONCEPT
GENERATED
REVIEW
APPROVED
PRODUCTION
RETIRED
```

---

# 163. REQUIRED

Asset has not been created yet.

---

# 164. CONCEPT

Visual reference exists but is not approved production.

---

# 165. GENERATED

Generated asset exists but still requires review.

---

# 166. REVIEW

Asset is being evaluated.

---

# 167. APPROVED

Visual direction has been accepted.

---

# 168. PRODUCTION

Optimized asset is deployed.

---

# 169. RETIRED

No longer used but retained for history if needed.

---

# 170. ASSET REGISTER

Maintain a central register.

Suggested columns:

```text
ID
PAGE
PURPOSE
FILE
TYPE
STATUS
DESKTOP
TABLET
MOBILE
FOCAL POINT
ALT TEXT
SOURCE
LICENSE
NOTES
```

---

# 171. ASSET ID

Use stable IDs.

Example:

```text
ASSET-HOME-001
```

---

# 172. SOURCE FIELD

Record:

```text
original photography
generated
SVG
3D
licensed stock
internal design
```

---

# 173. LICENSE FIELD

For externally sourced assets, document rights.

---

# 174. AI-GENERATED ASSET RECORD

Record:

```text
prompt/reference
date
version
approval state
```

when useful for reproducibility.

---

# 175. REFERENCE IMAGE RECORD

Record:

```text
what the image communicates
what must be retained
what must NOT be copied
```

---

# 176. IMAGE GENERATION PRINCIPLE

When creating new references:

the prompt should describe:

```text
composition
lighting
material
mood
camera
subject
```

rather than relying on vague terms like:

```text
make it premium
```

---

# 177. REFERENCE INSPIRATION RULE

Reference images guide:

```text
visual direction
```

not necessarily:

```text
exact composition
```

unless explicitly approved.

---

# 178. ORIGINALITY

Do not unnecessarily replicate another site's unique visual asset.

PDF should develop its own identity.

---

# 179. BRAND SIGNATURE

The strongest recurring visual signatures should be:

```text
black
gold
podium
architectural spacing
cinematic light
precise typography
```

---

# 180. ASSET DENSITY

Not every section needs an image.

---

# 181. IMAGE RHYTHM

A long page should alternate between:

```text
visual richness
textual breathing room
```

---

# 182. VISUAL FATIGUE

Too many images reduce the premium feel.

---

# 183. HERO → CONTENT TRANSITION

Do not immediately follow the hero with another huge image.

Give the visual system a moment to breathe.

---

# 184. SECTION IMAGE SCALE

Major imagery should have hierarchy.

Not every image should be full-screen.

---

# 185. IMAGE GRID

Where multiple images are shown:

use a deliberate grid.

Avoid random masonry unless content justifies it.

---

# 186. GRID CONSISTENCY

Maintain:

```text
gutter
ratio
radius
caption
```

consistency.

---

# 187. HOVER IMAGE

Desktop image hover may use:

```text
very subtle scale
brightness adjustment
```

---

# 188. HOVER SCALE

Small.

Never create a dramatic zoom that breaks the grid.

---

# 189. HOVER MOBILE

Disable hover-specific effects.

---

# 190. IMAGE REVEAL

Scroll reveal can use:

```text
clip-path
opacity
translate
scale
```

sparingly.

---

# 191. IMAGE REVEAL RULE

Do not animate every image independently at different random speeds.

---

# 192. REVEAL SYSTEM

Use a shared reveal language across the site.

---

# 193. IMAGE PARALLAX

Optional for selected major images.

---

# 194. PARALLAX LIMIT

Very subtle.

Avoid motion sickness and performance cost.

---

# 195. PARALLAX MOBILE

Generally disable or simplify.

---

# 196. IMAGE PREVIEW

If a lightbox exists:

use high-resolution source.

---

# 197. LIGHTBOX

Lightbox should preserve:

```text
black environment
gold accent
simple controls
```

---

# 198. LIGHTBOX ACCESSIBILITY

Support:

```text
keyboard close
focus management
screen-reader labeling
```

---

# 199. LIGHTBOX MOBILE

Use almost full-screen presentation.

---

# 200. IMAGE DOWNLOAD

Only provide download controls when content rights and product requirements support them.

---

# 201. DECORATIVE SHADOW ASSET

Prefer CSS shadow rather than raster shadow images.

---

# 202. GLOW ASSET

Prefer CSS/WebGL light where possible.

---

# 203. GOLD DUST

If used, it should be subtle enough that removing it does not change the layout.

---

# 204. ASSET INDEPENDENCE

A page must remain understandable if decorative assets fail.

---

# 205. CONTENT INDEPENDENCE

Critical information must never exist only inside an image.

---

# 206. TEXT IN IMAGE

Avoid putting essential page copy inside raster artwork.

---

# 207. EXCEPTION

Brand lockups or decorative campaign artwork may contain text when intentionally designed.

---

# 208. RESPONSIVE ART DIRECTION

Desktop and mobile are separate compositions.

Do not assume:

```text
desktop asset + CSS crop = perfect mobile
```

---

# 209. BREAKPOINT STRATEGY

Use the project's global responsive breakpoints.

Do not create asset-specific breakpoints without reason.

---

# 210. MOBILE FIRST REVIEW

Every major asset must be previewed at mobile size.

---

# 211. TABLET REVIEW

Important hero and full-width imagery should also be reviewed at tablet dimensions.

---

# 212. LARGE SCREEN REVIEW

Hero imagery should be checked on wide desktop screens.

---

# 213. ULTRAWIDE

Do not allow background images to become absurdly stretched.

---

# 214. FOCAL POINT ON ULTRAWIDE

Subject should remain visually intentional.

---

# 215. CROPPING SAFETY

Never crop:

```text
faces
logos
important objects
```

without explicit design approval.

---

# 216. IMAGE QUALITY

Avoid visible compression artifacts.

---

# 217. COMPRESSION

Compress aggressively enough for performance while protecting:

```text
faces
fine detail
gold gradients
dark shadow transitions
```

---

# 218. DARK IMAGE BANDing

Dark gradients can band.

Use appropriate format/processing to reduce visible banding.

---

# 219. GOLD GRADIENT BANDING

Same principle applies to gold light.

---

# 220. COLOR CONSISTENCY

The same gold should feel like the same gold across:

```text
logo
3D podium
buttons
lines
icons
graphics
```

---

# 221. ASSET TESTING

Test major assets on:

```text
dark background
light background
mobile
desktop
high-DPI
low-bandwidth
```

where relevant.

---

# 222. FINAL ASSET QA

Check:

```text
[ ] correct source
[ ] correct version
[ ] correct crop
[ ] correct focal point
[ ] optimized file
[ ] responsive variant
[ ] alt text
[ ] rights/license
[ ] no accidental stock watermark
[ ] no unintended text
[ ] no visual artifacts
[ ] correct black/gold grade
[ ] consistent radius
[ ] consistent overlay
[ ] no layout shift
```

---

# 223. AI CODING INSTRUCTION

When an AI coding agent needs an image that does not exist:

DO NOT let it invent a random stock image.

It should:

```text
1. check the asset register
2. check whether a required asset exists
3. use the approved asset if available
4. use the specified fallback if available
5. otherwise mark the asset as TODO/placeholder
```

---

# 224. PLACEHOLDER RULE

Temporary placeholders must be visibly intentional.

Do not quietly ship unrelated stock imagery.

---

# 225. AI CODING INSTRUCTION — PODIUM

If the 3D podium asset is unavailable:

use the approved static podium reference/render.

Do not generate a generic CSS lectern.

---

# 226. AI CODING INSTRUCTION — LOGO

Never approximate the PDF logo using text or an unrelated icon.

---

# 227. AI CODING INSTRUCTION — BACKGROUND

If a background reference has not been approved:

use the defined CSS black/gold atmospheric system rather than inventing a busy image.

---

# 228. AI CODING INSTRUCTION — UNKNOWN ASSET

If an asset requirement is unclear:

do not silently make a major visual decision.

Mark it:

```text
DESIGN DECISION REQUIRED
```

---

# 229. DESIGNER APPROVAL GATE

Major new visual assets require approval before becoming part of the core visual language.

---

# 230. FINAL ASSET PRINCIPLE

The asset system exists to make the website feel like:

```text
ONE WORLD
```

not:

```text
a collection of beautiful pictures.
```

---

# 231. END STATE

The final PDF asset library should contain:

```text
brand assets
signature podium assets
approved page hero imagery
event imagery
academy imagery
resource imagery
background systems
textures
icons
social assets
responsive variants
fallbacks
```

Every asset should have:

```text
purpose
owner/source
status
responsive behavior
visual rules
```

The website should remain visually coherent even as new events, academy programs, resources, photographs, and campaigns are added.

The asset system is therefore a living design infrastructure, not a one-time folder of images.
