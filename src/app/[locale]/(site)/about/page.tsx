import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { FeatureGrid, type FeatureItem } from "@/components/site/FeatureGrid";
import { TrustBar } from "@/components/site/TrustBar";
import { CtaBand } from "@/components/site/CtaBand";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  ShieldCheck,
  Wrench,
  Search,
  FileText,
  Cog,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  const approach: FeatureItem[] = isUA
    ? [
        {
          title: "Чітка постановка задачі",
          description:
            "Починаємо з реальних клінічних потреб, а не з обладнання або брендів.",
        },
        {
          title: "Технічна відповідальність",
          description:
            "Беремо на себе специфікації, сумісність, інтеграції та ризики.",
        },
        {
          title: "Контроль впровадження",
          description:
            "Супроводжуємо проєкт від планування до запуску та навчання персоналу.",
        },
      ]
    : [
        {
          title: "Clear problem definition",
          description:
            "We start from real clinical needs, not from equipment or brands.",
        },
        {
          title: "Technical responsibility",
          description:
            "We take ownership of specifications, compatibility, and integrations.",
        },
        {
          title: "Controlled implementation",
          description:
            "We support the project from planning to go-live and staff training.",
        },
      ];

  const processSteps = isUA
    ? [
        { icon: Search, title: "Аналіз", text: "Потреби, простір, існуюча інфраструктура." },
        { icon: FileText, title: "Проєктування", text: "Специфікації, таймлайн, ризики." },
        { icon: Cog, title: "Реалізація", text: "Постачання, монтаж, інтеграція." },
        { icon: GraduationCap, title: "Запуск", text: "Тестування, навчання, підтримка." },
      ]
    : [
        { icon: Search, title: "Assessment", text: "Needs, space, existing infrastructure." },
        { icon: FileText, title: "Design", text: "Specifications, timeline, risks." },
        { icon: Cog, title: "Execution", text: "Supply, installation, integration." },
        { icon: GraduationCap, title: "Go-live", text: "Testing, training, support." },
      ];

  return (
    <>
      {/* HEADER */}
      <Section spacing="hero">
        <PageHeader
          eyebrow={isUA ? "Про Medintegro" : "About Medintegro"}
          title={
            isUA
              ? "Інженерний підхід до медичних проєктів"
              : "An engineering approach to medical projects"
          }
          subtitle={
            isUA
              ? "Medintegro допомагає клінікам та партнерам реалізовувати складні медичні проєкти без хаосу, затримок і технічних компромісів."
              : "Medintegro helps clinics and partners deliver complex medical projects without chaos, delays, or technical compromises."
          }
        />
      </Section>

      {/* MISSION */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {isUA ? "Наша місія" : "Our mission"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {isUA
                ? "Ми працюємо на перетині клінічних процесів, інженерії та управління проєктами. Наша мета — зробити впровадження медичних рішень передбачуваним і контрольованим."
                : "We operate at the intersection of clinical workflows, engineering, and project management. Our goal is to make medical implementations predictable and controlled."}
            </p>
          </div>

          <div className="lg:col-span-5">
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-sm font-medium">
                      {isUA ? "Фокус" : "Focus"}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isUA
                        ? "Рішення для OR/ICU та медичної інфраструктури, де важливі сумісність, безпека і контроль етапів."
                        : "OR/ICU and medical infrastructure solutions where compatibility, safety, and controlled delivery matter."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-sm font-medium">
                      {isUA ? "Принцип" : "Principle"}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isUA
                        ? "Починаємо з вимог і сценаріїв. Обладнання — потім."
                        : "We start with requirements and workflows. Equipment comes second."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* APPROACH */}
      <Section tone="muted">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {isUA ? "Як ми працюємо" : "How we work"}
            </h2>
          </div>
          <FeatureGrid items={approach} />
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {isUA ? "Процес реалізації" : "Delivery process"}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border/60 bg-background p-6 space-y-2"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-sm font-medium">{s.title}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section tone="muted">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {isUA ? "Досвід та експертиза" : "Experience & expertise"}
            </h2>
          </div>

          <TrustBar
            stats={
              isUA
                ? [
                    { value: "10+ років", label: "роботи в MedTech" },
                    { value: "50+ проєктів", label: "клінічних впроваджень" },
                    { value: "OR / ICU", label: "ключові середовища" },
                  ]
                : [
                    { value: "10+ years", label: "in MedTech" },
                    { value: "50+ projects", label: "clinical implementations" },
                    { value: "OR / ICU", label: "core environments" },
                  ]
            }
          />
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={isUA ? "Готові обговорити ваш проєкт" : "Ready to discuss your project"}
          subtitle={
            isUA
              ? "Ми відповімо швидко та запропонуємо чіткий наступний крок."
              : "We’ll respond quickly and propose a clear next step."
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
