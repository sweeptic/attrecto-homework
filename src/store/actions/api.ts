import { TGenresFetchData, TMoviesFetchData, TDetailFetchData } from "store/interfaces/movieTypes";
// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export interface IApiRequest {
  body: null;
  method: string;
  url: string;
  feature: string;
}

export interface IApiRequestAction {
  type: string;
  payload: null;
  meta: IApiRequest;
}

interface IApiSuccess {
  response: TGenresFetchData | TMoviesFetchData | TDetailFetchData;
  feature: string;
}

export interface IApiSuccessAction {
  type: string;
  payload: TGenresFetchData | TMoviesFetchData | TDetailFetchData;
  meta: { feature: string };
}

interface IErrorObject {
  response: number;
  error: string;
  feature: string;
}

interface IApiError {
  error: string | IErrorObject;
  feature: string;
}

export interface IApiErrorAction {
  type: string;
  payload: string | IErrorObject;
  meta: { feature: string };
}

//action creators
export const apiRequest = ({ body, method, url, feature }: IApiRequest): IApiRequestAction => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature, body },
});

export const apiSuccess = ({ response, feature }: IApiSuccess): IApiSuccessAction => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IApiError): IApiErrorAction => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
