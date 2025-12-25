import type { EquipmentProduct } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";
import { EquipmentProductCard } from "./EquipmentProductCard";

type Props = {
  products: EquipmentProduct[];
  locale: Locale;
};

export function EquipmentProductsBlock({ products, locale }: Props) {
  if (products.length === 0) return null;

  return (
    <div className="mt-10 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-base font-semibold">
          {locale === "ua" ? "Продукти лінійки" : "Products in this line"}
        </h2>
        <p className="text-sm text-muted-foreground max-w-prose">
          {locale === "ua"
            ? "Нижче наведені системи та рішення, доступні в межах цієї лінійки."
            : "Below are the systems and solutions available within this solution line."}
        </p>
      </div>

      {/* Products grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <EquipmentProductCard
            key={product.key}
            product={product}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
