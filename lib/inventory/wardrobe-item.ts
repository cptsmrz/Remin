import type { CanonicalEntity } from "@/lib/domain/entity";
import type { CanonicalId } from "@/lib/domain/canonical-id";
import {
  canTransitionWardrobeItemState,
  type WardrobeItemState,
} from "@/lib/inventory/wardrobe-item-state";

export type WardrobeCategory = "Clothing";

export interface WardrobeItem extends CanonicalEntity {
  readonly id: CanonicalId;
  readonly category: WardrobeCategory;
  readonly currentState: WardrobeItemState;
  readonly notes?: string;
  readonly tags: readonly string[];
}

export interface CreateWardrobeItemInput {
  readonly id: CanonicalId;
  readonly category: WardrobeCategory;
  readonly notes?: string;
  readonly tags?: readonly string[];
}

export interface UpdateWardrobeItemInput {
  readonly category?: WardrobeCategory;
  readonly notes?: string;
  readonly tags?: readonly string[];
}

export function createWardrobeItem(
  input: CreateWardrobeItemInput,
): WardrobeItem {
  return {
    id: input.id,
    category: input.category,
    currentState: "Available",
    notes: input.notes,
    tags: input.tags ? [...input.tags] : [],
    version: 1,
  };
}

export function updateWardrobeItem(
  item: WardrobeItem,
  input: UpdateWardrobeItemInput,
): WardrobeItem {
  return {
    ...item,
    ...input,
    tags: input.tags ? [...input.tags] : item.tags,
    version: item.version + 1,
  };
}
export function transitionWardrobeItemState(
  item: WardrobeItem,
  nextState: WardrobeItemState,
): WardrobeItem {
  if (!canTransitionWardrobeItemState(item.currentState, nextState)) {
    throw new Error(
      `Invalid WardrobeItem state transition from ${item.currentState} to ${nextState}.`,
    );
  }

  return {
    ...item,
    currentState: nextState,
    version: item.version + 1,
  };
}

/**
 * User corrections are factual updates and therefore are not limited to the standard lifecycle.
 */
export function correctWardrobeItemState(
  item: WardrobeItem,
  correctedState: WardrobeItemState,
): WardrobeItem {
  if (correctedState === "Archived") {
    throw new Error("Use archiveWardrobeItem to archive a WardrobeItem.");
  }

  return {
    ...item,
    currentState: correctedState,
    version: item.version + 1,
  };
}

export function archiveWardrobeItem(item: WardrobeItem): WardrobeItem {
  if (item.currentState === "Archived") {
    throw new Error("A WardrobeItem is already archived.");
  }

  return {
    ...item,
    currentState: "Archived",
    version: item.version + 1,
  };
}

export function restoreWardrobeItem(
  item: WardrobeItem,
  restoredState: Exclude<WardrobeItemState, "Archived">,
): WardrobeItem {
  if (item.currentState !== "Archived") {
    throw new Error("Only an archived WardrobeItem can be restored.");
  }

  return {
    ...item,
    currentState: restoredState,
    version: item.version + 1,
  };
}
