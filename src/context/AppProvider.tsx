import { FC, useState } from "react";

import { AppContext } from "./hooks/useAppContext";
import { IAppProviderProps } from "./AppProvider.type";

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");
  return (
    <AppContext.Provider value={{ activeLinkId, setActiveLinkId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
