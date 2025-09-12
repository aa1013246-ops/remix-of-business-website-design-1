import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  const phone = "920012345";
  const companyName = "مكتب مصادر لإستقدام العمالة المنزلية";
  const address =
    "الرياض، حي الياسمن، طريق أنس بن مالك، مكتب مصادر لإستقدام العمالة المنزلية";

  return (
    <div dir="rtl" className="min-h-dvh flex flex-col bg-background text-foreground">
      <Header phone={phone} sticky />

      <main className="flex-1">
        <section className="container py-8 sm:py-10 md:py-12">
          <div className="mx-auto max-w-3xl">
            <header className="mb-6">
              <p className="text-sm text-muted-foreground">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
              <h1 className="mt-2 font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                سياسة الإرجاع
              </h1>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                نحرص في {companyName} على رضا العملاء وجودة الخدمات المقدَّمة. تُوضّح هذه السياسة شروط وإجراءات الإرجاع واسترداد المبالغ (إن وُجد) بما يتوافق مع الأنظمة المعمول بها في المملكة العربية السعودية.
              </p>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">أولاً: نطاق السياسة</h2>
                <p className="text-foreground/90 leading-relaxed">
                  تنطبق هذه السياسة على الخدمات والعقود التي تُبرم مع {companyName} والمتعلقة بخدمات الاستقدام. قد تختلف أحكام الإرجاع وفق نوع الخدمة، حالة الطلب، ومرحلة التنفيذ.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">ثانياً: حالات الاستحقاق</h2>
                <ul className="list-disc pr-5 space-y-2 text-foreground/90 leading-relaxed">
                  <li>في حال تعذّر تنفيذ الخدمة لأسباب غير راجعة للعميل.</li>
                  <li>في حال الإلغاء ضمن المدد الزمنية المحددة بالعقد المبرم.</li>
                  <li>في حال وجود خلل جوهري في تقديم الخدمة لا يمكن معالجته خلال مدة معقولة.</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">قد تُطبّق رسوم إدارية أو خصومات بحسب ما يتم توضيحه في العقد.</p>
              </section>

              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">ثالثاً: الحالات غير المشمولة</h2>
                <ul className="list-disc pr-5 space-y-2 text-foreground/90 leading-relaxed">
                  <li>إتمام الخدمة واستفادة العميل منها بشكل كامل وفق العقد.</li>
                  <li>الإخلال بشروط الاستخدام أو التعليمات النظامية ذات الصلة.</li>
                  <li>طلبات خارج ما تم الاتفاق عليه أو لا يشملها نطاق الخدمة.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">رابعاً: آلية طلب الإرجاع</h2>
                <ol className="list-decimal pr-5 space-y-2 text-foreground/90 leading-relaxed">
                  <li>التواصل معنا عبر القنوات الرسمية الموضحة أدناه.</li>
                  <li>تزويدنا بمعلومات الطلب وأسباب الإرجاع والمستندات المؤيدة.</li>
                  <li>دراسة الطلب والرد خلال مدة عمل معقولة.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">خامساً: استرداد المبالغ</h2>
                <p className="text-foreground/90 leading-relaxed">
                  في حال ثبوت الاستحقاق، يتم الاسترداد إلى وسيلة الدفع الأصلية خلال 7–14 يوم عمل من تاريخ اعتماد الطلب، ما لم يُنص في العقد على غير ذلك. تظهر المدة الفعلية بحسب البنك/مزود خدمة الدفع.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">سادساً: التواصل</h2>
                <p className="text-foreground/90 leading-relaxed">
                  لأي استفسار أو لبدء طلب الإرجاع، يُرجى التواصل معنا:
                </p>
                <ul className="mt-2 space-y-1 text-foreground/90">
                  <li>العنوان: {address}</li>
                  <li>الهاتف: <a href={`tel:${phone}`} className="text-primary hover:underline">{phone}</a></li>
                  <li>البريد الإلكتروني: <a href={`mailto:info@masader.sa`} className="text-primary hover:underline">info@masader.sa</a></li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl md:text-2xl mb-3">سابعاً: أحكام عامة</h2>
                <p className="text-foreground/90 leading-relaxed">
                  تحتفظ المنشأة بحق تحديث هذه السياسة من وقت لآخر بما يحقق الامتثال للأنظمة وتطور الخدمات. يسري أي تعديل من تاريخ نشره على هذه الصفحة.
                </p>
              </section>
            </div>
          </div>
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