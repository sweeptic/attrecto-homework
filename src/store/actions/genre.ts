import { featureTypes } from "store/interfaces/featureTypes";
import { genresResultData } from "store/interfaces/movieTypes";

export const GENRES = "[Genres]";

//action types
export const FETCH_GENRES = `${GENRES} FETCH`;
export const SET_GENRES = `${GENRES} SET`;

interface IFetchGenre {
  query: string;
}
interface IFetchGenreAction {
  payload: string;
  type: string;
}

interface ISetGenre {
  genres: genresResultData[];
}
interface ISetGenreAction {
  type: string;
  payload: {
    genres: genresResultData[];
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
