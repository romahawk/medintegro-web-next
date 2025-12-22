import type { Locale } from "@/lib/i18n/locales";

export type PageSlug = "home" | "about" | "equipment" | "contact";

export type Seo = {
  title: string;
  description: string;
  ogImage?: string; // e.g. "/og-default.png"
};

export type LinkItem = { label: string; href: string };

export type HomeContent = {
  slug: "home";
  locale: Locale;
  seo: Seo;
  hero: {
    title: string;
    subtitle?: string;
    primaryCta?: LinkItem;
    secondaryCta?: LinkItem;
  };
  features?: Array<{ title: string; description: string }>;
  cta?: { title: string; description?: string; button?: LinkItem };
};

export type SimplePageContent = {
  slug: Exclude<PageSlug, "home">;
  locale: Locale;
  seo: Seo;
  header: { title: string; subtitle?: string };
  sections: Array<{ title?: string; body: string }>;
};

export type PageContent = HomeContent | SimplePageContent;
