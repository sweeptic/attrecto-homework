import { ForwardedRef } from "react";

export function forwardedRefHelper(inputRef: ForwardedRef<HTMLInputElement>) {
  let returnValue: HTMLInputElement | null = null;
  if (inputRef != null && typeof inputRef !== "function") {
    returnValue = inputRef?.current;
  }
  return returnValue;
}
