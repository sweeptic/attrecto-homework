import { createSelector } from "reselect";
import { TMoviesAppData } from "store/interfaces/movieTypes";
import { getDetail } from "store/reducers/detailReducer";
import { IGenresIndex, getGenresObject } from "store/reducers/genresReducer";
import { getMovies } from "store/reducers/moviesReducer";
import { getMovieGenres } from "./library";

export interface IMovieItem {
  id: number;
  title: string;
  release_date: string;
  itemCategories: string;
  poster_path: string;
}

export interface IMovieDetailItem extends IMovieItem {
  overview?: string;
  imdb_id?: string;
  runtime?: number;
  production_countries?: string;
}

export const getMoviesArray = createSelector(
  [getMovies, getGenresObject],
  (movies: TMoviesAppData[], genres: IGenresIndex): IMovieItem[] => {
    return movies.reduce((movieArray: IMovieItem[] = [], item: TMoviesAppData) => {
      const { id, title, name, poster_path, release_date } = item;
      const itemCategories = getMovieGenres(item.genre_ids, genres);

      movieArray.push({
        id,
        title: title ?? name,
        itemCategories,
        poster_path: poster_path,
        release_date,
      });

      return movieArray;
    }, []);
  }
);

export const getDetailObject = createSelector([getDetail], (detail) => {
  const resObj = {} as IMovieDetailItem;

  if (Object.keys(detail).length) {
    resObj.poster_path = detail.poster_path;
    resObj.title = detail.title;
    resObj.overview = detail.overview;
    /** extra fields */
    resObj.release_date = detail.release_date.toString();
    resObj.imdb_id = detail.imdb_id;
    resObj.runtime = detail.runtime;
    resObj.itemCategories = detail.genres.map((item) => item.name).join(", ");
    resObj.production_countries = detail.production_countries.map((item) => item.name).join(", ");
  }

  return resObj;
});
