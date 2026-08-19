# PAK DEBATE FORUM — DESIGN SYSTEM
# 06 — IMAGERY & ASSET SYSTEM

Status: Design specification / implementation source of truth
Scope: Public website visual assets, imagery, generated renders, 3D assets, backgrounds, textures, logos, responsive variants, loading behavior, naming, optimization, and asset QA.

---

## 0. PURPOSE

This document defines how visual assets are selected, created, stored, named, cropped, loaded, animated, and displayed across Pak Debate Forum.

It exists to prevent visual inconsistency and to prevent the implementation agent from improvising imagery.

The design system is intentionally cinematic, premium, institutional, and debate-centered.

Imagery must support that identity.

Images are not decorative filler.

Every major visual asset should perform at least one of these jobs:

1. establish atmosphere;
2. communicate a real PBF activity;
3. establish credibility;
4. explain a program/event;
5. create visual hierarchy;
6. provide emotional context;
7. support navigation or comprehension;
8. reinforce the stage / voice / leadership metaphor.

If an asset performs none of these jobs, it should normally not be added.

---

# 1. ASSET AUTHORITY

When choosing or replacing an asset, use this authority order:

1. Approved official PBF asset.
2. Approved asset supplied by the PBF team.
3. Approved generated asset created specifically for the website.
4. Approved stock/licensed asset.
5. Temporary placeholder used only during development.

The implementation agent must never silently replace an approved official asset with a generated or stock substitute.

Temporary assets must be visibly documented as temporary in the asset manifest.

---

# 2. ASSET CATEGORIES

The asset library is divided into:

```text
brand/
hero/
podium/
academy/
programs/
events/
coaches/
results/
resources/
about/
contact/
backgrounds/
textures/
icons/
ui/
social/
3d/
video/
```

Every asset must belong to one of these categories or receive explicit approval for a new category.

---

# 3. BRAND ASSETS

Core brand assets include:

- PBF primary logo
- PBF compact mark
- PBF wordmark
- Academy logo/lockup where officially approved
- social avatar
- favicon
- monochrome logo
- reversed/light logo
- dark logo where required
- official event marks
- approved partner marks

Never redraw the logo manually in CSS.

Never recreate the logo using ordinary text.

Never distort the logo.

Never apply arbitrary gradients to the logo.

Never change the approved logo proportions.

---

# 4. LOGO VARIANTS

Required variants should be maintained only when actually available/approved:

```text
logo-primary.svg
logo-light.svg
logo-dark.svg
logo-mark.svg
logo-mark-light.svg
logo-wordmark.svg
academy-lockup.svg
favicon.svg
```

If a variant does not exist, the implementation agent must not invent one.

---

# 5. HERO IMAGERY

The homepage hero is the most controlled visual environment on the website.

The hero should prioritize:

1. podium object;
2. headline;
3. controlled cinematic lighting;
4. minimal atmospheric background;
5. CTA;
6. subtle motion.

Do not place a busy photograph behind the main podium.

The podium must remain readable at every supported viewport.

---

# 6. PODIUM ASSET FAMILY

The podium is treated as its own asset system.

Recommended assets:

```text
podium/
├── podium-hero.webp
├── podium-hero-mobile.webp
├── podium-shadow.webp
├── podium-glow.webp
├── podium-logo.svg
├── podium-logo-light.svg
├── podium.glb
├── podium-low.glb
├── podium-poster.webp
└── podium-fallback.webp
```

The exact files may differ depending on the final production method.

The important rule is that the podium must have a controlled asset family rather than one giant image being reused blindly everywhere.

---

# 7. PODIUM VISUAL REQUIREMENTS

The approved podium direction is:

- predominantly black;
- sculptural;
- less boxy than a traditional lectern;
- premium/futuristic;
- subtle wood/material texture only where appropriate;
- restrained gold illumination;
- readable PBF/Academy branding;
- deep controlled shadow;
- isolated enough to work over dark backgrounds;
- sufficient negative space around the object;
- no unnecessary decorative objects.

The podium should feel like an object belonging to the PBF world, not a generic stock lectern.

---

# 8. PODIUM TRANSPARENT ASSET

If a 2D podium asset is used, the preferred format is:

- WebP with alpha where supported;
- PNG fallback where alpha/WebP constraints require it.

The source must contain enough transparent padding to prevent accidental cropping during animation.

Do not bake a large opaque black rectangle into the transparent podium asset.

