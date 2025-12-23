import type { SimplePageContent } from "@/lib/content/types";

const contact: SimplePageContent = {
  slug: "contact",
  locale: "ua",
  seo: {
    title: "Контакти — Medintegro",
    description: "Зв’яжіться з нами для консультації по рішенням та послугам.",
  },
  header: {
    title: "Контакти",
    subtitle:
      "Якщо у вас є питання або потрібна консультація — ми радо допоможемо.",
  },
  sections: [
    {
      title: "Адреса",
      body: "Україна, м. Київ, пр-т Ак. Корольова 1, оф. 16",
    },
    {
      title: "Контакти",
      body: "e-mail: info@medintegro.com.ua • тел.: +38 067 214 214 4",
    },
    {
      title: "Години роботи",
      body: "Пн – Пт: 9:00 – 18:00 • Сб, Нд — зачинено",
    },
    {
      title: "Напишіть нам",
      body: "Зацікавлені у рішеннях або маєте загальне запитання? Напишіть нам на email — відповімо.",
    },
  ],
};

export default contact;
