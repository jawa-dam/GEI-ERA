# GEI Provenance V1.0.12

The Provenance module records structured browser-local traceability events and exposes them through `/provenance/`.

Core files:
- `provenance-data.js` — vocabulary and module registry.
- `provenance-engine.js` — event capture, validation, inspection, and local storage.
- `provenance.schema.json` — JSON Schema for provenance events.
- `provenance.css` — responsive presentation styles.
- `index.html` — provenance inspection surface.

This module is intentionally non-authoritative. Production-grade audit evidence requires trusted server-side controls.
