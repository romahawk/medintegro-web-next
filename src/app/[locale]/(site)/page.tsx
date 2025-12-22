import type { Locale } from "@/lib/i18n/locales";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Home ({locale})
      </h1>
      <p className="mt-3 text-muted-foreground">
        Base layout OK. Next: content layer + pages.
      </p>
    </main>
  );
}
