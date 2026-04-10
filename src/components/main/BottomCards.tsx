import RightArrow, { Star } from "@/svg";
import Link from "next/link";
import styled from "styled-components";

interface BottomCard {
  description: string;
  image: string | null;
  title: "F&B Heroes";
  link?: string;
}

export default function BottomCards(props: { cards: BottomCard[]; dict: any }) {
  return (
    <BottomCardsSection>
      <SubTitleBox>
        <Star />
        {props.dict.badge}
      </SubTitleBox>
      <Title>{props.dict.subtitle}</Title>
      <Cards>
        {props.cards.map((card, index) => (
          <Card key={index} href={card.link ? card.link : "#"}>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <ViewText>
              {props.dict.cta} <RightArrow />
            </ViewText>
          </Card>
        ))}
      </Cards>
    </BottomCardsSection>
  );
}

const BottomCardsSection = styled.section`
  width: 100%;
  background-color: #f4f4f2;
  border-radius: 48px;
  padding: 96px 16px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitleBox = styled.div`
  background-color: #92f7c3;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00734d;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  text-align: center;
  margin-top: 32px;
  font-weight: 500;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled(Link)`
  max-width: 373px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 12px;
  gap: 16px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-12px);
    box-shadow: 0 0 10px 2px #0f5238;
    scale: 1.1;
  }
`;
const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #0f5238;
`;

const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const ViewText = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
