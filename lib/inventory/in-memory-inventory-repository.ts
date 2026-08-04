import type { CanonicalId } from "@/lib/domain/canonical-id";
import type { Inventory } from "@/lib/inventory/inventory";
import type { InventoryRepository } from "@/lib/inventory/inventory-repository";
import type { WardrobeItem } from "@/lib/inventory/wardrobe-item";

export function createInMemoryInventoryRepository(
  initialInventories: readonly Inventory[] = [],
): InventoryRepository {
  const inventories = new Map<CanonicalId, Inventory>();

  for (const inventory of initialInventories) {
    if (inventories.has(inventory.id)) {
      throw new Error(`Inventory ${inventory.id} already exists.`);
    }

    inventories.set(inventory.id, cloneInventory(inventory));
  }

  return {
    async findById(inventoryId) {
      const inventory = inventories.get(inventoryId);

      return inventory ? cloneInventory(inventory) : null;
    },

    async create(inventory) {
      if (inventories.has(inventory.id)) {
        throw new Error(`Inventory ${inventory.id} already exists.`);
      }

      inventories.set(inventory.id, cloneInventory(inventory));
    },

    async save(inventory, expectedVersion) {
      const existingInventory = inventories.get(inventory.id);

      if (!existingInventory) {
        throw new Error(`Inventory ${inventory.id} does not exist.`);
      }

      if (existingInventory.version !== expectedVersion) {
        throw new Error(
          `Inventory ${inventory.id} version conflict: expected ${expectedVersion}, found ${existingInventory.version}.`,
        );
      }

      inventories.set(inventory.id, cloneInventory(inventory));
    },
  };
}

function cloneInventory(inventory: Inventory): Inventory {
  return {
    ...inventory,
    wardrobeItems: inventory.wardrobeItems.map(cloneWardrobeItem),
  };
}

function cloneWardrobeItem(item: WardrobeItem): WardrobeItem {
  return {
    ...item,
    tags: [...item.tags],
  };
}
