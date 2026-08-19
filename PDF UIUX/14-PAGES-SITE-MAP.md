# PAK DEBATE FORUM — DESIGN SYSTEM
# 14 — PAGES & SITE MAP

Status: Page architecture and page-by-page UX/UI source of truth
Scope: public information architecture, route hierarchy, page purposes, section ordering, content zones, visual hierarchy, responsive behavior, interactions, motion hooks, navigation relationships, and implementation handoff.

IMPORTANT:
This document defines the DESIGN/UX architecture.
It does not invent organization facts, event data, statistics, dates, fees, claims, faculty names, or other factual content that has not been supplied by the project team.
Where real content is required, use the project's actual data/content source.

---

# 0. PURPOSE

The PBF website must feel like one premium, coherent digital platform.

The site is not a collection of isolated pages.

It should communicate:

```text
identity
+
academy
+
debate culture
+
events
+
results
+
resources
+
trust
+
contact/action
```

---

# 1. GLOBAL INFORMATION ARCHITECTURE

Primary public navigation:

```text
Home
Academy
Events
Results
Resources
About
Contact
```

These are the primary top-level destinations unless the approved project information architecture later specifies otherwise.

---

# 2. ROUTE MAP

Recommended conceptual structure:

```text
/
├── /academy
├── /events
│   └── /events/[event]
├── /results
├── /resources
│   └── /resources/[resource]
├── /about
└── /contact
```

Actual route syntax may follow the application's existing framework.

---

# 3. ROUTING RULE

Every important public destination must be directly addressable.

A visitor must not need to enter through Home to access a page.

---

# 4. NAVIGATION PRINCIPLE

The primary navigation answers:

> "What can I do here?"

It should not become a list of every feature.

---

# 5. GLOBAL PAGE SHELL

Every public page should inherit:

```text
global background system
global header
global typography
global color system
global spacing system
global motion system
global accessibility system
global footer
```

---

# 6. GLOBAL HEADER

Desktop header contains, conceptually:

```text
PBF logo
primary navigation
primary action / CTA where approved
```

Exact labels and CTA wording come from the approved content.

---

# 7. MOBILE HEADER

Mobile header should prioritize:

```text
logo
menu trigger
```

Optional high-priority action may remain visible if it fits.

---

# 8. GLOBAL FOOTER

Footer should provide:

```text
brand identity
secondary navigation
relevant contact/social information
legal/utility links where applicable
```

Do not overload it.

---

# 9. FOOTER RULE

Footer is a closing structure, not a second homepage.

---

# 10. GLOBAL BACKGROUND

The site should maintain the established:

```text
black / near-black foundation
subtle gold accents
controlled atmospheric depth
```

Do not introduce unrelated background styles page-to-page.

---

# 11. GLOBAL VISUAL ANCHOR

The podium/3D identity system is primarily a brand and hero device.

It should not automatically appear at maximum scale on every page.

---

# 12. PODIUM USAGE

Recommended:

```text
Home → strongest
Academy → optional/supporting
Events → optional
Results → minimal/none
Resources → minimal/none
About → optional
Contact → minimal
```

The exact usage is determined by visual composition and performance.

---

# 13. HOME PAGE

Purpose:

```text
brand introduction
+
first impression
+
orientation
+
primary conversion/action
```

Home is the cinematic anchor of the website.

---

# 14. HOME HERO

The hero is the highest-priority visual composition.

It should establish:

```text
Pak Debate Forum Academy
what the organization/platform represents
primary action
visual identity
```

Actual copy must use approved project content.

---

# 15. HOME HERO VISUAL

Primary visual language:

```text
black environment
+
premium gold light
+
stylized podium
+
subtle atmospheric depth
```

The podium should feel architectural, elegant, futuristic, and mostly black.

---

# 16. HERO PODIUM SCALE

Desktop:

The podium may occupy a large visual percentage of the hero.

But it must not push the headline or CTA out of the primary viewport.

---

# 17. MOBILE HERO PODIUM

The podium is NOT simply scaled down from desktop.

Instead:

```text
desktop composition
→
mobile composition
```

The camera/framing changes.

The podium may become:

```text
smaller
cropped intentionally
partially behind content
or repositioned
```

depending on the approved visual design.

---

# 18. HERO MOBILE PRIORITY

Mobile hierarchy:

```text
brand/title
→
supporting message
→
CTA
→
podium/visual enhancement
```

The visual must support the content rather than obscure it.

---

# 19. HOME HERO CTA

Primary CTA should be visually obvious.

Do not bury the action beneath decorative animation.

---

# 20. HOME HERO MOTION

Potential sequence:

```text
atmosphere
→
podium/light
→
brand/title
→
supporting copy
→
CTA
```

This follows the motion system defined elsewhere.

---

# 21. HOME HERO LOAD

Content must remain usable if the 3D podium is still loading.

---

# 22. HOME HERO FALLBACK

Fallback hierarchy:

```text
3D podium
→
static podium artwork
→
simplified branded visual
```

The page remains complete at every level.

---

# 23. HOME HERO SECONDARY CONTENT

Below the hero, introduce the organization/platform through a concise section.

Purpose:

