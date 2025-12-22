import type { SimplePageContent } from "@/lib/content/types";

const contact: SimplePageContent = {
  slug: "contact",
  locale: "ua",
  seo: {
    title: "Контакти — Medintegro",
    description: "Звʼяжіться з нами.",
  },
  header: {
    title: "Контакти",
    subtitle: "Напишіть нам — відповідаємо швидко.",
  },
  sections: [
    { body: "Email: info@yourdomain.com" },
    { body: "Телефон: +XX XXX XXX XXX" },
  ],
};

export default contact;
