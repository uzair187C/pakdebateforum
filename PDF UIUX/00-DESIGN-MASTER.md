# Pak Debate Forum — Master Design & UX Specification

**Document:** `00-DESIGN-MASTER.md`  
**Status:** Foundation / v0.1  
**Authority:** Governing visual and UX specification  
**Purpose:** Define the design philosophy, system boundaries, decision hierarchy, shared experience rules, and implementation contract for the complete Pak Debate Forum website redesign.

---

## 0. How This Document Must Be Used

This document is the **top-level visual and UX authority** for the redesign.

It does **not** replace the product/content handoff supplied for Pak Debate Forum. That document remains the source of truth for what the organization is, which pages exist, what information each page must contain, and which backend/data systems already exist.

The product handoff explicitly states that it is not a visual design brief and that colors, typography, animation, spacing, and visual styling are handled separately. This document is that visual/UX layer. The product handoff also establishes that the redesign must preserve the existing production functionality and data backbone rather than replacing it with hardcoded mock content.

### Source-of-truth hierarchy

When building or modifying the site, use this authority order:

1. **Approved design-system documentation** in `/docs/design/`.
2. **Approved page-specific design documentation** in `/docs/design/pages/`.
3. **Approved visual reference images** supplied by the design process.
4. **Existing production functionality and backend contracts.**
5. **Official PBF content and data.**
6. **AI implementation judgment for details not explicitly defined.**

The AI must never silently override a higher-level source with its own preference.

### AI implementation rule

When a requirement is not specified, the implementation agent may use judgment for small visual details, but must not invent a new major visual language, page structure, interaction pattern, branding element, content claim, or data model.

For a major ambiguity that affects architecture, brand identity, functionality, or user flow, stop and request clarification rather than guessing.

---

# 1. PRODUCT CONTEXT THE DESIGN MUST SERVE

Pak Debate Forum is the parent organization and Pak Debate Forum Academy is a major education/training arm of the same organization.

The public experience therefore needs to communicate one unified organization containing:

- Organization/community
- Debate
- Academy
- Programs
- Events
- Resources
- Results
- Registration
- Feedback/contact

The Academy must feel like a major pillar of PBF, not a disconnected company or rebranded sub-site.

The homepage represents the **whole Pak Debate Forum organization**, not only the Academy.

The design must therefore support two simultaneous perceptions:

> **Pak Debate Forum is the institution and community.**
>
> **Pak Debate Forum Academy is its serious educational and training ecosystem.**

This distinction is foundational to every page.

---

# 2. EXPERIENCE NORTH STAR

## Desired user feeling sequence

The website should guide the visitor through:

**Curiosity → Presence → Authority → Interest → Trust → Ambition → Action**

The visitor should leave the first interaction feeling:

> **“This is not simply a debate club or a course catalogue. This is an institution I want to be part of.”**

The experience should feel:

- Elegant
- Authoritative
- Modern
- Intelligent
- Purposeful
- Cinematic
- Human
- Premium
- Accessible
- Performance-conscious

It must **not** feel:

- Generic SaaS
- Template-based
- Overly corporate
- Gamified
- Loud or flashy
- Excessively rounded
- Over-animated
- Artificially luxurious
- Like a gaming interface
- Like a generic coaching marketplace

---

# 3. CORE CREATIVE IDEA

The visual identity is built around the metaphor of **the stage**.

A podium is not merely a decoration. It represents:

- Voice
- Argument
- Presence
- Leadership
- Competition
- Confidence
- Public expression

The podium is therefore the primary visual hero object for the Academy-led visual language.

It should behave as a **spatial object** rather than a static poster element.

The visitor should feel as though the website opens onto a stage and gradually reveals the institution behind that stage.

---

# 4. VISUAL LANGUAGE

## 4.1 Overall aesthetic

The site should use a cinematic, dark institutional aesthetic combining:

- Near-black foundations
- Controlled metallic gold
- Restrained deep green
- Warm white typography
- Architectural imagery
- Directional light
- Subtle atmospheric depth
- Refined line icons
- Editorial typography
- Strong negative space
- Deliberate geometry

