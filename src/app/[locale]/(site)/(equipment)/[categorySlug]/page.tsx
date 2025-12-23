import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES, PRODUCT_LINE_LABEL } from "@/lib/equipment/data";
import { CATEGORY_KEY_BY_SLUG, isCategorySlug } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ locale: Locale; categorySlug: string }>;
};

export default async function EquipmentCategoryPage({ params }: Props) {
  const { locale, categorySlug } = await params;

  if (!isCategorySlug(categorySlug)) notFound();

  const key = CATEGORY_KEY_BY_SLUG[categorySlug];
  const category = EQUIPMENT_CATEGORIES.find((c) => c.key === key);
  if (!category) notFound();

  const includes = category.includes?.[locale] ?? [];
  const hasStandalone = (category.products ?? []).some((p) => p.line === "standalone");
  const hasIntegrated = (category.products ?? []).some((p) => p.line === "integrated");

  return (
    <>
      <Section spacing="hero">
        <PageHeader
          eyebrow={locale === "ua" ? "Обладнання" : "Equipment"}
          title={category.title[locale]}
          subtitle={category.lead[locale]}
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
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

            {/* Next step / navigation */}
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-base font-semibold">
                  {locale === "ua" ? "Оберіть напрям" : "Choose a track"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {locale === "ua"
                    ? "Для кращого UX ми розділяємо рішення за лінійками. Оберіть одну — і перегляньте продукти."
                    : "For better UX we split solutions by lines. Pick one to view products."}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild disabled={!hasStandalone} className="w-full sm:w-auto">
                    <Link href={`/${locale}/${categorySlug}/standalone`}>
                      {PRODUCT_LINE_LABEL.standalone[locale]}
                    </Link>
                  </Button>

                  <Button asChild variant="outline" disabled={!hasIntegrated} className="w-full sm:w-auto">
                    <Link href={`/${locale}/${categorySlug}/integrated`}>
                      {PRODUCT_LINE_LABEL.integrated[locale]}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar quick nav */}
          <div className="space-y-3">
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-3">
                <div className="text-sm font-medium">{locale === "ua" ? "Навігація" : "Navigation"}</div>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href={`/${locale}/equipment`}>{locale === "ua" ? "← Назад до категорій" : "← Back to categories"}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
