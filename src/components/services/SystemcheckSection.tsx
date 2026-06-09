"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import NextImage from "next/image";

interface Props {
  dict: {
    badge: string;
    title: string;
    description: string;
    items: string[];
    button: string;
  };
  locale: string;
}

export default function SystemcheckSection({ dict, locale }: Props) {
  return (
    <Section>
      <Inner>
        <Left>
          <Badge>{dict.badge}</Badge>
          <Title>{dict.title}</Title>
          <Description>{dict.description}</Description>
          <CheckList>
            {dict.items.map((item) => (
              <CheckItem key={item}>
                <CheckIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="rgba(146,247,195,0.25)" />
                    <path d="M6 10l3 3 5-5" stroke="#92f7c3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </CheckIcon>
                <span>{item}</span>
              </CheckItem>
            ))}
          </CheckList>
          <CtaButton href={`/${locale}/contact`}>{dict.button}</CtaButton>
        </Left>
        <Right>
          <ImageWrapper>
            <NextImage
              src="/service_icon.png"
              alt="F&B System Check"
              fill
              style={{ objectFit: "contain" }}
            />
          </ImageWrapper>
        </Right>
      </Inner>
    </Section>
  );
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const Section = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #0f5238;
  color: #fff;

  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 16px;
  border-radius: 999px;
  background-color: rgba(146, 247, 195, 0.2);
  color: #92f7c3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 32px;
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
`;

const CheckIcon = styled.span`
  flex-shrink: 0;
  display: flex;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: #92f7c3;
  color: #0f5238;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(146, 247, 195, 0.3);
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 360px;

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;
