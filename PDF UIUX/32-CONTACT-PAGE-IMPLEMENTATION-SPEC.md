# PAK DEBATE FORUM (PDF) — 32 CONTACT PAGE IMPLEMENTATION SPECIFICATION

Status: Dedicated Contact / Connection experience implementation contract.

Purpose:
Define the Contact experience as a clear, trustworthy, premium pathway for people who need to reach Pak Debate Forum (PDF).

The Contact experience must feel:
- welcoming
- direct
- professional
- human
- calm
- premium
- easy to use

It must NOT feel like:
- a generic SaaS contact template
- a giant form demanding unnecessary information
- a support-ticket dashboard
- a cold corporate wall
- a decorative page where the actual contact method is difficult to find

This specification governs:
- contact page narrative
- contact methods
- form architecture
- inquiry types
- validation
- success/error states
- spam protection
- accessibility
- responsive behavior
- motion
- SEO
- privacy expectations
- component architecture
- data handling
- QA

Use with the global PDF design system and all previous specifications.

---

# 1. CONTACT ROLE IN THE PDF ECOSYSTEM

The ecosystem now reads:

```text
Homepage  = identity / invitation
About     = meaning / trust
Events    = participation
Academy   = development
Resources = knowledge
Contact   = connection
```

The Contact page answers:

```text
How can I reach PDF?
Who should I contact?
What should I contact PDF about?
What happens after I submit?
```

---

# 2. PRIMARY PRINCIPLE

Contact must minimize uncertainty.

The visitor should understand within seconds:

```text
where to contact
what channel to use
what information to provide
what happens next
```

---

# 3. CONTACT PAGE NARRATIVE

Recommended:

```text
HEADER
↓
CONTACT HERO
↓
DIRECT CONTACT OPTIONS
↓
CONTACT FORM
↓
ADDITIONAL INFORMATION
↓
FAQ / EXPECTATIONS IF NEEDED
↓
FINAL CTA
↓
FOOTER
```

Do not include sections that do not solve a real contact need.

---

# 4. CONTACT HERO

Recommended hierarchy:

```text
eyebrow
H1
short welcoming statement
```

Potential conceptual tone:

```text
Let's talk.
Have a question, partnership idea, event inquiry, or something else?
```

Use approved final copy.

---

# 5. HERO VISUAL

Contact should be quieter than the homepage.

Possible:
- subtle stage geometry
- editorial photograph
- abstract gold line
- restrained dark texture

Do not use a giant decorative object if it pushes the form below the fold unnecessarily.

---

# 6. DIRECT CONTACT OPTIONS

If verified channels exist, show them before or beside the form.

Potential:

```text
Email
Phone
Social
Office/location
```

Only display actual public channels.

---

# 7. CONTACT CHANNEL CARDS

Each channel should communicate:

```text
channel
purpose
actual contact action
```

Example:

```text
General inquiries
email@domain
```

Do not create fake addresses.

---

# 8. EMAIL

Email links should use proper mailto semantics where appropriate.

Display the address in readable text.

---

# 9. PHONE

If a public phone number exists:

use a tap-to-call link on mobile.

---

# 10. SOCIAL

Only show verified official social profiles.

External links should be clearly recognizable.

---

# 11. LOCATION

If PDF has a public location:

show it only when it is appropriate to publish.

Do not expose private residential or sensitive addresses.

---

# 12. MAP

A map should only be used if:
- a public physical location matters
- the location is verified
- it genuinely helps visitors

Do not add a map purely for visual decoration.

---

# 13. MAP MOBILE

If a map exists:
- responsive width
- sensible height
- no horizontal overflow
- accessible fallback address

---

# 14. CONTACT FORM PURPOSE

The form exists to route legitimate inquiries efficiently.

It should not ask for information simply because a CRM can store it.

---

# 15. FORM MINIMUM

Recommended conceptual fields:

```text
Name
Email
Inquiry type
Message
```

Additional fields require a real product/business reason.

---

# 16. OPTIONAL ORGANIZATION FIELD

If institutional inquiries are common:

```text
Organization
```

may be included.

Do not make it mandatory without reason.

---

# 17. PHONE FIELD

Only request phone when it is genuinely needed.

Do not make it mandatory by default.

---

# 18. INQUIRY TYPE

If routing benefits from categorization:

possible categories may include:

```text
General inquiry
Events
Academy
Partnership
Media
Volunteering
Other
```

Only use categories supported by actual PDF operations.

---

# 19. INQUIRY TYPE UX

