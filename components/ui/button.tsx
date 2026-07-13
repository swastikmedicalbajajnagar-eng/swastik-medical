import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}