import InputFilter from "components/input-items/InputFilter";
import MovieList from "components/movie-list/MovieList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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

  let contents;

  // TODO
  if (spinner.loading) {
    contents = <div className="loader"></div>;
  } else {
    contents = "";
  }

  useEffect(() => {
    console.log("detail", detail);
  }, [detail]);

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
