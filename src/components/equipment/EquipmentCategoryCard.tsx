// src/components/equipment/EquipmentCategoryCard.tsx
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { EquipmentCategory } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";
import { getIconByKey } from "@/lib/equipment/icons";
import { getCategoryHref } from "@/lib/equipment/routes";

type Props = {
  category: EquipmentCategory;
  locale: Locale;

  /**
   * If true, renders inline products preview (optional).
   * Default: false
   */
  showProductsPreview?: boolean;
};

export function EquipmentCategoryCard({
  category,
  locale,
  showProductsPreview = false,
}: Props) {
  const Icon = getIconByKey(category.iconKey);

  const chips = category.chips?.[locale] ?? [];
  const includes = category.includes?.[locale] ?? [];
  const products = category.products ?? [];

  const href = getCategoryHref(locale, category.key);

  return (
    <Card className="border-border/60">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Clickable header (card itself is NOT a link because it may contain an accordion) */}
          <Link
            href={href}
            className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold underline-offset-4 hover:underline">
                  {category.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {category.lead[locale]}
                </p>
              </div>

              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </Link>

          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {chips.map((t) => (
                <Badge key={t} variant="outline" className="border-border/60">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          {includes.length > 0 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="includes">
                <AccordionTrigger className="text-sm">
                  {locale === "ua" ? "Що включає" : "What it includes"}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {includes.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {/* Optional products preview (disabled by default) */}
          {showProductsPreview && products.length > 0 ? (
            <div className="space-y-2">
              <div className="text-sm font-medium">
                {locale === "ua" ? "Приклади продуктів" : "Example products"}
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {products.slice(0, 3).map((p) => (
                  <li key={p.key}>• {p.name}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Explicit CTA link */}
          <div className="pt-1">
            <Link
              href={href}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {locale === "ua" ? "Відкрити категорію →" : "Open category →"}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
