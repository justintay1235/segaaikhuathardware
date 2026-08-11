import type { Metadata } from "next";
import { Exo_2, Jost } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["700", "800", "900"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sega Pumps | Precision Water Pumps, Engineered for Legacy",
  description:
    "Sega is a premium water pump manufacturer engineering precision, reliability, and elegance into every drop moved — for industry, agriculture, and home.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory-50 text-maroon-950">
        {children}
      </body>
    </html>
  );
}
