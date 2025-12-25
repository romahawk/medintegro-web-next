"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale;
  return `/${parts.join("/")}`;
}

function isActivePath(pathname: string, targetHrefWithLocale: string) {
  // normalize: remove trailing slash except root
  const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const p = norm(pathname);
  const t = norm(targetHrefWithLocale);

  // exact match OR "starts with" for nested pages (e.g., /equipment/or-integration)
  return p === t || p.startsWith(`${t}/`);
}

/** ✅ NAMED EXPORT */
export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-border/60",
        "bg-background/80 backdrop-blur",
        "supports-backdrop-filter:bg-background/60"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/brand/medintegro-logo.png"
              alt="Medintegro"
              width={170}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => {
              const href = withLocale(locale, item.href);
              const active = isActivePath(pathname, href);

              return (
                <Link
                  key={item.key}
                  href={href}
                  className={cn(
                    "relative pb-1 text-sm transition-colors",
                    active
                      ? "text-sky-600 font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {navLabels[locale][item.key]}

                  {/* underline */}
                  <span
                    className={cn(
                      "absolute left-0 right-0 -bottom-[2px] h-[2px] rounded-full transition-opacity",
                      active ? "bg-sky-600 opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              );
            })}
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
                <Link href={switchLocale(pathname, l)}>{l.toUpperCase()}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
