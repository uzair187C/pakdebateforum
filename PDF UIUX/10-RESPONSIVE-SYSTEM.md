# PAK DEBATE FORUM — DESIGN SYSTEM
# 10 — RESPONSIVE SYSTEM

Status: Design specification / implementation source of truth
Scope: Responsive behavior across desktop, laptop, tablet, mobile, small mobile, landscape devices, dynamic viewport heights, accessibility zoom, touch interaction, typography, layout, imagery, 3D, navigation, cards, forms, tables, and every major visual system.

---

# 0. PURPOSE

The PBF website is not a desktop website that gets shrunk for phones.

It is one visual system that changes composition according to the available space and interaction model.

The goal is:

```text
same identity
+
same hierarchy
+
same emotional character
+
different composition
```

Desktop, tablet, and mobile should feel like members of the same family.

They should not feel like separate websites.

---

# 1. RESPONSIVE PHILOSOPHY

Responsive design must preserve:

- brand identity;
- hierarchy;
- readability;
- interaction clarity;
- visual rhythm;
- premium atmosphere;
- performance.

Responsive design may change:

- object placement;
- section height;
- typography scale;
- grid columns;
- image crops;
- animation strength;
- podium camera;
- navigation structure;
- content density.

---

# 2. PRIMARY RULE

Never solve a responsive problem by blindly scaling everything down.

Instead ask:

> What is the most important information and visual relationship at this viewport?

Then compose the layout around that answer.

---

# 3. BREAKPOINT PHILOSOPHY

Do not design around device brand names.

Design around layout failure points.

The system should support at least these conceptual ranges:

```text
XS
very small mobile

SM
standard mobile

MD
large mobile / small tablet

LG
tablet / small desktop

XL
desktop

XXL
large desktop / wide screen
```

Exact CSS breakpoint values should be centralized in the implementation.

---

# 4. RECOMMENDED BREAKPOINT STARTING POINTS

Use these as design-system starting points:

```text
XS:
< 360px

SM:
360–639px

MD:
640–899px

LG:
900–1199px

XL:
1200–1599px

XXL:
1600px+
```

These are not immutable.

If the actual layout requires different thresholds, adjust the shared tokens rather than adding page-specific breakpoints.

---

# 5. BREAKPOINT RULE

Never write:

```text
if iPhone then...
if Samsung then...
if tablet model X then...
```

Use:

- viewport width;
- viewport height;
- pointer capability;
- motion preference;
- performance capability.

---

# 6. CONTAINER SYSTEM

The site should use a shared content container.

Conceptually:

```text
viewport
│
├── outer breathing room
│
└── max-width content container
```

The exact max-width belongs to the grid/layout system.

Every major page should use the same container logic unless a deliberate full-bleed section is specified.

---

# 7. CONTAINER CONSISTENCY

These should generally align:

- navbar content;
- hero text;
- section headings;
- content grids;
- footer content.

Misaligned container edges make a premium design feel improvised.

---

# 8. FULL-BLEED SECTIONS

Some visual sections may intentionally break the container.

Examples:

- hero background;
- full-width image;
- podium scene;
- atmospheric transition;
- full-width divider.

The content inside those sections should still have a clear alignment system.

---

# 9. OUTER PADDING

Horizontal padding should scale fluidly.

Avoid:

```text
padding: 80px on every device
```

Prefer a responsive token or clamp-based system.

Conceptually:

```text
small viewport:
compact padding

large viewport:
larger padding
```

---

# 10. SAFE CONTENT WIDTH

Text should not stretch indefinitely on wide screens.

Long-form paragraphs should have controlled reading width.

Display headings may use larger widths where intentional.

---

# 11. WIDE-SCREEN RULE

On very wide displays:

Do not simply stretch content until it touches the edges.

Instead:

- maintain max-width;
- increase atmospheric negative space;
- allow hero visuals to breathe;
- preserve readable text widths.

---

# 12. ULTRA-WIDE HERO

At 21:9 or similarly wide ratios:

The hero should not become a giant empty black rectangle.

Potential adjustments:

- larger podium scale;
- wider visual composition;
- slightly larger display typography;
- increased side breathing room;
- controlled background atmosphere.

Do not stretch the podium mesh itself.

---

# 13. VERY SHORT VIEWPORT

A short desktop viewport can be more difficult than a narrow one.

Do not force the entire hero into a fixed `100vh` composition if it causes:

- CTA clipping;
- headline clipping;
- podium overlap;
- inaccessible content.

---

# 14. DYNAMIC VIEWPORT HEIGHT

Mobile browsers have changing address bars.

Do not rely blindly on:

```css
height: 100vh;
```

Prefer modern viewport units where supported:

```text
svh
lvh
dvh
```

with appropriate fallback behavior.

---

# 15. MOBILE HERO HEIGHT

The hero must adapt to content.

A visually strong hero can use:

```text
min-height
```

rather than a rigid fixed height.

The exact composition depends on content length.

---

# 16. MOBILE HERO PRINCIPLE

The mobile hero must establish:

1. PBF identity;
2. central message;
3. podium visual;
4. primary action.

It does not need to reproduce the desktop arrangement.

---

