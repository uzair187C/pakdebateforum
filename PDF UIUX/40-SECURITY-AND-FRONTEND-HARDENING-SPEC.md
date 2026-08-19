# PAK DEBATE FORUM (PDF) — 40 SECURITY & FRONTEND HARDENING SPECIFICATION

Status: Final implementation/security contract.
Authority: Final-stage engineering specification.
Scope: Public frontend, browser security, forms, API boundaries, assets, external content, deployment-facing frontend controls.

## 0. PURPOSE

This document completes the security layer of the PDF redesign without changing the existing product architecture.

The implementation must preserve the existing functional backbone:

```text
Visitor
  ↓
Frontend
  ↓
Worker/API
  ↓
D1 / approved data systems
  ↓
Admin / operational systems
```

The visual redesign must never weaken authentication, data separation, validation, or API boundaries.

This document is intentionally implementation-oriented. It defines what the frontend may trust, what it must validate, what it must never expose, and how the browser-facing layer should be hardened.

---

# 1. SOURCE-OF-TRUTH RELATIONSHIP

Read with:

- 00-DESIGN-MASTER.md
- 01-BRAND-IDENTITY.md
- 18-3D-PODIUM-SPEC.md
- 21-COMPONENT-SYSTEM-SPEC.md
- 26-PAGE-BY-PAGE-IMPLEMENTATION-MASTER.md
- 30-RESOURCES-PAGE-IMPLEMENTATION-SPEC.md
- 32-CONTACT-PAGE-IMPLEMENTATION-SPEC.md
- 33-GLOBAL-NAVIGATION-AND-HEADER-IMPLEMENTATION-SPEC.md
- 34-GLOBAL-FOOTER-IMPLEMENTATION-SPEC.md
- 35-GLOBAL-DESIGN-TOKENS-AND-VISUAL-SYSTEM.md
- 36-GLOBAL-COMPONENT-LIBRARY-AND-REUSABLE-UI-SPEC.md
- 37-SITE-WIDE-PAGE-ARCHITECTURE-AND-ROUTE-SYSTEM.md
- 38-HOMEPAGE-LANDING-PAGE-MASTER-SPECIFICATION.md
- 39-ABOUT-PAGE-MASTER-SPECIFICATION.md

Higher-level product/content contracts remain authoritative for actual data and functionality.

---

# 2. SECURITY PRINCIPLE

The frontend is an untrusted environment.

Never assume:

```text
hidden field = secure
disabled button = secure
client validation = secure
obfuscated value = secret
private route in UI = private
```

Security-sensitive decisions belong at the API/server boundary.

---

# 3. NO SECRETS IN CLIENT CODE

Never expose:

- API secrets
- private tokens
- database credentials
- JWT signing secrets
- admin credentials
- service-account keys
- private third-party credentials

Anything shipped to the browser must be treated as public.

---

# 4. ENVIRONMENT VARIABLES

Public environment variables may contain only values intentionally safe for browser exposure.

Server-only variables must remain server-side.

The build process must not accidentally bundle server secrets.

---

# 5. ADMIN SEPARATION

The public website and admin system must remain logically separate.

Public users must never receive:

- admin tokens
- admin API capabilities
- admin-only data
- admin endpoint details beyond what is necessary for normal operation

---

# 6. AUTHENTICATION

Authentication must be enforced server-side.

A frontend route guard is UX, not authorization.

---

# 7. AUTHORIZATION

Every privileged API operation must independently verify authorization.

Never trust:

```text
role
userId
permission
resource ownership
```

when supplied only by the browser.

---

# 8. JWT / SESSION HANDLING

If the existing application uses JWT authentication:

- keep signing/verification server-side
- validate expiry
- validate issuer/audience where applicable
- avoid exposing tokens unnecessarily
- use secure cookie practices if cookies are used
- never place long-lived privileged tokens in source code

Do not replace an existing secure auth architecture merely for visual redesign.

---

# 9. PUBLIC DATA

Only expose fields that are intentionally public.

For entities such as:

