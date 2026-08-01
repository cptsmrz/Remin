# Capability Contracts

A **Capability Contract** defines what a module can do, what it needs, and what it promises.

Every Remin module should have a capability contract before implementation begins.

## Relationship with Eywa

Modules do not communicate directly with one another unless explicitly defined by their contracts.

Cross-domain coordination occurs through Eywa.

When a module requires contextual reasoning beyond its own capabilities, it requests assistance through Eywa, which delegates reasoning to the Decision Engine.

This architecture preserves module independence while maintaining consistent system behavior.

## Purpose

- Clarify module boundaries
- Define inputs, outputs, and dependencies
- Prevent scope creep
- Enable independent development and testing

## How to Use

1. Copy `template.md` to a new file named after the module (e.g., `weave.md`).
2. Fill in the sections.
3. Review with the team before implementation.

---

*See [template.md](./template.md) for the contract format.*

---

## Related Documents

- architecture.md
- domains.md
- eywa.md
- request-lifecycle.md
- specification-guidelines.md
