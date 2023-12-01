import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAppProviderProps {
  children: ReactNode;
}

export type AppContextValues = {
  activeLinkId: string;
  setActiveLinkId: Dispatch<SetStateAction<string>>;
};
