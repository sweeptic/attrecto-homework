import { createSelector } from "reselect";
import { moviesData } from "store/interfaces/movieTypes";
import { getDetail } from "store/reducers/detailReducer";
import { genresIdxS, getGenresObject } from "store/reducers/genresReducer";
import { getMovies } from "store/reducers/moviesReducer";
import { getMovieGenres } from "./library";

export interface IGetMoviesArrayRes {
  id: number;
  title: string;
  itemCategories: string;
  poster_path: string;
}

export const getMoviesArray = createSelector(
  [getMovies, getGenresObject],
  (movies: moviesData[], genres: genresIdxS): IGetMoviesArrayRes[] => {
    return movies.reduce((movieArray: IGetMoviesArrayRes[] = [], item: moviesData) => {
      const { id, title, name, poster_path } = item;
      const itemCategories = getMovieGenres(item.genre_ids, genres);

      movieArray.push({
        id,
        title: title ?? name,
        itemCategories,
        poster_path: poster_path,
      });
 
      return movieArray;
    }, []);
  }
);

interface IDetailRes extends IGetMoviesArrayRes {
  overview: string;
  release_date: string;
  imdb_id: string;
  runtime: number;
  production_countries: string;
}

export const getDetailObject = createSelector([getDetail], (detail) => {
  const resObj = {} as IDetailRes;

  if (Object.keys(detail).length) {
    resObj.poster_path = detail.poster_path;
    resObj.title = detail.title;
    resObj.overview = detail.overview;
    /** extra fields */
    resObj.release_date = detail.release_date.toString();
    resObj.imdb_id = detail.imdb_id; // IMDB link????
    resObj.runtime = detail.runtime;
    resObj.itemCategories = detail.genres.map((item) => item.name).join(", ");
    resObj.production_countries = detail.production_countries.map((item) => item.name).join(", ");
  }

  return resObj;
});