## 4.2 Design principle

The website should look expensive because it is **controlled**, not because it contains many effects.

Every visual effect must have a purpose:

- Establish hierarchy
- Create depth
- Guide attention
- Communicate identity
- Explain a transition
- Reinforce a metaphor

Do not add motion or glow solely because the technology permits it.

## 4.3 Visual proportion

The default visual distribution should strongly favor dark neutrals.

Gold is an accent, not a background color.

Green is a supporting identity color, not a dominant decorative color.

Large visual areas should remain calm enough for typography and content to breathe.

---

# 5. BRANDING RULES

## 5.1 Organization hierarchy

The master identity is **Pak Debate Forum**.

**Pak Debate Forum Academy** is the educational identity inside the organization.

Do not create a separate logo system, unrelated color system, or disconnected visual language for the Academy unless explicitly approved later.

## 5.2 Logo usage

The official logo is a primary brand asset.

Rules:

- Prefer vector artwork (`SVG`) when available.
- Preserve proportions.
- Never stretch or skew the logo.
- Never redraw the logo in CSS or with an AI-generated substitute when the official asset is available.
- Maintain adequate clear space.
- Do not place the logo over a visually noisy image without sufficient contrast.
- Do not apply arbitrary filters.
- Gold/green presentation should remain consistent with the approved source asset.

## 5.3 Podium branding

The podium may contain the official logo and “PAK DEBATE FORUM / ACADEMY” lockup.

The branding must feel integrated into the object rather than pasted onto it.

The podium text must remain legible at desktop viewing size and survive responsive scaling.

---

# 6. TYPOGRAPHIC PHILOSOPHY

The typography system uses two principal roles:

### Display / Editorial

Used for:

- Hero headlines
- Major page titles
- Section statements
- Large quotes
- High-impact editorial moments

The display family must feel elegant, institutional, editorial, and premium.

### UI / Body

Used for:

- Navigation
- Paragraphs
- Metadata
- Buttons
- Forms
- Cards
- Filters
- Data labels
- Supporting copy

The UI family must prioritize readability and performance.

### Typography constraints

- Use a **maximum of two primary font families** unless explicitly approved.
- Do not introduce a third decorative family for isolated sections.
- Font weights must be deliberately chosen and reused consistently.
- Typography hierarchy must be established globally before page-level styling.
- The design agent must not change fonts based on a single image-generation artifact.
- Any final font choice must be recorded in `03-TYPOGRAPHY.md` and loaded consistently throughout the application.

### Writing hierarchy

Major headlines should be short and assertive.

Supporting copy should be concise.

Long descriptions belong on detail pages, not in the hero.

The visual design should never force users to read a wall of text before understanding what a page is for.

---

# 7. COLOR SYSTEM — GOVERNING PRINCIPLES

The final values are to be formally locked in `02-COLOR-SYSTEM.md`.

The current visual direction uses the following working palette:

| Role | Working value | Usage |
|---|---|---|
| Primary Black | `#050505` | Main canvas, hero backgrounds |
| Deep Surface | `#0B0B0B` | Section surfaces |
| Card/Elevation Surface | `#111717` | Cards, panels, raised surfaces |
| Gold | `#C9A24A` | Accent, active state, fine detail |
| Gold Light | `#E4BF62` | Primary emphasis, CTA highlight |
| Deep Green | `#064C39` | Identity background accent |
| Green Light | `#087A58` | Secondary glow/accent |
| Warm White | `#F5F3EE` | Primary text |
| Muted Gray | `#A8A8A8` | Secondary text |

These values are a working foundation, not permission for individual components to invent arbitrary shades.

### Color behavior

Gold should generally appear in:

- Primary CTAs
- Active navigation states
- Fine borders
- Key data values
- Selected tabs
- Icon accents
- Focus indicators
- Podium lighting
- Important decorative lines

Gold should not normally become:

- Large full-page backgrounds
- Dense paragraph text
- Large blocks of UI copy
- Constant glowing borders around every element

Green should generally appear in:

