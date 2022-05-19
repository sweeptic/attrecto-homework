import { Dispatch } from "react";
import { featureTypes } from "store/interfaces/featureTypes";

// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

type GenresData = {
  total: string;
};

type DetailData = {
  total: string;
};

type MovieData = {
  total: string;
};
export type responseObject = GenresData | DetailData | MovieData;

export interface IApiResponse {
  response?: GenresData | DetailData | MovieData;
  error?: IErrorObject;
  feature: typeof featureTypes[number];
}

export interface IActions {
  type: string;
  meta: IMeta 
  action: IActionObject;
}

export interface IActionObject {
  type: string;
  meta: IMeta | { feature: typeof featureTypes[number] };
  payload: responseObject | IErrorObject | string | null | undefined;
}

export interface IMeta {
  method: string;
  url: RequestInfo;
  feature: typeof featureTypes[number];
  body: string;
}

export interface IDispatchAction extends IMeta {
  dispatch: Dispatch<IApiRequestActionCreator | IActionObject>;
}

export type IApiRequestActionCreator = (arg: IMeta) => IActionObject;

export interface IErrorObject {
  response: string;
  error: string;
  feature: typeof featureTypes[number];
}

//action creators
export const apiRequest = ({ body, method, url, feature }: IMeta): IActionObject => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
});

// export type DispatchApiResult = (arg: IApiRequestParams) => IApiRequest;

export const apiSuccess = ({ response, feature }: IApiResponse): IActionObject => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IApiResponse): IActionObject => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
