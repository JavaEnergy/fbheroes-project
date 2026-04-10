import styled from "styled-components";

interface CardType {
  description: string;
  image: string;
  title: string;
}

interface Props {
  dict: any;
  cards: CardType[];
}

export default function Overview({ dict, cards }: Props) {
  return (
    <SectionElement>
      <SectionTitle>{dict.title}</SectionTitle>
      <SectionDescription>{dict.description}</SectionDescription>
      <Cards>
        {cards.map((card) => (
          <Card key={card.title}>
            <img src={card.image} alt={card.title} width={15} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </Cards>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  margin-top: 16px;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  gap: 24px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  max-width: 389px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f2;
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
  font-size: 20px;
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
