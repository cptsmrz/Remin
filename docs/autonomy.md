# Remin — Autonomy Framework

Autonomy defines how much authority a module has to act without direct user approval.

Every autonomous action must be:

- Explicitly documented
- Auditable
- Reversible whenever practical
- Limited by a Capability Contract

---

# Level 0 — Observe

May read information.

May not recommend or modify anything.

Example:

Orbit detects tomorrow is a public holiday.

---

# Level 1 — Recommend

May provide suggestions.

No state changes occur.

Example:

Recommend two outfits.

Suggest moving tomorrow's study session.

---

# Level 2 — Prepare

May prepare actions for user approval.

Nothing is executed automatically.

Example:

Draft tomorrow's updated schedule.

Prepare a packing checklist.

Generate a wardrobe plan.

---

# Level 3 — Execute

May automatically perform actions that fall within previously approved boundaries.

Every action must be logged.

Examples:

Move a personal study session because tomorrow is a public holiday.

Mark a scheduled reminder as completed.

Generate tomorrow's briefing.

---

# Level 4 — Emergency

Reserved for exceptional situations where delaying action would likely cause significant harm or irreversible loss.

Examples may include:

- Preventing accidental data loss.
- Automatically restoring from a verified backup.
- Temporarily disabling a malfunctioning module.

Emergency actions must always generate an audit record.

---

# Universal Rules

Every autonomous action must answer:

1. Was it permitted?
2. Why was it taken?
3. What changed?
4. Can it be reversed?
5. Who authorized this level of autonomy?

If any answer is unknown, the action should not execute.

---

# User Authority

The user may:

- Lower autonomy.
- Increase autonomy.
- Disable autonomy entirely.
- Override any recommendation.

User decisions always take precedence.

---

# Module Authority

Every module defines:

- Default autonomy level.
- Maximum autonomy level.
- Actions requiring approval.
- Forbidden actions.

These are specified in the module's Capability Contract.

---

# Eywa

Eywa does not execute autonomous actions directly.

Eywa evaluates intent, coordinates modules, and ensures autonomous behavior remains consistent with Remin's philosophy.

---

# Design Principle

Autonomy is earned through demonstrated reliability.

Increasing autonomy should always require evidence that the system consistently behaves as intended.

Convenience must never override trust.