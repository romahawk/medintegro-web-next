import type { SimplePageContent } from "@/lib/content/types";

const contact: SimplePageContent = {
  slug: "contact",
  locale: "en",
  seo: {
    title: "Contact — Medintegro",
    description: "Contact us for a consultation on solutions and services.",
  },
  header: {
    title: "Contact",
    subtitle: "Have questions or need a consultation? We’re happy to help.",
  },
  sections: [
    {
      title: "Address",
      body: "Kyiv, Ukraine — Acad. Korolyova Ave 1, office 16",
    },
    {
      title: "Contacts",
      body: "Email: info@medintegro.com.ua • Phone: +38 067 214 214 4",
    },
    {
      title: "Working hours",
      body: "Mon–Fri: 9:00–18:00 • Sat/Sun: closed",
    },
    {
      title: "Message us",
      body: "Interested in solutions or have a general question? Email us — we’ll respond.",
    },
  ],
};

export default contact;
