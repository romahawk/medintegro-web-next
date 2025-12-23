import type { Locale } from "@/lib/i18n/locales";
import { getPage } from "@/lib/content/getPage";
import SimplePage from "@/components/site/SimplePage";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const page = await getPage(locale, "contact");

  if (page.slug === "home") throw new Error("Content mismatch: expected contact");

  return <SimplePage page={page} />;
}
