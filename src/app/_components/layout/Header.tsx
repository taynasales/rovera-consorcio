import Link from "next/link";
import { Container } from "../ui/Container";
import RoveraWordmark from "@/assets/rovera-wordmark.svg";

export default function Header() {
  return (
    <Container tag="header" className="px-2 py-4">
      <Link
        href="/"
        className="focus-visible:ring-2"
        aria-label="Rovera Consórcio - Página inicial"
      >
        <RoveraWordmark aria-hidden="true" focusable="false" />
      </Link>
    </Container>
  );
}
