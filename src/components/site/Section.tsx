import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "transparent";
  spacing?: "default" | "hero" | "dense";
  containerSize?: "default" | "wide";
  /**
   * If you ever need a full-bleed section without Container.
   * Default: true
   */
  withContainer?: boolean;
};

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  hero: "py-16 md:py-24",
  default: "py-14 md:py-20",
  dense: "py-10 md:py-14",
};

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  muted: "bg-muted/30",
  transparent: "bg-transparent",
};

export function Section({
  className,
  tone = "default",
  spacing = "default",
  containerSize = "default",
  withContainer = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative", spacingMap[spacing], toneMap[tone], className)}
      {...props}
    >
      {withContainer ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}