- Brand identity
- Atmospheric gradients
- Selective CTA environments
- Success/positive identity moments when appropriate
- Academy-specific emphasis where visually justified

---

# 8. LAYOUT PHILOSOPHY

The site should feel editorial rather than dashboard-like.

## 8.1 Grid

The global system should use a consistent centered content grid with responsive margins.

The grid must be defined globally and reused everywhere rather than recreated section by section.

Recommended conceptual model:

- Full-bleed sections for cinematic visual moments.
- Constrained content container for readable information.
- Consistent horizontal alignment between page heading, cards, filters, and content blocks.
- Deliberate asymmetry only when it improves storytelling.

## 8.2 Whitespace

Whitespace is a premium visual element.

Do not fill empty space simply because it exists.

Hero compositions should have large negative space around major typography and the podium.

Content sections should have enough breathing room for each visual block to register independently.

## 8.3 Section rhythm

Pages should alternate between:

- Cinematic visual moments
- Structured information
- Human/editorial sections
- Data/credibility sections
- Conversion moments

This prevents long sequences of visually identical cards.

---

# 9. GLOBAL NAVIGATION SYSTEM

## Desktop

The primary navigation contains:

1. Home
2. About
3. Academy
4. Programs
5. Events
6. Resources
7. Results

Primary CTA:

**Join the Academy**

Secondary destinations such as Feedback and Contact should be available through utility/navigation/footer areas without competing with the seven core destinations.

## Navigation behavior

The navigation should be visually calm.

Default state:

- Transparent or near-transparent over cinematic hero
- Minimal border treatment
- Warm white navigation text
- Gold active/hover accent

Scrolled state may become:

- More opaque
- Slightly elevated
- Backdrop-treated
- Visually quieter

The navbar must never consume excessive vertical space.

## Mobile

Use a compact header:

- PBF logo
- Menu button
- Optional CTA within menu rather than permanently occupying hero width

Mobile navigation should use a full-height or substantial overlay/drawer when needed.

Menu animation should be smooth and directional, not bouncy.

---

# 10. BUTTON SYSTEM

Buttons must communicate hierarchy.

## Primary button

Purpose:

- Join Academy
- Register
- Enroll
- Main conversion

Visual language:

- Gold emphasis
- High contrast
- Refined corners
- Clear arrow/forward affordance where appropriate
- Strong but restrained hover response

## Secondary button

Purpose:

- Explore
- Learn more
- View details
- Secondary page navigation

Visual language:

- Transparent/dark surface
- Thin gold border or subdued treatment
- Warm text

## Text link

Purpose:

- Lower-priority exploration
- Inline navigation

Should never look like a primary CTA.

## Button states

All buttons require:

- Default
- Hover
- Focus-visible
- Active/pressed
- Disabled
- Loading where asynchronous

Motion should remain subtle.

---

# 11. CARD SYSTEM

Cards are supporting components, not the entire website.

Use multiple card variants while keeping shared DNA:

- Program Card
- Event Card
- Coach Card
- Resource Card
- Result Card
- Stat Card
- Testimonial Card

All cards should share:

- Material language
- Border logic
- Typography hierarchy
- Spacing system
- Hover philosophy

Do not create a completely new card shape for every page.

### Default card behavior

Cards should feel slightly elevated from the background through:

- Surface difference
- Very subtle border
- Controlled shadow or ambient glow

Avoid excessive blur/glass effects unless specified by the relevant component.

---

# 12. ICONOGRAPHY

Use a consistent thin-line icon system.

Icons should feel:

- Refined
- Institutional
- Slightly technical
- Consistent in stroke weight
- Recognizable at small sizes

Common semantic icons include:

- Debate
- Public speaking
- Critical thinking
- Leadership
- Trophy
- Calendar
- Book/resource
- People
- Location
- Registration
- Certificate/award
- Microphone
- Chat/contact

Do not mix multiple unrelated icon libraries on the same page.

---

# 13. IMAGERY & BACKGROUND LANGUAGE

The image system should mix several controlled visual families.

## 13.1 Hero imagery

Hero imagery should be cinematic and low-key.

