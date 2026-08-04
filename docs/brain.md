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

In Progress.

**Current Phase**

Production Implementation

---

# Current Session

**Date**

YYYY-MM-DD

**Current Goal**

Begin production implementation of Release v0.1.0.

**Current Work**

Sprint 2 — Foundation: Infrastructure

**Next Immediate Task**

Complete the in-memory repository foundation and prepare for persistence adapters.

**Blockers**

None.

---

# Implementation Progress

## Sprint 1

Completed:

- Canonical ID generation
- Canonical Entity contracts
- Canonical Event envelope
- WardrobeItem domain entity
- WardrobeItem lifecycle
- Inventory aggregate
- Inventory repository contract
- Inventory domain events

In Progress:

- Inventory Application Layer

Not Started:

- Persistence adapters
- API layer
- UI
- Recommendation Engine
- Feedback Loop
- Notifications

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

## E3 — Product Specifications

Completed.

Created:

- Release v0.1.0 product specifications

---

## E4 — CI/CD & Engineering Automation

Completed.

Created:

- CI/CD Specification
- Engineering Automation Specification
- Quality Gates Specification
- Release Process Specification
- Repository Health Specification
- AI Implementation Agent Contract

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

# Current Phase

## Production Implementation

### Current Target

Implementation Sprint 1

Objectives:

- Implement Release v0.1.0 according to the approved specifications.
- Preserve architectural boundaries during implementation.
- Validate implementation through engineering reviews.
- Maintain implementation quality using the Engineering specifications.

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

## GPT-5.6 (Codex)

**Role**

Lead Implementation Engineer

**Responsibilities**

- Core infrastructure
- Shared services
- Data models
- Repository-wide implementation
- Cross-module integration
- Large-scale refactoring
- Final implementation decisions within approved architecture

---

## Gemini 3.1 Pro (AntiGravity)

**Role**

Feature Implementation Engineer

**Responsibilities**

- Product features
- User flows
- Components
- CRUD implementation
- Feature iteration
- UI implementation
- Product behavior

---

## Claude Opus 4.6

**Role**

Independent Architectural Auditor

**Responsibilities**

- Architecture reviews
- Critical analysis
- Repository consistency
- Technical debt identification
- Layer violation detection
- Naming consistency
- External validation

---

## TARS *(Planned)*

**Role**

Mission Operations

**Responsibilities**

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

- Operational checklists
- Build verification
- Release readiness
- Deployment support
- Operational diagnostics

---

## Multi-Agent Collaboration

Remin supports parallel AI development.

Multiple AI implementation agents may work simultaneously.

Each agent should:

- Respect assigned ownership boundaries.
- Avoid modifying unrelated files.
- Assume another implementation agent may be working concurrently.
- Recommend cross-cutting changes instead of implementing them unless explicitly assigned.
- Preserve mergeability over implementation completeness.

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
- Implementation ownership is task-based rather than provider-based.
- Parallel AI execution is supported when ownership boundaries are respected.
- AI agents should optimize for minimal merge conflicts.
- Preserve the functional immutable domain model.
- Aggregates return new state rather than mutating existing instances.
- Domain events describe completed facts but are recorded by the Application Layer rather than the Domain Layer.

---

# Open Items

- Inventory Application Layer
- Persistence Abstractions
- API Layer
- User Interface
- Recommendation Engine

---

# Do Not Forget

- Architecture is frozen by default.
- Every architectural change requires an ADR.
- Verify before assuming.
- `brain.md` is the first document every AI should read.
- Read `.github/prompts/implementation.md` before making implementation changes.
- Preserve canonical terminology.
- Protect architectural boundaries.
- Do not revisit completed audit phases without explicit reason.

---

# Rules for Every AI

Before suggesting or implementing any work:

1. Read **brain.md** completely.
2. Read **.github/prompts/implementation.md** before making implementation changes.
3. Respect completed phases.
4. Preserve canonical terminology.
5. Repository state overrides memory.
6. Do not redesign architecture without an ADR.
7. If uncertain, ask instead of assuming.
8. Keep implementation aligned with the architecture.

---

# Last Updated

**Phase**

Production Implementation

**Completed**

- Audit 1
- Audit 2
- Engineering Phase E1
- Engineering Phase E2
- Engineering Phase E3
- Engineering Phase E4
- Sprint 1 — Foundation: Domain
  - Canonical ID generation
  - Canonical Entity contracts
  - Canonical Event envelope
  - WardrobeItem domain model & lifecycle
  - Inventory aggregate
  - Inventory repository contract
  - Inventory domain events
- Sprint 1 — Foundation: Application
  - Inventory application services
  - Use-case orchestration
  - Optimistic concurrency coordination
- Sprint 1 — Foundation Review (Passed)

**Current Work**

Sprint 2 — Foundation Review

**Next Immediate Task**

Complete the in-memory repository foundation and prepare for persistence adapters.

**Next**

- Begin persistence adapters while preserving the established Domain → Application → Infrastructure layering.