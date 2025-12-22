import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl p-10">
      <Card>
        <CardHeader>
          <CardTitle>shadcn/ui OK</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
        </CardContent>
      </Card>
    </main>
  );
}
