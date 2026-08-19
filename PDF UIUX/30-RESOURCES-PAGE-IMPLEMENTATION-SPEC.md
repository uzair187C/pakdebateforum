# PAK DEBATE FORUM (PDF) — 30 RESOURCES PAGE IMPLEMENTATION SPECIFICATION

Status: Dedicated Resources / Knowledge experience implementation contract.

Purpose:
Define the public PDF Resources experience as the place where visitors discover, read, watch, download, and revisit useful debate-related knowledge.

The Resources experience must feel:
- authoritative
- editorial
- useful
- calm
- intelligent
- discoverable
- premium
- unmistakably PDF

It must NOT feel like:
- a generic blog
- a random file dump
- a cluttered CMS archive
- a news website
- a generic document management dashboard

This specification governs:
- resource discovery
- categories/types
- search/filter behavior
- resource cards
- article/document/video presentation
- detail pages
- downloads
- external links
- loading/empty/error states
- responsive behavior
- motion
- accessibility
- SEO
- performance
- data/content integrity
- QA

Use with the global PDF design system and all previous specifications.

---

# 1. RESOURCES ROLE IN THE PDF ECOSYSTEM

The primary ecosystem distinction is:

```text
Homepage  = identity / invitation
Events    = participation
Academy   = development
Resources = knowledge
```

Resources should therefore answer:

```text
What can I learn or explore right now?
Where can I find useful material?
What should I read/watch/download next?
```

---

# 2. EXPERIENCE CHARACTER

The Resources page should feel like:

```text
PDF's curated knowledge library
```

not:

```text
an unfiltered content database
```

Curation and hierarchy are critical.

---

# 3. VISUAL CHARACTER

Retain:

- near-black foundation
- warm white typography
- restrained gold
- premium spacing
- editorial hierarchy
- subtle depth
- consistent cards
- restrained motion

Compared with the homepage:
- less cinematic
- less 3D
- more information density

Compared with Academy:
- less instructional
- more discovery/editorial
- more content-type variety

---

# 4. PAGE NARRATIVE

Recommended structure:

```text
HEADER
↓
RESOURCES HERO
↓
FEATURED / EDITORIAL RESOURCE
↓
SEARCH + FILTERS
↓
RESOURCE COLLECTION
↓
OPTIONAL CURATED COLLECTIONS
↓
FINAL DISCOVERY CTA
↓
FOOTER
```

Do not add every possible section by default.

---

# 5. RESOURCES HERO

The hero should immediately communicate:

```text
Resources
A place to explore PDF's knowledge and materials.
```

The exact supporting copy must come from approved content.

---

# 6. HERO HIERARCHY

Recommended:

```text
eyebrow
H1
short description
optional action
subtle visual
```

The H1 is the strongest element.

---

# 7. HERO VISUAL

Potential approved treatments:

- editorial debate photography
- document/text composition
- subtle abstract typography
- restrained PDF imagery
- atmospheric dark visual

Do not introduce a large unrelated 3D object.

---

# 8. HERO HEIGHT

Keep the Resources hero compact.

The user should reach useful content quickly.

---

# 9. HERO MOBILE

Mobile should prioritize:

```text
H1
description
search/discovery
```

Do not let decorative imagery dominate.

---

# 10. FEATURED RESOURCE

If the product supports featured content, one resource may receive an editorial spotlight.

Possible layout:

```text
large visual
+
type/category
+
title
+
summary
+
action
```

---

# 11. FEATURED RULE

Featured status must come from actual data/editorial configuration.

Do not automatically promote arbitrary content because it is newest.

---

# 12. RESOURCE TYPES

Only support types that actually exist in the PDF content model.

Potential conceptual types:

```text
article
guide
document
report
video
link
announcement
```

Do not expose unsupported types.

---

# 13. RESOURCE TYPE LABEL

Every resource should make its type understandable.

Possible:

```text
ARTICLE
GUIDE
VIDEO
DOCUMENT
```