The object and its environmental shadow should be separable where possible.

---

# 9. PODIUM MOBILE ASSET

A dedicated mobile render is preferred if the desktop composition cannot crop elegantly.

The mobile asset may:

- crop more aggressively;
- show a different camera distance;
- prioritize the logo;
- reduce side geometry;
- simplify lighting;
- reduce shadow complexity.

It must remain recognizably the same podium.

Do not redesign the object into a different product.

---

# 10. 3D PODIUM ASSETS

If a GLB/GLTF asset is produced:

Required considerations:

- reasonable polygon count;
- compressed textures;
- physically plausible materials;
- no unnecessary hidden geometry;
- predictable origin/pivot;
- correct scale;
- correct orientation;
- mobile fallback;
- poster image;
- loading state.

The 3D model must not become a performance dependency for the entire homepage.

A static poster/fallback must always exist.

---

# 11. PHOTOGRAPHY DIRECTION

Photography should feel:

- authentic;
- editorial;
- human;
- intelligent;
- energetic when appropriate;
- institutionally credible;
- naturally lit where possible;
- compositionally clean.

Preferred subject matter:

- real debate sessions;
- students speaking;
- moderated discussions;
- coaching;
- workshops;
- competitions;
- awards;
- audiences;
- mentors;
- preparation;
- group collaboration;
- academic environments.

Avoid generic corporate stock imagery where possible.

Avoid photos where people are obviously posing for a stock-photo scenario.

Avoid excessive lens flare.

Avoid unrealistic AI-looking hands/faces when generated imagery is used.

---

# 12. PEOPLE PHOTOGRAPHY

People are central to the PBF identity.

When authentic photos exist, prioritize them.

For coaches:

- use approved real portraits;
- maintain consistent crop treatment;
- maintain consistent background treatment;
- maintain consistent aspect ratio;
- maintain consistent visual scale.

Do not arbitrarily change one coach's portrait treatment.

A portrait system should feel intentional:

```text
same frame
same crop logic
same lighting treatment
same metadata placement
```

---

# 13. COACH PORTRAIT SYSTEM

Preferred portrait format:

- vertical editorial portrait;
- face clearly readable;
- moderate negative space;
- clean background;
- consistent head/shoulder positioning.

Possible visual treatment:

- natural portrait;
- darkened neutral background;
- subtle green/gold environmental tint only if approved.

Do not apply strong color grading that changes skin appearance unnaturally.

---

# 14. EVENT IMAGERY

Event images should communicate the actual event type.

Examples:

- debate stage;
- tournament room;
- conference;
- workshop;
- award ceremony;
- audience;
- student activity.

Event cards should use consistent aspect ratios.

Event detail pages may use a larger cinematic crop.

Do not use unrelated generic debate imagery merely because it contains a microphone.

---

# 15. PROGRAM IMAGERY

Program imagery should communicate the program's actual character.

Examples:

Public speaking:
- speaker on stage;
- audience;
- microphone;
- presentation.

Debate:
- debate table;
- structured discussion;
- competition.

Critical thinking:
- collaborative analysis;
- research;
- discussion.

Leadership:
- leadership activity;
- group facilitation;
- presentation.

Never allow imagery to contradict the program's actual purpose.

---

# 16. ACADEMY IMAGERY

Academy imagery should feel educational and aspirational.

Preferred visual themes:

- learning;
- practice;
- mentorship;
- confident speaking;
- teamwork;
- intellectual discussion;
- progression;
- achievement.

Academy imagery may use slightly more cinematic lighting than generic organization pages.

---

# 17. ABOUT / ORGANIZATION IMAGERY

About-page imagery should establish institutional credibility.

Preferred:

- authentic organization activity;
- leadership;
- team;
- events;
- history;
- community.

Do not make the About page look like a generic startup story.

The visual language should communicate an established mission and active community.

---

# 18. RESULTS IMAGERY

Results imagery should prioritize evidence.

Use:

- real awards;
- real certificates;
- real event photography;
- real podium/stage moments;
- real competition outcomes where available.

Results should never be visually impressive at the cost of factual accuracy.

If a statistic is unavailable, do not fabricate it just to fill a design block.

---

# 19. RESOURCE IMAGERY

Resources are primarily knowledge-oriented.

Possible visual treatment:

- article thumbnail;
- publication cover;
- document preview;
- debate-related editorial photograph;
- clean abstract graphic.

