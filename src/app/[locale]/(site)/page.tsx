import type { Locale } from "@/lib/i18n/locales";
import { getPage } from "@/lib/content/getPage";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const page = await getPage(locale, "home");

  if (page.slug !== "home") throw new Error("Content mismatch: expected home");

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-semibold tracking-tight">{page.hero.title}</h1>
      {page.hero.subtitle ? (
        <p className="mt-3 text-muted-foreground">{page.hero.subtitle}</p>
      ) : null}
    </main>
  );
}
