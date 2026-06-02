"use client";

import styled, { css } from "styled-components";
import { Like, Dislike } from "@/svg";

interface Way {
  number: string;
  tag: string;
  title: string;
  description: string;
  whenUseful: { label: string; text: string };
  whenNot: { label: string; text: string } | null;
}

interface Props {
  dict: { ways: Way[] };
}

export default function WaysSection({ dict }: Props) {
  return (
    <Wrapper>
      {dict.ways.map((way, index) => (
        <WaySection key={way.number} $alt={index % 2 === 1} $shaded={index % 2 === 0}>
          <Inner $alt={index % 2 === 1}>
            <Left>
              <WayTitle>{way.title}</WayTitle>
              <Badge>
                <BadgeNumber>{way.number}</BadgeNumber>
                <Divider />
                <BadgeTag>{way.tag}</BadgeTag>
              </Badge>
            </Left>
            <Right>
              <Description>{way.description}</Description>
              <Grid $single={!way.whenNot}>
                <Column>
                  <ColumnTitle>
                    <Like />
                    {way.whenUseful.label}
                  </ColumnTitle>
                  <FactBox>{way.whenUseful.text}</FactBox>
                </Column>
                {way.whenNot && (
                  <Column>
                    <ColumnTitle $muted>
                      <Dislike />
                      {way.whenNot.label}
                    </ColumnTitle>
                    <FactBox $muted>{way.whenNot.text}</FactBox>
                  </Column>
                )}
              </Grid>
            </Right>
          </Inner>
        </WaySection>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const WaySection = styled.section<{ $alt: boolean; $shaded: boolean }>`
  width: 100%;
  padding: 96px 64px;
  background-color: ${(p) => (p.$shaded ? "#F4F4F2" : "#F9F9F7")};

  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div<{ $alt: boolean }>`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(p) => (p.$alt ? "row-reverse" : "row")};
  gap: 64px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Left = styled.div`
  width: 33%;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const WayTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background-color: #92f7c3;
  border-radius: 16px;
  padding: 20px 24px;
`;

const BadgeNumber = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-green);
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgba(45, 106, 79, 0.2);
`;

const BadgeTag = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-green);
  white-space: pre-line;
  line-height: 1.5;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: var(--medium-gray);
  margin-bottom: 48px;
`;

const Grid = styled.div<{ $single: boolean }>`
  display: grid;
  grid-template-columns: ${(p) => (p.$single ? "1fr" : "1fr 1fr")};
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColumnTitle = styled.h4<{ $muted?: boolean }>`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(p) => (p.$muted ? "#e53935" : "#1a1d1b")};
`;

const FactBox = styled.div<{ $muted?: boolean }>`
  padding: 20px;
  background-color: ${(p) => (p.$muted ? "#FCFCFB" : "#fff")};
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.65;
  color: var(--medium-gray);
  ${(p) => p.$muted && css`opacity: 0.85;`}
`;
