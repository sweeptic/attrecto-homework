
import { moviesResultData } from "store/interfaces/movieTypes";
export const MOVIES = "[Movies]";

//action types
export const FETCH_MOVIES = `${MOVIES} FETCH`;
export const CLEAN_MOVIES = `${MOVIES} CLEAN`;
export const SET_MOVIES = `${MOVIES} SET`;

interface IFetchMovies {
  query: string;
  page: number;
}
interface IFetchMoviesAction {
  payload: string;
  type: string;
  meta: {
    page: number;
  };
}

interface ISetMovies {
  movies: moviesResultData;
}
interface ISetMoviesAction {
  meta: { feature: string };
  payload: moviesResultData;
  type: string;
}

interface ICleanMoviesAction {
  type: string;
}

//action creators
export const fetchMovies = ({ query, page }: IFetchMovies): IFetchMoviesAction => ({
  type: FETCH_MOVIES,
  payload: query,
  meta: { page },
});

export const cleanMovies = (): ICleanMoviesAction => ({
  type: CLEAN_MOVIES,
});

export const setMovies = ({ movies }: ISetMovies): ISetMoviesAction => ({
  type: SET_MOVIES,
  payload: movies,
  meta: { feature: MOVIES },
});
