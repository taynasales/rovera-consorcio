import { ReactNode, ElementType } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  tag?: ElementType;
  className?: string;
}

export function Container({
  children,
  tag: Component = "section",
  className,
}: ContainerProps) {
  return (
    <Component className={clsx("mx-auto w-full max-w-screen-xl", className)}>
      {children}
    </Component>
  );
}
