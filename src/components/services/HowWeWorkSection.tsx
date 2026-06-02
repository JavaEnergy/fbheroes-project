import styled from "styled-components";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  dict: { title: string; steps: Step[] };
}

export default function HowWeWorkSection({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Title>{dict.title}</Title>
        <Grid>
          {dict.steps.map((step) => (
            <Card key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <CardTitle>{step.title}</CardTitle>
              <CardDesc>{step.description}</CardDesc>
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
  background-color: #f4f4f2;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  @media (max-width: 768px) {
    font-size: 30px;
  }
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
  background: #fff;
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StepNumber = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-green);
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #1a1c1b;
`;

const CardDesc = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.65;
`;
