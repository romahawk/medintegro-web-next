import type { CategoryKey, ProductLine } from "./types";

export type CategorySlug =
  | "or-integration"
  | "integration"
  | "monitoring"
  | "icu"
  | "gas"
  | "lights"
  | "service";

export const CATEGORY_SLUG_BY_KEY: Record<CategoryKey, CategorySlug> = {
  or: "or-integration",
  integration: "integration",
  monitoring: "monitoring",
  icu: "icu",
  gas: "gas",
  lights: "lights",
  service: "service",
};

export const CATEGORY_KEY_BY_SLUG: Record<CategorySlug, CategoryKey> = {
  "or-integration": "or",
  integration: "integration",
  monitoring: "monitoring",
  icu: "icu",
  gas: "gas",
  lights: "lights",
  service: "service",
};

export function isCategorySlug(v: string): v is CategorySlug {
  return v in CATEGORY_KEY_BY_SLUG;
}

export function isProductLine(v: string): v is ProductLine {
  return v === "standalone" || v === "integrated";
}
