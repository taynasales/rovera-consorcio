import Image from "next/image";
import { Container } from "@/app/_components/ui/Container";
import Title from "./Title";
import { SimulateButton } from "@/app/_components/auth/SimulateButton";

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
        block mx-auto aspect-[620/450] 
        xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-[calc(0%+5rem)] 
        xl:-ml-3 
        z-20"
      />

      <div
        className="text-center absolute mt-[13rem]
      left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
      z-30 
      xl:mt-[19rem] 
      font-geist"
      >
        <h2 className="font-bold text-xl">Rovera X1</h2>
        <p className="text-base font-light xl:text-xl">
          100% elétrico, 0% juros.
        </p>

        <SimulateButton />
      </div>
    </Container>
  );
}
