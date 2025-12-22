import Container from "./Container";
import type { Locale } from "@/lib/i18n/locales";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Medintegro</p>
          <p className="text-xs">Locale: {locale.toUpperCase()}</p>
        </div>
      </Container>
    </footer>
  );
}
