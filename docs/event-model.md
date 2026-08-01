# Remin — Event Model

> "History is immutable. Understanding is built from history."

---

## Purpose

The Event Model defines how occurrences are represented within Remin. 

Events provide a complete, immutable, chronological log of every change that occurs in the system, serving as the basis for auditing, system intelligence, and learning.

---

## What an Event Represents

An Event represents a factual occurrence in the real world or within the system at a specific point in time. 

Events describe changes, not state. State is a projection derived by reading and aggregating events over time. 

Examples of events include:
* `ItemWashed`
* `OutfitRecommended`
* `RecommendationRejected`

---

## Event Lifecycle

Every event moves through the following lifecycle:

1. **Occurrence**: An action or change occurs (e.g., initiated by a user or module).
2. **Creation**: The event is structured according to the canonical event model.
3. **Recording**: The event is written to the immutable historical log.
4. **Distribution**: Eywa distributes the event to interested modules.
5. **Derivation**: Modules process the event to update their projection of state or trigger reactions.

Once recorded, an event never changes and cannot be deleted.

---

## Canonical Event Fields

Every event in Remin must contain the following canonical fields:

| Field | Description |
|---|---|
| **Event ID** | A permanent, globally unique identifier for the event. |
| **Event Type** | The name of the event, describing what occurred (e.g., `ItemWashed`). |
| **Timestamp** | The exact date and time the occurrence was recorded. |
| **Correlation ID** | An identifier shared by all events that belong to the same end-to-end user request or session, enabling tracing. |
| **Causation ID** | The identifier of the specific event or request that triggered this event, establishing causal chains. |
| **Version** | The schema version of the event type, ensuring forward and backward compatibility. |
| **Source Module** | The identifier of the module that generated the event. |
| **Domain** | The business domain area this event belongs to (e.g., `Personal Inventory`, `Grooming`). |

---

## Event Principles

* **Immutability**: Events represent historical facts. Once recorded, they can never be modified, deleted, or reordered.
* **Traceability**: Every event must clearly indicate its origin (Source Module) and what caused it (Causation ID).
* **Decoupling**: Modules communicate asynchronously by producing and consuming events, rather than calling each other directly.
* **Separation of Concerns**: Events record changes to the system. They do not hold derived views or current state projections.

---

## Relationship to Truth

Within Remin, events represent the definitive record of what has occurred. They are the foundation of **Truth** in the system. 

While reasoning engines (such as the Decision Engine) may make recommendations or infer state, those inferences are temporary. The only permanent, non-speculative truth is the history captured in the immutable event log.

---

## Related Documents

- [architecture.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/architecture.md)
- [philosophy.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/philosophy.md)
- [domains.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/domains.md)
- [glossary.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/glossary.md)
- [request-lifecycle.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/request-lifecycle.md)
- [state-model.md](file:///c:/Users/sambi/OneDrive/Desktop/Remin/docs/state-model.md)