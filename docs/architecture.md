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

---

# Layer 2 — Intelligence

Reasoning engines.

Can:

- Recommend
- Explain
- Predict
- Compare
- Summarize

Cannot permanently modify truth without explicit authorization.

Multiple AI providers may exist simultaneously.

---

# Layer 3 — Eywa

Executive orchestration.

Responsibilities:

- Understand user intent.
- Delegate work.
- Maintain conversation.
- Respect Remin philosophy.
- Protect user attention.

Eywa is an identity.

Not a language model.

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