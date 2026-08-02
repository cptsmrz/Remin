Every AI working on Remin must read this file before making recommendations or modifying the repository.


# Remin — Brain

> **Shared working memory for Remin.**
>
> This document is **not** project documentation.
>
> It is the shared operational memory used by humans and AI agents working on Remin.
>
> If this document conflicts with older conversations or notes, **this document is authoritative.**

---

# Project Identity

**Project**

Remin

**Meaning**

> Know everything you own.  
> Wear it better.

**Primary Architect**

Eywa

**Supporting Personas**

- Aditi — Architectural Challenger
- TARS — Mission Operations *(planned)*
- CASE — Systems Operations *(planned)*

---

# Long-Term Vision

Remin is an AI-powered Personal Inventory & Lifestyle Management System.

It is **not** a wardrobe application.

It is intended to evolve into a Personal Operating System that understands possessions, routines, preferences, decisions, history, relationships, and future intent while preserving complete user ownership.

Architecture must outlive implementation.

---

# Core Philosophy

- Architecture before implementation.
- Truth is canonical.
- AI reasons over Truth.
- The User remains the final authority.
- Every module owns exactly one domain.
- Eywa orchestrates.
- The Decision Engine reasons.
- AI Providers perform inference.
- Dependencies are replaceable.
- Vendor lock-in is architectural debt.
- Graceful degradation is preferred over hard failure.
- Repository state overrides memory.

---

# Working Style

Preferred workflow:

1. Discuss the decision.
2. Capture the decision.
3. Review manually.
4. AntiGravity performs implementation.
5. Eywa reviews.
6. Commit.
7. Push.

Never allow implementation to redefine architecture.

---

# Repository Status

**Current Branch**

Audit 2 Review & Implementation

**Architecture**

Frozen by default.

**Implementation**

Not started.

**Current Phase**

Engineering Phase

---

# Current Session

**Date**

YYYY-MM-DD

**Current Goal**

Complete Engineering Phase E.

**Current Work**

E3 — Product Specifications

**Next Immediate Task**

Refine specifications under:

```
specs/releases/v0.1.0/
```

**Blockers**

None.

---

# Audit History

## Audit 1

Completed.

Major outcomes:

- Philosophy stabilized.
- Architecture stabilized.
- ADR framework established.
- Capability Contracts introduced.
- Request Lifecycle formalized.
- Naming conventions established.

---

## Audit 2

### Phase A — Architectural Consistency

Completed.

Resolved:

- Adjacent-layer rule.
- Eywa governance.
- Intent definition.
- Decision Engine definition.
- Morning vs Evening briefing consistency.

---

### Phase B — Core Models

Completed.

Created:

- event-model.md
- data-model.md

---

### Phase C — Module Contracts

Completed.

Completed contracts:

- Orbit
- Weave
- Loom
- Argus

---

### Phase D — Repository Consistency

Completed.

Resolved:

- Broken references.
- Documentation consistency.
- Terminology consistency.
- Eywa classification.
- Repository cleanup.

---

### Phase E

## E1 — Engineering ADRs

Completed.

Created:

- ADR-0011 — User-Centric Architecture
- ADR-0012 — Technology Selection Philosophy
- ADR-0013 — Testing Strategy
- ADR-0014 — Trust Boundaries & Least Privilege

---

## E2 — Engineering Governance

Completed.

Created:

- development-guide.md
- coding-standards.md
- contributing.md

Important architectural clarification:

Logging Philosophy distinguishes:

- Architectural Events
- Operational Logs

Logs never become canonical Truth.

---

# ADR Status

Completed through:

**ADR-0014**

---

# Architectural Decisions Worth Protecting

- Eywa is governance.
- Eywa is NOT a module.
- Decision Engine never governs.
- Modules never communicate directly.
- Truth cannot be modified outside explicit authority.
- Architecture is provider-independent.
- Every dependency should have a replacement strategy.
- User is the architectural unit of scale.
- Events describe changes.
- Truth describes state.

---

# Engineering Principles

- Business logic before UI.
- Infrastructure before features.
- Specifications before implementation.
- Review before merge.
- ADR before architectural change.

---

# Current Technology Direction

Current implementation stack:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Vercel

These are implementation choices rather than architectural commitments.

---

# Next Phase

## Engineering Phase

### Current Target

E3 — Product Specifications

Objectives:

- Refine specifications under `specs/releases/v0.1.0/`
- Make specifications implementation-ready.
- Transition from architecture into production implementation.

---

# AI Workflow

## Eywa

**Role**

Chief Architect & Technical Lead

**Responsibilities**

- Architecture
- Technical decisions
- Reviews
- Long-term consistency
- Technical leadership

---

## Aditi

**Role**

Architectural Challenger

**Responsibilities**

- Challenge assumptions
- Detect weak reasoning
- Prevent architectural drift
- Stress-test architectural decisions

---

## TARS *(Planned)*

**Role**

Mission Operations

**Personality**

Configurable

- Humor
- Honesty
- Risk Tolerance

**Responsibilities**

- Project execution
- Sprint management
- Progress tracking
- Task orchestration
- Repository status
- Development metrics

---

## CASE *(Planned)*

**Role**

Systems Operations

**Responsibilities**

- Concise execution
- Operational checklists
- Build verification
- Release readiness
- Deployment support
- Operational diagnostics

---

## AntiGravity

**Role**

Implementation Agent

**Responsibilities**

- Local repository editing
- Mechanical implementation
- Refactoring
- Development assistance

---

## Codex

**Role**

Engineering Assistant

**Responsibilities**

- Large-scale implementation
- Repository-wide modifications
- Documentation generation
- Scaffolding

---

## Claude

**Role**

Independent Architectural Auditor

**Responsibilities**

- Architecture audits
- Consistency reviews
- Critical analysis
- External validation

---

# Operational Knowledge

- Always verify the current repository before making recommendations.
- Never restart completed audit phases.
- Repository state overrides conversational memory.
- Small authoritative documents outperform large conversational context.
- Distinguish Architectural Events from Operational Logs.
- Never commit machine-specific absolute paths.
- Review AI-generated documentation before committing.
- Preserve architectural terminology exactly.

---

# Open Items

- E3 — Product Specifications
- E4 — CI/CD & Engineering Automation
- Begin production implementation

---

# Do Not Forget

- Architecture is frozen by default.
- Every architectural change requires an ADR.
- Verify before assuming.
- brain.md is the first document every AI should read.
- Preserve canonical terminology.
- Protect architectural boundaries.
- Do not revisit completed audit phases without explicit reason.

---

# Rules for Every AI

Before suggesting or implementing any work:

1. Read **brain.md** completely.
2. Respect completed phases.
3. Preserve canonical terminology.
4. Repository state overrides memory.
5. Do not redesign architecture without an ADR.
6. If uncertain, ask instead of assuming.
7. Keep implementation aligned with the architecture.

---

# Last Updated

**Phase**

Engineering Phase

**Completed**

- Audit 1
- Audit 2
- Engineering Phase E1
- Engineering Phase E2

**Current Work**

E3 — Product Specifications

**Next**

Translate specifications into implementation-ready product definitions.