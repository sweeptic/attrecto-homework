import { useEffect, useRef, useState } from "react";

interface IInputFilter {
  waitForKey: number;
  waitForMsec: number;
}

const Input = ({ waitForKey, waitForMsec }: IInputFilter) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      const timer = setTimeout(() => {
        if (enteredFilter === inputValue && enteredFilter.length >= waitForKey) {
          console.log("send action");
        }
      }, waitForMsec);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [enteredFilter]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={enteredFilter}
      onChange={(event) => setEnteredFilter(event.target.value)}
    />
  );
};

export default Input;
