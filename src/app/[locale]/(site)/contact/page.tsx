import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isUA = locale === "ua";

  return (
    <>
      {/* HERO */}
      <Section spacing="hero">
        <PageHeader
          eyebrow={isUA ? "Контакти" : "Contact"}
          title={
            isUA
              ? "Зв’яжіться з нами для обговорення вашого проєкту"
              : "Get in touch to discuss your project"
          }
          subtitle={
            isUA
              ? "Ми працюємо з клініками та партнерами над медичними проєктами: від консультацій до впровадження та сервісу."
              : "We work with clinics and partners on medical projects: from consulting to implementation and service."
          }
        />
      </Section>

      {/* CONTACT BLOCKS */}
      <Section tone="muted">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={Mail}
            title={isUA ? "Email" : "Email"}
            value="info@medintegro.com"
            note={isUA ? "Основний канал звʼязку" : "Primary contact channel"}
          />

          <ContactCard
            icon={Phone}
            title={isUA ? "Телефон" : "Phone"}
            value="+38 (XXX) XXX-XX-XX"
            note={isUA ? "Робочі години" : "Business hours"}
          />

          <ContactCard
            icon={MapPin}
            title={isUA ? "Локація" : "Location"}
            value={isUA ? "Україна / Європа" : "Ukraine / Europe"}
            note={
              isUA
                ? "Проєкти по всій Європі"
                : "Projects across Europe"
            }
          />

          <ContactCard
            icon={Clock}
            title={isUA ? "Графік" : "Hours"}
            value={isUA ? "Пн–Пт, 9:00–18:00" : "Mon–Fri, 9:00–18:00"}
            note={
              isUA
                ? "За домовленістю — гнучко"
                : "Flexible by agreement"
            }
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
      </Section>

      {/* CTA */}
      <Section spacing="dense">
        <CtaBand
          title={
            isUA
              ? "Готові перейти до обговорення?"
              : "Ready to start the discussion?"
          }
          subtitle={
            isUA
              ? "Напишіть нам коротко про ваш проєкт — ми відповімо та запропонуємо наступний крок."
              : "Send us a brief description of your project — we’ll respond with a clear next step."
          }
          primary={{
            label: isUA ? "Написати email" : "Send email",
            href: "mailto:info@medintegro.com",
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
}: {
  icon: any;
  title: string;
  value: string;
  note?: string;
}) {
  return (
    <Card className="border-border/60">
      <CardContent className="p-6 space-y-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{value}</div>
          {note ? (
            <div className="text-xs text-muted-foreground">{note}</div>
          ) : null}
        </div>
      </CardContent>
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
    <div className="rounded-2xl border border-border/60 bg-background p-6 space-y-2">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="text-sm font-medium">{title}</div>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
