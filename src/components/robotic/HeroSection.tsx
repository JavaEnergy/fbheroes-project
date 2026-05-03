import { RoboIcon } from "@/svg";
import styled from "styled-components";
import LinkButton from "../shared/LinkButton";
import LearnMoreModal from "./LearnMoreModal";

interface Props {
  badge: string;
  description: string;
  image: string;
  title: string;
  dict: any;
}

export default function HeroSection(props: Props) {
  const titles = props.title.split(" ");
  return (
    <HeroContainer>
      <HeroLeft>
        <Badge>{props.badge}</Badge>
        <HeroTitle>
          {titles[0]}
          <br />
          <em style={{ color: "#0F5238" }}>{titles.slice(1).join(" ")}</em>
        </HeroTitle>
        <HeroDescription>{props.description}</HeroDescription>
        <Btns>
          <LinkButton
            label={props.dict.contactBtn}
            url={"/contact"}
            color={"#fff"}
            bgcolor={"linear-gradient(135deg, #1a5c40, #2d6a4f)"}
          />
          <LearnMoreModal label={props.dict.learnMoreBtn} dict={props.dict.modal} />
        </Btns>
      </HeroLeft>
      <HeroRight>
        <ImageWrapper>
          <HeroImage src={props.image} alt="Hero Image" />
        </ImageWrapper>
        <ImageTitle>
          <Wrapper>
            <RoboIcon />
            98 %
          </Wrapper>
          {props.dict.statsText}
        </ImageTitle>
      </HeroRight>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 32px 128px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 48px 24px 80px;
    gap: 40px;
  }
`;

const HeroLeft = styled.div`
  z-index: 10;
`;

const HeroRight = styled.div`
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-top: 24px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 52px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const HeroDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.625;
  font-style: italic;
  max-width: 512px;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 36px;
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImageTitle = styled.div`
  background-color: #f4f4f2;
  border-radius: 16px;
  padding: 32px;
  max-width: 320px;
  position: absolute;
  bottom: -32px;
  left: -32px;
  font-size: 14px;
  box-shadow: 0 20px 40px -8px rgba(0, 0, 0, 0.18);

  @media (max-width: 1024px) {
    position: static;
    margin-top: 16px;
    max-width: 100%;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  color: #0f5238;
  padding: 6px 16px;
  background-color: #92f7c3;
  border-radius: 9999px;
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;
