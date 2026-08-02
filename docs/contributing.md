# Remin — Contributing

## Purpose

This document guides contributors working on Remin.

Contributions should preserve the architecture, philosophy, and long-term integrity of the system.

---

## Before You Start

Read the architecture, philosophy, glossary, relevant domain documentation, and the applicable Capability Contract before beginning work.

Read relevant ADRs when a change affects an established architectural decision.

---

## Repository Expectations

Use canonical terminology consistently.

Keep changes focused on the responsibility they serve.

Preserve the distinction between Truth, reasoning, governance, modules, and interfaces.

---

## Development Workflow

Begin with the relevant specification and Capability Contract.

Implement work within the owning module's domain.

Route cross-domain coordination through Eywa.

Document significant architectural decisions before implementation.

---

## Documentation Expectations

Specifications define expected behavior.

Capability Contracts define module responsibilities.

ADRs preserve the context, reasoning, and consequences of architectural decisions.

Documentation should remain consistent with the glossary and architecture.

---

## Architecture Expectations

Truth is canonical.

Eywa governs and coordinates the system.

The Decision Engine performs reasoning.

AI providers perform inference.

Modules own one domain and do not communicate directly with one another.

The User remains the final authority.

---

## Pull Request Expectations

Each pull request should describe a focused change.

It should identify the relevant specification, Capability Contract, or ADR when applicable.

It should include documentation updates required by an architectural change.

---

## Review Process

Review evaluates whether a change preserves architectural boundaries and remains consistent with existing documentation.

Review should confirm that module responsibilities remain clear and that no change compromises Truth, auditability, or user ownership.

---

## Contributor Responsibilities

Contributors are responsible for understanding the architectural boundaries of their work.

Contributors should raise significant architectural decisions through ADRs.

Contributors should prefer explicit documentation over implicit behavior.

---

## Related Documents

- architecture.md
- philosophy.md
- glossary.md
- naming-conventions.md
- domains.md
- event-model.md
- data-model.md
- request-lifecycle.md
- eywa.md
- module-contracts/README.md
- decisions/README.md
