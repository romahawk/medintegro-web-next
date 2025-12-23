import type { Locale } from "@/lib/i18n/locales";
import { getPage } from "@/lib/content/getPage";
import SimplePage from "@/components/site/SimplePage";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const page = await getPage(locale, "about");

  if (page.slug === "home") throw new Error("Content mismatch: expected about");

  return <SimplePage page={page} />;
}
