# ADR-0011 — User-Centric Architecture

## Status

Accepted

---

## Context

Remin is designed to become a long-term Personal Operating System.

Although future deployments may support any number of accounts, every architectural capability—reasoning, recommendations, inventory, events, synchronization, and learning—operates within the isolated context of a single User.

Scaling Remin should increase the number of independent User contexts rather than alter the behavior of the core architecture.

---

## Decision

Remin adopts a User-Centric Architecture.

Every core architectural component operates exclusively on the context of one User.

Multi-user deployments are achieved through isolated User contexts rather than shared domain logic.

No architectural component should require knowledge of unrelated Users to perform its primary responsibilities.

---

## Principles

### Individual Context

Each User has an independent context that contains their data, preferences, history, events, and learned knowledge.

---

### Isolation

A User's information, decisions, and learned behavior remain isolated from every other User unless explicitly shared through future collaboration features.

---

### Consistent Behavior

The behavior of the Decision Engine, Eywa, and every module should remain identical regardless of whether Remin serves one User or one million Users.

Scale changes deployment, not architecture.

---

### Privacy by Design

Every User context should be treated as an independent boundary for storage, synchronization, reasoning, and AI interactions.

---

### Composability

System-wide scalability should result from composing many independent User contexts rather than introducing global reasoning.

---

## Consequences

### Positive

* Predictable scaling.
* Clear architectural boundaries.
* Improved privacy.
* Easier testing.
* Better maintainability.
* Reduced coupling between User contexts.

### Negative

* Cross-user collaboration requires explicit architectural support.
* Shared intelligence must be intentionally designed rather than assumed.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

* Authentication.
* Authorization.
* Multi-user collaboration.
* Organization or team features.
* Data sharing mechanisms.

These concerns are addressed separately if introduced.

---

## Related ADRs

* ADR-0002 — Data Ownership
* ADR-0006 — Decision Engine Architecture
* ADR-0007 — Modular Intelligence Architecture
* ADR-0009 — Bounded Autonomy

---

## Rationale

The fundamental unit of Remin is not the application.

It is not an organization.

It is not a tenant.

It is a User.

Every architectural decision should preserve that principle regardless of deployment scale.

---

## Closing Statement

Remin does not scale by changing how it understands a User.

It scales by understanding more Users, one at a time.
