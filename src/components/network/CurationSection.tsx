"use client";

import styled from "styled-components";
import LinkButton from "../shared/LinkButton";

interface Card {
  title: string;
  description: string;
  image: string;
}

interface Props {
  dict: any;
  title: string;
  description: string;
  cards: Card[];
}

export default function CurationSection({
  dict,
  title,
  description,
  cards,
}: Props) {
  return (
    <SectionElement>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>

      <GridWrapper>
        {cards?.map((card, index) => (
          <ExpertCard key={index}>
            <IconWrapper>
              <img src={card.image} alt={card.title} />
            </IconWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </ExpertCard>
        ))}

        <JoinCard>
          <JoinTitle>{dict.title}</JoinTitle>
          <JoinDescription>{dict.description}</JoinDescription>
          <ButtonBox>
            <LinkButton
              label={dict.button}
              url="/contact"
              bgcolor="#99F6C4"
              color="#0F5238"
            />
          </ButtonBox>
        </JoinCard>
      </GridWrapper>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 120px 64px;
  background-color: #f4f4f2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  max-width: 800px;
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #4a4a4a;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: fit-content;
`;

const ExpertCard = styled.div`
  background: #ffffff;
  max-width: 390px;
  padding: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-12px);
    box-shadow: 0 0 10px 2px #0f5238;
    scale: 1.1;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #4a4a4a;
`;

const JoinCard = styled(ExpertCard)`
  background-color: #2d312f;
  color: #ffffff;
`;

const JoinTitle = styled(CardTitle)`
  color: #ffffff;
`;

const JoinDescription = styled(CardDescription)`
  color: #a0a0a0;
  margin-bottom: 32px;
`;

const ButtonBox = styled.div`
  margin-top: auto;
`;
