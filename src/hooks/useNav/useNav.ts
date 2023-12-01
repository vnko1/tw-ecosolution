import { useEffect, useRef } from "react";
import { useAppContext } from "@/src/context";
import { useOnScreen } from "../useOnScreen/useOnScreen";

export const useNav = (navLinkId: string) => {
  const ref = useRef(null);
  const { setActiveLinkId } = useAppContext();

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(navLinkId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnScreen, navLinkId]);

  return ref;
};
