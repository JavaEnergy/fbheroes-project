import styled from "styled-components";

interface Ref {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  dict: { badge: string; title: string; items: Ref[] };
}

export default function ReferenzenSection({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Header>
          <Badge>{dict.badge}</Badge>
          <Title>{dict.title}</Title>
        </Header>
        <Grid>
          {dict.items.map((item) => (
            <Item key={item.title}>
              <IconBox>{item.icon}</IconBox>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>{item.description}</ItemDesc>
            </Item>
          ))}
        </Grid>
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
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(15, 82, 56, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const ItemTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #1a1c1b;
`;

const ItemDesc = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.65;
`;
