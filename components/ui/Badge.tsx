import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}