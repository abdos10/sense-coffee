import type { Metadata } from "next";

export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...overrides,
  };
}