```text
events
programs
resources
coaches/team
results
```

return only the fields required by the public experience.

---

# 10. PRIVATE DATA

Never render or expose:

- internal admin notes
- unpublished records
- private contact information
- internal moderation information
- credentials
- database implementation secrets

---

# 11. FORM SECURITY

Applies to:

- Registration
- Feedback
- Contact
- Search where applicable
- Any future public form

Client validation improves UX.

Server validation provides security.

Both are required.

---

# 12. INPUT VALIDATION

Validate:

- required fields
- type
- length
- allowed values
- formats
- relationships
- expected identifiers

Reject unexpected input server-side.

---

# 13. INPUT LENGTH

Use sensible maximum lengths.

Prevent extremely large submissions from becoming accidental resource-exhaustion vectors.

---

# 14. OUTPUT ENCODING

Never insert untrusted user content into HTML without appropriate escaping/sanitization.

Prefer framework-safe rendering.

---

# 15. HTML IN USER CONTENT

Do not allow arbitrary HTML in ordinary user-submitted fields.

If rich text is intentionally supported, sanitize it with a proven server-side strategy.

---

# 16. XSS

Protect against reflected, stored, and DOM-based XSS.

High-risk sources include:

- query strings
- form submissions
- resource metadata
- event descriptions
- imported content
- URL parameters
- third-party embeds

---

# 17. URL PARAMETERS

Treat route parameters as untrusted input.

Do not concatenate arbitrary route values into HTML or unsafe requests.

---

# 18. OPEN REDIRECTS

Do not allow user-controlled URLs to redirect visitors to arbitrary destinations unless the destination is explicitly validated.

---

# 19. EXTERNAL LINKS

External links should be controlled by trusted content.

Where a new tab is intentionally used, apply appropriate `noopener` behavior.

---

# 20. EXTERNAL EMBEDS

Avoid third-party embeds unless they provide meaningful product value.

Review:

- origin
- permissions
- tracking
- performance
- privacy
- sandboxing requirements

---

# 21. IFRAME POLICY

If an iframe is required, use the narrowest possible permissions and sandbox configuration compatible with the feature.

---

# 22. CONTENT SECURITY POLICY

Where deployment architecture permits, establish a restrictive CSP.

Conceptually control:

```text
default-src
script-src
style-src
img-src
font-src
connect-src
frame-src
media-src
object-src
base-uri
form-action
```

Do not blindly copy a CSP from another project. It must match actual assets, APIs, fonts, and embeds.

---

# 23. CSP DEVELOPMENT

Use report-only testing before enforcing a new CSP where appropriate.

Identify legitimate dependencies before blocking them.

---

# 24. SECURITY HEADERS

Where supported by the hosting/deployment layer, evaluate:

- Content-Security-Policy
- Referrer-Policy
- X-Content-Type-Options
- Permissions-Policy
- frame-ancestors / clickjacking protection

Do not add headers that break legitimate product behavior.

---

# 25. CLICKJACKING

Sensitive forms/admin surfaces should not be frameable by arbitrary origins.

---

# 26. REFERRER POLICY

Use a privacy-conscious referrer policy appropriate for the public website.

---

# 27. MIME / CONTENT SNIFFING

Use appropriate content types and `X-Content-Type-Options: nosniff` where supported.

---

# 28. PERMISSIONS POLICY

Disable browser capabilities the website does not need.

Do not request:

- camera
- microphone
- geolocation
- sensors

unless an actual approved feature requires them.

---

# 29. STORAGE

Do not store secrets in:

```text
localStorage
sessionStorage
IndexedDB
```

If sensitive authentication state must persist, follow the approved secure session strategy.

---

# 30. LOCAL STORAGE

Only store non-sensitive preferences when necessary.

Examples:

- reduced-motion preference if not already handled by CSS
- UI preference
- dismissed non-sensitive notice

---

# 31. COOKIES

If cookies are used:

- use appropriate `Secure`
- use appropriate `HttpOnly` for server-managed secrets
- use `SameSite`
- define appropriate scope
- avoid storing unnecessary personal data

