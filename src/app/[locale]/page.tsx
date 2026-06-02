import HeroSection, {
  ContactForm,
  DasProblemSection,
  DerAnsatzSection,
  DerUnterschiedSection,
  SoArbeitenWirSection,
  DreiWegeHomeSection,
  ReferenzenSection,
  WarumSection,
  SchnellcheckSection,
} from "@/components/main";
import { getHomePage } from "../../../sanity/sanity-utils";
import { getDictionary } from "@/lib/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getHomePage(locale);
  if (!data) return <div>Loading or No data found...</div>;
  return (
    <>
      <HeroSection {...data.hero} dict={dict} stats={data.stats[0]} />
      <DasProblemSection dict={dict.home.dasProblem} />
      <DerAnsatzSection dict={dict.home.derAnsatz} />
      <DerUnterschiedSection dict={dict.home.derUnterschied} />
      <SoArbeitenWirSection dict={dict.home.soArbeitenWir} locale={locale} />
      <DreiWegeHomeSection dict={dict.home.dreiWege} />
      <ReferenzenSection dict={dict.home.referenzen} />
      <WarumSection dict={dict.home.warum} />
      <SchnellcheckSection dict={dict.home.schnellcheck} locale={locale} />
      <ContactForm dict={dict} />
    </>
  );
}
