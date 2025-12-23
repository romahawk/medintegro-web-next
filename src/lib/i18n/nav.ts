import type { Locale } from "@/lib/i18n/locales";

export type NavKey = "services" | "projects" | "equipment" | "about" | "contact";

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  en: {
    services: "Services",
    projects: "Projects",
    equipment: "Equipment",
    about: "About",
    contact: "Contact",
  },
  ua: {
    services: "Послуги",
    projects: "Проєкти",
    equipment: "Обладнання",
    about: "Про нас",
    contact: "Контакти",
  },
};
