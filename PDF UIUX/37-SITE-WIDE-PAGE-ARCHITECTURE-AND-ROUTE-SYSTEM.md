# PAK DEBATE FORUM (PDF) — 37 SITE-WIDE PAGE ARCHITECTURE & ROUTE SYSTEM

Status: Master public-site information architecture and route architecture contract.

Purpose:
Define how the entire Pak Debate Forum (PDF) website is structured as one coherent product.

This document connects:
- the global navigation system
- the global footer
- design tokens
- reusable components
- page-specific compositions
- route relationships
- responsive behavior
- loading/error states
- SEO/page metadata
- accessibility
- shared layouts
- content hierarchy

This document does NOT invent organization content that has not been supplied.

Where the actual project information differs from an example below, the real approved project information takes precedence.

---

# 1. CORE ARCHITECTURE

The website should be understood as:

```text
GLOBAL SHELL
├── Global Navigation
├── Page Content
└── Global Footer
```

Every public route exists inside this system.

---

# 2. ARCHITECTURAL PRINCIPLE

The website should feel like:

```text
ONE WEBSITE
not
A COLLECTION OF SEPARATE PAGES
```

The visitor should never feel that navigation, typography, spacing, motion, or interaction rules change between routes.

---

# 3. ROUTE SYSTEM

The public website should use clean, human-readable URLs.

Conceptually:

```text
/
 /about
 /events
 /academy
 /resources
 /contact
```

Additional routes should only exist when supported by the actual information architecture.

---

# 4. URL PRINCIPLE

URLs should be:

- short
- readable
- stable
- semantic
- lowercase
- consistent

Avoid:
- unnecessary IDs in public URLs
- random query strings for primary navigation
- implementation-specific paths
- ambiguous abbreviations

---

# 5. ROUTE NAMES

Use the official page naming from the approved site information architecture.

Do not silently rename pages because another naming convention feels more modern.

---

# 6. HOME ROUTE

Conceptual:

```text
/
```

Home is the cinematic introduction to PDF.

It establishes:
- identity
- purpose
- visual world
- primary journeys
- strongest CTA
- major current content

---

# 7. HOME RESPONSIBILITY

Home should NOT contain every piece of information available on the site.

It should provide:
- orientation
- inspiration
- discovery
- pathways

Detailed content belongs on dedicated pages.

---

# 8. ABOUT ROUTE

Conceptual:

```text
/about
```

About communicates institutional identity.

Potential content categories, only where supported:
- who PDF is
- mission
- vision
- history
- team
- values
- impact

---

# 9. ABOUT PRINCIPLE

About should answer:

```text
Who are you?
Why do you exist?
What do you stand for?
```

without becoming an unnecessarily long corporate profile.

---

# 10. EVENTS ROUTE

Conceptual:

```text
/events
```

Events is the discovery hub for PDF events.

Potential content:
- upcoming events
- featured event
- event archive
- event categories
- registration pathways

Only implement filters/categories supported by real event data.

---

# 11. EVENT DETAIL ROUTE

If event detail pages are required by the actual project, use a semantic nested route.

Conceptual:

```text
/events/[slug]
```

The slug should be human-readable.

---

# 12. EVENT DETAIL RESPONSIBILITY

An event detail page should own the complete event information.

Potential:
- title
- date/time
- location/format
- description
- speakers/participants where applicable
- registration
- related events

Do not force all event details into the events listing.

---

# 13. ACADEMY ROUTE

Conceptual:

```text
/academy
```

Academy is the learning/program destination.

It should communicate:
- what the Academy offers
- who it is for
- programs
- learning outcomes
- pathway to enrollment/contact

Actual sections depend on the approved project information.

---

# 14. ACADEMY DETAIL ROUTE

If multiple programs exist and dedicated detail pages are required:

```text
/academy/[slug]
```

Use a dedicated page when a program has enough information to justify independent discovery.

---

# 15. RESOURCES ROUTE

Conceptual:

```text
/resources
```

Resources is the knowledge/discovery hub.

Potential:
- articles
- guides
- documents
- videos
- educational resources

Only show formats actually supported by the content system.

---

# 16. RESOURCE DETAIL ROUTE

If resources are individually addressable:

```text
/resources/[slug]
```

The detail template should adapt to resource type.

---

# 17. CONTACT ROUTE

Conceptual:

```text
/contact
```

Contact owns the complete communication experience.

Potential:
- contact information
- inquiry form
- organizational details
- social links
- response expectations where verified

---

# 18. CONTACT PRINCIPLE

The contact page should make communication easy without creating unnecessary friction.

---

# 19. LEGAL ROUTES