# 17. MOBILE HERO COMPOSITION

Preferred approach:

```text
navigation
↓
hero identity
↓
headline
↓
podium visual
↓
supporting copy
↓
CTA
```

or an intentionally approved variant where the podium precedes the headline.

The final implementation must follow the approved homepage visual reference.

---

# 18. MOBILE PODIUM

The podium is allowed to become visually larger relative to the viewport.

This is important.

Do not reduce it until it becomes a tiny decorative object.

Instead:

- crop strategically;
- move it;
- change camera distance;
- change camera angle;
- reduce surrounding visual clutter.

---

# 19. MOBILE PODIUM BRANDING

Logo and Academy text must remain readable.

If the full podium crop makes branding unreadable:

Adjust:

1. camera;
2. model scale;
3. branding size;
4. object position.

Do not simply accept unreadable branding.

---

# 20. MOBILE PODIUM INTERACTION

Default:

```text
static / subtle
```

Optional:

- tiny pointer/touch response;
- minimal camera drift.

Do not require touch dragging.

---

# 21. TABLET PODIUM

Tablet may retain some desktop-style spatial composition.

However:

- reduce pointer amplitude;
- reduce camera movement;
- reduce heavy effects;
- ensure typography remains separate.

---

# 22. DESKTOP PODIUM

Desktop may use:

- full 3D;
- pointer response;
- subtle parallax;
- larger lighting scene;
- more environmental negative space.

The object remains the hero anchor.

---

# 23. 3D FALLBACK MATRIX

Conceptual:

```text
Desktop capable:
full 3D

Tablet capable:
optimized 3D

Mobile capable:
optimized/simple 3D

Low-power / poor network:
static render

WebGL unavailable:
static render

Reduced motion:
static or non-moving 3D
```

The site must remain beautiful in every branch.

---

# 24. NAVIGATION — DESKTOP

Desktop navigation may contain:

- logo;
- primary navigation;
- utility/action;
- optional Academy emphasis.

Use a compact horizontal system.

Do not allow navigation labels to collide at intermediate widths.

---

# 25. NAVIGATION — TABLET

At widths where desktop navigation becomes crowded:

Do not squeeze font size indefinitely.

Transition to:

- fewer visible links;
- grouped navigation;
- menu trigger;
- hybrid navigation.

---

# 26. NAVIGATION — MOBILE

Mobile should use a clear menu trigger.

Recommended:

```text
logo
+
menu button
```

The header should remain compact.

---

# 27. MOBILE MENU

Menu should occupy a deliberate layer.

Potential:

```text
full-height drawer
```

or:

```text
large overlay panel
```

depending on approved design.

It must have:

- clear close control;
- readable links;
- obvious active state;
- sufficient touch targets.

---

# 28. MOBILE NAV TOUCH TARGETS

Interactive controls should have sufficiently large touch areas.

Do not design tiny icon-only controls that require precision tapping.

---

# 29. HEADER SCROLL BEHAVIOR

Desktop may:

- compress slightly;
- reduce vertical padding;
- add subtle background separation.

Mobile may:

- remain compact;
- become slightly more opaque;
- remain sticky where appropriate.

Do not make the header jump between unrelated layouts.

---

# 30. STICKY HEADER

If sticky:

It should not consume excessive viewport height.

On mobile especially, avoid a giant persistent navigation bar.

---

# 31. TYPOGRAPHY RESPONSIVENESS

Typography scales according to hierarchy, not simply viewport width.

Primary hierarchy:

```text
display
h1
h2
h3
body
small
caption
```

Each has responsive rules.

---

# 32. DISPLAY TYPE

Desktop:

large and cinematic.

Tablet:

reduced.

Mobile:

still expressive, but controlled.

Do not reduce the hero headline until it loses its identity.

---

# 33. MOBILE DISPLAY HEADING

Avoid extremely long lines.

Preferred:

```text
2–5 words per line
```

depending on actual copy and font.

Manual line breaks should only be used when content is intentionally art-directed and robust to localization.

---

# 34. RESPONSIVE LINE LENGTH

Paragraph width should shrink with the viewport.

Do not allow:

- edge-to-edge paragraphs;
- extremely narrow columns that create awkward wrapping.

---

# 35. TEXT OVERFLOW

Never allow:

- clipped headings;
- hidden words;
- horizontal page scrolling;
- accidental `nowrap` failures.

Long event names and dynamic titles must be handled safely.

---

# 36. DYNAMIC CONTENT

The design must tolerate:

- longer names;
- different event titles;
- longer descriptions;
- translated text;
- different image ratios.

Do not build layouts around one exact sample string.

---

# 37. FONT LOADING

Critical typography should load predictably.

Avoid layout shifts caused by late font replacement.

The fallback stack should have reasonable metrics.

---

# 38. FLUID TYPE

Where appropriate, use fluid scaling:

```css
clamp(min, preferred, max)
```

This is preferred over many breakpoint-specific font overrides.

---

# 39. SPACING RESPONSIVENESS

Spacing should follow hierarchy.

Large desktop:

```text
large section gaps
```

Mobile:

```text
smaller section gaps
```

But important sections should still breathe.

---

# 40. SECTION RHYTHM

