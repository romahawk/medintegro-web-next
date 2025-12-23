import Link from "next/link";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Card, CardContent } from "@/components/ui/card";
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

const TAGS: Record<
  TagKey,
  { icon: any; label: { ua: string; en: string } }
> = {
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

function TagChip({
  tag,
  locale,
}: {
  tag: TagKey;
  locale: "ua" | "en";
}) {
  const Icon = TAGS[tag].icon;
  const label = locale === "ua" ? TAGS[tag].label.ua : TAGS[tag].label.en;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-2.5 py-1 text-xs text-muted-foreground">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  return (
    <>
      <Section spacing="hero">
        <PageHeader
          eyebrow={isUA ? "Проєкти" : "Projects"}
          title={isUA ? "Приклади реалізацій" : "Selected implementations"}
          subtitle={
            isUA
              ? "Короткі кейси: контекст, виконані роботи, результат."
              : "Short cases: context, delivered work, outcome."
          }
        />
      </Section>

      <Section tone="muted">
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title.ua} className="border-border/60">
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
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-2 rounded-xl border border-border/60 bg-background p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      {isUA ? "Результат" : "Outcome"}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {isUA ? p.outcome.ua : p.outcome.en}
                    </p>
                  </div>

                  <div className="pt-1 text-sm text-muted-foreground">
                    {isUA
                      ? "Повний перелік кейсів — за запитом."
                      : "Full case list available on request."}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

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
