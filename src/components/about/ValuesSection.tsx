import React from "react";
import styled from "styled-components";

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  dict: {
    title: string;
    description: string;
    cards: ValueCard[];
  };
}

const iconPaths: Record<string, React.ReactElement> = {
  lightbulb: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
    </svg>
  ),
  speed: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 12l4-6" />
    </svg>
  ),
  rocket_launch: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  handshake: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  ),
};

export default function ValuesSection({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <Title>{dict.title}</Title>
          <Description>{dict.description}</Description>
        </Header>
        <Grid>
          {dict.cards.map((card) => (
            <Card key={card.title}>
              <IconBox>{iconPaths[card.icon]}</IconBox>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.description}</CardDesc>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f9f9f7;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 56px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #1a1c1b;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.65;
  color: #6b7280;
  max-width: 640px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  border-bottom: 4px solid rgba(15, 82, 56, 0.1);
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #0f5238;
  }
`;

const IconBox = styled.div`
  color: #0f5238;
  margin-bottom: 20px;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #1a1c1b;
  margin-bottom: 12px;
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.65;
`;