---

# 32. CSRF

For cookie-authenticated state-changing operations, implement an appropriate CSRF defense.

Do not assume `SameSite` alone is universally sufficient for every architecture.

---

# 33. CORS

CORS should be explicit.

Do not use unrestricted wildcard origins for privileged APIs.

---

# 34. API BOUNDARIES

The browser should call documented public endpoints only.

Do not let the frontend depend on undocumented admin endpoints.

---

# 35. HTTP METHODS

Use semantically appropriate methods.

State-changing operations must not be performed through ordinary GET requests.

---

# 36. RATE LIMITING

Rate limiting belongs primarily at the API/edge layer.

Especially consider:

- registration
- feedback
- contact
- authentication
- search
- resource download endpoints

---

# 37. BOT / SPAM PROTECTION

Public forms should have a spam strategy appropriate to the deployment.

Possible mechanisms depend on the existing stack.

Do not add invasive CAPTCHA merely because it is available.

---

# 38. FORM DUPLICATION

Where duplicate registrations/submissions matter, server-side duplicate detection should exist.

Never rely solely on disabling the submit button.

---

# 39. SUBMISSION UX

After submit:

```text
idle
→ submitting
→ success OR error
```

The UI must not reveal sensitive server details in errors.

---

# 40. ERROR MESSAGES

Public errors should be useful but generic.

Good:

```text
We couldn't submit this form right now. Please try again.
```

Avoid:

```text
D1 insert failed: SQLITE_CONSTRAINT...
```

---

# 41. LOGGING

Do not log sensitive form content unnecessarily.

Avoid logging:

- passwords
- auth tokens
- private messages in full
- secrets

---

# 42. ERROR TELEMETRY

If error monitoring is used, scrub sensitive values before transmission.

---

# 43. RESOURCE UPLOADS

If resources are uploaded through an admin system:

- validate file type server-side
- validate file size
- validate filename
- generate safe storage names
- avoid executing uploaded content
- serve with appropriate content types

---

# 44. FILE NAMES

Never trust an uploaded filename as a storage path.

Prevent path traversal.

---

# 45. PATH TRAVERSAL

Reject unsafe path sequences and never construct filesystem paths directly from untrusted user input.

---

# 46. SVG

Treat uploaded SVGs cautiously because SVG can contain script-capable content.

Only allow trusted/sanitized SVG assets.

---

# 47. IMAGE PROCESSING

Where images are processed:

- enforce size limits
- validate actual file type
- avoid decompression/resource-exhaustion attacks
- generate optimized derivatives where appropriate

---

# 48. PDF/DOCUMENT ASSETS

Public documents should be intentionally published.

Do not expose private storage paths simply because a file URL exists.

---

# 49. RESOURCE DOWNLOADS

If downloads are public, verify that the requested resource is publicly publishable.

---

# 50. IMAGE HOTLINKING

No special protection is required unless bandwidth abuse becomes a real concern.

Do not introduce complexity without a problem.

---

# 51. THIRD-PARTY SCRIPTS

Every external script should have a reason.

Minimize:

```text
analytics
widgets
fonts
embeds
```

---

# 52. THIRD-PARTY TRUST

Treat external JavaScript as privileged code.

Use official, maintained sources.

---

# 53. ANALYTICS

Analytics must not capture:

- form message bodies
- passwords
- private user content
- unnecessary personally identifiable information

---

# 54. QUERY STRING PRIVACY

Do not put sensitive values in URLs.

---

# 55. SEARCH PRIVACY

Search queries may be analytics-worthy, but do not transmit private form content as search events.

---

# 56. REGISTRATION PRIVACY

Registration data must not be rendered in public HTML, public API responses, or client-side debug objects.

---

# 57. CONTACT PRIVACY

Contact submissions remain server-side data.

---

# 58. ADMIN UI

Admin pages require:

- authentication
- authorization
- protected API calls
- no public indexing
- no public navigation
- safe error handling

