// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

interface IApiRequest {
  body: string | null;
  method: string;
  url: string;
  feature: string;
}

interface IApiResponse {
  response?: any;
  error?: any;
  feature: string;
}

//action creators
export const apiRequest = ({ body, method, url, feature }: IApiRequest) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
});

export const apiSuccess = ({ response, feature }: IApiResponse) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IApiResponse) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
