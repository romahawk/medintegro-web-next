"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { locales, type Locale } from "@/lib/i18n/locales";
import { navLabels, type NavKey } from "@/lib/i18n/nav";

const NAV: Array<{ href: string; key: NavKey }> = [
  { href: "/about", key: "about" },
  { href: "/equipment", key: "equipment" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
];

function withLocale(locale: Locale, href: string) {
  if (href === "/") return `/${locale}`;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function switchLocale(pathname: string, nextLocale: Locale) {
  // pathname examples:
  // /en
  // /en/about
  // /ua/services
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
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-semibold tracking-tight"
          >
            Medintegro
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={withLocale(locale, item.href)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {navLabels[locale][item.key]}
              </Link>
            ))}
          </nav>

          {/* Locale switcher */}
          <div className="flex items-center gap-2">
            {locales.map((l) => (
              <Button
                key={l}
                asChild
                variant={l === locale ? "default" : "outline"}
                size="sm"
              >
                <Link href={switchLocale(pathname, l)}>
                  {l.toUpperCase()}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
