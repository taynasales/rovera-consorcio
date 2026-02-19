"use client";

import { useTransition } from "react";
import { logoutAction } from "@/app/actions";
import { FullScreenLoader } from "@/app/_components/ui/FullScreenLoader";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <>
      <button
        onClick={handleLogout}
        disabled={isPending}
        title="Sair da conta"
        className="text-zinc-500 hover:text-[#A6F6FF] 
        transition-colors p-2 
        disabled:opacity-50 
        cursor-pointer outline-none 
        focus-visible:ring-2 focus-visible:ring-[#A6F6FF] rounded-lg"
      >
        <LogOut className="w-5 h-5" />
      </button>

      {isPending && <FullScreenLoader />}
    </>
  );
}
