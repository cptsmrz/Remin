import type { CanonicalId } from "@/lib/domain/canonical-id";
import type { Inventory } from "@/lib/inventory/inventory";

/**
 * Persistence boundary for canonical Inventory state.
 *
 * Implementations are responsible for enforcing the expected version during save.
 */
export interface InventoryRepository {
  findById(inventoryId: CanonicalId): Promise<Inventory | null>;
  create(inventory: Inventory): Promise<void>;
  save(inventory: Inventory, expectedVersion: number): Promise<void>;
}
