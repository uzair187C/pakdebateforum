# PAK DEBATE FORUM (PDF) — 41 BROWSER & DEVICE QA MATRIX

Status: Final release-quality visual, functional, responsive, accessibility and performance QA contract.

## 0. PURPOSE

This document converts the PDF design system into a repeatable verification process.

The goal is not merely:

```text
Does it work?
```

The goal is:

```text
Does it work?
Does it look correct?
Does it remain PDF?
Does it remain usable?
Does it remain fast?
Does it remain accessible?
Does it remain correct on real devices?
```

---

# 1. SOURCE MATERIAL

QA must reference the complete design system:

```text
00–39 existing approved specifications
+
40 security specification
+
41 this QA specification
```

The actual application and official content remain the functional source of truth.

---

# 2. RELEASE GATE

No page is complete until:

```text
functional QA
+
visual QA
+
responsive QA
+
accessibility QA
+
performance QA
+
security sanity checks
```

have passed.

---

# 3. DEVICE CLASSES

Test at minimum:

### Small mobile
Approx. 320–360 CSS px wide.

### Standard mobile
Approx. 375–430 CSS px wide.

### Large mobile
Approx. 430–480 CSS px wide where relevant.

### Tablet portrait
Approx. 768 CSS px wide.

### Tablet landscape
Approx. 1024 CSS px wide.

### Laptop
Approx. 1280–1440 CSS px wide.

### Desktop
Approx. 1536–1728 CSS px wide.

### Wide desktop
Approx. 1920 CSS px and above.

The exact browser viewport matters more than the marketing name of the device.

---

# 4. HEIGHT TESTS

Also test short-height desktop windows.

Examples:

```text
1280×720
1440×800
```

The hero must not become unusably tall.

---

# 5. BROWSER MATRIX

Primary:

```text
Chrome current
Edge current
Firefox current
Safari current
```

Mobile:

```text
iOS Safari current
Android Chrome current
```

Where the project audience warrants it, test Samsung Internet and other meaningful regional/device browsers.

---

# 6. BROWSER PRINCIPLE

Do not optimize only for the browser used during development.

---

# 7. HOME QA

Verify:

```text
header
hero
podium
lighting
typography
CTA
scroll cue
section transitions
dynamic content
footer
```

---

# 8. PODIUM QA

Test:

```text
WebGL available
WebGL unavailable
reduced motion
low-power device
slow network
mobile
tablet
desktop
```

Expected:

The site remains visually coherent even when 3D is unavailable.

---

# 9. PODIUM SCALE

Check:

- no clipping
- no unexpected overlap
- branding remains readable
- object does not cover CTAs
- mobile composition is intentional

---

# 10. HEADER QA

Desktop:

```text
logo
nav
CTA
active state
hover
focus
```

Mobile:

```text
logo
menu
open
close
focus
scroll lock
route transition
```

---

# 11. NAVIGATION QA

From every public route:

```text
Home
About
Academy
Programs
Events
Resources
Results
Contact
```

must resolve to the intended destination according to the approved IA.

Where legacy functional routes exist, verify their relationships rather than deleting functionality.

---

# 12. DEEP LINK QA

Directly load:

```text
/events/[slug]
/programs/[slug] or approved equivalent
/resources/[slug]
```

and any other supported dynamic route.

---

# 13. REFRESH QA

Refresh every dynamic page.

The page must remain addressable.

---

# 14. BACK/FORWARD QA

Test:

```text
page A
→ page B
→ back
→ forward
```

Verify scroll/history behavior.

---

# 15. EVENT QA

Test:

- upcoming event
- completed event
- missing image
- long title
- long description
- missing optional metadata
- registration unavailable
- registration available
- invalid event slug
- empty event collection

---

# 16. PROGRAM QA

Test:

- short program
- long program
- missing image
- long title
- different statuses
- registration/enrollment CTA
- missing optional fields
- invalid program slug

---

# 17. ACADEMY QA

Verify:

```text
Academy identity
program discovery
CTA hierarchy
coach references
responsive layout
```

The Academy must still feel like part of PDF.

---

# 18. RESOURCE QA

Test:

- article
- document
- guide
- video where supported
- missing thumbnail
- long title
- no results
- filter state
- search state
- download/open action
- failed request

---

# 19. RESULTS QA

Verify:

- data hierarchy
- readable statistics
- historical entries
- empty state
- responsive table/list/card transformation where applicable

Never invent missing results.

---

# 20. ABOUT QA

Verify:

```text
identity
story
mission
vision
values
team
impact
CTA
```

The page must feel editorial rather than generic corporate.

---

# 21. TEAM QA

Test:

- 1 member
- 3 members
- many members
- missing image
- long name
- long role
- long biography
- mobile layout

---

# 22. CONTACT QA

Test:

```text
empty form
focus
valid
invalid
submitting
success
server error
network error
spam protection behavior
```

---

# 23. FORM QA

Attempt:

- missing required field
- invalid email
- overlong text
- unexpected input
- repeated submission
- network interruption

The user must receive understandable feedback.

---

# 24. MOBILE FORM QA

Verify:

- keyboard does not obscure fields
- labels remain visible
- inputs are tappable
- errors are readable
- submit remains accessible

---

# 25. FOOTER QA

Check:

- links
- social links
- contact
- legal links where real
- responsive stacking
- focus
- no overflow

---

# 26. 404 QA

Test invalid routes.

Expected:

```text
PDF-branded 404
useful message
Home/navigation action
```

---

# 27. ERROR QA

Simulate failed API/content requests.

The page should fail gracefully.

---

# 28. LOADING QA

Use network throttling.

Verify:

```text
skeleton/reserved layout
no major layout jumps
no blank page
```

---

# 29. EMPTY STATE QA

Test empty:

```text
events
programs
resources
results
search
```

where supported.

---

# 30. IMAGE QA

Test:

- correct image
- missing image
- slow image
- very wide image
- very tall image
- wrong aspect ratio
- high-resolution source

The layout must remain stable.

---

# 31. TYPOGRAPHY QA

Verify:

- correct fonts
- weights
- heading hierarchy
- line-height
- wrapping
- long strings
- mobile sizes

No page may silently introduce another font.

---

# 32. GOLD QA

Verify:

```text
gold is restrained
gold remains readable
semantic colors remain distinct
```

---

# 33. BLACK QA

Verify:

```text
black has depth
surfaces remain distinguishable
content does not disappear
```

---

# 34. RESPONSIVE QA

At every breakpoint ask:

```text
What changed?
Was the change intentional?
Is hierarchy preserved?
Is interaction still obvious?
```

---

# 35. NO HORIZONTAL OVERFLOW

Mandatory at:

```text
320
360
375
390
414
430
768
1024
1280
1440
1920
```

where practical.

---

# 36. MOBILE HERO

Check:

- H1 wrapping
- CTA placement
- podium scale
- image crop
- navigation
- first content section

---

# 37. MOBILE PODIUM

The podium must never become a giant object that pushes all meaningful content below the fold.

---

# 38. TABLET

Tablet should not feel like broken desktop.

Verify intentional intermediate compositions.

---

# 39. WIDE DESKTOP

Check:

- max-width
- excessive empty space
- giant text
- stretched navigation
- podium scaling
- image resolution

---

# 40. TOUCH QA

Verify all essential interactions work without hover.

---

# 41. HOVER QA

Desktop pointer:

```text
buttons
links
cards
team
navigation
filters
```

Hover must not cause layout jumps.

---

# 42. FOCUS QA

Keyboard through:

```text
header
nav
buttons
links
forms
cards
dialogs
filters
footer
```

Focus must always be visible.

---

# 43. KEYBOARD QA

Verify:

```text
Tab
Shift+Tab
Enter
Space
Escape
Arrow keys where applicable
```

---

# 44. SCREEN READER QA

At minimum verify:

- landmarks
- headings
- links
- buttons
- form labels
- error messages
- dialogs
- navigation menu state

---

# 45. REDUCED MOTION QA

Enable:

```text
prefers-reduced-motion: reduce
```

Expected:

- no major parallax
- no unnecessary transforms
- no long decorative sequences
- content remains immediately usable

---

# 46. CONTRAST QA

Check text and controls against dark surfaces.

Do not rely on visual appearance alone.

---

# 47. PERFORMANCE QA

Test:

```text
fast connection
average mobile connection
slow mobile connection
```

---

# 48. PERFORMANCE TARGET

Use the existing performance specification as the authoritative numeric target.

This document verifies it; it does not replace it.

---

# 49. CORE WEB VITALS

Monitor the actual production build for:

```text
LCP
INP
CLS
```

Investigate regressions rather than accepting arbitrary slowdowns caused by visual effects.

---

# 50. 3D PERFORMANCE

Measure:

- initial load
- frame stability
- memory pressure
- mobile behavior
- fallback transition

---

# 51. IMAGE PERFORMANCE

Verify:

- correct dimensions
- responsive sources
- lazy loading where appropriate
- compression
- no oversized hero downloads on mobile

---

# 52. FONT PERFORMANCE

Verify:

- no unnecessary font files
- no invisible text caused by loading strategy
- correct fallback
- no layout explosion after font load

---

# 53. NETWORK QA

Test failed:

```text
API
image
font
3D asset
third-party dependency
```

The site should degrade gracefully.

---

# 54. SECURITY QA

Sanity-check:

```text
no secrets in bundle
admin not publicly accessible
public APIs return public data only
forms validate
error responses do not expose internals
```

Detailed security requirements live in #40.

---

# 55. SEO QA

For public pages verify:

```text
title
description
canonical
heading structure
indexability
OG metadata where configured
```

---

# 56. ANALYTICS QA

Verify important events fire once:

```text
CTA
registration
resource interaction
contact submission
```

Never send sensitive form content.

---

# 57. VISUAL REGRESSION

Capture reference screenshots at agreed viewports.

Compare:

```text
header
hero
major sections
footer
mobile
```

---

# 58. VISUAL REGRESSION PRINCIPLE

Do not demand pixel identity when content changes.

Compare:

- hierarchy
- proportions
- spacing
- typography
- object placement
- color balance
- interaction behavior

---

# 59. AI SCREENSHOT REVIEW

When using an AI coding agent, require it to render screenshots at minimum:

```text
375×812
390×844
768×1024
1280×800
1440×900
1920×1080
```

---

# 60. AI COMPARISON QUESTIONS

For every screenshot:

```text
Is the hierarchy correct?
Is the headline size correct?
Is the podium too large?
Is gold too strong?
Is black too flat?
Are cards too rounded?
Is spacing too tight?
Is mobile intentionally composed?
```

---

# 61. QA SEVERITY

### P0
Site unusable, security issue, data loss, broken core navigation.

### P1
Major layout/feature failure on common devices.

### P2
Visible design mismatch or non-critical interaction defect.

### P3
Minor polish issue.

Release must not contain unresolved P0/P1 issues.

---

# 62. FINAL DEVICE MATRIX

| Area | Mobile | Tablet | Desktop | Wide |
|---|---:|---:|---:|---:|
| Header | ✓ | ✓ | ✓ | ✓ |
| Home hero | ✓ | ✓ | ✓ | ✓ |
| Podium | ✓ | ✓ | ✓ | ✓ |
| About | ✓ | ✓ | ✓ | ✓ |
| Academy | ✓ | ✓ | ✓ | ✓ |
| Programs | ✓ | ✓ | ✓ | ✓ |
| Events | ✓ | ✓ | ✓ | ✓ |
| Resources | ✓ | ✓ | ✓ | ✓ |
| Results | ✓ | ✓ | ✓ | ✓ |
| Contact | ✓ | ✓ | ✓ | ✓ |
| Footer | ✓ | ✓ | ✓ | ✓ |
| 404 | ✓ | ✓ | ✓ | ✓ |

---

# 63. FINAL BROWSER MATRIX

| Browser | Mobile | Desktop |
|---|---:|---:|
| Chrome | ✓ | ✓ |
| Safari | ✓ | ✓ |
| Firefox | — | ✓ |
| Edge | — | ✓ |
| Samsung Internet where relevant | ✓ | — |

---

# 64. FINAL RELEASE CHECKLIST

```text
[ ] all public routes load
[ ] all deep links load
[ ] navigation works
[ ] mobile menu works
[ ] forms work
[ ] dynamic content works
[ ] loading states work
[ ] empty states work
[ ] error states work
[ ] 3D fallback works
[ ] responsive layouts work
[ ] no horizontal overflow
[ ] keyboard navigation works
[ ] focus states work
[ ] reduced motion works
[ ] contrast checked
[ ] performance checked
[ ] SEO checked
[ ] security sanity checked
[ ] analytics checked
[ ] visual screenshots reviewed
```

# END OF BROWSER & DEVICE QA MATRIX