If actual policies exist, use dedicated routes such as:

```text
/privacy
/terms
/accessibility
/cookies
```

Only create routes for policies that actually exist.

---

# 20. AUTHENTICATED ROUTES

If the application contains authenticated Academy/admin experiences, keep them architecturally distinct from the public marketing shell.

Conceptual:

```text
/public
/auth
/admin
```

The exact route strategy depends on the actual application architecture.

---

# 21. ADMIN ROUTES

Administrative routes must never appear in public navigation unless explicitly intended.

---

# 22. PUBLIC / PRIVATE SEPARATION

Public content:

```text
Home
About
Events
Academy marketing
Resources
Contact
```

Private operational systems may include:

```text
admin
dashboard
content management
registration management
```

These should have separate permissions and layouts.

---

# 23. GLOBAL SHELL

Public pages should normally use:

```text
<GlobalHeader />
<main>
  page content
</main>
<GlobalFooter />
```

---

# 24. PAGE LAYOUT COMPONENT

A conceptual page layout:

```text
<App>
  <GlobalNavigation />
  <PageTransition>
    <main>
      <Page />
    </main>
  </PageTransition>
  <GlobalFooter />
</App>
```

The actual framework implementation may differ.

---

# 25. MAIN LANDMARK

Each public page should have one primary main landmark.

---

# 26. PAGE TITLE

Every route requires a meaningful document title.

Do not use the same generic title for every page.

---

# 27. META DESCRIPTION

Public indexable pages should have an appropriate description where SEO is applicable.

Do not generate meaningless repeated descriptions.

---

# 28. CANONICAL URL

Indexable pages should have stable canonical URLs.

---

# 29. SOCIAL METADATA

Important public pages should define appropriate social preview metadata where supported.

---

# 30. OPEN GRAPH IMAGE

Use page-specific imagery when it materially improves sharing.

Otherwise use an approved global PDF social image.

Do not generate random social thumbnails per page.

---

# 31. FAVICON / APP ICON

Use the approved PDF brand mark/assets.

---

# 32. URL SLUGS

Use readable slugs.

Example:

```text
/events/national-debate-championship
```

rather than:

```text
/events/event-92837
```

when technically possible.

---

# 33. SLUG STABILITY

Once public URLs are indexed/shared, avoid unnecessary slug changes.

---

# 34. REDIRECTS

When a route changes, implement a redirect where appropriate.

Do not leave dead links.

---

# 35. 404 PAGE

The site needs a deliberate 404 experience.

It should:
- explain that the page was not found
- preserve PDF visual identity
- offer useful navigation
- provide a route back to Home

---

# 36. 404 VISUAL STYLE

The 404 page may be slightly playful but should remain within the premium PDF visual language.

Do not turn it into a completely different brand.

---

# 37. 404 CTA

Useful options:

```text
Back Home
Explore Events
Visit Academy
```

Use real destinations.

---

# 38. ERROR PAGE

Unexpected application errors should use a controlled error page/state.

Do not expose stack traces or technical implementation details.

---

# 39. LOADING ROUTES

Route transitions should provide enough feedback that users understand navigation occurred.

Avoid long blank screens.

---

# 40. PAGE TRANSITIONS

Transitions should be:
- short
- smooth
- optional
- reduced-motion compatible

They must not delay actual route readiness unnecessarily.

---

# 41. SCROLL POSITION

For ordinary navigation to a new page, scroll should normally reset appropriately.

For browser back/forward, preserve history behavior where supported.

---

# 42. ANCHOR NAVIGATION

Internal section links should scroll to the intended section with appropriate offset for the sticky header.

---

# 43. HEADER OFFSET

Anchor targets must not hide beneath the global navigation.

Use scroll margin/padding strategy.

---

# 44. DEEP LINKS

Every public page and supported content detail should be directly addressable.

---

# 45. REFRESH BEHAVIOR

Refreshing any public route must load that route correctly.

Do not rely on navigation from Home to make a route functional.

---

# 46. ROUTING FALLBACK

The deployment environment must be configured so client-side routes resolve correctly where the chosen architecture requires it.

---

# 47. QUERY PARAMETERS

Use query parameters for:
- filters
- search
- sorting
- pagination

when preserving shareable state is useful.

---

# 48. FILTER URLS

Filter state may be represented in the URL when it improves:
- sharing
- back navigation
- discoverability

---

# 49. SEARCH URL

If site search exists, use a stable route such as:

```text
/search?q=...
```

or the project's approved equivalent.

---

# 50. NO RANDOM QUERY STATE

Do not expose internal component state as meaningless URL parameters.

---