Mobile should not become a continuous stack of tiny sections.

Preserve visual chapters.

The user should still feel:

```text
hero
↓
story
↓
academy
↓
events
↓
results
↓
CTA
↓
footer
```

where applicable.

---

# 41. GRID SYSTEM

Conceptual behavior:

```text
desktop:
3–4 columns depending on content

tablet:
2 columns

mobile:
1 column
```

Do not force 4-column cards into tiny widths.

---

# 42. CARD WIDTH

Cards need enough width for:

- title;
- image;
- metadata;
- CTA.

If a card becomes too narrow:

Reduce columns before reducing readability.

---

# 43. CARD GRID BREAKPOINT

Breakpoint changes should occur when cards stop looking intentional.

Do not wait until the layout is already broken.

---

# 44. CARD HEIGHT

Avoid fixed heights for dynamic content.

Prefer:

- content-driven height;
- controlled aspect ratio for media;
- consistent internal padding.

---

# 45. CARD IMAGE ASPECT RATIO

Image containers should maintain a deliberate ratio.

Use:

```text
aspect-ratio
```

rather than arbitrary fixed pixel heights.

---

# 46. CARD HOVER RESPONSIVENESS

Hover only where a real pointer exists.

Use capability detection rather than assuming desktop from width alone.

---

# 47. TOUCH CARDS

On touch:

- card remains visually stable;
- tap navigates;
- pressed state may be brief;
- no persistent hover state.

---

# 48. IMAGE RESPONSIVENESS

Images should use:

- responsive source sizes;
- correct cropping;
- appropriate compression;
- focal-point control.

---

# 49. ART-DIRECTED CROPPING

Hero images may use different crops per breakpoint.

Example:

```text
desktop:
wide crop

mobile:
portrait crop
```

This is preferable to forcing the desktop crop into a narrow screen.

---

# 50. IMAGE FOCAL POINT

Important faces/subjects must remain visible.

Do not let `object-fit: cover` randomly cut the most important part of an image.

Use deliberate `object-position`.

---

# 51. BACKGROUND IMAGE RULE

If an image is purely decorative:

CSS background may be appropriate.

If content-bearing:

Use an actual image element with appropriate semantics.

---

# 52. VIDEO RESPONSIVENESS

If cinematic video is ever used:

Mobile may use:

- alternate crop;
- lower resolution;
- static poster;
- no autoplay if performance/accessibility requires.

Never assume mobile should download the desktop video.

---

# 53. FULL-BLEED MOBILE IMAGERY

Full-bleed images can create strong mobile moments.

Use sparingly.

The image should have enough contrast for surrounding content.

---

# 54. SECTION BACKGROUNDS

Desktop may use layered backgrounds.

Mobile should simplify when layers create:

- performance cost;
- text contrast problems;
- visual clutter.

---

# 55. GRADIENT RESPONSIVENESS

Gradients may change strength by breakpoint.

For example:

```text
desktop:
larger atmospheric spread

mobile:
tighter gradient around content
```

---

# 56. DECORATIVE ELEMENTS

Decorative lines, glows, ornaments, and shapes may:

- shrink;
- reposition;
- disappear.

They are not allowed to crowd content.

---

# 57. GOLD DECORATION

Gold effects should remain restrained on mobile.

Small screens can make glowing effects feel much stronger.

Reduce:

- bloom;
- glow radius;
- decorative density.

---

# 58. SCROLL ANIMATION RESPONSIVENESS

Desktop:

more layered.

Tablet:

moderate.

Mobile:

simple.

The same semantic reveal can exist across devices with different intensity.

---

# 59. PARALLAX RESPONSIVENESS

Desktop:

optional.

Tablet:

reduced.

Mobile:

usually disabled.

---

# 60. POINTER EFFECTS

Desktop:

enabled when supported.

Tablet:

optional/reduced.

Touch:

disabled.

---

# 61. CONTINUOUS MOTION

Desktop:

subtle.

Mobile:

minimized.

Reduced motion:

disabled.

---

# 62. SCROLL-BOUND 3D

Desktop may use scroll-linked podium motion.

Mobile should generally use a simpler version.

The user should not feel that the page is fighting the browser's scroll behavior.

---

# 63. SECTION REVEALS MOBILE

Mobile reveals should use smaller distances.

Example:

```text
desktop:
translateY 32–48px

mobile:
translateY 16–28px
```

---

# 64. STAGGER MOBILE

Reduce stagger.

A long sequence of cards entering one-by-one feels slow on mobile.

Prefer:

- group reveal;
- row reveal;
- short stagger.

---

# 65. PAGE TRANSITIONS MOBILE

Shorter and simpler than desktop.

Never make navigation feel slow on a phone.

---

# 66. MODALS MOBILE

Modals should generally become:

- full-screen;
- near-full-screen;
- or bottom sheets

depending on content.

Avoid tiny centered desktop dialogs.

---

# 67. DRAWERS MOBILE

A drawer should use the majority of available width when appropriate.

Ensure:

- close button reachable;
- content scrollable;
- background interaction disabled appropriately.

---

# 68. TABLE RESPONSIVENESS

Large tables must not force the entire page to overflow.

