import type { Locale } from "@/lib/i18n/locales";
import { getPage } from "@/lib/content/getPage";
import SimplePage from "@/components/site/SimplePage";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const page = await getPage(locale, "services");

  if (page.slug === "home") throw new Error("Content mismatch: expected services");

  return <SimplePage page={page} />;
}