# 51. PAGE ANATOMY

Most public pages should follow:

```text
Global Header
↓
Hero / Intro
↓
Primary Content
↓
Supporting Content
↓
CTA / Next Journey
↓
Global Footer
```

This is a compositional pattern, not a mandatory identical template.

---

# 52. HERO

Every major page should have a clear opening orientation.

The hero may be:
- cinematic
- editorial
- split
- minimal
- image-led

depending on page purpose.

---

# 53. HERO RESPONSIBILITY

Within the first viewport, visitors should understand:

```text
Where am I?
What is this page about?
What can I do here?
```

---

# 54. HOME HERO

Home receives the strongest cinematic treatment.

The podium/3D hero belongs here if approved by the homepage design.

---

# 55. INNER PAGE HEROES

Inner pages should generally be more restrained than Home.

They can use:
- atmospheric background
- typography
- editorial imagery
- subtle motion

Do not duplicate the entire podium scene on every route.

---

# 56. PAGE INTRO

An inner page introduction should establish:
- title
- short context
- optional CTA
- optional breadcrumb

---

# 57. BREADCRUMBS

Use breadcrumbs primarily on deeper content/detail routes.

They may be omitted on shallow top-level pages.

---

# 58. CONTENT SECTIONS

Sections should have one clear job.

Examples:

```text
Featured Events
How Academy Works
Latest Resources
Our Story
Contact Options
```

---

# 59. SECTION ORDER

Order sections by user importance, not by whichever content is easiest to implement.

---

# 60. SECTION TRANSITIONS

Transitions between sections may use:
- spacing
- surface change
- subtle divider
- image
- geometric accent

Avoid decorative transitions everywhere.

---

# 61. PAGE CTA

Major pages should usually provide a clear next journey.

Examples:

```text
Events → Registration
Academy → Explore Programs
Resources → Browse More
About → Meet the Team / Contact
```

Only use real relationships.

---

# 62. CROSS-LINKING

Pages should intentionally connect to related destinations.

Examples:

```text
Event → Academy
Resource → Academy
About → Events
Academy → Contact
```

only when contextually useful.

---

# 63. NO FORCED CROSS-LINKING

Do not add links merely to increase internal-link count.

---

# 64. GLOBAL HEADER RELATIONSHIP

The global header provides primary navigation.

Page content should not recreate primary navigation.

---

# 65. GLOBAL FOOTER RELATIONSHIP

The footer provides secondary discovery and closure.

Page content should not duplicate the entire footer link system.

---

# 66. NAV ACTIVE STATE

Current route should be reflected in the global navigation where appropriate.

---

# 67. DETAIL ROUTES

When viewing:

```text
/events/something
```

the Events navigation item may remain the active parent route.

---

# 68. MOBILE NAVIGATION

Mobile navigation should expose the same essential public destinations as desktop.

It may reorganize them.

It must not silently remove important routes.

---

# 69. MOBILE IA

Mobile can use:
- grouped links
- nested disclosure
- compact CTAs

but should not make users hunt through decorative interactions.

---

# 70. FOOTER MOBILE

Footer groups may stack or collapse according to document 34.

---

# 71. PAGE CONTAINER

Every major page section aligns with the global container.

---

# 72. FULL-BLEED SECTIONS

Full-bleed sections may exist for:
- hero media
- cinematic images
- selected visual moments

Content still uses internal alignment.

---

# 73. EDGE-TO-EDGE MOBILE

Some mobile hero media may extend to screen edges.

Do not force every section into a card with side margins.

---

# 74. DESKTOP COMPOSITION

Desktop can use:
- asymmetric grids
- large visual objects
- overlapping elements
- editorial whitespace

but alignment must remain intentional.

---

# 75. MOBILE COMPOSITION

Mobile should generally simplify:

```text
large visual
↓
headline
↓
copy
↓
action
↓
supporting content
```

rather than preserving desktop overlap literally.

---

# 76. TABLET COMPOSITION

Tablet should preserve hierarchy while reducing:
- column count
- object scale
- spacing extremes

---

# 77. HERO OBJECT SCALING

3D/large visual objects should have deliberate responsive scale.

Do not simply set:

```text
width: 100%;
```

and hope for a good result.

---

# 78. PODIUM MOBILE

The podium should remain visually recognizable but must not push the headline/CTA below an unreasonable scroll depth.

---

# 79. PODIUM DESKTOP

The podium can occupy a large percentage of the hero composition.

Its size should respond to viewport width/height rather than a single fixed pixel size.

---

# 80. HERO VIEWPORT

Avoid making the first viewport so tall that users cannot discover that more content exists unless the cinematic composition intentionally calls for it.