```text
"What is PBF?"
```

Use approved copy only.

---

# 24. HOME VALUE SECTION

Show the core value proposition in a highly scannable format.

Possible structural pattern:

```text
section heading
supporting statement
3–4 key value blocks
```

The actual number should follow the final content inventory.

---

# 25. HOME ACADEMY PREVIEW

Introduce the Academy without duplicating the entire Academy page.

Pattern:

```text
Academy heading
short explanation
selected highlights
CTA → Academy
```

---

# 26. HOME EVENTS PREVIEW

Show selected/relevant events.

Do not turn the homepage into a complete event archive.

Pattern:

```text
Events heading
featured/current events
CTA → Events
```

---

# 27. HOME RESULTS PREVIEW

If results are a major PBF feature, surface selected/high-value results.

Keep it concise.

---

# 28. HOME RESOURCES PREVIEW

Show selected resources.

The homepage should encourage discovery without overwhelming the visitor.

---

# 29. HOME TRUST/IDENTITY SECTION

If the approved content includes achievements, affiliations, testimonials, partners, or other trust signals, use a dedicated section.

Do not invent trust claims.

---

# 30. HOME FINAL CTA

The homepage should conclude with a strong action.

Possible structure:

```text
statement
supporting text
primary CTA
secondary contact/navigation option
```

Exact content is content-team controlled.

---

# 31. HOME FOOTER

Transition naturally from the final CTA into the global footer.

---

# 32. ACADEMY PAGE

Purpose:

```text
explain the Academy
+
show learning structure
+
show who it is for
+
explain how to participate
+
drive enrollment/interest where applicable
```

---

# 33. ACADEMY HERO

Academy hero should be more structured than Home.

Possible composition:

```text
Academy label
large heading
supporting copy
primary action
controlled visual
```

---

# 34. ACADEMY VISUAL LANGUAGE

Use:

```text
black
gold
structured lines
editorial typography
subtle depth
```

Less cinematic than Home.

---

# 35. ACADEMY INTRO

Answer:

> What is the Academy?

Use approved project information.

---

# 36. ACADEMY AUDIENCE

Clearly explain intended learners/participants if this information is available.

---

# 37. ACADEMY PROGRAM STRUCTURE

If the project has courses, tracks, levels, or modules, show them in a structured hierarchy.

Example architecture:

```text
program overview
→
tracks/levels
→
modules
→
outcomes
```

Do not invent program names.

---

# 38. ACADEMY COURSE CARDS

Each course/module card should prioritize:

```text
title
short descriptor
level/category
action
```

Optional metadata should remain secondary.

---

# 39. ACADEMY DETAIL

If individual courses have dedicated pages, cards should link to them.

---

# 40. ACADEMY BENEFITS

Use a visual grid or editorial list.

Avoid generic marketing filler.

---

# 41. ACADEMY PROCESS

If the Academy has an enrollment/learning process:

```text
Step 1
→
Step 2
→
Step 3
→
Step 4
```

Keep steps visually simple.

---

# 42. ACADEMY FACULTY

Only include if approved content/data exists.

Possible structure:

```text
photo
name
role
short credential
```

Do not invent credentials.

---

# 43. ACADEMY TESTIMONIALS

Only use verified testimonials.

Do not fabricate quotations.

---

# 44. ACADEMY FAQ

If there are recurring user questions, use an accordion.

Keep answers concise.

---

# 45. ACADEMY CTA

End with the most relevant action.

---

# 46. ACADEMY MOBILE

Mobile order:

```text
hero
intro
program structure
benefits
process
optional supporting sections
FAQ
CTA
```

---

# 47. EVENTS PAGE

Purpose:

```text
discover events
understand event types
see upcoming/active events
access event details
```

---

# 48. EVENTS HERO

Should be energetic but not louder than Home.

---

# 49. EVENTS FILTERS

If enough events exist, provide filtering.

Possible dimensions:

```text
status
type
date
category
```

Only expose filters that have meaningful data.

---

# 50. EVENTS SEARCH

Add search only if the event inventory warrants it.

Do not add search as decoration.

---

# 51. EVENTS FEATURED

A featured event may receive a larger card.

---

# 52. EVENTS LIST

The standard event listing should support:

```text
event identity
date/status
short description
action
```

Exact fields depend on available data.

---

# 53. EVENT CARD

Card hierarchy:

```text
visual/identity
event name
essential metadata
short description
CTA
```

---

# 54. EVENT CARD MOTION

Hover:

```text
subtle lift
image/crop movement
gold accent
```

Avoid excessive rotation.

---

# 55. EVENT DETAIL PAGE

Conceptual route:

```text
/events/[event]
```

---

# 56. EVENT DETAIL HERO

Show:

```text
event identity
title
essential status/date
primary action
```

---

# 57. EVENT DETAIL BODY

Potential sections:

```text
overview
schedule
rules/information
eligibility
registration
results
related resources
```

Only show sections supported by actual event data.

---

# 58. EVENT REGISTRATION

If registration exists, make the action highly visible.

---

# 59. EVENT STATUS

Use clear states:

```text
upcoming
open
ongoing
completed
closed
```

