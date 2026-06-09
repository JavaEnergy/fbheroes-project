"use client";

import styled from "styled-components";
import Link from "next/link";

interface Props {
  locale: string;
  title: string;
  description: string;
  button: string;
}

export default function CtaSection({ locale, title, description, button }: Props) {
  return (
    <Section id="contact">
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CtaButton href={`/${locale}/contact`}>{button}</CtaButton>
      </Card>
    </Section>
  );
}

const Section = styled.section`
  padding: 128px 16px;
  background-color: #f9f9f7;
`;

const Card = styled.div`
  max-width: 896px;
  margin: 0 auto;
  background-color: #1a1c1b;
  border-radius: 2rem;
  overflow: hidden;
  padding: 64px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #a1a1aa;
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: #0f5238;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2d6a4f;
  }
`;