Use a native/select or accessible custom control.

The selected state must be obvious.

---

# 20. MESSAGE

Message field should provide enough space for meaningful context.

---

# 21. MESSAGE PLACEHOLDER

Placeholder should guide, not become the field label.

Example conceptual guidance:

```text
Tell us how we can help.
```

The visible label remains present.

---

# 22. REQUIRED FIELDS

Only genuinely required fields should be marked required.

---

# 23. FIELD LABELS

Every input requires an explicit accessible label.

Do not rely solely on placeholders.

---

# 24. FIELD HELP TEXT

Use concise helper text where it prevents confusion.

---

# 25. VALIDATION

Validate:
- required fields
- email format
- message length where needed
- allowed values
- security constraints

---

# 26. VALIDATION TIMING

Avoid aggressive validation while the user is typing.

Prefer:
- on blur
- on submit
- clear recovery

---

# 27. EMAIL VALIDATION

Check reasonable email structure.

Do not reject legitimate addresses using overly restrictive regex.

---

# 28. MESSAGE LENGTH

If limits exist:

tell the user before they exceed them.

Do not impose arbitrary tiny limits.

---

# 29. FIELD ERROR

Error should appear near the relevant field.

Use:
- clear text
- visual state
- accessible association

Do not rely on red color alone.

---

# 30. FORM ERROR SUMMARY

For multiple errors:

provide a useful summary or move focus appropriately.

---

# 31. SUBMIT BUTTON

Use one clear primary action.

Potential:

```text
Send Message
Submit Inquiry
```

Use approved product language.

---

# 32. SUBMIT LOADING

During submission:

```text
disabled
loading indication
no duplicate submissions
```

The user should understand the form is processing.

---

# 33. SUCCESS STATE

After successful submission:

clearly communicate:

```text
Message received.
What happens next.
```

Do not merely remove the form.

---

# 34. SUCCESS CONTENT

If a response expectation exists, state it accurately.

Never promise a response time that PDF cannot guarantee.

---

# 35. SUCCESS ACTION

Optional:

```text
Back to Home
Explore Events
Explore Academy
```

Use one or two relevant actions.

---

# 36. FAILURE STATE

If submission fails:

explain that the message was not confirmed.

Provide:
- retry
- alternate contact method where available

---

# 37. NETWORK FAILURE

Do not lose the user's message unnecessarily.

Preserve form state when technically safe.

---

# 38. SERVER FAILURE

Do not expose:
- stack traces
- database errors
- API URLs
- internal IDs

---

# 39. SPAM PROTECTION

Use appropriate server-side spam controls.

Possible mechanisms:
- rate limiting
- honeypot
- CAPTCHA/turnstile if justified
- server validation

Do not rely solely on client-side protection.

---

# 40. RATE LIMITING

Protect contact endpoints from repeated automated submissions.

---

# 41. DUPLICATE SUBMISSION

Prevent accidental double-submit.

---

# 42. BOT DETECTION UX

Anti-spam systems should remain as invisible as possible to legitimate visitors.

---

# 43. PRIVACY

Tell users what happens to submitted information when appropriate.

Do not claim:
- "we never store your data"
- "we delete everything immediately"

unless the actual backend/process guarantees it.

---

# 44. PRIVACY LINK

If PDF has a privacy policy:

link to the real policy.

Do not invent a policy page.

---

# 45. CONSENT CHECKBOX

Only add consent when legally/product-wise necessary.

The wording must be approved.

---

# 46. NO UNNECESSARY DATA

Do not collect:
- CNIC
- passwords
- financial information
- sensitive personal information

through a generic contact form.

---

# 47. FILE UPLOADS

Only support attachments if there is a real requirement.

If enabled:
- restrict types
- restrict size
- validate server-side
- scan appropriately
- show limits before upload

---

# 48. ATTACHMENT UX

Clearly communicate:
- accepted types
- maximum size
- selected file
- remove action
- upload status

---

# 49. CONTACT ROUTING

Inquiry types may route to different internal recipients/workflows.

That routing should happen server-side.

Never expose internal recipient logic to the client.

---

# 50. EMAIL NOTIFICATION

If the system sends internal notifications:

use the established backend/email architecture.

Do not create a second mail pipeline without reason.

---

# 51. AUTOREPLY

If PDF sends an automated acknowledgement:

keep it concise and accurate.

---

# 52. AUTOREPLY CONTENT

It may include:
- confirmation
- submitted category
- next-step expectations
- official contact information