---

# 81. SCROLL INDICATOR

A subtle scroll cue may be used on Home.

It should not be required for navigation.

---

# 82. PAGE BACKGROUNDS

Pages should transition between dark surfaces intentionally.

Do not assign a new background color to every section.

---

# 83. SURFACE RHYTHM

Use:

```text
deep
slightly elevated
deep
image-led
deep
```

where appropriate.

---

# 84. CONTENT DENSITY

Avoid:
- giant empty pages with little information
- dense walls of cards
- repeated CTA blocks

Balance content and breathing space.

---

# 85. PAGE LENGTH

Page length should follow content.

Do not stretch pages artificially to match mockups.

---

# 86. SCROLL EXPERIENCE

Scrolling should reveal information progressively.

A page should not require animation to feel complete.

---

# 87. SCROLL REVEAL

Use shared Reveal Animation components from document 36.

---

# 88. PAGE-LEVEL STAGGER

Page sections may reveal in sequence.

Do not delay critical content excessively.

---

# 89. IMAGE PARALLAX

Use only for selected cinematic sections.

Disable/reduce on mobile and reduced-motion.

---

# 90. PAGE TRANSITION CONSISTENCY

All public routes should use the same transition language.

Do not create a unique transition for every page.

---

# 91. AUTHENTICATED EXPERIENCE

If Academy or other areas later require login, authenticated pages may use a separate application shell.

The public navigation should not be overloaded with authenticated controls.

---

# 92. ADMIN EXPERIENCE

Admin should have:
- separate navigation
- separate permissions
- separate visual density if appropriate

It is operational software, not a marketing page.

---

# 93. CONTENT MANAGEMENT

Where content is database-driven, page templates should render content through structured models.

---

# 94. CONTENT MODEL PRINCIPLE

Separate:

```text
CONTENT
from
PRESENTATION
```

---

# 95. EVENT CONTENT MODEL

Conceptual:

```text
id
slug
title
summary
description
date
time
location
status
image
registrationUrl
```

Only implement fields the actual backend supports.

---

# 96. RESOURCE CONTENT MODEL

Conceptual:

```text
id
slug
title
summary
type
category
author
date
image
url/content
```

---

# 97. ACADEMY CONTENT MODEL

Conceptual:

```text
program
title
description
level
duration
outcomes
CTA
```

Actual fields depend on the project's real Academy model.

---

# 98. ABOUT CONTENT MODEL

Keep institutional content structured where it is expected to change.

---

# 99. CONTACT CONTENT MODEL

Public contact information should have one canonical source.

---

# 100. IMAGE CONTENT MODEL

Store image metadata consistently.

---

# 101. CONTENT VALIDATION

Required fields should be validated before rendering.

---

# 102. MISSING CONTENT

If optional content is missing:
- omit the block
- preserve layout rhythm
- do not show placeholders in production

---

# 103. BROKEN IMAGE

If an image fails:
- use a graceful fallback
- preserve aspect ratio
- keep the content usable

---

# 104. BROKEN LINK

Do not ship broken links.

---

# 105. EMPTY EVENT LIST

Use an intentional empty state.

---

# 106. EMPTY RESOURCE LIST

Use an intentional empty state.

---

# 107. EMPTY SEARCH

Explain that no results matched and provide recovery options.

---

# 108. SEARCH ERROR

Provide a retry or alternative navigation.

---

# 109. API FAILURE

Dynamic content failure should not crash the entire global shell.

---

# 110. PARTIAL FAILURE

If one section fails, preserve other usable sections where architecture permits.

---

# 111. PERFORMANCE ARCHITECTURE

Prioritize:

```text
HTML/content
↓
critical CSS
↓
critical hero asset
↓
interactive JS
↓
secondary media
↓
enhancements
```

---

# 112. HERO PRIORITY

The homepage hero is visually important but must not block the rest of the site indefinitely.

---

# 113. 3D LOADING

If the podium uses real-time 3D:
- show a stable initial state
- load progressively
- provide fallback
- avoid blank hero space

---

# 114. MOBILE 3D

Mobile may use:
- lower resolution textures
- fewer effects
- simpler lighting
- static rendered fallback

depending on implementation.

---

# 115. DEVICE CAPABILITY

Enhancement decisions may consider:
- viewport
- reduced motion
- connection quality
- GPU support

Do not make capability detection a reason to hide core content.

---

# 116. SEO ARCHITECTURE

Each indexable page should have:
- unique title
- unique description where appropriate
- canonical URL
- meaningful headings
- crawlable internal links

---

# 117. HEADING STRUCTURE

