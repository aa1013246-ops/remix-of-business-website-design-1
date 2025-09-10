"use client"

import React from "react"
import {
  House,
  HandPlatter,
  Grid3x2,
  PanelsLeftBottom,
  LayoutPanelTop,
  Grid2x2Check,
} from "lucide-react"

type Service = {
  id: string
  title: string
  description: string
  benefits: string[]
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface ServicesSectionProps {
  className?: string
  heading?: string
  subheading?: string
}

const services: Service[] = [
  {
    id: "housekeepers",
    title: "عامــلات منــازل",
    description:
      "توفير عاملات منزل مدربات على الأعمال اليومية وإدارة شؤون المنزل بأسلوب احترافي.",
    benefits: [
      "خبرة عملية موثقة",
      "انضباط والتزام بالمواعيد",
      "مرونة في المهام اليومية",
    ],
    Icon: House,
  },
  {
    id: "nannies",
    title: "مربيات أطفال",
    description:
      "رعاية آمنة ومهنية للأطفال مع اهتمام بالتربية السليمة والأنشطة التعليمية.",
    benefits: [
      "رعاية شاملة ومتابعة يومية",
      "خبرة مع مختلف الأعمار",
      "أساليب تواصل تربوية",
    ],
    Icon: Grid3x2,
  },
  {
    id: "elderly-care",
    title: "رعاية كبار السن",
    description:
      "مقدمو رعاية ذوو خبرة لتقديم الدعم الصحي واليومي مع مراعاة الخصوصية والاحترام.",
    benefits: [
      "معرفة بأساسيات الرعاية الصحية",
      "تعامل إنساني وصبور",
      "متابعة الأدوية والمواعيد",
    ],
    Icon: PanelsLeftBottom,
  },
  {
    id: "cooks",
    title: "طهاة منزليون",
    description:
      "طهاة متخصصون بإعداد وجبات متنوعة وصحية تلائم الأذواق والأنظمة الغذائية.",
    benefits: [
      "إعداد قوائم طعام متنوعة",
      "معايير نظافة عالية",
      "خبرة في المأكولات المحلية والعالمية",
    ],
    Icon: HandPlatter,
  },
  {
    id: "drivers",
    title: "سائقيـن",
    description:
      "سائقون محترفون يتمتعون بالالتزام ومعرفة جيدة بالطرق داخل مدينة الرياض وخارجها.",
    benefits: [
      "التزام بقواعد السلامة",
      "معرفة بالمناطق والطرق",
      "انضباط ودقة في المواعيد",
    ],
    Icon: LayoutPanelTop,
  },
]

const infoItems = [
  {
    id: "visa",
    title: "إجراءات التأشيرات",
    text:
      "نتولى إدارة جميع معاملات التأشيرات والتفويض الإلكتروني بدقة وسرعة وفق اللوائح المعتمدة.",
  },
  {
    id: "training",
    title: "برامج تدريب",
    text:
      "اختبارات ومراجعات قبل الوصول، مع برامج تعريفية لضمان جاهزية العمل من اليوم الأول.",
  },
  {
    id: "guarantee",
    title: "سياسة ضمان",
    text:
      "ضمان استبدال خلال فترة محددة وشروط واضحة للعقد لضمان راحة وحقوق العميل.",
  },
]

export default function ServicesSection({
  className,
  heading = "خدمات الاستقدام المنزلية",
  subheading = "نقدّم حلول استقدام احترافية تلائم احتياجات الأسرة السعودية بمعايير عالية من الجودة والالتزام.",
}: ServicesSectionProps) {
  return (
    <section
      dir="rtl"
      aria-labelledby="services-heading"
      className={["w-full bg-background", className].filter(Boolean).join(" ")}
    >
      <div className="w-full max-w-full">
        <div className="mb-8 sm:mb-10">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs sm:text-sm font-medium text-secondary-foreground">
            خدماتنا
          </span>
          <h2
            id="services-heading"
            className="mt-3 text-right font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-2 text-right text-sm sm:text-base text-muted-foreground">
            {subheading}
          </p>
        </div>

        <div
          role="list"
          aria-label="قائمة الخدمات"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          {services.map((svc) => (
            <article
              key={svc.id}
              role="listitem"
              aria-labelledby={`${svc.id}-title`}
              className="group relative isolate rounded-[var(--radius)] bg-card border shadow-sm hover:shadow-md transition-shadow duration-300 focus-within:shadow-md"
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 sm:size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                      <svc.Icon
                        aria-hidden="true"
                        className="size-5 sm:size-6"
                        strokeWidth={1.75}
                      />
                    </span>
                    <h3
                      id={`${svc.id}-title`}
                      className="text-right font-heading text-base sm:text-lg md:text-xl leading-snug"
                    >
                      {svc.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-right text-sm sm:text-[15px] text-muted-foreground break-words">
                  {svc.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {svc.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-right">
                      <Grid2x2Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 text-primary"
                        strokeWidth={2}
                      />
                      <span className="min-w-0 text-sm sm:text-[15px] leading-6">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute inset-0 rounded-[var(--radius)] ring-0 ring-transparent group-hover:ring-1 group-focus:ring-1 group-focus:ring-[var(--ring)] group-hover:ring-[var(--ring)] transition-all" />
              </div>
            </article>
          ))}
        </div>

        <div
          aria-label="معلومات إضافية"
          className="mt-8 sm:mt-10 rounded-[var(--radius)] border bg-card p-4 sm:p-6"
        >
          <div className="mb-3 sm:mb-4">
            <h3 className="text-right font-heading text-lg sm:text-xl">
              معلومات إضافية
            </h3>
            <p className="mt-1 text-right text-sm text-muted-foreground">
              نلتزم بتقديم تجربة سلسة وآمنة منذ تقديم الطلب وحتى مباشرة العمل.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {infoItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 rounded-md bg-muted/50 p-3 sm:p-4"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-md bg-secondary text-primary shrink-0">
                  <Grid2x2Check
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={2}
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-right font-medium text-sm sm:text-base">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-right text-xs sm:text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}