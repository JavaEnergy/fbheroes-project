import styled from "styled-components";

interface CardType {
  description: string;
  icon: string;
  title: string;
}

interface Props {
  title: string;
  description: string;
  cards: CardType[];
}

export default function Overview({ title, description, cards }: Props) {
  return (
    <SectionElement>
      <Inner>
        <Header>
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription>{description}</SectionDescription>
        </Header>
        <Cards>
          {cards.map((card) => (
            <Card key={card.title}>
              <IconWrapper>
                <CardIcon src={card.icon} alt={card.title} width={24} height={24} />
              </IconWrapper>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </Cards>
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 32px;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 64px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #6b7280;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f2;
  border-radius: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(45, 106, 79, 0.2);
    box-shadow: 0 4px 20px rgba(15, 82, 56, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(45, 106, 79, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: background 0.2s ease;
  flex-shrink: 0;

  ${Card}:hover & {
    background: #2d6a4f;
  }
`;

const CardIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: filter 0.2s ease;

  ${Card}:hover & {
    filter: brightness(0) invert(1);
  }
`;

const CardTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.625;
`;
