import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanMovies, fetchMovies } from "store/actions/movie";
import { getMovesRawData } from "store/reducers/moviesReducer";

interface IInputFilter {
  waitForKey: number;
  waitForMsec: number;
  clearWhenDelete: boolean;
}

const Input = ({ waitForKey, waitForMsec, clearWhenDelete }: IInputFilter) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const [isCleaned, setIsCleaned] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const inputValue = inputRef.current?.value;
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
};

export default Input;
