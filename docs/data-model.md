# Remin — Data Model

> "Facts before reasoning."

---

## Purpose

The Data Model defines how information, concepts, and reality are structured and understood within Remin. 

It provides an implementation-independent conceptual blueprint of the system's entities, their identity, and their interactions, ensuring that modules have a unified understanding of Remin's information domain.

---

## Entity

An Entity represents a distinct, meaningful concept or object in the real world or within Remin's domain (e.g., a wardrobe item, a scheduled routine, a person). 

Entities possess:
* A stable, permanent identity.
* Attributes describing their characteristics.
* Lifecycles governing their status.

Entities exist independently of how they are serialized, cached, or persisted in storage.

---

## Identity

In Remin, Identity is the unique signature that distinguishes one entity from all others. 

Identity is treated independently from storage technology:
* It does not rely on database auto-increment keys or storage-specific identifiers.
* It remains stable across synchronization, device changes, backups, and migrations.
* It is generated at the concept's creation and remains unchanged throughout the entity's entire lifecycle.

---

## Canonical ID

Every entity is identified by a Canonical ID. 

A Canonical ID is a unique, human-readable, and deterministic string formatted as:

`<prefix>_<identifier>`

Where the prefix denotes the entity type, and the identifier is a unique string. 

Examples of Canonical IDs:
* `item_shirt_001`
* `routine_morning_002`
* `person_alex_004`

---

## Versioning

Entities evolve. To track changes and maintain consistency across modules, entities use optimistic versioning. 

Each entity contains a version field that increments monotonically on every modification. This ensures that:
* Concurrent updates can be detected and coordinated.
* History can be reconstructed accurately when combined with the Event Model.
* Modules can verify if they are operating on the latest canonical representation.

---

## Relationships

Relationships define the connections between entities. 

Relationships in Remin are represented conceptually rather than via foreign keys or join tables. They are:
* **Uni-directional or Bi-directional**: Describing the direction of the semantic reference.
* **Cardinality-aligned**: Representing one-to-one, one-to-many, or many-to-many associations.
* **Event-sourced**: Established or broken by corresponding events in the Event Model.

---

## External Assets

Entities may reference external assets (e.g., images, PDFs, external web URLs). 

External assets are treated as independent, immutable resources referenced by a URI. The entity contains the reference, but the asset itself does not define the entity's state.

---

## Truth vs Projection

Remin distinguishes between the canonical truth and temporary projections:

* **Canonical Truth**: The authoritative, current state of an entity, derived directly from the history of events.
* **Projections**: Temporary, optimized, or context-specific views of one or more entities created by modules for quick access, analytics, or UI presentation. 

Projections can always be rebuilt from the event history and must never be treated as the source of truth.

---

## Data Principles

* **Reality-First**: The data model represents real-world entities and concepts, not implementation constraints.
* **Identity Stability**: An entity's identity is permanent; attributes may change, but the ID never does.
* **Modularity**: Individual modules own their respective domain data, but share a common understanding of cross-domain entities.
* **Truth Immutability**: Semantic changes are driven by immutable events; the current data state is a projection of history.

---

## Related Documents

- [architecture.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/architecture.md)
- [philosophy.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/philosophy.md)
- [domains.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/domains.md)
- [glossary.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/glossary.md)
- [event-model.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/event-model.md)
- [state-model.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/state-model.md)