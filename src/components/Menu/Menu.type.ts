import { Dispatch, SetStateAction } from "react";

export type MenuProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};