Possible solutions:

- horizontal scroll container;
- responsive card transformation;
- priority columns;
- stacked details.

Do not shrink table text to unreadable sizes.

---

# 69. RESULTS TABLES

Results data is important.

On mobile:

Prefer a card/list representation if it improves readability.

Keep:

- participant;
- position;
- relevant score/status

easy to scan.

---

# 70. FORMS DESKTOP

Desktop forms may use:

- 2-column fields;
- grouped sections;
- wider layouts.

---

# 71. FORMS MOBILE

Mobile forms should become:

```text
one field per row
```

unless fields are genuinely short and naturally paired.

---

# 72. INPUT WIDTH

Inputs should be large enough for touch.

Do not create narrow fields merely to preserve a desktop grid.

---

# 73. FORM LABELS

Labels remain visible.

Do not depend entirely on placeholders.

---

# 74. FORM VALIDATION MOBILE

Error text must fit within the viewport.

Avoid horizontal error banners.

---

# 75. BUTTON RESPONSIVENESS

Primary mobile CTA may become full-width when appropriate.

Do not make every button full-width automatically.

Hierarchy matters.

---

# 76. CTA GROUPS

Desktop:

```text
primary + secondary
```

Mobile:

```text
stacked
```

or:

```text
primary full width
secondary compact
```

depending on hierarchy.

---

# 77. ICONS RESPONSIVENESS

Icons should remain recognizable.

Do not shrink icons below usable visual size.

---

# 78. ICON + TEXT

If a button has icon + text:

Maintain:

- consistent gap;
- alignment;
- vertical centering.

On mobile, preserve the text unless the icon is universally understood.

---

# 79. FOOTER DESKTOP

Footer may use multiple columns.

---

# 80. FOOTER MOBILE

Footer should become:

- stacked groups;
- accordion groups if useful;
- clear social row;
- compact legal information.

Avoid giant footer height.

---

# 81. FOOTER ACCORDIONS

If used:

- use clear labels;
- preserve accessibility;
- remember state if appropriate;
- animate minimally.

---

# 82. BREADCRUMBS MOBILE

If breadcrumbs become too long:

- wrap;
- truncate intelligently;
- simplify;
- or replace with a back action.

Do not force horizontal overflow.

---

# 83. SEARCH RESPONSIVENESS

Desktop:

search can be integrated into header/content.

Mobile:

search may become:

- dedicated field;
- expandable control;
- full-screen search.

The implementation should preserve fast access.

---

# 84. FILTER RESPONSIVENESS

Desktop:

sidebar or inline filters.

Mobile:

filter drawer/sheet.

Do not keep a large desktop sidebar beside one-column content.

---

# 85. ACADEMY RESPONSIVENESS

Academy progression may transform from:

```text
horizontal/diagonal journey
```

to:

```text
vertical progression
```

on mobile.

The concept remains.

---

# 86. ACADEMY TIMELINE

Desktop may have:

- horizontal path;
- visual nodes;
- connected progression.

Mobile:

- vertical line;
- stacked nodes;
- clear order.

---

# 87. EVENTS RESPONSIVENESS

Desktop:

cards/grid.

Mobile:

single-column event cards with:

- date;
- title;
- location/status;
- CTA.

Do not sacrifice event identity.

---

# 88. RESULTS RESPONSIVENESS

Desktop:

- leaderboard/table;
- podium visualization.

Mobile:

- ranked cards;
- compact list;
- simplified podium.

---

# 89. ABOUT RESPONSIVENESS

About may use editorial split layouts on desktop.

Mobile:

stack:

```text
image
↓
story
```

or:

```text
story
↓
image
```

depending on hierarchy.

---

# 90. RESOURCES RESPONSIVENESS

Resources should prioritize scanning.

Desktop:

- filters;
- cards;
- grid.

Mobile:

- filter button;
- one-column list/cards;
- compact metadata.

---

# 91. CONTACT RESPONSIVENESS

Desktop:

split contact information/form.

Mobile:

stacked layout.

Keep primary action obvious.

---

# 92. WHITESPACE RESPONSIVENESS

Do not eliminate whitespace on mobile simply because the screen is smaller.

Instead:

- reduce excessive gaps;
- retain meaningful breathing room.

Premium design requires rhythm even on small screens.

---

# 93. VISUAL DENSITY

Desktop can support:

```text
high information density
```

Mobile should prioritize:

```text
high information clarity
```

These are not the same thing.

---

# 94. MOBILE SECTION ORDER

Do not preserve desktop DOM order if it creates bad mobile hierarchy.

But avoid duplicating the same content in multiple DOM branches unless necessary.

Prefer CSS/layout reordering when semantically safe.

---

# 95. CSS ORDERING

Do not use arbitrary `order` values to create a completely different information hierarchy.

If reading order changes substantially:

Review the semantic DOM structure.

---

# 96. ACCESSIBILITY ZOOM

The layout must remain usable at increased text size/zoom.

Do not:

- hide overflow to conceal broken layouts;
- position essential text absolutely;
- assume a fixed viewport.

---

# 97. 200% ZOOM

At approximately 200% browser zoom:

The site should remain usable.

