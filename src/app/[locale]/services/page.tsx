import { getDictionary } from "@/lib/get-dictionary";
import { getServicesPage } from "../../../../sanity/sanity-utils";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Services({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getServicesPage(locale);
  return <div>Services</div>;
}
