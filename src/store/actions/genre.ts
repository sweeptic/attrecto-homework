import { TGenresFetchData } from "store/interfaces/movieTypes";
export const GENRES = "[Genres]";

//action types
export const FETCH_GENRES = `${GENRES} FETCH`;
export const SET_GENRES = `${GENRES} SET`;

interface IFetchGenre {
  query: string;
}
export interface IFetchGenreAction {
  payload: string;
  type: string;
}

export interface ISetGenre {
  genres: TGenresFetchData[];
}

export interface ISetGenreAction {
  type: string;
  payload: {
    genres: TGenresFetchData[];
  };
  meta: {
    feature: string;
  };
}

//action creators
export const fetchGenres = ({ query }: IFetchGenre): IFetchGenreAction => ({
  type: FETCH_GENRES,
  payload: query,
});

export const setGenres = ({ genres }: { genres: ISetGenre }): ISetGenreAction => ({
  type: SET_GENRES,
  payload: genres,
  meta: { feature: GENRES },
});
