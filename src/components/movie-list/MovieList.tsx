import MovieItem from "components/movie-item/MovieItem";
import { forwardedRefHelper } from "helpers/tsHelpers";
import { ForwardedRef, forwardRef, Key, memo, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "store/actions/detail";

import { genresItem } from "store/reducers/genresReducer";
import { getSearchCount, MovieResponseData } from "store/reducers/moviesReducer";
import { getMoviesArray } from "store/selectors/feature_selectors";
import { useAppSelector } from "store/store";

interface IMovieList {
  waitForKey: number;
}

const MovieList = forwardRef(({ waitForKey }: IMovieList, inputRef: ForwardedRef<HTMLInputElement>) => {
  const moviesData = useSelector((state: { movies: MovieResponseData; genres: { genres: genresItem[] } }) => getMoviesArray(state));
  const count = useAppSelector((state) => getSearchCount(state));
  const dispatch = useDispatch();
  const moviesList = getMoviesList();
  const movieListContent = getMovieListContent();

  function onMovieSelectHandler(item: number) {
    dispatch(fetchDetail({ query: item.toString() }));
  }

  function getMoviesList(): ReactNode[] {

    return moviesData.map((item: { id: Key | null | undefined }) => <MovieItem key={item.id} item={item} onDetails={onMovieSelectHandler} />);
  }

  function getMovieListContent() {
    function getContent() {
      const inputLength = forwardedRefHelper(inputRef)?.value.length;
      let content: string | ReactNode[];

      if (inputLength !== undefined && (inputLength < waitForKey || !inputLength)) {
        content = `Please enter at least ${waitForKey} letters.`;
      } else {
        content = moviesList.length > 0 ? moviesList : "There are no search results.";
      }
      return content;
    }
    return getContent();
  }

  return (
    <>
      <span>{`${count} Search result(s)`}</span>
      <div>{movieListContent}</div>
    </>
  );
});

export default memo(MovieList);
