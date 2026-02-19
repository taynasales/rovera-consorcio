import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/app/_components/auth/LogoutButton";
import { Metadata } from "next";
import { Car, ChevronRight, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Simulação | Rovera Consórcio",
  description: "Área exclusiva para simulação de consórcio.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function SimulacaoPage() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="min-h-screen pt-32 pb-10 px-6 max-w-4xl mx-auto relative">
      <div className="absolute top-32 right-6">
        <LogoutButton />
      </div>

      <header className="mb-10">
        <h1 className="font-goldman text-3xl uppercase tracking-tight">
          Olá,{" "}
          <span className="text-[#A6F6FF]">
            {session.user?.name?.split(" ")[0]}
          </span>
        </h1>
        <p className="text-zinc-400 mt-2 font-geist">
          Escolha o nível da sua próxima conquista:
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        <button className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-[#A6F6FF]/50 transition-all text-left">
          <Car className="w-10 h-10 text-[#A6F6FF] mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="font-goldman text-xl uppercase tracking-wider">
            Veículos
          </h2>
          <ChevronRight className="absolute right-6 bottom-8 w-5 h-5 text-zinc-700 group-hover:text-[#A6F6FF] transition-all" />
        </button>

        <button className="group relative flex flex-col p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-[#A6F6FF]/50 transition-all text-left">
          <Crown className="w-10 h-10 text-[#A6F6FF] mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="font-goldman text-xl uppercase tracking-wider">
            Veículos Premium
          </h2>
          <ChevronRight className="absolute right-6 bottom-8 w-5 h-5 text-zinc-700 group-hover:text-[#A6F6FF] transition-all" />
        </button>
      </div>
    </div>
  );
}
