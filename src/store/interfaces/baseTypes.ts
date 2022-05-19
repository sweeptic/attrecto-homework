import { IErrorObject } from "store/middleware/core/api";
import { MovieResponseData } from "store/reducers/moviesReducer";

export type TErrorObject = string | IErrorObject;
export type TResponseObject = MovieResponseData;

export interface IAction {
  type: string;
}
