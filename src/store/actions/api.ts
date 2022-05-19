import { Dispatch } from "react";
import { IAction, TErrorObject, TResponseObject } from "store/interfaces/baseTypes";
import { featureTypes } from "store/interfaces/featureTypes";
import { IEnrichedNotificationObject } from "store/middleware/core/notification";

// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export type TFeaturePayload = TResponseObject | TErrorObject | IEnrichedNotificationObject | undefined;

export interface IRequestMeta {
  url: string;
  body: string | null;
  method: string;
  feature: typeof featureTypes[number];
}

export interface IFetchRequestMeta extends IRequestMeta {
  dispatch: Dispatch<IRequestAction | IFeatureAction>;
}

export interface IRequestAction extends IAction {
  payload: string | null;
  meta: IRequestMeta;
}

export interface IFeatureAction extends IAction {
  payload: TFeaturePayload;
  meta: { feature: typeof featureTypes[number] };
}

export interface IFeatureMeta {
  feature: typeof featureTypes[number];
  response?: TResponseObject;
  error?: TErrorObject;
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
