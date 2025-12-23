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
  Layers,
  Stethoscope,
  GraduationCap,
  Network,
  Truck,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

type Service = {
  key: string;
  icon: any;
  title: { ua: string; en: string };
  lead: { ua: string; en: string };
  details: { ua: string[]; en: string[] };
};

const services: Service[] = [
  {
    key: "or-integration",
    icon: Stethoscope,
    title: {
      ua: "Інтеграція систем медичного обладнання в операційній",
      en: "OR systems integration (I-OR)",
    },
    lead: {
      ua: "Інтегровані операційні підвищують безпеку та ефективність роботи хірургічної команди.",
      en: "Integrated OR environments improve safety and efficiency for the surgical team.",
    },
    details: {
      ua: [
        "Планування та проєктування з урахуванням реконструкції або нового будівництва.",
        "Залучення ключових сторін: хірурги, ІТ, радіологія, біомедінженерія, архітектори, підрядники.",
        "Відкрита архітектура: сумісність із відео-системами та PACS, готовність до майбутніх оновлень.",
      ],
      en: [
        "Planning and design for new builds or reconstructions.",
        "Alignment of stakeholders: surgeons, IT, radiology, biomedical engineering, architects, contractors.",
        "Open architecture: compatibility with video systems and PACS, future-proof upgrades.",
      ],
    },
  },
  {
    key: "consulting",
    icon: Layers,
    title: { ua: "Надання експертних консультацій", en: "Expert consulting" },
    lead: {
      ua: "Консультації для комплексних проєктів оснащення лікарень та медичних закладів.",
      en: "Consulting for complex hospital equipment and integration projects.",
    },
    details: {
      ua: [
        "Управління проєктами в охороні здоров’я.",
        "ІТ-рішення для охорони здоров’я (інтегрована операційна, цифрова лікарня).",
        "Аналіз потреб та дослідження обладнання / комплексне оснащення.",
        "Планування, проєктування, впровадження, будівництво та постачання.",
      ],
      en: [
        "Healthcare project management.",
        "Healthcare IT solutions (integrated OR, digital hospital).",
        "Needs assessment and equipment research / full facility equipping.",
        "Planning, design, implementation, construction alignment, and supply.",
      ],
    },
  },
  {
    key: "training",
    icon: GraduationCap,
    title: {
      ua: "Навчання роботі з новим обладнанням та ПЗ",
      en: "Training for equipment & software",
    },
    lead: {
      ua: "Навчальні програми для безпечного та ефективного використання обладнання і ПЗ.",
      en: "Training programs for safe and effective use of equipment and software.",
    },
    details: {
      ua: [
        "Фокус на рутинних і критичних задачах, що впливають на безпеку.",
        "Тренінг з усунення несправностей, догляду та обслуговування.",
        "Практика з пристроями, аксесуарами, маркуванням та витратними матеріалами.",
      ],
      en: [
        "Focus on routine and critical tasks impacting safety.",
        "Troubleshooting, care, and maintenance guidance.",
        "Hands-on practice with devices, accessories, labeling, and disposables.",
      ],
    },
  },
  {
    key: "digital-hospital",
    icon: Network,
    title: {
      ua: "Інтеграція медичних систем лікарні в єдиний цифровий контур",
      en: "Hospital-wide digital integration",
    },
    lead: {
      ua: "Цифрова лікарня: об’єднання ключових систем у єдину керовану інфраструктуру.",
      en: "Digital hospital: integrating key systems into one managed infrastructure.",
    },
    details: {
      ua: [
        "Інтеграція напрямів: EMR, діагностика, комунікації, хірургія, навігація, інфекційний контроль тощо.",
        "Підхід для великих установ, де системи працюють у комбінації.",
        "Експертиза в медичній інтеграції та медичних IT-процесах.",
      ],
      en: [
        "Integration areas: EMR, diagnostics, communications, surgery, navigation, infection control, etc.",
        "Approach for large facilities where systems operate together.",
        "Deep expertise in healthcare integration and medical IT workflows.",
      ],
    },
  },
  {
    key: "supply",
    icon: Truck,
    title: { ua: "Поставка обладнання", en: "Equipment supply" },
    lead: {
      ua: "Постачання високотехнологічного медичного обладнання з фокусом на надійність і простоту використання.",
      en: "Supply of high-tech medical equipment focused on reliability and usability.",
    },
    details: {
      ua: [
        "Підбір під задачі медзакладу, а не під каталог.",
        "Оптимізація специфікацій, сумісності, комплектацій.",
        "Підтримка на етапах узгодження та реалізації.",
      ],
      en: [
        "Selection based on facility needs, not catalog-driven.",
        "Optimization of specs, compatibility, configurations.",
        "Support across approval and delivery stages.",
      ],
    },
  },
  {
    key: "service",
    icon: Wrench,
    title: {
      ua: "Сервіс медичного обладнання та налаштування ПЗ",
      en: "Service & software configuration",
    },
    lead: {
      ua: "Ремонт, калібрування, профілактика, а також налаштування медичного ПЗ.",
      en: "Repair, calibration, preventive maintenance, and medical software configuration.",
    },
    details: {
      ua: [
        "Сервісні роботи на місці та підтримка по країні.",
        "Інженери з навчанням у виробників та практичним досвідом.",
        "Контроль якості сервісу та розвиток компетенцій команди.",
      ],
      en: [
        "On-site service and nationwide support.",
        "Manufacturer-trained engineers with practical experience.",
        "Quality-focused service and continuous team upskilling.",
      ],
    },
  },
];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  return (
    <>
      <Section spacing="hero">
        <PageHeader
          eyebrow={isUA ? "Послуги" : "Services"}
          title={isUA ? "Наші послуги" : "What we deliver"}
          subtitle={
            isUA
              ? "Структуровані послуги для лікарень та партнерів: від консультацій і проєктування до інтеграцій, постачання, навчання та сервісу."
              : "Structured services for hospitals and partners: from consulting and design to integrations, supply, training, and service."
          }
        />
      </Section>

      <Section tone="muted">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.key} className="border-border/60">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold">
                          {isUA ? s.title.ua : s.title.en}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {isUA ? s.lead.ua : s.lead.en}
                        </p>
                      </div>

                      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-sm">
                          {isUA ? "Деталі" : "Details"}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            {(isUA ? s.details.ua : s.details.en).map((line) => (
                              <li key={line}>• {line}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section spacing="dense">
        <CtaBand
          title={isUA ? "Обговоримо ваш проєкт" : "Let’s discuss your project"}
          subtitle={
            isUA
              ? "Коротко опишіть задачу — ми запропонуємо наступний крок і формат співпраці."
              : "Briefly describe your goal — we’ll propose the next step and collaboration format."
          }
          primary={{
            label: isUA ? "Зв’язатися" : "Contact",
            href: `/${locale}/contact`,
          }}
          secondary={{
            label: isUA ? "Проєкти" : "Projects",
            href: `/${locale}/projects`,
          }}
        />
      </Section>
    </>
  );
}
