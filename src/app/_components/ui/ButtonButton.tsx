import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  icon?: ReactNode;
  bg?: string;
  border?: string;
  text?: string;
  iconClassName?: string;
}

export function ButtonButton({
  isLoading,
  disabled,
  children,
  icon,
  bg = "bg-transparent",
  border = "border-[#A6F6FF]",
  text = "text-white",
  iconClassName = "text-[#A6F6FF]",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={`
        group flex items-center justify-center px-6 py-3
        border skew-x-[-20deg] transition-all duration-200
        ${bg} 
        ${border}
        ${className || ""}
      `}
      {...props}
    >
      <span className={`inline-block skew-x-[20deg] font-bold ${text}`}>
        {children}
      </span>

      {icon && (
        <span className={`inline-block skew-x-[20deg] ml-2 ${iconClassName}`}>
          {icon}
        </span>
      )}
    </button>
  );
}
