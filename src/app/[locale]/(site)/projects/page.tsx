import type { Locale } from "@/lib/i18n/locales";
import { getPage } from "@/lib/content/getPage";
import SimplePage from "@/components/site/SimplePage";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const page = await getPage(locale, "projects");

  if (page.slug === "home") throw new Error("Content mismatch: expected projects");

  return <SimplePage page={page} />;
}
