# PAK DEBATE FORUM (PDF) — 33 GLOBAL NAVIGATION & HEADER IMPLEMENTATION SPECIFICATION

Status: Global navigation/header system contract.

Purpose:
Define the shared navigation architecture that connects every PDF page into one coherent digital product.

The navigation must feel premium, precise, calm, intelligent, modern, institutional, and unmistakably PDF.

It must NOT feel like a generic SaaS navbar, crowded university portal, dashboard, template header, or collection of unrelated page links.

---

## 1. GLOBAL SHELL

Every primary page inherits:

```text
GLOBAL HEADER
↓
PAGE CONTENT
↓
GLOBAL FOOTER
```

The header is a persistent brand anchor.

## 2. PRIMARY INFORMATION ARCHITECTURE

```text
Home
About
Events
Academy
Resources
Contact
```

Only add destinations supported by the actual approved site architecture.

Do not invent navigation items.

## 3. DESKTOP STRUCTURE

Recommended:

```text
[PDF LOGO]    Home About Events Academy Resources Contact    [PRIMARY ACTION]
```

The primary action is optional and must correspond to a real product flow.

## 4. BRAND

Use the official PDF logo asset. Never recreate the logo with ordinary text.

Logo, navigation, hero, footer, and major sections share the same global container/grid.

## 5. NAVIGATION LINKS

Every link has:

```text
default
hover
active/current
keyboard focus
```

Touch devices must never depend on hover.

## 6. ACTIVE ROUTE

The current route must be visually identifiable using one consistent system, such as a restrained gold underline or accent. Do not rely on color alone; expose current-page semantics where appropriate.

## 7. HOVER

Use subtle color, opacity, or underline transitions. Avoid large movement, scale jumps, or distracting glow.

## 8. FOCUS

Keyboard focus must remain clearly visible against the near-black visual system.

## 9. HEADER CTA

If a primary CTA exists, reuse the global PDF button system. Do not force a CTA merely for decoration.

## 10. HEADER STATES

Conceptual global states:

```text
default
heroTransparent
scrolled
menuOpen
```

Do not create separate CSS forks for every page.

## 11. HERO TRANSPARENT STATE

On cinematic pages the header may sit over the hero. Contrast must remain strong and the header must transition predictably when scrolling.

## 12. SCROLLED STATE

Recommended:

```text
transparent/integrated
        ↓
dark translucent/solid
```

Use background opacity, subtle blur where supported, and a restrained border/shadow.

Do not radically change the layout.

## 13. STICKY HEADER

A sticky header is appropriate for the public PDF experience.

It must not obscure headings, anchor targets, forms, or dialogs.

In-page navigation must account for header height.

## 14. Z-INDEX

Maintain one global layering scale.

Conceptual order:

```text
page content
decorative layers
sticky header
dropdowns
modal backdrop
modal/dialog
critical system overlays
```

Do not scatter arbitrary z-index values.

## 15. MOBILE HEADER

Recommended:

```text
[PDF LOGO]                         [MENU]
```

Do not cram desktop navigation into mobile.

## 16. MOBILE MENU

Preferred direction: a near-full-screen dark overlay/panel with large editorial navigation links.

It should feel intentional and premium rather than like a browser-default drawer.

Possible contents:

```text
logo
navigation
primary CTA
secondary utility links
social/contact where appropriate
```

Do not overload it.

## 17. MENU BUTTON

Use a semantic accessible button with:

- accessible name
- visible icon
- focus state
- open/pressed state

A restrained `menu → close` animation is acceptable.

## 18. MENU BEHAVIOR

When opened:

- move focus into the menu
- lock background scrolling when modal-style
- support Escape
- allow destination selection
- restore focus to the trigger on close
- close immediately when navigation begins

## 19. MENU ANIMATION

Suggested:

```text
backdrop fade
+
panel/links reveal
```

Keep it short. Reduced-motion mode should remove elaborate movement.

## 20. DROPDOWNS

Only use dropdowns when meaningful secondary navigation exists.

Do not create dropdowns just because they look sophisticated.

Potential examples if the IA requires them:

```text
Events → upcoming / past
Academy → multiple real destinations
Resources → meaningful categories
```

## 21. DROPDOWN DESIGN

Use:

- dark surface
- subtle border
- restrained shadow
- clear grouping
- readable links

Do not make every dropdown full-screen.

## 22. DROPDOWN ACCESSIBILITY

Support appropriate:

- Tab
- Shift+Tab
- Escape
- Enter/Space
- arrow navigation where required

Never make hover the only way to access a submenu.

## 23. MOBILE DROPDOWNS

Do not force desktop dropdown behavior onto mobile. Use expandable navigation or a simple list.

## 24. SEARCH

Only expose global search if actual search functionality exists.

If implemented, use a focused overlay with:

```text
input
results
empty state
close
keyboard support
```

Do not ship a decorative search icon that does nothing.

## 25. SOCIAL

Social links normally belong in the footer, mobile menu, About, or Contact. Do not crowd the desktop header with social icons.

Only use verified official profiles.

## 26. LANGUAGE SWITCHER

Only add multilingual controls if the actual site supports multiple languages.

Design for longer translated labels rather than relying on fixed widths.

## 27. ROUTING

Active navigation must be derived from the actual router.

Use real anchors for navigation and buttons for actions/toggles.

Do not manually duplicate route state across pages.

## 28. NAVIGATION CONFIGURATION

Use one central conceptual configuration:

```text
label
href
type
external
children
```

Only add fields actually required by the application.

This prevents six different components from maintaining six different versions of the navigation.

## 29. EXTERNAL LINKS

Clearly distinguish external destinations from internal routes where useful. Never pretend an external link is a local route.

## 30. GLOBAL CONTAINER

Header aligns with:

- homepage hero
- page sections
- footer
- major headings

Use global max-width and gutter tokens.

Do not invent header-only widths.

## 31. RESPONSIVE SYSTEM

Support:

```text
small mobile
large mobile
tablet
laptop
desktop
wide desktop
```

Use global breakpoints.

Switch to compact navigation when content no longer fits—not merely because a device belongs to a named category.

## 32. TABLET

Tablet may use mobile navigation if desktop links would become cramped.

Do not force desktop simply because the screen is technically larger than a phone.

## 33. SMALL MOBILE

The logo may reduce slightly, but:

- menu remains comfortable
- touch targets remain usable
- no horizontal overflow occurs

## 34. WIDE DESKTOP

Constrain content. Do not allow the navigation to become excessively stretched across huge screens.

## 35. TOUCH

Hover is enhancement only. Every important interaction must work with touch and keyboard.

## 36. HEADER ACCESSIBILITY

Use semantic:

```text
header
nav
a
button
main
```

Provide a keyboard-accessible skip-to-content link.

## 37. SKIP LINK

The skip link can remain visually hidden until focused. It must move keyboard users directly to the main content.

## 38. CURRENT PAGE SEMANTICS

Where appropriate, navigation should expose current-page semantics rather than relying purely on styling.

## 39. MENU ACCESSIBILITY

Menu state must be communicated programmatically. Focus must be managed correctly.

## 40. ESCAPE

Escape closes open header-owned surfaces such as:

- mobile menu
- dropdown
- search overlay

## 41. CLICK OUTSIDE

Dropdowns/overlays may close when clicking outside, provided this does not create unreliable mobile behavior.

## 42. SAFE AREAS

Mobile header should respect device safe areas where required.

## 43. TEXT ZOOM

At increased browser text size or zoom:

- labels must not clip
- navigation must remain usable
- compact mode should activate naturally
- horizontal overflow must be avoided

## 44. LOCALIZATION

If translations are introduced later, navigation must tolerate longer labels. Never solve localization by making text microscopic.

## 45. HEADER TYPOGRAPHY

Use the global PDF typography system. Do not introduce a special navigation font.

## 46. COLOR

Core:

```text
near-black
charcoal
warm white
restrained gold
```

Gold should be reserved for active states, primary actions, and selected accents.

## 47. HEADER SURFACE

The scrolled surface can be dark translucent or solid. Blur is optional and must have a solid fallback.

## 48. BORDER/SHADOW

Use subtle borders and shadows. The header should not look like a floating dashboard panel.

## 49. DECORATION

Avoid:

- permanent particles
- animated gold borders
- shimmer
- glowing logo
- noisy textures

The header is infrastructure, not the hero.

## 50. PODIUM CONTINUITY

The homepage podium establishes the premium black/gold language. The header supports that language through:

- dark surfaces
- precise geometry
- restrained gold
- controlled shadow

Do not put the giant podium into the header.

## 51. PAGE CONTINUITY

The same header system applies to:

```text
Home
About
Events
Academy
Resources
Contact
```

Only the visual context may change between transparent and solid states.

## 52. PAGE-SPECIFIC DIFFERENCES