Use the actual type vocabulary.

---

# 14. RESOURCE CARD PURPOSE

A card should answer:

```text
What is this?
Why might I care?
How do I open it?
```

---

# 15. RESOURCE CARD ANATOMY

Potential hierarchy:

```text
image/thumbnail
type
category
title
summary
date
reading time / duration
action
```

Only show available data.

---

# 16. RESOURCE TITLE

Title is the primary card content.

Long titles must wrap naturally.

Do not force excessive truncation.

---

# 17. RESOURCE SUMMARY

Use a curated summary/excerpt.

Do not dump the entire resource body into cards.

---

# 18. RESOURCE DATE

If publication/update date is meaningful, show it consistently.

Use one site-wide date convention.

---

# 19. READING TIME

Only show reading time if it is actually calculated/provided.

Never invent:

```text
5 min read
```

just because it visually fits.

---

# 20. VIDEO DURATION

If video duration is available, format it consistently.

---

# 21. RESOURCE CARD IMAGE

Use approved source imagery.

For documents without imagery, use a branded document-style fallback.

Do not use unrelated stock images.

---

# 22. IMAGE RATIO

Use one consistent card thumbnail ratio.

---

# 23. IMAGE CROP

Use an intentional focal point.

Do not crop away:
- important people
- debate podiums
- logos
- text
when they are central to the source.

---

# 24. DOCUMENT FALLBACK

A document resource without a photo can use:

```text
PDF branded cover treatment
+
resource type
+
subtle gold detail
```

The fallback should feel designed, not like a missing image.

---

# 25. RESOURCE CARD SURFACE

Default:

```text
deep charcoal
subtle border
near-black page background
```

The surface should be visible without becoming a bright dashboard panel.

---

# 26. CARD RADIUS

Use global radius tokens.

Do not invent a Resources-only radius system.

---

# 27. CARD BORDER

Use subtle neutral border.

Gold can be used for selected/featured states.

---

# 28. CARD SHADOW

Use restrained depth.

Avoid floating every card dramatically.

---

# 29. CARD HOVER

Desktop may use:

- slight lift
- image scale
- arrow movement
- subtle accent

Keep it restrained.

---

# 30. CARD PRESS

Touch devices need a press state.

Hover is not sufficient.

---

# 31. CARD FOCUS

Keyboard focus must be obvious.

---

# 32. INTERACTIVE CARD ARCHITECTURE

Avoid nested interactive elements.

If the whole card is a link, keep the interaction model simple.

---

# 33. RESOURCE DISCOVERY

Discovery should be fast.

Primary tools may include:

```text
search
category
resource type
topic
date
```

Only expose real filters.

---

# 34. SEARCH

Search should operate against actual searchable resource fields.

Do not promise semantic search if the implementation is only text matching.

---

# 35. SEARCH STATES

Support:

```text
idle
focus
typing
loading
results
no results
error
clear
```

---

# 36. SEARCH DEBOUNCE

Use debounce where necessary.

Avoid excessive requests.

---

# 37. SEARCH QUERY PERSISTENCE

Follow the global URL/state strategy.

If search state is intentionally shareable, preserve it in the URL.

---

# 38. FILTER BAR DESKTOP

Possible:

```text
search
type
category/topic
sort
```

Keep controls compact.

---

# 39. FILTER BAR MOBILE

Preferred:

```text
search
Filter
```

Full controls can open in a sheet/drawer.

---

# 40. FILTER STATES

Each filter supports:

```text
default
hover
focus
selected
disabled
```

---

# 41. ACTIVE FILTER DISPLAY

When filters are active:

make them visible and easy to clear.

---

# 42. RESET FILTERS

Provide a clear reset mechanism.

---

# 43. FILTER COUNTS

Only display result counts when data provides them.

Never fabricate counts.

---

# 44. SORT

If supported, sorting should use human-readable labels.

Potential concepts:

