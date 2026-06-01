import "../globals.css";
import { getDictionary } from "@/lib/get-dictionary";
import { Footer, Header } from "@/components";
import ScrollToTopOnNavigation from "@/components/ScrollToTopOnNavigation";
import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "optional",
  variable: "--font-google-sans",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE
      ? "F&B Heroes – Strategieberatung für Gastronomie & Robotic Gastronomy"
      : "F&B Heroes – Strategy Consulting for Gastronomy & Robotic Gastronomy",
    description: isDE
      ? "F&B Heroes unterstützt Gastronomiebetriebe mit strategischer Beratung, Netzwerk und innovativen Robotic-Gastronomy-Lösungen für nachhaltigen Markterfolg."
      : "F&B Heroes supports food & beverage businesses with strategic consulting, network access, and innovative robotic gastronomy solutions for lasting market success.",
    colorScheme: "light",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");

  return (
    <html lang={locale} style={{ colorScheme: "light" }} className={googleSans.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <ScrollToTopOnNavigation />
        <Header dict={dict.navigation} lang={locale} />
        <main>{children}</main>
        <Footer dict={dict} lang={locale} />
      </body>
    </html>
  );
}
