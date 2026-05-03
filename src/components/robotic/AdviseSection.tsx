import { Dislike, Like } from "@/svg";
import styled from "styled-components";

export default function AdviseSection({ dict }: { dict: any }) {
  return (
    <SectionElement>
      <Inner>
        <Left>
          <Title>{dict.title}</Title>
          <Description>{dict.description}</Description>
        </Left>

        <Right>
          <Column>
            <BoxTitle>
              <Like /> {dict.recommend.title}
            </BoxTitle>
            <Items>
              <Fact>{dict.recommend.items[0]}</Fact>
              <Fact>{dict.recommend.items[1]}</Fact>
              <Fact>{dict.recommend.items[2]}</Fact>
            </Items>
          </Column>

          <Column>
            <BoxTitle $muted>
              <RedIcon><Dislike /></RedIcon> {dict.adviseAgainst.title}
            </BoxTitle>
            <Items>
              <Fact $muted>{dict.adviseAgainst.items[0]}</Fact>
              <Fact $muted>{dict.adviseAgainst.items[1]}</Fact>
              <Fact $muted>{dict.adviseAgainst.items[2]}</Fact>
            </Items>
          </Column>
        </Right>
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 32px;
  background-color: #f4f4f2;

  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 64px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
  }
`;

const Left = styled.div`
  flex: 0 0 33%;

  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 16px;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 32px;
`;

const NeutralityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #d1fae5;
  border-radius: 16px;
`;

const NeutralityLabel = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #0f5238;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgba(15, 82, 56, 0.2);
  flex-shrink: 0;
`;

const NeutralityText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #0f5238;
  line-height: 1.5;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BoxTitle = styled.h4<{ $muted?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(p) => (p.$muted ? "#6b7280" : "inherit")};
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RedIcon = styled.span`
  color: #dc2626;
  display: inline-flex;
  align-items: center;
`;

const Fact = styled.div<{ $muted?: boolean }>`
  padding: 16px;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #fff;
  opacity: ${(p) => (p.$muted ? 0.7 : 1)};
`;
