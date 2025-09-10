"use client"

import * as React from "react"
import { Phone, MapPin, Mailbox, Linkedin, MapPinned, PhoneCall } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type WorkingHour = {
  days: string
  hours: string
}

type ServiceOption = {
  value: string
  label: string
}

type ContactFormData = {
  name: string
  phone: string
  email: string
  service?: string
  message: string
}

export type ContactSectionProps = {
  className?: string
  address?: string
  mapEmbedSrc?: string
  phones?: string[]
  emails?: string[]
  workingHours?: WorkingHour[]
  services?: ServiceOption[]
  onSubmit?: (data: ContactFormData) => Promise<void> | void
  showSocial?: boolean
  linkedinUrl?: string
}

const defaultServices: ServiceOption[] = [
  { value: "housemaid", label: "استقدام عاملة منزلية" },
  { value: "driver", label: "استقدام سائق خاص" },
  { value: "nanny", label: "استقدام مربية أطفال" },
  { value: "cook", label: "استقدام طباخة منزلية" },
  { value: "other", label: "أخرى" },
]

const defaultWorkingHours: WorkingHour[] = [
  { days: "الأحد - الخميس", hours: "9:00 صباحاً - 6:00 مساءً" },
  { days: "السبت", hours: "10:00 صباحاً - 2:00 مساءً" },
  { days: "الجمعة", hours: "مغلق" },
]

