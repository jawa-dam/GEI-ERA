# GEI Progress Data Model

The Progress Center derives a read-oriented snapshot from existing GEI browser state.

```text
GEI Session
   ├── visitor identity
   ├── page views
   └── module visits

GEI Profile
   ├── display name
   └── persona

GEI Laboratory
   ├── runs
   ├── completed experiments
   └── existing Lab XP

GEI Research
   ├── review activity
   └── research notes

Academy
   └── optional adapter; no fabricated values
          ↓
   Unified Progress Snapshot
          ↓
   Achievements + Progress XP
```

The engine stores only its own achievement unlock timestamps. It does not overwrite Laboratory or Research state.
