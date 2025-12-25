import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES, PRODUCT_LINE_LABEL } from "@/lib/equipment/data";
import { getCategoryKeyBySlug, isProductLine } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ArrowRight, ExternalLink } from "lucide-react";

type Props = {
  params: Promise<{
    locale: Locale;
    categorySlug: string;
    line: string;
  }>;
};

export default async function CompareLinePage({ params }: Props) {
  const { locale, categorySlug, line } = await params;
  const isUA = locale === "ua";

  const categoryKey = getCategoryKeyBySlug(categorySlug);
  if (!categoryKey || !isProductLine(line)) notFound();

  const category = EQUIPMENT_CATEGORIES.find((c) => c.key === categoryKey);
  if (!category) notFound();

  const products = (category.products ?? []).filter((p) => p.line === line);
  if (products.length === 0) notFound();

  const lineTitle =
    PRODUCT_LINE_LABEL[line]?.[locale] ?? (isUA ? "Лінійка" : "Line");

  const consultHref = `/${locale}/consultation?category=${category.key}&line=${line}&compare=1`;

  // Helpers
  const truncate = (s: string, n = 180) => (s.length > n ? s.slice(0, n) + "…" : s);

  return (
    <>
      {/* HEADER */}
      <Section spacing="hero">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href={`/${locale}/equipment`} className="hover:underline underline-offset-4">
            {isUA ? "Обладнання" : "Equipment"}
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/${locale}/equipment/${categorySlug}`}
            className="hover:underline underline-offset-4"
          >
            {category.title[locale]}
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/${locale}/equipment/${categorySlug}/${line}`}
            className="hover:underline underline-offset-4"
          >
            {lineTitle}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{isUA ? "Порівняння" : "Compare"}</span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <PageHeader
            eyebrow={category.title[locale]}
            title={isUA ? "Порівняння систем у лінійці" : "Compare systems in this line"}
            subtitle={
              isUA
                ? "Оберіть рішення під масштаб та сценарій. Технічні деталі мають підтвердити вибір, а не визначати його."
                : "Choose the system by scale and use case. Specs should confirm the choice, not define it."
            }
          />

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild className="sm:w-auto">
              <Link href={consultHref}>
                <span className="inline-flex items-center gap-2">
                  {isUA ? "Запросити консультацію" : "Request consultation"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>

            <Button asChild variant="outline" className="sm:w-auto">
              <Link href={`/${locale}/equipment/${categorySlug}/${line}`}>
                {isUA ? "← Назад до лінійки" : "← Back to line"}
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* COMPARISON */}
      <Section>
        {/* Product columns header */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `minmax(220px, 1.2fr) repeat(${products.length}, minmax(260px, 1fr))` }}
        >
          {/* Left label column header */}
          <div />

          {/* Product headers */}
          {products.map((p) => (
            <Card key={p.key} className="border-border/60">
              <CardHeader className="space-y-1">
                <div className="text-sm text-muted-foreground">{p.brand}</div>
                <div className="text-base font-semibold leading-snug">{p.name}</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {truncate(p.summary[locale] ?? "", 160)}
                </p>

                <div className="flex flex-col gap-2">
                  <Button asChild size="sm" className="w-full">
                    <Link href={`/${locale}/equipment/${p.category}/${p.line}/${p.key}`}>
                      {isUA ? "Переглянути продукт" : "View product"}
                    </Link>
                  </Button>

                  {p.url ? (
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <Link href={p.url} target="_blank" rel="noopener noreferrer">
                        <span className="inline-flex items-center gap-2">
                          {isUA ? "Сайт виробника" : "Manufacturer"}
                          <ExternalLink className="h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-4">
          {/* SECTION: Key highlights */}
          <Card className="border-border/60">
            <CardContent className="p-0">
              <div
                className="grid gap-4 p-6"
                style={{
                  gridTemplateColumns: `minmax(220px, 1.2fr) repeat(${products.length}, minmax(260px, 1fr))`,
                }}
              >
                <div className="space-y-1">
                  <div className="text-sm font-semibold">
                    {isUA ? "Ключові можливості" : "Key highlights"}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isUA
                      ? "Стислий зріз того, що відрізняє системи між собою."
                      : "A quick view of what differentiates the systems."}
                  </p>
                </div>

                {products.map((p) => {
                  const highlights = p.highlights?.[locale] ?? [];
                  return (
                    <div key={p.key} className="text-sm text-muted-foreground">
                      {highlights.length ? (
                        <ul className="space-y-2">
                          {highlights.slice(0, 6).map((h) => (
                            <li key={h}>• {h}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="italic opacity-80">
                          {isUA ? "Немає даних" : "No data yet"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* SECTION: Positioning (generic, for now) */}
          <Card className="border-border/60">
            <CardContent className="p-0">
              <div
                className="grid gap-4 p-6"
                style={{
                  gridTemplateColumns: `minmax(220px, 1.2fr) repeat(${products.length}, minmax(260px, 1fr))`,
                }}
              >
                <div className="space-y-1">
                  <div className="text-sm font-semibold">
                    {isUA ? "Позиціонування" : "Positioning"}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isUA
                      ? "Поки без жорстких цифр — тільки орієнтир по масштабу та сценарію."
                      : "No hard numbers yet — just an orientation by scale and use case."}
                  </p>
                </div>

                {products.map((p) => (
                  <div key={p.key} className="text-sm text-muted-foreground">
                    {isUA
                      ? "Підійде для інтеграції в межах цієї лінійки. Деталізація — на консультації / конфігурації."
                      : "Suitable for integration within this line. Final configuration is defined during consultation."}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            {isUA
              ? "Не впевнені у виборі? Опишіть масштаб OR/відділення — допоможемо підібрати конфігурацію."
              : "Not sure which one fits? Describe your scale — we’ll help select a configuration."}
          </div>

          <Button asChild>
            <Link href={consultHref}>
              <span className="inline-flex items-center gap-2">
                {isUA ? "Запросити консультацію" : "Request consultation"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
