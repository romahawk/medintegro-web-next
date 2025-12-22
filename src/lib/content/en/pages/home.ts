import type { HomeContent } from "@/lib/content/types";

const home: HomeContent = {
  slug: "home",
  locale: "en",
  seo: {
    title: "Medintegro — Modern MedTech Solutions",
    description: "Corporate overview, equipment, and services.",
  },
  hero: {
    title: "Modern MedTech solutions",
    subtitle: "Clean delivery, transparent process, long-term support.",
    primaryCta: { label: "Explore equipment", href: "/equipment" },
    secondaryCta: { label: "Contact", href: "/contact" },
  },
  features: [
    { title: "Turnkey projects", description: "From planning to commissioning." },
    { title: "Reliable vendors", description: "Proven brands and integration partners." },
    { title: "Long-term support", description: "Training, service, maintenance." },
  ],
  cta: {
    title: "Need a quick consultation?",
    description: "Tell us your scope and timeline.",
    button: { label: "Get in touch", href: "/contact" },
  },
};

export default home;
