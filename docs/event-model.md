# Remin — Event Model

> "History is immutable. Understanding is built from history."

---

# Purpose

The Event Model defines every meaningful occurrence within Remin.

Events describe **what happened**, not **what currently is**.

They form the historical record from which analytics, learning, auditing, automation, and future intelligence are derived.

Events are implementation-independent and represent real-world changes within the Remin ecosystem.

---

# Design Principles

## 1. Events Are Immutable

Once an event has occurred, it is never modified.

Corrections are recorded as new events.

History must remain trustworthy.

---

## 2. Events Represent Facts

Events record actions that actually happened.

They never represent assumptions, predictions, or intentions.

---

## 3. Events Are Timestamped

Every event records when it occurred.

Time is essential for understanding behavior, learning patterns, and reconstructing history.

---

## 4. Events Are Auditable

Every event should be explainable.

The system must always be able to answer:

- What happened?
- When did it happen?
- Why did it happen?
- Who or what initiated it?

---

## 5. Events Drive Intelligence

Artificial intelligence learns from events.

It must never invent events.

---

# Base Event

Every event contains the following information.

| Property | Description |
|----------|-------------|
| id | Permanent unique identifier |
| type | Event type |
| timestamp | Time the event occurred |
| actor | User, Module, or System |
| target | Entity affected by the event |
| source | Originating module or service |
| metadata | Additional event-specific information |

---

# Event Categories

## Entity Events

Changes affecting entities.

Examples:

- EntityCreated
- EntityUpdated
- EntityArchived
- EntityDeleted

---

## Inventory Events

Changes affecting personal assets.

Examples:

- ItemAdded
- ItemRemoved
- ItemWorn
- ItemWashed
- ItemIroned
- ItemPurchased
- ItemDonated

---

## Recommendation Events

Lifecycle of system recommendations.

Examples:

- RecommendationGenerated
- RecommendationPresented
- RecommendationAccepted
- RecommendationRejected
- RecommendationDismissed
- RecommendationFeedbackProvided

---

## Calendar Events

Examples:

- EventScheduled
- EventRescheduled
- EventCancelled
- ReminderTriggered

---

## Learning Events

Examples:

- BookStarted
- BookFinished
- SessionCompleted
- NoteCreated

---

## Project Events

Examples:

- ProjectCreated
- TaskCreated
- TaskCompleted
- MilestoneReached

---

## System Events

Examples:

- ModuleEnabled
- ModuleDisabled
- SyncStarted
- SyncCompleted
- BackupCreated
- BackupRestored

---

# Event Lifecycle

Occurred

↓

Recorded

↓

Processed

↓

Archived

Events are never edited after being recorded.

---

# Event Relationships

Events may reference:

- One Entity
- Multiple Entities
- Another Event
- A User Decision
- A Module

Relationships are defined in the Relationship Model.

---

# Event Ordering

Events are processed in chronological order.

If multiple events share the same timestamp, deterministic ordering must be preserved by the implementation.

---

# Naming Convention

Event names follow the format:

<Noun><PastTenseVerb>

Examples:

- ItemWashed
- RecommendationAccepted
- BookFinished
- TaskCompleted

Event names describe completed facts.

---

# Event Source

An event may originate from:

- User
- Eywa
- A Module
- An External Integration
- System Maintenance

The origin of every event should remain traceable.

---

# Canonical Principle

Events describe history.

State describes the present.

Artificial intelligence reasons using both.

---

# Closing Principle

Remin remembers what happened.

It learns from patterns.

It never rewrites history.