Do not force a photograph onto every resource.

Some resources should use typography-led covers.

---

# 20. BACKGROUND SYSTEM

Backgrounds are layered, not random.

Preferred hierarchy:

```text
Base black
↓
Subtle surface variation
↓
Atmospheric gradient
↓
Optional architectural image
↓
Optional light bloom
↓
Content
```

Not every layer should appear simultaneously.

---

# 21. BACKGROUND TYPES

Supported background families:

### B01 — Pure Black

Use for:

- dramatic hero moments;
- final CTA;
- high-contrast typography.

### B02 — Near-Black Surface

Use for:

- content sections;
- cards;
- functional interfaces.

### B03 — Atmospheric Gradient

Use for:

- transitions;
- Academy sections;
- subtle depth.

### B04 — Architectural Photography

Use for:

- Academy;
- About;
- institutional storytelling.

### B05 — Event Photography

Use for:

- Events;
- event detail;
- results.

### B06 — Abstract Light

Use sparingly for:

- hero transitions;
- CTA;
- section separators.

---

# 22. GRADIENT BACKGROUNDS

Gradients must be atmospheric.

Preferred characteristics:

- low saturation;
- large radius;
- soft falloff;
- low opacity;
- no obvious "web gradient" appearance.

Gold and green gradients should generally be used as lighting rather than paint.

---

# 23. IMAGE OVERLAYS

When text is placed over imagery, use a controlled overlay.

Possible layers:

```text
image
+
black gradient
+
localized dark scrim
+
optional green/gold atmospheric light
+
text
```

The overlay should be adjusted according to the actual image.

Do not use one universal opacity value blindly.

---

# 24. ARCHITECTURAL VISUAL LANGUAGE

Architectural visuals are important to the Academy experience.

Potential motifs:

- stage openings;
- doorways;
- corridors;
- arches;
- podium silhouettes;
- framed light;
- vertical structures;
- geometric panels.

These motifs represent:

- entry;
- progression;
- opportunity;
- stage;
- growth.

They should remain subtle.

Do not turn the website into a literal architectural visualization project.

---

# 25. GENERATED IMAGERY

Generated images may be used when approved.

They must:

- follow the brand palette;
- use realistic anatomy;
- avoid fake text;
- avoid invented logos;
- avoid fake PBF statistics;
- avoid visibly inconsistent people;
- avoid unnecessary spectacle;
- match the lighting language of the rest of the site.

Generated imagery is visual support, not factual evidence.

---

# 26. AI-GENERATED TEXT IN IMAGES

Do not rely on AI-generated image text for:

- event names;
- dates;
- program titles;
- prices;
- statistics;
- logos;
- official organization names.

All important text must be rendered by HTML/CSS/SVG in the website.

This prevents spelling errors and keeps typography consistent.

---

# 27. IMAGE ASPECT RATIO SYSTEM

Preferred ratios:

```text
Hero:
16:9 or viewport-controlled

Editorial image:
4:3

Portrait:
3:4

Coach:
3:4

Program card:
4:3 or 16:10

Event card:
16:9

Resource:
4:3

Social:
1:1
```

The exact ratio may be overridden when the approved page composition requires it.

The implementation must not stretch an image to fit.

Use `object-fit: cover` for crop-based images.

Use `contain` for logos, documents, and product-like transparent assets.

---

# 28. OBJECT POSITIONING

Every image crop must define a default focal point.

Examples:

```text
Coach:
center top

Speaker:
center

Event stage:
center

Group:
center

Architectural doorway:
center

Podium:
center
```

If the subject is off-center intentionally, define the focal point explicitly.

---

# 29. RESPONSIVE IMAGE RULES

Desktop may use:

- wide hero crop;
- large architectural background;
- full event photography.

Mobile may use:

- tighter crop;
- dedicated mobile asset;
- alternate focal point;
- reduced background complexity.

Never simply shrink a desktop image if that makes the subject unreadable.

---

# 30. IMAGE QUALITY TIERS

Use appropriate resolution tiers.

Suggested:

```text
XS:
small cards / thumbnails

SM:
mobile cards

MD:
tablet

LG:
desktop content

XL:
hero / full-width
```

Do not ship a 5000px image into a 300px card.

Do not use a tiny thumbnail as a full-screen hero.

---

# 31. FORMAT STRATEGY

Preferred:

