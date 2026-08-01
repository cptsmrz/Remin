# Remin — Glossary

This glossary defines the vocabulary used throughout Remin.

These definitions are considered canonical.

---

# Agent

A specialized component capable of observing, reasoning, and performing autonomous actions within explicitly defined limits.

Every agent is a module.

Not every module is an agent.

---

# AI Provider

An external reasoning engine used by Remin.

Examples include GPT, Claude, Gemini, DeepSeek, local language models, or future providers.

AI providers are interchangeable.

They are not part of Remin's identity.

---

# Audit

The process of reviewing decisions, autonomy, recommendations, or architectural consistency.

Audits may be performed by:

- Eywa
- Argus
- External reviewers
- The user

---

# Autonomy

The authority granted to a module to act without explicit user approval.

Autonomy is always constrained by a Capability Contract.

---

# Capability

A specific action that a module is permitted to perform.

Capabilities are explicitly documented.

No capability is implied.

---

# Capability Contract

The formal specification describing:

- Responsibilities
- Permissions
- Restrictions
- Dependencies
- Autonomous actions
- Approval requirements

Every module must have one.

---

# Canonical State

The authoritative representation of truth within Remin.

Reasoning engines may interpret it.

Only authorized systems may modify it.

---

# Decision

A permanent user-approved action that changes Remin's state.

Decisions are recorded.

Recommendations are not.

---

# Decision Engine

The reasoning engine of Remin.

When reasoning is required, Eywa delegates tasks to the Decision Engine.

The Decision Engine evaluates context, constraints, and available information to generate recommendations or decisions, potentially utilizing one or more AI providers.

---

# Event

A record that something happened.

Examples:

- ItemWashed
- OutfitRecommended
- RecommendationRejected

Events are immutable.

---

# Eywa

The executive governance and orchestration layer of Remin.

Eywa coordinates modules, interprets user intent, protects Remin's philosophy, and delegates reasoning to the Decision Engine.

Eywa is not an AI model.

---

# Feedback

Information provided by the user that helps Remin improve future recommendations.

Feedback may be:

- Explicit
- Implicit
- Temporary
- Long-term

---

# Intent

The structured representation of a user's objective after interpretation by Eywa.

An Intent describes what the User wants to accomplish, independent of how it will be executed.

Eywa evaluates Intent before coordinating modules or delegating reasoning.

---

# Module

A self-contained component that owns one domain of responsibility.

Modules communicate through defined interfaces.

Responsibilities should not overlap.

---

# Recommendation

A non-binding suggestion generated from current knowledge.

The user always retains the final decision.

---

# Source of Truth

The canonical state maintained by Remin.

AI providers never become the source of truth.

---

# State

The current factual condition of an entity.

Unlike events, state changes over time.

---

# Truth

Information that Remin currently considers factual.

Truth should always be distinguishable from inference or speculation.

---

This glossary evolves with Remin.

New architectural terms should be added here before widespread use.

---

## Related Documents

- architecture.md
- philosophy.md
- domains.md
- request-lifecycle.md
- eywa.md
- module-contracts/README.md
