import * as React from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  actions?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  actions,
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("space-y-5", isCenter && "text-center")}>
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground",
            isCenter && "mx-auto"
          )}
        >
          {eyebrow}
        </div>
      ) : null}

      <h1 className="text-4xl font-semibold tracking-tight leading-[1.08] md:text-5xl">
        {title}
      </h1>

      {subtitle ? (
        <p
          className={cn(
            "text-base leading-relaxed text-muted-foreground md:text-lg",
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      ) : null}

      {actions ? (
        <div className={cn("pt-2", isCenter && "flex justify-center")}>
          <div className="flex flex-col gap-3 sm:flex-row">{actions}</div>
        </div>
      ) : null}
    </div>
  );
}