- AVIF where practical;
- WebP as broad fallback;
- PNG for transparency where required;
- SVG for vector logos/icons;
- JPEG only where legacy compatibility or source constraints require it.

Use modern formats without sacrificing transparent/vector requirements.

---

# 32. IMAGE LOADING

Above-the-fold critical image:

- preload only when justified;
- use high-priority loading;
- provide explicit dimensions/aspect ratio;
- prevent layout shift.

Below-the-fold images:

- lazy load;
- decode asynchronously where appropriate;
- use responsive `srcset`.

Do not lazy-load the primary hero asset if doing so causes a visible blank hero.

---

# 33. IMAGE PLACEHOLDERS

Loading states should preserve layout.

Preferred:

- low-contrast dark placeholder;
- blurred preview;
- skeleton only for functional image cards.

Avoid bright gray skeletons that break the cinematic theme.

---

# 34. IMAGE ERROR STATES

If an image fails:

Do not display a broken-image icon as the primary visual.

Use:

- neutral dark fallback;
- optional subtle brand mark;
- preserved card dimensions.

For official portraits, a fallback must not imply a false identity.

---

# 35. VIDEO ASSETS

Video is optional and must earn its performance cost.

Use video for:

- event atmosphere;
- hero atmosphere;
- academy montage;
- promotional storytelling.

Avoid autoplaying heavy video on every section.

Hero video should:

- be muted;
- have a poster;
- support reduced motion;
- have a mobile fallback;
- be compressed;
- not block the main content.

---

# 36. VIDEO MOBILE RULE

If desktop video is too heavy or compositionally unsuitable:

Use a static image or short mobile-specific video.

The mobile experience should not be sacrificed for visual spectacle.

---

# 37. TEXTURE SYSTEM

Texture should be almost invisible.

Allowed:

- subtle film grain;
- faint paper-like texture;
- very low-opacity noise;
- restrained material grain on podium.

Texture must never reduce text readability.

Never add texture simply to make an empty section "interesting."

---

# 38. PODIUM MATERIAL TEXTURE

The podium's material texture should be:

- subtle;
- low-frequency;
- mostly visible under light;
- not obviously wooden unless that is intentionally approved.

The object should remain predominantly black.

The texture is a material cue, not the visual subject.

---

# 39. SHADOW SYSTEM

Shadows may be baked into a render or produced in CSS/3D.

Preferred:

- deep;
- soft-edged;
- directional;
- localized.

Avoid generic `box-shadow: 0 20px 50px black`.

For 3D assets, use actual lighting where practical.

---

# 40. GOLD LIGHT SYSTEM

Gold lighting is a visual asset when it represents:

- podium edge lighting;
- stage light;
- spotlight;
- architectural highlight;
- CTA emphasis.

It should feel like reflected light.

It should not look like neon yellow paint.

---

# 41. GREEN LIGHT SYSTEM

Green lighting is secondary.

Use it for:

- atmospheric depth;
- subtle transition;
- Academy emphasis;
- active navigation where appropriate.

Green should not compete with the podium's gold highlight.

---

# 42. ICON ASSETS

Icons should normally be SVG.

They must follow the iconography specification.

Do not use random icon libraries without checking the approved visual language.

Do not mix filled icons and line icons arbitrarily.

---

# 43. UI GRAPHICS

Small decorative graphics may include:

- thin lines;
- stage marks;
- grid lines;
- dots;
- subtle arcs;
- geometric framing.

These must support hierarchy.

Do not decorate every card.

---

# 44. EVENT BADGES / LABEL GRAPHICS

Event labels should normally be HTML/CSS rather than image files.

Examples:

- Upcoming
- Open
- Closed
- Completed
- Registration Open

This keeps them accessible and dynamic.

---

# 45. PROGRAM CATEGORY GRAPHICS

Program category icons may be SVG.

They should remain consistent across:

- Program cards;
- Program detail;
- Academy overview;
- navigation/filtering.

---

# 46. RESOURCE COVER SYSTEM

If a resource needs a visual cover:

Use a controlled template.

Possible structure:

```text
category
+
title
+
small PBF mark
+
abstract visual motif
```

The resource title must be real HTML text on the actual page.

The cover can be an image, but content must remain accessible.

---

# 47. ASSET NAMING

Use predictable lowercase kebab-case.

Examples:

