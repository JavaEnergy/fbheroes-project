import { getDictionary } from "@/lib/get-dictionary";
import { getRoboticPage } from "../../../../sanity/sanity-utils";
import {
  ActionSection,
  AdviseSection,
  Differentiation,
  ExpertiseSection,
  HeroSection,
  Overview,
  // Partner,
  PodcastSection,
  WaysSection,
} from "@/components/robotic";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function RoboticGastronomy({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getRoboticPage(locale);
  return (
    <>
      <HeroSection {...data.hero} dict={dict.roboticPage.hero} />
      <WaysSection dict={dict.roboticPage.waysSection} />
      <Overview
        title={data.definitionCards.title}
        description={dict.roboticPage.overview.description}
        cards={data.definitionCards.cards.map((card: { title: string; icon: string; description: string }, i: number) => ({
          ...card,
          description: dict.roboticPage.overview.cardDescriptions[i] ?? card.description,
        }))}
        titleHighlight={locale === "de" ? "Systemgastronomie" : "Systemized Hospitality"}
      />
      <ExpertiseSection
        title={data.expertiseReferences.title}
        cards={data.expertiseReferences.cards}
        locale={locale}
      />
      {/* <Partner
        image={data.implementationPartner.circleImage}
        dict={dict.roboticPage.partner}
      /> */}
      <PodcastSection dict={dict.roboticPage.mediaSection} />
      <ActionSection dict={dict.roboticPage.gastroCheck} />
    </>
  );
}
