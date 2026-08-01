# Remin — Specification Guidelines

## Purpose

This document defines what belongs in a Remin specification.

Specifications describe what a feature or module should do.

They do not describe architectural decisions or implementation details.

---

## A Specification Should Include

* Purpose
* Scope
* Functional Requirements
* Non-functional Requirements
* User Interaction
* Inputs
* Outputs
* Constraints
* Acceptance Criteria
* Related Documents

---

## A Specification Should Not Include

* Architectural philosophy
* ADR decisions
* Implementation details
* Programming language choices
* Framework decisions
* Internal algorithms unless required by behavior

---

## Relationship to Other Documents

Architecture defines the system.

Philosophy defines principles.

ADRs record architectural decisions.

Specifications define expected behavior.

Capability Contracts define module responsibilities.

---

## Principles

* Every significant feature should have a specification.
* Specifications should describe behavior rather than implementation.
* Specifications should remain stable even if implementation changes.

---

## Related Documents

- architecture.md
- philosophy.md
- module-contracts/README.md
- decisions/README.md
