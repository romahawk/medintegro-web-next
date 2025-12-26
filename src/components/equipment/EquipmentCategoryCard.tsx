import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { EquipmentCategory } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";
import { getIconByKey } from "@/lib/equipment/icons";
import { getCategoryHref } from "@/lib/equipment/routes";

type Props = {
  category: EquipmentCategory;
  locale: Locale;
  showProductsPreview?: boolean;
};

function coverClassByKey(key: string) {
  switch (key) {
    case "or":
      return "from-sky-400/20 via-transparent to-transparent";
    case "integration":
      return "from-indigo-400/16 via-transparent to-transparent";
    case "monitoring":
      return "from-emerald-400/14 via-transparent to-transparent";
    case "icu":
      return "from-violet-400/14 via-transparent to-transparent";
    case "gas":
      return "from-amber-400/14 via-transparent to-transparent";
    case "lights":
      return "from-cyan-400/14 via-transparent to-transparent";
    case "service":
      return "from-slate-400/14 via-transparent to-transparent";
    default:
      return "from-sky-400/16 via-transparent to-transparent";
  }
}

function flowLabelsByKey(key: string, locale: Locale) {
  const isUA = locale === "ua";
  switch (key) {
    case "or":
      return isUA ? ["Джерела", "Керування", "Виходи"] : ["Sources", "Control", "Destinations"];
    case "integration":
      return isUA ? ["Системи", "Інтеграція", "EMR/PACS"] : ["Systems", "Integration", "EMR/PACS"];
    case "monitoring":
      return isUA ? ["Сигнали", "Обробка", "Дисплеї"] : ["Signals", "Processing", "Displays"];
    case "icu":
      return isUA ? ["Пацієнт", "Bedside", "Центральна"] : ["Patient", "Bedside", "Central"];
    case "gas":
      return isUA ? ["Джерела", "Мережа", "Точки"] : ["Sources", "Network", "Outlets"];
    case "lights":
      return isUA ? ["Світло", "Підвіси", "Зона"] : ["Light", "Mounting", "Work area"];
    case "service":
      return isUA ? ["Запуск", "Навчання", "Підтримка"] : ["Go-live", "Training", "Support"];
    default:
      return isUA ? ["Вхід", "Ядро", "Вихід"] : ["Input", "Core", "Output"];
  }
}

export function EquipmentCategoryCard({ category, locale, showProductsPreview = false }: Props) {
  const Icon = getIconByKey(category.iconKey);
  const chips = category.chips?.[locale] ?? [];
  const includes = category.includes?.[locale] ?? [];
  const products = category.products ?? [];
  const href = getCategoryHref(locale, category.key);
  const flow = flowLabelsByKey(category.key, locale);

  return (
    <Card className="border-border/60">
      <CardContent className="group relative overflow-hidden p-6">
        {/* Gradient cover */}
        <div className="pointer-events-none absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${coverClassByKey(category.key)}`} />
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: "radial-gradient(rgba(2,132,199,0.18) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative z-10 space-y-4">
          <Link href={href} className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-ring">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold group-hover:underline">
                  {category.title[locale]}
                </h3>
                <p className="text-sm text-muted-foreground">{category.lead[locale]}</p>
              </div>

              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/80 backdrop-blur">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </Link>

          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {chips.map((t) => (
                <Badge key={t} variant="outline" className="border-border/60 bg-background/70 backdrop-blur">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {flow.map((f, i) => (
              <span key={i} className="rounded-full border border-border/60 bg-background/70 px-2 py-1 backdrop-blur">
                {f}
              </span>
            ))}
          </div>

          {includes.length > 0 && (
            <div className="relative">
              <div className="text-sm font-medium">
                {locale === "ua" ? "Що включає" : "What it includes"}
              </div>

              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {includes.slice(0, 2).map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>

              <div className="mt-3 overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur max-h-0 opacity-0 transition-all duration-200 group-hover:max-h-64 group-hover:opacity-100 group-focus-within:max-h-64 group-focus-within:opacity-100">
                <div className="p-4">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {includes.slice(0, 6).map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {showProductsPreview && products.length > 0 && (
            <ul className="text-sm text-muted-foreground">
              {products.slice(0, 3).map((p) => (
                <li key={p.key}>• {p.name}</li>
              ))}
            </ul>
          )}

          <Link href={href} className="text-sm font-medium text-primary hover:underline">
            {locale === "ua" ? "Відкрити категорію →" : "Open category →"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
