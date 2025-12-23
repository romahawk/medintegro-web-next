import Link from "next/link";
import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { BrandHero } from "@/components/site/BrandHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  const t = {
    eyebrow: isUA ? "Контакти" : "Contact",
    title: isUA
      ? "Зв’яжіться з нами для обговорення вашого проєкту"
      : "Get in touch to discuss your project",
    subtitle: isUA
      ? "Ми працюємо з клініками та партнерами над медичними проєктами: від консультацій до впровадження та сервісу."
      : "We work with clinics and partners on medical projects: from consulting to implementation and service.",

    primaryCta: isUA ? "Написати email" : "Send email",
    secondaryCta: isUA ? "Перейти до рішень" : "Explore solutions",

    proof: [
      {
        label: isUA ? "Старт" : "Start",
        title: isUA ? "Коротко описати контекст" : "Share brief context",
        text: isUA
          ? "Відділення, кількість OR/ICU, що вже є, які цілі."
          : "Department, number of OR/ICU rooms, what exists, goals.",
        icon: MessageSquare,
      },
      {
        label: isUA ? "Формат" : "Format",
        title: isUA ? "Погодити підхід" : "Align approach",
        text: isUA
          ? "Пропонуємо структуру рішення та наступні кроки."
          : "We propose a solution structure and next steps.",
        icon: Layers,
      },
      {
        label: isUA ? "Якість" : "Quality",
        title: isUA ? "Менше ризику на delivery" : "Lower delivery risk",
        text: isUA
          ? "Документація + критерії приймання = прогнозованість."
          : "Documentation + acceptance criteria = predictability.",
        icon: ShieldCheck,
      },
    ],
  };

  const HeroActions = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild className="w-full sm:w-auto">
        <a href="mailto:info@medintegro.com">
          <span className="inline-flex items-center gap-2">
            {t.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        className="w-full sm:w-auto border-white/25 bg-white/10 text-white hover:bg-white/15"
      >
        <Link href={`/${locale}/equipment`}>{t.secondaryCta}</Link>
      </Button>
    </div>
  );

  const ProofStrip = (
    <div className="grid gap-4 md:grid-cols-3">
      {t.proof.map((p) => {
        const Icon = p.icon;
        return (
          <div
            key={p.title}
            className={cn(
              "group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur",
              "transition hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-lg hover:shadow-black/10",
              "focus-within:ring-2 focus-within:ring-[rgb(var(--brand-sky-rgb))]/70"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Badge className="w-fit bg-white/10 text-white border border-white/15">
                  {p.label}
                </Badge>
                <div className="text-sm font-semibold text-white">{p.title}</div>
              </div>

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition group-hover:border-white/25 group-hover:bg-white/15">
                <Icon className="h-5 w-5 text-white/85" />
              </div>
            </div>

            <p className="mt-3 text-sm text-white/80">{p.text}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* HERO (brand style) */}
      <Section spacing="hero">
        <BrandHero
          eyebrow={t.eyebrow.toUpperCase()}
          title={t.title}
          subtitle={t.subtitle}
          actions={HeroActions}
          footer={ProofStrip}
        />
      </Section>

      {/* CONTACT BLOCKS */}
      <Section tone="muted">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {isUA ? "Контакти" : "Contact details"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isUA
                ? "Найшвидше — email. Телефон за домовленістю."
                : "Fastest — email. Phone by agreement."}
            </p>
          </div>

          <div className="hidden md:block h-px w-40 bg-linear-to-r from-transparent via-[rgb(var(--brand-sky-rgb))]/35 to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={Mail}
            title="Email"
            value="info@medintegro.com"
            href="mailto:info@medintegro.com"
            note={isUA ? "Основний канал звʼязку" : "Primary contact channel"}
          />

          <ContactCard
            icon={Phone}
            title={isUA ? "Телефон" : "Phone"}
            value="+38 (XXX) XXX-XX-XX"
            href="tel:+380000000000"
            note={isUA ? "За домовленістю" : "By agreement"}
          />

          <ContactCard
            icon={MapPin}
            title={isUA ? "Локація" : "Location"}
            value={isUA ? "Україна / Європа" : "Ukraine / Europe"}
            note={isUA ? "Проєкти по всій Європі" : "Projects across Europe"}
          />

          <ContactCard
            icon={Clock}
            title={isUA ? "Графік" : "Hours"}
            value={isUA ? "Пн–Пт, 9:00–18:00" : "Mon–Fri, 9:00–18:00"}
            note={isUA ? "Гнучко за домовленістю" : "Flexible by agreement"}
          />
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {isUA ? "Як ми зазвичай працюємо" : "How we usually work"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {isUA
                ? "Ми не починаємо з каталогу. Ми починаємо з задач, контексту та обмежень вашого проєкту."
                : "We don’t start with a catalog. We start with your goals, context, and constraints."}
            </p>

            <div className="pt-2">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--brand-deep-rgb))] underline-offset-4 hover:underline"
              >
                {isUA ? "Переглянути послуги" : "View services"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <StepCard
              icon={MessageSquare}
              title={isUA ? "Коротке обговорення" : "Initial discussion"}
              text={
                isUA
                  ? "Розуміємо задачу, середовище та очікування."
                  : "We clarify goals, environment, and expectations."
              }
            />
            <StepCard
              icon={CheckCircle2}
              title={isUA ? "Пропозиція формату" : "Proposed approach"}
              text={
                isUA
                  ? "Пропонуємо структуру рішення та наступні кроки."
                  : "We propose a solution structure and next steps."
              }
            />
          </div>
        </div>

        {/* Small “what to include” helper */}
        <Card className="mt-8 border-border/60">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-[rgb(var(--brand-sky-rgb))]/8">
                <Sparkles className="h-5 w-5 text-[rgb(var(--brand-deep-rgb))] opacity-80" />
              </div>

              <div className="space-y-1">
                <div className="text-sm font-semibold">
                  {isUA ? "Що написати в першому повідомленні" : "What to include in your first message"}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {isUA
                    ? "1) відділення і кількість OR/ICU, 2) які системи вже є, 3) що треба інтегрувати, 4) терміни, 5) країна/місто реалізації."
                    : "1) department and OR/ICU count, 2) existing systems, 3) what to integrate, 4) timeline, 5) country/city."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={isUA ? "Готові перейти до обговорення?" : "Ready to start the discussion?"}
          subtitle={
            isUA
              ? "Напишіть нам коротко про ваш проєкт — ми відповімо та запропонуємо наступний крок."
              : "Send a brief description of your project — we’ll respond with a clear next step."
          }
          primary={{
            label: isUA ? "Написати email" : "Send email",
            href: "mailto:info@medintegro.com",
          }}
          secondary={{
            label: isUA ? "Обладнання" : "Equipment",
            href: `/${locale}/equipment`,
          }}
        />
      </Section>
    </>
  );
}

/* ---------- Components ---------- */

function ContactCard({
  icon: Icon,
  title,
  value,
  note,
  href,
}: {
  icon: any;
  title: string;
  value: string;
  note?: string;
  href?: string;
}) {
  const Content = (
    <CardContent className="p-6 space-y-3">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-[rgb(var(--brand-sky-rgb))]/6 transition group-hover:bg-[rgb(var(--brand-sky-rgb))]/10">
        <Icon className="h-5 w-5 text-[rgb(var(--brand-deep-rgb))] opacity-75" />
      </div>

      <div className="space-y-1">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">
          {href ? (
            <a
              href={href}
              className="underline-offset-4 hover:underline"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              {value}
            </a>
          ) : (
            value
          )}
        </div>
        {note ? <div className="text-xs text-muted-foreground">{note}</div> : null}
      </div>
    </CardContent>
  );

  return (
    <Card
      className={cn(
        "group border-border/60 bg-background",
        "transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
        "hover:border-[rgb(var(--brand-sky-rgb))]/30"
      )}
    >
      {Content}
    </Card>
  );
}

function StepCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-border/60 bg-background p-6 space-y-2",
        "transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5",
        "hover:border-[rgb(var(--brand-sky-rgb))]/30"
      )}
    >
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-[rgb(var(--brand-sky-rgb))]/6 transition group-hover:bg-[rgb(var(--brand-sky-rgb))]/10">
        <Icon className="h-4 w-4 text-[rgb(var(--brand-deep-rgb))] opacity-75" />
      </div>
      <div className="text-sm font-medium">{title}</div>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
