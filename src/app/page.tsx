import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  const phone = "920012345";
  const companyName = "مكتب مصادر لإستقدام العمالة المنزلية";
  const address =
    "الرياض، حي الياسمين، طريق أنس بن مالك، مكتب مصادر لإستقدام العمالة المنزلية";

  return (
    <div dir="rtl" className="min-h-dvh flex flex-col bg-background text-foreground">
      <Header phone={phone} sticky />

      <main className="flex-1">
        <section className="container py-8 sm:py-10 md:py-12">
          <HeroSection
            primaryCtaLabel="طلب استشارة"
            primaryCtaHref="/contact"
            secondaryCtaLabel="اتصل بنا الآن"
            secondaryCtaTel="+966551234567"
            className="rounded-2xl"
          />
        </section>

        <section className="container py-8 sm:py-10 md:py-12">
          <ServicesSection />
        </section>

        <section className="container py-8 sm:py-10 md:py-12">
          <AboutSection />
        </section>

        <section className="container py-8 sm:py-10 md:py-12">
          <ContactSection
            address={address}
            phones={["+966 55 123 4567", "+966 11 234 5678"]}
            emails={["info@masader.sa", "support@masader.sa"]}
            linkedinUrl="https://www.linkedin.com/company/masader"
          />
        </section>
      </main>

      <Footer
        companyName={companyName}
        address={address}
        phone="+966 55 123 4567"
        email="info@masader.sa"
        className="mt-8"
      />
    </div>
  );
}