"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { locales, type Locale } from "@/lib/i18n/locales";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/equipment", label: "Equipment" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

function withLocale(locale: Locale, href: string) {
  if (href === "/") return `/${locale}`;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function switchLocale(pathname: string, nextLocale: Locale) {
  // pathname like "/en", "/en/about", "/ua/contact"
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale;
  return `/${parts.join("/")}`;
}

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="font-semibold tracking-tight">
            Medintegro
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {locales.map((l) => (
              <Button
                key={l}
                asChild
                variant={l === locale ? "default" : "outline"}
                size="sm"
              >
                <Link href={switchLocale(pathname, l)}>{l.toUpperCase()}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
