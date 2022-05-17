import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanMovies, fetchMovies } from "store/actions/movie";

interface IInputFilter {
  waitForKey: number;
  waitForMsec: number;
  clearWhenDelete: boolean;
}

const Input = forwardRef(({ waitForKey, waitForMsec, clearWhenDelete }: IInputFilter, inputRef: any) => {
  // React.forwardRef((props, ref)
  const [enteredFilter, setEnteredFilter] = useState("");
  const [isCleaned, setIsCleaned] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const inputValue = inputRef?.current.value;
    if (enteredFilter.length >= waitForKey) {
      setIsCleaned(false);
      const timer = setTimeout(() => {
        if (enteredFilter === inputValue) {
          dispatch(fetchMovies({ query: enteredFilter }));
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
    if (isCleaned && enteredFilter && clearWhenDelete) {
      dispatch(cleanMovies());
    }
  }, [isCleaned]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return <input ref={inputRef} type="text" value={enteredFilter} onChange={(event) => setEnteredFilter(event.target.value)} />;
});

export default Input;
