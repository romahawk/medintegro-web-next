import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

type Locale = "ua" | "en";

export function Footer({ locale }: { locale: Locale }) {
  const isUA = locale === "ua";

  const nav = [
    { href: `/${locale}/about`, label: isUA ? "Про нас" : "About" },
    { href: `/${locale}/equipment`, label: isUA ? "Обладнання" : "Equipment" },
    { href: `/${locale}/services`, label: isUA ? "Послуги" : "Services" },
    { href: `/${locale}/projects`, label: isUA ? "Проєкти" : "Projects" },
    { href: `/${locale}/contact`, label: isUA ? "Контакти" : "Contact" },
  ];

  const services = [
    isUA ? "Консалтинг" : "Consulting",
    isUA ? "Інтеграція OR" : "OR integration",
    isUA ? "Навчання" : "Training",
    isUA ? "Поставка" : "Supply",
    isUA ? "Сервіс" : "Service",
  ];

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 py-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-base font-semibold tracking-tight">
              Medintegro
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-prose">
              {isUA
                ? "Інженерний підхід до медичних проєктів: інтеграції, оснащення, навчання та підтримка."
                : "An engineering approach to medical projects: integrations, equipping, training, and support."}
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm">
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                href="mailto:info@medintegro.com"
              >
                <Mail className="h-4 w-4" />
                info@medintegro.com
              </a>
              <span className="text-muted-foreground/50">•</span>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                href="tel:+380000000000"
              >
                <Phone className="h-4 w-4" />
                +38 (XXX) XXX-XX-XX
              </a>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>
                {isUA ? "Україна / Європа" : "Ukraine / Europe"}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-sm font-medium">
              {isUA ? "Навігація" : "Navigation"}
            </div>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-sm font-medium">
              {isUA ? "Фокус" : "Focus"}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Locale + CTA */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-sm font-medium">
              {isUA ? "Мова" : "Language"}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/ua"
                className={`rounded-full border px-3 py-1 transition ${
                  locale === "ua"
                    ? "border-border bg-muted text-foreground"
                    : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                UA
              </Link>
              <Link
                href="/en"
                className={`rounded-full border px-3 py-1 transition ${
                  locale === "en"
                    ? "border-border bg-muted text-foreground"
                    : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex w-full items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition"
              >
                {isUA ? "Зв’язатися" : "Contact"}
              </Link>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {isUA
                ? "Відповідаємо швидко та пропонуємо чіткий наступний крок."
                : "We respond quickly and propose a clear next step."}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/60 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Medintegro.{" "}
            {isUA ? "Всі права захищено." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href={`/${locale}/privacy`}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {isUA ? "Політика конфіденційності" : "Privacy policy"}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {isUA ? "Умови" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
