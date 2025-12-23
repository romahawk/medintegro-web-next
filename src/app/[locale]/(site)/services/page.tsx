import Link from "next/link";

import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { BrandHero } from "@/components/site/BrandHero";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
  Sparkles,
  ShieldCheck,
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

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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

  const t = {
    eyebrow: isUA ? "Послуги" : "Services",
    title: isUA ? "Що ми робимо" : "What we deliver",
    subtitle: isUA
      ? "Структуровані послуги для лікарень та партнерів: від консультацій і проєктування до інтеграцій, постачання, навчання та сервісу."
      : "Structured services for hospitals and partners: from consulting and design to integrations, supply, training, and service.",
  };

  const HeroActions = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild className="w-full sm:w-auto">
        <Link href={`/${locale}/contact`}>
          <span className="inline-flex items-center gap-2">
            {isUA ? "Зв’язатися" : "Contact"}
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="w-full sm:w-auto border-white/25 bg-white/10 text-white hover:bg-white/15"
      >
        <Link href={`/${locale}/equipment`}>
          {isUA ? "Перейти до рішень" : "Explore solutions"}
        </Link>
      </Button>
    </div>
  );

  const ProofStrip = (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          label: isUA ? "Формат" : "Format",
          title: isUA ? "Від консультації до delivery" : "From consulting to delivery",
          text: isUA
            ? "Можемо підключитись на будь-якому етапі і взяти відповідальність за результат."
            : "We can join at any stage and own the outcome.",
          icon: Sparkles,
        },
        {
          label: isUA ? "Якість" : "Quality",
          title: isUA ? "Документація + приймання" : "Docs + acceptance",
          text: isUA
            ? "Фіксуємо вимоги і критерії — менше ризиків на впровадженні."
            : "We align requirements and criteria — fewer delivery risks.",
          icon: ShieldCheck,
        },
        {
          label: isUA ? "Масштаб" : "Scale",
          title: isUA ? "Модульний підхід" : "Modular approach",
          text: isUA
            ? "Починаємо з одного блоку і масштабуємо рішення під заклад."
            : "Start with one module and scale to the facility.",
          icon: Layers,
        },
      ].map((p) => {
        const Icon = p.icon;
        return (
          <div
            key={p.title}
            className={cn(
              "group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur",
              "transition hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-lg hover:shadow-black/10",
              "focus-within:ring-2 focus-within:ring-[rgb(var(--brand-sky-rgb))]/70"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Badge className="w-fit bg-white/10 text-white border border-white/15">
                  {p.label}
                </Badge>
                <div className="text-sm font-semibold text-white">{p.title}</div>
              </div>

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition group-hover:border-white/25 group-hover:bg-white/15">
                <Icon className="h-5 w-5 text-white/85" />
              </div>
            </div>

            <p className="mt-3 text-sm text-white/80">{p.text}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* HERO (brand style) */}
      <Section spacing="hero">
        <BrandHero
          eyebrow={t.eyebrow.toUpperCase()}
          title={t.title}
          subtitle={t.subtitle}
          actions={HeroActions}
          footer={ProofStrip}
        />
      </Section>

      {/* SERVICES GRID */}
      <Section tone="muted">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {isUA ? "Послуги" : "Services"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isUA
                ? "Розкрийте деталі кожної послуги — що входить і як ми організовуємо процес."
                : "Open details for each service — what’s included and how we deliver."}
            </p>
          </div>

          <div className="hidden md:block h-px w-40 bg-linear-to-r from-transparent via-[rgb(var(--brand-sky-rgb))]/35 to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.key}
                className={cn(
                  "group border-border/60 bg-background",
                  "transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
                  "hover:border-[rgb(var(--brand-sky-rgb))]/30"
                )}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold">
                            {isUA ? s.title.ua : s.title.en}
                          </h3>
                          <Badge
                            variant="outline"
                            className="border-[rgb(var(--brand-sky-rgb))]/25 bg-[rgb(var(--brand-sky-rgb))]/5 text-[rgb(var(--brand-deep-rgb))]"
                          >
                            {isUA ? "Сервіс" : "Service"}
                          </Badge>
                        </div>

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {isUA ? s.lead.ua : s.lead.en}
                        </p>
                      </div>

                      {/* icon pill with accent */}
                      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-[rgb(var(--brand-sky-rgb))]/6 transition group-hover:bg-[rgb(var(--brand-sky-rgb))]/10">
                        <Icon className="h-5 w-5 text-[rgb(var(--brand-deep-rgb))] opacity-80" />
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="details" className="border-border/60">
                        <AccordionTrigger className="text-sm hover:no-underline">
                          <span className="inline-flex items-center gap-2">
                            {isUA ? "Деталі" : "Details"}
                            <span className="text-xs text-muted-foreground">
                              {isUA ? "(розгорнути)" : "(expand)"}
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            {(isUA ? s.details.ua : s.details.en).map((line) => (
                              <li key={line} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--brand-sky-rgb))]" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-4">
                            <Link
                              href={`/${locale}/contact`}
                              className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--brand-deep-rgb))] underline-offset-4 hover:underline"
                            >
                              {isUA ? "Запитати про цю послугу" : "Ask about this service"}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
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

      {/* CTA */}
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
