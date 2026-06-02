import styled from "styled-components";

interface Props {
  dict: {
    badge: string;
    title: string;
    description: string;
    techNote: string;
    steps: { number: string; title: string }[];
  };
}

export default function DerAnsatzSection({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <Badge>{dict.badge}</Badge>
          <Title>{dict.title}</Title>
          <Description>{dict.description}</Description>
          <TechNote>{dict.techNote}</TechNote>
        </Header>
        <Grid>
          {dict.steps.map((step) => (
            <Card key={step.number}>
              <CardNumber>{step.number}</CardNumber>
              <CardTitle>{step.title}</CardTitle>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 128px 32px;
  background-color: #f9f9f7;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.div`
  max-width: 896px;
  margin: 0 auto 64px;
`;

const Badge = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--primary-green);
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  color: #1a1c1b;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 16px;
`;

const TechNote = styled.p`
  font-size: 16px;
  color: #6b7280;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #f4f4f2;
  border-radius: 16px;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

const CardNumber = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 96px;
  font-weight: 900;
  color: var(--primary-green);
  opacity: 0.05;
  line-height: 1;
  user-select: none;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-green);
  position: relative;
  z-index: 1;
`;
