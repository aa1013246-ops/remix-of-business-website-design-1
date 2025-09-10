"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldCheck, PhoneCall, MonitorSmartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface HeroStat {
  id: string
  icon?: "shield" | "phone" | "device"
  label: string
  description?: string
}

interface HeroSectionProps {
  className?: string
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaTel?: string
  stats?: HeroStat[]
}

const iconMap = {
  shield: ShieldCheck,
  phone: PhoneCall,
  device: MonitorSmartphone,
}

export default function HeroSection({
  className,
  title = "خدمات استقدام موثوقة للعمالة المنزلية",
  subtitle = "نوفّر في مكتب مصادر لإستقدام العمالة المنزلية كفاءات مختارة بعناية، مع إجراءات موثوقة وسريعة، ودعم كامل حتى مباشرة العمل. خبرتنا تمتد لسنوات في تلبية احتياجات الأسر في الرياض والمملكة.",
  primaryCtaLabel = "طلب استشارة",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "اتصل بنا الآن",
  secondaryCtaTel = "+966555555555",
  stats = [
    { id: "exp", icon: "shield", label: "أكثر من 10 سنوات خبرة" },
    { id: "licensed", icon: "shield", label: "منشأة مرخّصة ومعتمدة" },
    { id: "support", icon: "phone", label: "دعم واستجابة سريعة" },
  ],
}: HeroSectionProps) {
  return (
    <section
      dir="rtl"
      aria-label="قسم تعريفي عن مكتب مصادر"
      className={cn(
        "relative w-full bg-background",
        // internal spacing only; parent controls outer layout
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-[--border]">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-32 end-1/4 size-[36rem] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-accent) 0%, transparent 70%)",
            }}
          />
          <div className="absolute -bottom-40 start-1/4 size-[40rem] rounded-full blur-[72px] opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-chart-2) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,81,68,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.2))]" />
        </div>

        <div className="relative z-10 px-6 py-14 sm:py-18 md:py-22 lg:py-24">
          <div className="mx-auto w-full max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3.5 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-[--border]">
              <span className="inline-block size-1.5 rounded-full bg-[--primary]" />
              مكتب مصادر لإستقدام العمالة المنزلية — الرياض
            </div>

            <h1 className="mt-4 break-words font-heading text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              {primaryCtaHref ? (
                <Button asChild size="lg" className="bg-[--primary] text-[--primary-foreground] hover:opacity-95 focus-visible:ring-[--ring]">
                  <Link href={primaryCtaHref} aria-label={primaryCtaLabel}>
                    {primaryCtaLabel}
                  </Link>
                </Button>
              ) : (
                <Button size="lg" className="bg-[--primary] text-[--primary-foreground] hover:opacity-95 focus-visible:ring-[--ring]" aria-label={primaryCtaLabel}>
                  {primaryCtaLabel}
                </Button>
              )}

              {secondaryCtaTel ? (
                <Button asChild variant="outline" size="lg" className="bg-card text-foreground hover:bg-secondary focus-visible:ring-[--ring]">
                  <a href={`tel:${secondaryCtaTel}`} aria-label={`${secondaryCtaLabel} على الرقم ${secondaryCtaTel}`}>
                    <PhoneCall className="ms-1 h-4 w-4" aria-hidden="true" />
                    <span className="me-1">{secondaryCtaLabel}</span>
                    <span className="text-muted-foreground ltr:ms-2 rtl:me-2 hidden sm:inline">{secondaryCtaTel}</span>
                  </a>
                </Button>
              ) : null}
            </div>

            {/* Trust indicators */}
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon =
                  item.icon ? iconMap[item.icon] ?? ShieldCheck : ShieldCheck
                return (
                  <li
                    key={item.id}
                    className="group relative flex items-start gap-3 rounded-lg border border-[--border] bg-card/90 px-4 py-3 text-start shadow-sm transition-colors hover:bg-secondary/80 focus-within:bg-secondary/80"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-foreground ring-1 ring-inset ring-[--border]">
                      <Icon className="h-5 w-5 text-[--primary]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-6">
                        <span className="truncate">{item.label}</span>
                      </p>
                      {item.description ? (
                        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>

            {/* Small device hint */}
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <MonitorSmartphone className="h-4 w-4" aria-hidden="true" />
              واجهة متوافقة مع الجوال — سهولة في الطلب والمتابعة
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}