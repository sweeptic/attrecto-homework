import { useCallback, useState, useEffect } from "react";

//global variable
//this can also be exchanged for the object
// eg: {indexPos: 0, specifiedPagePos: 0, ....}
let position = 0;

export function getScrollPosition() {
  return position;
}

export const usePageLastPosition = (initialState = position) => {
  const [lastPosition, setLastPosition] = useState(initialState);

  const handleScroll = useCallback(() => {
    position = window.pageYOffset;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setLastPosition(position);
    window.scrollTo(0, lastPosition);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, lastPosition]);
};
