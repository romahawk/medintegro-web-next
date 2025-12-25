import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { EquipmentProduct } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  product: EquipmentProduct;
  locale: Locale;
};

export function EquipmentProductCard({ product, locale }: Props) {
  const summary = product.summary[locale];
  const highlights = product.highlights[locale]?.slice(0, 4) ?? [];

  return (
    <Link
      href={`/${locale}/equipment/${product.category}/${product.line}/${product.key}`}
      className="group block focus:outline-none"
    >
      <Card
        className="
          h-full border-border/60 transition
          hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5
          focus-within:ring-2 focus-within:ring-ring
        "
      >
        <CardHeader className="space-y-1">
          <div className="text-sm text-muted-foreground">{product.brand}</div>
          <h4 className="text-base font-semibold leading-snug group-hover:underline underline-offset-4">
            {product.name}
          </h4>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>

          {highlights.length > 0 && (
            <ul className="space-y-2 text-sm text-muted-foreground">
              {highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          )}

          <div className="pt-2 text-sm font-medium text-primary">
            {locale === "ua" ? "Переглянути продукт →" : "View product →"}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