Preferred characteristics:

- Dark environment
- Controlled warm spotlight
- Strong depth
- Large areas of negative space
- Architectural or stage references
- No clutter behind typography

## 13.2 Academy imagery

Useful motifs:

- Debate rooms
- Lecture/training spaces
- Microphones
- Stages
- Books/library
- Architectural doors/halls
- Students in authentic academic/debate contexts

## 13.3 Results imagery

Preferred motifs:

- Trophies
- Competitions
- Debate stages
- Awards
- Team photographs
- Institutional event environments

## 13.4 Resources imagery

Prefer knowledge-oriented visuals:

- Books
- Documents
- Research spaces
- Library environments
- Editorial paper textures

## 13.5 Image treatment

Images may receive:

- Dark overlays
- Gold light bloom
- Subtle green tint
- Vignetting
- Gradient masks

These effects must preserve information and not make real people or important event content unreadable.

---

# 14. ARCHITECTURAL MOTIF

A recurring architectural language may be used to make the site feel like one institution.

Useful motifs:

- Tall doorways
- Framed portals
- Auditorium halls
- Stage curtains or dark stage silhouettes
- Vertical architectural lines
- Arched/ceremonial entry forms

The motif represents **entry into knowledge and debate**.

Do not repeat identical doorway imagery on every page. Reuse the motif, not the exact asset.

---

# 15. HERO SYSTEM

The hero is the highest-priority visual system in the redesign.

For the main homepage, the hero should establish the institutional PBF identity first, with Academy positioned as a major pathway into the organization.

For Academy pages, the podium can become more central and dominant.

## Hero anatomy

A standard hero may contain:

1. Eyebrow / category
2. Main headline
3. Supporting copy
4. Primary CTA
5. Secondary CTA
6. Hero visual object
7. Atmospheric lighting
8. Optional key stats
9. Scroll indicator

Not every hero needs every element.

## Hero spacing

The hero must preserve enough negative space for the main headline to remain dominant.

Avoid placing important text directly on bright gold lighting.

---

# 16. PODIUM SYSTEM

The podium is the flagship Academy visual object.

## Design direction

Characteristics:

- Predominantly black
- Sculptural
- Futuristic but institutional
- Thin gold edge accents
- Deep green/gold branding
- Minimal wood/grain detail
- Elegant speaking deck
- Minimal microphones
- Circular or layered base
- High depth and controlled reflections

## Visual scale

Desktop:

The podium should be one of the largest objects in the Academy hero.

It may occupy a substantial portion of the hero viewport while leaving enough room for primary copy.

Mobile:

The podium should be treated as a composition rather than merely scaled down.

Possible behavior:

- Narrower apparent width
- Slightly lower vertical anchor
- Intentional crop of base or upper geometry if needed
- Reduced decorative lighting
- Typography remains readable above or alongside the visual

## Asset strategy

Preferred final asset hierarchy:

1. Real-time 3D GLB/GLTF podium
2. Optimized transparent WebP/PNG fallback
3. Mobile-specific optimized render where beneficial

## Podium animation states

The complete state machine belongs in `09-3D-PODIUM.md`, but the master rules are:

1. Preload
2. Darkness
3. Light introduction
4. Silhouette reveal
5. Full object reveal
6. Idle state
7. Pointer interaction
8. Scroll interaction
9. Transition/exit
10. Reduced-motion state
11. Static fallback

The podium must never spin constantly like a product viewer.

Motion should feel like camera choreography around an object.

---

# 17. MOTION PHILOSOPHY

Motion should communicate:

**confidence, depth, progression, and intentionality.**

### Core motion principles

1. **Purposeful** — every animation communicates hierarchy or transition.
2. **Smooth** — movement should settle elegantly.
3. **Slow enough to feel premium** — avoid frantic UI movement.
4. **Consistent** — repeated interaction patterns use repeated timing rules.
5. **Directional** — movement should generally imply where content is entering/leaving.
6. **Responsive** — motion must adapt to viewport and device capability.
7. **Accessible** — reduced-motion users receive a complete static experience.
8. **Performance-aware** — animation should never block usability.

