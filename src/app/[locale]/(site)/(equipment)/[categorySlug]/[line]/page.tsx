import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES, PRODUCT_LINE_LABEL } from "@/lib/equipment/data";
import { CATEGORY_KEY_BY_SLUG, isCategorySlug, isProductLine } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { EquipmentProductsBlock } from "@/components/equipment/EquipmentProductsBlock";

type Props = {
  params: Promise<{ locale: Locale; categorySlug: string; line: string }>;
};

export default async function EquipmentLinePage({ params }: Props) {
  const { locale, categorySlug, line } = await params;

  if (!isCategorySlug(categorySlug)) notFound();
  if (!isProductLine(line)) notFound();

  const key = CATEGORY_KEY_BY_SLUG[categorySlug];
  const category = EQUIPMENT_CATEGORIES.find((c) => c.key === key);
  if (!category) notFound();

  const products = (category.products ?? []).filter((p) => p.line === line);
  if (products.length === 0) notFound();

  const lineTitle = PRODUCT_LINE_LABEL[line][locale];

  return (
    <>
      <Section spacing="hero">
        <PageHeader
          eyebrow={category.title[locale]}
          title={lineTitle}
          subtitle={
            locale === "ua"
              ? "Огляд продуктів та базових опцій. Деталі конфігурації — після збору вимог."
              : "Overview of products and baseline options. Final configuration follows requirements."
          }
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="ghost" className="w-full sm:w-auto justify-start">
            <Link href={`/${locale}/${categorySlug}`}>{locale === "ua" ? "← До категорії" : "← Back to category"}</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full sm:w-auto justify-start">
            <Link href={`/${locale}/equipment`}>{locale === "ua" ? "← До всіх категорій" : "← Back to categories"}</Link>
          </Button>
        </div>
      </Section>

      <Section>
        {/* reuse existing block; it will render headings for both lines,
            but here we want single line. So pass only filtered products. */}
        <EquipmentProductsBlock products={products} locale={locale} />
      </Section>
    </>
  );
}