Some desktop layouts may naturally collapse to a tablet/mobile-like structure.

This is acceptable.

---

# 98. 400% ZOOM

At extreme zoom:

Content should still remain accessible.

Avoid fixed-width containers that force horizontal scrolling for normal text content.

---

# 99. TEXT RESIZING

Do not prevent browser text resizing.

Avoid unnecessary fixed heights around text.

---

# 100. LANDSCAPE MOBILE

Landscape phones can have:

- narrow height;
- moderate width.

Do not treat them as normal desktop.

Hero may need:

- reduced podium height;
- reduced heading size;
- shorter vertical spacing.

---

# 101. LANDSCAPE HERO

If hero content does not fit:

Prioritize:

1. navigation;
2. heading;
3. CTA;
4. podium.

Reduce decorative space first.

---

# 102. SMALL MOBILE

For widths below approximately 360px:

Prioritize:

- readable typography;
- button usability;
- no overflow;
- podium identity.

Remove decorative elements if necessary.

---

# 103. SMALL MOBILE PODIUM

Use:

- tighter crop;
- simpler lighting;
- smaller branding only if still readable;
- no pointer effects.

---

# 104. SAFE AREA INSETS

Support devices with notches/home indicators where needed.

Conceptually:

```css
padding-inline:
max(base, env(safe-area-inset-left/right))
```

and corresponding vertical handling.

---

# 105. FIXED ELEMENTS

Sticky/fixed elements must account for:

- safe areas;
- keyboard;
- dynamic viewport;
- content overlap.

---

# 106. MOBILE KEYBOARD

Forms must remain usable when the software keyboard appears.

Avoid:

- fixed CTA hidden behind keyboard;
- modal content inaccessible;
- input scrolled out of view.

---

# 107. ORIENTATION CHANGE

The layout must survive:

```text
portrait
→
landscape
→
portrait
```

without requiring a full reload.

---

# 108. RESIZE PERFORMANCE

Do not trigger expensive 3D recalculation or full page layout on every resize event.

Debounce/throttle appropriately where JavaScript is required.

Prefer CSS responsiveness.

---

# 109. RESPONSIVE IMAGES

Use responsive image techniques where available:

```text
srcset
sizes
picture
```

when they materially improve delivery.

---

# 110. RESPONSIVE 3D ASSET DELIVERY

If separate models exist:

```text
desktop model
tablet/mobile model
```

select intelligently.

Do not download both unless necessary.

---

# 111. MODEL QUALITY DECISION

Potential factors:

- viewport;
- device memory;
- GPU capability;
- reduced motion;
- network quality.

The final decision should be conservative.

---

# 112. MOBILE GPU BUDGET

Mobile 3D should prioritize:

```text
silhouette
lighting
branding
```

over:

```text
micro-detail
high polygon count
complex post-processing
```

---

# 113. MOBILE LIGHTING

Reduce:

- real-time lights;
- shadow complexity;
- bloom;
- volumetrics.

Preserve the key gold light.

---

# 114. MOBILE BACKGROUND

Prefer:

- CSS gradients;
- static atmosphere;
- lightweight effects.

Avoid large animated background systems.

---

# 115. MOBILE PARTICLES

Default:

```text
off
```

Unless a specific approved design requires them.

---

# 116. MOBILE NOISE

Static grain is preferred.

Animated grain should normally be disabled.

---

# 117. MOBILE PARALLAX

Default:

```text
off
```

If retained:

Use extremely small movement.

---

# 118. MOBILE SCROLL EFFECTS

Use:

- reveal;
- simple fade;
- small translate.

Avoid pinned multi-scene storytelling unless explicitly approved.

---

# 119. RESPONSIVE MOTION TOKENS

Motion intensity should scale.

Conceptual:

```text
desktop:
100%

tablet:
70–85%

mobile:
40–70%

reduced motion:
0–10%
```

These are design-intensity targets, not literal CSS values.

---

# 120. RESPONSIVE ANIMATION RULE

The same animation can have different:

- distance;
- duration;
- amplitude;
- complexity.

Do not duplicate the entire animation system for every breakpoint.

---

# 121. COMPONENT RESPONSIVE CONTRACT

Every reusable component should document:

```text
desktop layout
tablet layout
mobile layout
interaction model
motion changes
visibility changes
content priority
```

---

# 122. CARD RESPONSIVE CONTRACT

```text
Desktop:
multi-column grid
hover enabled

Tablet:
2-column grid where space permits
reduced hover

Mobile:
single column
tap navigation
no hover dependency
```

---

# 123. NAV RESPONSIVE CONTRACT

```text
Desktop:
full navigation

Tablet:
hybrid/compact navigation

Mobile:
menu trigger + drawer
```

---

# 124. HERO RESPONSIVE CONTRACT

```text
Desktop:
cinematic 3D scene + spacious composition

Tablet:
simplified spatial composition

Mobile:
stacked/cropped hero + optimized podium
```

---

# 125. FORM RESPONSIVE CONTRACT

```text
Desktop:
grouped columns

Tablet:
reduced columns

Mobile:
single column
```

---

# 126. TABLE RESPONSIVE CONTRACT

```text
Desktop:
table

Tablet:
table if readable

Mobile:
scroll container or card transformation
```

