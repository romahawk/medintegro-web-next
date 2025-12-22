import type { SimplePageContent } from "@/lib/content/types";

const about: SimplePageContent = {
  slug: "about",
  locale: "en",
  seo: {
    title: "About — Medintegro",
    description: "Who we are and how we work.",
  },
  header: {
    title: "About",
    subtitle: "We deliver MedTech projects with clarity and control.",
  },
  sections: [
    { body: "We focus on predictable delivery, clear documentation, and practical integration." },
    { title: "What we do", body: "Equipment supply, integration, training, and ongoing service." },
  ],
};

export default about;
