# ADR-0003 — Git as a Versioned Knowledge Repository

## Status

Accepted

---

## Context

Remin manages long-lived personal knowledge, including inventory, specifications, notes, prompts, and other user-owned information.

This information evolves over time and benefits from version history, change tracking, collaboration, and recovery capabilities.

Traditional databases provide efficient storage but do not inherently preserve human-readable history or support distributed version control.

---

## Decision

Remin adopts Git as its **Versioned Knowledge Repository**.

Git is the authoritative source for long-lived knowledge artifacts such as inventory definitions, documentation, specifications, prompts, architecture decisions, and other human-readable assets.

Git is **not** the operational data store for runtime application state.

Operational information—including event streams, caches, temporary state, usage metrics, and other rapidly changing data—is managed by dedicated runtime storage and synchronized with the knowledge repository when appropriate.

The synchronization strategy determines which information is persisted to Git based on its long-term value rather than its frequency of change.

---

### Repository Responsibilities

Git is responsible for preserving knowledge.

Examples include:

* Inventory definitions
* Documentation
* Architecture Decision Records (ADRs)
* Feature specifications
* Prompt templates
* Configuration intended for version control

Git is not responsible for storing:

* Runtime events
* Temporary application state
* High-frequency synchronization data
* Session information
* Performance caches

These forms of operational data belong to the runtime layer and may be projected into Git only when they become meaningful knowledge.

## Principles

### Version Everything

Knowledge should evolve through versioned changes rather than silent replacement.

### Human Readability

Whenever practical, files should remain understandable without proprietary tooling.

### Provider Independence

Git repositories should remain usable regardless of whether they are hosted on GitHub, GitLab, a local server, or another compatible platform.

### Separation of Responsibilities

Git preserves history and knowledge.

Operational databases optimize application performance and querying.

Neither replaces the other.

---

## Consequences

### Positive

* Complete version history.
* Easy rollback.
* Human-readable changes.
* Distributed backups.
* Strong developer workflow.
* Long-term maintainability.

### Negative

* Merge conflicts require resolution.
* Large binary assets are less suitable.
* Synchronization between Git and operational data stores requires additional engineering.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

* Synchronization algorithms.
* Database technologies.
* Backup policies.
* Git hosting providers.
* Repository structure.

These decisions are documented separately.

---

## Related ADRs

* ADR-0001 — Online-Optimized, Offline-Compatible
* ADR-0002 — Data Ownership
* ADR-0008 — Synchronization Strategy *(planned)*

---

## Rationale

Git is selected because it provides durable, transparent, and portable version control for knowledge that evolves over time.

The user's information remains inspectable, recoverable, and independent of any single service or vendor.

---

## Closing Statement

Knowledge should not only be stored.

It should have a memory.