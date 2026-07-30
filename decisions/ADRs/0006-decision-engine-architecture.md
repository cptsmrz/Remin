# ADR-0006 — Decision Engine Architecture

## Status

Accepted

---

## Context

Remin is designed to assist a User across multiple domains, including wardrobe management, inventory, scheduling, personal knowledge, and future lifestyle capabilities.

Although these domains differ, they share a common requirement:

The system must evaluate available information, consider relevant context, and produce explainable recommendations without coupling decision-making to any single feature.

Implementing separate reasoning logic for each module would lead to duplicated behavior, inconsistent recommendations, and increasing maintenance complexity.

---

## Decision

Remin adopts a centralized **Decision Engine** architecture.

The Decision Engine is responsible for evaluating contextual information, applying domain constraints, ranking available options, and producing candidate decisions.

Individual modules remain responsible for presenting those decisions within their respective domains.

The Decision Engine operates independently of any AI provider and independently of Eywa's governance responsibilities.

---

## Principles

### Separation of Responsibilities

Decision-making and presentation are separate concerns.

The Decision Engine determines **what** should be recommended.

Individual modules determine **how** those recommendations are presented to the User.

---

### Context Before Decision

Every decision should be based on the best available context.

Context may include:

* Inventory
* Calendar
* Weather
* Preferences
* Historical behavior
* Current availability
* Manual constraints

---

### Explainability

Every decision should remain explainable.

The system should retain sufficient reasoning metadata to justify recommendations whenever the User requests an explanation.

---

### Deterministic Constraints

Objective constraints must always be satisfied before subjective optimization.

Examples include:

* Item availability
* Laundry state
* Calendar requirements
* User-defined exclusions

Creativity must never override factual constraints.

---

### Domain Independence

The Decision Engine should remain reusable across all Remin domains.

Wardrobe recommendations, scheduling assistance, reading suggestions, project planning, and future capabilities should rely on the same architectural reasoning principles.

---

### User-Centric Decisions

The Decision Engine always evaluates the context of a single User.

Multi-user deployments do not change the behavior of the Decision Engine.

Each User's context remains isolated from every other User.

---

## Consequences

### Positive

* Consistent decision quality.
* Reduced duplication.
* Easier maintenance.
* Shared explainability.
* Reusable reasoning architecture.
* Clear separation between reasoning and governance.

### Negative

* Increased initial architectural complexity.
* Greater responsibility placed on the Decision Engine.
* Requires well-defined interfaces between modules, Eywa, and the Decision Engine.

These trade-offs are accepted.

---

## Non-Goals

This ADR does not define:

* AI provider selection.
* Machine learning implementation.
* Prompt engineering.
* User interface behavior.
* Recommendation presentation.
* Eywa governance policies.

These concerns are documented in separate ADRs.

---

## Related ADRs

* ADR-0005 — AI Provider Abstraction
* ADR-0007 — Modular Intelligence Architecture
* ADR-0010 — Explainability by Default
* ADR-0011 — User-Centric Architecture *(planned)*

---

## Rationale

Decision-making is a shared capability rather than a feature-specific implementation.

Centralizing reasoning allows Remin to provide consistent, explainable, and reusable intelligence across all domains while keeping governance, presentation, and AI provider selection independent.

---

## Closing Statement

Every recommendation begins as a decision.

The Decision Engine exists to ensure every decision is contextual, consistent, explainable, and centered on a single User.