"use client";

import { useTransition } from "react";
import { loginAction } from "@/app/actions";
import { ButtonButton } from "@/app/_components/ui/ButtonButton";
import { FullScreenLoader } from "@/app/_components/ui/FullScreenLoader";

export function SimulateButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <ButtonButton
        disabled={isPending}
        onClick={() => startTransition(async () => await loginAction())}
        className="text-accent"
      >
        Simule Agora
      </ButtonButton>
      {isPending && <FullScreenLoader />}
    </>
  );
}
