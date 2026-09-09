# GEI-ERA MASTER BUILD CONTRACT

**Project:** Genesis Engineered Interpretations (GEI)  
**Repository:** `jawa-dam/GEI-ERA`  
**Current Release:** V0.3  
**Canonical development branch:** `main`

## Mission

Build a professional, mobile-first, academically impressive, water-and-engineering-inspired digital platform for Genesis Engineered Interpretations. The platform must support public education, research publication, interactive learning, premium digital content, commerce, and future membership systems.

## Core Experience

The Home page is the **GEI Control Room**. It is the visual and navigational hub for the entire ecosystem.

### Core metaphor

`Mountain → Water → Dam → Gates → Gears → Knowledge`

This metaphor should inform visuals, animations, terminology, and interactions without making the interface confusing or gimmicky.

## Primary Zones

1. **Explore** — Genesis interpretation and interactive experiences.
2. **Academy** — Courses, lessons, XP, badges, certificates, researcher progression.
3. **Research** — Papers, evidence, datasets, sources, provenance, chronology, taxonomy, peer review.
4. **Laboratory** — Games, simulations, experiments, and interactive learning.
5. **Library** — Ebooks, books, guides, audio, video, images, and publications.
6. **Marketplace** — Digital products, premium unlocks, courses, and branded merchandise.
7. **Vault** — Access-controlled premium knowledge and experiences.
8. **About / Method** — Mission, methodology, terminology, research philosophy, and project history.
9. **Contact** — Research, education, partnership, media, and customer contact.

## Design System

Use the established GEI palette as a starting point:

- Near black: `#06070D`
- Cyan: `#2FD2FF`
- Indigo: `#3D3DEA`
- Magenta: `#F310BA`
- Pink: `#FF9DF2`

The visual language should combine:

- Deep-water atmosphere
- Engineering schematics / blueprint cues
- Precision panels
- Hydraulic flow motifs
- Subtle gear / machine references
- Academic typography and information hierarchy
- Premium product presentation

Avoid making the site look like a generic gaming site, generic church site, or generic ecommerce template.

## Engineering Requirements

All stages must preserve:

- Responsive behavior from small mobile screens through desktop.
- Semantic HTML.
- Accessible controls and contrast.
- Keyboard-friendly navigation.
- Reduced-motion considerations.
- Fast initial rendering.
- No unnecessary external dependencies.
- Clean, readable source code.
- Reusable components/patterns.
- Clear separation of content, presentation, and future commerce logic.

## SEO Requirements

SEO is part of the architecture from the beginning so the finished site can be adapted cleanly to Hostinger.

Every production content page should eventually support:

- Unique `<title>`
- Unique meta description
- Canonical URL
- Correct heading hierarchy
- Descriptive image alt text
- Open Graph metadata
- Twitter/X card metadata where useful
- Structured data / Schema.org where appropriate
- Descriptive internal links
- Human-readable URLs
- XML sitemap
- robots.txt
- Breadcrumbs where useful
- Mobile-first performance
- Search-friendly content that remains useful to humans

Do not use keyword stuffing.

## Content Architecture

Future content records should be able to carry:

- ID
- Title
- Slug
- Description
- Content type
- Category
- Author
- Date created
- Date updated
- Version
- Status
- Tags
- Free / premium access level
- Price when applicable
- Sources
- Related content
- Media assets
- SEO metadata
- Provenance / audit references

## Commerce Architecture

Commerce should be designed so digital products can later include:

- One-time purchase
- Page/content unlock
- Course purchase
- Ebook purchase
- Game purchase
- Media purchase
- Download entitlement
- Future membership entitlement

The UI should not hard-code a specific payment provider into the content layer.

## Staged Releases

### V0.1 — Foundation

Completed:

- GEI Control Room homepage
- Primary navigation zones
- Responsive base layout
- GEI design language
- SEO metadata foundation
- About / Method section
- Research section
- Academy section
- Laboratory section
- Library section
- Marketplace section
- Vault section
- Contact section

### V0.2 — Interactive Control Room

Completed:

- True dashboard interactions
- Animated hydraulic flow
- Expandable system modules
- Featured content modules
- Recent research panel
- Featured products panel
- Mobile navigation drawer
- Dashboard state handling
- Dark / Light / System theme selection
- Keyboard and reduced-motion basics

### V0.3 — Content Architecture

Completed:

- Canonical reusable content schema
- Research, lesson, guide, product, media, and future content types
- Stable IDs and slugs
- Status and version fields
- Free / premium / unlocked / member access model
- Pricing fields without payment-provider coupling
- Tags and categories
- Source and related-content references
- Media references
- SEO metadata fields
- Provenance and audit references
- Interactive Content Explorer
- Search foundation
- Content-type filters
- Reusable content cards
- Content detail inspection template

### V0.4 — GEI Academy

Target:

- Levels 1–6
- Lessons
- XP
- Progress
- Badges
- Certificates
- Researcher identity
- Premium course access

### V0.5 — GEI Research

Target:

- Research repository integration
- Papers
- Working papers
- Evidence records
- Sources
- Provenance
- Audit trail
- Chronology
- Taxonomy
- Peer-review workflow

### V0.6 — Commerce + Vault

Target:

- Product catalog
- Premium unlocks
- Entitlements
- Checkout integration
- Purchase confirmation
- Protected content model

### V0.7 — Laboratory

Target:

- Dam / Mill simulator
- Water lab
- Word Detective
- Genesis learning games
- Achievement integration

### V0.8 — Media

Target:

- Image experiences
- Video experiences
- Audio
- Interactive books
- Media licensing / download controls as appropriate

### V0.9 — SEO + Performance Hardening

Target:

- Full metadata audit
- Schema audit
- Sitemap
- robots.txt
- Core Web Vitals-oriented optimization
- Accessibility pass
- Mobile QA
- Link integrity

### V1.0 — GEI Platform

The complete public-facing GEI research, learning, publishing, laboratory, and commerce platform.

## Definition of Done for Every Release

A release is not complete until:

1. Desktop layout works.
2. Mobile layout works.
3. No obvious overflow or broken framing exists.
4. Navigation works.
5. Interactive controls have visible states.
6. Accessibility basics are respected.
7. SEO foundations remain intact.
8. The README and release notes reflect the current state.
9. No existing working feature is silently broken.
10. The change is committed with a clear versioned commit message.

## Change Control

Use small, auditable commits. Prefer feature branches and pull requests once the project becomes more complex. Do not replace major working systems wholesale when an incremental change is safer.

## Hostinger Compatibility

The GitHub build is the source-of-truth development environment. The final presentation must be portable to a Hostinger deployment/builder workflow without requiring the Hostinger editor to understand the full development process.

Prefer standards-based HTML/CSS/JavaScript and portable assets.
