"use client";

import styled from "styled-components";
import Link from "next/link";

interface Step {
  label: string;
  title: string;
  description: string;
  variant: "dark" | "mid" | "light";
}

interface Props {
  dict: { badge: string; title: string; steps: Step[]; button: string };
  locale: string;
}

const bgMap = {
  dark: { bg: "#0f5238", color: "#fff", labelColor: "rgba(177,240,206,0.8)", descColor: "rgba(255,255,255,0.85)" },
  mid:  { bg: "#2d6a4f", color: "#fff", labelColor: "#a8e7c5", descColor: "rgba(255,255,255,0.85)" },
  light:{ bg: "#92f7c3", color: "#1a1c1b", labelColor: "#006c48", descColor: "#404943" },
};

export default function SoArbeitenWirSection({ dict, locale }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <Badge>{dict.badge}</Badge>
          <Title>{dict.title}</Title>
        </Header>
        <Grid>
          {dict.steps.map((step) => {
            const s = bgMap[step.variant];
            return (
              <Card key={step.label} style={{ backgroundColor: s.bg, color: s.color }}>
                <StepLabel style={{ color: s.labelColor }}>{step.label}</StepLabel>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc style={{ color: s.descColor }}>{step.description}</StepDesc>
              </Card>
            );
          })}
        </Grid>
        <CtaRow>
          <CtaLink href={`/${locale}/contact`}>{dict.button} →</CtaLink>
        </CtaRow>
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
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
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
  max-width: 768px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 64px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StepLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const StepDesc = styled.p`
  font-size: 15px;
  line-height: 1.65;
`;

const CtaRow = styled.div`
  display: flex;
  justify-content: center;
`;

const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0f5238 0%, #2d6a4f 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(15, 82, 56, 0.2);
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.9; }
`;
