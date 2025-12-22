import type { HomeContent } from "@/lib/content/types";

const home: HomeContent = {
  slug: "home",
  locale: "ua",
  seo: {
    title: "Medintegro — сучасні медтех рішення",
    description: "Огляд компанії, обладнання та послуги.",
  },
  hero: {
    title: "Сучасні MedTech рішення",
    subtitle: "Прозорий процес, швидка доставка, довгострокова підтримка.",
    primaryCta: { label: "Обладнання", href: "/equipment" },
    secondaryCta: { label: "Контакти", href: "/contact" },
  },
  features: [
    { title: "Проєкти під ключ", description: "Від планування до запуску." },
    { title: "Надійні бренди", description: "Перевірені виробники та інтегратори." },
    { title: "Сервіс і навчання", description: "Підтримка, сервіс, навчання персоналу." },
  ],
  cta: {
    title: "Потрібна консультація?",
    description: "Опишіть задачу та терміни — відповімо швидко.",
    button: { label: "Написати", href: "/contact" },
  },
};

export default home;
