# Remin — Naming Conventions

> "Consistent names create understandable systems."

---

# Purpose

This document defines the naming standards used throughout Remin.

Naming conventions improve readability, reduce ambiguity, and ensure that documentation, implementation, and architecture remain aligned.

---

# General Principles

## 1. One Concept, One Name

A concept should have exactly one canonical name.

Avoid synonyms.

Example:

Correct:

- WardrobeItem

Avoid:

- Clothing
- Garment
- InventoryItem
- ApparelObject

---

## 2. Names Describe Meaning

Names should describe what something **is**, not how it is implemented.

---

## 3. Be Explicit

Prefer clarity over brevity.

Long descriptive names are preferable to short ambiguous names.

---

# Entities

Entity names use **PascalCase**.

Examples:

- WardrobeItem
- CalendarEvent
- ReadingSession
- Recommendation
- Feedback
- Person
- Project

Entities are nouns.

---

# Events

Event names use **PascalCase** and follow:

<Noun><PastTenseVerb>

Examples:

- ItemCreated
- ItemWashed
- RecommendationGenerated
- RecommendationAccepted
- RecommendationRejected
- BookFinished
- TaskCompleted

Events describe completed facts.

---

# Modules

Modules use their canonical names.

Examples:

- Orbit
- Argus
- Prism
- Weave
- Loom
- Remira
- Mirin
- Fyodor

Module names are unique and never abbreviated.

---

# Files

Documentation files use **kebab-case**.

Examples:

- data-model.md
- event-model.md
- relationship-model.md
- naming-conventions.md

---

# Directories

Directories use **kebab-case**.

Examples:

- module-contracts
- capability-tests
- research
- experiments

---

# Identifiers

Entity identifiers use:

<prefix>_<number>

Examples:

- shirt_001
- shoe_004
- watch_002
- fragrance_006
- book_015

Identifiers are permanent.

Names may change.

Identifiers do not.

---

# Database Fields

Database fields use **snake_case**.

Examples:

- created_at
- updated_at
- wear_count
- purchase_date
- current_state

---

# Functions

Functions use **camelCase** and begin with a verb.

Examples:

- recommendOutfit()
- archiveItem()
- calculateWearFrequency()
- generateRecommendation()

---

# Boolean Fields

Boolean fields should read naturally.

Examples:

- is_available
- is_archived
- has_been_ironed
- can_execute

Avoid ambiguous names.

---

# Constants

Constants use **UPPER_SNAKE_CASE**.

Examples:

- MAX_RECOMMENDATIONS
- DEFAULT_REMINDER_TIME
- SUPPORTED_AI_MODELS

---

# Reserved Terms

The following terms have fixed meanings throughout Remin.

| Term | Meaning |
|------|---------|
| Entity | Something that exists |
| Event | Something that happened |
| State | The current truth about an entity |
| Relationship | A connection between entities |
| Module | A domain component with one responsibility |
| Contract | The formal specification of a module |
| Capability | An action permitted by a module |
| Recommendation | A non-binding suggestion |
| Decision | A user-approved action |

These meanings should remain consistent across documentation, code, and user interfaces.

---

# Closing Principle

Names are part of the architecture.

Changing a name changes understanding.

Choose carefully.