---

# 127. ACADEMY RESPONSIVE CONTRACT

```text
Desktop:
horizontal/visual progression

Mobile:
vertical progression
```

---

# 128. RESULTS RESPONSIVE CONTRACT

```text
Desktop:
rich leaderboard

Mobile:
ranked cards/list
```

---

# 129. FOOTER RESPONSIVE CONTRACT

```text
Desktop:
multi-column

Mobile:
stacked/accordion groups
```

---

# 130. RESPONSIVE QA MATRIX

Test at minimum:

```text
320 × 568
360 × 800
375 × 812
390 × 844
430 × 932
768 × 1024
820 × 1180
1024 × 768
1280 × 800
1366 × 768
1440 × 900
1536 × 864
1920 × 1080
2560 × 1440
```

These are representative test targets, not device-specific assumptions.

---

# 131. QA — 320PX

Check:

```text
[ ] no horizontal overflow
[ ] navigation usable
[ ] hero headline readable
[ ] podium still recognizable
[ ] CTA accessible
[ ] buttons fit
[ ] cards fit
[ ] form fields fit
```

---

# 132. QA — 390PX

Check:

```text
[ ] mobile hero feels intentional
[ ] podium branding readable
[ ] spacing remains premium
[ ] no excessive black empty area
[ ] content hierarchy clear
```

---

# 133. QA — 768PX

Check:

```text
[ ] tablet composition not awkward
[ ] desktop nav does not collide
[ ] card columns make sense
[ ] podium does not dominate
[ ] typography remains proportional
```

---

# 134. QA — 1024PX

Check:

```text
[ ] breakpoint transition feels intentional
[ ] hero composition remains balanced
[ ] navigation remains clean
[ ] grids have enough width
```

---

# 135. QA — 1440PX

Check:

```text
[ ] hero has enough negative space
[ ] podium feels premium
[ ] content max-width works
[ ] typography scale feels cinematic
```

---

# 136. QA — 1920PX

Check:

```text
[ ] content does not stretch too far
[ ] hero does not become empty
[ ] podium remains appropriately sized
[ ] atmosphere uses negative space
```

---

# 137. QA — 2560PX

Check:

```text
[ ] no giant empty center
[ ] container remains controlled
[ ] visual hierarchy still works
[ ] no oversized typography
```

---

# 138. RESPONSIVE QA — ZOOM

Test:

```text
100%
125%
150%
200%
400%
```

At every level:

- content remains readable;
- no essential information disappears;
- no horizontal overflow caused by avoidable layout choices.

---

# 139. RESPONSIVE QA — TEXT LENGTH

Test with:

- long event title;
- long participant name;
- long Academy course title;
- long button label;
- long paragraph;
- translated/expanded text.

---

# 140. RESPONSIVE QA — IMAGE LENGTH

Test:

- portrait image;
- landscape image;
- missing image;
- slow image;
- extremely wide image.

The layout must remain stable.

---

# 141. RESPONSIVE QA — DATA STATES

Test:

```text
empty
loading
success
error
many items
one item
zero items
```

Responsive design applies to states, not only successful content.

---

# 142. RESPONSIVE QA — INTERACTION

Test:

- mouse;
- trackpad;
- touch;
- keyboard;
- screen reader;
- reduced motion.

---

# 143. RESPONSIVE QA — PERFORMANCE

Test:

- slow CPU;
- slow network;
- mobile hardware;
- WebGL disabled;
- reduced motion;
- data saver.

---

# 144. COMMON AI RESPONSIVE FAILURES

The coding agent must not:

- simply shrink desktop;
- use device-specific hacks;
- hide important content on mobile;
- create horizontal overflow;
- use fixed hero heights everywhere;
- keep desktop navigation when it no longer fits;
- make every mobile section full-screen;
- overuse `position: absolute`;
- duplicate content unnecessarily;
- make mobile typography tiny;
- keep desktop parallax on touch;
- force 3D on weak devices;
- make cards too narrow;
- hide long text with overflow;
- assume 100vh is stable on mobile.

---

# 145. RESPONSIVE PRIORITY

When space becomes limited, preserve in this order:

```text
1. accessibility
2. navigation
3. core message
4. primary CTA
5. essential content
6. identity/branding
7. visual enhancement
8. decorative detail
```

Decorative elements disappear first.

---

# 146. MOBILE PRIORITY

Mobile should not be a feature-reduced version of PBF.

It should be a focused version.

The user should still experience:

- premium atmosphere;
- strong identity;
- podium;
- clear Academy;
- events;
- results;
- community;
- CTA.

---

# 147. DESKTOP PRIORITY

Desktop has room to express:

- depth;
- atmosphere;
- 3D;
- complex grids;
- editorial composition.

But additional space should not automatically create additional clutter.

---

# 148. TABLET PRIORITY

Tablet is not simply “small desktop.”

It should receive deliberate composition.

The most common tablet failure is attempting to fit too much desktop UI into medium width.

---

# 149. RESPONSIVE BRAND CONSISTENCY

Across all breakpoints preserve:

```text
logo identity
gold/black palette
typography family
button language
border language
image treatment
motion personality
podium identity
```

