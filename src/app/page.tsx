import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { FeatureGrid, type FeatureItem } from "@/components/site/FeatureGrid";
import { TrustBar } from "@/components/site/TrustBar";
import { CtaBand } from "@/components/site/CtaBand";

// Keep your current imports for content-as-code.
// Example (adjust to your real functions):
import { getPage } from "@/lib/content/getPage";

type Props = {
  params: { locale: "ua" | "en" };
};

export default function HomePage({ params }: Props) {
  // We keep this safe: if your content shape differs, this won’t block the UI work.
  // After you paste your actual home content object shape, we’ll type it strictly.
  const page: any = getPage(params.locale, "home");

  const t = {
    eyebrow: page?.hero?.eyebrow ?? (params.locale === "ua" ? "MedTech solutions" : "MedTech solutions"),
    title:
      page?.hero?.title ??
      (params.locale === "ua"
        ? "Сучасні рішення для медичних проєктів та інтеграцій"
        : "Modern solutions for medical projects and integrations"),
    subtitle:
      page?.hero?.subtitle ??
      (params.locale === "ua"
        ? "Допомагаємо лікарням і партнерам планувати, постачати та впроваджувати медичні системи — структуровано, прозоро, під результат."
        : "We help hospitals and partners plan, supply, and implement medical systems — structured, transparent, outcome-driven."),
    primaryCta: page?.hero?.primaryCta ?? {
      label: params.locale === "ua" ? "Зв’язатися" : "Contact us",
      href: `/${params.locale}/contact`,
    },
    secondaryCta: page?.hero?.secondaryCta ?? {
      label: params.locale === "ua" ? "Послуги" : "Services",
      href: `/${params.locale}/services`,
    },
  };

  const features: FeatureItem[] =
    page?.valueProps ??
    (params.locale === "ua"
      ? [
          { title: "Проєктний підхід", description: "Від потреб до специфікації, таймлайну та контролю виконання." },
          { title: "Надійні інтеграції", description: "Фокус на сумісності, безпеці та стандартах в медсередовищі." },
          { title: "Підтримка та навчання", description: "Документація, інструктаж і супровід команди на місці." },
        ]
      : [
          { title: "Project-led delivery", description: "From needs to specs, timeline, and controlled execution." },
          { title: "Reliable integrations", description: "Compatibility, safety, and medical-environment standards." },
          { title: "Support & training", description: "Documentation, onboarding, and on-site enablement." },
        ]);

  const trustStats =
    page?.trust?.stats ??
    (params.locale === "ua"
      ? [
          { value: "10+ років", label: "реального досвіду в MedTech" },
          { value: "50+ проєктів", label: "постачання та інтеграцій" },
          { value: "E2E", label: "від плану до запуску" },
        ]
      : [
          { value: "10+ years", label: "hands-on MedTech experience" },
          { value: "50+ projects", label: "supplies and integrations" },
          { value: "E2E", label: "from plan to go-live" },
        ]);

  return (
    <>
      {/* HERO */}
      <Section spacing="hero">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <PageHeader
              eyebrow={t.eyebrow}
              title={t.title}
              subtitle={t.subtitle}
              actions={
                <>
                  <Button asChild>
                    <Link href={t.primaryCta.href}>{t.primaryCta.label}</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href={t.secondaryCta.href}>{t.secondaryCta.label}</Link>
                  </Button>
                </>
              }
            />
          </div>

          {/* Right side: calm “clinical” visual placeholder */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30 p-6">
              <div className="space-y-3">
                <div className="text-sm font-medium">
                  {params.locale === "ua" ? "Фокус" : "Focus"}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {params.locale === "ua" ? "Операційні та ICU рішення" : "OR & ICU solutions"}</li>
                  <li>• {params.locale === "ua" ? "Інтеграції та інфраструктура" : "Integrations & infrastructure"}</li>
                  <li>• {params.locale === "ua" ? "Сервіс та супровід" : "Service & lifecycle support"}</li>
                </ul>
              </div>

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* VALUE PROPS */}
      <Section tone="muted" spacing="default">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {params.locale === "ua" ? "Чому Medintegro" : "Why Medintegro"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
              {params.locale === "ua"
                ? "Структуровані рішення без хаосу: прозорі етапи, документація і контроль якості."
                : "Structured delivery without chaos: clear stages, documentation, and quality control."}
            </p>
          </div>

          <FeatureGrid items={features} />
        </div>
      </Section>

      {/* TRUST */}
      <Section spacing="dense">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {params.locale === "ua" ? "Довіра формується фактами" : "Trust is built on facts"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
              {params.locale === "ua"
                ? "Досвід, системність, відповідальність — те, що важливо для клінік і партнерів."
                : "Experience, structure, accountability — what matters to clinics and partners."}
            </p>
          </div>

          <TrustBar stats={trustStats} />
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {params.locale === "ua" ? "Послуги" : "Services"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {params.locale === "ua"
                ? "Коротко і по суті. Повну структуру винесемо на сторінку Services."
                : "Short and scannable. Full structure lives on the Services page."}
            </p>
            <Button asChild variant="secondary">
              <Link href={`/${params.locale}/services`}>
                {params.locale === "ua" ? "Переглянути всі" : "View all"}
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background p-6">
              <h3 className="text-base font-semibold">
                {params.locale === "ua" ? "Проєктування та специфікація" : "Planning & specification"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {params.locale === "ua"
                  ? "Вимоги, ризики, специфікації, технічна документація."
                  : "Requirements, risks, specifications, technical documentation."}
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background p-6">
              <h3 className="text-base font-semibold">
                {params.locale === "ua" ? "Постачання та координація" : "Supply & coordination"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {params.locale === "ua"
                  ? "Комунікація з виробниками, логістика, контроль етапів."
                  : "Manufacturer coordination, logistics, milestone control."}
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background p-6">
              <h3 className="text-base font-semibold">
                {params.locale === "ua" ? "Інсталяція та інтеграція" : "Installation & integration"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {params.locale === "ua"
                  ? "Запуск, перевірка, інтеграція під реальні сценарії."
                  : "Go-live, validation, integration for real workflows."}
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background p-6">
              <h3 className="text-base font-semibold">
                {params.locale === "ua" ? "Навчання та сервіс" : "Training & service"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {params.locale === "ua"
                  ? "Онбординг персоналу, документація, підтримка."
                  : "Staff onboarding, documentation, ongoing support."}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={params.locale === "ua" ? "Обговоримо ваш проєкт" : "Let’s discuss your project"}
          subtitle={
            params.locale === "ua"
              ? "Напишіть нам — відповімо швидко та запропонуємо наступний крок."
              : "Send a message — we’ll reply quickly and propose the next step."
          }
          primary={{
            label: params.locale === "ua" ? "Зв’язатися" : "Contact",
            href: `/${params.locale}/contact`,
          }}
          secondary={{
            label: params.locale === "ua" ? "Про компанію" : "About",
            href: `/${params.locale}/about`,
          }}
        />
      </Section>
    </>
  );
}