Do not redesign the header separately for each page.

Page components control their own content; the global header controls navigation.

## 53. PAGE TRANSITIONS

Optional global transitions should be fast and should connect pages rather than become a loading screen.

Reduced motion must simplify or remove them.

## 54. ROUTE PREFETCHING

Use framework-supported safe prefetching where helpful. Do not preload large page assets unnecessarily.

## 55. LOADING

If navigation genuinely takes time, provide minimal feedback. Never display fake progress.

## 56. HEADER FAILSAFE

If JavaScript fails or loads late, normal navigation links should remain usable where technically possible.

## 57. SSR/HYDRATION

Avoid mismatches involving:

- active route
- menu state
- scroll state

The initial render should not flash an incorrectly open menu.

## 58. PERFORMANCE

The header appears on every page and must therefore be extremely lightweight.

Avoid expensive global scroll handlers. Use efficient browser/framework mechanisms for scroll-state detection.

Do not load page-specific images through the header.

## 59. STATE SEPARATION

Keep navigation state separate from:

- page content state
- form state
- resource filtering
- event state

Do not create one giant global component.

## 60. COMPONENT ARCHITECTURE

Recommended conceptual structure:

```text
components/
  navigation/
    GlobalHeader
    DesktopNavigation
    MobileNavigation
    NavigationLink
    NavigationDropdown
    MobileMenuButton
    HeaderCTA
    SkipLink
```

Use the project's established folder conventions in implementation.

## 61. SHARED TOKENS

Consume global tokens for:

```text
colors
typography
spacing
radius
shadows
motion
breakpoints
z-index
container width
gutters
```

Do not create duplicate header-specific tokens when global equivalents already exist.

## 62. ANALYTICS

If analytics exists, useful events may include:

```text
navigation click
mobile menu open
mobile menu destination
CTA click
search open
```

Never send sensitive form/content data through navigation analytics.

## 63. ERROR/404

The global header should normally remain functional on 404 and error pages.

## 64. PRINT

For print:

- navigation should not consume excessive space
- decorative effects may disappear
- page content remains understandable

## 65. AUTHENTICATED AREAS

If future private dashboards exist, determine separately whether they need a different shell. Do not redesign the public PDF header around hypothetical private interfaces.

## 66. HEADER TEST MATRIX

Test each primary route:

```text
Home
About
Events
Academy
Resources
Contact
```

at:

```text
desktop
tablet
mobile
```

## 67. STATE TEST MATRIX

Test:

```text
top of page
scrolled
hover
keyboard focus
active route
menu open
menu closed
dropdown open
dropdown closed
search open if supported
reduced motion
```

## 68. MOBILE TEST MATRIX

Test:

- open
- close
- Escape
- backdrop
- route selection
- orientation change
- browser back
- scroll restoration
- keyboard
- screen reader

## 69. DROPDOWN TEST MATRIX

Test:

- pointer
- keyboard
- Escape
- outside click
- route activation
- mobile fallback
- viewport edge

## 70. VISUAL QA

Compare all pages for:

- same logo sizing system
- same navigation spacing
- same CTA treatment
- same active state
- same scrolled state
- same mobile menu
- same focus state

## 71. RESPONSIVE QA

Verify:

- no clipping
- no overlap
- no horizontal scrolling
- accessible menu
- readable labels
- usable CTA
- correct safe-area behavior

## 72. ACCESSIBILITY QA

Verify:

- keyboard-only navigation
- semantic landmarks
- current-page state
- visible focus
- menu focus trapping/restoration
- Escape behavior
- screen-reader announcements
- reduced motion
- contrast

## 73. PERFORMANCE QA

Verify:

- small JS contribution
- efficient scroll handling
- no unnecessary third-party dependencies
- no unnecessary images
- responsive interaction on mobile

## 74. CONTENT QA

Verify every:

- label
- route
- CTA
- external URL
- social destination

before production.

## 75. FINAL DESIGN TEST

Ask one question:

```text
Does this feel like ONE website?
```

If Home, About, Events, Academy, Resources, and Contact each appear to have a different header, the system has failed.

The finished PDF website should feel like:

```text
ONE BRAND
ONE DESIGN LANGUAGE
ONE NAVIGATION SYSTEM
MANY EXPERIENCES
```

The header should disappear into the experience while users read, then become immediately understandable when they need to move.

# END OF GLOBAL NAVIGATION & HEADER IMPLEMENTATION SPECIFICATION
