import { ContactForm, HeroSection, ProcessSteps } from "@/components/contact";
import { getDictionary } from "@/lib/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  return (
    <>
      <HeroSection dict={dict} />
      <ProcessSteps dict={dict.contact.steps} />
      <ContactForm dict={dict} />
    </>
  );
}