```text
Newest
Oldest
A–Z
```

Only implement actual supported sorting.

---

# 45. URL FILTERING

If URL-driven filtering exists:

routes should remain stable and understandable.

---

# 46. RESOURCE COLLECTION

The collection is the main body of the page.

It should feel curated and readable.

---

# 47. GRID

Desktop may use:

```text
2–3 columns
```

depending on card density.

---

# 48. LIST

A list may be better for:

- long document titles
- metadata-heavy resources
- professional/reference material

Do not force grid when scanning is easier in a list.

---

# 49. HYBRID

A featured editorial resource followed by a grid/list can be appropriate.

This is often stronger than making every resource visually identical.

---

# 50. MOBILE COLLECTION

Default:

```text
1 column
```

Cards must remain readable.

---

# 51. TABLET

Use responsive column reduction.

Do not let cards become excessively narrow.

---

# 52. WIDE DESKTOP

Constrain content width.

Avoid giant cards caused by an unlimited container.

---

# 53. RESOURCE DETAIL PAGE

Each public resource detail page should be optimized for consumption.

Potential structure:

```text
HEADER
↓
RESOURCE META
↓
TITLE
↓
SUMMARY
↓
MAIN VISUAL
↓
CONTENT / EMBED / DOWNLOAD
↓
RELATED RESOURCES
↓
CTA
↓
FOOTER
```

Exact structure depends on type.

---

# 54. ARTICLE DETAIL

Article should use a readable editorial column.

Do not use dashboard-width text.

---

# 55. ARTICLE TITLE

Large, confident, but constrained.

---

# 56. ARTICLE META

Possible:

```text
type
category
published date
updated date
author
reading time
```

Only display actual data.

---

# 57. ARTICLE BODY

Support:

- headings
- paragraphs
- lists
- links
- images
- quotes
- tables where required

The content renderer should be consistent.

---

# 58. ARTICLE TYPOGRAPHY

Long-form text needs a dedicated reading rhythm.

Use:
- comfortable line-height
- readable line length
- clear heading spacing
- meaningful paragraph separation

---

# 59. ARTICLE LINKS

Links must be visually identifiable.

---

# 60. ARTICLE IMAGES

Images inside articles should have:

- responsive sizing
- appropriate alt text
- intentional captions where available

---

# 61. DOCUMENT RESOURCE

Document detail should clearly communicate:

```text
document title
description
file type
file size if available
date
download/open action
```

Only display actual metadata.

---

# 62. DOWNLOAD CTA

Use a strong but restrained primary button.

Possible:

```text
Download PDF
Open Document
View Document
```

Only use the correct action.

---

# 63. DOWNLOAD BEHAVIOR

If downloading:

- provide clear feedback
- do not silently fail
- preserve accessible link/button semantics

---

# 64. EXTERNAL RESOURCE

If the resource leads to an external site:

make that clear.

Do not pretend external content is hosted inside PDF.

---

# 65. EXTERNAL LINK SECURITY

Follow the application's global external-link policy.

---

# 66. VIDEO RESOURCE

If video resources exist:

detail page may include:

```text
poster
video player
title
description
metadata
related resources
```

---

# 67. VIDEO PLAYER

Do not autoplay with sound.

Provide:
- play/pause
- seek
- volume
- fullscreen
- captions when available

Use an accessible player.

---

# 68. VIDEO MOBILE

Player should respect viewport width.

No horizontal overflow.

---

# 69. EMBEDS

Third-party embeds should be contained safely.

Do not let an embed break the page layout.

---

# 70. RESOURCE TYPE-SPECIFIC DESIGN

Do not force article/document/video pages to look identical.

Use the same visual system with type-specific content architecture.

---

# 71. RELATED RESOURCES

Related content should help users continue learning.

Relationships should be based on real metadata/editorial selection.

---

# 72. NO RANDOM RELATED CONTENT

Do not fill related-resource slots with arbitrary content merely to avoid whitespace.

