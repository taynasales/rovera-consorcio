import Image from "next/image";
import { Container } from "@/app/_components/ui/Container";
import Title from "./Title";

export default function Hero() {
  return (
    <Container className="relative px-2 py-8 xl:px-16">
      <Title
        parts={["O seu", "futuro", "chegou"]}
        aria-label="O seu futuro chegou"
      />
      <Image
        src="/images/hero/rovera-x1.png"
        alt="Rovera X1, carro elétrico em destaque"
        width={620}
        height={440}
        priority
        className="
        block mx-auto
        xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2
        xl:-translate-y-[calc(0%+5.6rem)]
        xl:-ml-3
        z-10
        "
      />
    </Container>
  );
}