---

# 59. ADMIN INDEXING

Admin routes should not be indexable.

But `robots.txt` is not an authorization mechanism.

---

# 60. ROBOTS

Robots directives help search engines; they do not secure private content.

---

# 61. SOURCE MAPS

Production source maps should follow the project's security/observability policy.

Do not publicly expose sensitive source information.

---

# 62. DEPENDENCY SECURITY

Keep dependencies maintained.

Before release:

```text
install
→ audit
→ review
→ build
→ test
```

Do not blindly auto-upgrade production dependencies immediately before launch.

---

# 63. PACKAGE MINIMIZATION

Remove unused dependencies.

Every dependency increases maintenance and security surface.

---

# 64. 3D / WEBGL SECURITY

The podium implementation must not download arbitrary shaders, models, or scripts from uncontrolled sources.

Use approved static assets.

---

# 65. WEBGL FAILURE

Security or browser restrictions may prevent WebGL.

The site must have a non-WebGL fallback.

---

# 66. PODIUM ASSET FALLBACK

Preferred hierarchy:

```text
interactive 3D
↓
optimized static render
↓
poster image
↓
dark branded fallback
```

The content remains accessible at every level.

---

# 67. CANONICAL ASSET SOURCES

Use known local/CDN asset paths.

Avoid user-controlled asset URLs.

---

# 68. FONT SECURITY

Load fonts from trusted approved sources.

Avoid dynamically constructing arbitrary font URLs from user data.

---

# 69. NAVIGATION SECURITY

Navigation labels/URLs should come from trusted configuration/content.

Do not render arbitrary HTML as navigation.

---

# 70. RICH TEXT

If CMS/resource descriptions support rich text, sanitize before public rendering.

---

# 71. MARKDOWN

If Markdown is rendered:

- sanitize generated HTML
- disable dangerous raw HTML unless explicitly needed
- restrict links/media where appropriate

---

# 72. EMBEDDED MEDIA

Whitelist approved providers if embedding external video/content.

---

# 73. URL SCHEMES

Accept only intended schemes.

Reject dangerous schemes such as script-capable protocols.

---

# 74. EMAIL LINKS

Mail links are allowed where intentionally published.

---

# 75. TELEPHONE LINKS

Telephone links are allowed for verified public numbers.

---

# 76. API RESPONSE SHAPE

Public APIs should return predictable, minimal schemas.

Do not return database rows blindly.

---

# 77. ID EXPOSURE

Public IDs are not automatically secrets.

But avoid exposing internal identifiers that serve no product purpose.

---

# 78. ENUM VALIDATION

Statuses/categories received from APIs should be validated before visual mapping.

Unknown values should have safe fallback rendering.

---

# 79. DATA INTEGRITY

The frontend must not assume:

```text
image exists
title is short
description exists
status is known
date is valid
```

Handle malformed content gracefully.

---

# 80. SECURITY VS DESIGN

Security requirements override visual convenience.

Never weaken a security control because it makes a UI animation easier.

---

# 81. DEPLOYMENT

Before production:

```text
build
→ inspect environment variables
→ verify public/private boundaries
→ test headers
→ test forms
→ test auth
→ test direct routes
→ test error states
→ test asset loading
```

---

# 82. PRODUCTION CHECKLIST

```text
[ ] no secrets in client bundle
[ ] admin protected
[ ] forms server-validated
[ ] public APIs minimized
[ ] CSP reviewed
[ ] security headers reviewed
[ ] CORS reviewed
[ ] rate limiting reviewed
[ ] upload validation reviewed
[ ] error messages sanitized
[ ] analytics privacy reviewed
[ ] dependencies reviewed
[ ] 3D fallback tested
[ ] private data absent from public responses
```

---

# 83. FINAL SECURITY PRINCIPLE

The premium frontend is only successful if the underlying product remains trustworthy.

The design may be cinematic.

The security architecture must remain boring, explicit, and dependable.

# END OF SECURITY & FRONTEND HARDENING SPECIFICATION
