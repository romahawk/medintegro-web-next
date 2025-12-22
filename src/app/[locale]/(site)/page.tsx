import type { Locale } from "@/lib/i18n/locales";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold">Home ({locale})</h1>
      <p className="mt-3 text-muted-foreground">
        Locale routing OK. Next: content layer + header/footer.
      </p>
    </main>
  );
}
