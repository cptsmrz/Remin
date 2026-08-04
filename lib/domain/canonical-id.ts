/**
 * A stable, storage-independent identity for a Remin entity or event.
 */
export type CanonicalId = string & {
  readonly __canonicalId: unique symbol;
};

export function createCanonicalId(
  prefix: string,
  identifier: string,
): CanonicalId {
  if (prefix.length === 0 || identifier.length === 0) {
    throw new Error("A Canonical ID requires a prefix and an identifier.");
  }

  if (prefix.includes("_") || identifier.startsWith("_")) {
    throw new Error("A Canonical ID must use one prefix followed by an identifier.");
  }

  return `${prefix}_${identifier}` as CanonicalId;
}
