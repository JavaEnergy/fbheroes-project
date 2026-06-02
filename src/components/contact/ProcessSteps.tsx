import styled from "styled-components";

interface Step {
  number: string;
  label: string;
}

interface Props {
  dict: { items: Step[] };
}

export default function ProcessSteps({ dict }: Props) {
  return (
    <Wrapper>
      {dict.items.map((step) => (
        <StepItem key={step.number}>
          <NumberCircle>{step.number}</NumberCircle>
          <StepLabel>{step.label}</StepLabel>
        </StepItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 0 64px;
  margin-top: 32px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid var(--border);

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  padding: 32px 16px;
  border-radius: 0;
  cursor: default;
  transition: background-color 0.2s ease;

  &:hover > span {
    background-color: var(--primary-green);
    color: #fff;
    border-color: var(--primary-green);
  }

  &:hover > p {
    color: var(--primary-green);
  }

  @media (max-width: 640px) {
    flex-direction: row;
    text-align: left;
    gap: 16px;
    padding: 20px 8px;
    border-bottom: 1px solid var(--border);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const NumberCircle = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #d0d0d0;
  background-color: #f5f5f3;
  color: #1a1d1b;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
`;

const StepLabel = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1d1b;
  max-width: 160px;
  line-height: 1.4;
  transition: color 0.2s ease;

  @media (max-width: 640px) {
    margin-top: 0;
    max-width: none;
    font-size: 15px;
    align-self: center;
  }
`;