### Preferred technologies

Primary motion system:

**GSAP + ScrollTrigger**

3D system when used:

**Three.js / React Three Fiber**

---

# 18. MOTION TIMING PHILOSOPHY

Exact timings are formalized later in `08-MOTION-ANIMATION.md`.

Working guidance:

- Micro interaction: ~120–250ms
- Button/hover transition: ~180–350ms
- Card reveal: ~350–700ms
- Standard section reveal: ~500–1000ms
- Hero text sequence: ~1.2–2.5s overall
- Cinematic hero object reveal: ~2.0–3.5s
- Major page transition: ~500–1200ms
- Scroll-linked movement: continuous/scrubbed rather than fixed duration
- Idle object motion: multi-second loops

Do not make every component use the same duration.

The motion system should have a recognizable rhythm.

---

# 19. SCROLL EXPERIENCE

Scroll should feel like moving through an exhibition or institutional story.

Recommended narrative:

**Hero / stage**
→ **organization**
→ **education**
→ **opportunities**
→ **people**
→ **results**
→ **resources**
→ **action**

Scroll-driven animation should be used most strongly for:

- Hero object
- Training path
- Architectural transitions
- High-impact imagery
- Section reveals
- Counters
- Select editorial moments

Do not make ordinary cards excessively animated.

---

# 20. RESPONSIVE DESIGN PHILOSOPHY

Responsive design is not “desktop scaled down.”

Desktop and mobile are two compositions of the same design language.

## Working breakpoints

### Large desktop
`≥ 1440px`

Full cinematic composition.

Large typography, generous spacing, full interaction set, 3D where appropriate.

### Desktop
`1200–1439px`

Same composition with constrained dimensions.

### Laptop
`992–1199px`

Reduced hero scale, controlled spacing, simplified spatial effects.

### Tablet
`768–991px`

More stacked composition, reduced decorative effects, simplified navigation.

### Mobile large
`576–767px`

Single-column content, touch-first interaction, simplified motion.

### Mobile small
`<576px`

Maximum readability, minimal decorative overhead, strongest performance constraints.

These ranges are working design breakpoints and are subject to validation during implementation.

---

# 21. MOBILE DESIGN RULES

Mobile must preserve the emotional identity of the desktop version without trying to reproduce its exact geometry.

## General rules

- One dominant content column.
- Touch-friendly controls.
- Avoid horizontal overflow.
- Reduce decorative motion.
- Preserve typography hierarchy.
- Maintain strong CTA visibility.
- Do not put essential information inside hover-only interactions.
- Use accordions for long secondary information where appropriate.
- Convert large horizontal groups into swipeable or vertically stacked patterns where justified.

## Podium on mobile

The podium may:

- Use a dedicated render.
- Be partially cropped.
- Sit behind the headline.
- Move below the CTA.
- Lose pointer parallax.
- Keep only essential reveal/scroll movement.

The exact composition must be tested visually on common narrow devices.

---

# 22. ACCESSIBILITY AS A DESIGN REQUIREMENT

Accessibility is not an afterthought.

Requirements include:

- Keyboard-accessible navigation
- Visible focus states
- Sufficient contrast
- Meaningful button labels
- Form labels
- Alt text for meaningful imagery
- Decorative imagery marked appropriately
- Reduced-motion support
- No information conveyed only through animation
- Touch targets large enough for mobile interaction

The cinematic styling must never come at the expense of basic usability.

---

# 23. PERFORMANCE AS A DESIGN CONSTRAINT

The site is visually ambitious but must remain fast.

## Rules

- Optimize large images.
- Prefer WebP/AVIF where supported.
- Lazy-load below-the-fold imagery.
- Lazy-load 3D assets where possible.
- Avoid large autoplay videos unless they are demonstrably worthwhile.
- Keep hero assets optimized.
- Use reduced-effects mode for low-performance devices where appropriate.
- Prevent layout shifts.
- Do not load a giant 3D asset before the hero needs it.

## Fallback philosophy

Every advanced visual treatment should have a graceful fallback.

