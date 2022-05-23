import { detailResultData } from "store/interfaces/movieTypes";
export const DETAIL = "[Detail]";

//action types
export const FETCH_DETAIL = `${DETAIL} FETCH`;
export const CLEAN_DETAIL = `${DETAIL} CLEAN`;
export const SET_DETAIL = `${DETAIL} SET`;

interface IfetchDetail {
  query: string;
}

export interface IfetchDetailAction {
  type: string;
  payload: string;
}

interface IcleanDetailAction {
  type: string;
}

interface IsetDetail {
  movie: detailResultData | unknown;
}
export interface ISetDetailAction {
  type: string;
  payload: detailResultData | unknown;
  meta: { feature: string };
}

//action creators
export const fetchDetail = ({ query }: IfetchDetail): IfetchDetailAction => ({
  type: FETCH_DETAIL,
  payload: query,
});

export const cleanDetail = (): IcleanDetailAction => ({
  type: CLEAN_DETAIL,
});

export const setDetail = ({ movie }: IsetDetail): ISetDetailAction => ({
  type: SET_DETAIL,
  payload: movie,
  meta: { feature: DETAIL },
});
