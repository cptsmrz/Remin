# Remin — Relationship Model

> "Nothing exists in isolation."

---

# Purpose

The Relationship Model defines how entities within Remin connect to one another.

Relationships provide context, enabling Remin to reason across multiple domains without duplicating information.

---

# Design Principles

## 1. Relationships Describe Connections

Entities remain independent.

Relationships describe how they are connected.

---

## 2. Relationships Are Explicit

Connections should never be assumed.

If two entities are related, the relationship should be represented.

---

## 3. Relationships Have Meaning

Every relationship should answer a clear question.

Examples:

- Outfit contains Clothing Items.
- Meeting involves People.
- Recommendation references Feedback.

---

## 4. Relationships Are Extensible

New entity types should integrate without requiring changes to existing relationship definitions.

---

# Relationship Types

## Composition

One entity consists of multiple entities.

Examples:

- Outfit → Clothing Items
- Project → Tasks

---

## Association

Entities are connected but remain independent.

Examples:

- Person ↔ Meeting
- Book ↔ Reading Session

---

## Dependency

One entity relies on another.

Examples:

- Recommendation → Weather
- Recommendation → Calendar Event

---

## Reference

An entity points to another without ownership.

Examples:

- Feedback → Recommendation
- Task → Project

---

# Cardinality

Relationships may be:

- One-to-One
- One-to-Many
- Many-to-One
- Many-to-Many

The implementation determines storage.

This document defines meaning.

---

# Relationship Ownership

Every relationship has a clearly defined owner.

Ownership determines responsibility for maintaining the relationship.

---

# Relationship Integrity

Relationships should never reference entities that do not exist.

Orphaned relationships should be prevented whenever possible.

---

# Cross-Domain Relationships

Remin encourages connections across domains.

Examples:

Meeting

↓

Person

↓

Outfit

↓

Fragrance

↓

Feedback

These relationships allow Remin to provide contextual recommendations rather than isolated suggestions.

---

# Canonical Principle

Entities define what exists.

Relationships define context.

Reasoning emerges from both.

---

# Closing Principle

The value of Remin does not come from individual entities.

It comes from understanding how those entities connect over time.