Example:

**3D podium → transparent render → static image**

The page must remain usable at every level.

---

# 24. DATA / CONTENT INTEGRATION RULE

The visual system must consume real application data.

Never hardcode dynamic page content just to match a reference image.

Examples include:

- Program cards
- Coach cards
- Event cards
- Event details
- Registration information
- Resources
- Results
- Feedback states

For a design reference, placeholder data may be used visually, but implementation must use the existing APIs/data contracts.

Dynamic systems already exist for programs, events, registrations, feedback, resources, coaches, admin CRUD, and JWT-based administration and should remain intact.

---

# 25. PAGE FAMILY PRINCIPLE

The site should not have thirteen unrelated designs.

Instead, pages belong to families.

## Global family

- Home
- Navigation
- Footer
- shared sections

## Organization family

- About
- Leadership/team
- Results

## Academy family

- Academy
- Programs
- Program Detail
- Coaches

## Opportunity family

- Events
- Event Detail
- Registration

## Knowledge/communication family

- Resources
- Feedback
- Contact

Each family may have its own emphasis while inheriting the global visual system.

---

# 26. PAGE PURPOSE BEFORE VISUALS

Every page specification must begin with:

1. What is the page for?
2. What decision should the user make here?
3. What information is essential?
4. What information is secondary?
5. What is the primary CTA?
6. Where does the user go next?
7. Which real data powers the page?

Visual design must support those answers.

---

# 27. SHARED PAGE ANATOMY

Most internal pages should use a shared pattern:

1. Global navigation
2. Compact visual/page hero
3. Breadcrumb/context where useful
4. Primary content area
5. Supporting content modules
6. Conversion or next-action area
7. Footer

Exception: detail and transactional pages may use more functional compositions.

---

# 28. FORMS & TRANSACTIONAL UX

Forms should feel like part of the same institution—not like browser-default input fields dropped into a dark page.

Form components require:

- consistent label typography
- clear placeholder behavior
- dark surfaces
- clear focus states
- gold focus/active treatment
- validation messages
- loading states
- success states
- failure states
- accessible labels

Registration must feel like a guided flow rather than an intimidating wall of inputs.

---

# 29. EMPTY / LOADING / ERROR STATES

Every data-driven component must define visual states.

### Loading

Use restrained skeletons or subtle loading indicators.

Avoid flashy spinners.

### Empty

Explain what is absent and provide the next useful action.

### Error

Use calm, clear language and an actionable recovery path.

Never expose raw backend errors to normal visitors.

---

# 30. PAGE TRANSITIONS

Page transitions may be cinematic but must remain quick.

Preferred direction:

- subtle fade
- spatial crossfade
- dark-to-dark reveal
- architectural mask
- gold line/lighting transition in carefully selected moments

Avoid elaborate full-screen transitions on every click.

The website should still feel immediate.

---

# 31. CONTENT INTEGRITY

The design must not manufacture organizational credibility.

Do not invent:

- championship claims
- number of students
- number of events
- awards
- coaches
- founders
- testimonials
- historical milestones
- official statistics

Placeholder values are allowed only where the product/content source explicitly permits temporary placeholders and they must be treated as placeholders during development.

Official PBF information remains authoritative.

---

# 32. IMAGE GENERATION RULE

AI-generated reference images are design exploration artifacts.

They do not automatically become production assets.

Before production use, assets must be classified as:

- Official brand asset
- Approved production photograph
- Approved generated image
- Decorative illustration
- Temporary reference
- Placeholder

Reference screenshots may contain fabricated names, numbers, locations, or event titles purely for visual composition. These must not be copied into the live site as factual claims.

---

# 33. COMPONENT REUSE RULE

Before creating a new component, ask:

> Can an existing component satisfy this requirement through a variant or configuration?

Prefer:

`EventCard variant="featured"`

over:

`SpecialEventCardForHomepageOnly`

The goal is a coherent component system that stays maintainable for the AI coding workflow.

---

# 34. DESIGN TOKENS

All repeatable values must eventually become centralized tokens.

Examples:

