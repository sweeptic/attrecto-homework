import InputFilter from "components/input-items/InputFilter";
import MovieList from "components/movie-list/MovieList";
import ModalContainer from "components/overlays/ModalContainer";
import Spinner from "components/overlays/Spinner";
import Pagination from "components/pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "store/actions/genre";
import { getLoadingState } from "store/reducers/uiReducer";

// customize the InputFilter
const inputFilterSetup = {
  waitForKey: 3,
  waitForMsec: 1000,
  clearWhenDelete: true,
};

const MovieFinder = () => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const spinner = useSelector((state) => getLoadingState(state));
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getStaticCollections();
  }, []);

  // Fetch categories, languages, countryes, other static datas.
  function getStaticCollections() {
    dispatch(fetchGenres({ query: "" }));
  }

  return (
    <section>
      <Spinner isLoading={spinner.loading} />
      <ModalContainer ref={inputRef} />
      <div>
        <InputFilter {...inputFilterSetup} ref={inputRef} enteredFilter={enteredFilter} setEnteredFilter={setEnteredFilter} />
      </div>
      <div>
        <Pagination enteredFilter={enteredFilter} />
      </div>
      <article className="result">
        <MovieList waitForKey={inputFilterSetup.waitForKey} ref={inputRef} />
      </article>
    </section>
  );
};

export default MovieFinder;
