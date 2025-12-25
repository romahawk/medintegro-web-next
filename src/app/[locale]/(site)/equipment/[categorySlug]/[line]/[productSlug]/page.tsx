import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment/data";
import { getCategoryKeyBySlug, isProductLine } from "@/lib/equipment/routes";

import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{
    locale: Locale;
    categorySlug: string;
    line: string;
    productSlug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { locale, categorySlug, line, productSlug } = await params;
  const isUA = locale === "ua";

  const categoryKey = getCategoryKeyBySlug(categorySlug);
  if (!categoryKey || !isProductLine(line)) notFound();

  const category = EQUIPMENT_CATEGORIES.find((c) => c.key === categoryKey);
  if (!category) notFound();

  const product = category.products?.find(
    (p) => p.key === productSlug && p.line === line
  );
  if (!product) notFound();

  const summary = product.summary[locale];
  const highlights = product.highlights[locale] ?? [];

  return (
    <>
      {/* HEADER */}
      <Section spacing="hero">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href={`/${locale}/equipment`} className="hover:underline">
            {isUA ? "Обладнання" : "Equipment"}
          </Link>
          <span>/</span>
          <Link
            href={`/${locale}/equipment/${categorySlug}`}
            className="hover:underline"
          >
            {category.title[locale]}
          </Link>
          <span>/</span>
          <Link
            href={`/${locale}/equipment/${categorySlug}/${line}`}
            className="hover:underline"
          >
            {line}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <PageHeader
          eyebrow={product.brand}
          title={product.name}
          subtitle={summary}
        />
      </Section>

      {/* CONTENT */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Highlights */}
            {highlights.length > 0 && (
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h2 className="text-base font-semibold">
                    {isUA ? "Ключові можливості" : "Key highlights"}
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Use cases (generic for now) */}
            <Card className="border-border/60">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold">
                  {isUA ? "Типові сценарії застосування" : "Typical use cases"}
                </h2>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/${locale}/equipment/${categorySlug}/${line}/compare`}>
                        {locale === "ua" ? "Порівняти системи" : "Compare systems"}
                    </Link>
                </Button>

                <p className="mt-2 text-sm text-muted-foreground max-w-prose">
                  {isUA
                    ? "Використовується як частина інтегрованої системи з іншими джерелами, записом, маршрутизацією та IT-інфраструктурою."
                    : "Used as part of an integrated system with other sources, routing, recording, and IT infrastructure."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-3">
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-3">
                <div className="text-sm font-medium">
                  {isUA ? "Наступний крок" : "Next step"}
                </div>

                <Button asChild className="w-full">
                  <Link
                    href={`/${locale}/consultation?category=${category.key}&line=${line}&product=${product.key}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {isUA
                        ? "Запросити консультацію"
                        : "Request consultation"}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>

                {product.url && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-flex items-center gap-2">
                        {isUA ? "Сайт виробника" : "Manufacturer website"}
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
