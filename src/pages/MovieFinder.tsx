import InputFilter from "components/input-items/InputFilter";
import MovieList from "components/movie-list/MovieList";
import ModalContainer from "components/overlays/ModalContainer";
import Spinner from "components/overlays/Spinner";
import Pagination from "components/pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { fetchGenres } from "store/actions/genre";
import { getLoadingState, uiState } from "store/reducers/uiReducer";
import { useAppDispatch } from "store/store";

// customize the InputFilter
const inputFilterSetup = {
  waitForKey: 3,
  waitForMsec: 1000,
  clearWhenDelete: true,
};

const MovieFinder = () => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const spinner = useSelector((state: uiState) => getLoadingState(state));
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getStaticCollections();
  }, []);

  // Fetch categories, languages, countryes, other static datas.
  function getStaticCollections() {
    dispatch(fetchGenres({ query: "" }));
  }

  return (
    <section className="movie-finder">
      <Spinner isLoading={spinner.loading} />
      <ModalContainer ref={inputRef} />
      <InputFilter {...inputFilterSetup} ref={inputRef} enteredFilter={enteredFilter} setEnteredFilter={setEnteredFilter} />
      <Pagination enteredFilter={enteredFilter} />
      <article className="result">
        <MovieList waitForKey={inputFilterSetup.waitForKey} ref={inputRef} />
      </article>
    </section>
  );
};

export default MovieFinder;
