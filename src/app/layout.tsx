import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Lincey Lab",
  description: "Lincey Lab/Marcos Max Forosteski da Silva Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${manrope.variable} antialiased font-sans`}
      >
        { children }
        <Analytics />
      </body>
    </html>
  );
}
