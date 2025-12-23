import type { SimplePageContent } from "@/lib/content/types";

const projects: SimplePageContent = {
  slug: "projects",
  locale: "en",
  seo: {
    title: "Projects — Medintegro",
    description:
      "Typical implementations: integrated OR, video infrastructure, pendants and digital solutions.",
  },
  header: {
    title: "Projects",
    subtitle:
      "MVP: representative implementation types. Detailed case studies available on request.",
  },
  sections: [
    {
      title: "Integrated OR",
      body: "Integration of devices, video, data and control into a unified OR environment.",
    },
    {
      title: "OR video infrastructure",
      body: "Routing/display/recording of video signals with workflow-aligned integration.",
    },
    {
      title: "ICU / procedure room setups",
      body: "Pendants, monitors and configurations designed for real clinical usage.",
    },
    {
      title: "Telemedicine & digital solutions",
      body: "Selection and deployment of platforms/workstations for remote collaboration scenarios.",
    },
  ],
};

export default projects;
