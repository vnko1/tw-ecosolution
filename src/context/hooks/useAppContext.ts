import { createContext, useContext } from "react";
import { AppContextValues } from "../AppProvider.type";

export const AppContext = createContext<AppContextValues | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext)
    throw new Error(
      "useAppContext has to be used within <AppContext.Provider>"
    );
  return appContext;
};
