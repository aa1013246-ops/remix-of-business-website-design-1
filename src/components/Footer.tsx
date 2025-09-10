"use client";

import React from "react";
import Link from "next/link";
import { Copyright, Linkedin, Contact, IdCard, MonitorSmartphone } from "lucide-react";

export interface FooterProps {
  className?: string;
  companyName?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: {
    weekdays?: string;
    weekend?: string;
  };
  licenseNumbers?: {
    commercial?: string;
    recruitment?: string;
  };
  quickLinks?: { label: string; href: string }[];
  showSocial?: boolean;
  linkedinUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  className,
  companyName = "مكتب مصادر لإستقدام العمالة المنزلية",
  description = "نقدم حلولاً مهنية وموثوقة لاستقدام العمالة المنزلية بما يحقق أعلى معايير الجودة والالتزام في المملكة العربية السعودية.",
  address = "الرياض، المملكة العربية السعودية",
  phone = "+966 5 5555 5555",
  email = "info@masader-sa.com",
  workingHours = {
    weekdays: "الأحد - الخميس: 9:00 ص - 6:00 م",
    weekend: "الجمعة - السبت: إجازة",
  },
  licenseNumbers = {
    commercial: "سجل تجاري: 1010XXXXX",
    recruitment: "ترخيص استقدام: 12XXXX",
  },
  quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "خدماتنا", href: "/services" },
    { label: "من نحن", href: "/about" },
    { label: "اتصل بنا", href: "/contact" },
    { label: "الشروط والأحكام", href: "/terms" },
  ],
  showSocial = true,
  linkedinUrl,
}) => {
  return (
    <footer
      dir="rtl"
      className={[
        "w-full bg-secondary text-foreground border-t",
        "transition-colors",
        className || "",
      ].join(" ").trim()}
      aria-labelledby="site-footer-heading"
    >
      <div className="container w-full max-w-full">
        <div className="py-10 md:py-12">
          <h2 id="site-footer-heading" className="sr-only">
            تذييل الموقع
          </h2>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-12">
            {/* Company block */}
            <div className="md:col-span-5">
              <div className="space-y-3">
                <p className="font-heading text-xl sm:text-2xl leading-tight">{companyName}</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {showSocial && (
                <div className="mt-6 flex items-center gap-4">
                  {linkedinUrl ? (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="لينكدإن"
                      className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="size-5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              )}
            </div>

            {/* Quick links */}
            <nav className="md:col-span-3" aria-label="روابط سريعة">
              <p className="mb-4 font-heading text-base sm:text-lg">روابط سريعة</p>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href} className="min-w-0">
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-sm sm:text-base text-foreground hover:text-primary transition-colors truncate"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-foreground hover:text-primary transition-colors truncate"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="md:col-span-4">
              <p className="mb-4 inline-flex items-center gap-2 font-heading text-base sm:text-lg">
                <Contact className="size-4 text-primary" aria-hidden="true" />
                تواصل معنا
              </p>
              <address className="not-italic space-y-3 text-sm sm:text-base">
                <p className="text-foreground break-words">{address}</p>
                <p className="flex items-center gap-2">
                  <MonitorSmartphone className="size-4 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </p>
                <p className="min-w-0">
                  <a
                    href={`mailto:${email}`}
                    className="text-foreground hover:text-primary transition-colors break-words"
                  >
                    {email}
                  </a>
                </p>
              </address>

              <div className="mt-5">
                <p className="mb-2 font-heading text-base sm:text-lg">ساعات العمل</p>
                <ul className="text-sm sm:text-base text-foreground space-y-1">
                  {workingHours.weekdays ? <li className="break-words">{workingHours.weekdays}</li> : null}
                  {workingHours.weekend ? <li className="break-words">{workingHours.weekend}</li> : null}
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div className="md:col-span-12">
              <div className="mt-2 pt-6 border-t">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <IdCard className="size-4 text-primary" aria-hidden="true" />
                      <span className="break-words">
                        {licenseNumbers.commercial}
                        {licenseNumbers.recruitment ? ` • ${licenseNumbers.recruitment}` : ""}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      باستخدامك لهذا الموقع فإنك توافق على{" "}
                      <Link href="/terms" className="underline hover:text-primary transition-colors">
                        الشروط والأحكام
                      </Link>
                      .
                    </p>
                  </div>

                  <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Copyright className="size-4" aria-hidden="true" />
                    <span className="min-w-0">
                      {new Date().getFullYear()} © جميع الحقوق محفوظة لـ {companyName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;