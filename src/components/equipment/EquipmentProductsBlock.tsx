import type { EquipmentProduct, ProductLine } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";
import { EquipmentProductCard } from "./EquipmentProductCard";
import { PRODUCT_LINE_LABEL } from "@/lib/equipment/data";

type Props = {
  products: EquipmentProduct[];
  locale: Locale;
};

type LineKey = Extract<ProductLine, "standalone" | "integrated">;

export function EquipmentProductsBlock({ products, locale }: Props) {
  const standalone = products.filter((p) => p.line === "standalone");
  const integrated = products.filter((p) => p.line === "integrated");

  const rawGroups = [
    { key: "standalone", items: standalone },
    { key: "integrated", items: integrated },
  ] as const satisfies ReadonlyArray<{ key: LineKey; items: EquipmentProduct[] }>;

  const groups = rawGroups.filter((g) => g.items.length > 0);

  return (
    <div className="mt-6 space-y-6">
      <div className="space-y-1">
        <div className="text-sm font-medium">
          {locale === "ua" ? "Рішення та продукти" : "Solutions & products"}
        </div>
        <p className="text-sm text-muted-foreground">
          {locale === "ua"
            ? "Стартовий набір для MVP. Далі розширимо лінійки та опції."
            : "MVP starter set. We’ll expand lines and options next."}
        </p>
      </div>

      {groups.map((g) => (
        <div key={g.key} className="space-y-3">
          <h5 className="text-sm font-semibold">{PRODUCT_LINE_LABEL[g.key][locale]}</h5>

          <div className="grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <EquipmentProductCard key={p.key} product={p} locale={locale} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
