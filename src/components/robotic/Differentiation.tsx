import { DoubleCheck, Remove } from "@/svg";
import styled from "styled-components";

export default function Differentiation({ dict }: { dict: any }) {
  return (
    <SectionElement>
      <Inner>
        <Header>
          <SectionTitle>{dict.badge}</SectionTitle>
          <SectionDescription>{dict.mainTitle}</SectionDescription>
        </Header>

        <Grid>
          <LeftCard>
            <CardContent>
              <PreTitle>{dict.statusQuo.badge}</PreTitle>
              <CardTitle>{dict.statusQuo.title}</CardTitle>
              <List>
                <ListItem>
                  <Remove /> {dict.statusQuo.bullets[0]}
                </ListItem>
                <ListItem>
                  <Remove /> {dict.statusQuo.bullets[1]}
                </ListItem>
                <ListItem>
                  <Remove /> {dict.statusQuo.bullets[2]}
                </ListItem>
              </List>
            </CardContent>
            <Quote>"{dict.statusQuo.footer}"</Quote>
          </LeftCard>

          <RightCard>
            <CardContent>
              <HeroesPreTitle>{dict.myStandard.badge}</HeroesPreTitle>
              <HeroesCardTitle>{dict.myStandard.title}</HeroesCardTitle>
              <List>
                <HeroesListItem>
                  <DoubleCheck /> {dict.myStandard.bullets[0]}
                </HeroesListItem>
                <HeroesListItem>
                  <DoubleCheck /> {dict.myStandard.bullets[1]}
                </HeroesListItem>
                <HeroesListItem>
                  <DoubleCheck /> {dict.myStandard.bullets[2]}
                </HeroesListItem>
              </List>
            </CardContent>
            <HeroesQuote>"{dict.myStandard.footer}"</HeroesQuote>
          </RightCard>
        </Grid>
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
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
`;

const SectionDescription = styled.p`
  color: #6b7280;
  max-width: 672px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftCard = styled.div`
  padding: 48px;
  border-radius: 24px;
  background-color: #e2e3e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 32px 24px;
  }
`;

const RightCard = styled(LeftCard)`
  background: linear-gradient(135deg, #1a5c40, #2d6a4f);
  color: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
`;

const CardContent = styled.div``;

const PreTitle = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #707973;
  margin-bottom: 24px;
`;

const HeroesPreTitle = styled(PreTitle)`
  color: rgba(255, 255, 255, 0.65);
`;

const CardTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const HeroesCardTitle = styled(CardTitle)`
  color: #fff;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16px;
  color: #4b5563;
  line-height: 1.5;
`;

const HeroesListItem = styled(ListItem)`
  color: rgba(255, 255, 255, 0.9);
`;

const Quote = styled.div`
  margin-top: 48px;
  padding: 24px;
  background-color: #f4f4f2;
  border-radius: 12px;
  font-style: italic;
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
`;

const HeroesQuote = styled(Quote)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.85);
`;