---

# 73. RESOURCE TAGS

If tags exist:

show a restrained tag treatment.

Avoid tag clouds.

---

# 74. CATEGORIES

Categories should use the actual content taxonomy.

Do not create decorative categories without backend/content support.

---

# 75. TAXONOMY CONSISTENCY

A category should mean the same thing everywhere.

---

# 76. RESOURCE AUTHORS

If authors are public:

show approved author information.

Do not invent author identities.

---

# 77. AUTHOR PROFILE

If author profiles exist globally:

reuse the shared profile component.

---

# 78. RESOURCE DATE SEMANTICS

Distinguish:

```text
published
updated
```

if both are available and meaningful.

---

# 79. ARCHIVE

If old resources remain accessible:

provide a coherent archive experience.

Do not hide older knowledge without product reason.

---

# 80. PAGINATION

Use pagination when the resource collection is large.

---

# 81. LOAD MORE

May be used when it fits the content experience.

Preserve current results and scroll context.

---

# 82. INFINITE SCROLL

Avoid by default.

Knowledge resources benefit from explicit discoverability and stable URLs.

---

# 83. EMPTY STATE

If no resources exist:

explain clearly.

Provide a useful next action where possible.

Never fabricate content.

---

# 84. NO RESULTS STATE

Example structure:

```text
No resources match your search.
Clear filters
```

---

# 85. ERROR STATE

If resources cannot load:

show:
- concise explanation
- retry
- alternative navigation where useful

Never expose technical details.

---

# 86. LOADING STATE

Use skeletons where they genuinely help.

Reserve expected card geometry.

---

# 87. SKELETON ANIMATION

Keep subtle.

Avoid bright flashing skeletons.

Respect reduced motion.

---

# 88. RESOURCE NOT FOUND

A missing resource should show a useful not-found page/state.

Provide:
- return to Resources
- homepage navigation
- optional search

---

# 89. RESOURCE DELETED

Do not expose stale broken metadata.

Handle gracefully.

---

# 90. RESOURCE VISIBILITY

If resources have draft/private states, those must never leak into the public collection.

---

# 91. CONTENT INTEGRITY

Absolutely do not invent:

- articles
- titles
- authors
- statistics
- downloads
- links
- publication dates
- categories
- quotes
- resource counts

---

# 92. PLACEHOLDERS

Development placeholders must be visibly understood as placeholders by the implementation team.

They must not accidentally ship as real content.

---

# 93. SEO — RESOURCE INDEX

Resources landing page should have accurate title/description.

---

# 94. SEO — ARTICLE

Public articles should have:
- unique title
- description
- canonical URL
- appropriate social preview

---

# 95. SEO — DOCUMENT

If public and indexable, metadata should describe the document accurately.

---

# 96. SEO — VIDEO

Use appropriate metadata if the actual implementation supports it.

---

# 97. STRUCTURED DATA

Only use structured data that matches real public content.

Do not generate false publication/author information.

---

# 98. SOCIAL PREVIEW

Use approved resource image/cover.

---

# 99. RESOURCE URL

Use stable human-readable slugs where the architecture supports them.

---

# 100. URL SAFETY

Do not directly inject untrusted strings into URLs without proper handling.

---

# 101. RESPONSIVE ARCHITECTURE

Resources must be designed across:

```text
mobile
tablet
desktop
wide desktop
```

---

# 102. MOBILE FIRST PRIORITY

On mobile:

```text
title
summary
discovery
resource
action
```

must remain easy to access.

---

# 103. MOBILE RESOURCE CARD

Avoid excessive metadata.

Show only the information needed to decide whether to open it.

---

# 104. MOBILE DETAIL PAGE

Reading should dominate.

Remove unnecessary decorative UI.

---

# 105. MOBILE DOCUMENT VIEW

Download/open action should remain accessible.

---

# 106. MOBILE VIDEO

Respect safe areas and viewport width.

