"use client";

import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import RightArrow from "@/svg";

interface Pillar {
  title: string;
  text: string;
}

interface ModalDict {
  headline: string;
  intro1: string;
  intro2: string;
  pillars: Pillar[];
  outro1: string;
  outro2: string;
}

interface Props {
  label: string;
  dict: ModalDict;
}

export default function LearnMoreModal({ label, dict }: Props) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <TriggerLink onClick={() => setOpen(true)}>
        {label} <RightArrow />
      </TriggerLink>

      {open && (
        <Overlay
          ref={overlayRef}
          onClick={(e) => { if (e.target === overlayRef.current) setOpen(false); }}
          role="dialog"
          aria-modal="true"
        >
          <Modal>
            <ModalHeader>
              <DragHandle />
              <CloseBtn onClick={() => setOpen(false)} aria-label="Close">✕</CloseBtn>
            </ModalHeader>

            <ModalBody>
              <Headline>{dict.headline}</Headline>
              <IntroText>{dict.intro1}</IntroText>
              <IntroText>{dict.intro2}</IntroText>

              <PillarsGrid>
                {dict.pillars.map((p, i) => (
                  <PillarCard key={p.title} $index={i}>
                    <PillarTitle>{p.title}</PillarTitle>
                    <PillarText>{p.text}</PillarText>
                  </PillarCard>
                ))}
              </PillarsGrid>

              <OutroText>{dict.outro1}</OutroText>
              <OutroText highlight>{dict.outro2}</OutroText>
            </ModalBody>
          </Modal>
        </Overlay>
      )}
    </>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const sheetUp = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
`;

const cardIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const TriggerLink = styled.button`
  background: #e0ede6;
  border: none;
  padding: 16px 32px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #0f5238;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  transition: background 0.2s;
  &:hover { background: #cfe3d8; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 18, 14, 0.72);
  backdrop-filter: blur(4px);
  z-index: 99999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 116px 24px 40px;
  overflow-y: auto;
  animation: ${fadeIn} 0.2s ease;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0;
    overflow-y: hidden;
  }
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 24px;
  max-width: 780px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.25s ease;

  scrollbar-width: thin;
  scrollbar-color: #c8d5cf transparent;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 20px 20px 0 0;
    animation: ${sheetUp} 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 24px 0;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 12px 20px 0;
    gap: 12px;
  }
`;

const DragHandle = styled.div`
  display: none;
  width: 40px;
  height: 4px;
  background: #d1d5db;
  border-radius: 2px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ModalBody = styled.div`
  padding: 24px 52px 48px;
  overflow-y: auto;
  flex: 1;

  scrollbar-width: thin;
  scrollbar-color: #c8d5cf transparent;

  @media (max-width: 768px) {
    padding: 16px 20px 40px;
  }
`;

const CloseBtn = styled.button`
  background: #f4f4f2;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  flex-shrink: 0;
  &:hover { background: #e2e3e1; }

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

const Headline = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #0f5238;
  line-height: 1.3;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const IntroText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #3a3a3a;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 12px;
  }
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 28px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 20px 0;
  }
`;

const PillarCard = styled.div<{ $index: number }>`
  background: #f4f4f2;
  border-radius: 14px;
  padding: 24px 20px;
  border-left: 3px solid #2d6a4f;
  opacity: 0;
  animation: ${cardIn} 0.4s ease forwards;
  animation-delay: ${(p) => 0.15 + p.$index * 0.1}s;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    background: #eaf5ef;
    box-shadow: 0 8px 24px rgba(15, 82, 56, 0.15);
  }

  @media (max-width: 768px) {
    padding: 16px 14px;
    border-radius: 10px;
    &:hover { transform: none; box-shadow: none; }
  }
`;

const PillarTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #0f5238;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

const PillarText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: #4a4a4a;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const OutroText = styled.p<{ highlight?: boolean }>`
  font-size: 15px;
  line-height: 1.7;
  color: ${(p) => (p.highlight ? "#0f5238" : "#3a3a3a")};
  font-weight: ${(p) => (p.highlight ? "500" : "400")};
  margin-top: 16px;
  ${(p) => p.highlight && `
    background: #f0faf4;
    border-radius: 10px;
    padding: 16px 20px;
    border-left: 3px solid #2d6a4f;
  `}

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 12px;
    ${(p: any) => p.highlight && `padding: 12px 14px;`}
  }
`;
