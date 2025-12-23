import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";

import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { BrandHero } from "@/components/site/BrandHero";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Stethoscope,
  Monitor,
  Sparkles,
  Layers,
} from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  const t = {
    eyebrow: "MEDINTEGRO",
    heroTitle: isUA
      ? "Інтеграція операційних та ICU без хаосу"
      : "OR & ICU integration without chaos",
    heroSubtitle: isUA
      ? "Проєктуємо та впроваджуємо інфраструктуру й інтеграції: відео/аудіо, маршрутизація, запис, IT-контур, сумісність. Починаємо з вимог — завершуємо прийманням."
      : "We design and deliver infrastructure & integrations: video/audio, routing, recording, IT contour, compatibility. Requirements first — acceptance last.",

    primaryCta: isUA ? "Обговорити проєкт" : "Discuss a project",
    secondaryCta: isUA ? "Перейти до рішень" : "Explore solutions",

    proof: [
      {
        icon: Workflow,
        title: "Workflow-first",
        text: isUA ? "Спочатку сценарії персоналу, потім залізо." : "Staff workflows first, hardware second.",
        badge: isUA ? "OR інтеграція" : "OR integration",
      },
      {
        icon: ShieldCheck,
        title: isUA ? "Безпека" : "Safety",
        text: isUA ? "Сегментація, доступи, політики — не після, а одразу." : "Segmentation, access, policies — from day one.",
        badge: isUA ? "IT-контур" : "IT contour",
      },
      {
        icon: Sparkles,
        title: isUA ? "Прогнозовано" : "Predictable",
        text: isUA ? "Документація + критерії приймання = менше ризику." : "Docs + acceptance criteria = lower risk.",
        badge: isUA ? "Документація" : "Documentation",
      },
    ],

    sectionsTitle: isUA ? "Основні напрями" : "Core directions",
    sectionsSubtitle: isUA
      ? "Модульний підхід: можна почати з одного блоку і масштабуватись."
      : "Modular approach: start small, scale later.",

    directions: [
      {
        icon: Monitor,
        title: isUA ? "OR інтеграція та відео" : "OR integration & video",
        text: isUA
          ? "Відображення, маршрутизація, запис/стрім (за політиками)."
          : "Display, routing, recording/streaming (policy-dependent).",
        chips: ["I-OR", "4K/IP", "Routing"],
        href: `/${locale}/equipment`,
      },
      {
        icon: Stethoscope,
        title: isUA ? "Інфраструктура OR/ICU" : "OR/ICU infrastructure",
        text: isUA
          ? "Планування під простір, інженерію, експлуатацію."
          : "Planning around space, engineering, operations.",
        chips: ["Pendents", "Lighting", "Monitoring"],
        href: `/${locale}/equipment`,
      },
      {
        icon: ShieldCheck,
        title: isUA ? "Інтеграції та сумісність" : "Integrations & compatibility",
        text: isUA ? "PACS/EMR, мережа, сумісність, тестування." : "PACS/EMR, network, compatibility, testing.",
        chips: ["PACS", "EMR", "Security"],
        href: `/${locale}/equipment`,
      },
    ],

    processTitle: isUA ? "Як ми працюємо" : "How we work",
    processSubtitle: isUA
      ? "4 кроки, які реально зменшують провали на впровадженні."
      : "4 steps that actually reduce delivery failures.",

    steps: isUA
      ? [
          { n: 1, title: "Збір вимог", text: "Цілі, сценарії, обмеження, стейкхолдери." },
          { n: 2, title: "Концепція", text: "Архітектура, інтеграції, ризики, варіанти." },
          { n: 3, title: "Документація", text: "Схеми, специфікації, критерії приймання." },
          { n: 4, title: "Впровадження", text: "Монтаж/конфігурація, тест, навчання, go-live." },
        ]
      : [
          { n: 1, title: "Requirements", text: "Goals, workflows, constraints, stakeholders." },
          { n: 2, title: "Concept", text: "Architecture, integrations, risks, options." },
          { n: 3, title: "Documentation", text: "Diagrams, specs, acceptance criteria." },
          { n: 4, title: "Delivery", text: "Install/config, test, train, go-live." },
        ],

    ctaTitle: isUA ? "Готові стартувати з вимог?" : "Ready to start with requirements?",
    ctaSubtitle: isUA
      ? "Опишіть контекст (відділення, кількість OR/ICU, наявні системи) — ми запропонуємо наступний крок."
      : "Share context (department, number of OR/ICU rooms, existing systems) — we’ll propose the next step.",
  };

  const ProofStrip = (
    <div className="grid gap-4 md:grid-cols-3">
      {t.proof.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={cn(
              "group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur",
              "transition hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-lg hover:shadow-black/10",
              "focus-within:ring-2 focus-within:ring-[rgb(var(--brand-sky-rgb))]/70"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Badge className="bg-white/10 text-white border border-white/15">{item.badge}</Badge>
                <div className="text-sm font-semibold text-white">{item.title}</div>
              </div>

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition group-hover:border-white/25 group-hover:bg-white/15">
                <Icon className="h-5 w-5 text-white/85" />
              </div>
            </div>

            <p className="mt-3 text-sm text-white/80">{item.text}</p>
          </div>
        );
      })}
    </div>
  );

  const HeroActions = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild className="w-full sm:w-auto">
        <Link href={`/${locale}/contact`}>
          <span className="inline-flex items-center gap-2">
            {t.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="w-full sm:w-auto border-white/25 bg-white/10 text-white hover:bg-white/15"
      >
        <Link href={`/${locale}/equipment`}>{t.secondaryCta}</Link>
      </Button>
    </div>
  );

  return (
    <>
      <Section spacing="hero">
        <BrandHero
          eyebrow={t.eyebrow}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          actions={HeroActions}
          footer={ProofStrip}
        />
      </Section>

      {/* CORE DIRECTIONS */}
      <Section>
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">{t.sectionsTitle}</h2>
            <p className="text-sm text-muted-foreground">{t.sectionsSubtitle}</p>
          </div>
          <div className="hidden md:block h-px w-40 bg-linear-to-r from-transparent via-[rgb(var(--brand-sky-rgb))]/35 to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {t.directions.map((d) => {
            const Icon = d.icon;
            return (
              <Card
                key={d.title}
                className={cn(
                  "border-border/60",
                  "transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
                  "hover:border-[rgb(var(--brand-sky-rgb))]/30"
                )}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      <Icon className="h-5 w-5 text-[rgb(var(--brand-deep-rgb))] opacity-80" />
                    </div>

                    <Badge
                      variant="outline"
                      className="border-[rgb(var(--brand-sky-rgb))]/30 bg-[rgb(var(--brand-sky-rgb))]/5 text-[rgb(var(--brand-deep-rgb))]"
                    >
                      {isUA ? "Напрям" : "Direction"}
                    </Badge>
                  </div>

                  <div>
                    <div className="text-base font-semibold">{d.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {d.chips.map((c) => (
                      <Badge key={c} variant="outline" className="border-border/60 bg-background">
                        {c}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link
                      href={d.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--brand-deep-rgb))] underline-offset-4 hover:underline"
                    >
                      {isUA ? "Перейти" : "Open"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="muted">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">{t.processTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.processSubtitle}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.steps.map((s) => (
            <Card
              key={s.title}
              className={cn(
                "relative border-border/60 bg-background",
                "transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border/60 bg-[rgb(var(--brand-sky-rgb))]/10 text-sm font-semibold text-[rgb(var(--brand-deep-rgb))]">
                    {s.n}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold">{s.title}</div>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </CardContent>
              <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-3xl bg-[rgb(var(--brand-sky-rgb))]/6" />
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={t.ctaTitle}
          subtitle={t.ctaSubtitle}
          primary={{ label: isUA ? "Зв’язатися" : "Contact", href: `/${locale}/contact` }}
          secondary={{ label: isUA ? "Обладнання" : "Equipment", href: `/${locale}/equipment` }}
        />
      </Section>
    </>
  );
}
