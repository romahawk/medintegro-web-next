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

  // 🔹 NEW: derive lines dynamically from products
  const lines = Array.from(
    new Set((category.products ?? []).map((p) => p.line))
  );

  return (
    <>
      {/* Header */}
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
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Includes */}
            {includes.length > 0 && (
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h2 className="text-base font-semibold">
                    {locale === "ua" ? "Що включає" : "What this category covers"}
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {includes.map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Lines */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold">
                {locale === "ua" ? "Лінійки рішень" : "Solution lines"}
              </h2>

              <div className="space-y-4">
                {lines.map((line) => (
                  <Link
                    key={line}
                    href={getLineHref(locale, category.key, line)}
                    className="
                      block rounded-2xl border border-border/60 bg-background p-6 transition
                      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5
                      focus:outline-none focus:ring-2 focus:ring-ring
                    "
                  >
                    <div className="text-sm font-semibold">
                      {PRODUCT_LINE_LABEL[line]?.[locale] ?? line}
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground max-w-prose">
                      {locale === "ua"
                        ? "Окрема лінійка рішень у межах цієї категорії з власною архітектурою та масштабом."
                        : "A dedicated solution line within this category with its own architecture and scale."}
                    </p>

                    <div className="mt-4 text-sm font-medium text-primary">
                      {locale === "ua" ? "Відкрити лінійку →" : "Explore line →"}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
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
