import styled from "styled-components";

interface Props {
  dict: {
    title: string;
    description: string;
    whatsDoneTitle: string;
    whatsDone: { title: string; text: string }[];
    youGetTitle: string;
    youGetIntro: string;
    youGetItems: string[];
    youGetFooter: string;
    notIncludedTitle: string;
    notIncludedText: string;
  };
}

export default function Stufe1Section({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <HeaderBlock>
          <SectionTitle>{dict.title}</SectionTitle>
          <SectionDesc dangerouslySetInnerHTML={{ __html: dict.description }} />
        </HeaderBlock>

        <SubTitle>{dict.whatsDoneTitle}</SubTitle>
        <ThreeGrid>
          {dict.whatsDone.map((item) => (
            <InfoCard key={item.title}>
              <InfoCardTitle>{item.title}</InfoCardTitle>
              <InfoCardText>{item.text}</InfoCardText>
            </InfoCard>
          ))}
        </ThreeGrid>

        <TwoGrid>
          <YouGetCard>
            <YouGetTitle>{dict.youGetTitle}</YouGetTitle>
            <YouGetIntro>{dict.youGetIntro}</YouGetIntro>
            <ItemList>
              {dict.youGetItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ItemList>
            <YouGetFooter>{dict.youGetFooter}</YouGetFooter>
          </YouGetCard>

          <NotIncludedCard>
            <NotIncludedTitle>{dict.notIncludedTitle}</NotIncludedTitle>
            <NotIncludedText>{dict.notIncludedText}</NotIncludedText>
          </NotIncludedCard>
        </TwoGrid>
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

const SubTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const ThreeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #eeeeec;
  border-radius: 16px;
  padding: 28px;
`;

const InfoCardTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 10px;
`;

const InfoCardText = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.65;
`;

const TwoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const YouGetCard = styled.div`
  background: #e8e8e6;
  border-radius: 16px;
  padding: 40px;
`;

const YouGetTitle = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 16px;
`;

const YouGetIntro = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.6;
`;

const ItemList = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  li {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
  }
`;

const YouGetFooter = styled.p`
  font-size: 14px;
  color: #1a1c1b;
  font-weight: 600;
`;

const NotIncludedCard = styled.div`
  background: #eeeeec;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(112, 121, 115, 0.2);
  align-self: start;
`;

const NotIncludedTitle = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 16px;
`;

const NotIncludedText = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.7;
`;
