import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  icon?: ReactNode;
  bg?: string;
  border?: string;
  text?: string;
  iconClassName?: string;
}

export function Button({
  isLoading,
  disabled,
  children,
  icon,
  bg = "bg-transparent",
  border = "border-[var(--color-accent)]",
  text = "text-[var(--color-accent)]",
  iconClassName = "text-[var(--color-accent)]",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={`
        group flex items-center justify-center px-6 py-3
        border rounded-[8px] skew-x-[-20deg] transition-all duration-200
        font-goldman text-[16px] lg:text-[20px] leading-[1] text-center lowercase leading-[0] cursor-pointer
        transition-all duration-500 ease-in-out
        hover:border-[#a6f6ff]/60
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
