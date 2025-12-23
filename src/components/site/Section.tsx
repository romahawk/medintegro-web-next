import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted";
  spacing?: "default" | "hero" | "dense";
  containerSize?: "default" | "wide";
};

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  hero: "py-16 md:py-24",
  default: "py-14 md:py-20",
  dense: "py-10 md:py-14",
};

export function Section({
  className,
  tone = "default",
  spacing = "default",
  containerSize = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        spacingMap[spacing],
        tone === "muted" ? "bg-muted/30" : "bg-background",
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
