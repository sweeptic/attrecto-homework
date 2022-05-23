import { createSelector } from "reselect";
import { moviesData } from "store/interfaces/movieTypes";
import { genresIdxS, getGenresObject } from "store/reducers/genresReducer";
import { getMovies } from "store/reducers/moviesReducer";
import { getMovieGenres } from "./library";

export interface IGetMoviesArrayRes {
  id: number;
  title: string;
  overview: string;
  itemCategories: string;
}

export const getMoviesArray = createSelector([getMovies, getGenresObject], (movies: moviesData[], genres: genresIdxS): IGetMoviesArrayRes[] => {
  return movies.reduce((movieArray: IGetMoviesArrayRes[] = [], item: moviesData) => {
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
