import type { SimplePageContent } from "@/lib/content/types";

const about: SimplePageContent = {
  slug: "about",
  locale: "ua",
  seo: {
    title: "Про нас — Medintegro",
    description: "Хто ми і як працюємо.",
  },
  header: {
    title: "Про нас",
    subtitle: "Постачаємо та інтегруємо MedTech рішення з контролем якості.",
  },
  sections: [
    { body: "Фокус — на передбачуваній реалізації, документації та практичній інтеграції." },
    { title: "Що робимо", body: "Постачання, інтеграція, навчання, сервіс." },
  ],
};

export default about;
