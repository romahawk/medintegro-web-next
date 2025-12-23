export const locales = ["en", "ua"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ua";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
