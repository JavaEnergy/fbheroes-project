import styled from "styled-components";
import Link from "next/link";

interface Way {
  icon: string;
  title: string;
  description: string;
  focusLabel: string;
  focus: string;
}

interface Props {
  dict: {
    title: string;
    description: string;
    ways: Way[];
    footnote: string;
    footnoteLink: string;
    footnoteLinkHref: string;
  };
  locale: string;
}

export default function DreiWegeSection({ dict, locale }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <SectionTitle>{dict.title}</SectionTitle>
          <SectionDesc>{dict.description}</SectionDesc>
        </Header>
        <Grid>
          {dict.ways.map((way) => (
            <Card key={way.title}>
              <IconBox>
                <span>{way.icon}</span>
              </IconBox>
              <CardTitle>{way.title}</CardTitle>
              <CardDesc>{way.description}</CardDesc>
              <FocusBlock>
                <FocusLabel>{way.focusLabel}</FocusLabel>
                <FocusText>{way.focus}</FocusText>
              </FocusBlock>
            </Card>
          ))}
        </Grid>
        <Footnote>
          {dict.footnote}{" "}
          <FootnoteLink href={`/${locale}/robotic-gastronomy`}>
            {dict.footnoteLink}
          </FootnoteLink>
          .
        </Footnote>
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

const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionDesc = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #6b7280;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 40px 32px;
  border: 1px solid rgba(112, 121, 115, 0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 8px 32px rgba(15, 82, 56, 0.1);
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background-color: #92f7c3;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #1a1c1b;
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.65;
  flex: 1;
`;

const FocusBlock = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(112, 121, 115, 0.15);
`;

const FocusLabel = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
`;

const FocusText = styled.p`
  font-size: 14px;
  color: #1a1c1b;
`;

const Footnote = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 15px;
`;

const FootnoteLink = styled(Link)`
  color: var(--primary-green);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
`;
