import type { SimplePageContent } from "@/lib/content/types";

const services: SimplePageContent = {
  slug: "services",
  locale: "en",
  seo: {
    title: "Services — Medintegro",
    description:
      "Needs assessment, equipment selection, planning/design, supply & installation, training, service and software configuration.",
  },
  header: {
    title: "Services",
    subtitle: "Full delivery cycle — from scope definition to stable operations.",
  },
  sections: [
    {
      title: "Needs assessment & equipment selection",
      body: "We clarify requirements and propose the best-fit configuration.",
    },
    {
      title: "Planning & design",
      body: "Support with technical planning, integration approach and infrastructure readiness.",
    },
    {
      title: "Supply & installation",
      body: "Coordinate delivery, on-site installation and commissioning support.",
    },
    {
      title: "Training",
      body: "Training for clinical staff and technical teams.",
    },
    {
      title: "Service & support",
      body: "Maintenance planning, service coordination and operational support.",
    },
    {
      title: "Software configuration",
      body: "Configuration and basic optimization aligned to workflows.",
    },
  ],
};

export default services;
