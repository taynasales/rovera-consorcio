import { Container } from "@/app/_components/ui/Container";
import Title from "./Title";

export default function Hero() {
  return (
    <Container className="px-2 py-8 min-h-dvh xl:px-16">
      <Title
        parts={["O seu", "futuro", "chegou"]}
        aria-label="O seu futuro chegou"
      />
    </Container>
  );
}
