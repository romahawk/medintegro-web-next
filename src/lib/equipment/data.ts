import type { EquipmentCategory, EquipmentProduct } from "./types";

const SURGIMEDIA_SITE = "https://www.surgimedia.com"; // TODO: replace with specific pages if needed

const OR_PRODUCTS: EquipmentProduct[] = [
  // Standalone
  {
    key: "surgimedia-xxl-4k",
    category: "or",
    brand: "SurgiMedia",
    line: "standalone",
    name: "SurgiMedia XXL 4K",
    summary: {
      ua: "Великоформатне 4K рішення для відображення відео/даних у операційній, інтегрується у стіну.",
      en: "Large-format 4K solution for displaying OR video/data, designed for in-wall integration.",
    },
    highlights: {
      ua: [
        "4K відображення в реальному часі",
        "Підключення кількох джерел",
        "Організація PIP/PAP (залежить від конфігурації)",
        "Фокус на гігієні та ергономіці",
      ],
      en: [
        "Real-time 4K display",
        "Multiple source connectivity",
        "PIP/PAP composition (config-dependent)",
        "Hygiene & ergonomics oriented",
      ],
    },
    url: "https://www.surgimedia.com/products/product-xxl-4k",
  },
  {
    key: "surgimedia-compact",
    category: "or",
    brand: "SurgiMedia",
    line: "standalone",
    name: "SurgiMedia Compact",
    summary: {
      ua: "Компактний HD/4K відео-рекордер/менеджер для операційної без структурних змін приміщення.",
      en: "Compact HD/4K video recorder/manager for ORs, deployable without structural room modifications.",
    },
    highlights: {
      ua: [
        "Швидке впровадження",
        "Гнучке розширення опціями",
        "Запис/архівація (за конфігурацією)",
        "Підходить для оновлення існуючих OR",
      ],
      en: [
        "Fast deployment",
        "Option-based expandability",
        "Recording/archiving (config-dependent)",
        "Good fit for upgrading existing ORs",
      ],
    },
    url: "https://www.surgimedia.com/products/compact",
  },

  // Integrated OR (IP)
  {
    key: "surgimedia-distriview-4k-ip",
    category: "or",
    brand: "SurgiMedia",
    line: "integrated",
    name: "SurgiMedia DistriVIEW 4K-IP",
    summary: {
      ua: "Рековий мультимедійний 4K-IP комплекс для розподілу, відображення, передачі та зберігання хірургічного відео й даних пацієнта.",
      en: "Rack-based 4K-IP multimedia platform for distributing, displaying, transmitting, and storing surgical video and patient data.",
    },
    highlights: {
      ua: [
        "IP-архітектура (encoders/decoders)",
        "Маршрутизація та диспетчеризація сигналів",
        "Запис/стрімінг (опційно)",
        "Підходить для масштабування під кілька OR",
      ],
      en: [
        "IP architecture (encoders/decoders)",
        "Signal routing & dispatch",
        "Recording/streaming (optional)",
        "Scales across multiple ORs",
      ],
    },
    url: "https://www.surgimedia.com/products/distriview-4k-ip",
  },
  {
    key: "surgimedia-multiview-4k-ip",
    category: "or",
    brand: "SurgiMedia",
    line: "integrated",
    name: "SurgiMedia MultiVIEW 4K-IP",
    summary: {
      ua: "4K-IP рішення для гібридних OR: централізує відео та дані (в т.ч. DICOM) і спрощує роботу з файлом пацієнта.",
      en: "4K-IP solution for hybrid ORs: centralizes video and data (incl. DICOM) and streamlines patient-file workflows.",
    },
    highlights: {
      ua: [
        "Композиція кількох джерел на 4K екрані",
        "DICOM/дані пацієнта (за інтеграцією)",
        "Зручні сенсорні панелі керування",
        "Опції колаборації/обміну (за політиками закладу)",
      ],
      en: [
        "Multi-source composition on 4K displays",
        "DICOM/patient data (integration-dependent)",
        "Touch-based control UX",
        "Collaboration/sharing options (policy-dependent)",
      ],
    },
    url: "https://www.surgimedia.com/products/multiview-4k-ip",
  },
];

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    key: "or",
    iconKey: "video",
    title: { ua: "Операційна", en: "Operating room" },
    lead: {
      ua: "Інтеграція відео/аудіо, керування джерелами, запис і розповсюдження контенту в OR.",
      en: "Video/audio integration, source control, recording, and content distribution in the OR.",
    },
    chips: {
      ua: ["I-OR", "Відео маршрутизація", "Запис/стрім"],
      en: ["I-OR", "Video routing", "Recording/streaming"],
    },
    includes: {
      ua: [
        "Керування джерелами відео/аудіо та відображенням (PIP/PAP за конфігурацією).",
        "Запис та архівація процедур (за політиками клініки).",
        "Сумісність з ендоскопією, мікроскопією, PTZ-камерами, DICOM/PACS (де потрібно).",
      ],
      en: [
        "Control of video/audio sources and display (PIP/PAP config-dependent).",
        "Procedure recording and archiving (per hospital policies).",
        "Compatibility with endoscopy, microscopy, PTZ cameras, DICOM/PACS (where needed).",
      ],
    },
    products: OR_PRODUCTS,
  },

  // Safe placeholders (no products yet)
  {
    key: "integration",
    iconKey: "layers",
    title: { ua: "Інтеграції та ІТ-контур", en: "Integrations & IT contour" },
    lead: {
      ua: "Підключення медичних систем до цифрової інфраструктури лікарні.",
      en: "Connecting medical systems to the hospital’s digital infrastructure.",
    },
    chips: { ua: ["PACS", "EMR", "Мульти-джерела"], en: ["PACS", "EMR", "Multi-source"] },
    includes: {
      ua: [
        "Інтеграція між системами (дані, зображення, робочі місця).",
        "Вимоги до мережі/безпеки/сегментації.",
        "Документація: схеми, специфікації, протоколи тестування.",
      ],
      en: [
        "Inter-system integrations (data, images, workstations).",
        "Network/security/segmentation requirements.",
        "Documentation: diagrams, specs, test protocols.",
      ],
    },
  },
  {
    key: "monitoring",
    iconKey: "monitor",
    title: { ua: "Медичні монітори та відео", en: "Medical monitors & video" },
    lead: {
      ua: "Хірургічні та діагностичні монітори, медичні дисплеї, сигнальний ланцюг.",
      en: "Surgical & diagnostic monitors, medical displays, signal chain.",
    },
    chips: { ua: ["OR монітори", "Діагностика", "Кабелі/сигнал"], en: ["OR displays", "Diagnostics", "Cabling/signal"] },
  },
  {
    key: "icu",
    iconKey: "activity",
    title: { ua: "ICU / критична інфраструктура", en: "ICU / critical infrastructure" },
    lead: { ua: "Рішення для палат інтенсивної терапії та критичних зон.", en: "Solutions for intensive care and critical environments." },
    chips: { ua: ["Підвіси/консолі", "Робочі місця", "Потоки"], en: ["Pendents/booms", "Workstations", "Flows"] },
  },
  {
    key: "gas",
    iconKey: "wind",
    title: { ua: "Медичні гази та розподіл", en: "Medical gases & distribution" },
    lead: { ua: "Газові мережі, точки підключення, контроль та безпека.", en: "Gas networks, outlets, control, and safety." },
    chips: { ua: ["Мережі", "Точки", "Безпека"], en: ["Networks", "Outlets", "Safety"] },
  },
  {
    key: "lights",
    iconKey: "cable",
    title: { ua: "Оснащення OR: світло та аксесуари", en: "OR equipping: lights & accessories" },
    lead: { ua: "Хірургічне освітлення, підвіси, компоненти робочого середовища.", en: "Surgical lighting, pendants, and OR environment components." },
    chips: { ua: ["Освітлення", "Підвіси", "Інфраструктура"], en: ["Lighting", "Pendants", "Infrastructure"] },
  },
  {
    key: "service",
    iconKey: "wrench",
    title: { ua: "Сервіс і підтримка", en: "Service & support" },
    lead: { ua: "Запуск, налаштування, навчання і підтримка протягом життєвого циклу.", en: "Go-live, configuration, training, and lifecycle support." },
    chips: { ua: ["Запуск", "Налаштування", "Підтримка"], en: ["Go-live", "Configuration", "Support"] },
  },
];

export const PRODUCT_LINE_LABEL: Record<"standalone" | "integrated", { ua: string; en: string }> = {
  standalone: { ua: "Standalone", en: "Standalone" },
  integrated: { ua: "Інтегрована OR", en: "Integrated OR" },
};
