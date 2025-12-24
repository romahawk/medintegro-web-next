import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES, PRODUCT_LINE_LABEL } from "@/lib/equipment/data";
import { getCategoryKeyBySlug, isProductLine } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { EquipmentProductsBlock } from "@/components/equipment/EquipmentProductsBlock";

type Props = {
  params: Promise<{ locale: Locale; categorySlug: string; line: string }>;
};

export default async function EquipmentLinePage({ params }: Props) {
  const { locale, categorySlug, line } = await params;

  const key = getCategoryKeyBySlug(categorySlug);
  if (!key) notFound();
  if (!isProductLine(line)) notFound();

  const category = EQUIPMENT_CATEGORIES.find((c) => c.key === key);
  if (!category) notFound();

  const products = (category.products ?? []).filter((p) => p.line === line);
  if (products.length === 0) notFound();

  const lineTitle = PRODUCT_LINE_LABEL[line][locale];

  return (
    <>
      <Section spacing="hero">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href={`/${locale}/equipment`} className="hover:underline underline-offset-4">
            {locale === "ua" ? "Обладнання" : "Equipment"}
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/${locale}/equipment/${categorySlug}`}
            className="hover:underline underline-offset-4"
          >
            {category.title[locale]}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{lineTitle}</span>
        </div>

        <PageHeader
          eyebrow={category.title[locale]}
          title={lineTitle}
          subtitle={
            locale === "ua"
              ? "Огляд продуктів. Фінальна конфігурація залежить від вимог та ІТ/інженерного контуру."
              : "Product overview. Final configuration depends on requirements and IT/engineering constraints."
          }
        />

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/${locale}/equipment/${categorySlug}`}
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            {locale === "ua" ? "← До категорії" : "← Back to category"}
          </Link>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <Link
            href={`/${locale}/equipment`}
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            {locale === "ua" ? "← До всіх категорій" : "← Back to categories"}
          </Link>
        </div>
      </Section>

      <Section>
        <EquipmentProductsBlock products={products} locale={locale} />
      </Section>
    </>
  );
}