Each page should have one clear primary page heading.

Subsections use descending semantic hierarchy.

---

# 118. SEO CONTENT

Do not write artificial keyword-heavy copy.

The site should read naturally.

---

# 119. STRUCTURED DATA

Use structured data only where appropriate and supported by verified information.

Possible types may include:
- Organization
- Event
- Article
- BreadcrumbList

Do not fabricate data.

---

# 120. EVENT SEO

Event detail pages should expose actual:
- event name
- date
- location
- status

where available.

---

# 121. RESOURCE SEO

Resource detail pages should have appropriate:
- title
- description
- author/date where applicable

---

# 122. INDEXING

Admin/private routes should not be treated as public marketing content.

---

# 123. SITEMAP

Public indexable routes should be represented in the site's sitemap architecture where applicable.

---

# 124. ROBOTS

Private/internal areas should follow the project's deployment/SEO policy.

---

# 125. ACCESSIBILITY ARCHITECTURE

Every page should support:

```text
keyboard
screen reader
zoom
reduced motion
touch
```

---

# 126. FOCUS ORDER

DOM order should follow logical reading/navigation order.

---

# 127. VISUAL ORDER VS DOM ORDER

Do not create an inaccessible DOM simply to achieve a desktop visual composition.

---

# 128. RESPONSIVE REORDERING

CSS visual reordering should not create confusing keyboard/screen-reader sequences.

---

# 129. IMAGE ACCESSIBILITY

Informative imagery gets meaningful alt text.

Decorative imagery does not clutter screen-reader output.

---

# 130. VIDEO ACCESSIBILITY

Provide captions/transcripts where appropriate.

---

# 131. FORM ACCESSIBILITY

Labels must remain programmatically associated.

---

# 132. ERROR ACCESSIBILITY

Errors should be programmatically associated with fields where applicable.

---

# 133. MOTION ACCESSIBILITY

Page-level transitions must not trap users or delay interaction.

---

# 134. CONTENT ACCESSIBILITY

Do not hide essential content behind hover-only interactions.

---

# 135. MOBILE ACCESSIBILITY

Touch controls must remain comfortable.

---

# 136. RESPONSIVE TEST MATRIX

Every page template should be checked at:

```text
320
360
390
430
768
1024
1280
1440
1920+
```

Actual breakpoints may differ, but these are useful QA widths.

---

# 137. PAGE QA MATRIX

For every route verify:

```text
desktop
tablet
mobile
slow loading
no JavaScript where applicable
keyboard
reduced motion
long text
missing optional content
broken media
```

---

# 138. BROWSER QA

Test the project's supported browsers.

Do not optimize exclusively for one browser.

---

# 139. MOBILE BROWSER QA

Check:
- viewport height changes
- browser chrome
- safe areas
- touch scrolling
- fixed/sticky elements

---

# 140. PERFORMANCE QA

Check:
- first contentful experience
- hero loading
- layout shift
- animation smoothness
- JavaScript cost
- image weight

---

# 141. GLOBAL REGRESSION

Any change to:
- header
- footer
- design tokens
- component library
- page layout

requires cross-route review.

---

# 142. PAGE TEMPLATE SYSTEM

Instead of coding every route independently, create reusable page templates.

Conceptual:

```text
MarketingPage
ListingPage
DetailPage
EditorialPage
ContactPage
```

---

# 143. MARKETING PAGE

Suitable for:
- About
- Academy overview
- selected landing pages

---

# 144. LISTING PAGE

Suitable for:
- Events
- Resources

---

# 145. DETAIL PAGE

Suitable for:
- Event detail
- Resource detail
- Academy program detail

---

# 146. EDITORIAL PAGE

Suitable for:
- long-form resource
- institutional story
- article-like content

---

# 147. CONTACT PAGE

Owns:
- contact form
- public contact details
- inquiry pathways

---

# 148. TEMPLATE PRINCIPLE

Templates provide structure.

Content provides meaning.

Components provide visual behavior.

---

# 149. PAGE CONFIGURATION

Where useful, page templates can consume configuration:

```text
hero
sections
CTA
SEO
```

But avoid building an overly generic page-builder before the real site requires it.

---

# 150. NO OVER-ABSTRACTION

Do not abstract every section into a JSON page builder simply because it is technically possible.

The system should remain understandable.

---

# 151. ROUTE OWNERSHIP

Each route should have one clear owner/module.

---

# 152. PAGE FILE ORGANIZATION

Use a predictable structure aligned with the actual framework.

Conceptual:

```text
routes/
  home
  about
  events
  academy
  resources
  contact
```

---

# 153. COMPONENT ORGANIZATION

