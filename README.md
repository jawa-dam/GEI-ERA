# GEI-ERA

## Genesis Engineered Interpretations — Enterprise Research & Academy Platform

GEI-ERA is the canonical website foundation for Genesis Engineered Interpretations (GEI).

The repository is designed to evolve into a professional, SEO-ready digital platform combining:

- GEI Control Room dashboard
- GEI Academy
- GEI Research
- Interactive Laboratory
- GEI Library / Publishing
- Premium Vault / access control
- Marketplace and digital commerce
- Media experiences
- Branded merchandise
- Future membership and credential systems

## Current Release — V1.0.2

**V1.0.2 — Shared Identity & Session Layer** adds a persistent anonymous visitor identity and local session interface across the integrated GEI platform surfaces.

### V1.0.2 delivered

- Shared session API at `platform/platform-session.js`.
- Persistent anonymous visitor and local session identifiers.
- Session timestamps, page views, current-module state, and module visit counts.
- Optional sanitized display name.
- Self-selected `visitor`, `learner`, or `researcher` persona.
- Shared session events and Platform Core navigation integration.
- Platform Hub session initialization and visitor indicator.
- Migration-safe normalization of stored local state.
- Explicit non-authoritative identity and security boundaries.

### Identity integrity boundary

V1.0.2 is **not authentication** and does not establish verified identity, authorization, payment verification, or researcher credentials. Browser localStorage is convenience state only and must never be treated as proof of identity or payment.

The V1.0.2 interface is intentionally ready for a future secure server-backed identity layer.

## Research Integrity Principle

GEI research records distinguish source material, observations/evidence, claims, interpretations, review state, and provenance. The system documents a research framework; record structure alone does not establish that an interpretation is historically or scientifically proven.

## Design Language

**Mountain → Water → Dam → Gates → Gears → Knowledge**

The site should feel like an interdisciplinary research institution and engineering laboratory while remaining approachable and commercially useful.

## Release Path

- V0.1 — Foundation / Control Room
- V0.2 — Interactive Control Room
- V0.3 — Content Architecture
- V0.4 — GEI Academy
- V0.5 — GEI Research Engine
- V0.6 — Commerce / Vault
- V0.7 — Laboratory / Games
- V0.8 — Media
- V0.9 — SEO / Performance Hardening
- V1.0 — GEI Platform Core
- V1.0.1 — Unified Navigation & Module Integration
- **V1.0.2 — Shared Identity & Session Layer (current)**

## Next

V1.0.3 should focus on browser verification and a future-ready session/profile presentation layer before introducing any trusted server-backed identity or authentication.
