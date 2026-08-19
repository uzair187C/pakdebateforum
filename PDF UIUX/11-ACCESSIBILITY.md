# PAK DEBATE FORUM — DESIGN SYSTEM
# 11 — ACCESSIBILITY

Status: Accessibility specification / implementation source of truth
Scope: keyboard access, screen readers, focus, contrast, motion, 3D fallbacks, forms, navigation, responsive behavior, semantic structure, zoom, touch, error handling, media, loading, and inclusive interaction.

---

# 0. PURPOSE

PBF is a visually ambitious, dark, cinematic website.

Accessibility must not be treated as a separate layer added after the visual design.

It is part of the design system.

The objective is:

```text
premium visual experience
+
clear information
+
predictable interaction
+
keyboard access
+
screen-reader access
+
motion control
+
responsive access
```

The website must remain usable when visual effects are reduced or unavailable.

---

# 1. ACCESSIBILITY PRINCIPLE

The visual experience may be sophisticated.

The underlying interface must remain simple.

A visitor should always be able to understand:

- where they are;
- what the page is about;
- what they can interact with;
- what happened after an interaction;
- how to continue;
- how to go back.

---

# 2. ACCESSIBILITY IS NOT A FALLBACK

Do not create:

```text
beautiful desktop
+
separate accessible version
```

Create:

```text
one semantic interface
+
progressive visual enhancement
```

---

# 3. CORE RULE

If a visual effect disappears:

The information must remain.

If a 3D object disappears:

The identity/content must remain.

If animation disappears:

The page must still communicate the same hierarchy.

If images fail:

Text alternatives or surrounding context must remain.

---

# 4. TARGET STANDARD

Aim for WCAG 2.2 AA as the baseline implementation target.

Where the visual design makes a stronger requirement necessary, prefer the stronger requirement.

Do not treat AA as permission to make borderline decisions.

---

# 5. SEMANTIC HTML

Use semantic elements wherever appropriate:

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
<button>
<a>
<form>
<label>
<fieldset>
<legend>
```

Avoid replacing semantic controls with generic `<div>` elements.

---

# 6. LANDMARK STRUCTURE

Each page should expose a predictable structure.

Conceptually:

```text
header
nav
main
  sections
footer
```

There should normally be one primary page `<main>`.

---

# 7. PAGE TITLE

Every route must have an accurate document title.

The title should identify:

- page purpose;
- PBF context.

Do not use generic titles such as:

```text
Home
Page
Untitled
```

---

# 8. META DESCRIPTION

Important public pages should have useful descriptions.

Descriptions should communicate the actual page purpose.

Do not stuff keywords.

---

# 9. HEADING HIERARCHY

Headings must reflect document structure.

Typical:

```text
H1
  H2
    H3
