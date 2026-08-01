# Remin — Request Lifecycle

## Purpose

This document explains how a user request moves through Remin.

It describes the responsibilities of each architectural component during request processing.

It complements the Architecture document by explaining system behavior rather than system structure.

---

## High-Level Flow

```text
User
   │
   ▼
Interface
   │
   ▼
Eywa
(Governance & Orchestration)
   │
   ▼
Relevant Module(s)
   │
   ▼
Eywa
   │
   ▼
Decision Engine
   │
   ▼
AI Provider(s) (when required)
   │
   ▼
Decision Engine
   │
   ▼
Eywa
   │
   ▼
Interface
   │
   ▼
User
```

---

## Lifecycle

### 1. User Request

The User initiates a request through one of Remin's interfaces.

---

### 2. Interface

The interface captures the request and forwards it to Eywa.

Interfaces contain presentation logic only.

---

### 3. Eywa

Eywa interprets user intent.

Eywa determines:

- Which modules participate.
- Whether reasoning is required.
- Whether autonomy is permitted.
- Whether additional context is needed.

Eywa coordinates the request but does not perform domain reasoning.

---

### 4. Modules

Modules provide domain-specific information and functionality.

Examples include:

- Orbit
- Weave
- Prism
- Argus
- Mirin
- Remira
- Fyodor

Modules remain responsible only for their own domains.

Modules return domain-specific information and functionality to Eywa.

---

### 5. Decision Engine

When reasoning is required, Eywa delegates to the Decision Engine.

The Decision Engine evaluates context, constraints, and available information before producing recommendations or decisions.

The Decision Engine returns its results to Eywa.

---

### 6. AI Providers

The Decision Engine may utilize one or more AI providers when reasoning capabilities are required.

AI providers perform inference.

They do not govern the system.

---

### 7. Response Assembly

Eywa combines module outputs into one coherent response while ensuring consistency with Remin's philosophy.

Eywa continues orchestration after receiving reasoning results.

---

### 8. User Response

The interface presents the final response.

If appropriate, the User may approve, reject, or provide feedback.

---

## Guiding Principles

- Facts originate from Truth.
- Reasoning originates from the Decision Engine.
- Governance belongs to Eywa.
- Domain responsibilities belong to modules.
- Interfaces present information.
- AI providers perform inference.
- The User remains the final authority.

---

## Related Documents

- architecture.md
- domains.md
- philosophy.md
- eywa.md
- module-contracts/README.md

---
