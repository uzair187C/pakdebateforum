# PAK DEBATE FORUM (PDF) — 27 HOMEPAGE IMPLEMENTATION SPEC

Status: Primary homepage implementation contract.

## 0. Purpose
The homepage is the visual flagship of PDF. It must feel premium, cinematic, intelligent, modern, editorial, human, and confident without becoming noisy, generic, or gimmicky.

This specification translates the approved visual direction into implementation rules. It must be used together with the 18, 23, 24, and 25 specifications.

Do not invent unsupported facts, statistics, testimonials, events, assets, routes, or features. If a required decision is unknown, flag it.

## 1. Core Homepage Narrative
The homepage should guide the visitor through:

IMPACT → CLARITY → DISCOVERY → PARTICIPATION → KNOWLEDGE → TRUST → ACTION

The visitor should understand:
- what PDF is
- what PDF offers
- what they can explore
- what they can participate in
- where they can learn/find resources
- what they should do next

## 2. Global Composition
Conceptual structure:

GLOBAL HEADER
↓
SIGNATURE HERO
↓
INTRODUCTION / VALUE
↓
MAJOR SITE PATHWAYS
↓
EVENTS / ACTIVITY
↓
ACADEMY / LEARNING
↓
RESOURCES / KNOWLEDGE
↓
TRUST / COMMUNITY / IMPACT
↓
FINAL CTA
↓
GLOBAL FOOTER

The exact content must follow the actual product/site information. Do not add sections merely to make the page longer.

## 3. Hero — Primary Visual Anchor
The signature visual is the predominantly black, futuristic debate podium with restrained gold detailing.

The podium represents:
- debate
- speaking
- authority
- academy
- competition
- PDF identity

It is a visual anchor, not a replacement for content.

Hero priorities:
1. headline/message
2. podium
3. CTA
4. navigation/logo
5. atmosphere

## 4. Hero Background
Default:
- pitch/deep black
- subtle charcoal depth
- restrained warm-gold atmospheric light
- optional extremely subtle grain

Do not add random shapes, blobs, particles, or gradients just because the background has empty space.

## 5. Hero Lighting
Primary lighting concept:
- one controlled warm/golden spotlight from above
- light should feel physically connected to the podium
- edges/material catch the light
- podium itself remains predominantly black

Gold must remain an accent:
BLACK ≫ GOLD.

## 6. Header
The header belongs to the hero.

Initial state:
- transparent/integrated dark treatment

Scrolled state:
- controlled dark/solid treatment
- subtle border/background transition

Use the global header; never invent a page-specific navigation system.

## 7. Logo
Use the approved PDF logo asset.
Never recreate it with ordinary text.
Maintain approved clear space and responsive sizing.

## 8. Hero Headline
The headline is the strongest textual element.

It must be:
- large
- high contrast
- short/scannable
- deliberately composed

Constrain width so it does not stretch across the viewport.

Desktop line breaks may be art-directed where explicitly approved. Avoid arbitrary `<br>` tags merely to force a screenshot match.

Mobile is a deliberate composition, not a shrunk desktop heading.

## 9. Supporting Copy
Keep supporting copy concise and useful.
Its purpose is clarification, not repetition.

## 10. CTA
Provide a clear primary action based on actual supported site functionality.
Do not invent a CTA that implies an unsupported feature.

Primary CTA:
- gold/accent emphasis

Secondary CTA:
- quiet text/outline treatment
- only when genuinely useful

Mobile CTA must remain comfortably touchable and may become full-width/near-full-width.

## 11. Podium Desktop
The podium should feel substantial and premium.

It should complement the text rather than obscure it.
Avoid placing two equally dominant elements directly on top of each other.

The podium must:
- remain predominantly black
- have subtle material/wood texture
- have sharp elegant geometry
- have controlled reflections
- retain its gold plaque/logo treatment
- cast a deep but restrained shadow

Follow the dedicated 3D podium specification; do not duplicate/conflict with it.

## 12. Podium Mobile
Mobile is a recomposition.

Possible deliberate order:
- message → CTA → podium
or
- podium → message → CTA

Choose the composition intentionally from the approved design.

Do not simply squeeze the desktop two-column layout into a phone.

The podium must remain recognizable but must not consume the entire first viewport.

Prevent accidental horizontal overflow.

## 13. Hero Motion
Suggested entrance:

background/header establish
→ headline/copy establish
→ podium silhouette appears
→ gold light resolves
→ podium settles
→ CTA fully settles

