import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { EquipmentProduct } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";
import { ExternalLink } from "lucide-react";

type Props = {
  product: EquipmentProduct;
  locale: Locale;
};

export function EquipmentProductCard({ product, locale }: Props) {
  const summary = product.summary[locale];
  const highlights = product.highlights[locale]?.slice(0, 4) ?? [];

  return (
    <Card className="border-border/60">
      <CardHeader className="space-y-1">
        <div className="text-sm text-muted-foreground">{product.brand}</div>
        <h4 className="text-base font-semibold leading-snug">{product.name}</h4>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>

        {highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        )}

        {product.url && (
          <div className="pt-1">
            <Button asChild variant="outline" size="sm">
              <Link href={product.url} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2">
                  {locale === "ua" ? "Детальніше" : "Learn more"}
                  <ExternalLink className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