- colors
- fonts
- type sizes
- line heights
- radii
- spacing
- border widths
- shadows
- animation durations
- easing curves
- z-index layers
- breakpoints
- container widths

The implementation agent should consume tokens rather than scattering values throughout components.

---

# 35. Z-INDEX / LAYERING CONCEPT

The global visual system should establish a predictable depth stack.

Conceptual layers:

1. Base background
2. Atmospheric background
3. Decorative particles/lines
4. Page content
5. Hero visual object
6. Navigation overlays
7. Modal/drawer surfaces
8. Notifications/system overlays

The exact numeric values belong in the implementation layer, but the hierarchy must remain stable.

---

# 36. AI CODING AGENT OPERATING RULES

The AI implementation agent must:

1. Read the relevant design-system document before touching a component.
2. Read the relevant page specification before changing a page.
3. Reuse existing components whenever possible.
4. Reuse existing design tokens.
5. Preserve production data contracts.
6. Preserve authentication/security architecture unless explicitly authorized.
7. Never invent permanent organization claims.
8. Never introduce a new font without approval.
9. Never introduce a new major color without approval.
10. Never introduce a major animation style without approval.
11. Build responsive behavior at the same time as desktop behavior.
12. Test reduced-motion behavior.
13. Check for overflow and layout shift.
14. Prefer deterministic, inspectable UI over hidden magic.
15. Use screenshots during validation.

### Before declaring a page complete

The agent must verify:

- visual hierarchy
- spacing consistency
- typography consistency
- responsive behavior
- mobile usability
- keyboard/focus behavior
- animation timing
- reduced motion
- data integration
- empty/loading/error states
- performance risks

---

# 37. VISUAL QA PROCESS

Every significant page should go through visual QA at minimum at:

- 1440px desktop
- 1280px desktop/laptop
- 1024px tablet/compact laptop
- 768px tablet
- 390px mobile
- 360px narrow mobile

The process is:

**Implement → Screenshot → Compare → Fix → Screenshot → Approve**

Do not rely only on browser intuition.

Reference images are visual targets, not pixel-perfect contracts. The implementation should reproduce the intended visual language and hierarchy rather than blindly copying a generated image's artifacts.

---

# 38. WHAT “PREMIUM” MEANS IN THIS SYSTEM

Premium means:

- clear hierarchy
- excellent spacing
- controlled typography
- restrained color
- precise alignment
- high-quality imagery
- sophisticated motion
- meaningful interactions
- consistency
- confidence

Premium does **not** mean:

- more gradients
- more glow
- more animation
- more shadows
- more gold
- more rounded cards
- more decorative particles

Restraint is a design feature.

---

# 39. WHAT “FUTURISTIC” MEANS IN THIS SYSTEM

The interface can feel futuristic through:

- sculptural forms
- precise geometry
- subtle ambient lighting
- spatial navigation
- real-time 3D where useful
- refined interaction
- layered depth
- responsive motion

It must not become a neon cyberpunk aesthetic.

The institution remains the dominant personality.

---

# 40. WHAT “INSTITUTIONAL” MEANS IN THIS SYSTEM

Institutional means:

- credible
- stable
- structured
- knowledgeable
- human
- enduring

The visual identity should be able to survive beyond one campaign or one generation of content.

Avoid trends that would make the site look dated quickly.

---

# 41. DESIGN DECISION LOG

Every major design decision should eventually be recorded with:

- Decision
- Reason
- Affected components/pages
- Approved date/version
- Open questions

Example:

```text
Decision: Use one display font + one UI/body font.
Reason: Preserve editorial identity and maintain readability.
Affected: Entire site.
Status: Approved.
```

This allows the design system to evolve without losing the reasoning behind it.

---

# 42. DOCUMENT DEPENDENCY MAP

This master document governs the following documentation layers:

