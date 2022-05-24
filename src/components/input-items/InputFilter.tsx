import { forwardedRefHelper } from "helpers/tsHelpers";
import { Dispatch, ForwardedRef, forwardRef, SetStateAction, useEffect, useState } from "react";
import { cleanMovies, fetchMovies } from "store/actions/movie";
import { useAppDispatch } from "store/store";

interface IInputFilter {
  waitForKey: number;
  waitForMsec: number;
  clearWhenDelete: boolean;
  setEnteredFilter: Dispatch<SetStateAction<string>>;
  enteredFilter: string;
}

const InputFilter = forwardRef(
  (
    { waitForKey, waitForMsec, clearWhenDelete, setEnteredFilter, enteredFilter }: IInputFilter,
    inputRef: ForwardedRef<HTMLInputElement>
  ) => {
    const [isCleaned, setIsCleaned] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (enteredFilter.length >= waitForKey) {
        setIsCleaned(false);
        const timer = setTimeout(() => {
          if (enteredFilter === forwardedRefHelper(inputRef)?.value) {
            dispatch(fetchMovies({ query: enteredFilter, page: 1 }));
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
      if (inputRef != null && typeof inputRef !== "function") {
        inputRef.current?.focus();
      }
    }, [inputRef]);

    return (
      <form className="input-form">
        <label>Search:</label>
        <input ref={inputRef} type="text" value={enteredFilter} onChange={(event) => setEnteredFilter(event.target.value)} />
      </form>
    );
  }
);

export default InputFilter;