```text
academy-hero.webp
academy-training-path.webp
program-public-speaking.webp
event-national-debate-championship.webp
coach-muhammad-uzair.webp
results-awards-2026.webp
resource-debate-guide.webp
podium-hero.webp
podium-mobile.webp
```

Do not use:

```text
IMG_9283-final-final2.png
newimage.png
heroNEW.jpg
coolpic.png
```

---

# 48. ASSET VERSIONING

Do not overwrite approved assets blindly.

Use versioned source files when necessary:

```text
podium-hero-v01.webp
podium-hero-v02.webp
```

Only the approved production version should be referenced by application code.

---

# 49. ASSET MANIFEST

The project should maintain an asset manifest containing:

- path;
- category;
- purpose;
- source;
- approval status;
- desktop/mobile usage;
- dimensions;
- aspect ratio;
- focal point;
- licensing status where applicable;
- replacement notes.

Example:

```text
Asset:
academy-hero.webp

Purpose:
Academy overview hero

Status:
Approved

Desktop:
yes

Mobile:
yes

Focal point:
center

Source:
approved generated render

Fallback:
academy-hero-mobile.webp
```

---

# 50. OFFICIAL CONTENT / VISUAL PLACEHOLDER DISTINCTION

A visual mockup may contain placeholder:

- names;
- dates;
- statistics;
- event titles;
- program titles.

These must be clearly identified during development.

The implementation must source real data from the application when the page is connected.

Never treat a reference-board statistic as official PBF data.

---

# 51. ASSET DIRECTORY STRUCTURE

Recommended:

```text
public/
└── assets/
    ├── brand/
    ├── hero/
    ├── podium/
    ├── academy/
    ├── programs/
    ├── events/
    ├── coaches/
    ├── results/
    ├── resources/
    ├── about/
    ├── contact/
    ├── backgrounds/
    ├── textures/
    ├── icons/
    ├── ui/
    ├── social/
    ├── 3d/
    └── video/
```

---

# 52. ASSET RESPONSIBILITY

Components should reference assets.

Components should not contain arbitrary remote URLs scattered throughout JSX.

Prefer centralized asset configuration or data objects.

Example concept:

```ts
const assets = {
  hero: {
    podium: "/assets/podium/podium-hero.webp",
  },
};
```

The exact implementation may vary with the application architecture.

---

# 53. CMS / DATABASE ASSET DATA

For dynamic content, image URLs or asset identifiers should be data-driven where supported.

Programs may have:

- cover image;
- gallery images;
- thumbnail.

Events may have:

- hero image;
- gallery;
- promotional image.

Coaches may have:

- portrait.

Resources may have:

- thumbnail/cover.

Do not hardcode dynamic asset paths inside reusable cards when the backend already supplies them.

---

# 54. IMAGE SECURITY / TRUST

Do not render arbitrary user-supplied image URLs without appropriate validation/sanitization according to the existing application architecture.

Admin-provided images should be treated as content data.

Do not let an image URL change the application's layout unexpectedly.

---

# 55. ACCESSIBILITY

Every meaningful image requires appropriate alternative text.

Decorative images should use empty alt text where appropriate.

Do not write:

```text
alt="image"
```

Prefer:

```text
alt="Students participating in a Pak Debate Forum debate session"
```

For purely atmospheric backgrounds, do not duplicate nearby text in alt content.

---

# 56. IMAGE ACCESSIBILITY + TEXT

Never place essential information only inside an image.

This includes:

- event dates;
- registration deadlines;
- program names;
- prices;
- results;
- calls to action.

The actual interface must contain accessible text.

---

# 57. CROPPING SAFETY

Before approving an asset, test:

```text
1440×900
1280×800
1024×768
768×1024
430×932
390×844
360×800
```

Check:

- face visibility;
- logo visibility;
- important object visibility;
- text contrast;
- focal point;
- unexpected crop;
- excessive empty space.

---

# 58. ART DIRECTION BY PAGE FAMILY

## Home

Primary:
- podium;
- cinematic atmosphere;
- selected PBF activity imagery.

## About

Primary:
- authentic institutional/team imagery.

## Academy

Primary:
- learning;
- speaking;
- architectural/stage imagery.

## Programs

Primary:
- program-specific imagery;
- restrained editorial graphics.

## Program Detail

Primary:
- large program hero;
- supporting learning imagery.

## Coaches

Primary:
- consistent portraits.

## Events

Primary:
- event photography;
- dates and opportunity.

## Event Detail

