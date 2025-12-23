import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Stat = { label: string; value: string };

export function TrustBar({ stats }: { stats: Stat[] }) {
  return (
    <Card className="border-border/60">
      <CardContent className="p-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
