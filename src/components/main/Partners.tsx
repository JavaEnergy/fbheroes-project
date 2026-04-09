import styled from "styled-components";

interface partner {
  description: string;
  image: string;
  link?: string;
  title: string;
}
interface PartnersProps {
  dict: any;
  partners: partner[];
}

export default function Partners(props: PartnersProps) {
  return (
    <PartnersSection>
      <Title>{props.dict.partnerships}</Title>
      <Cards>
        {props.partners.map((partner, index) => (
          <Card key={index}>
            <img src={partner.image} alt={partner.title} />
            <CardTitle>{partner.title}</CardTitle>
            <CardDescription>{partner.description}</CardDescription>
          </Card>
        ))}
      </Cards>
    </PartnersSection>
  );
}

const PartnersSection = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f4f4f2;
`;

const Title = styled.h2`
  font-size: 16px;
  text-align: center;
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  gap: 24px;
  justify-content: center;
`;

const Card = styled.div`
  max-width: 286px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-12px);
    box-shadow: 0 0 10px 2px #0f5238;
    scale: 1.1;
  }
`;

const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-top: 24px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  text-align: center;
`;