Only use statuses defined by actual application logic.

---

# 60. EVENT RESULTS

Completed events may link directly to Results.

---

# 61. EVENT DETAIL MOBILE

Prioritize:

```text
title
status/date
primary action
overview
critical information
```

---

# 62. RESULTS PAGE

Purpose:

```text
demonstrate competitive outcomes
+
make results discoverable
+
provide structured historical information
```

---

# 63. RESULTS HERO

Results should feel precise and editorial.

Avoid heavy cinematic motion.

---

# 64. RESULTS NAVIGATION

Potential controls:

```text
year
event
category
search
```

Only if supported by the data.

---

# 65. RESULTS SUMMARY

If approved metrics exist, show a small summary area.

Never fabricate statistics.

---

# 66. RESULTS TABLE

When data is tabular, use actual semantic table structures where appropriate.

---

# 67. RESULTS MOBILE

Do not force a desktop table into a tiny viewport.

Use:

```text
responsive table
horizontal scroll
stacked cards
```

depending on data complexity.

---

# 68. RESULTS CARD

If cards are used:

```text
rank/position
participant/team
event
score/result
```

Actual fields follow the database/content model.

---

# 69. RESULTS VISUAL HIERARCHY

The most important result should be immediately scannable.

---

# 70. RESULTS ANIMATION

Use restrained reveal.

Numbers should not count up merely for spectacle unless the effect adds meaningful understanding.

---

# 71. RESOURCES PAGE

Purpose:

```text
discover learning material
+
browse useful content
+
filter/search where necessary
```

---

# 72. RESOURCES HERO

Quieter than Home and Events.

---

# 73. RESOURCE CATEGORIES

Possible categories may include:

```text
guides
articles
documents
videos
debate material
```

Only use categories actually supported by project content.

---

# 74. RESOURCE CARD

Hierarchy:

```text
type/category
title
short description
metadata
action
```

---

# 75. RESOURCE FILTER

Use category/filter controls only when inventory justifies them.

---

# 76. RESOURCE SEARCH

Search becomes important if the resource library grows.

---

# 77. RESOURCE DETAIL

Potential route:

```text
/resources/[resource]
```

---

# 78. RESOURCE DETAIL HERO

Show:

```text
resource type
title
summary
primary action
```

---

# 79. RESOURCE CONTENT

Readable content should take priority over decorative UI.

---

# 80. DOCUMENTS

If downloadable documents exist:

Provide a clear download/open action.

---

# 81. VIDEO RESOURCES

Video embeds should not load unnecessary heavy assets before interaction when avoidable.

---

# 82. RESOURCE MOBILE

Optimize for reading.

Avoid excessive motion.

---

# 83. ABOUT PAGE

Purpose:

```text
identity
story
mission
vision
values
organization
trust
```

Only use information supplied by the organization.

---

# 84. ABOUT HERO

Large institutional title.

Possible visual:

```text
PBF identity
+
architectural/podium motif
+
subtle imagery
```

---

# 85. ABOUT STORY

Use a strong editorial layout.

Possible:

```text
large statement
+
supporting narrative
```

---

# 86. ABOUT MISSION

Keep the mission visually prominent.

---

# 87. ABOUT VISION

Separate from mission if both exist.

---

# 88. ABOUT VALUES

Use a restrained grid.

Avoid generic stock icons if the design system favors custom typography/lines.

---

# 89. ABOUT TEAM

Only include verified team members.

---

# 90. ABOUT TIMELINE

If the organization has a meaningful timeline, a vertical editorial timeline may be used.

---

# 91. ABOUT PARTNERS

Only show approved partners/logos.

---

# 92. ABOUT TRUST

Trust should be demonstrated through real information, not decorative claims.

---

# 93. ABOUT CTA

Lead naturally to Academy, Events, or Contact.

---

# 94. CONTACT PAGE

Purpose:

```text
make contacting PBF easy
```

---

# 95. CONTACT HERO

Keep concise.

---

# 96. CONTACT METHODS

Show available channels from approved information.

Possible:

```text
email
phone
social
location
```

Only show actual channels.

---

# 97. CONTACT FORM

If a form exists:

```text
name
email
subject/category
message
submit
```

Exact fields follow the backend requirements.

---

# 98. FORM UX

Clearly communicate:

```text
required fields
validation
submission
success
failure
```

---

# 99. CONTACT MAP

Only include a map if there is a real relevant location and it improves usability.

Do not add a decorative map.

---

# 100. CONTACT MOBILE

Contact information should be immediately accessible.

---

# 101. GLOBAL CONTENT HIERARCHY

Every page follows:

```text
page identity
→
primary message
→
supporting content
→
interaction/content
→
secondary information
→
CTA
→
footer
```

---

# 102. PAGE HERO RULE

Every page should communicate its identity within the first viewport or near it.

---

# 103. HERO HEIGHT

Do not force every page to use a 100vh hero.

Hero height follows content and visual needs.

---

# 104. ABOVE-THE-FOLD RULE

The visitor should understand the page purpose quickly.

---

# 105. SECTION WIDTH

Use the global container system.

Do not create arbitrary max-widths for each page.

---

