# GEI-ERA MASTER BUILD CONTRACT

**Project:** Genesis Engineered Interpretations (GEI)  
**Repository:** `jawa-dam/GEI-ERA`  
**Current Release:** V0.9  
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

The visual language should combine deep-water atmosphere, engineering schematics / blueprint cues, precision panels, hydraulic flow motifs, subtle gear / machine references, academic typography and information hierarchy, and premium product presentation.

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

## SEO + Performance Requirements

Every production content page should support unique title, meta description, canonical URL, correct heading hierarchy, descriptive image alt text, Open Graph metadata, Twitter/X card metadata where useful, structured data where appropriate, descriptive internal links, human-readable URLs, sitemap, robots.txt, mobile-first performance, and useful human-oriented content.

V0.9 adds the public crawl layer (`sitemap.xml`, `robots.txt`), web manifest, 404 fallback, structured data, metadata hardening, and a deployment QA checklist. Do not claim live Core Web Vitals, Search Console verification, or PageSpeed scores until measured against the deployed site.

Do not use keyword stuffing or structured data to imply unsupported historical/scientific certainty.

## Content Architecture

Future content records should be able to carry ID, title, slug, description, content type, category, author, dates, version, status, tags, access level, price, sources, related content, media, SEO metadata, and provenance / audit references.

## Staged Releases

### V0.1 — Foundation

Completed: GEI Control Room homepage, primary navigation zones, responsive base layout, GEI design language, SEO metadata foundation, About / Method, Research, Academy, Laboratory, Library, Marketplace, Vault, and Contact sections.

### V0.2 — Interactive Control Room

Completed: dashboard interactions, animated hydraulic flow, expandable system modules, featured content, recent research, featured products, mobile navigation drawer, dashboard state handling, theme selection, keyboard support, and reduced-motion basics.

### V0.3 — Content Architecture

Completed: canonical reusable content schema, stable IDs/slugs, statuses and versions, access model, pricing fields, tags, source/related references, media, SEO metadata, provenance, and Content Explorer.

### V0.4 — GEI Academy

Foundation target: Levels 1–6, lessons, XP, progress, badges, certificates, researcher identity, and premium course access architecture. Implementation status must be verified before being represented as complete.

### V0.5 — GEI Research Engine

Completed in this release:

- Research repository interface.
- Papers and working papers.
- Evidence records.
- Source registration.
- Claims and interpretation fields.
- Provenance metadata.
- Audit-trail architecture.
- Genesis Chapter 1 chronology model.
- Master Chronology & Taxonomy record.
- Research search and filters.
- Record inspection.
- Review-state prototype.
- Local research-note prototype.
- Mobile/accessibility/SEO foundation.

### V0.6 — Commerce + Vault

Completed: product catalog, stable SKUs, provider-neutral checkout handoff, local development/demo entitlement model, and protected-access architecture. Real purchases require trusted server/payment verification.

### V0.7 — Laboratory

Completed: Dam / Mill simulator foundation, Water Lab, Word Detective, Genesis learning experiments, and local achievement/XP recording.

### V0.8 — Media

Completed: media metadata catalog, type filtering, media inspection viewer, recent selection state, and architecture for future binary assets, licensing, streaming, downloads, and Vault protection.

### V0.9 — SEO + Performance Hardening

Completed: public sitemap, robots policy, web manifest, 404 fallback, canonical/OG/Twitter metadata hardening, Schema.org page markup, accessibility reinforcement, dependency-light performance direction, and deployment QA checklist.

### V1.0 — GEI Platform

The complete public-facing GEI research, learning, publishing, laboratory, and commerce platform.

## Definition of Done for Every Release

A release is not complete until desktop and mobile layouts work, overflow is controlled, navigation works, interactive controls have visible states, accessibility basics are respected, SEO foundations remain intact, README/release notes reflect the current state, existing working features are not silently broken, and the change is committed with a clear versioned commit message.

## Change Control

Use small, auditable commits. Prefer feature branches and pull requests once the project becomes more complex. Do not replace major working systems wholesale when an incremental change is safer.

## Hostinger Compatibility

The GitHub build is the source-of-truth development environment. The final presentation must be portable to a Hostinger deployment/builder workflow without requiring the Hostinger editor to understand the full development process. Prefer standards-based HTML/CSS/JavaScript and portable assets.