---

# 150. RESPONSIVE CHANGE LOGIC

When changing a component at a breakpoint, ask:

```text
What problem does this change solve?
```

If there is no clear answer, do not add the breakpoint.

---

# 151. NO BREAKPOINT SPRAWL

Avoid:

```text
@media 1020
@media 987
@media 944
@media 913
...
```

Use a small number of meaningful layout transitions.

Fluid CSS should handle the spaces between them.

---

# 152. FLUID LAYOUT PREFERENCE

Prefer:

- flex;
- grid;
- clamp;
- minmax;
- intrinsic sizing;
- aspect-ratio;
- max-width.

Use absolute positioning only for intentional visual composition.

---

# 153. RESPONSIVE ABSOLUTE POSITIONING

Absolute positioning is acceptable for:

- podium overlay;
- decorative light;
- hero atmosphere;
- controlled badges.

It is risky for:

- paragraphs;
- dynamic cards;
- forms;
- navigation text.

---

# 154. CONTENT-FIRST RULE

If content length changes, the layout must adapt.

Never let visual positioning dictate whether content can exist.

---

# 155. RESPONSIVE ERROR HANDLING

Error messages must remain visible and readable.

Do not position them outside a fixed form box.

---

# 156. RESPONSIVE EMPTY STATES

Empty states should retain:

- icon/visual;
- explanation;
- next action.

On mobile, keep the content compact.

---

# 157. RESPONSIVE LOADING STATES

Skeleton layouts should match the actual responsive component shape.

Do not show desktop skeletons on mobile.

---

# 158. RESPONSIVE MODAL CONTENT

If a modal contains a form or large content:

Mobile should allow internal scrolling.

Do not lock the body and accidentally lock the modal too.

---

# 159. RESPONSIVE IMAGE LIGHTBOX

On mobile:

- near-full-screen;
- swipe optional;
- clear close control;
- caption readable.

---

# 160. RESPONSIVE VIDEO

Controls must remain accessible.

Avoid fixed desktop player dimensions.

---

# 161. RESPONSIVE SOCIAL ICONS

Icons should have enough touch area.

Do not place tiny icons next to each other with no spacing.

---

# 162. RESPONSIVE LINKS

Text links should remain visually identifiable.

Do not rely solely on hover.

---

# 163. RESPONSIVE FOCUS STATES

Keyboard focus must remain visible at all widths.

Never hide focus outlines just because the design is minimal.

---

# 164. RESPONSIVE CONTRAST

Dark mode/black-heavy compositions must retain sufficient contrast.

Mobile glare and small screens can make subtle text harder to read.

Check every breakpoint.

---

# 165. RESPONSIVE GOLD

Gold text must not become too low-contrast against black.

If gold is used for small text:

Verify readability.

---

# 166. RESPONSIVE PODIUM TEXT

If the podium's embedded branding becomes too small:

Do not blindly shrink the entire podium.

Use a responsive camera/composition solution.

---

# 167. RESPONSIVE HERO CONTENT

Hero text and podium should have explicit relationship rules.

Example:

```text
desktop:
side-by-side

tablet:
overlapping/stacked depending on width

mobile:
stacked
```

The final choice follows the approved homepage design.

---

# 168. HERO COLLISION TEST

At every breakpoint check:

```text
headline
+
podium
+
CTA
+
navigation
```

No element should collide.

---

# 169. HERO HEIGHT TEST

Test with:

- short screen;
- tall screen;
- landscape;
- browser UI visible;
- browser UI hidden.

---

# 170. HERO SCROLL EXIT

The hero should end naturally.

Avoid:

- giant empty gap;
- sudden podium disappearance;
- sticky object continuing too long;
- CTA hidden below the fold.

---

# 171. RESPONSIVE SECTION TRANSITIONS

Section transitions should scale down on mobile.

Large desktop decorative spacing can become compact mobile spacing.

But transitions should remain recognizable as chapters.

---

# 172. RESPONSIVE BACKGROUND TRANSITIONS

Background color/gradient transitions may become more direct on mobile.

Do not force complex animated layers onto small devices.

---

# 173. RESPONSIVE DECORATIVE LINES

Lines may:

- shorten;
- reposition;
- disappear.

Never allow them to create accidental horizontal overflow.

---

# 174. RESPONSIVE SHADOWS

Large shadows should be reduced on mobile.

Reason:

- small screens;
- visual density;
- GPU cost.

---

# 175. RESPONSIVE BORDER RADIUS

Radius should generally remain consistent with the design system.

Do not randomly make everything more rounded on mobile.

---

# 176. RESPONSIVE CARD RADIUS

Cards may use the same radius or a slightly adjusted value.

Consistency matters more than device-specific decoration.

---

# 177. RESPONSIVE BUTTON RADIUS

Same principle.

Do not create pill buttons on mobile if desktop uses architectural rectangular controls unless explicitly designed.

---

# 178. RESPONSIVE GRID GAP

Grid gaps should shrink progressively.

Avoid giant gaps between one-column mobile cards.

---

# 179. RESPONSIVE SECTION PADDING

Section padding should preserve rhythm.

A useful conceptual scale:

