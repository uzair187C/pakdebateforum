# PAK DEBATE FORUM — DESIGN SYSTEM
# 07 — ICONOGRAPHY

Status: Design specification / implementation source of truth
Scope: UI icons, navigation symbols, directional icons, category icons, status symbols, decorative geometry, icon sizing, stroke behavior, accessibility, responsive behavior, motion, and implementation rules.

---

# 0. PURPOSE

Iconography is a supporting language, not the primary visual identity.

The PBF icon system must feel:

- refined;
- intelligent;
- editorial;
- precise;
- lightweight;
- modern;
- institutional;
- consistent with the black/gold/green visual system.

Icons should clarify meaning, improve navigation, and provide visual rhythm.

They should never make the website feel like a generic SaaS dashboard.

---

# 1. ICONOGRAPHY PRINCIPLE

The preferred icon personality is:

**thin, controlled, geometric, and confident.**

Avoid:

- cartoon icons;
- overly rounded consumer-app icons;
- thick emoji-like symbols;
- inconsistent filled/outline mixtures;
- unnecessary decorative icons;
- random icon packs.

The visual system should generally favor outline icons.

---

# 2. PRIMARY ICON FAMILY

The production interface should use one coherent icon family wherever possible.

Preferred characteristics:

- outline-first;
- consistent stroke;
- rounded or carefully controlled line joins;
- simple geometry;
- clear silhouette;
- minimal internal detail.

A single approved icon library may be used if it matches these rules.

The implementation agent must not mix several unrelated icon libraries casually.

---

# 3. ICON LIBRARY POLICY

If an existing library is already installed and visually appropriate:

Use it consistently.

If the project does not already contain a suitable library:

Choose one coherent library rather than manually sourcing individual icons from unrelated websites.

Custom icons should be created only when:

- a required PBF-specific symbol does not exist;
- a category icon needs a distinctive treatment;
- the icon is part of a brand asset;
- the design requires a custom architectural symbol.

---

# 4. STROKE SYSTEM

Default icon stroke:

```text
1.5px — delicate
1.75px — standard
2px — emphasis
```

The exact rendered stroke may be adjusted for optical clarity at small sizes.

Avoid extremely thin 1px strokes for important controls on high-density mobile screens.

Avoid heavy 3px+ strokes unless the icon is intentionally large/display-oriented.

---

# 5. STROKE CONSISTENCY

Icons appearing together should share:

- stroke weight;
- line-cap behavior;
- line-join behavior;
- optical size;
- visual density.

Do not place a heavy filled icon next to an extremely delicate outline icon without an intentional reason.

---

# 6. ICON SIZE SCALE

Recommended semantic sizes:

```text
12px — micro metadata
14px — compact metadata
16px — standard inline icon
18px — navigation/control
20px — standard button/icon control
24px — prominent control
28–32px — feature icon
40–56px — section/category icon
64px+ — decorative/display icon
```

Actual CSS values should come from centralized tokens.

---

# 7. TOUCH TARGETS

The visible icon and its interactive target are different concepts.

A 20px icon may live inside a:

```text
minimum ~44×44px touch target
```

Do not make the actual clickable area only as large as the visible SVG.

This is especially important on mobile navigation, close buttons, carousel controls, and filter controls.

---

# 8. ICON ALIGNMENT

Icons must align optically with nearby text.

Default inline alignment:

```text
icon center ≈ text x-height center
```

Do not align every icon by arbitrary top offsets.

For buttons:

```text
icon + label
```

should appear visually centered as a group.

---

# 9. ICON + TEXT SPACING

Recommended:

```text
8px — standard
10px — larger control
6px — compact
```

Avoid excessive gaps.

The icon should feel attached to its label.

---

# 10. ICON COLOR HIERARCHY

Default:

- primary icon: warm white;
- secondary icon: muted gray;
- interactive icon: gold when active/emphasized;
- Academy-specific active accent: restrained green where appropriate;
- disabled icon: low-contrast gray.

Do not make every icon gold.

Gold loses meaning if used everywhere.

---

# 11. NAVIGATION ICONS

Primary navigation normally should remain text-led.

Icons may appear in:

