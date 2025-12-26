"use client";

import { useMemo, useState } from "react";

import type { EquipmentCategory } from "@/lib/equipment/types";
import type { Locale } from "@/lib/i18n/locales";

import { EquipmentCategoryCard } from "@/components/equipment/EquipmentCategoryCard";

type Props = {
  categories: EquipmentCategory[];
  locale: Locale;
};

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function EquipmentCategoryBrowser({ categories, locale }: Props) {
  const [query, setQuery] = useState("");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return categories.filter((c) => {
      if (activeKey && c.key !== activeKey) return false;

      if (!q) return true;

      const hay = [
        c.title?.[locale] ?? "",
        c.lead?.[locale] ?? "",
        ...(c.chips?.[locale] ?? []),
        ...(c.includes?.[locale] ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(q);
    });
  }, [categories, locale, query, activeKey]);

  return (
    <div className="space-y-4">
      {/* Search + quick filters row */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={locale === "ua" ? "Пошук по категоріях…" : "Search categories…"}
              className="w-full sm:w-90 rounded-xl border border-border/60 bg-background px-4 py-2 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
                aria-label={locale === "ua" ? "Очистити" : "Clear"}
              >
                ✕
              </button>
            ) : null}
          </div>

          <div className="text-sm text-muted-foreground">
            {locale === "ua"
              ? `Знайдено: ${filtered.length}`
              : `Found: ${filtered.length}`}
          </div>
        </div>

        {/* Quick category filters */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveKey(null)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-medium transition",
              activeKey === null
                ? "border-[rgb(var(--brand-sky-rgb))]/40 bg-[rgb(var(--brand-sky-rgb))]/10 text-foreground"
                : "border-border/60 bg-background text-muted-foreground hover:bg-muted",
            ].join(" ")}
          >
            {locale === "ua" ? "Усі" : "All"}
          </button>

          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setActiveKey((prev) => (prev === c.key ? null : c.key))}
              className={[
                "rounded-full border px-3 py-1 text-xs font-medium transition",
                activeKey === c.key
                  ? "border-[rgb(var(--brand-sky-rgb))]/40 bg-[rgb(var(--brand-sky-rgb))]/10 text-foreground"
                  : "border-border/60 bg-background text-muted-foreground hover:bg-muted",
              ].join(" ")}
              title={c.title?.[locale]}
            >
              {c.title?.[locale] ?? c.key}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((category) => (
          <div key={category.key} className="transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5">
            <EquipmentCategoryCard category={category} locale={locale} />
          </div>
        ))}
      </div>
    </div>
  );
}
