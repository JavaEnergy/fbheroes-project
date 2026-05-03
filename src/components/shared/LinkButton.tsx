import Link from "next/link";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  url: string;
  color: string;
  bgcolor: string;
  target?: string;
}

export default function LinkButton(props: ButtonProps) {
  return (
    <Button href={props.url} color={props.color} bgcolor={props.bgcolor} target={props.target}>
      {props.label}
    </Button>
  );
}

const Button = styled(Link)<{ color: string; bgcolor: string }>`
  color: ${(props) => props.color};
  width: fit-content;
  background: ${(props) => props.bgcolor};
  font-size: 16px;
  font-weight: 500;
  padding: 16px 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.88;
  }
`;
