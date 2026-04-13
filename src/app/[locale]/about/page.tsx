import { getDictionary } from "@/lib/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Network({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  return <></>;
}
