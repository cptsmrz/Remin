# ADR-0004 — Event-Driven State Management

## Status

Accepted

---

## Context

Remin manages information that changes continuously over time.

Examples include wardrobe usage, inventory maintenance, user feedback, recommendations, and personal habits.

Storing only the current state loses valuable historical context and limits future analytics, explainability, and learning.

The architecture therefore requires a mechanism to preserve both current state and the history of meaningful changes.

---

## Decision

Remin adopts an event-driven approach to state management.

Meaningful user actions generate immutable events.

Current state is derived from those events or maintained as an optimized projection for application performance.

Events represent historical facts and should not be modified after creation.

Corrections are represented as new events rather than rewriting history whenever practical.

---

## Principles

### Events Represent Facts

Each event records something that happened at a specific point in time.

Examples include:

* Item added
* Item worn
* Item sent to laundry
* Recommendation accepted
* Recommendation rejected
* Preference updated

---

### State Represents the Present

Current state exists to provide efficient access to the latest information.

It may be reconstructed from historical events or maintained as a synchronized projection.

---

### History Is Valuable

Historical events support:

* Explainability
* Analytics
* Auditing
* Learning
* Trend analysis
* Future AI capabilities

---

### Immutability

Events should remain immutable.

Corrections should generally be represented by additional events that supersede previous understanding rather than altering historical records.

---

## Consequences

### Positive

* Complete historical timeline.
* Improved explainability.
* Better analytics.
* Easier debugging.
* Richer learning opportunities.
* Future-proof architecture.

### Negative

* Increased storage requirements.
* More complex querying.
* Event versioning must be managed carefully.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

* Event storage technology.
* Database schema.
* Synchronization mechanisms.
* Analytics implementation.

These decisions are addressed separately.

---

## Related ADRs

* ADR-0002 — Data Ownership
* ADR-0003 — Git as a Versioned Knowledge Repository
* ADR-0006 — Decision Engine Architecture *(planned)*

---

## Rationale

Understanding *how* the user's data evolved is often as valuable as understanding its current state.

An event-driven architecture preserves this context while enabling future capabilities without requiring fundamental architectural changes.

---

## Closing Statement

State explains where the user is.

Events explain how they got there.