"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendContactEmail } from "@/app/actions";
import { type ContactFormSubmission } from "@/lib/contact-interest";

interface ContactProps {
  dict: {
    contact: {
      right: {
        fields: {
          name: string;
          hotel: string;
          email: string;
          locations: string;
          message: string;
          namePlaceholder: string;
          hotelPlaceholder: string;
          emailPlaceholder: string;
          locationsPlaceholder: string;
          messagePlaceholder: string;
        };
        submit: string;
      };
      errors: {
        required: string;
        email: string;
      };
      modal: {
        successTitle: string;
        successBody: string;
        errorTitle: string;
        errorBody: string;
        buttonClose: string;
        buttonRetry: string;
      };
    };
  };
  inputBgColor?: string;
  inputColor?: string;
  panelBgColor?: string;
}

const createSchema = (e: ContactProps["dict"]["contact"]["errors"]) =>
  yup.object({
    name: yup.string().required(e.required),
    email: yup.string().email(e.email).required(e.required),
    hotel: yup.string().required(e.required),
    locations: yup.string().required(e.required),
    message: yup.string().required(e.required),
  });

export default function Form({ dict, inputBgColor, inputColor, panelBgColor }: ContactProps) {
  const { right, errors: errorDict, modal: modalDict } = dict.contact;
  const [modalStatus, setModalStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<ContactFormSubmission>({ resolver: yupResolver(createSchema(errorDict)) });

  const onSubmit = async (data: ContactFormSubmission) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setModalStatus("success");
        reset();
      } else {
        setModalStatus("error");
      }
    } catch {
      setModalStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setModalStatus("idle");

  return (
    <>
      <RightColumn onSubmit={handleSubmit(onSubmit)} $panelbg={panelBgColor ?? inputBgColor}>
        <FormGrid>
          <InputGroup $hasError={!!errors.name} inputbgcolor={inputBgColor} inputcolor={inputColor}>
            <label htmlFor="name">{right.fields.name}</label>
            <input {...register("name")} id="name" type="text" placeholder={right.fields.namePlaceholder} />
            {errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}
          </InputGroup>

          <InputGroup $hasError={!!errors.hotel} inputbgcolor={inputBgColor} inputcolor={inputColor}>
            <label htmlFor="hotel">{right.fields.hotel}</label>
            <input {...register("hotel")} id="hotel" type="text" placeholder={right.fields.hotelPlaceholder} />
            {errors.hotel && <ErrorLabel>{errors.hotel.message}</ErrorLabel>}
          </InputGroup>

          <InputGroup $hasError={!!errors.email} inputbgcolor={inputBgColor} inputcolor={inputColor}>
            <label htmlFor="email">{right.fields.email}</label>
            <input {...register("email")} id="email" type="email" placeholder={right.fields.emailPlaceholder} />
            {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
          </InputGroup>

          <InputGroup $hasError={!!errors.locations} inputbgcolor={inputBgColor} inputcolor={inputColor}>
            <label htmlFor="locations">{right.fields.locations}</label>
            <input {...register("locations")} id="locations" type="text" placeholder={right.fields.locationsPlaceholder} />
            {errors.locations && <ErrorLabel>{errors.locations.message}</ErrorLabel>}
          </InputGroup>

          <FullWidthGroup $hasError={!!errors.message} inputbgcolor={inputBgColor} inputcolor={inputColor}>
            <label htmlFor="message" style={{ color: inputColor || "#e2e2e0" }}>{right.fields.message}</label>
            <textarea {...register("message")} id="message" rows={5} placeholder={right.fields.messagePlaceholder} />
            {errors.message && <ErrorLabel>{errors.message.message}</ErrorLabel>}
          </FullWidthGroup>
        </FormGrid>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "..." : right.submit}
        </SubmitButton>
      </RightColumn>

      {modalStatus !== "idle" && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()} $isError={modalStatus === "error"}>
            <ModalTitle $isError={modalStatus === "error"}>
              {modalStatus === "success" ? modalDict.successTitle : modalDict.errorTitle}
            </ModalTitle>
            <ModalBody>
              {modalStatus === "success" ? modalDict.successBody : modalDict.errorBody}
            </ModalBody>
            <ModalButton onClick={closeModal}>
              {modalStatus === "success" ? modalDict.buttonClose : modalDict.buttonRetry}
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;

const RightColumn = styled.form<{ $panelbg?: string }>`
  flex: 1.2;
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.$panelbg || "transparent"};
  @media (max-width: 768px) {
    padding: 0;
    border: none;
    background: transparent;
    border-radius: 0;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const InputGroup = styled.div<{ $hasError?: boolean; inputbgcolor?: string; inputcolor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${(props) => props.inputcolor || "#e2e2e0"};
    font-size: 14px;
    font-weight: 500;
  }

  input, textarea {
    background-color: ${(props) => props.inputbgcolor || "#1a1d1b"};
    border: 1px solid ${(props) => (props.$hasError ? "#ff4d4d" : "rgba(226, 226, 224, 0.18)")};
    border-radius: 12px;
    padding: 14px 16px;
    color: ${(props) => props.inputcolor || "#e2e2e0"};
    font-size: 16px;
    outline: none;
    width: 100%;
    transition: all 0.2s ease;
    font-family: inherit;

    &::placeholder { opacity: 0.5; }

    &:focus {
      border-color: #92f7c3;
      box-shadow: 0 0 0 3px rgba(146, 247, 195, 0.25);
    }
  }
`;

const ErrorLabel = styled.span`
  color: #ff4d4d;
  font-size: 12px;
  font-weight: 500;
`;

const FullWidthGroup = styled(InputGroup)`
  grid-column: span 2;
  @media (max-width: 640px) { grid-column: span 1; }
`;

const SubmitButton = styled.button`
  background-color: #99f6c4;
  color: #0f5238;
  width: 50%;
  padding: 20px;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 48px;

  &:disabled { opacity: 0.6; cursor: not-allowed; }

  @media (max-width: 768px) { width: 100%; margin-top: 32px; }

  &:hover:not(:disabled) {
    background-color: #7ceba8;
    transform: translateY(-2px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div<{ $isError?: boolean }>`
  background: #1a1d1b;
  border: 1px solid ${(props) => (props.$isError ? "#ff4d4d" : "#99f6c4")};
  padding: 48px;
  border-radius: 24px;
  max-width: 450px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  animation: ${slideUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const ModalTitle = styled.h2<{ $isError?: boolean }>`
  color: ${(props) => (props.$isError ? "#ff4d4d" : "#99f6c4")};
  font-size: 28px;
  margin-bottom: 16px;
`;

const ModalBody = styled.p`
  color: #e2e2e0;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const ModalButton = styled.button`
  background-color: #99f6c4;
  color: #0f5238;
  padding: 14px 40px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background-color: #7ceba8; transform: scale(1.02); }
`;