- mobile menu;
- utility controls;
- search;
- account/admin controls;
- contextual actions.

Do not add an icon beside every desktop navigation item unless the approved page design explicitly requires it.

The navigation should feel editorial, not like an application sidebar.

---

# 12. MOBILE MENU ICON

Menu icon:

- simple;
- two or three controlled horizontal strokes;
- consistent stroke;
- animated carefully if opening/closing.

Close icon:

- simple X;
- same visual weight as menu icon.

Do not use a giant animated hamburger transformation.

---

# 13. ARROW SYSTEM

Arrows are important to the PBF visual language.

Use a consistent family for:

- CTA links;
- carousel navigation;
- pagination;
- breadcrumbs;
- progression;
- external navigation.

Preferred arrow characteristics:

- thin;
- directional;
- elegant;
- slightly editorial.

Avoid oversized thick arrows.

---

# 14. CTA ARROW

A text CTA may use:

```text
Learn More →
```

or a controlled icon equivalent.

On hover:

- arrow may translate slightly;
- text remains stable;
- movement is subtle.

The arrow must not bounce continuously.

---

# 15. BACK ARROW

Back navigation should use a simple left arrow.

Examples:

```text
← Back to Programs
← Back to Events
```

Keep the label readable.

Do not make a back arrow the only navigation cue on mobile.

---

# 16. EXTERNAL LINK ICON

External destinations may use a subtle external-link symbol.

It should:

- remain secondary;
- not dominate the label;
- clearly communicate leaving the site.

Use accessible text or labeling where the icon's meaning is not obvious.

---

# 17. DOWNLOAD ICON

Use a downward arrow into a tray or equivalent standard symbol.

Do not create a custom decorative download icon when a standard recognizable icon exists.

---

# 18. SEARCH ICON

Search icon:

- outline;
- compact;
- simple lens;
- consistent with the main stroke system.

Search may be represented by icon alone in a compact control, but accessible labeling is required.

---

# 19. CLOSE ICON

Close icon:

- simple X;
- adequate touch target;
- visible against the modal/drawer surface;
- no decorative background unless required by the component.

---

# 20. CHEVRON SYSTEM

Chevrons are used for:

- accordions;
- dropdowns;
- select controls;
- carousels;
- mobile navigation.

They should share one shape family.

Default:

```text
small
thin
geometric
```

---

# 21. CHEVRON ANIMATION

For expandable components:

Closed:

```text
▾ / rotated equivalent
```

Open:

```text
rotated 180°
```

Animation:

- short;
- smooth;
- no bounce.

The state must remain understandable without animation.

---

# 22. PROGRAM CATEGORY ICONS

Program icons may communicate:

- public speaking;
- debate;
- critical thinking;
- leadership;
- communication;
- related Academy skills.

They must be conceptually clear.

Avoid creating five icons that are visually almost identical.

---

# 23. EVENT CATEGORY ICONS

Event categories may use symbols for:

- tournament;
- workshop;
- conference;
- seminar;
- competition;
- training.

The icon is supplemental.

The event title remains primary.

---

# 24. ACADEMY ICONS

Academy feature icons can communicate:

- mentorship;
- practice;
- progression;
- communication;
- confidence;
- leadership;
- certification;
- community.

Use icons to reinforce content, not replace headings.

---

# 25. RESULT ICONOGRAPHY

Results may use:

- trophy;
- medal;
- award;
- ranking;
- achievement.

Use restrained line icons.

Avoid cartoon trophies or excessive celebratory graphics.

---

# 26. RESOURCE ICONOGRAPHY

Resource types may use:

- document;
- book;
- video;
- article;
- link;
- download.

These should be immediately recognizable.

---

# 27. CONTACT ICONOGRAPHY

Contact may use:

- email;
- phone;
- location;
- social;
- time.

Use standard symbols.

Do not use decorative icons that obscure the contact meaning.

---

# 28. SOCIAL ICONS

Social icons should use recognizable official platform marks where appropriate.

Do not alter recognizable platform marks into arbitrary PBF versions.

Maintain sufficient contrast.

Do not rely on the icon alone if the destination is not obvious.

---

# 29. STATUS ICONS

Status states may use:

