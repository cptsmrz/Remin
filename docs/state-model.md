# Remin — State Model

> "State represents the present. Events explain how it became the present."

---

# Purpose

The State Model defines the current condition of every entity managed by Remin.

Unlike Events, which describe historical facts, State describes what is true at this moment.

State changes.

History does not.

---

# Design Principles

## 1. State Is Temporary

State represents the latest known truth.

It may change many times throughout an entity's lifetime.

---

## 2. State Is Derived

Whenever possible, state should be derived from recorded events.

State exists for efficiency and usability, not historical accuracy.

---

## 3. State Is Deterministic

Given the same sequence of events, the resulting state should always be identical.

---

## 4. State Represents Facts

State stores only the current truth.

Predictions, recommendations, and assumptions belong elsewhere.

---

## 5. One Current State

Every entity has exactly one current state.

Historical states are reconstructed from events rather than stored independently.

---

# Base State

Every entity exposes a current state.

Typical state information includes:

| Property | Description |
|----------|-------------|
| status | Current lifecycle state |
| availability | Whether the entity is currently usable |
| last_updated | Most recent state change |
| current_location | Present location, if applicable |

Additional properties depend on the entity type.

---

# Examples

## Clothing Item

Possible state:

- Available
- In Use
- In Laundry
- Washing
- Drying
- Ready to Iron
- Ironed
- Archived

---

## Book

Possible state:

- Unread
- Reading
- Paused
- Completed
- Archived

---

## Project

Possible state:

- Planned
- Active
- Blocked
- Completed
- Archived

---

# State Transitions

States change only through valid transitions.

Example:

Available

↓

Worn

↓

Laundry

↓

Washed

↓

Ironed

↓

Available

Invalid transitions should be rejected by the implementation.

---

# State Ownership

Every state belongs to exactly one entity.

No state exists independently.

---

# Relationship to Events

Events create history.

State summarizes the latest result of that history.

If state and history ever disagree, history is considered authoritative.

---

# Canonical Principle

State answers:

"What is true right now?"

Events answer:

"What happened?"

Both are required.

---

# Closing Principle

State exists to make the present understandable.

Events exist to make the past trustworthy.