import { ReactNode } from "react";

export type UIButtonProps = {
  onClick: () => void;
  children?: ReactNode;
  variant: "contained" | "outlined" | "text" | "icon";
  classNames?: string;
  icon?: string;
  iconSize?: number;
  iconClassNames?: string;
};