```text
success → check
warning → triangle/exclamation
error → X/exclamation
info → i
pending → clock
```

These are semantic and should be paired with text where the status matters.

---

# 30. STATUS COLOR + ICON

Never communicate status through color alone.

Example:

```text
✓ Registration successful
```

not only:

```text
green circle
```

The icon and text should work together.

---

# 31. FORM ICONS

Possible form icons:

- email;
- phone;
- user;
- calendar;
- location;
- upload;
- lock;
- search.

Use only when they genuinely improve scanning.

Avoid putting icons into every input simply because the space exists.

---

# 32. INPUT ICON POSITION

If an icon is inside an input:

- reserve internal padding;
- prevent overlap;
- preserve text cursor space;
- maintain clear focus state.

The icon must never reduce the usable input area excessively.

---

# 33. PASSWORD VISIBILITY ICON

Use a recognizable eye/eye-off pair.

The state must be communicated accessibly.

Do not rely solely on changing the icon without a label or accessible name.

---

# 34. CALENDAR ICON

Calendar icons may accompany date inputs or event metadata.

The icon should not imply that a field is a date if it is not.

---

# 35. LOCATION ICON

Location pins should be used sparingly.

They are appropriate for:

- event venue;
- office/contact location;
- map interaction.

Avoid using a location pin as generic decoration.

---

# 36. FILTER ICON

The filter symbol should be:

- simple funnel/adjustment style;
- compact;
- consistent.

On mobile, filter controls may combine:

```text
Filter
+
count
+
chevron
```

---

# 37. SORT ICON

Use a recognizable sort/order icon.

The selected sorting mode should be communicated in text.

---

# 38. CARD ACTION ICONS

Card actions should not visually compete with:

- card title;
- primary CTA;
- image.

Use small secondary icons.

---

# 39. CAROUSEL ICONS

Previous/next controls:

- minimum touch target;
- visible against imagery;
- consistent arrow;
- disabled state when no movement exists.

Do not create giant arrows that cover the main content.

---

# 40. PAGINATION ICONS

Pagination may use:

- previous arrow;
- next arrow;
- numeric pages.

Maintain clear active state.

Do not use icon-only pagination if numbers are necessary for orientation.

---

# 41. BREADCRUMB ICONS

Breadcrumb separators should be subtle.

Preferred:

```text
/
```

or a very small chevron.

Do not use large arrows between every breadcrumb.

---

# 42. ACCORDION ICONS

Accordion controls may use:

- plus/minus;
- chevron.

Choose one pattern globally.

Do not alternate between plus and chevron patterns across pages without a reason.

---

# 43. PLUS/MINUS SYSTEM

If plus/minus is used:

Closed:

```text
+
```

Open:

```text
−
```

Use the same stroke and optical size.

---

# 44. DECORATIVE GEOMETRY

Decorative symbols may include:

- thin horizontal rules;
- corner brackets;
- small circles;
- stage lines;
- vertical markers;
- geometric frames.

These are not icons in the semantic sense.

They should be treated as visual decoration.

---

# 45. DECORATIVE LINE RULE

Decorative lines should be:

- low contrast;
- sparse;
- aligned to the grid;
- intentionally placed.

Do not scatter random lines around the page.

---

# 46. GOLD ICON USAGE

Gold icons should indicate:

- emphasis;
- active state;
- premium feature;
- key action;
- achievement;
- podium-related visual language.

Gold should not be the default color for every icon.

---

# 47. GREEN ICON USAGE

Green is secondary.

Use for:

- Academy progression;
- positive/active states;
- selected educational categories;
- subtle environmental accents.

Avoid bright green.

---

# 48. ICON BACKGROUNDS

Feature icons may sit inside:

- transparent space;
- subtle dark tile;
- thin-border circle;
- square/architectural frame.

Avoid excessive rounded colored circles.

The default PBF style should favor restrained framing.

---

# 49. ICON CONTAINERS

If a container is used:

```text
icon
inside
small controlled surface
```

The container should have a clear reason.

Examples:

- clickable action;
- feature category;
- status;
- touch target.

---

# 50. ICON BUTTONS

Icon-only buttons must always have:

- accessible name;
- visible focus state;
- adequate target;
- hover state;
- disabled state if applicable.

