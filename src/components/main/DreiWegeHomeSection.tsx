import styled from "styled-components";

interface Way {
  title: string;
  description: string;
}

interface Props {
  dict: { badge: string; title: string; ways: Way[]; footnote: string };
}

export default function DreiWegeHomeSection({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <Badge>{dict.badge}</Badge>
          <Title>{dict.title}</Title>
        </Header>
        <Grid>
          {dict.ways.map((way) => (
            <Card key={way.title}>
              <WayTitle>{way.title}</WayTitle>
              <WayDesc>{way.description}</WayDesc>
            </Card>
          ))}
        </Grid>
        <Footnote>{dict.footnote}</Footnote>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 96px 32px;
  background-color: #f4f4f2;
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
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 48px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(112, 121, 115, 0.2);
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WayTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-green);
`;

const WayDesc = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.65;
  flex: 1;
`;

const Footnote = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
  color: #6b7280;
`;
