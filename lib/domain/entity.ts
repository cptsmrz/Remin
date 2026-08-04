import type { CanonicalId } from "@/lib/domain/canonical-id";

/**
 * Fields shared by canonical entities, independent of how they are stored.
 */
export interface CanonicalEntity {
  readonly id: CanonicalId;
  readonly version: number;
}
