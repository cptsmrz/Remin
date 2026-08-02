# Remin — Development Guide

## Purpose

This document provides engineering guidance for contributors to Remin.

It preserves the architectural principles that guide implementation as the system evolves.

---

## Engineering Principles

Architecture takes precedence over implementation.

Truth remains canonical.

Modules own one domain and one responsibility.

Eywa governs and coordinates.

The Decision Engine performs reasoning.

AI providers perform inference.

---

## Repository Workflow

Work should begin with the relevant architecture, specification, Capability Contract, and ADRs.

Changes should remain within the responsibility of the owning module.

Cross-domain coordination occurs through Eywa.

Significant architectural decisions should be documented before implementation.

---

## Branch Strategy

Branches should represent focused work.

Each branch should preserve the architectural boundaries of the change it contains.

---

## Commit Message Convention

Commit messages should clearly describe the focused change they contain.

They should use the canonical terminology defined by Remin.

---

## Documentation Rules

Documentation should use the canonical terms defined in the glossary.

Specifications describe expected behavior.

Capability Contracts define module responsibilities.

ADRs record architectural decisions.

Documentation should be updated when an architectural decision changes its meaning or boundary.

---

## Code Review Expectations

Code review should verify that a change preserves architectural boundaries.

Review should confirm that modules do not overlap domains, Truth remains canonical, and autonomous behavior remains within its Capability Contract.

Review should identify decisions that require an ADR.

---

## Definition of Done

Work is complete when it satisfies its specification, respects its Capability Contract, and preserves the architecture.

Relevant documentation and ADRs should reflect any architectural decision made by the change.

---

## When to Create an ADR

Create an ADR for a significant architectural decision.

Examples include decisions about data ownership, storage strategy, AI provider abstraction, module architecture, the event system, or the security model.

Implementation details generally do not require an ADR.

---

## Related Documents

- architecture.md
- philosophy.md
- glossary.md
- naming-conventions.md
- event-model.md
- data-model.md
- request-lifecycle.md
- module-contracts/README.md
- decisions/README.md