```text
00-DESIGN-MASTER.md
│
├── 01-BRAND-IDENTITY.md
├── 02-COLOR-SYSTEM.md
├── 03-TYPOGRAPHY.md
├── 04-GRID-SPACING-LAYOUT.md
├── 05-COMPONENT-SYSTEM.md
├── 06-IMAGERY-ASSET-SYSTEM.md
├── 07-ICONOGRAPHY.md
├── 08-MOTION-ANIMATION.md
├── 09-3D-PODIUM.md
├── 10-RESPONSIVE-SYSTEM.md
├── 11-ACCESSIBILITY.md
├── 12-PERFORMANCE.md
├── 13-PAGE-TRANSITIONS.md
│
├── pages/
│   ├── HOME.md
│   ├── ABOUT.md
│   ├── ACADEMY.md
│   ├── PROGRAMS.md
│   ├── PROGRAM-DETAIL.md
│   ├── COACHES.md
│   ├── EVENTS.md
│   ├── EVENT-DETAIL.md
│   ├── REGISTRATION.md
│   ├── RESOURCES.md
│   ├── RESULTS.md
│   ├── FEEDBACK.md
│   └── CONTACT.md
│
└── admin/
    └── ADMIN-UI.md
```

A separate implementation-specific document should later define how the AI coding agent consumes these rules.

---

# 43. CURRENTLY APPROVED DESIGN DIRECTION

The following concepts are approved as the current direction, subject to formalization in their dedicated documents:

- Dark cinematic institutional aesthetic
- Black-first visual composition
- Restrained metallic gold
- Deep green identity accent
- Editorial display typography + clean UI/body typography
- Central sculptural podium for Academy-focused hero experiences
- Architectural visual motifs
- Thin-line gold iconography
- High-contrast but warm typography
- Premium, restrained cards
- Cinematic reveal animations
- Scroll-driven hero choreography
- Subtle pointer/parallax interaction on capable desktop devices
- Distinct but related desktop/mobile compositions
- Shared design system across all public pages
- Real data integrated into the visual system
- Strong emphasis on performance and accessibility

---

# 44. CURRENTLY NOT LOCKED

The following items must be explicitly finalized in dedicated documents before implementation is considered visually complete:

- Final font families
- Exact typography scale
- Exact spacing scale
- Exact container widths
- Exact border-radius tokens
- Exact shadows
- Final gold/green values after implementation testing
- Full icon library/source
- Final image asset inventory
- Exact breakpoint-specific dimensions
- Exact GSAP timing table
- Exact easing curves
- Exact podium implementation method (2D fallback vs real-time 3D)
- Final page transition system
- Final micro-interaction library
- Final loading/empty/error visual states

No AI agent should invent these as permanent design decisions while this status is still “not locked.”

---

# 45. NEXT DOCUMENTS TO PRODUCE

The next documents should be created in this order:

1. `01-BRAND-IDENTITY.md`
2. `02-COLOR-SYSTEM.md`
3. `03-TYPOGRAPHY.md`
4. `04-GRID-SPACING-LAYOUT.md`
5. `05-COMPONENT-SYSTEM.md`
6. `06-IMAGERY-ASSET-SYSTEM.md`
7. `07-ICONOGRAPHY.md`
8. `08-MOTION-ANIMATION.md`
9. `09-3D-PODIUM.md`
10. `10-RESPONSIVE-SYSTEM.md`
11. `11-ACCESSIBILITY.md`
12. `12-PERFORMANCE.md`
13. `13-PAGE-TRANSITIONS.md`
14. Page-specific specifications
15. Admin UI specification
16. AI implementation rules

The visual reference process should continue alongside these documents when a design decision needs further exploration.

---

# 46. FINAL GOVERNING PRINCIPLE

The site should never look like an AI assembled a collection of attractive components.

It should feel like a **single institution designed intentionally from beginning to end**.

Every section should answer:

> Does this belong to Pak Debate Forum?
>
> Does this feel consistent with the established visual language?
>
> Does this help the visitor understand, trust, or engage with the organization?
>
> Does the motion have a purpose?
>
> Does this still work on mobile?
>
> Does it respect the real data and functionality behind the website?

If the answer is no, the component should be redesigned rather than patched.

**The goal is not a visually impressive homepage.**

**The goal is a complete, coherent, premium digital identity for Pak Debate Forum.**
