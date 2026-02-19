"use server";

import { signIn, signOut } from "@/auth";

export async function loginAction() {
  await signIn("google", { redirectTo: "/simulacao" });
}

export async function logoutAction() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await signOut({ redirectTo: "/" });
}
