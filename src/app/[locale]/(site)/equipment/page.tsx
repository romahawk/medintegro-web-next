import Link from "next/link";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Video,
  Monitor,
  Wind,
  Activity,
  Wrench,
  ShieldCheck,
  Layers,
  Cable,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

type CategoryKey =
  | "or"
  | "integration"
  | "monitoring"
  | "icu"
  | "gas"
  | "lights"
  | "service";

type EquipmentCategory = {
  key: CategoryKey;
  icon: any;
  title: { ua: string; en: string };
  lead: { ua: string; en: string };
  chips: { ua: string[]; en: string[] };
  details: { ua: string[]; en: string[] };
};

const CATEGORIES: EquipmentCategory[] = [
  {
    key: "or",
    icon: Video,
    title: { ua: "Операційна", en: "Operating room" },
    lead: {
      ua: "Системи для відео, комунікацій та керування процесом в OR.",
      en: "Systems for video, communication, and workflow control in OR.",
    },
    chips: {
      ua: ["I-OR", "Відео маршрутизація", "Запис/стрім"],
      en: ["I-OR", "Video routing", "Recording/streaming"],
    },
    details: {
      ua: [
        "Системи інтеграції в операційній (керування джерелами відео/аудіо).",
        "Запис та архівація процедур, трансляція для навчання (за політиками клініки).",
        "Сумісність з ендоскопією, мікроскопією, PTZ-камерами, PACS / DICOM воркфлоу (де потрібно).",
      ],
      en: [
        "OR integration systems (control of video/audio sources).",
        "Procedure recording/archiving, training streaming (per hospital policies).",
        "Compatibility with endoscopy, microscopy, PTZ cameras, and PACS/DICOM workflows (where needed).",
      ],
    },
  },
  {
    key: "integration",
    icon: Layers,
    title: { ua: "Інтеграції та ІТ-контур", en: "Integrations & IT contour" },
    lead: {
      ua: "Підключення медичних систем до цифрової інфраструктури лікарні.",
      en: "Connecting medical systems to the hospital’s digital infrastructure.",
    },
    chips: {
      ua: ["PACS", "EMR", "Мульти-джерела"],
      en: ["PACS", "EMR", "Multi-source"],
    },
    details: {
      ua: [
        "Інтеграція між системами (дані, зображення, робочі місця).",
        "Вимоги до мережі, безпеки, сегментації та надійності (з ІТ служби).",
        "Документація: схеми, специфікації, протоколи тестування.",
      ],
      en: [
        "Inter-system integrations (data, images, workstations).",
        "Network/security/segmentation/reliability requirements with IT teams.",
        "Documentation: diagrams, specs, test protocols.",
      ],
    },
  },
  {
    key: "monitoring",
    icon: Monitor,
    title: { ua: "Медичні монітори та відео", en: "Medical monitors & video" },
    lead: {
      ua: "Хірургічні та діагностичні монітори, медичні дисплеї, сигнал.",
      en: "Surgical & diagnostic monitors, medical displays, signal chain.",
    },
    chips: {
      ua: ["OR монітори", "Діагностика", "Кабелі/сигнал"],
      en: ["OR displays", "Diagnostics", "Cabling/signal"],
    },
    details: {
      ua: [
        "Підбір дисплеїв під задачі: яскравість, роздільна здатність, захист, стандарти.",
        "Сигнальна інфраструктура: маршрутизація, кабелі, конвертери, точки підключення.",
        "Узгодження з інтеграцією OR та іншими джерелами.",
      ],
      en: [
        "Display selection: brightness, resolution, protection, standards.",
        "Signal infrastructure: routing, cabling, converters, connection points.",
        "Alignment with OR integration and other video sources.",
      ],
    },
  },
  {
    key: "icu",
    icon: Activity,
    title: { ua: "ICU / критична інфраструктура", en: "ICU / critical infrastructure" },
    lead: {
      ua: "Рішення для палат інтенсивної терапії та критичних зон.",
      en: "Solutions for intensive care and critical environments.",
    },
    chips: {
      ua: ["Підвіси/консолі", "Робочі місця", "Потоки"],
      en: ["Pendents/booms", "Workstations", "Flows"],
    },
    details: {
      ua: [
        "Підвісні системи, робочі місця, підготовка інфраструктури.",
        "Узгодження з медичними газами та електроживленням.",
        "Проєктування з урахуванням сервісу та доступності.",
      ],
      en: [
        "Ceiling pendants, workstations, infrastructure preparation.",
        "Alignment with medical gases and power.",
        "Design for serviceability and accessibility.",
      ],
    },
  },
  {
    key: "gas",
    icon: Wind,
    title: { ua: "Медичні гази та розподіл", en: "Medical gases & distribution" },
    lead: {
      ua: "Газові мережі, точки підключення, контроль та безпека.",
      en: "Gas networks, outlets, control, and safety.",
    },
    chips: {
      ua: ["Мережі", "Точки", "Безпека"],
      en: ["Networks", "Outlets", "Safety"],
    },
    details: {
      ua: [
        "Концепція та конфігурація під потреби відділень.",
        "Узгодження з інженерією будівлі та підрядниками.",
        "Документація та контроль відповідності вимогам безпеки.",
      ],
      en: [
        "Concept and configuration per department needs.",
        "Coordination with building engineering and contractors.",
        "Documentation and safety compliance control.",
      ],
    },
  },
  {
    key: "lights",
    icon: Cable,
    title: { ua: "Оснащення OR: світло та аксесуари", en: "OR equipping: lights & accessories" },
    lead: {
      ua: "Хірургічне освітлення, підвіси, компоненти робочого середовища.",
      en: "Surgical lighting, pendants, and OR environment components.",
    },
    chips: {
      ua: ["Освітлення", "Підвіси", "Інфраструктура"],
      en: ["Lighting", "Pendants", "Infrastructure"],
    },
    details: {
      ua: [
        "Підбір та інтеграція в архітектуру операційної.",
        "Планування монтажу і сервісного доступу.",
        "Сумісність з відео та інтеграційними системами (за потреби).",
      ],
      en: [
        "Selection and fit into OR architecture.",
        "Installation planning and service access.",
        "Compatibility with video/integration systems where needed.",
      ],
    },
  },
  {
    key: "service",
    icon: Wrench,
    title: { ua: "Сервіс і підтримка", en: "Service & support" },
    lead: {
      ua: "Запуск, налаштування, навчання і підтримка протягом життєвого циклу.",
      en: "Go-live, configuration, training, and lifecycle support.",
    },
    chips: {
      ua: ["Запуск", "Налаштування", "Підтримка"],
      en: ["Go-live", "Configuration", "Support"],
    },
    details: {
      ua: [
        "План сервісу та регламентні роботи.",
        "Налаштування ПЗ і базові протоколи перевірки.",
        "Підтримка користувачів і документація.",
      ],
      en: [
        "Service plan and preventive maintenance.",
        "Software configuration and baseline verification protocols.",
        "User support and documentation.",
      ],
    },
  },
];

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-2.5 py-1 text-xs text-muted-foreground">
      {text}
    </span>
  );
}

