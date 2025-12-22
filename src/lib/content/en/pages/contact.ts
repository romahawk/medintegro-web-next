import type { SimplePageContent } from "@/lib/content/types";

const contact: SimplePageContent = {
  slug: "contact",
  locale: "en",
  seo: {
    title: "Contact — Medintegro",
    description: "Get in touch with our team.",
  },
  header: {
    title: "Contact",
    subtitle: "Send a message — we reply fast.",
  },
  sections: [
    { body: "Email: info@yourdomain.com" },
    { body: "Phone: +XX XXX XXX XXX" },
  ],
};

export default contact;
