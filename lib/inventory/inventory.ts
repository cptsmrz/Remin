import type { CanonicalEntity } from "@/lib/domain/entity";
import type { CanonicalId } from "@/lib/domain/canonical-id";
import { isWardrobeItemAvailable } from "@/lib/inventory/wardrobe-item-state";
import type { WardrobeItem } from "@/lib/inventory/wardrobe-item";

/**
 * The canonical collection of inventory entities currently supported by Remin.
 */
export interface Inventory extends CanonicalEntity {
  readonly id: CanonicalId;
  readonly wardrobeItems: readonly WardrobeItem[];
}

export interface CreateInventoryInput {
  readonly id: CanonicalId;
  readonly wardrobeItems?: readonly WardrobeItem[];
}

export function createInventory(input: CreateInventoryInput): Inventory {
  assertUniqueWardrobeItemIds(input.wardrobeItems ?? []);

  return {
    id: input.id,
    wardrobeItems: input.wardrobeItems ? [...input.wardrobeItems] : [],
    version: 1,
  };
}

export function addWardrobeItem(
  inventory: Inventory,
  item: WardrobeItem,
): Inventory {
  if (findWardrobeItemById(inventory, item.id)) {
    throw new Error(`A WardrobeItem with ID ${item.id} already exists.`);
  }

  return {
    ...inventory,
    wardrobeItems: [...inventory.wardrobeItems, item],
    version: inventory.version + 1,
  };
}

export function replaceWardrobeItem(
  inventory: Inventory,
  item: WardrobeItem,
): Inventory {
  const existingItem = findWardrobeItemById(inventory, item.id);

  if (!existingItem) {
    throw new Error(`No WardrobeItem exists with ID ${item.id}.`);
  }

  if (item.version <= existingItem.version) {
    throw new Error("A WardrobeItem replacement must have a newer version.");
  }

  return {
    ...inventory,
    wardrobeItems: inventory.wardrobeItems.map((existingWardrobeItem) =>
      existingWardrobeItem.id === item.id ? item : existingWardrobeItem,
    ),
    version: inventory.version + 1,
  };
}

export function findWardrobeItemById(
  inventory: Inventory,
  itemId: CanonicalId,
): WardrobeItem | undefined {
  return inventory.wardrobeItems.find((item) => item.id === itemId);
}

export function listAvailableWardrobeItems(
  inventory: Inventory,
): readonly WardrobeItem[] {
  return inventory.wardrobeItems.filter((item) =>
    isWardrobeItemAvailable(item.currentState),
  );
}

function assertUniqueWardrobeItemIds(items: readonly WardrobeItem[]): void {
  const itemIds = new Set(items.map((item) => item.id));

  if (itemIds.size !== items.length) {
    throw new Error("An Inventory cannot contain duplicate WardrobeItem IDs.");
  }
}
