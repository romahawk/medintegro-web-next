import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES, PRODUCT_LINE_LABEL } from "@/lib/equipment/data";
import { getCategoryKeyBySlug, isProductLine } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
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

  const isUA = locale === "ua";

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
          <span className="text-foreground">{lineTitle}</span>
        </div>

        <PageHeader
          eyebrow={category.title[locale]}
          title={lineTitle}
          subtitle={
            isUA
              ? "Лінійка рішень із власною архітектурою, масштабом та сценаріями застосування."
              : "A solution line with its own architecture, scale, and use cases."
          }
        />
      </Section>

      {/* LINE OVERVIEW */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Capabilities */}
            <Card className="border-border/60">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold">
                  {isUA ? "Ключові можливості" : "Key capabilities"}
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Централізоване керування джерелами та відео сигналами</li>
                  <li>• Масштабування в межах відділення або кількох OR</li>
                  <li>• Інтеграція з IT та інженерною інфраструктурою</li>
                  <li>• Підтримка сценаріїв навчання та трансляції</li>
                </ul>
              </CardContent>
            </Card>

            {/* Typical use cases */}
            <Card className="border-border/60">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold">
                  {isUA ? "Типові сценарії" : "Typical use cases"}
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Гібридні операційні з відео маршрутизацією</li>
                  <li>• Навчальні OR з записом та трансляцією</li>
                  <li>• Централізовані системи архівації</li>
                  <li>• Інтеграція з PACS / VNA</li>
                </ul>
              </CardContent>
            </Card>

            {/* Architecture hint */}
            <Card className="border-border/60">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold">
                  {isUA ? "Типова архітектура" : "Typical architecture"}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-prose">
                  {isUA
                    ? "Системи цієї лінійки зазвичай розміщуються в серверній або технічній зоні та обʼєднують кілька джерел і точок призначення через централізований вузол керування."
                    : "Systems in this line are typically deployed in a technical or server area and connect multiple sources and destinations through a centralized control node."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-3">
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-3">
                <div className="text-sm font-medium">
                  {isUA ? "Навігація" : "Navigation"}
                </div>
                <Link
                  href={`/${locale}/equipment/${categorySlug}`}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  {isUA ? "← Назад до категорії" : "← Back to category"}
                </Link>
                <Link
                  href={`/${locale}/equipment`}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  {isUA ? "← До всіх категорій" : "← Back to categories"}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <EquipmentProductsBlock products={products} locale={locale} />
      </Section>
    </>
  );
}
