import { getDictionary } from "@/lib/get-dictionary";
import { getServicesPage } from "../../../../sanity/sanity-utils";
import {
  HeroSection,
  SystemcheckSection,
  HowWeWorkSection,
  Stufe1Section,
  Stufe2Section,
  Stufe3Section,
  DreiWegeSection,
  ContactSection,
} from "@/components/services";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Services({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getServicesPage(locale);
  return (
    <>
      <HeroSection {...data.hero} dict={dict.services.integration} />
      <SystemcheckSection dict={dict.services.systemcheck} locale={locale} />
      <HowWeWorkSection dict={dict.services.howWeWork} />
      <Stufe1Section dict={dict.services.stufe1} />
      <Stufe2Section dict={dict.services.stufe2} />
      <Stufe3Section dict={dict.services.stufe3} locale={locale} />
      <DreiWegeSection dict={dict.services.dreiWege} locale={locale} />
      <ContactSection dict={dict.services.ctaSection} />
    </>
  );
}