---

# 107. MOBILE FILTER DRAWER

Must support:
- focus management
- close button
- Escape
- selected state
- apply/reset behavior as appropriate

---

# 108. TABLET

Tablet should not feel like an oversized phone.

Use the available width for stronger editorial compositions.

---

# 109. DESKTOP

Desktop can support:
- featured content
- multi-column discovery
- richer metadata
- larger editorial imagery

---

# 110. WIDE DESKTOP

Keep text readable.

Do not stretch article bodies to the full viewport.

---

# 111. TYPOGRAPHY

Use the global PDF typography system.

Hierarchy:

```text
Resources H1
section heading
resource title
metadata
body
caption
label
```

---

# 112. LONG-FORM TYPE

Article/document reading width should be intentionally constrained.

---

# 113. COLOR SYSTEM

Base:

```text
near-black
charcoal
warm white
gold
```

Semantic colors follow global tokens.

---

# 114. GOLD USAGE

Gold can identify:
- primary action
- active state
- selected filter
- featured treatment
- small editorial accents

Do not turn the resource archive gold.

---

# 115. BACKGROUND

Use subtle tonal shifts.

Avoid giving every resource a different background.

---

# 116. CARD VISUAL CONSISTENCY

Cards should feel like one family.

Differences should come from content type, not random styling.

---

# 117. ARTICLE VISUAL STYLE

Editorial.

Quiet.

Readable.

---

# 118. DOCUMENT VISUAL STYLE

Reference-oriented.

Clear.

Practical.

---

# 119. VIDEO VISUAL STYLE

Media-forward but still PDF-branded.

---

# 120. EXTERNAL RESOURCE STYLE

Clearly indicate the visitor is leaving PDF.

---

# 121. ICON SYSTEM

Use global icon system.

---

# 122. DOWNLOAD ICON

Use the shared icon rather than custom illustrations.

---

# 123. EXTERNAL LINK ICON

Use consistently across the site.

---

# 124. SEARCH ICON

Reuse global search icon.

---

# 125. MOTION PHILOSOPHY

Resources motion should feel:

```text
quiet
editorial
responsive
```

It should never interfere with reading.

---

# 126. HERO ENTRANCE

Suggested:

```text
background
→ label
→ heading
→ description
→ action
```

---

# 127. FEATURED RESOURCE REVEAL

Subtle reveal.

Avoid cinematic entrance.

---

# 128. CARD REVEAL

Short stagger.

Stop as soon as content is visible.

---

# 129. CARD HOVER

Subtle lift/image scale/arrow movement.

---

# 130. FILTER MOTION

Short drawer/sheet transition.

---

# 131. SEARCH RESULT MOTION

Do not animate the entire page.

Only update the collection gracefully.

---

# 132. ARTICLE MOTION

Minimal.

Reading content should not repeatedly animate as the user scrolls.

---

# 133. IMAGE PARALLAX

Avoid by default.

If used, keep extremely subtle.

---

# 134. REDUCED MOTION

Disable:
- parallax
- large reveals
- continuous motion
- unnecessary image scaling

---

# 135. ACCESSIBILITY — GENERAL

Must support:

- semantic HTML
- keyboard navigation
- visible focus
- sufficient contrast
- meaningful link names
- alt text
- reduced motion

---

# 136. ACCESSIBILITY — SEARCH

Search field must have a clear accessible label.

---

# 137. ACCESSIBILITY — FILTERS

Selected state must be programmatically understandable.

---

# 138. ACCESSIBILITY — CARDS

Interactive card names should communicate the resource.

---

# 139. ACCESSIBILITY — DOWNLOADS

Download links should identify the file/action.

---

# 140. ACCESSIBILITY — EXTERNAL LINKS

If useful, indicate that the destination is external.

---

# 141. ACCESSIBILITY — VIDEO

Provide accessible controls and captions where available.

---

# 142. ACCESSIBILITY — ARTICLE

