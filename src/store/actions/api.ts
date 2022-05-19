import { Dispatch } from "react";
import { Action } from "redux";
import { featureTypes } from "store/interfaces/featureTypes";
import { NotificationObject } from "store/middleware/core/notification";
import { MovieResponseData } from "store/reducers/moviesReducer";

// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export type ErrorObject = string | IErrorObject;
export type ResponseObject = MovieResponseData;

export type IPayload = ResponseObject | ErrorObject | NotificationObject | undefined;

export interface IRequestMeta {
  url: string;
  body: string | null;
  method: string;
  feature: typeof featureTypes[number];
}

export interface IFetchRequestMeta extends IRequestMeta {
  dispatch: Dispatch<IRequestAction | IFeatureAction>;
}

export interface IRequestAction extends Action {
  type: string;
  payload: string | null;
  meta: IRequestMeta;
}

export interface IFeatureAction extends Action {
  type: string;
  payload: IPayload;
  meta: { feature: typeof featureTypes[number] };
}

export interface IFeatureMeta {
  feature: typeof featureTypes[number];
  response?: ResponseObject;
  error?: string | IErrorObject;
}

export interface IErrorObject {
  response: string;
  error: string;
  feature: string;
}

//action creators
export const apiRequest = ({ body, method, url, feature }: IRequestMeta): IRequestAction => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature, body },
});

export const apiSuccess = ({ response, feature }: IFeatureMeta): IFeatureAction => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IFeatureMeta): IFeatureAction => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