Examples:

```text
Search
Close
Menu
Previous
Next
Play
Pause
```

---

# 51. ICON BUTTON SHAPE

Default icon-button container should be:

- restrained;
- square or slightly rectangular;
- not overly pill-shaped.

Circular buttons are allowed for specific media/carousel contexts.

---

# 52. ICON BUTTON HOVER

Hover may use:

- gold icon;
- subtle border illumination;
- slight background surface change;
- 1–2px movement only when appropriate.

Avoid dramatic scaling.

---

# 53. ICON BUTTON ACTIVE

Active state should be clearly distinct.

Possible:

- gold;
- green for Academy contextual state;
- stronger border;
- subtle background.

Do not use color alone.

---

# 54. DISABLED ICONS

Disabled:

- lower contrast;
- no hover motion;
- no pointer interaction;
- clear semantic state.

Avoid making disabled controls look broken.

---

# 55. ICON MOTION PRINCIPLES

Icons may move when the movement explains interaction.

Good:

```text
arrow → shifts toward destination
chevron → rotates
menu → transforms to close
download → slight downward cue
```

Bad:

```text
icon continuously spins
icon constantly pulses
icon bounces for attention
```

---

# 56. HOVER TRANSLATION

Recommended maximum translation for small icons:

```text
1–4px
```

The movement should feel physical, not cartoonish.

---

# 57. ICON ROTATION

Use rotation only when it represents state.

Examples:

- accordion chevron;
- navigation direction;
- menu/close transformation.

Do not rotate decorative icons merely for visual novelty.

---

# 58. ICON SCALE MOTION

Scale changes should be subtle.

Recommended:

```text
1.00 → 1.03 / 1.05
```

Avoid large icon zooms.

---

# 59. ICON ACCESSIBILITY

Every interactive icon needs an accessible name.

Examples:

```text
aria-label="Open menu"
aria-label="Close dialog"
aria-label="Next event"
```

Decorative SVGs should be hidden from the accessibility tree where appropriate.

---

# 60. SVG IMPLEMENTATION

Preferred SVG behavior:

- use `currentColor` where possible;
- avoid hardcoded random colors;
- preserve viewBox;
- avoid unnecessary inline path duplication;
- optimize SVGs;
- avoid embedded raster images.

This allows the design system to control icon color.

---

# 61. SVG STROKE

For line icons, prefer:

```text
stroke="currentColor"
fill="none"
```

unless the approved icon specifically requires a fill.

---

# 62. ICON SPRITES / COMPONENTS

Icons should ideally be reusable components rather than repeated raw SVG markup everywhere.

Concept:

```tsx
<Icon name="arrow-right" />
```

or equivalent project architecture.

The exact API is an engineering decision.

---

# 63. ICON TOKENIZATION

Recommended token families:

```text
--icon-size-xs
--icon-size-sm
--icon-size-md
--icon-size-lg
--icon-size-xl

--icon-stroke-thin
--icon-stroke-default
--icon-stroke-emphasis
```

Centralize these values.

---

# 64. ICON + TYPOGRAPHY RELATIONSHIP

Icons must not visually outweigh the text they support.

For a normal text link:

```text
label = primary
icon = secondary
```

For a feature card:

```text
heading = primary
icon = supporting
```

For an icon-only action:

```text
icon = primary
```

---

# 65. ICON DENSITY

Functional pages may have more icons.

Cinematic pages should have fewer.

Especially:

- Home hero;
- About hero;
- Academy hero.

Do not clutter the hero with icon rows.

---

# 66. PAGE FAMILY ICON DENSITY

## Home
Low.

## About
Low to medium.

## Academy
Medium.

## Programs
Medium.

## Program Detail
Low to medium.

## Coaches
Low.

## Events
Medium.

## Event Detail
Medium.

## Registration
Medium, primarily functional.

## Resources
Medium.

## Results
Medium.

## Feedback
Medium, functional.

## Contact
Low to medium.

---

# 67. MOBILE ICONOGRAPHY

On mobile:

- prioritize touch target;
- maintain icon readability;
- avoid reducing icons below comfortable size;
- simplify decorative icons;
- hide nonessential decorative symbols.