```

Do not use headings merely because they look visually appropriate.

Style should be independent from semantic level.

---

# 10. ONE PRIMARY H1

Normally use one meaningful H1 per page.

The hero headline should generally be the H1 when it represents the page's primary subject.

---

# 11. HEADING SKIPPING

Avoid:

```text
H1
H4
```

unless there is a legitimate structural reason.

---

# 12. VISUAL HEADING VS SEMANTIC HEADING

A small visual heading can still be H2.

A huge decorative label does not have to be H1.

Semantic meaning controls heading level.

---

# 13. LANDMARK LABELS

If multiple landmarks of the same type exist, provide meaningful labels where needed.

Do not create unnecessary ARIA labels everywhere.

---

# 14. NAVIGATION LABEL

Primary navigation should have a clear accessible name.

Example concept:

```text
Primary navigation
```

---

# 15. SKIP LINK

Provide a visible-on-focus skip link to the main content.

Expected behavior:

```text
Tab
↓
Skip to main content
↓
main
```

It should be visually consistent with the PBF interface while remaining unmistakably usable.

---

# 16. SKIP LINK MOBILE

The skip link must work on touch/keyboard hybrid devices.

Do not place it somewhere that becomes hidden behind the sticky header.

---

# 17. KEYBOARD ACCESS

All interactive functionality must be accessible with a keyboard.

This includes:

- navigation;
- menu;
- buttons;
- links;
- filters;
- forms;
- dialogs;
- carousels;
- media controls;
- podium-related controls if interactive.

---

# 18. TAB ORDER

Tab order should follow visual and semantic reading order.

Do not use positive `tabindex` values to manually create elaborate tab sequences.

Prefer natural DOM order.

---

# 19. TABINDEX

Preferred:

```text
tabindex="0"
```

only when a custom interactive element genuinely requires it.

Avoid:

```text
tabindex="1"
tabindex="2"
...
```

---

# 20. CUSTOM CONTROLS

If a visual object behaves like a button:

Use a `<button>`.

If it navigates:

Use an `<a>`.

Do not make clickable `<div>` elements unless there is a compelling technical reason and the complete interaction semantics are implemented.

---

# 21. BUTTON VS LINK

Use:

```text
button = action
link = navigation
```

Examples:

```text
View Event → link
Open Menu → button
Submit Registration → button
Download Resource → link
```

---

# 22. FOCUS VISIBILITY

Every interactive element must have a visible keyboard focus state.

Never remove focus indicators purely for aesthetic reasons.

---

# 23. FOCUS DESIGN

Focus should fit the PBF visual language.

Possible treatment:

- high-contrast gold outline;
- gold/white ring;
- subtle glow.

The focus indicator must remain clearly visible against black.

---

# 24. FOCUS CONTRAST

Do not rely on a faint gold glow alone.

There must be a clear boundary between:

```text
focused
```

and:

```text
not focused
```

---

# 25. FOCUS WITH STICKY HEADER

When keyboard navigation jumps to content:

Ensure the sticky header does not cover the focused target.

Use appropriate scroll-margin behavior.

---

# 26. FOCUS WITH SCROLL ANIMATION

When focus moves to a section:

Do not animate it so aggressively that the user loses track of it.

Reduced motion should simplify this further.

---

# 27. FOCUS INSIDE MODALS

When a dialog opens:

Focus should move into the dialog.

When it closes:

Focus should return to the triggering control.

---

# 28. DIALOG FOCUS TRAP

Modal dialogs that prevent background interaction must trap focus appropriately.

Users should not accidentally tab into hidden page content behind the dialog.

---

# 29. ESCAPE KEY

Dialogs/drawers that support dismissal should normally support:

```text
Escape
```

unless the interaction genuinely requires otherwise.

---

# 30. MOBILE DRAWERS

A mobile navigation drawer must expose:

- accessible name;
- close control;
- logical tab order;
- visible focus;
- correct expanded/open state.

---

# 31. MENU BUTTON STATE

Menu trigger should expose state appropriately.

Conceptually:

```text
aria-expanded="false"
```

closed

and:

```text
aria-expanded="true"
```

open.

Use `aria-controls` when useful.

---

# 32. DECORATIVE ELEMENTS

Pure decoration should not become screen-reader noise.

Examples:

- atmospheric glow;
- decorative gold line;
- grain;
- shadow;
- ornamental particle;
- background texture.

These should generally be hidden from assistive technology.

---

# 33. INFORMATIONAL IMAGES

Meaningful images require useful alternative text.

Alt text should communicate purpose, not every visual detail.

---

# 34. DECORATIVE IMAGES

If an image contributes no information:

Use an empty alt:

```text
alt=""
```

Do not write:

```text
decorative image
```

unless that phrase itself is meaningful.

---

# 35. HERO BACKGROUND

If the hero background is atmospheric only:

Do not make screen readers announce it.

The textual hero content provides the semantic information.

---

# 36. PODIUM ACCESSIBILITY

The 3D podium is primarily visual branding.

It must not be the only place where important information exists.

The page should communicate the same core identity in accessible text.

---

# 37. PODIUM ALT/SEMANTIC STRATEGY

If represented as an image:

Provide appropriate alternative text only if the object communicates meaningful content.

If purely decorative:

```text
alt=""
```

The visible Academy branding should still exist as actual accessible page text where appropriate.

---

# 38. 3D CANVAS

A WebGL canvas must not become an inaccessible black hole.

If the canvas contains interaction:

Provide an accessible alternative or equivalent controls.

If decorative:

Keep the semantic content outside the canvas.

---

# 39. CANVAS FALLBACK

When WebGL fails:

Display a static image or CSS composition.

Never leave:

```text
empty black rectangle
```

as the only result.

---

# 40. WEBGL FAILURE

Failure states must be silent from the visitor's perspective whenever possible.

The page should gracefully fall back.

Do not show technical messages such as:

```text
WebGL context initialization failed
```

to normal users.

---

# 41. REDUCED MOTION

Respect:

```text
prefers-reduced-motion
```

This is mandatory for the motion system.

---

# 42. REDUCED MOTION PRINCIPLE

Reduced motion does not mean:

```text
remove all design
```

It means:

```text
remove unnecessary movement
```

Keep:

- hierarchy;
- color;
- depth;
- composition;
- static lighting;
- subtle state changes where safe.

---

# 43. REDUCED MOTION PODIUM

Disable or drastically reduce:

- camera drift;
- rotation;
- parallax;
- scroll-linked movement;
- floating;
- particle movement.

The podium may remain as a static render.

---

# 44. REDUCED MOTION PAGE REVEALS

Replace:

```text
large slide + fade
```

with:

```text
simple opacity transition
```

or immediate visibility.

---

# 45. REDUCED MOTION PAGE TRANSITIONS

Avoid cinematic wipe/zoom transitions.

Prefer:

```text
instant
```

or:

```text
very short opacity transition
```

---

# 46. AUTO-PLAY MEDIA

Do not automatically play media with meaningful audio.

If video is purely decorative:

Mute by default.

Respect reduced motion and user preferences.

---

# 47. AUTOPLAY VIDEO

If used:

- muted;
- no essential information conveyed only through motion;
- poster available;
- pause/stop behavior considered.

---

# 48. MOVING CONTENT

Any content that moves continuously and conveys information should have an accessible mechanism to pause/stop where required.

Do not use endless motion merely because it looks cinematic.

---

# 49. FLASHING

Avoid flashing effects.

Do not create rapid:

- strobes;
- light pulses;
- intense gold flashes.

---

# 50. GOLD GLOW

Gold glow should remain atmospheric.

Avoid rapid brightness oscillations that resemble flashing.

---

# 51. COLOR CONTRAST

Text must have sufficient contrast against its actual background.

Do not assume:

```text
black + gold = automatically accessible
```

Small gold text can easily become too low-contrast.

---

# 52. LARGE TEXT

Contrast requirements differ by text size.

Do not classify text as "large" purely because it feels visually large.

Use actual accessible sizing criteria.

---

# 53. GOLD TEXT

Gold can be used strongly for:

- headings;
- labels;
- emphasis;
- decorative typography.

For small informational text, verify contrast carefully.

---

# 54. WHITE TEXT

Primary body text on black should remain comfortably readable.

Avoid overly dim gray body text.

---

# 55. SECONDARY TEXT

Secondary text may be muted.

It must still remain readable.

Do not use ultra-dark gray merely to create a premium aesthetic.

---

# 56. TEXT OVER IMAGES

When text overlays imagery:

Use a controlled contrast mechanism:

- gradient;
- dark panel;
- scrim;
- shadow where appropriate.

Do not rely on the image itself being dark enough.

---

# 57. TEXT OVER 3D

Hero text must remain readable even if the podium/light scene changes.

Keep text in a stable contrast zone.

---

# 58. COLOR NOT AS SOLE SIGNAL

Do not communicate:

```text
winner = gold
loser = gray
error = red
```

without another cue.

Use:

- icon;
- label;
- text;
- position;
- pattern;
- status indicator.

---

# 59. LINKS

Links must be distinguishable from surrounding body text.

Do not rely solely on hover.

---

# 60. HOVER

Hover effects are enhancement only.

No important information should exist only on hover.

---

# 61. TOUCH

Every interaction must have a non-hover equivalent.

---

# 62. TOUCH TARGETS

Interactive controls should provide appropriately large touch areas.

Do not force precision taps.

---

# 63. ICON-ONLY BUTTONS

Icon-only controls require an accessible name.

Examples:

```text
Close
Open menu
Search
Play
Pause
Previous
Next
```

---

# 64. ICON + TEXT BUTTONS

Visible text should normally provide the accessible name.

Do not unnecessarily duplicate it in ARIA labels.

---

# 65. DISABLED CONTROLS

Disabled controls should:

- look disabled;
- expose appropriate state;
- not be accidentally keyboard-interactive.

Do not disable controls merely because a user has not hovered something.

---

# 66. LOADING STATES

Loading state should be communicated semantically where useful.

Avoid noisy screen-reader announcements for every animation frame.

---

# 67. SKELETONS

Skeleton shimmer is decorative.

Do not make screen readers announce the entire skeleton structure.

Provide a concise loading state when necessary.

---

# 68. LIVE REGIONS

Use live announcements sparingly.

Good examples:

- form submission success;
- validation result;
- filter result count;
- important asynchronous state.

Bad example:

- announcing every scroll effect.

---

# 69. FORM LABELS

Every form control must have an accessible label.

Preferred:

```text
<label>
```

Do not rely only on placeholders.

---

# 70. PLACEHOLDERS

Placeholders are hints, not labels.

They disappear during input and should not carry the full semantic meaning of a field.

---

# 71. REQUIRED FIELDS

Required fields should be communicated clearly.

Use:

- visible indication;
- semantic required state.

Do not communicate required status only through color.

---

# 72. FORM ERRORS

Errors must be:

- visible;
- specific;
- associated with the relevant field;
- understandable.

Avoid:

```text
Invalid input
```

when the actual problem can be explained.

---

# 73. ERROR FOCUS

After submission failure:

Move focus appropriately, usually to:

- the first invalid field;
- or a clear error summary.

Do not unexpectedly move the user around the page without reason.

---

# 74. ERROR SUMMARY

For complex forms, provide a summary that identifies:

- what failed;
- where;
- how to fix it.

---

# 75. SUCCESS STATES

Success should be clearly communicated.

Do not rely only on:

```text
green check
```

Use text.

---

# 76. FORM AUTOCOMPLETE

Use appropriate autocomplete attributes where useful.

This improves real-world usability.

---

# 77. INPUT TYPES

Use appropriate input types:

```text
email
tel
url
number
date
```

when semantically appropriate.

---

# 78. MOBILE FORM KEYBOARD

Correct input types help mobile browsers provide appropriate keyboards.

---

# 79. DATE INPUTS

If custom date pickers are used:

Ensure keyboard and screen-reader access.

Do not create a visually beautiful but inaccessible calendar.

---

# 80. SEARCH

Search controls should have:

- label/name;
- input;
- clear state;
- results feedback.

---

# 81. FILTERS

Filters must expose:

- current state;
- expanded/collapsed state;
- selected values.

Do not rely solely on visual highlight.

---

# 82. SORT CONTROLS

Sort controls should expose current selection.

---

# 83. CAROUSELS

Avoid unnecessary carousels.

If used:

Provide:

- previous;
- next;
- current position if useful;
- keyboard access;
- pause behavior if automatic.

---

# 84. CAROUSEL AUTOPLAY

Default to user-controlled where practical.

Do not make critical information disappear automatically.

---

# 85. CAROUSEL MOBILE

Swipe may be supported.

But swipe must not be the only way to navigate.

---

# 86. TABS

If tabs are used:

Implement proper tab semantics.

Keyboard interaction must be predictable.

---

# 87. ACCORDIONS

Accordion headers should expose expanded/collapsed state.

Content should not become inaccessible when collapsed.

---

# 88. FOOTER ACCORDIONS

If mobile footer groups collapse:

Ensure keyboard and screen-reader behavior remains equivalent to desktop content.

---

# 89. TABLE ACCESSIBILITY

Use proper table semantics for actual tabular data.

Do not convert every table into visually styled `<div>` elements without need.

---

# 90. TABLE HEADERS

Use meaningful header associations.

Complex tables may require additional semantic relationships.

---

# 91. MOBILE TABLE SCROLL

If a table remains tabular on mobile:

Provide an obvious scrollable region.

Do not silently hide columns containing important information.

---

# 92. RESULTS LEADERBOARD

If transformed into cards on mobile:

Preserve semantic ranking information.

For example:

```text
1st — Participant
Score — ...
```

---

# 93. LINKS TO EVENTS

Event cards should contain a clear accessible link.

Do not require clicking the entire card unless the interaction is correctly implemented.

---

# 94. CARD ACCESSIBILITY

A card can contain:

- heading;
- metadata;
- description;
- CTA.

Avoid nested interactive elements that create confusing click behavior.

---

# 95. NESTED INTERACTIONS

Avoid:

```text
<a>
  <button>
