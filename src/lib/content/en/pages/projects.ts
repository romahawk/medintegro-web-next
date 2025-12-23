import type { SimplePageContent } from "@/lib/content/types";

const projects: SimplePageContent = {
  slug: "projects",
  locale: "en",
  seo: {
    title: "Projects — Medintegro",
    description: "Selected projects and delivered solutions.",
  },
  header: {
    title: "Projects",
    subtitle: "Representative implementations (MVP: static showcase).",
  },
  sections: [
    {
      title: "Integrated OR / ICU solutions",
      body: "Turnkey delivery with installation and commissioning coordination.",
    },
    {
      title: "Hospital infrastructure upgrades",
      body: "Planning, sourcing, and integration support across multiple vendors.",
    },
    {
      title: "Training & adoption",
      body: "Enablement programs for clinical staff and technical teams.",
    },
  ],
};

export default projects;
