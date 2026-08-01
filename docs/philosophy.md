# Remin — Philosophy

## Core Principles

### 1. The User Comes First

Remin exists to serve the user.

The user always retains final authority.

---

### 2. Truth Before Intelligence

Facts are more important than AI.

The system must always distinguish between:

- Facts
- Inference
- Assumptions
- Speculation

---

### 3. Data Ownership

The user owns all data.

Every important dataset should be exportable.

No vendor lock-in.

---

### 4. Local-First

Remin should continue functioning even if cloud AI disappears.

AI enhances the system.

AI does not define the system.

---

### 5. Modularity

Every capability belongs to exactly one module.

No duplicated responsibilities.

No overlapping ownership.

---

### 6. Explicit Autonomy

Every autonomous action must have:

- Permission
- Scope
- Explanation
- Audit history
- Reversible outcome

---

### 7. Learn Conservatively

A single action should rarely change behavior.

Patterns should.

Repeated feedback earns greater influence.

---

### 8. Replaceability

Every external dependency should be replaceable.

Models.

Databases.

Notification providers.

Storage.

Nothing should become irreplaceable.

---

### 9. Simplicity Wins

Prefer understandable systems over clever systems.

Readable architecture scales better than impressive architecture.

---

### 10. Long-Term Thinking

Every architectural decision should still make sense five years from today.

---

### Separation of Responsibilities

Remin separates governance, reasoning, execution, and presentation.

No single component should own multiple architectural responsibilities when those responsibilities can be clearly separated.

This principle keeps the system explainable, modular, and extensible as new capabilities are introduced.

---

## Architectural Evolution

Remin is designed to evolve incrementally.

Architectural changes should preserve clarity, explainability, modularity, and user ownership.

When extending the system:

* Prefer extending existing concepts before introducing new ones.
* Add new modules only when a new domain or responsibility genuinely exists.
* Separate governance, reasoning, execution, and presentation.
* Preserve backwards compatibility where practical.
* Document architectural decisions before implementation.
* Prefer explicit documentation over implicit behavior.

The architecture should become richer over time without becoming more complicated.

---

## Related Documents

- architecture.md
- glossary.md
- decisions/README.md
