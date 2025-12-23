import Link from "next/link";

import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { BrandHero } from "@/components/site/BrandHero";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Layers,
  Workflow,
  Wrench,
  GraduationCap,
  Stethoscope,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

type TagKey =
  | "or"
  | "integration"
  | "workflow"
  | "supply"
  | "pm"
  | "coordination"
  | "training"
  | "adoption"
  | "safety";

type Project = {
  title: { ua: string; en: string };
  context: { ua: string; en: string };
  work: { ua: string[]; en: string[] };
  outcome: { ua: string; en: string };
  tags: TagKey[];
};

const TAGS: Record<TagKey, { icon: any; label: { ua: string; en: string } }> = {
  or: { icon: Stethoscope, label: { ua: "OR", en: "OR" } },
  integration: { icon: Layers, label: { ua: "Інтеграція", en: "Integration" } },
  workflow: { icon: Workflow, label: { ua: "Процеси", en: "Workflow" } },
  supply: { icon: Truck, label: { ua: "Поставка", en: "Supply" } },
  pm: { icon: ClipboardList, label: { ua: "PM", en: "PM" } },
  coordination: { icon: Wrench, label: { ua: "Координація", en: "Coordination" } },
  training: { icon: GraduationCap, label: { ua: "Навчання", en: "Training" } },
  adoption: { icon: CheckCircle2, label: { ua: "Впровадження", en: "Adoption" } },
  safety: { icon: ShieldCheck, label: { ua: "Безпека", en: "Safety" } },
};

