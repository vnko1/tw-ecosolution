import { InputHTMLAttributes } from "react";

export type TextFieldProps = {
  id: string;
  label: string;
  name: string;
  component?: "input" | "textarea";
  classNames?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