Do not make icons tiny just to preserve desktop density.

---

# 68. ICONS IN NAVIGATION DRAWERS

Mobile drawer may use icons for:

- primary categories;
- utility actions.

But text remains the primary navigation label.

Use consistent alignment:

```text
icon | label | optional arrow
```

---

# 69. ICONS IN DATA-DENSE ADMIN UI

Admin may use more functional icons than the public site.

Allowed:

- edit;
- delete;
- view;
- search;
- filter;
- sort;
- refresh;
- export;
- status.

Even in admin, use the same icon family.

---

# 70. DESTRUCTIVE ICONS

Delete/destructive actions may use a trash icon.

The icon alone should not trigger destructive behavior without adequate confirmation where appropriate.

Use semantic error/destructive color only when the action is actually destructive.

---

# 71. EDIT ICON

Pencil/edit icon is acceptable.

Do not use a generic sparkle or wand for editing.

---

# 72. VIEW ICON

Eye icon may indicate view/preview.

Do not use it for visibility settings unless the context makes that meaning clear.

---

# 73. MENU ICONOGRAPHY

The desktop navigation should not become an icon-heavy menu.

The brand is editorial.

The interface should feel like a premium institution rather than a software control panel.

---

# 74. PLAY / MEDIA ICONS

For video:

- play triangle;
- pause bars;
- mute/unmute;
- fullscreen.

Controls should be understandable without explanation.

---

# 75. MEDIA ICON CONTRAST

Media controls over images must use:

- dark translucent surface;
- light icon;
- sufficient contrast.

Avoid placing thin gold icons directly over bright photographs.

---

# 76. ICON OVER PHOTOGRAPHY

If an icon is placed over imagery:

1. check contrast;
2. add controlled surface if necessary;
3. preserve touch target;
4. avoid decorative clutter.

---

# 77. CUSTOM PBF SYMBOLS

Custom symbols may be developed around:

- podium;
- voice/speech;
- debate exchange;
- stage;
- progression;
- leadership.

However, these should be created as a coherent family.

Do not create one custom symbol at a time with unrelated geometry.

---

# 78. PODIUM SYMBOL

If a small podium icon is used:

- silhouette must match the approved podium language;
- avoid generic lectern clip-art;
- keep it simple enough to remain legible at 16–24px.

---

# 79. SPEECH SYMBOL

Speech icons should avoid generic chat-app bubbles when possible.

The context is public speaking and debate.

A microphone, speech mark, or structured dialogue symbol may be more appropriate.

---

# 80. DEBATE SYMBOL

Avoid literal cartoon debate symbols.

Better directions:

- two directional speech forms;
- opposing quotation marks;
- balanced dialogue;
- stage/podium geometry.

---

# 81. PROGRESSION SYMBOL

Progression can use:

- arrow;
- step marker;
- path;
- ascending geometry.

Keep it editorial rather than gamified.

---

# 82. ACHIEVEMENT SYMBOL

Achievement may use:

- trophy;
- medal;
- laurel;
- star.

Use restrained geometry.

Avoid excessive gold stars across the site.

---

# 83. ICONOGRAPHY AND CULTURAL CONTEXT

Icons should feel culturally neutral and globally understandable.

Pakistan-specific symbolism should be used carefully and intentionally.

Do not fill the UI with flags, crescents, monuments, or national motifs simply to communicate Pakistani identity.

National identity is already carried by:

- content;
- mission;
- people;
- context;
- color restraint;
- real events.

---

# 84. ICONOGRAPHY AND BRAND COLORS

Icons should inherit semantic colors.

Do not define:

```text
icon-blue
icon-purple
icon-orange
icon-random
```

unless a future product requirement explicitly introduces another semantic system.

The core visual language remains:

```text
black
white/warm white
gold
restrained green
semantic status colors
```

---

# 85. DECORATIVE ICON LIMIT

A decorative icon should be removed if removing it does not reduce comprehension or visual hierarchy.

This keeps the site premium.

Premium design is controlled by omission as much as by addition.

---

# 86. ICON QA AT BREAKPOINTS

Test iconography at:

```text
360×800
390×844
430×932
768×1024
1024×768
1280×800
1440×900
```

