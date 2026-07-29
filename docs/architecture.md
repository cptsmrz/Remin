# Remin — Architecture

## Overview

Remin is a full-stack Next.js application using the App Router pattern.

## Layers

```
┌─────────────────────────────────────────┐
│              Presentation               │
│         (App Router / React / UI)       │
├─────────────────────────────────────────┤
│             Application                 │
│     (Server Actions / API Routes)       │
├─────────────────────────────────────────┤
│               Domain                    │
│     (Types / Interfaces / Logic)        │
├─────────────────────────────────────────┤
│            Infrastructure               │
│   (Database / Storage / Integrations)   │
└─────────────────────────────────────────┘
```

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router pages and layouts |
| `components/` | Reusable UI components |
| `lib/` | Shared utilities, helpers, and configuration |
| `types/` | TypeScript type definitions and interfaces |
| `backend/` | Server-side logic, services, and data access |
| `frontend/` | Client-side hooks, state, and utilities |
| `public/` | Static assets |
| `docs/` | Documentation |
| `specs/` | Feature specifications |
| `prompts/` | AI prompt templates |
| `decisions/` | Architecture Decision Records |
| `experiments/` | Prototypes and experiments |
| `research/` | Research notes and references |

## Data Strategy

- **Static inventory** (items, fragrances, products): JSON/Markdown in Git.
- **Dynamic state** (wear counts, stock levels, journal): Database (TBD).
- **Sync layer**: Bidirectional sync between Git files and database.

## Integration Points (Future)

- AI Provider (recommendation engine)
- Weather API (daily context)
- Email service (daily briefing)
- Authentication (multi-user support)
- Calendar integration

---

*This document will be updated as the architecture solidifies.*
