import type { CanonicalId } from "@/lib/domain/canonical-id";
import type { CanonicalEvent } from "@/lib/domain/event";
import type {
  WardrobeCategory,
  WardrobeItem,
} from "@/lib/inventory/wardrobe-item";
import type { WardrobeItemState } from "@/lib/inventory/wardrobe-item-state";

export type InventoryEventType =
  | "WardrobeItemAdded"
  | "WardrobeItemUpdated"
  | "WardrobeItemStateChanged"
  | "WardrobeItemArchived"
  | "WardrobeItemRestored";

export interface InventoryEventMetadata {
  readonly eventId: CanonicalId;
  readonly timestamp: string;
  readonly correlationId: CanonicalId;
  readonly causationId?: CanonicalId;
}

export interface WardrobeItemAddedPayload {
  readonly inventoryId: CanonicalId;
  readonly inventoryVersion: number;
  readonly wardrobeItemId: CanonicalId;
  readonly wardrobeItemVersion: number;
  readonly category: WardrobeCategory;
  readonly currentState: WardrobeItemState;
  readonly notes?: string;
  readonly tags: readonly string[];
}

export interface WardrobeItemUpdatedPayload {
  readonly inventoryId: CanonicalId;
  readonly inventoryVersion: number;
  readonly wardrobeItemId: CanonicalId;
  readonly wardrobeItemVersion: number;
  readonly category?: WardrobeCategory;
  readonly notes?: string;
  readonly tags?: readonly string[];
}

export interface WardrobeItemStateChangedPayload {
  readonly inventoryId: CanonicalId;
  readonly inventoryVersion: number;
  readonly wardrobeItemId: CanonicalId;
  readonly wardrobeItemVersion: number;
  readonly previousState: WardrobeItemState;
  readonly currentState: WardrobeItemState;
}

export interface WardrobeItemArchivedPayload {
  readonly inventoryId: CanonicalId;
  readonly inventoryVersion: number;
  readonly wardrobeItemId: CanonicalId;
  readonly wardrobeItemVersion: number;
  readonly previousState: Exclude<WardrobeItemState, "Archived">;
}

export interface WardrobeItemRestoredPayload {
  readonly inventoryId: CanonicalId;
  readonly inventoryVersion: number;
  readonly wardrobeItemId: CanonicalId;
  readonly wardrobeItemVersion: number;
  readonly restoredState: Exclude<WardrobeItemState, "Archived">;
}

export type WardrobeItemAddedEvent = InventoryEvent<
  "WardrobeItemAdded",
  WardrobeItemAddedPayload
>;

export type WardrobeItemUpdatedEvent = InventoryEvent<
  "WardrobeItemUpdated",
  WardrobeItemUpdatedPayload
>;

export type WardrobeItemStateChangedEvent = InventoryEvent<
  "WardrobeItemStateChanged",
  WardrobeItemStateChangedPayload
>;

export type WardrobeItemArchivedEvent = InventoryEvent<
  "WardrobeItemArchived",
  WardrobeItemArchivedPayload
>;

export type WardrobeItemRestoredEvent = InventoryEvent<
  "WardrobeItemRestored",
  WardrobeItemRestoredPayload
>;

export type InventoryDomainEvent =
  | WardrobeItemAddedEvent
  | WardrobeItemUpdatedEvent
  | WardrobeItemStateChangedEvent
  | WardrobeItemArchivedEvent
  | WardrobeItemRestoredEvent;

export function createWardrobeItemAddedEvent(
  metadata: InventoryEventMetadata,
  input: {
    readonly inventoryId: CanonicalId;
    readonly inventoryVersion: number;
    readonly item: WardrobeItem;
  },
): WardrobeItemAddedEvent {
  return createInventoryEvent(metadata, "WardrobeItemAdded", {
    inventoryId: input.inventoryId,
    inventoryVersion: input.inventoryVersion,
    wardrobeItemId: input.item.id,
    wardrobeItemVersion: input.item.version,
    category: input.item.category,
    currentState: input.item.currentState,
    notes: input.item.notes,
    tags: [...input.item.tags],
  });
}

export function createWardrobeItemUpdatedEvent(
  metadata: InventoryEventMetadata,
  payload: WardrobeItemUpdatedPayload,
): WardrobeItemUpdatedEvent {
  return createInventoryEvent(metadata, "WardrobeItemUpdated", {
    ...payload,
    tags: payload.tags ? [...payload.tags] : undefined,
  });
}

export function createWardrobeItemStateChangedEvent(
  metadata: InventoryEventMetadata,
  payload: WardrobeItemStateChangedPayload,
): WardrobeItemStateChangedEvent {
  return createInventoryEvent(metadata, "WardrobeItemStateChanged", payload);
}

export function createWardrobeItemArchivedEvent(
  metadata: InventoryEventMetadata,
  payload: WardrobeItemArchivedPayload,
): WardrobeItemArchivedEvent {
  return createInventoryEvent(metadata, "WardrobeItemArchived", payload);
}

export function createWardrobeItemRestoredEvent(
  metadata: InventoryEventMetadata,
  payload: WardrobeItemRestoredPayload,
): WardrobeItemRestoredEvent {
  return createInventoryEvent(metadata, "WardrobeItemRestored", payload);
}

type InventoryEvent<EventType extends InventoryEventType, Payload> =
  CanonicalEvent<EventType, Payload>;

function createInventoryEvent<EventType extends InventoryEventType, Payload>(
  metadata: InventoryEventMetadata,
  eventType: EventType,
  payload: Payload,
): InventoryEvent<EventType, Payload> {
  return {
    eventId: metadata.eventId,
    eventType,
    timestamp: metadata.timestamp,
    correlationId: metadata.correlationId,
    causationId: metadata.causationId,
    version: 1,
    sourceModule: "Weave",
    domain: "Personal Inventory",
    payload: Object.freeze(payload),
  };
}
