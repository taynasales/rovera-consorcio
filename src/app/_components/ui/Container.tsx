import { ReactNode, ElementType } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  tag?: ElementType;
  gutter?: "default" | "full";
  className?: string;
}

const gutters = {
  default: "px-3 py-4",
  full: "px-3 py-4",
};

export function Container({
  children,
  tag: Component = "section",
  gutter = "default",
  className,
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-screen-xl",
        gutters[gutter],
        className,
      )}
    >
      {children}
    </Component>
  );
}