Heading hierarchy must remain logical.

---

# 143. CONTENT CONTRAST

Do not use low-contrast gray text simply to achieve a premium aesthetic.

---

# 144. FOCUS DESIGN

Focus states must remain visible against dark surfaces.

---

# 145. COMPONENT INVENTORY

Potential components:

```text
ResourcesHero
FeaturedResource
ResourceSearch
ResourceFilters
ResourceGrid
ResourceList
ResourceCard
ResourceTypeBadge
ResourceMeta
ArticleRenderer
DocumentResource
VideoResource
DownloadButton
ExternalResourceLink
RelatedResources
ResourcesCTA
```

This is an inventory, not a command to implement every component.

---

# 146. COMPONENT REUSE

Prefer shared components and variants.

Do not create duplicate card components for every resource type unless the information architecture truly requires them.

---

# 147. RESOURCE CARD VARIANTS

Potential:

```text
default
featured
compact
list
```

---

# 148. DATA/VIEWS SEPARATION

Resource content should remain separate from presentation components.

---

# 149. CONCEPTUAL RESOURCE MODEL

A resource may contain:

```text
id
slug
title
summary
content
type
category
tags
image
author
publishedAt
updatedAt
duration
file
externalUrl
featured
status
```

Only implement supported fields.

---

# 150. FILE HANDLING

If downloadable files are used:

- verify public accessibility
- use stable references
- handle missing files
- provide clear actions

---

# 151. FILE SECURITY

Never expose private storage credentials or internal paths.

---

# 152. EXTERNAL URL VALIDATION

External resource links must be valid and intentionally approved.

---

# 153. DATA FETCHING

Do not block the entire page on optional related content.

---

# 154. CACHING

Follow the global application architecture.

Do not introduce a parallel resource caching architecture without reason.

---

# 155. IMAGE PERFORMANCE

Use:
- responsive sizing
- optimized formats where supported
- lazy loading below fold
- explicit dimensions

---

# 156. ABOVE-FOLD RESOURCE

If featured content is above the fold, prioritize its asset.

---

# 157. CONTENT RENDERING SECURITY

If rich content is rendered from a CMS/database:

sanitize according to the application security architecture.

Never blindly inject untrusted HTML.

---

# 158. ARTICLE LINKS SECURITY

Follow global external-link rules.

---

# 159. EMBED SECURITY

Third-party embeds should be restricted to approved providers/content.

---

# 160. PERFORMANCE BUDGET

Avoid:
- excessive blur
- huge images
- unnecessary video
- heavy animation
- giant client-side bundles

---

# 161. CORE CONTENT PRIORITY

The resource title/content should become usable before decorative effects.

---

# 162. NO SCROLL JACKING

Normal browser scrolling must remain intact.

---

# 163. NO AUTO-PLAY MEDIA

Unless explicitly required and appropriately accessible.

---

# 164. NO DECORATIVE CAROUSEL BY DEFAULT

Do not turn resources into a carousel merely to create movement.

---

# 165. DISCOVERY OVER DECORATION

If visual decoration competes with the resource title, the decoration loses.

---

# 166. CURATION

The Resources experience should feel intentionally selected.

If the archive is large, category and search architecture must preserve clarity.

---

# 167. FEATURED CONTENT ROTATION

If featured resources rotate, rotation must be data-driven.

Avoid automatic visual rotation that changes content while users are reading.

---

# 168. RESOURCE COLLECTION ORDER

Default ordering must follow actual product/editorial rules.

Do not silently use arbitrary database order.

---

# 169. DATE SORTING

If newest-first is the default, use actual publication dates.

---

# 170. RELATED RESOURCE LOGIC

Relationships may use:
- category
- tags
- topic
- editorial selection

Only if those fields exist.

---

# 171. ARCHIVE NAVIGATION

If resources span multiple years/topics, provide a useful navigation strategy.

Do not build a giant date picker unless needed.

---