export default function ContactSection({
  className,
  address = "الرياض، حي الياسمين، طريق أنس بن مالك، مكتب مصادر لإستقدام العمالة المنزلية",
  mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.688169293428!2d46.6162466!3d24.8371578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2b2e7f5fcd%3A0x2f5c1d6e8e2ae9ab!2z2YXYsdmD2LIg2KfZhNmF2YbYryDYp9mE2K_ZiNiq2YrZhtipINin2YTYp9mE2YXYp9mE2KfZgdiuINin2YTZhNin2YTZiNmE2YrYp9mE2KfYqiDYp9mE2KfYsdmK2YTYp9mE2KfYr9in2Kog2KfZhNmF2KfYp9mE2KfYqiAtIE1hc2FkZXI!5e0!3m2!1sar!2ssa!4v1735945600000!5m2!1sar!2ssa",
  phones = ["+966 55 123 4567", "+966 11 234 5678"],
  emails = ["info@masader.sa", "support@masader.sa"],
  workingHours = defaultWorkingHours,
  services = defaultServices,
  onSubmit,
  showSocial = true,
  linkedinUrl,
}: ContactSectionProps) {
  const [loading, setLoading] = React.useState(false)
  const [service, setService] = React.useState<string | undefined>(undefined)

  const nameRef = React.useRef<HTMLInputElement>(null)
  const phoneRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const messageRef = React.useRef<HTMLTextAreaElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return

    const payload: ContactFormData = {
      name: nameRef.current?.value?.trim() || "",
      phone: phoneRef.current?.value?.trim() || "",
      email: emailRef.current?.value?.trim() || "",
      service,
      message: messageRef.current?.value?.trim() || "",
    }

    if (!payload.name || !payload.phone || !payload.email || !payload.message) {
      toast.error("يرجى تعبئة جميع الحقول المطلوبة.")
      return
    }
    if (!service) {
      toast.error("يرجى اختيار نوع الخدمة.")
      return
    }

    try {
      setLoading(true)
      if (onSubmit) {
        await onSubmit(payload)
      } else {
        await new Promise((r) => setTimeout(r, 900))
      }
      toast.success("تم إرسال طلبك بنجاح. سنعاود التواصل معك قريباً.")
      e.currentTarget.reset()
      setService(undefined)
    } catch (err) {
      toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      dir="rtl"
      className={cn(
        "w-full rounded-[var(--radius)] bg-background",
        className
      )}
      aria-label="قسم التواصل"
    >
      <div className="w-full max-w-full space-y-6">
        <header className="space-y-2 text-right">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            تواصل معنا
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            يسعدنا خدمتكم والإجابة على استفساراتكم حول خدمات الاستقدام.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-right text-lg sm:text-xl">
                نموذج التواصل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="pr-0 text-right">
                      الاسم الكامل
                    </Label>
                    <Input
                      id="name"
                      ref={nameRef}
                      type="text"
                      inputMode="text"
                      placeholder="اكتب اسمك"
                      required
                      className="text-right"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="pr-0 text-right">
                      رقم الجوال
                    </Label>
                    <Input
                      id="phone"
                      ref={phoneRef}
                      type="tel"
                      inputMode="tel"
                      placeholder="05xxxxxxxx"
                      required
                      className="text-right"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="pr-0 text-right">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    ref={emailRef}
                    type="email"
                    inputMode="email"
                    placeholder="name@example.com"
                    required
                    className="text-right"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="pr-0 text-right">نوع الخدمة</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="justify-between text-right">
                      <SelectValue placeholder="اختر نوع الخدمة" />
                    </SelectTrigger>
                    <SelectContent align="end" className="text-right">
                      {services.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="pr-0 text-right">
                    رسالتك
                  </Label>
                  <Textarea
                    id="message"
                    ref={messageRef}
                    placeholder="اكتب تفاصيل طلبك أو استفسارك..."
                    rows={5}
                    required
                    className="resize-y text-right"
                    aria-required="true"
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-muted-foreground">
                    جميع الحقول مطلوبة
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="min-w-32 bg-primary text-primary-foreground hover:opacity-90"
                  >
                    {loading ? "جارٍ الإرسال..." : "إرسال الطلب"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="flex min-w-0 flex-col gap-6">
            <Card className="bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between gap-2 text-right text-lg sm:text-xl">
                  <span>بيانات التواصل</span>
                  <PhoneCall className="size-5 text-primary" aria-hidden="true" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1 text-right">
                  <div className="flex items-start justify-end gap-2">
                    <span className="min-w-0 break-words text-sm sm:text-base">
                      {address}
                    </span>
                    <MapPinned className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  </div>
                  <div className="mt-2 rounded-md bg-accent/60 p-3">
                    <dl className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-muted-foreground">ساعات العمل</dt>
                        <dd className="min-w-0 text-right">
                          <ul className="space-y-1">
                            {workingHours.map((wh, idx) => (
                              <li key={idx} className="min-w-0 break-words">
                                {wh.days}: {wh.hours}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <dt className="mt-1 text-muted-foreground">أرقام التواصل</dt>
                        <dd className="min-w-0 space-y-1 text-right">
                          {phones.map((p) => (
                            <div key={p} className="flex items-center justify-end gap-2">
                              <a
                                href={`tel:${p.replace(/\s+/g, "")}`}
                                className="text-foreground transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              >
                                {p}
                              </a>
                              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </dd>
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <dt className="mt-1 text-muted-foreground">البريد الإلكتروني</dt>
                        <dd className="min-w-0 space-y-1 text-right">
                          {emails.map((m) => (
                            <div key={m} className="flex items-center justify-end gap-2">
                              <a
                                href={`mailto:${m}`}
                                className="break-words text-foreground transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              >
                                {m}
                              </a>
                              <Mailbox className="size-4 shrink-0 text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {showSocial && (linkedinUrl ? (
                  <div className="flex items-center justify-end gap-2">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="لينكدإن"
                      className="group inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1.5 text-sm text-foreground transition hover:bg-secondary/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <span className="ml-1">لينكدإن</span>
                      <Linkedin className="size-4 text-primary transition group-hover:scale-110" aria-hidden="true" />
                    </a>
                  </div>
                ) : null)}
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between gap-2 text-right text-lg sm:text-xl">
                  <span>موقعنا على الخريطة</span>
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                </CardTitle>
              </CardHeader>
              <CardContent className="min-w-0">
                <div className="relative overflow-hidden rounded-lg border">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/0" aria-hidden="true" />
                  <div className="aspect-video w-full">
                    <iframe
                      title="موقع مكتب مصادر على خريطة جوجل"
                      src={mapEmbedSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 border-t bg-muted/30 p-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-primary" aria-hidden="true" />
                      <span className="truncate">الرياض</span>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      فتح في الخرائط
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-end gap-3 pt-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            <span className="min-w-0 break-words">{address}</span>
          </div>
        </footer>
      </div>
    </section>
  )
}