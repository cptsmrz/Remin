# Remin — Laundry Specification

> "An accurate inventory requires an accurate understanding of item state."

---

# Purpose

The Laundry system tracks changes in clothing availability caused by wearing, washing, ironing, and related maintenance activities.

Its purpose is to ensure recommendations always reflect reality.

---

# User Problem

Users frequently lose track of which items are:

- Available
- Dirty
- Being washed
- Ready to wear

As a result, recommendations may include items that cannot actually be worn.

The Laundry system eliminates this uncertainty.

---

# Goals

The Laundry system should:

- Track clothing availability.
- Record lifecycle transitions.
- Support batch operations.
- Keep inventory synchronized with reality.
- Prevent unavailable items from being recommended.

---

# Non-Goals

This specification does not define:

- Washing schedules.
- Washing machine integrations.
- Smart appliance support.
- Fabric care recommendations.

---

# Laundry Lifecycle

The standard lifecycle is:

Available

↓

Worn

↓

Laundry

↓

Washed

↓

Ironed (optional)

↓

Available

Future item types may define different maintenance workflows.

---

# User Actions

The user may:

- Send one or more items to laundry.
- Mark items as washed.
- Mark items as ironed.
- Return items to availability.
- Correct item state manually.

---

# System Responsibilities

The Laundry system should:

- Update inventory state.
- Record lifecycle events.
- Prevent unavailable items from appearing in recommendations.
- Preserve maintenance history.

---

# Acceptance Criteria

The Laundry system is complete when:

- Users can manage laundry in batches.
- Inventory always reflects current availability.
- Recommendations exclude unavailable items.
- Laundry history is preserved.
- Manual corrections are always permitted.

---

# Future Extensions

Future versions may support:

- Dry cleaning.
- Shoe maintenance.
- Watch servicing.
- Garment repair.
- Fabric-specific care.
- Maintenance reminders.

---

# Closing Principle

Laundry is not about washing clothes.

It is about preserving trust in the inventory.