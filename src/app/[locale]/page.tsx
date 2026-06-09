import HeroSection, {
  DasProblemSection,
  DerAnsatzSection,
  DerUnterschiedSection,
  SoArbeitenWirSection,
  DreiWegeHomeSection,
  ReferenzenSection,
  WarumSection,
  SchnellcheckSection,
  CtaSection,
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
      <CtaSection
        locale={locale}
        title={locale === "de" ? "Bereit, Ihr F&B unabhängig zu machen?" : "Ready to make your F&B independent?"}
        description={locale === "de" ? "Starten Sie mit dem F&B-Systemcheck. In einer Analyse klären wir Ihren Status quo, den passenden Weg und was er wirtschaftlich bringt." : "Start with the F&B System Check. In one analysis we clarify your status quo, the right path, and what it means economically."}
        button={dict.home.soArbeitenWir.button}
      />
    </>
  );
}