Check:

- stroke visibility;
- alignment;
- touch target;
- contrast;
- no clipping;
- no unexpected scaling.

---

# 87. ICON QA WITH TYPOGRAPHY

Test icons beside:

- body text;
- small metadata;
- headings;
- buttons;
- nav labels.

The icon must remain visually balanced at every text size.

---

# 88. ICON QA WITH GOLD

Check that gold icons do not disappear against:

- black;
- near-black;
- photographic backgrounds;
- gold lighting.

If the icon disappears, introduce a controlled surface or change treatment.

---

# 89. ICON QA WITH GREEN

Green icons must remain restrained.

Do not allow green to become brighter than the primary gold accent without a semantic reason.

---

# 90. ICON QA WITH MOTION

Check that:

- hover movement does not shift layout;
- rotation does not clip;
- focus states remain visible;
- reduced-motion mode removes nonessential movement;
- touch interactions do not depend on hover.

---

# 91. IMPLEMENTATION RULES

The coding agent must:

1. use one coherent icon family;
2. centralize icon components;
3. use semantic names;
4. use `currentColor` where practical;
5. preserve accessible labels;
6. maintain touch targets;
7. follow icon size tokens;
8. follow stroke tokens;
9. avoid arbitrary icon colors;
10. avoid mixing icon styles;
11. avoid decorative icon clutter;
12. avoid embedding important text in icon graphics;
13. avoid replacing approved custom PBF marks with generic symbols;
14. follow the asset manifest for custom icons.

---

# 92. COMPONENT ICON CONTRACT

Every reusable component using an icon should define:

```text
Icon purpose
Icon name
Default size
Mobile size
Color
Interactive state
Hover behavior
Active behavior
Disabled behavior
Accessibility label
Motion
```

Example:

```text
Component:
EventCard

Icon:
arrow-right

Purpose:
Open event detail

Desktop:
18px

Mobile:
18px

Default:
muted/white

Hover:
gold + 2px translation

Reduced motion:
no translation
```

---

# 93. ICON DECISION TREE

When adding an icon:

```text
Does it improve comprehension?
        ↓
      yes
        ↓
Is there an approved icon?
        ↓
      yes → use it
        ↓
      no
        ↓
Can a standard recognizable icon communicate it?
        ↓
      yes → use standard icon
        ↓
      no
        ↓
Does it need a custom PBF symbol?
        ↓
      yes → design/review custom icon
        ↓
      no → omit icon
```

---

# 94. COMMON AI FAILURES TO PREVENT

The implementation agent must not:

- use emojis as icons;
- randomly switch icon libraries;
- use filled icons beside thin outlines;
- make every button contain an icon;
- add icons to every heading;
- use oversized decorative arrows;
- make icons gold everywhere;
- use tiny touch targets;
- omit accessible labels;
- animate icons continuously;
- create fake custom SVG logos;
- use unrelated cultural symbols.

---

# 95. ICONOGRAPHY PRINCIPLE FOR THE WHOLE SITE

The icon system should feel almost invisible when it is working correctly.

Users should notice:

**the message, the people, the stage, the programs, the opportunities.**

They should not notice a collection of random icons.

Icons are the punctuation of the interface.

They are not the headline.

---

# 96. HANDOFF

This document establishes iconography.

Related systems:

- visual identity → `01-BRAND-IDENTITY.md`
- color → `02-COLOR-SYSTEM.md`
- typography → `03-TYPOGRAPHY.md`
- spacing/layout → `04-GRID-SPACING-LAYOUT.md`
- components → `05-COMPONENT-SYSTEM.md`
- imagery/assets → `06-IMAGERY-ASSET-SYSTEM.md`
- motion → `08-MOTION-ANIMATION.md`
- 3D podium → `09-3D-PODIUM.md`
- responsive → `10-RESPONSIVE-SYSTEM.md`
- accessibility → `11-ACCESSIBILITY.md`

---

# 97. FINAL ICONOGRAPHY RULE

When uncertain, choose the simpler icon.

When two icons communicate the same thing, choose the one that requires less visual attention.

When an icon competes with content, reduce or remove the icon.

The PBF interface should communicate confidence through restraint.
