import styled from "styled-components";

interface Props {
  dict: {
    title: string;
    description: string;
    cards: { title: string; text: string }[];
    trainingTitle: string;
    trainingDesc: string;
    trainingItems: string[];
    quote: string;
  };
}

export default function Stufe2Section({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <SectionTitle>{dict.title}</SectionTitle>
          <SectionDesc>{dict.description}</SectionDesc>
        </Header>

        <CardGrid>
          {dict.cards.map((card) => (
            <FeatureCard key={card.title}>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </FeatureCard>
          ))}
        </CardGrid>

        <TrainingBlock>
          <TrainingLeft>
            <TrainingTitle>{dict.trainingTitle}</TrainingTitle>
            <TrainingDesc>{dict.trainingDesc}</TrainingDesc>
            <CheckList>
              {dict.trainingItems.map((item) => (
                <CheckItem key={item}>
                  <CheckIcon>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10l4 4 6-7" stroke="var(--primary-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </CheckIcon>
                  {item}
                </CheckItem>
              ))}
            </CheckList>
          </TrainingLeft>
          <QuoteBox>
            <QuoteText>{dict.quote}</QuoteText>
          </QuoteBox>
        </TrainingBlock>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f4f4f2;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 48px;
  max-width: 768px;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SectionDesc = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #6b7280;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid rgba(112, 121, 115, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.65;
`;

const TrainingBlock = styled.div`
  background: #e8e8e6;
  border-radius: 24px;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }
`;

const TrainingLeft = styled.div``;

const TrainingTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const TrainingDesc = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.65;
  margin-bottom: 24px;
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #1a1c1b;
`;

const CheckIcon = styled.span`
  flex-shrink: 0;
`;

const QuoteBox = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(112, 121, 115, 0.15);
`;

const QuoteText = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  font-style: italic;
  text-align: center;
`;