Primary:
- cinematic event hero;
- supporting gallery.

## Registration

Primary:
- minimal imagery;
- focus on task completion.

## Resources

Primary:
- knowledge-oriented covers;
- editorial imagery.

## Results

Primary:
- evidence and achievement imagery.

## Feedback

Primary:
- minimal imagery;
- trust and usability.

## Contact

Primary:
- restrained institutional image or abstract atmosphere.

---

# 59. IMAGE DENSITY BY PAGE

Not every page should have the same image density.

High visual density:

- Home;
- Academy;
- Events;
- Event Detail;
- Results.

Medium:

- About;
- Programs;
- Program Detail;
- Coaches;
- Resources.

Low:

- Registration;
- Feedback;
- Contact;
- transactional states.

Functional pages should not be overwhelmed by decorative imagery.

---

# 60. VISUAL HIERARCHY

When multiple images appear together:

1. hero image;
2. primary content image;
3. supporting image;
4. decorative image.

Only one visual should normally dominate a section.

Do not create four competing focal points.

---

# 61. BACKGROUND IMAGE CONTRAST

If an image is visually strong:

Reduce:

- image opacity;
- saturation;
- brightness;
- or add scrim.

The text hierarchy must remain dominant.

---

# 62. IMAGE COLOR GRADING

Global image treatment should be subtle.

Preferred:

- slightly deep blacks;
- natural skin;
- controlled highlights;
- restrained saturation.

Avoid applying the exact same heavy color filter to every photograph.

Real event photography should remain authentic.

---

# 63. GENERATED VISUAL CONSISTENCY

When multiple AI-generated images belong to one campaign or page:

Keep consistent:

- camera language;
- lighting;
- palette;
- environment;
- lens feel;
- architectural vocabulary;
- subject styling.

Do not combine unrelated AI art styles in one section.

---

# 64. IMAGE PROMPT STANDARD

When generating new visual assets, prompts should specify:

1. subject;
2. context;
3. composition;
4. camera/viewpoint;
5. lighting;
6. palette;
7. material;
8. negative constraints;
9. aspect ratio;
10. intended UI placement.

Example:

```text
Subject:
modern debate podium

Context:
premium Pakistani debate academy

Composition:
centered, isolated object

Lighting:
single warm gold spotlight

Palette:
black, restrained gold, subtle deep green

Material:
matte black sculptural surface

Constraints:
no busy background, no extra objects,
no fake text, no unrelated logos

Aspect:
9:16
```

---

# 65. DO NOT ASK IMAGE GENERATION TO CREATE FINAL UI TEXT

AI image generators should create visual assets.

HTML/CSS/SVG should render final UI typography.

This preserves:

- correctness;
- accessibility;
- responsive behavior;
- localization;
- SEO;
- consistency.

---

# 66. ASSET FALLBACK MATRIX

Every critical asset should have a fallback.

```text
3D podium
→ poster image
→ static podium
→ dark placeholder

Hero video
→ poster
→ static image

Coach portrait
→ approved neutral portrait fallback
→ controlled placeholder

Event image
→ event category fallback
→ dark placeholder
```

Fallbacks must preserve layout.

---

# 67. REDUCED-MOTION ASSET BEHAVIOR

With reduced motion:

- no animated background video;
- no animated texture;
- no continuous podium movement;
- no parallax-dependent readability;
- static hero asset;
- final-state lighting.

The design must remain beautiful without motion.

---

# 68. PERFORMANCE BUDGET PRINCIPLE

Every visual asset has a cost.

Before adding a large asset, ask:

- Does it materially improve the experience?
- Is it visible immediately?
- Can it be compressed?
- Can a smaller responsive asset be used?
- Can CSS/HTML achieve the same result?
- Can it be lazy-loaded?
- Does it duplicate another asset?

Do not optimize aesthetics by ignoring performance.

---

# 69. MOBILE PERFORMANCE

Mobile should reduce:

- 3D complexity;
- background video;
- particle density;
- large image resolution;
- decorative layers.

Keep:

- hierarchy;
- brand;
- primary imagery;
- key CTA;
- essential motion.

---

# 70. PREFETCHING

Only prefetch assets that are likely to be needed soon.

Examples:

- hero critical assets;
- next page hero after navigation intent where justified.

Do not preload the entire website asset library.

---

# 71. CACHE STRATEGY

Production assets should use stable cache-friendly filenames or build-managed hashing.