Target signature duration: approximately 0.8–1.2 seconds.

Users must not be blocked while the animation runs.

After entrance, the hero should become calm.

## 14. Podium Idle / Pointer / Scroll
Idle:
- mostly still
- optional extremely subtle lighting/depth drift

Desktop pointer:
- tiny camera response or lighting shift
- never aggressive mouse-following

Scroll:
- subtle depth/parallax
- never dramatic flying/rotating

Reduced motion:
- no parallax
- no pointer camera movement
- no continuous idle movement
- simple visual state transition

## 15. Hero Height
Desktop may use a full or near-full viewport composition where appropriate.
Prefer `100svh` over blindly relying on `100vh` when mobile browser chrome matters.

The first viewport must communicate identity, message, and action without forcing an unnecessarily long scroll.

Respect safe-area insets.

## 16. First Content Section
Purpose:
translate the emotional hero impression into clear understanding.

Possible content:
- what PDF is
- what it does
- why it matters

Use only approved information.

Layout:
desktop: editorial split or strong composition
mobile: deliberate stacked composition

Do not repeat the hero animation.

## 17. Major Site Pathways
Use the actual confirmed major areas of PDF, such as Events, Academy, and Resources when those are part of the product.

Each pathway communicates:
- destination
- purpose
- action

Use shared cards/components rather than unrelated designs.

## 18. Pathway Cards
Consistent:
- spacing
- radius
- typography
- border
- hover behavior

Differentiation may come from approved imagery/content.

Desktop hover may use:
- small elevation
- subtle image movement
- restrained accent emphasis

Mobile must not depend on hover.

## 19. Events Preview
If events are a major PDF area, the homepage may show a curated preview.

Purpose:
answer “What is happening?” and guide users to the events experience.

Use actual event data only.
Never fabricate dates, locations, titles, statistics, or images.

If no events exist, use an intentional empty state rather than fake content.

## 20. Academy Preview
If Academy is part of the product, provide a concise introduction.

Visual language:
- intelligent
- aspirational
- structured
- human
- premium

Do not turn it into a generic education-platform template.

Use approved academy assets only.

## 21. Resources Preview
If resources are part of the product, show a curated sample.

Possible resource types:
- articles
- documents
- guides
- videos

Only implement types actually supported by the product data.

Use the shared resource-card system.

## 22. Trust / Community / Impact
Only include verified/supplied content.

Possible content:
- community
- impact
- partners
- statistics
- testimonials

Never invent:
- numbers
- testimonials
- partner logos
- claims

If the source content does not support a section, omit it.

## 23. Editorial Storytelling
The homepage should not become a repeated sequence of identical card grids.

Use varied composition where justified:
- split editorial layouts
- large imagery
- typography-led blocks
- cards
- stat blocks
- story sections

Negative space is intentional and should not automatically be filled.

## 24. Gold Thread
Gold should act as a recurring visual thread through:
- brand details
- CTA
- podium
- small accents
- lines/emphasis

Do not make every component gold.

## 25. Section Transitions
Transitions can use:
- surface changes
- spacing
- subtle glow
- controlled image overlap

Avoid decorative separators everywhere.

The podium should primarily belong to the hero rather than being repeatedly duplicated throughout the page.

## 26. Final CTA
Near the end, provide a clear next step based on actual functionality.

Visual direction:
- large typography
- dark premium surface
- restrained gold
- subtle atmosphere

Do not recreate the entire hero.

## 27. Footer
Footer is a calm conclusion.
Use the global footer specification and navigation architecture.

## 28. Mobile Architecture
Mobile is not a scaled desktop.

Conceptual flow:
header
→ hero message
→ CTA
→ podium
→ intro
→ pathways
→ events
→ academy
→ resources
→ story/trust
→ final CTA
→ footer

Exact ordering depends on approved content.

Mobile rules:
- deliberate gutters
- no horizontal overflow
- responsive type
- reduced section spacing
- reduced expensive effects
- touch-friendly CTAs
- art-directed image crops where necessary

## 29. Tablet
Treat tablet as its own composition where required.
Do not blindly choose desktop or mobile.

The podium may remain side-oriented at some tablet widths if the composition supports it.

## 30. Wide Desktop
Constrain text/content width.
Keep podium and message compositionally connected.
Do not allow huge empty areas caused by naive percentage positioning.

