import { Check, GreenHands, GreenRocket } from "@/svg";
import styled from "styled-components";

export default function Collaboration({ dict }: any) {
  return (
    <SectionElement>
      <SectionTitle>{dict.title}</SectionTitle>
      <SectionDescription>{dict.description}</SectionDescription>
      <Cards>
        <Card>
          <GreenHands />
          <CardTitle>{dict.retainer.title}</CardTitle>
          <CardDescription>{dict.retainer.description}</CardDescription>
          <Feature>
            <Check /> {dict.retainer.features[0]}
          </Feature>
          <Feature>
            <Check /> {dict.retainer.features[1]}
          </Feature>
        </Card>
        <Card>
          <GreenRocket />
          <CardTitle>{dict.projectBased.title}</CardTitle>
          <CardDescription>{dict.projectBased.description}</CardDescription>
          <Feature>
            <Check /> {dict.projectBased.features[0]}
          </Feature>
          <Feature>
            <Check /> {dict.projectBased.features[1]}
          </Feature>
        </Card>
      </Cards>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f4f4f2;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
  font-weight: 300;
`;

const Cards = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 32px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 40px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-top: 32px;
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 16px 0;
`;

const Feature = styled.span`
  display: flex;
  gap: 12px;
  font-size: 14px;
  align-items: center;
  margin-top: 16px;
`;