```

or equivalent nested interactive structures.

---

# 96. ICONOGRAPHY

Icons should be semantically categorized:

```text
decorative
informational
interactive
```

Each category has different accessibility requirements.

---

# 97. DECORATIVE ICON

Hide from assistive technology where appropriate.

---

# 98. INFORMATION ICON

Provide accessible context.

Do not force users to infer meaning from shape alone.

---

# 99. INTERACTIVE ICON

Provide:

- accessible name;
- keyboard access;
- focus state;
- pressed/expanded state if applicable.

---

# 100. SOCIAL ICONS

Each social link needs an accessible name.

Example concept:

```text
Instagram — Pak Debate Forum
```

not merely:

```text
Instagram icon
```

---

# 101. EXTERNAL LINKS

If a link opens a new tab/window:

The behavior should be understandable.

Do not open new tabs unnecessarily.

---

# 102. DOWNLOADS

If a link downloads a file:

The accessible label should make that clear when useful.

Example:

```text
Download Debate Handbook (PDF)
```

---

# 103. DOCUMENT LINKS

Identify file types/sizes where helpful.

---

# 104. LANGUAGE

Set the correct document language.

If content switches languages, mark the relevant language where technically appropriate.

---

# 105. ROMAN URDU / MULTILINGUAL CONTENT

If PBF eventually displays multilingual or Roman Urdu content:

Do not assume English pronunciation or language semantics.

Use language metadata where appropriate.

---

# 106. RTL

If Urdu/Arabic-script content is introduced:

Support appropriate RTL layout.

Do not simply mirror the entire visual design blindly.

The information architecture must remain logical.

---

# 107. MIXED DIRECTION TEXT

Names, numbers, scores, dates, and bilingual strings may require careful direction handling.

Test real content.

---

# 108. LOCALIZED TEXT

Do not rely on fixed-width text containers.

Localization can significantly expand strings.

---

# 109. LOCALIZED BUTTONS

Buttons must tolerate longer labels.

---

# 110. LOCALIZED NAVIGATION

Navigation should have a responsive fallback if translated labels become too long.

---

# 111. SCREEN READER CONTENT

Do not hide important text merely because it is visually redundant.

Visual and semantic structures should usually align.

---

# 112. VISUALLY HIDDEN CONTENT

Use a proper visually-hidden utility for content that must remain accessible.

Do not use:

```text
display:none
```

when the goal is screen-reader availability.

---

# 113. ARIA PRINCIPLE

First use native HTML.

Use ARIA when native semantics are insufficient.

Do not add ARIA attributes merely because they sound more accessible.

---

# 114. ARIA STATE ACCURACY

If state changes visually:

The semantic state should change too.

Examples:

```text
menu open
dialog open
accordion expanded
filter selected
button pressed
```

---

# 115. ARIA LABEL OVERUSE

Avoid replacing meaningful visible text with generic ARIA labels.

Visible content is often the best accessible name.

---

# 116. LIVE ANNOUNCEMENT DISCIPLINE

Announcements should be:

- concise;
- meaningful;
- non-repetitive.

Do not make assistive technology narrate the cinematic layer.

---

# 117. SCROLL POSITION

Do not automatically hijack scrolling.

Normal browser scroll behavior should remain intact.

---

# 118. SCROLL-JACKING

Avoid forcing the user through a sequence of scroll-bound animations before allowing normal page movement.

---

# 119. PINNED SECTIONS

Pinned cinematic sections must not trap the keyboard or create confusing reading order.

---

# 120. 3D INTERACTION ACCESSIBILITY

If the podium responds to pointer movement:

That is optional enhancement.

Do not require it to discover information.

---

# 121. 3D DRAGGING

If 3D rotation is ever directly draggable:

Provide an alternate interaction or static state.

Do not make drag the only way to inspect important content.

---

# 122. POINTER PRECISION

Do not require tiny hover targets or precise mouse movements.

---

# 123. MOTION + COGNITIVE LOAD

Motion should support hierarchy.

Do not animate every card, line, icon, and background simultaneously.

---

# 124. REDUCED MOTION TEST

With reduced motion enabled:

```text
[ ] hero usable
[ ] podium visible
[ ] navigation usable
[ ] page transitions usable
[ ] content appears
[ ] no essential information depends on animation
```

---

# 125. CONTRAST TEST

For every major page:

```text
[ ] hero heading
[ ] body text
[ ] secondary text
[ ] gold labels
[ ] buttons
[ ] links
[ ] focus states
[ ] form errors
[ ] disabled states
```

---

# 126. KEYBOARD TEST

Complete the major user journey using keyboard only:

```text
load page
↓
skip link
↓
navigation
↓
hero CTA
↓
content
↓
event
↓
form
↓
submit
↓
footer
```

No mouse.

---

# 127. SCREEN READER TEST

Test major flows with at least one mainstream screen reader/browser combination.

Check:

- landmarks;
- headings;
- links;
- buttons;
- form labels;
- state changes;
- dialogs;
- dynamic results.

---

# 128. TOUCH ACCESSIBILITY TEST

Test:

- menu;
- cards;
- CTA;
- filters;
- forms;
- dialogs;
- carousel controls.

No interaction should depend on hover.

---

# 129. ZOOM TEST

Test:

```text
100%
200%
400%
```

Verify:

- text remains readable;
- content remains available;
- no critical clipping.

---

# 130. HIGH CONTRAST / FORCED COLORS

Where supported, do not create controls that become invisible when forced-color/high-contrast modes are active.

---

# 131. SYSTEM COLOR OVERRIDES

Decorative gradients can degrade.

Critical controls must remain recognizable even when system styles alter colors.

---

# 132. FOCUS + FORCED COLORS

Focus must remain visible under system accessibility modes.

---

# 133. POINTER CAPABILITY

Use capability detection where appropriate.

Do not assume:

```text
desktop = mouse
mobile = touch
```

Hybrid devices exist.

---

# 134. HOVER CAPABILITY

Use hover enhancement only when hover is genuinely available.

---

# 135. MOTION CAPABILITY

Respect user preference before enabling decorative motion.

---

# 136. PERFORMANCE + ACCESSIBILITY

A slow interface can become an accessibility problem.

Do not prioritize effects over usable interaction.

---

# 137. LOADING ACCESSIBILITY

The visitor should know whether content is:

- loading;
- loaded;
- unavailable;
- empty;
- failed.

---

# 138. NETWORK FAILURE

If an API fails:

Provide an understandable user-facing state.

Do not show raw stack traces.

---

# 139. IMAGE FAILURE

If a meaningful image fails:

- preserve its textual context;
- avoid collapsed broken-image layouts;
- use an appropriate fallback.

---

# 140. 3D FAILURE

If the podium fails:

Fallback should still show:

```text
PBF identity
+
Academy identity
+
hero hierarchy
```

---

# 141. JAVASCRIPT FAILURE

Core navigation and content should degrade as gracefully as the architecture permits.

Do not make the entire website meaningless without client-side animation.

---

# 142. CSS FAILURE

Semantic HTML should still convey basic information structure.

---

# 143. FONT FAILURE

Fallback fonts must remain readable.

Do not hide text until a custom font loads.

---

# 144. SCREEN READER — DECORATIVE MOTION

Screen readers should not receive repeated announcements from:

- counters;
- animated decorative numbers;
- scrolling background text;
- particle systems.

---

# 145. ANIMATED COUNTERS

If a statistic animates:

The accessible value should represent the final meaningful number rather than every intermediate frame.

---

# 146. COUNTDOWN TIMERS

If used:

Provide a meaningful accessible representation.

Do not announce every second unless the user specifically needs it.

---

# 147. STATUS CHIPS

Examples:

```text
Upcoming
Live
Completed
Registration Open
```

must not rely solely on color.

---

# 148. EVENT DATE ACCESSIBILITY

Dates should be represented in readable text.

Do not rely only on visual calendar graphics.

---

# 149. ICON + STATUS

Use both:

```text
icon
+
text
```

when icon meaning may not be universally understood.

---

# 150. ACADEMY PROGRESSION ACCESSIBILITY

A visual progression should have a semantic textual structure.

For example:

```text
Foundation
Intermediate
Advanced
...
```

The connecting line is decorative.

---

# 151. RESULTS PODIUM ACCESSIBILITY

If the desktop uses a visual 1st/2nd/3rd podium:

The actual ranking must exist in semantic content.

---

# 152. IMAGE GALLERIES

Gallery images need meaningful accessible names where informative.

Decorative gallery backgrounds can remain decorative.

---

# 153. LIGHTBOX ACCESSIBILITY

When opened:

- announce dialog;
- provide close;
- trap focus if modal;
- support Escape;
- restore focus.

---

# 154. VIDEO ACCESSIBILITY

If video contains speech or meaningful information:

Provide appropriate captions/transcripts as required by the content.

---

# 155. AUDIO

Do not autoplay meaningful audio.

Provide controls.

---

# 156. CAPTIONS

Captions should be synchronized and readable.

---

# 157. TRANSCRIPTS

For important spoken content, provide a transcript where appropriate.

---

# 158. PLAYBACK CONTROLS

Controls must be keyboard accessible.

---

# 159. MEDIA MOTION

Respect reduced motion and user interaction preferences.

---

# 160. PAGE TRANSITIONS + SCREEN READERS

Navigation should not make assistive technology lose the page context.

The new page should establish:

- new title;
- main heading;
- appropriate focus behavior.

---

# 161. SPA ROUTING

If the application uses client-side routing:

Update:

- document title;
- route;
- focus;
- accessible page context.

---

# 162. ROUTE FOCUS

After route change, move focus appropriately, typically to the new page's main heading or main content region.

Do not leave keyboard focus on a removed navigation element.

---

# 163. LOADING ROUTES

If navigation takes time:

Communicate loading state where needed.

Do not trap users in an apparently frozen interface.

---

# 164. ERROR ROUTES

404/500 pages must remain accessible.

They should contain:

- clear heading;
- explanation;
- navigation back to useful content.

---

# 165. MOBILE ACCESSIBILITY

Mobile accessibility is not merely screen-reader accessibility.

Also consider:

- touch precision;
- text size;
- motion;
- contrast;
- keyboard on hybrid devices;
- browser UI;
- dynamic viewport;
- thumb reach.

---

# 166. THUMB REACH

Important controls should not be placed in difficult-to-reach locations unnecessarily.

---

# 167. BOTTOM NAVIGATION

If ever introduced, ensure it does not conflict with:

- safe area;
- browser UI;
- keyboard;
- content.

---

# 168. STICKY CTA

If a mobile sticky CTA is introduced:

It must:

- not cover content;
- be dismissible where appropriate;
- remain accessible;
- respect safe area;
- not trap focus.

---

# 169. ACCESSIBILITY + CINEMATIC DESIGN

The visual design should communicate:

```text
confidence
discipline
prestige
intellectual competition
```

Accessibility should communicate:

```text
clarity
control
predictability
```

The two are compatible.

---

# 170. AI IMPLEMENTATION CONTRACT

Treat this document as authoritative.

The coding agent must:

```text
use semantic HTML first
use native controls
support keyboard navigation
support visible focus
respect reduced motion
preserve content when effects fail
provide meaningful accessible names
avoid hover-only interactions
avoid color-only information
support responsive zoom
support screen-reader structure
```

---

# 171. AI PROHIBITED SHORTCUTS

Do not:

- remove focus outlines;
- use clickable divs unnecessarily;
- hide essential text;
- use ARIA as decoration;
- trap keyboard focus accidentally;
- rely on hover;
- rely on color alone;
- force 3D interaction;
- make animation mandatory;
- create inaccessible custom controls;
- use fixed heights that clip text;
- disable zoom;
- hide overflow to conceal broken layouts.

---

# 172. ACCESSIBILITY QA MATRIX

Test:

```text
keyboard
screen reader
touch
mouse
reduced motion
200% zoom
400% zoom
forced colors
WebGL failure
slow network
JavaScript degraded
font failure
image failure
```

---

# 173. PAGE QA

For every page:

```text
[ ] title
[ ] H1
[ ] landmarks
[ ] skip link
[ ] keyboard
[ ] focus
[ ] contrast
[ ] images
[ ] links
[ ] buttons
[ ] forms
[ ] dynamic states
[ ] mobile
[ ] reduced motion
```

---

# 174. COMPONENT QA

For every shared component:

```text
[ ] semantic role
[ ] accessible name
[ ] keyboard behavior
[ ] focus state
[ ] touch behavior
[ ] screen-reader state
[ ] responsive behavior
[ ] reduced-motion behavior
```

---

# 175. DESIGN REVIEW CHECK

Before approving a visual component, ask:

1. What does it communicate?
2. Is that information available without the visual effect?
3. Can it be used without a mouse?
4. Can it be understood without color?
5. Can it be used with reduced motion?
6. Does it survive narrow screens?
7. Does it survive zoom?
8. Does it have a meaningful semantic structure?

---

# 176. FINAL ACCESSIBILITY STANDARD

The website is successful when:

A sighted mouse user experiences a premium cinematic PBF website.

A keyboard user experiences a clear, efficient PBF website.

A screen-reader user experiences a structured PBF website.

A reduced-motion user experiences a calm PBF website.

A mobile user experiences a focused PBF website.

A low-power device experiences a lightweight PBF website.

They are all experiencing the same product.

---

# 177. HANDOFF

This document defines accessibility behavior.

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
- responsive → `10-RESPONSIVE-SYSTEM.md`
- performance → `12-PERFORMANCE.md`
- page transitions → `13-PAGE-TRANSITIONS.md`

Any page/component implementation that conflicts with this document requires explicit design/accessibility review.
