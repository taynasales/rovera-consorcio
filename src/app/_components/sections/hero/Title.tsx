import clsx from "clsx";

type TitleProps = {
  parts: readonly [string, string, string];
};

const PART_BASE = "bg-clip-text text-transparent text-center uppercase";

export default function Title({ parts }: TitleProps) {
  return (
    <h1
      className={clsx(
        `
          grid grid-cols-12 sm:grid-cols-[max-content_max-content] xl:grid-cols-12
          items-start sm:place-content-center xl:place-content-start
          sm:gap-x-2 xl:gap-x-0
          leading-none font-goldman
        `,
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          PART_BASE,
          "col-span-12 sm:col-span-2 md:col-span-12",
          "text-[clamp(1rem,2.2vw,1.25rem)] md:text-[clamp(5rem,10vw,9.125rem)]",
          "tracking-widest md:tracking-normal",
          "mb-4 md:mb-0 md:mt-4 md:font-bold md:inline-block",
          "bg-gradient-to-b from-white to-[#525252] md:from-white md:from-[33%] md:to-[#525252] md:to-[64%]",
        )}
      >
        {parts[0]}
      </span>
      <span
        aria-hidden="true"
        className={clsx(
          PART_BASE,
          "col-span-12 sm:col-span-1 md:col-span-6",
          "text-[clamp(3rem,6vw,4rem)] md:text-[clamp(3.5rem,6vw,4.75rem)]",
          "bg-gradient-to-r from-white from-[18%] to-[#999999]",
          "font-bold md:text-left md:inline-block",
        )}
      >
        {parts[1]}
      </span>
      <span
        aria-hidden="true"
        className={clsx(
          PART_BASE,
          "col-span-12 sm:col-span-1 md:col-span-6",
          "text-[clamp(3rem,6vw,4rem)] md:text-[clamp(3.5rem,6vw,4.75rem)]",
          "md:justify-self-end",
          "bg-gradient-to-l from-white from-[12%] to-[#999999]",
          "font-bold md:text-right md:inline-block",
        )}
      >
        {parts[2]}
      </span>
    </h1>
  );
}
