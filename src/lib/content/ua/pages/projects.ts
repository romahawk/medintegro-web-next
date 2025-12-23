import type { SimplePageContent } from "@/lib/content/types";

const projects: SimplePageContent = {
  slug: "projects",
  locale: "ua",
  seo: {
    title: "Проєкти — Medintegro",
    description: "Приклади реалізованих рішень (MVP: статичний перелік).",
  },
  header: {
    title: "Проєкти",
    subtitle: "Типові впровадження та реалізовані рішення.",
  },
  sections: [
    {
      title: "Інтегровані рішення для ОР / ICU",
      body: "Поставка під ключ з координацією монтажу та запуску.",
    },
    {
      title: "Оновлення інфраструктури лікарень",
      body: "Планування, постачання та інтеграція у мультивендорному середовищі.",
    },
    {
      title: "Навчання та впровадження",
      body: "Програми навчання для медичного та технічного персоналу.",
    },
  ],
};

export default projects;
