import { getDictionary } from "@/lib/get-dictionary";
import { getServicesPage } from "../../../../sanity/sanity-utils";
import {
  Collaboration,
  ContactSection,
  Differentiation,
  HeroSection,
  Overview,
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
      <Collaboration dict={dict.services.collaboration} />
      <Overview
        dict={dict.services.targetGroupsSection}
        cards={data.overview.cards}
      />
      <Differentiation dict={dict.services.differentiation} />
      <ContactSection dict={dict.services.ctaSection} />
    </>
  );
}
