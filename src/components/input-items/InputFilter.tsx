import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";

interface IInputFilter {
  waitForKey: number;
  waitForMsec: number;
}

const Input = ({ waitForKey, waitForMsec }: IInputFilter) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const [isCleaned, setIsCleaned] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  //   const dispatch = useDispatch();

  useEffect(() => {
    const inputValue = inputRef.current?.value;
    if (enteredFilter.length >= waitForKey) {
      setIsCleaned(false);
      const timer = setTimeout(() => {
        if (enteredFilter === inputValue) {
          console.log("send action with filter:", enteredFilter);
          // dispatch(fetchMovies(enteredFilter));
        }
      }, waitForMsec);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsCleaned(true);
    }
  }, [enteredFilter]);

  useEffect(() => {
    if (isCleaned && enteredFilter) {
      console.log("send action to clean");
      // dispatch(cleanMovies(""));
    }
  }, [isCleaned]);

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