Do not promise guaranteed response timing.

---

# 53. FORM DATA MODEL

Conceptual:

```text
id
name
email
organization?
inquiryType
message
createdAt
status
```

Add fields only when required.

---

# 54. CONTACT RECORD STATUS

If stored internally, possible statuses:

```text
new
in progress
resolved
```

These are internal concepts and should not automatically become public UI.

---

# 55. ADMIN SEPARATION

Public Contact page and internal contact management must remain separate.

---

# 56. SECURITY

Server-side validation is mandatory.

Never trust:
- email
- inquiry type
- message
- URLs
- attachment metadata
from the browser.

---

# 57. INPUT SANITIZATION

Treat all submitted content as untrusted.

---

# 58. HTML INJECTION

Do not render submitted messages as raw HTML.

---

# 59. LOGGING

Avoid logging sensitive submitted content unnecessarily.

---

# 60. ERROR LOGGING

Internal logs may capture technical failures without exposing them publicly.

---

# 61. ACCESS CONTROL

Only authorized internal systems/users should access submitted contact records.

---

# 62. DATA RETENTION

Follow PDF's actual retention policy.

If none exists, do not invent a public promise.

---

# 63. DIRECT CONTACT VS FORM

Both can coexist.

The page should explain when direct email is preferable.

---

# 64. CONTACT ROUTING COPY

If categories exist:

short explanations can help visitors choose correctly.

Example:

```text
Partnerships
For collaboration and institutional opportunities.
```

Only use actual supported categories.

---

# 65. FORM LAYOUT DESKTOP

Preferred:

```text
left: context/direct contact
right: form
```

or

```text
top: direct options
bottom: centered form
```

Choose based on content density.

---

# 66. FORM WIDTH

Do not make the form full viewport width.

Constrain it for comfortable scanning.

---

# 67. DESKTOP FIELD GRID

Short fields may share a row:

```text
Name | Email
```

Long fields:

```text
Message
```

Do not squeeze fields unnecessarily.

---

# 68. MOBILE FORM

One field per row.

Touch targets must be comfortable.

---

# 69. MOBILE SUBMIT

Make the primary action easy to reach.

---

# 70. STICKY ACTION

Do not create a sticky submit bar unless the form is unusually long.

---

# 71. FORM SCROLL

Avoid automatically scrolling users around during normal typing.

---

# 72. CONTACT CARDS

Use shared card system.

Do not introduce a new card language.

---

# 73. ICONS

Use global icon system.

Potential:
- mail
- phone
- location
- social

---

# 74. ICON ACCESSIBILITY

Icons that communicate meaning require accessible labels.

Decorative icons should not be announced unnecessarily.

---

# 75. CONTACT HERO MOTION

Suggested:

```text
background
→ label
→ heading
→ statement
```

Short and restrained.

---

# 76. CONTACT OPTION REVEAL

Direct-contact cards can reveal subtly.

---

# 77. FORM REVEAL

Form may fade/slide into position.

Avoid delaying usability.

---

# 78. FIELD MOTION

Avoid animated labels that interfere with accessibility.

---

# 79. SUCCESS MOTION

A small confirmation transition is appropriate.

Do not use large celebratory effects for a contact submission.

---

# 80. ERROR MOTION

Use subtle emphasis only.

---

# 81. REDUCED MOTION

Disable/simplify:
- parallax
- decorative reveals
- animated confirmation
- continuous background effects

---

# 82. RESPONSIVE ARCHITECTURE

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

---

# 83. MOBILE PRIORITY

The visitor should see:

```text
contact purpose
direct channels
form
```

without excessive scrolling before understanding what to do.

---

# 84. TABLET

Two-column layouts may remain where comfortable.

---

# 85. DESKTOP

Use generous whitespace and strong form hierarchy.

---

# 86. WIDE DESKTOP

Constrain the main content.

Do not stretch the form across the entire screen.

---

# 87. TYPOGRAPHY

Use global PDF typography tokens.

Hierarchy:

```text
Contact H1
section heading
field label
body
helper text
error text
```

---

# 88. FORM TYPOGRAPHY

Labels must remain readable.

Placeholder text should not become too low contrast.

---

# 89. COLOR

Primary:

```text
near-black
charcoal
warm white
gold
```

Semantic states:
- success
- warning
- error

must follow accessible contrast requirements.

---

# 90. GOLD

Gold is appropriate for:
- primary CTA
- active field accents
- focus/selection where consistent

Do not make every field border gold.

---

# 91. INPUT SURFACES

