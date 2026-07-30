# Remin — Canonical Data Model

> "Facts before reasoning."

---

# Purpose

The Canonical Data Model defines the core entities that exist within Remin.

It represents reality as Remin understands it.

This document is implementation-independent.

Databases, APIs, and programming languages must conform to this model rather than define it.

---

# Design Principles

## 1. Reality First

Entities represent real-world concepts rather than implementation details.

Examples:

- Clothing Item
- Book
- Person
- Project

Examples of things that are **not** entities:

- Database rows
- API responses
- UI components

---

## 2. One Concept, One Entity

Each entity should represent exactly one concept.

Do not merge unrelated responsibilities.

---

## 3. Stable Identity

Every entity has a permanent identifier.

Names may change.

Identifiers do not.

---

## 4. Extensibility

New entity types should integrate naturally without requiring changes to existing entities.

---

# Base Entity

Every entity inherits the following common properties.

| Property | Description |
|----------|-------------|
| id | Permanent unique identifier |
| created_at | Creation timestamp |
| updated_at | Last modification timestamp |
| status | Current lifecycle status |
| tags | User-defined classifications |
| notes | Free-form annotations |

These properties exist for every entity unless explicitly documented otherwise.

---

# Entity Categories

## Personal Assets

Objects intentionally owned or managed by the user.

Examples:

- Clothing Item
- Shoes
- Watch
- Fragrance
- Accessory
- Grooming Product
- Bag

---

## Knowledge

Information intentionally tracked.

Examples:

- Book
- Article
- Note
- Learning Resource

---

## Time

Scheduled or historical events.

Examples:

- Calendar Event
- Reminder
- Deadline
- Routine

---

## Relationships

Entities describing people and interactions.

Examples:

- Person
- Organization
- Meeting

---

## Projects

Long-term work managed within Remin.

Examples:

- Project
- Goal
- Milestone
- Task

---

## Recommendations

Suggestions generated from current knowledge.

Examples:

- Outfit Recommendation
- Reading Recommendation
- Purchase Recommendation

Recommendations never become facts automatically.

---

# Entity Lifecycle

Every entity progresses through a lifecycle.

Created

↓

Active

↓

Archived

↓

Deleted (optional)

Deletion should be exceptional.

Archiving is preferred.

---

# Ownership

Every entity has one owner.

Responsibility for an entity must never be ambiguous.

---

# Relationships

Entities may reference one another.

Examples:

- Outfit → Clothing Items
- Meeting → Person
- Recommendation → Feedback
- Book → Reading Session

Relationships are defined separately in the Relationship Model.

---

# Canonical Truth

The Canonical Data Model is the source of semantic truth.

Implementations may optimize storage.

They must not change meaning.

---

# Closing Principle

The data model describes reality.

Artificial intelligence reasons about that reality.

It never defines it.