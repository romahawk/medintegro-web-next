import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES, PRODUCT_LINE_LABEL } from "@/lib/equipment/data";
import { getCategoryKeyBySlug, getLineHref } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: Promise<{ locale: Locale; categorySlug: string }>;
};

export default async function EquipmentCategoryPage({ params }: Props) {
  const { locale, categorySlug } = await params;

  const key = getCategoryKeyBySlug(categorySlug);
  if (!key) notFound();

  const category = EQUIPMENT_CATEGORIES.find((c) => c.key === key);
  if (!category) notFound();

  const includes = category.includes?.[locale] ?? [];
  const hasStandalone = (category.products ?? []).some((p) => p.line === "standalone");
  const hasIntegrated = (category.products ?? []).some((p) => p.line === "integrated");

  return (
    <>
      <Section spacing="hero">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href={`/${locale}/equipment`} className="hover:underline underline-offset-4">
            {locale === "ua" ? "Обладнання" : "Equipment"}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{category.title[locale]}</span>
        </div>

        <PageHeader
          eyebrow={locale === "ua" ? "Категорія" : "Category"}
          title={category.title[locale]}
          subtitle={category.lead[locale]}
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {includes.length > 0 && (
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h2 className="text-base font-semibold">
                    {locale === "ua" ? "Що включає" : "What it includes"}
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {includes.map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <div className="space-y-3">
              <h2 className="text-base font-semibold">
                {locale === "ua" ? "Оберіть напрям" : "Choose a track"}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href={getLineHref(locale, category.key, "standalone")}
                  aria-disabled={!hasStandalone}
                  className={[
                    "block rounded-2xl border border-border/60 bg-background p-6 transition",
                    "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
                    "focus:outline-none focus:ring-2 focus:ring-ring",
                    !hasStandalone && "pointer-events-none opacity-50",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="text-sm font-semibold">
                    {PRODUCT_LINE_LABEL.standalone[locale]}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {locale === "ua"
                      ? "Окремі рішення без масштабної перебудови приміщення."
                      : "Standalone setups without major room rework."}
                  </p>
                  <div className="mt-4 text-sm font-medium text-primary">
                    {locale === "ua" ? "Відкрити →" : "Open →"}
                  </div>
                </Link>

                <Link
                  href={getLineHref(locale, category.key, "integrated")}
                  aria-disabled={!hasIntegrated}
                  className={[
                    "block rounded-2xl border border-border/60 bg-background p-6 transition",
                    "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
                    "focus:outline-none focus:ring-2 focus:ring-ring",
                    !hasIntegrated && "pointer-events-none opacity-50",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="text-sm font-semibold">
                    {PRODUCT_LINE_LABEL.integrated[locale]}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {locale === "ua"
                      ? "IP-архітектура, маршрутизація та масштабування на кілька OR."
                      : "IP architecture, routing, and scaling across multiple ORs."}
                  </p>
                  <div className="mt-4 text-sm font-medium text-primary">
                    {locale === "ua" ? "Відкрити →" : "Open →"}
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-3">
                <div className="text-sm font-medium">
                  {locale === "ua" ? "Навігація" : "Navigation"}
                </div>
                <Link
                  href={`/${locale}/equipment`}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  {locale === "ua" ? "← Назад до категорій" : "← Back to categories"}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
