# ADR-0002 — Data Ownership

## Status

Accepted

---

## Context

Remin is designed to become a long-term Personal Inventory & Lifestyle Management System.

Over time, it will accumulate information that extends far beyond wardrobe management, including personal inventory, journals, projects, reading history, preferences, AI interactions, and other forms of personal knowledge.

This information represents the user's life rather than Remin's application state.

The architecture must ensure that users always retain ownership and control over their data regardless of storage technology, AI provider, or deployment method.

---

## Decision

Remin adopts **User Data Ownership** as a fundamental architectural principle.

The user owns all personal data managed by Remin.

Remin acts as a steward of that data rather than its owner.

No component, service, or third-party provider may assume exclusive ownership or control over user information.

The system must support portability, transparency, and long-term accessibility.

---

## Principles

### User Ownership

All personal information belongs to the user.

---

### Portability

Users should be able to export their data in open, well-documented formats.

---

### Vendor Independence

Changing databases, AI providers, cloud services, or deployment environments must not require abandoning existing data.

---

### Transparency

Data storage and synchronization should be understandable and inspectable.

Hidden proprietary formats should be avoided whenever practical.

---

### Longevity

User information should remain usable years into the future, independent of specific technologies.

---

## Consequences

### Positive

- Builds long-term user trust.
- Prevents vendor lock-in.
- Simplifies migration between providers.
- Encourages open data formats.
- Supports long-term sustainability.

### Negative

- Requires careful schema evolution.
- Import and export capabilities become first-class features.
- Additional engineering effort is required to maintain compatibility across versions.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

- The storage engine.
- Database technologies.
- Synchronization mechanisms.
- Backup strategies.
- Version control implementation.

These decisions are documented in separate ADRs.

---

## Related ADRs

- ADR-0001 — Online-Optimized, Offline-Compatible
- ADR-0003 — Git as a Versioned Knowledge Repository *(planned)*
- ADR-0004 — Event-Driven State Management *(planned)*

---

## Rationale

Remin is intended to become a trusted personal operating system.

Trust cannot exist unless users retain permanent ownership of the information they contribute.

Technology will evolve.

Storage systems will change.

AI providers will change.

The user's data must outlive all of them.

---

## Closing Statement

**The user's life belongs to the user.**

Remin exists to understand, organize, and protect that information—not to own it.