The exact cache implementation belongs to engineering.

The design requirement is:

Asset updates must not silently serve stale critical branding.

---

# 72. SOCIAL ASSETS

Social share images should have dedicated compositions.

Recommended:

- PBF logo;
- event/program title;
- controlled background;
- clear typography;
- 1.91:1 Open Graph composition.

Do not automatically reuse a mobile screenshot.

---

# 73. FAVICON / APP ICON

Use the official approved mark.

Maintain legibility at very small sizes.

Do not use the full long wordmark if it becomes unreadable.

---

# 74. PRINT / DOWNLOADABLE ASSETS

If downloadable certificates, posters, or event materials exist, they belong to a separate document/output system.

Do not force print-oriented layouts into ordinary responsive UI assets.

---

# 75. DESIGN-TO-ASSET HANDOFF

For every approved visual reference, document:

```text
Name
Purpose
Page
Section
Desktop usage
Mobile usage
Crop
Focal point
Animation
Background/foreground
Asset format
Source
Approval
Fallback
```

This information should accompany the final asset.

---

# 76. ASSET QA CHECKLIST

Before an asset is production-approved:

### Brand
- correct logo;
- correct colors;
- no fake text;
- no accidental marks.

### Composition
- correct focal point;
- correct ratio;
- sufficient negative space.

### Responsive
- desktop tested;
- tablet tested;
- mobile tested.

### Performance
- compressed;
- correct format;
- appropriate resolution.

### Accessibility
- alt behavior defined;
- not essential information embedded only in image.

### Technical
- predictable filename;
- correct directory;
- fallback available.

---

# 77. AI IMPLEMENTATION RULES

The coding agent must:

1. use approved assets first;
2. not invent logos;
3. not invent official photography;
4. not fabricate statistics in production UI;
5. not create random gradients;
6. not stretch images;
7. not introduce arbitrary aspect ratios;
8. not use placeholder images in production;
9. preserve focal points;
10. provide responsive assets where required;
11. preserve layout while assets load;
12. use HTML text for interface text;
13. keep dynamic content data-driven;
14. follow the asset manifest;
15. ask for clarification when a major asset decision is genuinely ambiguous.

---

# 78. ASSET REVIEW PROCESS

Before adding a new visual:

```text
Need identified
↓
Existing approved asset searched
↓
If unavailable, determine whether a new asset is necessary
↓
Define purpose + placement
↓
Create/source asset
↓
Review against brand system
↓
Test desktop/mobile
↓
Optimize
↓
Add to manifest
↓
Implement
```

---

# 79. WHAT NOT TO DO

Never:

- use random Unsplash imagery without art direction;
- use different visual styles in adjacent sections;
- put gold overlays everywhere;
- use neon green;
- use giant generic stock photos;
- generate fake certificates;
- generate fake event results;
- put important UI text inside raster images;
- use huge unoptimized PNGs;
- let AI invent missing official assets;
- use a single image at every breakpoint if the crop fails;
- create decorative visuals that compete with content.

---

# 80. REFERENCE-IMAGE RULE

The approved visual boards are references for:

- atmosphere;
- composition;
- material;
- hierarchy;
- lighting;
- interaction intent.

They are not permission to copy third-party layouts, logos, imagery, or exact visual assets.

The implementation must reproduce the approved PBF design language, not reproduce unrelated source designs.

---

# 81. HANDOFF TO OTHER DESIGN DOCUMENTS

This document establishes the asset rules.

The following documents define:

- icon details → `07-ICONOGRAPHY.md`
- animation behavior → `08-MOTION-ANIMATION.md`
- podium/3D behavior → `09-3D-PODIUM.md`
- responsive behavior → `10-RESPONSIVE-SYSTEM.md`
- accessibility → `11-ACCESSIBILITY.md`
- performance → `12-PERFORMANCE.md`
- transitions → `13-PAGE-TRANSITIONS.md`
- page-specific usage → `pages/*.md`

No page-specific asset rule should contradict this document without explicit approval.

---

# 82. FINAL PRINCIPLE

The PBF visual library should feel curated.

A visitor should never feel that the site is assembled from unrelated templates, random stock photos, AI art, and decorative effects.

Every image, render, background, texture, and visual object should feel as though it belongs to the same world:

**the stage, the argument, the learner, the mentor, the competition, and the voice.**

That consistency is more important than visual quantity.