# 106. SECTION SPACING

Use the global spacing tokens.

---

# 107. PAGE DENSITY

Home:

```text
cinematic
```

Academy:

```text
informational
```

Events:

```text
discoverable
```

Results:

```text
dense/precise
```

Resources:

```text
scannable
```

About:

```text
editorial
```

Contact:

```text
functional
```

---

# 108. PAGE-SPECIFIC MOTION

Follow `13-PAGE-TRANSITIONS.md`.

Do not invent separate transition systems.

---

# 109. PAGE-SPECIFIC 3D

Follow the 3D podium specification.

Do not place 3D merely because empty space exists.

---

# 110. PAGE-SPECIFIC IMAGERY

Follow the imagery asset system.

Do not introduce random stock imagery.

---

# 111. PAGE-SPECIFIC TYPOGRAPHY

Follow the typography system.

No new fonts without design-system approval.

---

# 112. PAGE-SPECIFIC COLORS

Follow the color system.

Gold remains an accent, not a full-page fill.

---

# 113. PAGE-SPECIFIC COMPONENTS

Prefer shared components.

Examples:

```text
PageHero
SectionHeading
CTA
EventCard
ResourceCard
ResultTable
FilterBar
Accordion
Footer
```

Actual component names may differ in implementation.

---

# 114. COMPONENT REUSE

If two pages have the same content pattern, use the same component.

---

# 115. COMPONENT VARIANTS

Use variants instead of duplicating components.

---

# 116. PAGE COMPOSITION

Page-level composition controls:

```text
order
spacing
visual prominence
```

Components control their internal design.

---

# 117. HOME SPECIALIZATION

Home can use more custom composition than interior pages.

---

# 118. INTERIOR PAGE CONSISTENCY

Interior pages should share:

```text
header
hero language
container
section rhythm
footer
```

---

# 119. PAGE TITLE PATTERN

Conceptually:

```text
small label
large title
supporting statement
```

Use when appropriate.

---

# 120. GOLD LABEL

Small uppercase/gold labels can establish hierarchy.

Do not overuse.

---

# 121. LARGE HEADINGS

Headings should remain legible on mobile.

---

# 122. LONG TITLES

Long titles must wrap intentionally.

Do not let them break the layout.

---

# 123. CTA HIERARCHY

Each page should generally have one primary action.

Secondary actions should remain visually secondary.

---

# 124. MULTIPLE CTAS

If multiple actions exist:

```text
primary
secondary
tertiary
```

with clear hierarchy.

---

# 125. EMPTY STATES

Every dynamic listing needs an intentional empty state.

Example:

```text
No events currently available.
```

Actual copy should be content-team controlled.

---

# 126. ERROR STATES

Dynamic pages need clear errors.

---

# 127. LOADING STATES

Follow the performance and transition specifications.

---

# 128. SKELETONS

Use skeletons only where content structure is known and waiting is meaningful.

---

# 129. ACCESSIBILITY

Every page must comply with the accessibility system.

---

# 130. KEYBOARD NAVIGATION

Every interactive element must be reachable and usable.

---

# 131. FOCUS

Focus must remain visible.

---

# 132. SEMANTIC HEADINGS

Each page should have a logical heading hierarchy.

---

# 133. LANDMARKS

Use appropriate:

```text
header
nav
main
section
footer
```

---

# 134. IMAGES

Every meaningful image requires appropriate alternative text.

Decorative images should be marked appropriately.

---

# 135. MOTION

Respect reduced motion.

---

# 136. PERFORMANCE

Do not load page-specific heavy assets before they are needed.

---

# 137. HOME PERFORMANCE

Home may be the heaviest visual page.

Therefore it needs the strongest optimization.

---

# 138. INTERIOR PERFORMANCE

Interior pages should be lighter.

---

# 139. RESULTS PERFORMANCE

Large result datasets should use efficient rendering/pagination/virtualization where appropriate.

---

# 140. RESOURCE PERFORMANCE

Do not load every resource body on the listing page.

---

# 141. EVENT PERFORMANCE

Do not load every event's full detail into the listing.

---

# 142. IMAGE LAZY LOADING

Below-fold images should generally load lazily.

---

# 143. HERO IMAGE

Hero-critical imagery should be prioritized.

---

# 144. 3D LAZY ENHANCEMENT

The 3D podium may initialize after critical text/UI where appropriate.

---

# 145. MOBILE 3D

Use the mobile performance tier.

---

# 146. STATIC FALLBACK

Always preserve the designed fallback.

---

# 147. ROUTE TRANSITIONS

Follow the transition document.

---

# 148. SEO

Each route needs:

```text
title
description
canonical behavior
appropriate structured data where applicable
```

Actual metadata is content-owned.

---

# 149. SOCIAL SHARING

Important pages should have appropriate social preview metadata.

---

# 150. EVENT SHARING

Event detail pages should be shareable independently.

---

# 151. RESOURCE SHARING

Resource detail pages should be shareable independently.

---

# 152. INDEXABILITY

Do not hide important content behind interaction unnecessarily.

---

# 153. URL STABILITY

Avoid unnecessary route changes after launch.

---

# 154. ADMIN SEPARATION

