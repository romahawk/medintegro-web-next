import Link from "next/link";
import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { BrandHero } from "@/components/site/BrandHero";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, ShieldCheck } from "lucide-react";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment/data";
import { EquipmentCategoryCard } from "@/components/equipment/EquipmentCategoryCard";

type Props = {
  params: Promise<{ locale: Locale }>;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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
        <Link href={`/${locale}/about`}>{t.secondaryCta}</Link>
      </Button>
    </div>
  );

  const ProofStrip = (
    <div className="grid gap-4 md:grid-cols-3">
      {t.proof.map((p) => (
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

      {/* CATEGORIES GRID */}
      <Section tone="muted">
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

          <div className="hidden md:block h-px w-40 bg-linear-to-r from-transparent via-[rgb(var(--brand-sky-rgb))]/35 to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {/* Add subtle interactivity by wrapping cards */}
          {EQUIPMENT_CATEGORIES.map((category) => (
            <div
              key={category.key}
              className={cn(
                "transition",
                "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
              )}
            >
              <EquipmentCategoryCard category={category} locale={locale} />
            </div>
          ))}
        </div>

        {/* IMPORTANT NOTE (styled card) */}
        <Card className="mt-10 border-border/60 bg-background">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-[rgb(var(--brand-sky-rgb))]/8">
                <ShieldCheck className="h-5 w-5 text-[rgb(var(--brand-deep-rgb))] opacity-80" />
              </div>

              <div className="space-y-1">
                <div className="text-sm font-semibold">
                  {isUA ? "Важливо" : "Important"}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {isUA
                    ? "Підбір конфігурації залежить від задач відділення, простору, інженерії та ІТ-інфраструктури. Ми починаємо з вимог — і тільки потім переходимо до комплектації."
                    : "Configuration depends on department needs, space, engineering constraints, and IT infrastructure. We start with requirements — only then move to equipment lists."}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--brand-deep-rgb))] underline-offset-4 hover:underline"
                  >
                    {isUA ? "Обговорити вимоги" : "Discuss requirements"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