# 172. RESOURCE DETAIL EXIT PATHS

Users should be able to:
- return to Resources
- open related material
- return to relevant category

without getting trapped.

---

# 173. BREADCRUMBS

If the global system supports breadcrumbs, resource detail may use:

```text
Home → Resources → Resource
```

Keep it consistent.

---

# 174. MOBILE BREADCRUMBS

Do not let breadcrumbs consume excessive vertical space.

---

# 175. ARTICLE SIDEBAR

Optional sidebar may contain:
- table of contents
- metadata
- share actions

Only if justified.

---

# 176. MOBILE TABLE OF CONTENTS

Long articles may use a collapsible table of contents.

---

# 177. SHARE ACTIONS

If sharing is supported:
- use approved share system
- provide accessible labels
- do not add every social network by default

---

# 178. PRINTING

Long-form resources should remain reasonably printable if the content type warrants it.

---

# 179. DOWNLOAD VS READ

Do not force a download when browser reading is more appropriate.

---

# 180. FILE PREVIEW

If document preview is supported:
- maintain responsive sizing
- provide download fallback
- do not rely solely on an embedded viewer

---

# 181. VIDEO TRANSCRIPT

If transcripts exist, make them accessible.

Do not fabricate transcripts.

---

# 182. RESOURCE CAPTIONS

If images have captions, render them consistently.

---

# 183. RESOURCE QUOTES

Quoted content must be real and appropriately attributed.

---

# 184. NO FABRICATED AUTHORITY

Never claim:

```text
official
expert
certified
endorsed
```

unless the source/product content explicitly supports it.

---

# 185. NO FABRICATED DOWNLOAD COUNTS

Do not invent:
- views
- downloads
- readers
- likes

---

# 186. NO FAKE SOCIAL PROOF

No fabricated testimonials or popularity signals.

---

# 187. EMPTY ARCHIVE

An empty Resources page should still look intentional.

Use:
- explanatory message
- appropriate CTA
- clean composition

---

# 188. ERROR RECOVERY

Retry should not reset unrelated navigation state.

---

# 189. FILTER RESET

Reset should restore the default collection predictably.

---

# 190. SEARCH CLEAR

Clear search should return to the expected default results.

---

# 191. URL SHARING

If filtered resource URLs are supported, opening a shared URL should recreate the same state.

---

# 192. BACK BUTTON

Browser back should behave naturally.

---

# 193. SCROLL RESTORATION

Returning from resource detail should preserve reasonable scroll position when browser/framework behavior allows it.

---

# 194. RESPONSIVE IMAGE ART DIRECTION

Where necessary, use different crops/assets for mobile and desktop.

---

# 195. TYPOGRAPHIC RESPONSIVENESS

Do not use arbitrary fixed desktop font sizes on mobile.

Use global responsive type tokens.

---

# 196. SPACING RESPONSIVENESS

Section spacing should scale deliberately.

Do not simply multiply all desktop spacing by a fixed ratio.

---

# 197. CONTENT DENSITY RESPONSIVENESS

Desktop may show more metadata.

Mobile should show only what helps decision-making.

---

# 198. RESOURCE CARD HEIGHT

Avoid cards becoming wildly different heights unless the editorial design intentionally supports masonry.

Prefer stable card anatomy.

---

# 199. MASONRY

Do not use masonry by default.

It can make scanning harder.

---

# 200. FINAL RESOURCE DETAIL PRINCIPLE

The resource detail page exists for consumption, not decoration.

Typography and readability win.

---

# 201. FINAL RESOURCES PAGE PRINCIPLE

The Resources experience should feel like:

```text
a curated library inside a serious debate institution
```

The homepage creates curiosity.

Academy creates structured growth.

Events create participation.

Resources should create the ability to go deeper.

The design should make knowledge feel valuable without making the interface feel complicated.

---

# END OF RESOURCES PAGE IMPLEMENTATION SPECIFICATION