Admin functionality should not leak into public navigation.

---

# 155. PUBLIC VS ADMIN

Public pages:

```text
brand
content
events
results
resources
contact
```

Admin:

```text
content management
event management
results management
resource management
other operational functions
```

Exact admin architecture is controlled elsewhere.

---

# 156. PUBLIC DATA

Public pages should consume the approved public data layer.

---

# 157. DYNAMIC CONTENT

Dynamic content must preserve the visual system.

---

# 158. CONTENT LENGTH

Design for realistic content lengths.

Do not design only around placeholder text.

---

# 159. LONG CONTENT

Cards and sections must tolerate longer titles/descriptions.

---

# 160. MISSING OPTIONAL DATA

Components should degrade gracefully when optional fields are absent.

---

# 161. OPTIONAL IMAGE

If an event/resource has no image:

Use a branded fallback composition.

Do not show a broken image.

---

# 162. OPTIONAL METADATA

Do not leave awkward empty gaps.

---

# 163. DATA-DRIVEN DESIGN

The UI should respond to real data rather than assuming every object is complete.

---

# 164. HOME CONTENT DATA

Homepage featured content should be configurable rather than hard-coded where appropriate.

---

# 165. EVENTS

Event listing should be data-driven.

---

# 166. RESULTS

Results should be data-driven.

---

# 167. RESOURCES

Resources should be data-driven.

---

# 168. ACADEMY

Academy content may be partly static or data-driven depending on application architecture.

---

# 169. ABOUT

About is likely more editorial/static unless the content model specifies otherwise.

---

# 170. CONTACT

Contact may combine static information and backend form functionality.

---

# 171. PAGE COMPOSITION ON DESKTOP

Use generous negative space.

The premium look depends on controlled emptiness.

---

# 172. PAGE COMPOSITION ON MOBILE

Do not preserve desktop empty space blindly.

Compress intelligently.

---

# 173. DESKTOP GRID

Use the global grid.

---

# 174. TABLET GRID

Intermediate layout must remain intentional.

---

# 175. MOBILE GRID

Usually collapse to one primary column with selected two-column patterns.

---

# 176. MOBILE CARD WIDTH

Cards should use available width without creating excessive horizontal margins.

---

# 177. MOBILE HERO

Never allow the podium or decorative image to cover the title/CTA.

---

# 178. MOBILE FOOTER

Use clear grouping.

Avoid an enormous footer wall of links.

---

# 179. MOBILE NAV

Menu items should have comfortable touch targets.

---

# 180. MOBILE FILTERS

Filters may become a drawer/sheet if they become too wide.

---

# 181. MOBILE TABLES

Choose the correct responsive representation.

---

# 182. MOBILE FORMS

Inputs should be large enough and clearly labeled.

---

# 183. MOBILE RESOURCE READING

Reading width and line height matter more than decorative motion.

---

# 184. MOBILE EVENT DETAILS

Critical registration/status information stays near the top.

---

# 185. MOBILE RESULTS

Do not make important ranking information difficult to scan.

---

# 186. PAGE TRANSITION ON MOBILE

Use reduced travel distances and shorter timelines.

---

# 187. PAGE TRANSITION ON DESKTOP

Can use more atmospheric depth.

---

# 188. PAGE TRANSITION PERFORMANCE

No transition should cause visible input lag.

---

# 189. CONTENT-FIRST RULE

If forced to choose:

```text
content
>
animation
```

---

# 190. CTA-FIRST RULE

If a page's purpose is action:

```text
action
>
decoration
```

---

# 191. RESULTS-FIRST RULE

On Results:

```text
results
>
cinematic visual
```

---

# 192. RESOURCE-FIRST RULE

On Resources:

```text
discoverability/readability
>
visual spectacle
```

---

# 193. CONTACT-FIRST RULE

On Contact:

```text
contactability
>
visual spectacle
```

---

# 194. ABOUT-FIRST RULE

On About:

```text
identity/story
>
decoration
```

---

# 195. ACADEMY-FIRST RULE

On Academy:

```text
learning structure
>
decoration
```

---

# 196. EVENTS-FIRST RULE

On Events:

```text
event discovery/action
>
decoration
```

---

# 197. HOME-FIRST RULE

On Home:

```text
brand impression
+
orientation
+
CTA
```

---

# 198. PAGE-SPECIFIC BACKGROUNDS

Background variation should be atmospheric rather than thematic chaos.

---

# 199. GOLD PARTICLES

Use sparingly.

They are decoration.

---

# 200. GOLD GLOW

Use as emphasis.

Not behind every section.

---

# 201. BLACK GRADIENTS

Useful for depth and readability.

---

# 202. IMAGE OVERLAYS

Use controlled overlays for text readability.

---

# 203. IMAGE CROP

Choose crops intentionally for each breakpoint.

---

# 204. BACKGROUND IMAGE

A background image must support content contrast.

---

# 205. VIDEO BACKGROUND

Only use if it materially improves the experience and meets performance requirements.

---

# 206. NO AUTO-PLAY HEAVY VIDEO

Do not make heavy video a prerequisite for understanding a page.

---

