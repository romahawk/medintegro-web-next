import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { isLocale, type Locale } from "@/lib/i18n/locales";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Locale guard + safe fallback
  const l: Locale = isLocale(locale) ? locale : "ua";

  return (
    <>
      <Header locale={l} />
      <main>{children}</main>
      <Footer locale={l} />
    </>
  );
}
