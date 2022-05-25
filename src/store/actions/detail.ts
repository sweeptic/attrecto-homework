import { TDetailFetchData } from "store/interfaces/movieTypes";

export const DETAIL = "[Detail]";
//action types
export const FETCH_DETAIL = `${DETAIL} FETCH`;
export const CLEAN_DETAIL = `${DETAIL} CLEAN`;
export const SET_DETAIL = `${DETAIL} SET`;

interface IFetchDetail {
  query: string;
}

export interface IFetchDetailAction {
  type: string;
  payload: string;
}

interface ICleanDetailAction {
  type: string;
}

type TMovieState = TDetailFetchData | unknown;

interface ISetDetail {
  movie: TMovieState;
}

export interface ISetDetailAction {
  type: string;
  payload: TMovieState;
  meta: { feature: string };
}

//action creators
export const fetchDetail = ({ query }: IFetchDetail): IFetchDetailAction => ({
  type: FETCH_DETAIL,
  payload: query,
});

export const cleanDetail = (): ICleanDetailAction => ({
  type: CLEAN_DETAIL,
});

export const setDetail = ({ movie }: ISetDetail): ISetDetailAction => ({
  type: SET_DETAIL,
  payload: movie,
  meta: { feature: DETAIL },
});
