import type { SimplePageContent } from "@/lib/content/types";

const about: SimplePageContent = {
  slug: "about",
  locale: "en",
  seo: {
    title: "About — Medintegro",
    description:
      "Our mission is to integrate state-of-the-art medical technologies and build digital medical ecosystems.",
  },
  header: {
    title: "About Medintegro",
    subtitle: "We focus on delivering medical equipment integration projects.",
  },
  sections: [
    {
      title: "Mission",
      body: "Integrating state-of-the-art medical technologies and creating digital medical ecosystems.",
    },
    {
      title: "How we work",
      body:
        "Together with the client we define the optimal solution for the project: needs assessment, equipment selection, planning and design, supply and installation, staff training, service and software configuration.",
    },
    {
      title: "Values",
      body:
        "Care about people. Work professionally. Be effective — proven by successful use of solutions in leading clinics and healthcare systems.",
    },
    {
      title: "Partners",
      body:
        "ISIS SAS / Surgimedia; SURGIRIS SAS; ADVANTECH; MEDICAPTURE; ERGOMOUNTS; FSN; TELEMIS; AG NEOVO.",
    },
  ],
};

export default about;