Global components remain separate from page-specific components.

---

# 154. PAGE-SPECIFIC COMPONENTS

A component belongs to a page when:
- it is genuinely unique
- it communicates page-specific content
- reuse would make the global library less coherent

---

# 155. REFACTOR THRESHOLD

If a page-specific component appears in multiple routes, evaluate it for promotion into the global library.

---

# 156. CONTENT ROUTING

Dynamic content routes should validate:
- slug
- existence
- publication state
- visibility

---

# 157. DRAFT CONTENT

Draft/private content should never leak into public pages.

---

# 158. PUBLISHED CONTENT

Only published/approved content should appear publicly.

---

# 159. DATE HANDLING

Event/resource dates should use a consistent timezone and display strategy.

---

# 160. DATE DISPLAY

Use human-readable formatting appropriate to the audience.

---

# 161. TIME DISPLAY

Display timezone when ambiguity matters.

---

# 162. LOCATION DISPLAY

Keep location formatting consistent across Event Card and Event Detail.

---

# 163. EVENT CTA

The event CTA must reflect actual state.

Examples:

```text
Register
View Details
Registration Closed
Watch Replay
```

Do not show "Register" after registration has closed.

---

# 164. RESOURCE CTA

Examples:

```text
Read
Watch
Download
View
```

Use the actual resource type.

---

# 165. ACADEMY CTA

Use the actual next action.

---

# 166. CONTACT CTA

Contact actions should route to:
- contact page
- email
- phone
- official channel

as appropriate.

---

# 167. HOME DISCOVERY

Home should surface only a curated amount of dynamic content.

Examples:
- featured event
- latest resource
- Academy introduction

Avoid dumping every database record onto Home.

---

# 168. HOME PERSONALITY

Home is the most cinematic and brand-forward route.

---

# 169. ABOUT PERSONALITY

About is more editorial and institutional.

---

# 170. EVENTS PERSONALITY

Events is energetic and discovery-oriented.

---

# 171. ACADEMY PERSONALITY

Academy is aspirational, educational, and action-oriented.

---

# 172. RESOURCES PERSONALITY

Resources is editorial, useful, and knowledge-focused.

---

# 173. CONTACT PERSONALITY

Contact is calm, trustworthy, and direct.

---

# 174. DETAIL PAGE PERSONALITY

Detail pages prioritize clarity over spectacle.

---

# 175. GLOBAL PERSONALITY

Every route remains recognizably PDF.

---

# 176. PAGE-SPECIFIC MOTION

Motion intensity can vary by page.

Conceptual:

```text
Home
high

About
medium

Events
medium

Academy
medium-high

Resources
low-medium

Contact
low
```

These are design-direction levels, not fixed animation counts.

---

# 177. MOTION RESTRAINT

Even the highest-motion page must remain usable.

---

# 178. PAGE BACKGROUND INTENSITY

Conceptual:

```text
Home
cinematic

About
atmospheric/editorial

Events
dark/energetic

Academy
premium/aspirational

Resources
quiet/editorial

Contact
minimal/trustworthy
```

---

# 179. PAGE TRANSITION CONSISTENCY

Do not change transition mechanics based purely on page personality.

The global transition system remains shared.

---

# 180. PAGE SCROLL EFFECTS

Scroll effects should support the page's content hierarchy.

---

# 181. HOME SCROLL

Home may use the richest scroll choreography.

---

# 182. INNER PAGE SCROLL

Inner pages use simpler reveals and occasional parallax.

---

# 183. DETAIL SCROLL

Detail pages prioritize reading and should use minimal distraction.

---

# 184. LONG-FORM READING

Long resource/article pages should avoid excessive scroll-triggered motion.

---

# 185. FORM PAGE MOTION

Contact forms should prioritize stability over spectacle.

---

# 186. ROUTE TRANSITION MOBILE

Mobile route transitions should be particularly lightweight.

---

# 187. ROUTE TRANSITION REDUCED MOTION

Reduced-motion users should receive immediate or near-immediate route presentation.

---

# 188. ERROR RECOVERY

Where a route/content request fails, provide:
- retry
- alternative navigation
- useful message

where appropriate.

---

# 189. ANALYTICS

Page architecture should allow analytics to distinguish:
- route views
- CTA clicks
- event interactions
- resource interactions
- Academy interactions
- contact submissions

Do not track sensitive form content.

---

# 190. EVENT ANALYTICS

Useful conceptual events:

```text
event_view
event_register_click
event_filter
```

---

# 191. RESOURCE ANALYTICS

Useful conceptual events:

```text
resource_view
resource_open
resource_download
```

---

