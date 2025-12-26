import Link from "next/link";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment/data";

import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { EquipmentCategoryBrowser } from "@/components/equipment/EquipmentCategoryBrowser";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, ShieldCheck } from "lucide-react";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function EquipmentPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  const t = {
    eyebrow: isUA ? "Обладнання" : "Equipment",
    title: isUA ? "Категорії рішень та обладнання" : "Equipment & solution categories",
    subtitle: isUA
      ? "Оберіть напрям — відкриється окрема сторінка з лінійками та продуктами."
      : "Pick a category — it opens a dedicated page with lines and products.",

    primaryCta: isUA ? "Зв’язатися" : "Contact",
    secondaryCta: isUA ? "Про нас" : "About",

    proof: [
      {
        label: isUA ? "Навігація" : "Navigation",
        title: isUA ? "Категорія → Лінійка → Продукти" : "Category → Line → Products",
        text: isUA
          ? "Каталоговий підхід: швидко орієнтує і масштабується."
          : "Catalog approach: easy to scan and scale.",
      },
      {
        label: isUA ? "Підбір" : "Selection",
        title: isUA ? "Вимоги перед комплектацією" : "Requirements before BOM",
        text: isUA
          ? "Спочатку сценарії, інженерія, ІТ-контур — потім залізо."
          : "Workflows, engineering, IT contour first — hardware second.",
      },
      {
        label: isUA ? "Результат" : "Outcome",
        title: isUA ? "Прогнозована поставка" : "Predictable delivery",
        text: isUA
          ? "Документація + критерії приймання = менше ризиків."
          : "Documentation + acceptance criteria = lower risk.",
      },
    ],
  };

  const ProofStripNeutral = (
    <div className="grid gap-4 md:grid-cols-3">
      {t.proof.map((p) => (
        <Card key={p.title} className="border-border/60 bg-background">
          <CardContent className="p-5 space-y-2">
            <Badge variant="outline" className="w-fit">
              {p.label}
            </Badge>
            <div className="text-sm font-semibold">{p.title}</div>
            <p className="text-sm text-muted-foreground">{p.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      {/* FULL-WIDTH HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient background (Tailwind v3-safe) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-background" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Spotlight */}
        <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />

        {/* IMPORTANT: transparent section so background layers stay visible */}
        <Section spacing="hero" tone="transparent">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur md:p-10">
            <div className="text-xs tracking-[0.25em] text-white/70">
              • {t.eyebrow.toUpperCase()}
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
              {t.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                <Link href={`/${locale}/about`}>{t.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </Section>
      </section>


      {/* CATEGORIES */}
      <Section tone="muted">
        <div className="-mt-10 md:-mt-14">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                {isUA ? "Оберіть категорію" : "Choose a category"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isUA
                  ? "Кожна категорія відкривається як окрема сторінка з лінійками."
                  : "Each category opens as a dedicated page with product lines."}
              </p>
            </div>

            <div className="hidden md:block h-px w-40 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
          </div>

          <div className="mt-4">
            <EquipmentCategoryBrowser categories={EQUIPMENT_CATEGORIES} locale={locale} />
          </div>

          {/* IMPORTANT NOTE */}
          <Card className="mt-10 border-border/60 bg-background">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-sky-500/10">
                  <ShieldCheck className="h-5 w-5 text-slate-900/70 dark:text-white/70" />
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-semibold">{isUA ? "Важливо" : "Important"}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {isUA
                      ? "Підбір конфігурації залежить від задач відділення, простору, інженерії та ІТ-інфраструктури. Ми починаємо з вимог — і тільки потім переходимо до комплектації."
                      : "Configuration depends on department needs, space, engineering constraints, and IT infrastructure. We start with requirements — only then move to equipment lists."}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 underline-offset-4 hover:underline"
                    >
                      {isUA ? "Обговорити вимоги" : "Discuss requirements"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10">{ProofStripNeutral}</div>
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={isUA ? "Потрібна комплектація під ваші задачі?" : "Need a configuration for your needs?"}
          subtitle={
            isUA
              ? "Опишіть відділення та контекст — ми запропонуємо структуру рішення та наступний крок."
              : "Describe the department and context — we’ll propose a solution structure and next step."
          }
          primary={{ label: isUA ? "Зв’язатися" : "Contact", href: `/${locale}/contact` }}
          secondary={{ label: isUA ? "Послуги" : "Services", href: `/${locale}/services` }}
        />
      </Section>
    </>
  );
}
