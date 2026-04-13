import { getDictionary } from "@/lib/get-dictionary";
import { getRoboticPage } from "../../../../sanity/sanity-utils";
import {
  AdviseSection,
  Differentiation,
  ExpertiseSection,
  HeroSection,
  Overview,
} from "@/components/robotic";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function RoboticGastronomy({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getRoboticPage(locale);
  console.log("Robotic Gastronomy Page Data:", data.expertiseReferences);
  return (
    <>
      <HeroSection {...data.hero} dict={dict.roboticPage.hero} />
      <Differentiation dict={dict.roboticPage.comparison} />
      <Overview
        title={data.definitionCards.title}
        description={data.definitionCards.description}
        cards={data.definitionCards.cards}
      />
      <AdviseSection dict={dict.roboticPage.suitability} />
      <ExpertiseSection
        title={data.expertiseReferences.title}
        cards={data.expertiseReferences.cards}
      />
    </>
  );
}
