# Remin — Domain Model

## Purpose

Domains define what Remin manages.

Modules implement capabilities within domains.

Capability Contracts define the responsibilities of individual modules.

Domains exist to separate business concepts from implementation.

---

## Core Domains

| Domain              | Description                                      | Primary Module |
| ------------------- | ------------------------------------------------ | -------------- |
| Personal Inventory  | Clothing, accessories, footwear, and owned items | Weave          |
| Calendar & Time     | Events, schedules, reminders, routines           | Orbit          |
| Grooming            | Personal care products and routines              | Mirin          |
| Fragrance           | Fragrance collection and usage                   | Fyodor         |
| Journaling          | Reflection, notes, and personal history          | Remira         |
| Analytics           | Trends, statistics, insights                     | Prism          |
| Monitoring          | Alerts, tracking, integrity checks               | Argus          |
| System Governance   | Governance, orchestration, decision coordination | Eywa           |

---

## Principles

* Every domain has a clear owner.
* Modules should not overlap domains.
* Cross-domain collaboration occurs through Eywa.
* Capability Contracts define implementation responsibilities.
* Domains evolve more slowly than modules.

---

## Related Documents

- architecture.md
- eywa.md
- module-contracts/README.md
- glossary.md