# 192. ACADEMY ANALYTICS

Useful conceptual events:

```text
academy_view
program_view
academy_cta
```

---

# 193. CONTACT ANALYTICS

Useful conceptual events:

```text
contact_view
contact_submit
email_click
phone_click
```

Do not record private message contents.

---

# 194. PERFORMANCE OBSERVABILITY

Where available, monitor:
- route performance
- asset failures
- JS errors
- API failures

---

# 195. SECURITY

Never expose:
- admin credentials
- private API keys
- internal endpoints unnecessarily
- private database data

---

# 196. ROUTE AUTHORIZATION

Protected routes must validate authorization server-side.

Client-side hiding is not security.

---

# 197. PUBLIC API DATA

Only expose data intended for public consumption.

---

# 198. CACHING

Public static content can be cached aggressively where appropriate.

Dynamic/private data needs appropriate cache controls.

---

# 199. DEPLOYMENT

The route architecture must be compatible with the chosen deployment platform.

The final implementation should explicitly test direct navigation to nested routes.

---

# 200. CLOUDFLARE COMPATIBILITY

If the current PDF implementation continues using Cloudflare Workers/Pages architecture, ensure:
- static asset routing
- SPA fallback where required
- API routes
- cache behavior
- error handling

are deliberately configured.

Do not assume the platform automatically handles every nested route.

---

# 201. ENVIRONMENT VARIABLES

Public page code must not expose secrets.

---

# 202. PREVIEW ENVIRONMENT

Preview deployments should test:
- all routes
- assets
- API connectivity
- direct route loads
- responsive behavior

---

# 203. PRODUCTION ENVIRONMENT

Production should use:
- canonical URLs
- production API endpoints
- production asset strategy
- verified analytics configuration

---

# 204. DEPLOYMENT QA

Before release:

```text
Home
About
Events
Event detail
Academy
Academy detail if applicable
Resources
Resource detail if applicable
Contact
404
Legal pages if applicable
```

---

# 205. NAVIGATION QA

From every page:
- logo works
- nav links work
- active state works
- mobile menu works
- footer links work

---

# 206. BACK/FORWARD QA

Browser:
- back
- forward
- refresh
- direct deep link

must behave correctly.

---

# 207. SCROLL QA

Verify:
- anchor offsets
- sticky header
- page restoration
- long-page performance

---

# 208. MOBILE NAV QA

Verify:
- open
- close
- route navigation
- escape
- focus
- scroll locking
- safe area

---

# 209. PAGE ARCHITECTURE RULE

No page should be built as an isolated visual experiment.

Every page must answer:

```text
Where does this page sit in the IA?
What route owns it?
What global components does it use?
What page-specific components does it require?
What journey does it lead to?
```

---

# 210. PAGE SPECIFICATION TEMPLATE

Every future page-specific design document should contain:

```text
1. Route
2. Purpose
3. Audience
4. User intent
5. SEO
6. Header state
7. Hero
8. Section order
9. Components
10. Content
11. Images
12. Backgrounds
13. Motion
14. Responsive behavior
15. Accessibility
16. Loading
17. Empty states
18. Error states
19. CTA
20. Footer relationship
21. Analytics
22. QA checklist
```

---

# 211. PAGE DOCUMENTATION ORDER

Page specifications should be written after:
- global tokens
- global components
- global navigation
- global footer
- site architecture

This prevents contradictory page designs.

---

# 212. FUTURE PAGE DOCUMENTS

The next design documents can therefore focus deeply on individual routes without redefining the entire system.

---

# 213. HOME PAGE SPECIFICATION

The Home specification should define:
- exact hero composition
- podium placement
- hero typography
- 3D motion
- scroll choreography
- featured sections
- responsive transformations
- mobile hero strategy

---

# 214. ABOUT PAGE SPECIFICATION

Should define:
- institutional storytelling
- history
- team
- mission/vision
- editorial composition

only using approved organizational information.

---

# 215. EVENTS PAGE SPECIFICATION

Should define:
- event discovery
- filters
- event card layout
- featured event
- archive
- empty states
- detail relationships

---

# 216. ACADEMY PAGE SPECIFICATION

Should define:
- Academy proposition
- programs
- learning pathway
- CTA
- enrollment/contact relationship

---

# 217. RESOURCES PAGE SPECIFICATION

Should define:
- resource discovery
- categories
- search/filter
- resource cards
- detail reading experience

---

# 218. CONTACT PAGE SPECIFICATION

Should define:
- contact hero
- contact details
- form
- social pathways
- success/error states

---

# 219. DETAIL PAGE SPECIFICATIONS

