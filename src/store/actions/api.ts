// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";
import { Action } from "redux";
import { genresResultData, moviesResultData, detailResultData } from "store/interfaces/movieTypes";

export interface IApiRequest {
  body: null;
  method: string;
  url: string;
  feature: string;
}

export interface IApiRequestAction extends Action {
  type: string;
  payload: null;
  meta: {
    body: null;
    method: string;
    url: string;
    feature: string;
  };
}

interface IApiSuccess {
  response: genresResultData | moviesResultData | detailResultData;
  feature: string;
}

export interface IApiSuccessAction {
  meta: { feature: string };
  type: string;
  payload: genresResultData | moviesResultData | detailResultData;
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
  meta: { feature: string };
  payload: string | IErrorObject;
  type: string;
}

//action creators
export const apiRequest = ({ body, method, url, feature }: IApiRequest): IApiRequestAction  => ({
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
