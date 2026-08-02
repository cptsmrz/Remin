# Remin — Coding Standards

## Purpose

This document defines project-wide implementation standards for Remin.

These standards preserve clarity, explainability, modularity, and user ownership.

---

## General Principles

Implementation should preserve the architecture.

Facts should remain distinct from inference, assumptions, and speculation.

Every capability belongs to one module.

Implementation should remain understandable as the system evolves.

---

## Naming Conventions

Names must follow the conventions defined in naming-conventions.md.

Canonical names should be used consistently across documentation and implementation.

---

## Folder Organization

Folder organization should reflect architectural responsibilities.

Module-specific implementation should remain within the responsibility of its owning module.

Documentation, specifications, Capability Contracts, and ADRs should remain distinct.

---

## TypeScript Guidelines

TypeScript names should follow the naming conventions of Remin.

Types should preserve the distinction between entities, events, state, recommendations, and decisions.

Implementation should not treat temporary projections or recommendations as canonical Truth.

---

## Error Handling Philosophy

Failure handling should preserve Truth and make uncertainty visible.

When a module cannot complete an action, it should follow the failure modes defined by its Capability Contract.

No failure path should silently create or modify facts.

---

## Logging Philosophy

Logging supports observability, diagnostics, and auditing.

Application logs do not replace canonical Truth or architectural Events.

Logging should never become the authoritative source of system state.

---

## Commenting Guidelines

Comments should explain architectural intent, boundaries, or decisions when code alone cannot make them clear.

Comments should use the canonical terminology of Remin.

---

## Formatting Expectations

Formatting should preserve readability and consistency.

Names and documentation should follow the established naming conventions.

---

## Architectural Constraints

Eywa is the governance and orchestration layer, not a module.

The Decision Engine performs reasoning and does not govern the system.

Modules own one domain and do not call one another directly.

Cross-domain coordination occurs through Eywa.

Autonomous actions remain within the owning module's Capability Contract.

Interfaces contain presentation logic only.

---

## Non-Goals

This document does not define architectural decisions.

Architectural decisions belong in ADRs.

Implementation behavior belongs in specifications.

Module responsibilities belong in Capability Contracts.

---

## Related Documents

- architecture.md
- philosophy.md
- glossary.md
- naming-conventions.md
- event-model.md
- data-model.md
- request-lifecycle.md
- eywa.md
- module-contracts/README.md
- decisions/README.md
