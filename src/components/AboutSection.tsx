"use client";

import * as React from "react";
import {
  ShieldCheck,
  FileCheck2,
  Briefcase,
  BadgeCheck,
  IdCardLanyard,
  PackageCheck,
  PrinterCheck,
  Shield,
} from "lucide-react";

export type Stat = {
  id: string;
  label: string;
  value: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  description?: string;
  icon?: React.ReactNode;
};

export type Partnership = {
  id: string;
  name: string;
  role?: string;
  description?: string;
  icon?: React.ReactNode;
};

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number; // 1-5
};

export type TeamCredential = {
  id: string;
  title: string;
  authority: string;
  detail?: string;
  icon?: React.ReactNode;
};

export interface AboutSectionProps {
  className?: string;
  style?: React.CSSProperties;
  heading?: string;
  subheading?: string;
  missionTitle?: string;
  missionBody?: string;
  stats?: Stat[];
  certifications?: Certification[];
  partnerships?: Partnership[];
  teamCredentials?: TeamCredential[];
  testimonials?: Testimonial[];
  layout?: "compact" | "full";
}

export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

const defaultStats: Stat[] = [
  {
    id: "years",
    label: "سنوات من الخبرة",
    value: "10+",
    icon: <Briefcase className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
    ariaLabel: "أكثر من عشر سنوات من الخبرة",
  },
  {
    id: "placements",
    label: "توظيفات ناجحة",
    value: "7,500+",
    icon: <PackageCheck className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
    ariaLabel: "أكثر من سبعة آلاف وخمسمائة توظيف ناجح",
  },
  {
    id: "satisfaction",
    label: "رضا العملاء",
    value: "98%",
    icon: <BadgeCheck className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
    ariaLabel: "نسبة رضا العملاء ثمانية وتسعون بالمائة",
  },
];

