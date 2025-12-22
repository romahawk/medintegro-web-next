import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;

  return (
    <>
      <Header locale={l} />
      {children}
      <Footer locale={l} />
    </>
  );
}
