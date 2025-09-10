"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  label: string;
  href: string;
};

interface HeaderProps {
  className?: string;
  phone?: string;
  navItems?: NavItem[];
  currentPath?: string | null;
  onNavigate?: (href: string) => void;
  logo?: React.ReactNode;
  sticky?: boolean;
}

const defaultNav: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

export default function Header({
  className,
  phone = "920000000",
  navItems = defaultNav,
  currentPath = null,
  onNavigate,
  logo,
  sticky = true,
}: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handleNav = (href: string) => {
    onNavigate?.(href);
    setOpen(false);
  };

  return (
    <header
      dir="rtl"
      className={cn(
        "w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85 border-b border-border",
        sticky ? "sticky top-0 z-50" : "",
        className
      )}
      aria-label="رأس الصفحة"
    >
      <div className="container">
        <div className="grid grid-cols-3 items-center gap-2 py-3">
          {/* Right: Branding */}
          <div className="flex items-center justify-end gap-3 min-w-0">
            {logo ? (
              <div className="min-w-0">{logo}</div>
            ) : (
              <Link
                href="/"
                className="group inline-flex items-center gap-3 min-w-0"
                aria-label="الانتقال إلى الصفحة الرئيسية"
              >
                <div className="relative h-9 w-9 rounded-lg bg-primary/10 ring-1 ring-border grid place-items-center transition-colors group-hover:bg-primary/15">
                  <span className="h-3 w-3 rounded-[6px] bg-primary block" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-base sm:text-lg font-bold text-foreground truncate">
                    مكتب مصادر
                  </span>
                  <span className="text-xs text-muted-foreground truncate">
                    لإستقدام العمالة المنزلية
                  </span>
                </div>
              </Link>
            )}
          </div>

          {/* Center: Navigation */}
          <nav
            className="hidden md:flex items-center justify-center"
            aria-label="التنقل الرئيسي"
          >
            <ul className="flex items-center gap-2 sm:gap-4 md:gap-6">
              {navItems.map((item) => {
                const isActive =
                  currentPath != null
                    ? currentPath === item.href
                    : false;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => handleNav(item.href)}
                      className={cn(
                        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        "text-foreground/85 hover:text-foreground",
                        "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActive
                          ? "text-foreground bg-accent"
                          : "bg-transparent"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Left: Contact / Mobile Menu */}
          <div className="flex items-center justify-start gap-2">
            {/* Contact (desktop) */}
            <div className="hidden md:flex">
              <Button
                asChild
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={`tel:${phone}`} aria-label={`الاتصال على ${phone}`}>
                  اتصل الآن: {formatPhone(phone)}
                </a>
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10"
                    aria-label="فتح القائمة"
                  >
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[88vw] sm:w-[380px]" aria-label="قائمة الجوال">
                  <SheetHeader className="text-right">
                    <SheetTitle className="font-heading text-base">
                      القائمة
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-4 flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isActive =
                        currentPath != null
                          ? currentPath === item.href
                          : false;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => handleNav(item.href)}
                          className={cn(
                            "w-full rounded-md px-3 py-3 text-base transition-colors",
                            "text-foreground/85 hover:text-foreground hover:bg-accent",
                            isActive ? "bg-accent text-foreground" : "bg-transparent",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  <Separator className="my-4" />
                  <div className="flex flex-col items-stretch gap-2">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={`tel:${phone}`} aria-label={`الاتصال على ${phone}`}>
                        اتصل الآن: {formatPhone(phone)}
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function formatPhone(input: string) {
  const digits = input.replace(/[^\d+]/g, "");
  // Simple grouping for KSA numbers like 9200 XXX XX or 05X XXX XXXX
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10 && digits.startsWith("05")) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  if (digits.length === 9 && digits.startsWith("920")) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  return digits;
}