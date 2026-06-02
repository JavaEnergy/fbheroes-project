import styled from "styled-components";
import Link from "next/link";

interface Props {
  dict: { title: string; description: string; button: string };
  locale: string;
}

export default function SchnellcheckSection({ dict, locale }: Props) {
  return (
    <Section>
      <Inner>
        <Title>{dict.title}</Title>
        <Description>{dict.description}</Description>
        <CtaLink href={`/${locale}/contact`}>{dict.button}</CtaLink>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 96px 32px;
  background-color: #f9f9f7;
`;

const Inner = styled.div`
  max-width: 896px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  color: #1a1c1b;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 40px;
`;

const CtaLink = styled(Link)`
  display: inline-block;
  background-color: #006c48;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background-color: #92f7c3;
    color: #1a1c1b;
  }
`;
