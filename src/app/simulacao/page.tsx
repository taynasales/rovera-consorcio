import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/app/_components/auth/LogoutButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulação | Rovera Consórcio",
  description: "Área exclusiva para simulação de consórcio.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function Simulation() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const { name, email, image } = session.user;

  return <LogoutButton />;
}