## 31. Dynamic Sections
Dynamic event/resource/academy sections must support:
- loading
- loaded
- empty
- error

Reserve layout geometry to reduce shifts.

The core hero/navigation must not depend on optional API data.

## 32. 3D Fallback
If WebGL/3D fails:
- page must continue working
- do not show a blank rectangle
- use the approved static podium render

The page must remain understandable without the 3D object.

## 33. Accessibility
Hero must have:
- clear H1
- keyboard-accessible CTA
- visible focus
- sufficient contrast
- decorative 3D treated appropriately

Respect `prefers-reduced-motion`.

Important information cannot depend solely on animation.

## 34. Performance
Treat the homepage as the richest visual page and therefore the strictest performance target.

Check:
- LCP
- hero image/3D loading
- font loading
- layout shifts
- animation frame rate
- mobile performance
- 3D quality adaptation

3D should enhance the page after critical content is usable.

## 35. Component Inventory
Potential shared components:
- `SiteHeader`
- `Hero`
- `HeroCTA`
- `Podium3D`
- `SectionHeading`
- `PathwayCard`
- `EventCard`
- `ProgramCard`
- `ResourceCard`
- `StoryBlock`
- `StatsBlock`
- `TestimonialBlock`
- `CTASection`
- `SiteFooter`

This is an inventory, not a command to implement every component.

Reuse existing components and variants before creating duplicates.

## 36. Homepage State Matrix
Test:
- initial load
- 3D loading
- 3D ready
- 3D fallback
- dynamic content loading
- dynamic content loaded
- empty collection
- API error
- reduced motion
- mobile
- tablet
- desktop
- wide desktop

## 37. Animation Matrix
Header:
- subtle entrance
- scroll state change
- normal hover
- no continuous motion

Headline:
- subtle reveal
- no continuous motion

CTA:
- subtle entrance
- hover/press
- no continuous motion

Podium:
- cinematic entrance
- subtle scroll response
- optional restrained pointer response
- nearly still idle
- static/reduced-motion fallback

Sections/cards:
- restrained reveal
- short stagger
- subtle hover only where appropriate

## 38. Motion Density
Highest:
- hero

Moderate:
- major section entrances
- cards

Low:
- utility areas
- footer

Never animate all visual layers simultaneously at maximum intensity.

## 39. Implementation Order
1. global shell
2. static hero
3. podium integration
4. hero responsive layout
5. first content section
6. pathway system
7. dynamic previews
8. story/trust sections
9. final CTA
10. footer
11. motion
12. 3D optimization
13. accessibility
14. performance
15. QA

Do not build motion first.
Do not build 3D first.
Do not build mobile as an afterthought.

## 40. Content Integrity
The homepage must never silently invent:
- facts
- statistics
- testimonials
- events
- partner claims
- program details
- resource types
- CTAs
- routes

Unknown content is a documented placeholder or a flagged decision.

## 41. Reference Image Rule
Reference images establish:
- composition
- hierarchy
- mood
- proportion
- lighting
- visual language

They are not permission to copy unrelated elements or hard-code screenshot coordinates.

## 42. Final QA — Hero
Ask:
- Does the first viewport immediately feel like PDF?
- Is the headline readable?
- Is the podium substantial but not overwhelming?
- Is the gold light restrained?
- Is the CTA obvious?
- Is navigation readable?
- Does the composition remain coherent on resize?

## 43. Final QA — Mobile
Ask:
- Does it feel designed rather than shrunk?
- Is the podium recognizable?
- Is text readable?
- Is there horizontal overflow?
- Is the CTA easy to use?
- Are expensive effects reduced?
- Does the first viewport communicate the purpose?

## 44. Final QA — Motion
Ask:
- Does movement feel premium?
- Does anything move without purpose?
- Can users interact immediately?
- Does reduced motion work?
- Does the podium remain the signature rather than becoming a distraction?

## 45. Final QA — Content / Assets
Verify:
- correct PDF logo
- approved podium
- approved photography
- correct crops
- fallbacks
- no invented content
- no fake metrics
- no fake testimonials
- meaningful alt text

## 46. Final Principle
The homepage should feel like a digital stage for PDF.

The podium is its physical symbol.
Typography is its voice.
Gold light is its visual accent.
Sections are the program.
Interactions are the movement.
Content is the reason the visitor stays.

The visual system exists to make the actual PDF experience memorable—not to replace it.

# END OF HOMEPAGE IMPLEMENTATION SPECIFICATION
