import { getDictionary } from "@/lib/get-dictionary";
import { getServicesPage } from "../../../../sanity/sanity-utils";
import { Collaboration, HeroSection } from "@/components/services";

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
    </>
  );
}
