import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/_components/layout/Header";

export const metadata: Metadata = {
  title: "Rovera | Consórcio de Veículos",
  description:
    "Acesse o simulador da Rovera e conquiste seu veículo com as melhores taxas do mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-surface antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