Use dark charcoal input surfaces with clear boundaries.

---

# 92. INPUT BORDER

Default border should be subtle but visible.

---

# 93. INPUT FOCUS

Focus state must be obvious.

---

# 94. INPUT ERROR

Error state must communicate through:
- border/state
- text
- icon if useful

not color alone.

---

# 95. TEXTAREA

Provide sufficient default height.

Allow resizing where appropriate.

---

# 96. SELECT

Ensure selected value is readable.

---

# 97. CUSTOM SELECT

If custom:
- keyboard accessible
- screen-reader accessible
- Escape support
- arrow navigation
- focus management

Otherwise use a native select.

---

# 98. CHECKBOX

If used:
- sufficiently large target
- clear label
- keyboard support
- visible checked state

---

# 99. LINKS

Direct contact links must look interactive.

---

# 100. FOOTER

Reuse global PDF footer.

Do not create a Contact-only footer.

---

# 101. HEADER

Reuse global navigation/header.

---

# 102. ROUTING

Contact route should be stable and predictable.

---

# 103. SEO

Contact page should have:
- accurate title
- accurate description
- canonical URL
- approved social image

---

# 104. SEO CONTENT

Do not keyword-stuff.

Write naturally for people.

---

# 105. STRUCTURED DATA

Use only real organization/contact information.

Do not expose private information.

---

# 106. SOCIAL PREVIEW

Use approved PDF brand asset.

---

# 107. ACCESSIBILITY

Must support:
- semantic structure
- keyboard navigation
- visible focus
- labels
- errors
- success announcements
- reduced motion
- sufficient contrast

---

# 108. FORM ERROR ANNOUNCEMENT

Screen readers should be informed of submission/validation errors appropriately.

---

# 109. SUCCESS ANNOUNCEMENT

Successful submission should be programmatically announced.

---

# 110. FOCUS AFTER SUCCESS

Move focus logically to the success heading/message when appropriate.

---

# 111. FOCUS AFTER ERROR

Move focus to:
- summary
or
- first invalid field

depending on implementation.

---

# 112. TOUCH TARGETS

Interactive controls should have comfortable touch targets.

---

# 113. PERFORMANCE

Contact should be lightweight.

Avoid loading:
- unnecessary maps
- giant background videos
- heavy animation libraries
unless required.

---

# 114. MAP PERFORMANCE

If a map exists:
load it only when useful.

A static address fallback should remain available.

---

# 115. THIRD-PARTY SERVICES

Any CAPTCHA, map, analytics, or embed must be evaluated for performance/privacy impact.

---

# 116. FORM SUBMISSION PERFORMANCE

Show immediate feedback.

Do not leave users staring at an unresponsive button.

---

# 117. NETWORK RESILIENCE

Handle:
- offline
- slow connection
- timeout
- server error

gracefully.

---

# 118. NO DATA LOSS

Where feasible, preserve typed content after recoverable failures.

---

# 119. CONTACT PAGE VS ABOUT

About:
```text
institutional story
```

Contact:
```text
take action / communicate
```

Do not repeat the entire About story.

---

# 120. CONTACT PAGE VS EVENTS

Events should have event-specific inquiry/application pathways when appropriate.

Contact is for general communication unless the product explicitly routes otherwise.

---

# 121. CONTACT PAGE VS ACADEMY

Academy should handle learning/enrollment workflows where they exist.

Contact should not duplicate Academy forms.

---

# 122. CONTACT PAGE VS RESOURCES

Resources handles knowledge consumption.

Contact handles communication.

---

# 123. FINAL CTA

The final section may direct users toward the next meaningful PDF action.

Avoid generic:

```text
Ready to get started?
```

unless that wording genuinely fits the institution.

---

# 124. EMPTY DIRECT CHANNELS

If no public email/phone/location is available:

do not show empty cards.

Let the form become the primary contact mechanism if it actually works.

---

# 125. CONTACT FORM UNAVAILABLE

If form backend is not operational:

do not display a fake working form.

Use a verified alternate contact method or clear unavailable state.

---

# 126. FORM BACKEND HEALTH

The UI should not claim successful delivery merely because the browser request completed.

Success must correspond to the backend's actual accepted state.

---

# 127. EMAIL DELIVERY

If the backend accepts a message but email delivery can fail asynchronously, product language should reflect that appropriately.

---

# 128. RATE-LIMIT MESSAGE

If the user is rate-limited:

provide a calm explanation and alternate channel where appropriate.

Do not expose technical limits.

