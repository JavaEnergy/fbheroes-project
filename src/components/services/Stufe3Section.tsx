"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface Props {
  dict: {
    title: string;
    description: string;
    accessTitle: string;
    accessDesc: string;
    features: Feature[];
    advantageTitle: string;
    advantageDesc: string;
    button: string;
  };
  locale: string;
}

export default function Stufe3Section({ dict, locale }: Props) {
  return (
    <Section>
      <Inner>
        <HeaderBlock>
          <SectionTitle>{dict.title}</SectionTitle>
          <SectionDesc dangerouslySetInnerHTML={{ __html: dict.description }} />
        </HeaderBlock>

        <TwoCol>
          <AccessCard>
            <AccessTitle>{dict.accessTitle}</AccessTitle>
            <AccessDesc>{dict.accessDesc}</AccessDesc>
            <FeatureList>
              {dict.features.map((f) => (
                <FeatureItem key={f.title}>
                  <FeatureIcon>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10l4 4 6-7" stroke="var(--primary-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </FeatureIcon>
                  <div>
                    <FeatureTitle>{f.title}</FeatureTitle>
                    <FeatureDesc>{f.description}</FeatureDesc>
                  </div>
                </FeatureItem>
              ))}
            </FeatureList>
          </AccessCard>

          <AdvantageCard>
            <OrbBg />
            <AdvantageTitle>{dict.advantageTitle}</AdvantageTitle>
            <AdvantageDesc>{dict.advantageDesc}</AdvantageDesc>
            <CtaButton href={`/${locale}/contact`}>{dict.button}</CtaButton>
          </AdvantageCard>
        </TwoCol>
      </Inner>
    </Section>
  );
}

const float = keyframes`
  0%, 100% { transform: translate(-30%, -30%) scale(1); }
  50% { transform: translate(-30%, -30%) scale(1.1); }
`;

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

const HeaderBlock = styled.div`
  text-align: center;
  max-width: 768px;
  margin: 0 auto 64px;
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
  strong { color: #1a1c1b; }
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const AccessCard = styled.div`
  background: #f4f4f2;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(112, 121, 115, 0.2);
`;

const AccessTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 14px;
`;

const AccessDesc = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.65;
  margin-bottom: 28px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeatureItem = styled.li`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const FeatureIcon = styled.span`
  flex-shrink: 0;
  margin-top: 2px;
`;

const FeatureTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1a1c1b;
  margin-bottom: 2px;
`;

const FeatureDesc = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const AdvantageCard = styled.div`
  background-color: #0f5238;
  color: #fff;
  border-radius: 24px;
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
`;

const OrbBg = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(146, 247, 195, 0.08);
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  animation: ${float} 8s ease-in-out infinite;
  pointer-events: none;
`;

const AdvantageTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 16px;
  position: relative;
`;

const AdvantageDesc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  position: relative;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: #92f7c3;
  color: #0f5238;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  width: fit-content;
  position: relative;
  transition: background 0.2s ease;
  &:hover { background: #fff; }
`;
