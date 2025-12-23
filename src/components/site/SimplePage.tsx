import Container from "@/components/site/Container";
import type { SimplePageContent } from "@/lib/content/types";

export default function SimplePage({ page }: { page: SimplePageContent }) {
  return (
    <main className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">{page.header.title}</h1>
        {page.header.subtitle ? (
          <p className="mt-2 max-w-2xl text-muted-foreground">{page.header.subtitle}</p>
        ) : null}

        <div className="mt-8 space-y-8">
          {page.sections.map((s, i) => (
            <section key={i} className="space-y-2">
              {s.title ? <h2 className="text-xl font-medium">{s.title}</h2> : null}
              <p className="text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
