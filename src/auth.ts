import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const user = auth?.user;
      const isLoggedIn = Boolean(user);
      const isOnSimulation = nextUrl.pathname.startsWith("/simulacao");

      if (isOnSimulation) {
        if (isLoggedIn) return true;
        return false;
      }
      return true;
    },
  },
});
