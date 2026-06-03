export const CONTACT_INTEREST_OPTIONS = [
  { value: "robotics", label: "Robotik-Gastronomie" },
  { value: "strategy", label: "Strategie & Beratung" },
  { value: "network", label: "Netzwerk-Partner" },
  { value: "consultation", label: "Erstgespräch" },
] as const;

export const CONTACT_INTEREST_VALUES = CONTACT_INTEREST_OPTIONS.map(
  (option) => option.value,
 ) as readonly string[];

export type ContactInterest = (typeof CONTACT_INTEREST_OPTIONS)[number]["value"];

export const CONTACT_INTEREST_LABELS: Record<ContactInterest, string> =
  CONTACT_INTEREST_OPTIONS.reduce(
    (labels, option) => {
      labels[option.value] = option.label;
      return labels;
    },
    {} as Record<ContactInterest, string>,
  );

export const getContactInterestLabel = (value: string) =>
  CONTACT_INTEREST_LABELS[value as ContactInterest] ?? value;

export interface ContactFormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}
