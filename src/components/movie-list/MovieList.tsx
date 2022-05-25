import MovieItem from "components/movie-item/MovieItem";
import { forwardedRefHelper } from "helpers/tsHelpers";
import { ForwardedRef, forwardRef, memo, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "store/actions/detail";
import { TGenresItem } from "store/reducers/genresReducer";
import { getSearchCount, TMovieResponseData } from "store/reducers/moviesReducer";
import { getMoviesArray } from "store/selectors/feature_selectors";
import { useAppSelector } from "store/store";

interface IMovieList {
  waitForKey: number;
}

const MovieList = forwardRef(({ waitForKey }: IMovieList, inputRef: ForwardedRef<HTMLInputElement>) => {
  const moviesData = useSelector((state: { movies: TMovieResponseData; genres: { genres: TGenresItem[] } }) =>
    getMoviesArray(state)
  );
  const count = useAppSelector((state) => getSearchCount(state));
  const dispatch = useDispatch();
  const moviesList = getMoviesList();
  const movieListContent = getMovieListContent();

  function onMovieSelectHandler(item: number) {
    dispatch(fetchDetail({ query: item.toString() }));
  }

  function getMoviesList(): ReactNode[] {
    return moviesData.map((item) => <MovieItem key={item.id} item={item} onDetails={onMovieSelectHandler} details={false} />);
  }

  function getMovieListContent() {
    function getContent() {
      const inputLength = forwardedRefHelper(inputRef)?.value.length;
      let content: string | ReactNode[];

      if (!inputLength || (inputLength && inputLength < waitForKey)) {
        content = `Please enter at least ${waitForKey} letters.`;
      } else {
        content = moviesList.length ? moviesList : "There are no search results.";
      }

      return content;
    }
    return getContent();
  }

  return (
    <>
      <span className="search-result">{`${count} Search result(s)`}</span>
      <div className="list-content">{movieListContent}</div>
    </>
  );
});

export default memo(MovieList);
