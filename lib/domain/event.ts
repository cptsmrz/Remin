import type { CanonicalId } from "@/lib/domain/canonical-id";

export type ModuleName =
  | "Argus"
  | "Fyodor"
  | "Loom"
  | "Mirin"
  | "Orbit"
  | "Prism"
  | "Remira"
  | "Weave";

/**
 * The canonical, immutable shape of an event recorded by a Remin module.
 */
export interface CanonicalEvent<EventType extends string, Payload> {
  readonly eventId: CanonicalId;
  readonly eventType: EventType;
  readonly timestamp: string;
  readonly correlationId: CanonicalId;
  readonly causationId?: CanonicalId;
  readonly version: number;
  readonly sourceModule: ModuleName;
  readonly domain: string;
  readonly payload: Readonly<Payload>;
}
