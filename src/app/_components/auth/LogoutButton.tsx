"use client";

import { useTransition } from "react";
import { logoutAction } from "@/app/actions";
import { ButtonButton } from "@/app/_components/ui/ButtonButton";
import { FullScreenLoader } from "@/app/_components/ui/FullScreenLoader";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <>
      <ButtonButton onClick={handleLogout} disabled={isPending}>
        Sair da conta
      </ButtonButton>

      {isPending && <FullScreenLoader />}
    </>
  );
}
