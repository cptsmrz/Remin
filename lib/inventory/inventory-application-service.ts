import type { CanonicalId } from "@/lib/domain/canonical-id";
import {
  addWardrobeItem,
  createInventory,
  findWardrobeItemById,
  replaceWardrobeItem,
  type Inventory,
} from "@/lib/inventory/inventory";
import {
  createWardrobeItemAddedEvent,
  createWardrobeItemArchivedEvent,
  createWardrobeItemRestoredEvent,
  createWardrobeItemStateChangedEvent,
  createWardrobeItemUpdatedEvent,
  type InventoryDomainEvent,
  type InventoryEventMetadata,
} from "@/lib/inventory/inventory-events";
import type { InventoryRepository } from "@/lib/inventory/inventory-repository";
import {
  archiveWardrobeItem as archiveWardrobeItemEntity,
  createWardrobeItem,
  restoreWardrobeItem as restoreWardrobeItemEntity,
  transitionWardrobeItemState,
  updateWardrobeItem,
  type CreateWardrobeItemInput,
  type UpdateWardrobeItemInput,
} from "@/lib/inventory/wardrobe-item";
import type { WardrobeItemState } from "@/lib/inventory/wardrobe-item-state";

export interface InventoryApplicationService {
  createInventory(
    command: CreateInventoryCommand,
  ): Promise<InventoryApplicationResult<never>>;
  addWardrobeItem(
    command: AddWardrobeItemCommand,
  ): Promise<InventoryApplicationResult<InventoryDomainEvent>>;
  updateWardrobeItem(
    command: UpdateWardrobeItemCommand,
  ): Promise<InventoryApplicationResult<InventoryDomainEvent>>;
  changeWardrobeItemState(
    command: ChangeWardrobeItemStateCommand,
  ): Promise<InventoryApplicationResult<InventoryDomainEvent>>;
  archiveWardrobeItem(
    command: ArchiveWardrobeItemCommand,
  ): Promise<InventoryApplicationResult<InventoryDomainEvent>>;
  restoreWardrobeItem(
    command: RestoreWardrobeItemCommand,
  ): Promise<InventoryApplicationResult<InventoryDomainEvent>>;
}

export interface InventoryApplicationDependencies {
  readonly inventoryRepository: InventoryRepository;
}

export interface InventoryApplicationResult<
  Event extends InventoryDomainEvent | never,
> {
  readonly inventory: Inventory;
  readonly events: readonly Event[];
}

export interface CreateInventoryCommand {
  readonly inventoryId: CanonicalId;
}

export interface AddWardrobeItemCommand {
  readonly inventoryId: CanonicalId;
  readonly item: CreateWardrobeItemInput;
  readonly eventMetadata: InventoryEventMetadata;
}

export interface UpdateWardrobeItemCommand {
  readonly inventoryId: CanonicalId;
  readonly wardrobeItemId: CanonicalId;
  readonly update: UpdateWardrobeItemInput;
  readonly eventMetadata: InventoryEventMetadata;
}

export interface ChangeWardrobeItemStateCommand {
  readonly inventoryId: CanonicalId;
  readonly wardrobeItemId: CanonicalId;
  readonly nextState: WardrobeItemState;
  readonly eventMetadata: InventoryEventMetadata;
}

export interface ArchiveWardrobeItemCommand {
  readonly inventoryId: CanonicalId;
  readonly wardrobeItemId: CanonicalId;
  readonly eventMetadata: InventoryEventMetadata;
}

export interface RestoreWardrobeItemCommand {
  readonly inventoryId: CanonicalId;
  readonly wardrobeItemId: CanonicalId;
  readonly restoredState: Exclude<WardrobeItemState, "Archived">;
  readonly eventMetadata: InventoryEventMetadata;
}

