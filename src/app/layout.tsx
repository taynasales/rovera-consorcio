import type { Metadata } from "next";
import { Goldman, Geist } from "next/font/google";
import Header from "@/app/_components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rovera | Consórcio de Veículos",
  description:
    "Acesse o simulador da Rovera e conquiste seu veículo com as melhores taxas do mercado.",
};

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-goldman",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${goldman.variable} ${geist.variable}`}>
      <body className="bg-black text-white antialiased font-geist">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
