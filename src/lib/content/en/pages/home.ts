import type { HomeContent } from "@/lib/content/types";

const home: HomeContent = {
  slug: "home",
  locale: "en",
  seo: {
    title: "Medintegro — Integration of modern medical technologies",
    description:
      "Integrated OR solutions, surgical equipment, medical gas infrastructure and digital ecosystems. Turnkey delivery: planning, supply, installation, training, service.",
  },
  hero: {
    title: "We integrate modern medical technologies and digital ecosystems",
    subtitle:
      "Clear scope, predictable delivery, and support after go-live.",
    primaryCta: { label: "Services", href: "/services" },
    secondaryCta: { label: "Contact", href: "/contact" },
  },
  features: [
    {
      title: "Turnkey integration projects",
      description: "Planning → supply → installation → commissioning → training.",
    },
    {
      title: "Best-fit solutions",
      description: "We select equipment and architecture for your specific project.",
    },
    {
      title: "Training & service",
      description: "Equipment support and software configuration after deployment.",
    },
  ],
  cta: {
    title: "Need a consultation?",
    description: "Message or call — we’ll align scope and next steps.",
    button: { label: "Get in touch", href: "/contact" },
  },
};

export default home;
