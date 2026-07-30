# ADR-0007 — Modular Intelligence Architecture

## Status

Accepted

---

## Context

Remin is designed as a collection of specialized capabilities rather than a single monolithic intelligence.

As the system grows, individual domains such as wardrobe management, scheduling, journaling, analytics, and grooming will evolve independently.

A modular architecture allows these capabilities to remain cohesive, extensible, and independently maintainable while sharing common architectural principles.

---

## Decision

Remin adopts a Modular Intelligence Architecture.

Each module owns a clearly defined domain and exposes its capabilities through well-defined interfaces.

Modules do not directly control one another.

Cross-domain coordination occurs through Eywa, while reasoning is delegated to the Decision Engine.

---

## Principles

### Single Responsibility

Each module is responsible for one primary domain.

---

### Loose Coupling

Modules communicate through contracts rather than direct implementation dependencies.

---

### Shared Language

Modules share common domain models, event definitions, and architectural principles.

---

### Independent Evolution

Modules may evolve independently without requiring architectural changes to unrelated modules.

---

### Governance

Eywa coordinates module collaboration.

Modules never bypass Eywa for cross-domain operations.

---

## Consequences

### Positive

* High maintainability.
* Easier testing.
* Independent development.
* Clear ownership.
* Scalable architecture.

### Negative

* Additional interface design.
* Coordination overhead.
* More architectural planning.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

* Internal module implementations.
* AI provider selection.
* Decision logic.
* User interface behavior.

---

## Related ADRs

* ADR-0005 — AI Provider Abstraction
* ADR-0006 — Decision Engine Architecture
* ADR-0009 — Human-in-the-Loop Autonomy

---

## Rationale

Intelligence should emerge from collaboration between specialized components rather than a single monolithic system.

---

## Closing Statement

Every module should excel within its own domain.

Eywa ensures they work together as one system.
