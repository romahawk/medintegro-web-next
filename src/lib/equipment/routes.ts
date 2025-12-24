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

export function getCategoryKeyBySlug(slug: string | undefined | null): CategoryKey | null {
  const s = typeof slug === "string" ? slug.trim().toLowerCase() : "";
  if (!s) return null;

  const entry = (
    Object.entries(CATEGORY_SLUG_BY_KEY) as Array<[CategoryKey, CategorySlug]>
  ).find(([, v]) => v === s);

  return entry ? entry[0] : null;
}

export function isProductLine(v: string): v is ProductLine {
  return v === "standalone" || v === "integrated";
}

export function getCategoryHref(locale: string, key: CategoryKey): string {
  const slug = CATEGORY_SLUG_BY_KEY[key];
  return `/${locale}/equipment/${slug}`;
}

export function getLineHref(locale: string, key: CategoryKey, line: ProductLine): string {
  const slug = CATEGORY_SLUG_BY_KEY[key];
  return `/${locale}/equipment/${slug}/${line}`;
}