# 207. 3D BACKGROUND

3D must remain a controlled visual layer.

---

# 208. 3D Z-ORDER

The podium should not visually overpower navigation or essential content.

---

# 209. 3D MOBILE

Reduce:

```text
geometry
resolution
effects
motion
```

as necessary.

---

# 210. FALLBACK VISUAL

The fallback should still look intentionally designed.

---

# 211. HOME VISUAL PRIORITY

The podium is the star.

---

# 212. INTERIOR VISUAL PRIORITY

Content is the star.

---

# 213. PAGE TRANSITION TO DETAIL

Listing → detail can use shared visual continuity where beneficial.

---

# 214. DETAIL → LISTING

Do not force the same animation in reverse if it harms usability.

---

# 215. FILTER CHANGES

Changing a filter should not trigger a dramatic page transition.

---

# 216. SEARCH RESULTS

Search changes should use local content transitions.

---

# 217. PAGINATION

Pagination should preserve context.

---

# 218. INFINITE SCROLL

Use only if content type and UX justify it.

---

# 219. EVENTS PAGINATION

Prefer clear navigation if the event archive is large.

---

# 220. RESOURCES PAGINATION

Use appropriate browsing controls.

---

# 221. RESULTS PAGINATION

Use efficient data navigation for large datasets.

---

# 222. URL FILTER STATE

Where useful, filters can be represented in the URL for sharing.

---

# 223. PAGE STATE

A user should understand:

```text
what is selected
what is filtered
what is loading
what is unavailable
```

---

# 224. NO HIDDEN STATE

Do not rely solely on animation to communicate state.

---

# 225. ACTIVE FILTER

Use visible state.

---

# 226. ACTIVE TAB

Use visible state.

---

# 227. SORT STATE

Use visible state.

---

# 228. EVENT STATUS

Use text + visual treatment, not color alone.

---

# 229. RESULT STATUS

Use semantics beyond color.

---

# 230. RESOURCE TYPE

Use labels/icons appropriately.

---

# 231. CONTRAST

Gold text must remain sufficiently readable against black backgrounds.

---

# 232. DECORATIVE GOLD

Low-opacity gold must never be used for essential text.

---

# 233. TYPOGRAPHY SCALE

Page hierarchy follows the central typography specification.

---

# 234. LINE LENGTH

Long-form content should have a comfortable reading measure.

---

# 235. READING PAGE

Resource/article pages should prioritize readability.

---

# 236. ABOUT LONG-FORM

About storytelling may use wider editorial compositions but must remain readable.

---

# 237. EVENT RULES

Long rules/information sections need clear hierarchy.

---

# 238. RESULTS DENSE DATA

Dense information needs stronger visual grouping.

---

# 239. FOOTER TRANSITION

Footer should not suddenly introduce a completely different visual world.

---

# 240. PAGE ENDING

Every page should have an intentional ending before the footer.

---

# 241. FINAL CTA PATTERN

Where appropriate:

```text
statement
supporting copy
action
```

---

# 242. NO CTA REPETITION

Do not repeat the same CTA after every section.

---

# 243. PAGE SCROLL RHYTHM

Use:

```text
large section
→
medium section
→
content cluster
→
breathing space
```

rather than uniform blocks.

---

# 244. VISUAL RHYTHM

Alternate:

```text
text-heavy
visual-heavy
structured
breathing space
```

where appropriate.

---

# 245. HOME RHYTHM

Home can have the strongest visual rhythm.

---

# 246. INTERIOR RHYTHM

Interior pages should become progressively more information-oriented.

---

# 247. CONTENT PRIORITY

Every section must answer:

> Why does this section exist?

If there is no clear answer, remove it.

---

# 248. NO DECORATIVE SECTIONS

Do not add a section merely to make the page longer.

---

# 249. NO EMPTY CAROUSELS

Avoid carousels unless content volume and UX justify them.

---

# 250. CAROUSEL RULE

If a carousel exists:

- keyboard accessible;
- touch friendly;
- pauseable where necessary;
- not the only way to access content.

---

# 251. HOME CAROUSEL

Only use for genuinely featured content.

---

# 252. EVENTS CAROUSEL

A featured event carousel is optional.

The archive remains accessible separately.

---

# 253. TESTIMONIAL CAROUSEL

Avoid if a simple grid is clearer.

---

# 254. PAGE NAVIGATION

Breadcrumbs may be useful on detail pages.

---

# 255. BREADCRUMBS

Recommended for:

```text
event detail
resource detail
```

especially when hierarchy matters.

---

# 256. MOBILE BREADCRUMBS

Keep compact.

---

# 257. BREADCRUMB ACCESSIBILITY

Use semantic navigation markup.

---

# 258. BACK LINK

Detail pages may include a visible back/browse link where useful.

---

# 259. EVENT DETAIL BACK

Example concept:

```text
← All Events
```

Actual copy can vary.

---

# 260. RESOURCE DETAIL BACK

Example concept:

```text
← Resources
```

---

# 261. PAGE TITLE CONSISTENCY

Page titles should match navigation labels unless a deliberate content title is used.

---

# 262. ROUTE NAMING

Use stable, readable route names.

---

