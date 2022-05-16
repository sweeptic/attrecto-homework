import InputFilter from "components/input-items/InputFilter";
import MovieList from "components/movie-list/MovieList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "store/actions/genre";
import { getDetailRawData } from "store/reducers/detailReducer";
import { getLoadingState } from "store/reducers/uiReducer";

// customize the InputFilter
const inputFilterSetup = {
  waitForKey: 3,
  waitForMsec: 1000,
  clearWhenDelete: true,
};

const MovieFinder = () => {
  const spinner = useSelector((state) => getLoadingState(state));
  const detail = useSelector((state) => getDetailRawData(state));
  const dispatch = useDispatch();

  let contents;

  useEffect(() => {
    console.log("detail", detail);
  }, [detail]);

  useEffect(() => {
    getStaticCollections();
  }, []);

  // fetch categories, languages, other static datas
  function getStaticCollections() {
    dispatch(fetchGenres({ query: "" }));
  }

  // TODO
  if (spinner.loading) {
    contents = <div className="loader"></div>;
  } else {
    contents = "";
  }

  return (
    <section>
      {contents}
      <div>
        <InputFilter {...inputFilterSetup} />
      </div>
      <article className="result">
        <MovieList />
      </article>
    </section>
  );
};

export default MovieFinder;
