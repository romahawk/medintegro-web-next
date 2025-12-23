import type { SimplePageContent } from "@/lib/content/types";

const equipment: SimplePageContent = {
  slug: "equipment",
  locale: "en",
  seo: {
    title: "Equipment — Medintegro",
    description:
      "Portfolio of equipment and integrated solutions: integrated OR, surgical lights, medical pendants, monitors, recorders, telemedicine and digital systems.",
  },
  header: {
    title: "Equipment",
    subtitle:
      "Key solutions and equipment for modern ORs, ICUs and digital healthcare.",
  },
  sections: [
    {
      title: "Integrated OR (SURGIMEDIA)",
      body: "Integration of video/audio, patient data and OR devices into a single controlled environment.",
    },
    {
      title: "Surgical lights (SURGIRIS)",
      body: "OR lighting solutions designed for real clinical workflows.",
    },
    {
      title: "Medical pendants / suspension systems (SURGIRIS)",
      body: "Configurable pendants for OR and ICU environments with optimized cable/tube management.",
    },
    {
      title: "Medical monitors",
      body: "Professional displays for OR and clinical visualization (selected per use case).",
    },
    {
      title: "Medical video recorders (MediCapture)",
      body: "Recording and management of medical video for ORs and procedure rooms.",
    },
    {
      title: "Telemedicine & digital solutions",
      body: "Platforms and workstations for telemedicine scenarios and digital collaboration.",
    },
  ],
};

export default equipment;
