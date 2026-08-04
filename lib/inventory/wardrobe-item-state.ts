export const WARDROBE_ITEM_STATES = [
  "Available",
  "Worn",
  "Laundry",
  "Washed",
  "Ironed",
  "Archived",
] as const;

export type WardrobeItemState = (typeof WARDROBE_ITEM_STATES)[number];

const VALID_STATE_TRANSITIONS: Readonly<
  Record<WardrobeItemState, readonly WardrobeItemState[]>
> = {
  Available: ["Worn", "Archived"],
  Worn: ["Laundry", "Archived"],
  Laundry: ["Washed", "Archived"],
  Washed: ["Ironed", "Available", "Archived"],
  Ironed: ["Available", "Archived"],
  Archived: [],
};

export function canTransitionWardrobeItemState(
  currentState: WardrobeItemState,
  nextState: WardrobeItemState,
): boolean {
  return VALID_STATE_TRANSITIONS[currentState].includes(nextState);
}

export function isWardrobeItemAvailable(state: WardrobeItemState): boolean {
  return state === "Available";
}
