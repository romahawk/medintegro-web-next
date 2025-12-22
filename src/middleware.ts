import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "ua"] as const;
const DEFAULT_LOCALE = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // bypass Next internals + APIs + well-known + static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/.well-known") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // already localized
  const first = pathname.split("/")[1];
  if (LOCALES.includes(first as any)) {
    return NextResponse.next();
  }

  // "/" -> "/en", "/about" -> "/en/about"
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
