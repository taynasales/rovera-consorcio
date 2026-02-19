"use client";

import { useTransition } from "react";
import { loginAction } from "@/app/actions";
import { Button } from "@/app/_components/ui/Button";
import { FullScreenLoader } from "@/app/_components/ui/FullScreenLoader";
import { ArrowRightIcon } from "lucide-react";

export function SimulateButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Button
        disabled={isPending}
        onClick={() => startTransition(async () => await loginAction())}
        icon={<ArrowRightIcon />}
        className="mt-4"
      >
        Simule agora
      </Button>
      {isPending && <FullScreenLoader />}
    </>
  );
}