---

# 129. SECURITY MESSAGES

Avoid telling attackers exactly which anti-spam/security check failed.

---

# 130. CAPTCHA FAILURE

Allow retry without losing legitimate form content where possible.

---

# 131. FILE UPLOAD FAILURE

Identify the failed file and allow replacement.

---

# 132. MULTIPLE FILES

Only support multiple attachments if there is a real requirement.

---

# 133. FORM AUTOFILL

Use correct HTML autocomplete attributes.

Examples:
- name
- email
- organization
- tel

---

# 134. PASSWORD MANAGERS

Contact forms should not interfere with password managers/autofill unnecessarily.

---

# 135. MOBILE KEYBOARD

Use appropriate input types so the correct mobile keyboard appears.

---

# 136. EMAIL INPUT

Use email input semantics.

---

# 137. PHONE INPUT

Use telephone semantics if a phone field exists.

---

# 138. SUBMIT VIA ENTER

Single-line fields should behave naturally.

Textarea should preserve expected Enter behavior.

---

# 139. UNSAVED FORM

If navigation would discard substantial input, consider an appropriate warning only when justified.

Do not annoy users with warnings for trivial interactions.

---

# 140. CONTACT DETAILS COPY

Make email/phone easy to copy.

---

# 141. COPY BUTTON

If a copy-to-clipboard interaction exists:
- announce success
- provide fallback
- remain accessible

---

# 142. SOCIAL LINK TRACKING

Follow global analytics policy.

Do not inject hidden tracking parameters without architecture approval.

---

# 143. ANALYTICS

Useful events may include:
- contact page view
- form start
- form submit success
- form submit failure
- direct email click
- phone click

Only implement if analytics exists.

---

# 144. ANALYTICS PRIVACY

Do not send full message contents or sensitive fields to analytics.

---

# 145. CONTENT MODEL

Conceptual contact configuration:

```text
email
phone
socialLinks
location
inquiryTypes
formEnabled
privacyPolicyUrl
```

Only supported values.

---

# 146. SINGLE SOURCE OF TRUTH

Public contact information should come from one approved source where possible.

Avoid inconsistent email addresses across pages.

---

# 147. GLOBAL CONTACT DATA

If footer/header uses contact details, reuse the same source.

---

# 148. LINK VALIDATION

Regularly verify:
- email
- phone
- social
- map
- privacy
- internal CTA routes

---

# 149. NO DEAD LINKS

A premium site must not ship broken contact paths.

---

# 150. QA — FIRST IMPRESSION

Ask:

- Can I immediately tell how to contact PDF?
- Is the page welcoming?
- Is the form easy to understand?
- Are direct contact methods visible?

---

# 151. QA — FORM

Test:

```text
empty submit
invalid email
missing required field
long message
valid submission
duplicate click
network failure
server error
rate limit
```

---

# 152. QA — SUCCESS

Verify:
- success state
- message is not duplicated
- form cannot accidentally resubmit
- next action works

---

# 153. QA — ERROR

Verify:
- errors are understandable
- user input is preserved where possible
- focus behavior is correct
- retry works

---

# 154. QA — MOBILE

Verify:
- fields fit
- keyboard does not break layout
- buttons are tappable
- direct links work
- no horizontal overflow

---

# 155. QA — ACCESSIBILITY

Verify:
- keyboard-only completion
- screen-reader labels
- field errors
- success announcements
- focus visibility
- contrast
- reduced motion

---

# 156. QA — SECURITY

Verify:
- server-side validation
- rate limiting
- spam protection
- no sensitive logs
- no internal error leakage
- attachment validation if applicable

---

# 157. QA — PERFORMANCE

Verify:
- no unnecessary third-party loading
- form becomes interactive quickly
- map/video is not blocking initial render
- images are optimized

---

# 158. QA — RESPONSIVENESS

Test:

```text
small mobile
large mobile
tablet
laptop
desktop
wide desktop
```

---

# 159. QA — BRAND

Verify:
- PDF typography
- black foundation
- warm white
- restrained gold
- shared header
- shared footer
- shared button system
- consistent motion language

---

# 160. FINAL CONTACT PRINCIPLE

The Contact experience should leave the visitor thinking:

```text
I know exactly how to reach PDF.
I know what to tell them.
I trust the process.
I know what happens next.
```

It should be one of the simplest experiences on the site—not because it is visually unimportant, but because the design has removed unnecessary friction.

# END OF CONTACT PAGE IMPLEMENTATION SPECIFICATION
