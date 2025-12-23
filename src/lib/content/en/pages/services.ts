import type { SimplePageContent } from "@/lib/content/types";

const services: SimplePageContent = {
  slug: "services",
  locale: "en",
  seo: {
    title: "Services — Medintegro",
    description: "What we deliver: planning, supply, integration, training, support.",
  },
  header: {
    title: "Services",
    subtitle: "Clear scope. Predictable delivery. Long-term support.",
  },
  sections: [
    {
      title: "Consulting & planning",
      body: "Requirements analysis, technical planning, vendor selection, project roadmap.",
    },
    {
      title: "Equipment supply",
      body: "Sourcing, logistics coordination, documentation, acceptance readiness.",
    },
    {
      title: "Installation & integration",
      body: "On-site installation, system integration, testing and commissioning support.",
    },
    {
      title: "Training & service",
      body: "Staff training, maintenance planning, service coordination and lifecycle support.",
    },
  ],
};

export default services;
