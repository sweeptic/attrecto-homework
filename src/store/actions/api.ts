// action_types;
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

//action creators
export const apiRequest = ({ body, method, url, feature }: any): any => {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: body,
    meta: { method, url, feature, body },
  };
};

export const apiSuccess = ({ response, feature }: any): any => {
  const res = {
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: { feature },
  };

  return res;
};

export const apiError = ({ error, feature }: any): any => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
