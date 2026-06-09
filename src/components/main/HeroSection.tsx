import styled from "styled-components";
import Link from "next/link";
import NextImage from "next/image";

interface Props {
  description: string;
  title: string;
  image: string;
  dict: any;
  stats: { label: string; number: number };
}

export default function HeroSection(props: Props) {
  const hero = props.dict.home.hero;
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroSupertitle>{hero.supertitle}</HeroSupertitle>
        <HeroTitle>{hero.title}</HeroTitle>
        <HeroDescription>{hero.description}</HeroDescription>
        <Btns>
          <CtaButton href="#contact">{hero.button}</CtaButton>
        </Btns>
      </HeroLeft>
      <HeroRight>
        <HeroImageWrapper>
          <NextImage
            src={props.image}
            alt="Hero Image"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 30vw"
            style={{ objectFit: "cover" }}
          />
        </HeroImageWrapper>
        <Stats>
          <StatsTitle>{props.stats.number}+</StatsTitle>
          <StatsLabel>{props.stats.label}</StatsLabel>
        </Stats>
      </HeroRight>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  padding: 80px 64px 128px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 128px;
  @media (max-width: 1024px) {
    padding: 32px 24px 72px;
    gap: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroLeft = styled.div`
  width: 40%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const HeroRight = styled.div`
  width: 30%;
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroSupertitle = styled.h3`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary-green);
  margin-bottom: 16px;
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
`;

const HeroDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 24px;
`;

const Btns = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: #0f5238;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background-color: #2d6a4f;
  }
`;

const HeroImageWrapper = styled.div`
  width: 70%;
  aspect-ratio: 6 / 7;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Stats = styled.div`
  background-color: #92f7c3;
  border-radius: 12px;
  padding: 32px;
  max-width: 240px;
  position: absolute;
  left: -32px;
  bottom: -32px;
  @media (max-width: 1024px) {
    position: static;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;
const StatsTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
const StatsLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
`;
