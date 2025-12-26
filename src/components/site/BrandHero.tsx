import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;

  /** Optional primary/secondary CTA buttons or any custom CTA block */
  actions?: ReactNode;

  /** Optional block under hero content (e.g., proof strip). */
  footer?: ReactNode;

  /** Optional: constrain text width */
  maxWidthClassName?: string;

  /** Visual density */
  variant?: "default" | "compact";

  /** Extra class for outer container */
  className?: string;
};

export function BrandHero({
  eyebrow,
  title,
  subtitle,
  actions,
  footer,
  maxWidthClassName = "max-w-3xl",
  variant = "default",
  className,
}: Props) {
  const isCompact = variant === "compact";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-border/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgb(var(--brand-deep-rgb))] via-[rgb(var(--brand-mid-rgb))] to-[rgb(var(--brand-deep-rgb))]" />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(60%_60%_at_50%_15%,black,transparent)]">
        <div className="absolute -top-28 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-[rgb(var(--brand-sky-rgb))]/18 blur-3xl" />
      </div>

      {/* Tech texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(rgba(255,255,255,0.70)_1px,transparent_1px)] bg-size-[26px_26px]" />

      <div className={`relative ${isCompact ? "p-6 md:p-8" : "p-6 md:p-12"}`}>
        <div className={maxWidthClassName}>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-sky-rgb))]" />
              {eyebrow}
            </div>
          )}

          <h1
            className={`mt-3 font-semibold tracking-tight text-white ${
              isCompact
                ? "text-2xl md:text-4xl"
                : "text-3xl md:text-6xl"
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-3 max-w-2xl leading-relaxed text-white/80 ${
                isCompact ? "text-sm" : "text-sm md:text-base"
              }`}
            >
              {subtitle}
            </p>
          )}

          {actions && <div className="mt-5">{actions}</div>}
        </div>

        {/* Footer only in default variant */}
        {!isCompact && footer && <div className="mt-10">{footer}</div>}
      </div>
    </div>
  );
}
