import { useEffect, useState } from "react";

import { useGetScreenSize } from "@/src/hooks";

import { UseSwipeArg } from "./useSwipe.type";

const axis = "clientX";
const touchDistinction = -100;
const enableSwipeToScreen = 769;

export const useSwipe = (setIsOpen: UseSwipeArg) => {
  const [touchStart, setTouchStart] = useState(0);

  const [screenSize] = useGetScreenSize();

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) =>
      setTouchStart(e.changedTouches[0][axis]);

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0][axis];

      if (touchStart - touchEnd < touchDistinction) {
        setIsOpen(false);
      }
    };

    if (screenSize < enableSwipeToScreen) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axis, enableSwipeToScreen, screenSize, touchDistinction, touchStart]);
};