# 263. DETAIL ROUTES

Use human-readable identifiers/slugs where appropriate.

---

# 264. SLUGS

Avoid exposing internal database IDs unnecessarily in public URLs.

---

# 265. ADMIN LINKS

Never expose admin route links in public UI.

---

# 266. AUTHENTICATION

Public page navigation must not require authentication unless explicitly intended.

---

# 267. PROTECTED CONTENT

If a page requires authentication, communicate that before the user reaches a dead end.

---

# 268. ERROR 404

404 page should match the PBF design system.

---

# 269. 404 PURPOSE

Provide:

```text
clear explanation
return Home
browse main sections
```

---

# 270. 500 ERROR

Error page should remain branded but functional.

---

# 271. OFFLINE

If offline support exists, show an intentional offline state.

---

# 272. MAINTENANCE

Maintenance state should preserve essential identity and communicate status clearly.

---

# 273. EMPTY EVENTS

If no events are available:

Use an intentional empty state.

---

# 274. EMPTY RESULTS

Same principle.

---

# 275. EMPTY RESOURCES

Same principle.

---

# 276. CONTENT MODERATION

User-generated/public content, if introduced later, must follow its own moderation/data rules.

---

# 277. FUTURE PAGE EXPANSION

Potential future sections/pages can be added without breaking the global shell.

---

# 278. EXPANSION RULE

New pages inherit:

```text
brand
typography
color
layout
motion
accessibility
performance
```

---

# 279. NEW PAGE CHECKLIST

Before adding a page:

```text
[ ] purpose defined
[ ] audience defined
[ ] primary action defined
[ ] route defined
[ ] content source defined
[ ] hero defined
[ ] sections justified
[ ] mobile composition defined
[ ] motion defined
[ ] fallback defined
[ ] SEO requirements defined
[ ] accessibility reviewed
```

---

# 280. AI IMPLEMENTATION RULE

When an AI coding agent creates a page, it must first identify:

```text
route
page purpose
content source
shared components
page-specific components
motion variant
responsive variant
loading state
empty state
error state
fallback
```

---

# 281. AI MUST NOT INVENT CONTENT

If factual content is missing:

```text
use explicit placeholder/data binding
```

Do not silently invent.

---

# 282. AI MUST NOT INVENT PAGE COUNT

The approved site map controls page architecture.

---

# 283. AI MUST NOT DUPLICATE COMPONENTS

Search existing components before creating new ones.

---

# 284. AI MUST NOT ADD RANDOM SECTIONS

Every section needs a defined purpose.

---

# 285. AI MUST NOT CHANGE THE BRAND SYSTEM

Page implementation must inherit the established system.

---

# 286. AI MUST NOT ADD NEW FONTS

Unless the design system is explicitly updated.

---

# 287. AI MUST NOT ADD RANDOM COLORS

Use approved tokens.

---

# 288. AI MUST NOT ADD RANDOM ANIMATIONS

Use motion primitives.

---

# 289. AI MUST NOT MAKE MOBILE AN AFTERTHOUGHT

Every page has a mobile composition.

---

# 290. AI MUST NOT MAKE 3D A REQUIREMENT

Every 3D composition needs a fallback.

---

# 291. AI MUST NOT BLOCK CONTENT

Animation is enhancement.

---

# 292. AI MUST NOT BREAK NAVIGATION

Routing is foundational.

---

# 293. PAGE QA TEMPLATE

For every page:

```text
DESKTOP:
Tablet:
Mobile:
Reduced motion:
3D available:
3D unavailable:
Slow network:
Empty state:
Error state:
Long content:
Keyboard:
Screen reader:
```

---

# 294. HOME QA

Check:

```text
podium
hero hierarchy
CTA
first viewport
mobile framing
fallback
```

---

# 295. ACADEMY QA

Check:

```text
program hierarchy
learning content
CTA
mobile reading
```

---

# 296. EVENTS QA

Check:

```text
filters
event cards
status
detail navigation
mobile browsing
```

---

# 297. RESULTS QA

Check:

```text
data clarity
responsive table/cards
filtering
dense content
```

---

# 298. RESOURCES QA

Check:

```text
search/filter
card hierarchy
reading experience
detail pages
```

---

# 299. ABOUT QA

Check:

```text
story
identity
trust
imagery
long-form layout
```

---

# 300. CONTACT QA

Check:

```text
form
validation
success
error
contact information
mobile usability
```

---

# 301. CROSS-PAGE QA

Check:

```text
header consistency
footer consistency
container alignment
typography
gold accents
motion
scroll behavior
focus
```

---

# 302. VISUAL REGRESSION

Capture representative states:

```text
Home
Academy
Events
Results
Resources
About
Contact
event detail
resource detail
mobile navigation
```

---

# 303. TRANSITION REGRESSION

Test representative route pairs.

---

# 304. CONTENT REGRESSION

Test:

```text
short
normal
long
missing optional data
```

---

# 305. RESPONSIVE REGRESSION

Test multiple viewport widths.

Do not test only one desktop and one phone.

---

# 306. FINAL SITE EXPERIENCE

The intended flow:

