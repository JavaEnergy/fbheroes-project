import styled from "styled-components";

interface Props {
  dict: { badge: string; title: string; description: string };
}

export default function DerUnterschiedSection({ dict }: Props) {
  return (
    <Section>
      <Inner>
        <Badge>{dict.badge}</Badge>
        <Title>{dict.title}</Title>
        <Divider />
        <Description>{dict.description}</Description>
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
  max-width: 896px;
  margin: 0 auto;
  text-align: center;
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
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Divider = styled.div`
  width: 96px;
  height: 4px;
  background-color: rgba(15, 82, 56, 0.2);
  margin: 0 auto 40px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
  color: #6b7280;
`;
