import type { Locale } from "@/lib/i18n/locales";
import type { PageContent, PageSlug } from "./types";

type Loader = () => Promise<{ default: PageContent }>;

// Registry = single source of truth for where content lives
const registry: Record<Locale, Record<PageSlug, Loader>> = {
  en: {
  home: () => import("@/lib/content/en/pages/home"),
  about: () => import("@/lib/content/en/pages/about"),
  equipment: () => import("@/lib/content/en/pages/equipment"),
  services: () => import("@/lib/content/en/pages/services"),
  projects: () => import("@/lib/content/en/pages/projects"),
  contact: () => import("@/lib/content/en/pages/contact"),
  },
  ua: {
    home: () => import("@/lib/content/ua/pages/home"),
    about: () => import("@/lib/content/ua/pages/about"),
    equipment: () => import("@/lib/content/ua/pages/equipment"),
    services: () => import("@/lib/content/ua/pages/services"),
    projects: () => import("@/lib/content/ua/pages/projects"),
    contact: () => import("@/lib/content/ua/pages/contact"),
  },

};

export async function getPage(locale: Locale, slug: PageSlug): Promise<PageContent> {
  const loader = registry[locale]?.[slug];
  if (!loader) {
    throw new Error(`Missing content for locale="${locale}" slug="${slug}"`);
  }

  const mod = await loader();
  return mod.default;
}