export default async function EquipmentPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  return (
    <>
      <Section spacing="hero">
        <PageHeader
          eyebrow={isUA ? "Обладнання" : "Equipment"}
          title={isUA ? "Категорії рішень та обладнання" : "Equipment & solution categories"}
          subtitle={
            isUA
              ? "Ми не робимо каталог. Ми групуємо рішення по задачах клініки: зрозуміло, структуровано, без зайвого."
              : "We don’t run a catalog. We group solutions by hospital needs — clear, structured, and practical."
          }
        />
      </Section>

      <Section tone="muted">
        <div className="grid gap-4 lg:grid-cols-2">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.key} className="border-border/60">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold">
                          {isUA ? c.title.ua : c.title.en}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {isUA ? c.lead.ua : c.lead.en}
                        </p>
                      </div>

                      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(isUA ? c.chips.ua : c.chips.en).map((t) => (
                        <Chip key={t} text={t} />
                      ))}
                    </div>

                    <div className="pt-1">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="details">
                          <AccordionTrigger className="text-sm">
                            {isUA ? "Що включає" : "What it includes"}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                              {(isUA ? c.details.ua : c.details.en).map((line) => (
                                <li key={line}>• {line}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-background p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div className="space-y-1">
              <div className="text-sm font-medium">{isUA ? "Важливо" : "Important"}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {isUA
                  ? "Підбір конфігурації залежить від задач відділення, простору, інженерії та ІТ-інфраструктури. Ми починаємо з вимог — і тільки потім переходимо до комплектації."
                  : "Configuration depends on department needs, space, engineering constraints, and IT infrastructure. We start with requirements — only then move to equipment lists."}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="dense">
        <CtaBand
          title={isUA ? "Потрібна комплектація під ваші задачі?" : "Need a configuration for your needs?"}
          subtitle={
            isUA
              ? "Опишіть відділення та контекст — ми запропонуємо структуру рішення та наступний крок."
              : "Describe the department and context — we’ll propose a solution structure and next step."
          }
          primary={{
            label: isUA ? "Зв’язатися" : "Contact",
            href: `/${locale}/contact`,
          }}
          secondary={{
            label: isUA ? "Послуги" : "Services",
            href: `/${locale}/services`,
          }}
        />
      </Section>
    </>
  );
}