```text
LAND
↓
UNDERSTAND
↓
EXPLORE
↓
ENGAGE
↓
ACT
```

---

# 307. HOME ROLE

Home:

```text
LAND + UNDERSTAND
```

---

# 308. ACADEMY ROLE

Academy:

```text
UNDERSTAND + ENGAGE
```

---

# 309. EVENTS ROLE

Events:

```text
EXPLORE + ACT
```

---

# 310. RESULTS ROLE

Results:

```text
VERIFY + EXPLORE
```

---

# 311. RESOURCES ROLE

Resources:

```text
EXPLORE + LEARN
```

---

# 312. ABOUT ROLE

About:

```text
UNDERSTAND + TRUST
```

---

# 313. CONTACT ROLE

Contact:

```text
ACT
```

---

# 314. MASTER NAVIGATION FLOW

```text
HOME
 ├── ACADEMY
 │    └── learning/program detail
 │
 ├── EVENTS
 │    └── EVENT DETAIL
 │
 ├── RESULTS
 │
 ├── RESOURCES
 │    └── RESOURCE DETAIL
 │
 ├── ABOUT
 │
 └── CONTACT
```

---

# 315. DESIGN SYSTEM RELATIONSHIP

This document sits above individual page implementations.

```text
Brand
 ↓
Color
 ↓
Typography
 ↓
Layout
 ↓
Components
 ↓
Imagery
 ↓
Icons
 ↓
Motion
 ↓
3D
 ↓
Responsive
 ↓
Accessibility
 ↓
Performance
 ↓
Page transitions
 ↓
THIS DOCUMENT
 ↓
Actual page implementation
```

---

# 316. SOURCE-OF-TRUTH RULE

If a page implementation conflicts with the design-system documents:

Stop and resolve the conflict before inventing a new pattern.

---

# 317. CONTENT SOURCE RULE

If this document conflicts with actual approved project content:

Actual approved content wins.

The design system controls presentation, not factual truth.

---

# 318. DATA MODEL RULE

If a page requires a field that does not exist:

Do not fabricate it.

Either:

```text
add the field through the approved data architecture
```

or:

```text
remove the UI dependency.
```

---

# 319. FUTURE EVENTS

The page architecture must support additional events without redesigning the entire page.

---

# 320. FUTURE RESOURCES

The resource architecture must support growth.

---

# 321. FUTURE RESULTS

The results architecture must support historical growth.

---

# 322. FUTURE ACADEMY PROGRAMS

The Academy should support expansion without breaking layout.

---

# 323. FUTURE LANGUAGES

If multilingual support is introduced:

Layouts must tolerate longer strings.

---

# 324. LANGUAGE EXPANSION

Do not hard-code widths around English-only text.

---

# 325. LOCALIZATION

Dates/numbers should follow the application's approved localization strategy.

---

# 326. INTERNATIONAL CONTENT

Do not assume all future content has identical length.

---

# 327. FINAL CONTENT PRINCIPLE

Design should make real PBF content look exceptional.

Not replace it.

---

# 328. FINAL UX PRINCIPLE

The visitor should never have to understand the design system.

They should simply feel that the website is:

```text
clear
premium
credible
modern
alive
easy to use
```

---

# 329. FINAL VISUAL PRINCIPLE

PBF's strongest visual signature remains:

```text
deep black
+
controlled gold
+
strong typography
+
architectural podium
+
cinematic light
+
precise information design
```

---

# 330. FINAL MOTION PRINCIPLE

Motion should communicate:

```text
hierarchy
continuity
depth
interaction
```

not:

```text
"look what the developer can animate."
```

---

# 331. FINAL MOBILE PRINCIPLE

Mobile is not:

```text
desktop but smaller
```

It is:

```text
the same brand
+
different composition
```

---

# 332. FINAL PERFORMANCE PRINCIPLE

The most beautiful page is the one the visitor can actually use smoothly.

---

# 333. FINAL ACCESSIBILITY PRINCIPLE

The visual experience must remain understandable without relying on visual effects.

---

# 334. FINAL ARCHITECTURE PRINCIPLE

Shared systems first.

Page-specific creativity second.

---

# 335. FINAL AI PRINCIPLE

The coding AI should implement the system, not reinterpret it randomly.

---

# 336. FINAL HANDOFF

This document should be read together with:

```text
01-BRAND-IDENTITY.md
02-COLOR-SYSTEM.md
03-TYPOGRAPHY.md
04-GRID-SPACING-LAYOUT.md
05-COMPONENT-SYSTEM.md
06-IMAGERY-ASSET-SYSTEM.md
07-ICONOGRAPHY.md
08-MOTION-ANIMATION.md
09-3D-PODIUM.md
10-RESPONSIVE-SYSTEM.md
11-ACCESSIBILITY.md
12-PERFORMANCE.md
13-PAGE-TRANSITIONS.md
```

Together these define the visual/UX implementation foundation for the PBF website.

---

# 337. END STATE

The finished website should not feel like:

```text
a template
```

or:

```text
a collection of AI-generated pages.
```

It should feel like:

```text
PAK DEBATE FORUM
has its own digital environment.
```

That is the standard this page architecture is designed to enforce.
