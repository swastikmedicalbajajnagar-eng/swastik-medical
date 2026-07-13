import { InputHTMLAttributes } from "react";

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
    />
  );
}