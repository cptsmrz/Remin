# Remin — Architecture

## Design Philosophy

Remin separates facts, reasoning, and interaction.

AI models may change.

The architecture should not.

---

# Layer 1 — Truth

The canonical state of Remin.

Responsible for:

- Inventory
- Calendar state
- Preferences
- Relationships
- History
- Events
- Feedback

The database stores facts.

Never opinions.

### Truth Storage

Truth may exist across multiple storage technologies, each with a distinct responsibility.

| Storage Layer                        | Responsibility                                                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Runtime Storage                      | Operational facts, events, projections, and current application state                                              |
| Versioned Knowledge Repository (Git) | Long-lived knowledge, documentation, inventory definitions, specifications, and other version-controlled artifacts |

Operational storage exists to support the running application.

The Versioned Knowledge Repository exists to preserve knowledge over time.

Synchronization moves information between these layers according to the architectural rules defined by Remin.

---

# Layer 2 — Reasoning

Reasoning engines.

Can:

- Recommend
- Explain
- Predict
- Compare
- Summarize

Cannot permanently modify truth without explicit authorization.

Multiple AI providers may exist simultaneously.

The Decision Engine may utilize one or more AI providers to perform reasoning.

---

# Layer 3 — Eywa

Executive governance and orchestration.

Responsibilities:

- Understand user intent.
- Coordinate modules.
- Delegate reasoning.
- Protect user attention.
- Enforce architectural principles.
- Maintain conversation continuity.

Eywa governs the system.

The Decision Engine performs reasoning.

AI providers perform inference.

---

# Layer 4 — Modules

Independent systems.

Examples:

- Orbit
- Argus
- Weave
- Prism
- Loom
- Mirin
- Remira
- Fyodor

Each module owns exactly one domain.

Every module has a Capability Contract.

---

# Layer 5 — Interface

How the user interacts with Remin.

Possible interfaces include:

- Web
- Mobile
- CLI
- Voice
- Future interfaces

The interface should never contain business logic.

---

## Architectural Rules

1. Facts never originate from AI.

2. AI reasons over facts.

3. Every autonomous action is auditable.

4. Every module has one responsibility.

5. Every recommendation is explainable.

6. The user remains the final authority.

7. AI providers are interchangeable.

---

This document defines the architecture.

Implementation details belong elsewhere.

---

## Related Documents

- philosophy.md
- domains.md
- request-lifecycle.md
- eywa.md
- module-contracts/README.md
- glossary.md
