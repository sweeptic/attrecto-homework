import { createSelector } from "reselect";
import { getGenresObject } from "store/reducers/genresReducer";
import { getMovies } from "store/reducers/moviesReducer";
import { getMovieGenres } from "./library";

export const getMoviesArray: any = createSelector([getMovies, getGenresObject], (movies: any, genres: any) => {
  return movies.reduce((movieArray: any = [], item: any) => {
    const { id, title, name, overview } = item;

    const itemCategories = getMovieGenres(item.genre_ids, genres);

    movieArray.push({
      id,
      title: title ?? name,
      overview,
      itemCategories,
    });

    return movieArray;
  }, []);
});