Dynamic detail pages should define:
- content hierarchy
- metadata
- CTA
- related content
- sharing where applicable
- mobile reading behavior

---

# 220. FINAL ROUTE MAP

At the public-information-architecture level, the system is conceptually:

```text
HOME
│
├── ABOUT
│
├── EVENTS
│   └── EVENT DETAIL
│
├── ACADEMY
│   └── PROGRAM DETAIL (if applicable)
│
├── RESOURCES
│   └── RESOURCE DETAIL
│
└── CONTACT
```

Additional verified pages may extend this tree.

---

# 221. ROUTE RELATIONSHIP

The visitor journey should feel like:

```text
DISCOVER
↓
UNDERSTAND
↓
EXPLORE
↓
ENGAGE
↓
ACT
```

Examples:

```text
Home
↓
About
↓
Academy
↓
Contact
```

or:

```text
Home
↓
Events
↓
Event Detail
↓
Register
```

or:

```text
Home
↓
Resources
↓
Resource Detail
↓
Academy
```

These are journey examples, not forced paths.

---

# 222. NO FUNNEL TRAP

The website is not a single linear funnel.

Visitors should be able to enter through any public page and find useful next steps.

---

# 223. DEEP LINK EXPERIENCE

A visitor arriving directly at:

```text
/events/example
```

should still understand:
- PDF identity
- where they are
- what the event is
- what to do next
- how to navigate elsewhere

---

# 224. GLOBAL CONSISTENCY

Every route inherits:

```text
design tokens
component library
navigation
footer
accessibility
motion principles
responsive principles
```

---

# 225. PAGE DIFFERENTIATION

Each route earns its own personality through:

```text
composition
content
imagery
section rhythm
motion intensity
```

not by changing the fundamental design system.

---

# 226. FINAL ARCHITECTURAL RULE

If a new page is proposed, ask:

```text
Does it belong in the existing IA?
Can an existing template support it?
Can existing components support it?
Does it need a new route?
Does it create a duplicate destination?
```

---

# 227. FINAL AI IMPLEMENTATION RULE

Before coding any page, the AI must read:

```text
Global Navigation Spec
Global Footer Spec
Global Design Tokens
Global Component Library
Site-Wide Page Architecture
```

Then read the specific page specification.

---

# 228. FINAL ANTI-DRIFT RULE

The coding AI must never treat a screenshot as the only source of truth.

The implementation hierarchy is:

```text
ARCHITECTURE
↓
DESIGN SYSTEM
↓
COMPONENT SYSTEM
↓
PAGE SPECIFICATION
↓
REFERENCE IMAGE
```

Reference images communicate visual intent.

They do not override accessibility, responsive behavior, or architecture.

---

# 229. FINAL WEBSITE PRINCIPLE

The finished PDF website should feel:

```text
CINEMATIC WHEN IT SHOULD BE
EDITORIAL WHEN IT SHOULD BE
FUNCTIONAL WHEN IT NEEDS TO BE
QUIET WHEN IT SHOULD BE
```

---

# 230. FINAL ROUTE SYSTEM PRINCIPLE

The website should be understandable without explanation.

A visitor should naturally know:

```text
where they are
where they can go
what matters
what they can do next
```

---

# 231. FINAL PDF ARCHITECTURE

```text
GLOBAL SYSTEM
│
├── Design Tokens
│
├── Components
│
├── Navigation
│
├── Footer
│
└── Motion
       │
       ↓
PAGE TEMPLATES
│
├── Marketing
├── Listing
├── Detail
├── Editorial
└── Contact
       │
       ↓
PUBLIC ROUTES
│
├── Home
├── About
├── Events
├── Academy
├── Resources
└── Contact
       │
       ↓
DYNAMIC DETAIL ROUTES
│
├── Event
├── Program
└── Resource
```

---

# 232. FINAL IMPLEMENTATION MINDSET

Do not build:

```text
six separate websites
```

Build:

```text
one design system
+
one component system
+
one navigation system
+
one responsive architecture
+
multiple carefully composed pages
```

---

# 233. END STATE

When the architecture is implemented correctly:

```text
A change to the global button
→ updates every relevant page

A navigation improvement
→ updates every public route

A typography correction
→ improves the entire product

A responsive rule
→ benefits every component

A new event
→ appears through the existing event system

A new resource
→ uses the existing resource template
```

That is the goal of a real design system.

---

# 234. FINAL PRINCIPLE

PDF should be built as a **system first and a collection of pages second**.

The cinematic visuals are the expression.

The architecture is the foundation.

# END OF SITE-WIDE PAGE ARCHITECTURE & ROUTE SYSTEM
