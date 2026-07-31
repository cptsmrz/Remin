# ADR-0008 — Synchronization Strategy

## Status

Accepted

---

## Context

Remin stores information across multiple persistence layers, including version-controlled knowledge, operational databases, caches, and external services.

These systems will not always remain synchronized.

The architecture requires a predictable synchronization strategy that preserves data integrity while supporting both online and temporary offline operation.

---

## Decision

Remin adopts an asynchronous synchronization strategy between operational storage and the Versioned Knowledge Repository.

Synchronization is performed according to the type and purpose of the data being synchronized rather than treating all information equally.

Operational state is optimized for responsiveness and runtime behavior.

Knowledge artifacts are optimized for durability, versioning, collaboration, and long-term understanding.

Synchronization should preserve semantic meaning while avoiding unnecessary duplication between storage layers.

---

## Principles

### Storage Responsibilities

Each storage layer has a distinct responsibility.

| Layer                          | Primary Responsibility                                               |
| ------------------------------ | -------------------------------------------------------------------- |
| Runtime Storage                | Operational state, events, projections, caches                       |
| Versioned Knowledge Repository | Human-readable knowledge, documentation, inventory, architecture     |
| Synchronization Layer          | Coordinate movement of meaningful information between storage layers |

No storage layer should attempt to fulfill every responsibility.

Each exists to optimize a specific aspect of the system.

### User Never Waits

Synchronization should not unnecessarily block normal interaction.

---

### Queue, Don't Fail

When synchronization cannot be completed immediately, changes should be queued for later processing.

---

### Preserve User Intent

Conflicts should favor preserving user-created information.

No automatic synchronization should silently discard user data.

---

### Transparency

Synchronization status should be observable by the User when appropriate.

Errors should be reported clearly without overwhelming the User.

---

### Event-Based Synchronization

Synchronization should exchange meaningful domain events whenever practical rather than relying solely on full-state replacement.

---

## Consequences

### Positive

* Better resilience.
* Improved offline compatibility.
* Reduced interruption.
* Safer synchronization.
* Scalable architecture.

### Negative

* Conflict resolution becomes necessary.
* Queue management adds complexity.
* Synchronization latency must be considered.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

* Conflict resolution algorithms.
* Storage technologies.
* Git implementation.
* Database implementation.

---

## Related ADRs

* ADR-0001 — Online-Optimized, Offline-Compatible
* ADR-0003 — Git as a Versioned Knowledge Repository
* ADR-0004 — Event-Driven State Management

---

## Rationale

Synchronization exists to maintain consistency, not to prevent productivity.

The User should continue working while Remin manages synchronization responsibly.

---

## Closing Statement

Synchronization should happen around the User—not the other way around.