const defaultCerts: Certification[] = [
  {
    id: "misa-license",
    title: "ترخيص مكتب استقدام",
    issuer: "وزارة الموارد البشرية والتنمية الاجتماعية",
    description: "مصرح لنا بمزاولة نشاط الاستقدام وفق الأنظمة واللوائح المعمول بها.",
    icon: <ShieldCheck className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
  {
    id: "chamber",
    title: "عضوية الغرفة التجارية",
    issuer: "غرفة الرياض",
    description: "التزام مهني وتجاري موثق.",
    icon: <FileCheck2 className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
  {
    id: "iso",
    title: "إدارة جودة داخلية",
    issuer: "سياسات وإجراءات خدمة العملاء",
    description: "عمليات قياسية لمتابعة الطلبات وضمان الجودة.",
    icon: <PrinterCheck className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
];

const defaultPartners: Partnership[] = [
  {
    id: "mhrsd",
    name: "وزارة الموارد البشرية والتنمية الاجتماعية",
    role: "تنظيم وترخيص",
    description: "التوافق الكامل مع متطلبات منصة مساند وأنظمة الاستقدام.",
    icon: <Shield className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
  {
    id: "gov",
    name: "الجهات الحكومية ذات العلاقة",
    role: "تكامل وتحقق",
    description: "التكامل مع منصات حكومية لتحديث البيانات والتحقق.",
    icon: <IdCardLanyard className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
];

const defaultTeamCreds: TeamCredential[] = [
  {
    id: "consultants",
    title: "مستشارو استقدام معتمدون",
    authority: "خبرة سوقية وإجرائية",
    detail: "فهم عميق لأنظمة العمل وإجراءات إصدار التأشيرات والعقود.",
    icon: <Briefcase className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
  {
    id: "compliance",
    title: "التزام قانوني وأمني",
    authority: "سياسات تدقيق داخلية",
    detail: "تدقيق دوري للعقود، حفظ السجلات، وحماية بيانات العملاء.",
    icon: <ShieldCheck className="h-5 w-5 text-[--primary]" aria-hidden="true" />,
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "أبو سعود",
    role: "عميل أفراد - الرياض",
    quote:
      "تجربة سلسة وشفافية كاملة في المدد والتكاليف. تم توفير عاملة منزلية مناسبة خلال وقت قياسي.",
    rating: 5,
  },
  {
    id: "t2",
    name: "أم ريان",
    role: "عميلة أفراد - شمال الرياض",
    quote: "خدمة ما بعد البيع ممتازة ومتابعة مستمرة حتى بعد الوصول.",
    rating: 5,
  },
];

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div
      className="flex min-w-0 flex-col gap-2 rounded-xl border bg-[--card] p-4 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md"
      role="group"
      aria-label={stat.ariaLabel || stat.label}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--secondary]">
            {stat.icon}
          </div>
          <span className="text-sm text-[--muted-foreground]">{stat.label}</span>
        </div>
      </div>
      <div className="text-2xl font-semibold tracking-tight text-[--foreground]">{stat.value}</div>
    </div>
  );
}

function BadgeItem({
  title,
  subtitle,
  description,
  icon,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 gap-3 rounded-xl border bg-[--card] p-4">
      <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[--secondary]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="text-base font-semibold text-[--foreground]">{title}</h3>
          {subtitle ? <span className="text-xs text-[--muted-foreground]">• {subtitle}</span> : null}
        </div>
        {description ? (
          <p className="mt-1 text-sm leading-6 text-[--foreground] break-words">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = React.useMemo(
    () =>
      t.name
        .split(" ")
        .slice(0, 2)
        .map((p) => p[0])
        .join(""),
    [t.name]
  );

  return (
    <figure className="rounded-xl border bg-[--card] p-4 shadow-sm">
      <figcaption className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[--secondary] text-sm font-semibold text-[--foreground]">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="block truncate text-sm font-medium text-[--foreground]">{t.name}</span>
            {t.rating && t.rating >= 5 ? (
              <BadgeCheck className="h-4 w-4 text-[--primary]" aria-label="عميل موثّق" />
            ) : null}
          </div>
          {t.role ? <span className="block text-xs text-[--muted-foreground]">{t.role}</span> : null}
        </div>
      </figcaption>
      <blockquote className="text-sm leading-7 text-[--foreground]">“{t.quote}”</blockquote>
    </figure>
  );
}

export default function AboutSection({
  className,
  style,
  heading = "من نحن",
  subheading = "مكتب مصادر لإستقدام العمالة المنزلية - الرياض",
  missionTitle = "رسالتنا",
  missionBody = "نسعى لتقديم حلول استقدام موثوقة، متوافقة مع الأنظمة، وبمعايير جودة عالية، لضمان راحة عملائنا وتلبية احتياجاتهم بفعالية واحترام.",
  stats = defaultStats,
  certifications = defaultCerts,
  partnerships = defaultPartners,
  teamCredentials = defaultTeamCreds,
  testimonials = defaultTestimonials,
  layout = "full",
}: AboutSectionProps) {
  const isCompact = layout === "compact";

  return (
    <section
      dir="rtl"
      className={cn(
        "w-full bg-[--background] text-[--foreground]",
        isCompact ? "py-6" : "py-10",
        className
      )}
      style={style}
      aria-labelledby="about-heading"
    >
      <div className={cn("w-full max-w-full", isCompact ? "" : "")}>
        <div className={cn("rounded-2xl border bg-[--card] p-5 sm:p-7 md:p-10")}>
          <header className="mb-6 sm:mb-8">
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-[--secondary] px-3 py-1 text-xs font-medium text-[--sidebar-foreground]">
                <ShieldCheck className="h-4 w-4 text-[--primary]" aria-hidden="true" />
                موثوقية وامتثال قانوني
              </span>
              <h2
                id="about-heading"
                className="text-xl font-bold leading-tight tracking-tight text-[--foreground] sm:text-2xl md:text-3xl"
              >
                {heading}
              </h2>
              <p className="text-sm text-[--muted-foreground] sm:text-base">{subheading}</p>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* Mission and Overview */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <div className="rounded-xl border bg-[--card] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[--foreground]">{missionTitle}</h3>
                  <p className="text-base leading-8 text-[--foreground] break-words">{missionBody}</p>
                  <ul className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-[--primary]" aria-hidden="true" />
                      <span className="text-[--foreground]">التزام كامل بأنظمة منصة مساند ولوائح الاستقدام</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck2 className="mt-0.5 h-4 w-4 text-[--primary]" aria-hidden="true" />
                      <span className="text-[--foreground]">عقود واضحة ومواعيد تسليم محددة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PackageCheck className="mt-0.5 h-4 w-4 text-[--primary]" aria-hidden="true" />
                      <span className="text-[--foreground]">مطابقة دقيقة للمرشحين لاحتياجات الأسرة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-[--primary]" aria-hidden="true" />
                      <span className="text-[--foreground]">دعم ما بعد الوصول وضمانات الخدمة</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((s) => (
                    <StatCard key={s.id} stat={s} />
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Licenses */}
            <section aria-label="الشهادات والتراخيص" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <BadgeItem
                  key={c.id}
                  title={c.title}
                  subtitle={c.issuer}
                  description={c.description}
                  icon={c.icon}
                />
              ))}
            </section>

            {/* Partnerships */}
            <section aria-label="شراكات واعتمادات" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {partnerships.map((p) => (
                <BadgeItem
                  key={p.id}
                  title={p.name}
                  subtitle={p.role}
                  description={p.description}
                  icon={p.icon}
                />
              ))}
            </section>

            {/* Team Credentials */}
            <section aria-label="اعتمادات الفريق" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {teamCredentials.map((t) => (
                <BadgeItem
                  key={t.id}
                  title={t.title}
                  subtitle={t.authority}
                  description={t.detail}
                  icon={t.icon}
                />
              ))}
            </section>

            {/* Testimonials */}
            {testimonials && testimonials.length > 0 ? (
              <section aria-label="آراء العملاء" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {testimonials.map((t) => (
                  <TestimonialCard key={t.id} t={t} />
                ))}
              </section>
            ) : null}

            {/* Trust badges row */}
            <div className="flex flex-wrap items-center gap-2 rounded-xl border bg-[--card] p-4">
              <span className="text-sm font-medium text-[--foreground]">ضمانات وثقة:</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[--secondary] px-3 py-1 text-xs text-[--sidebar-foreground]">
                <ShieldCheck className="h-4 w-4 text-[--primary]" aria-hidden="true" />
                امتثال مساند
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[--secondary] px-3 py-1 text-xs text-[--sidebar-foreground]">
                <FileCheck2 className="h-4 w-4 text-[--primary]" aria-hidden="true" />
                عقود واضحة
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[--secondary] px-3 py-1 text-xs text-[--sidebar-foreground]">
                <Shield className="h-4 w-4 text-[--primary]" aria-hidden="true" />
                حماية بيانات
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[--secondary] px-3 py-1 text-xs text-[--sidebar-foreground]">
                <BadgeCheck className="h-4 w-4 text-[--primary]" aria-hidden="true" />
                خدمة ما بعد الوصول
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}