```text
desktop:
large

tablet:
medium

mobile:
compact-medium
```

Not:

```text
desktop 120px
mobile 10px
```

---

# 180. RESPONSIVE MAX WIDTH

Text and cards should remain readable at both extremes.

Use shared max-width tokens.

---

# 181. RESPONSIVE IMPLEMENTATION TOKENS

Centralize:

```text
breakpoints
container widths
page padding
type scales
section spacing
grid gaps
card gaps
podium scales
motion intensity
```

---

# 182. RESPONSIVE DESIGN TOKENS

Conceptually:

```ts
responsive = {
  breakpoints,
  containers,
  spacing,
  typography,
  hero,
  podium,
  grids,
  motion
}
```

The exact implementation may use CSS custom properties, theme objects, or another architecture.

---

# 183. RESPONSIVE COMPONENT TESTING

Every reusable component should be visually tested at:

```text
mobile
tablet
desktop
wide desktop
```

Do not wait until the entire website is complete.

---

# 184. PAGE-LEVEL TESTING

Every page should be checked as a complete composition.

A component may work individually but fail because:

- hero height changes;
- sections collide;
- navigation consumes space;
- content becomes too long.

---

# 185. ROUTE CONSISTENCY

Switching between pages at different viewport sizes must not produce layout-specific bugs.

All pages should use the same global responsive tokens.

---

# 186. RESPONSIVE URL/ROUTING

Responsive behavior must never change URLs or route structure.

Only presentation changes.

---

# 187. RESPONSIVE SEO

Do not hide important content on mobile simply because the design is smaller.

Search-visible content should remain semantically present.

---

# 188. RESPONSIVE PERFORMANCE PRINCIPLE

When reducing screen size, also reduce computational complexity.

Mobile should not merely receive a smaller viewport.

It should receive an appropriately lighter rendering strategy.

---

# 189. RESPONSIVE 3D PRINCIPLE

The podium's emotional impact comes from:

```text
silhouette
+
lighting
+
branding
+
composition
```

not from maximum polygon count.

---

# 190. RESPONSIVE MOTION PRINCIPLE

The podium should feel alive on desktop.

It should feel **present** on mobile.

That distinction is intentional.

---

# 191. RESPONSIVE AI HANDOFF

The coding agent must treat this document as authoritative for responsive behavior.

Before implementing a breakpoint:

1. identify the layout problem;
2. choose the smallest meaningful change;
3. preserve hierarchy;
4. test nearby widths;
5. verify no new overflow;
6. verify motion behavior;
7. verify accessibility.

---

# 192. AI RESPONSIVE PROMPT CONTRACT

Recommended:

```text
Treat 10-RESPONSIVE-SYSTEM.md as the authoritative responsive specification.

Do not create device-specific hacks.
Do not simply scale desktop down.
Do not introduce arbitrary breakpoints.
Do not hide important content merely to make layouts fit.
Do not force desktop 3D behavior onto mobile.
Do not create horizontal overflow as a workaround.
Do not use fixed 100vh hero layouts blindly.
Do not sacrifice accessibility for visual composition.
```

---

# 193. AI VISUAL VALIDATION

The coding agent should produce screenshots at representative widths.

Compare:

```text
320
390
768
1024
1440
1920
```

and inspect the entire page, not only the hero.

---

# 194. RESPONSIVE REGRESSION

After changing a breakpoint:

Retest:

- neighboring widths;
- previous pages;
- shared header;
- footer;
- podium;
- cards;
- forms.

A responsive fix must not silently break another page.

---

# 195. FINAL RESPONSIVE QA

```text
[ ] 320px works
[ ] 360px works
[ ] 390px works
[ ] 430px works
[ ] tablet works
[ ] 1024px works
[ ] desktop works
[ ] wide desktop works
[ ] ultra-wide works
[ ] landscape works
[ ] 200% zoom works
[ ] 400% zoom remains usable
[ ] keyboard works
[ ] touch works
[ ] reduced motion works
[ ] slow device works
[ ] WebGL fallback works
[ ] no horizontal overflow
[ ] no clipped content
[ ] no broken images
[ ] no navigation collision
[ ] podium remains premium
```

---

# 196. FINAL RESPONSIVE PRINCIPLE

The visitor should never think:

> “This is the mobile version.”

They should think:

> “This is PBF.”

The screen changes.

The identity does not.

---

# 197. HANDOFF

This document establishes responsive behavior.

Related systems:

- brand → `01-BRAND-IDENTITY.md`
- color → `02-COLOR-SYSTEM.md`
- typography → `03-TYPOGRAPHY.md`
- layout → `04-GRID-SPACING-LAYOUT.md`
- components → `05-COMPONENT-SYSTEM.md`
- imagery → `06-IMAGERY-ASSET-SYSTEM.md`
- icons → `07-ICONOGRAPHY.md`
- motion → `08-MOTION-ANIMATION.md`
- 3D podium → `09-3D-PODIUM.md`
- accessibility → `11-ACCESSIBILITY.md`
- performance → `12-PERFORMANCE.md`
- page transitions → `13-PAGE-TRANSITIONS.md`

No page-specific responsive implementation should contradict this system without explicit design review.