export function createInventoryApplicationService(
  dependencies: InventoryApplicationDependencies,
): InventoryApplicationService {
  const { inventoryRepository } = dependencies;

  return {
    async createInventory(command) {
      const existingInventory = await inventoryRepository.findById(
        command.inventoryId,
      );

      if (existingInventory) {
        throw new Error(`Inventory ${command.inventoryId} already exists.`);
      }

      const inventory = createInventory({ id: command.inventoryId });

      await inventoryRepository.create(inventory);

      return {
        inventory,
        events: [],
      };
    },

    async addWardrobeItem(command) {
      const inventory = await loadInventory(
        inventoryRepository,
        command.inventoryId,
      );
      const item = createWardrobeItem(command.item);
      const updatedInventory = addWardrobeItem(inventory, item);
      const event = createWardrobeItemAddedEvent(command.eventMetadata, {
        inventoryId: updatedInventory.id,
        inventoryVersion: updatedInventory.version,
        item,
      });

      await inventoryRepository.save(updatedInventory, inventory.version);

      return {
        inventory: updatedInventory,
        events: [event],
      };
    },

    async updateWardrobeItem(command) {
      const inventory = await loadInventory(
        inventoryRepository,
        command.inventoryId,
      );
      const item = requireWardrobeItem(inventory, command.wardrobeItemId);
      const updatedItem = updateWardrobeItem(item, command.update);
      const updatedInventory = replaceWardrobeItem(inventory, updatedItem);
      const event = createWardrobeItemUpdatedEvent(command.eventMetadata, {
        inventoryId: updatedInventory.id,
        inventoryVersion: updatedInventory.version,
        wardrobeItemId: updatedItem.id,
        wardrobeItemVersion: updatedItem.version,
        category: command.update.category,
        notes: command.update.notes,
        tags: command.update.tags,
      });

      await inventoryRepository.save(updatedInventory, inventory.version);

      return {
        inventory: updatedInventory,
        events: [event],
      };
    },

    async changeWardrobeItemState(command) {
      const inventory = await loadInventory(
        inventoryRepository,
        command.inventoryId,
      );
      const item = requireWardrobeItem(inventory, command.wardrobeItemId);
      const updatedItem = transitionWardrobeItemState(
        item,
        command.nextState,
      );
      const updatedInventory = replaceWardrobeItem(inventory, updatedItem);
      const event = createWardrobeItemStateChangedEvent(
        command.eventMetadata,
        {
          inventoryId: updatedInventory.id,
          inventoryVersion: updatedInventory.version,
          wardrobeItemId: updatedItem.id,
          wardrobeItemVersion: updatedItem.version,
          previousState: item.currentState,
          currentState: updatedItem.currentState,
        },
      );

      await inventoryRepository.save(updatedInventory, inventory.version);

      return {
        inventory: updatedInventory,
        events: [event],
      };
    },

    async archiveWardrobeItem(command) {
      const inventory = await loadInventory(
        inventoryRepository,
        command.inventoryId,
      );
      const item = requireWardrobeItem(inventory, command.wardrobeItemId);

      if (item.currentState === "Archived") {
        throw new Error("A WardrobeItem is already archived.");
      }

      const updatedItem = archiveWardrobeItemEntity(item);
      const updatedInventory = replaceWardrobeItem(inventory, updatedItem);
      const event = createWardrobeItemArchivedEvent(command.eventMetadata, {
        inventoryId: updatedInventory.id,
        inventoryVersion: updatedInventory.version,
        wardrobeItemId: updatedItem.id,
        wardrobeItemVersion: updatedItem.version,
        previousState: item.currentState,
      });

      await inventoryRepository.save(updatedInventory, inventory.version);

      return {
        inventory: updatedInventory,
        events: [event],
      };
    },

    async restoreWardrobeItem(command) {
      const inventory = await loadInventory(
        inventoryRepository,
        command.inventoryId,
      );
      const item = requireWardrobeItem(inventory, command.wardrobeItemId);
      const updatedItem = restoreWardrobeItemEntity(
        item,
        command.restoredState,
      );
      const updatedInventory = replaceWardrobeItem(inventory, updatedItem);
      const event = createWardrobeItemRestoredEvent(command.eventMetadata, {
        inventoryId: updatedInventory.id,
        inventoryVersion: updatedInventory.version,
        wardrobeItemId: updatedItem.id,
        wardrobeItemVersion: updatedItem.version,
        restoredState: command.restoredState,
      });

      await inventoryRepository.save(updatedInventory, inventory.version);

      return {
        inventory: updatedInventory,
        events: [event],
      };
    },
  };
}

async function loadInventory(
  inventoryRepository: InventoryRepository,
  inventoryId: CanonicalId,
): Promise<Inventory> {
  const inventory = await inventoryRepository.findById(inventoryId);

  if (!inventory) {
    throw new Error(`Inventory ${inventoryId} does not exist.`);
  }

  return inventory;
}

function requireWardrobeItem(
  inventory: Inventory,
  wardrobeItemId: CanonicalId,
) {
  const item = findWardrobeItemById(inventory, wardrobeItemId);

  if (!item) {
    throw new Error(`No WardrobeItem exists with ID ${wardrobeItemId}.`);
  }

  return item;
}