const projects: Project[] = [
  {
    title: {
      ua: "Інтеграція систем в операційній (I-OR)",
      en: "Integrated OR systems (I-OR)",
    },
    context: {
      ua: "Операційна з кількома відео-джерелами та потребою у централізованому керуванні.",
      en: "Operating room with multiple video sources requiring centralized control.",
    },
    work: {
      ua: [
        "Технічне проєктування та специфікації інтеграції.",
        "Узгодження сумісності обладнання та інтерфейсів.",
        "Підготовка до запуску та сценарії використання.",
      ],
      en: [
        "Technical design and integration specifications.",
        "Compatibility validation across devices and interfaces.",
        "Go-live preparation and workflow scenarios.",
      ],
    },
    outcome: {
      ua: "Керована інфраструктура операційної та швидший доступ до даних під час втручань.",
      en: "A controlled OR infrastructure and faster access to data during procedures.",
    },
    tags: ["or", "integration", "workflow"],
  },
  {
    title: {
      ua: "Оснащення медичного закладу: поставка + координація",
      en: "Facility equipping: supply + coordination",
    },
    context: {
      ua: "Комплексний проєкт з кількома постачальниками та критичними термінами.",
      en: "Multi-vendor delivery project with tight timelines and dependencies.",
    },
    work: {
      ua: [
        "Консолідація вимог та складання специфікацій.",
        "Координація постачань і етапів монтажу.",
        "Контроль комплектності та приймання.",
      ],
      en: [
        "Requirements consolidation and specifications.",
        "Coordination of deliveries and installation milestones.",
        "Completeness checks and acceptance support.",
      ],
    },
    outcome: {
      ua: "Зменшення ризику затримок та прозорий контроль виконання по етапах.",
      en: "Reduced delay risk and transparent milestone control.",
    },
    tags: ["supply", "pm", "coordination"],
  },
  {
    title: {
      ua: "Навчання персоналу на новому обладнанні та ПЗ",
      en: "Staff training for new equipment & software",
    },
    context: {
      ua: "Потреба швидко ввести команду в роботу без зниження безпеки та якості.",
      en: "Need to onboard teams fast without compromising safety and quality.",
    },
    work: {
      ua: [
        "Сценарії використання для різних ролей (лікарі/медсестри/інженери).",
        "Навчання з фокусом на типові та критичні ситуації.",
        "Базові інструкції та контроль засвоєння.",
      ],
      en: [
        "Role-based scenarios (clinicians/nurses/engineers).",
        "Training focused on typical and critical situations.",
        "Core instructions and adoption checks.",
      ],
    },
    outcome: {
      ua: "Швидший старт, менше помилок, вища впевненість користувачів.",
      en: "Faster adoption, fewer errors, higher user confidence.",
    },
    tags: ["training", "adoption", "safety"],
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function TagChip({ tag, locale }: { tag: TagKey; locale: "ua" | "en" }) {
  const Icon = TAGS[tag].icon;
  const label = locale === "ua" ? TAGS[tag].label.ua : TAGS[tag].label.en;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs",
        "border-[rgb(var(--brand-sky-rgb))]/20 bg-[rgb(var(--brand-sky-rgb))]/5 text-[rgb(var(--brand-deep-rgb))]",
        "transition hover:border-[rgb(var(--brand-sky-rgb))]/35 hover:bg-[rgb(var(--brand-sky-rgb))]/10"
      )}
    >
      <Icon className="h-3.5 w-3.5 opacity-80" />
      {label}
    </span>
  );
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  const t = {
    eyebrow: isUA ? "Проєкти" : "Projects",
    title: isUA ? "Приклади реалізацій" : "Selected implementations",
    subtitle: isUA
      ? "Короткі кейси: контекст, виконані роботи, результат. Повний перелік — за запитом."
      : "Short cases: context, delivered work, outcome. Full list available on request.",
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
        <Link href={`/${locale}/services`}>{isUA ? "Послуги" : "Services"}</Link>
      </Button>
    </div>
  );

  const ProofStrip = (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          label: isUA ? "Формат" : "Format",
          title: isUA ? "Коротко і по суті" : "Short and practical",
          text: isUA
            ? "Кейс → контекст → що зробили → результат."
            : "Case → context → delivery → outcome.",
        },
        {
          label: isUA ? "Фокус" : "Focus",
          title: isUA ? "Сценарії та експлуатація" : "Workflows & operability",
          text: isUA
            ? "Показуємо те, що реально працює у щоденній рутині."
            : "We emphasize what works in daily operations.",
        },
        {
          label: isUA ? "Прозорість" : "Clarity",
          title: isUA ? "Структура робіт" : "Structured delivery",
          text: isUA
            ? "Без “магії” — тільки конкретні роботи та артефакти."
            : "No fog — concrete work and artifacts.",
        },
      ].map((p) => (
        <div
          key={p.title}
          className={cn(
            "group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur",
            "transition hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-lg hover:shadow-black/10",
            "focus-within:ring-2 focus-within:ring-[rgb(var(--brand-sky-rgb))]/70"
          )}
        >
          <div className="space-y-2">
            <Badge className="w-fit bg-white/10 text-white border border-white/15">
              {p.label}
            </Badge>
            <div className="text-sm font-semibold text-white">{p.title}</div>
            <p className="text-sm text-white/80">{p.text}</p>
          </div>
        </div>
      ))}
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

      {/* PROJECTS GRID */}
      <Section tone="muted">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {isUA ? "Кейси" : "Cases"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isUA
                ? "Вибрані приклади робіт. Можемо надати більше деталей по запиту."
                : "Selected examples. We can share more details on request."}
            </p>
          </div>

          <div className="hidden md:block h-px w-40 bg-linear-to-r from-transparent via-[rgb(var(--brand-sky-rgb))]/35 to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {projects.map((p) => (
            <Card
              key={p.title.ua}
              className={cn(
                "group border-border/60 bg-background",
                "transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
                "hover:border-[rgb(var(--brand-sky-rgb))]/30"
              )}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <TagChip key={t} tag={t} locale={locale} />
                    ))}
                  </div>

                  <h3 className="text-base font-semibold">
                    {isUA ? p.title.ua : p.title.en}
                  </h3>

                  {/* Context */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Layers className="h-4 w-4 text-muted-foreground" />
                      {isUA ? "Контекст" : "Context"}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {isUA ? p.context.ua : p.context.en}
                    </p>
                  </div>

                  {/* Delivered */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Wrench className="h-4 w-4 text-muted-foreground" />
                      {isUA ? "Що зробили" : "What we delivered"}
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(isUA ? p.work.ua : p.work.en).map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--brand-sky-rgb))]" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-2 rounded-2xl border border-[rgb(var(--brand-sky-rgb))]/20 bg-[rgb(var(--brand-sky-rgb))]/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[rgb(var(--brand-deep-rgb))] opacity-80" />
                      <span className="text-[rgb(var(--brand-deep-rgb))]">
                        {isUA ? "Результат" : "Outcome"}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {isUA ? p.outcome.ua : p.outcome.en}
                    </p>
                  </div>

                  <div className="pt-1 text-sm text-muted-foreground">
                    {isUA
                      ? "Більше кейсів — за запитом."
                      : "More cases available on request."}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={isUA ? "Потрібні деталі по вашому кейсу?" : "Need details for your case?"}
          subtitle={
            isUA
              ? "Опишіть задачу — ми запропонуємо формат і наступний крок."
              : "Describe your goal — we’ll propose the format and next step."
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
