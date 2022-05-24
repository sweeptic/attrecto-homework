import { Dispatch } from "react";
import { Middleware } from "redux";
import { apiError, apiSuccess, API_REQUEST, IApiErrorAction, IApiRequest, IApiSuccessAction } from "store/actions/api";
import { invalid1 } from "store/actions/notification";

export const apiMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature }: IApiRequest = action.meta;

      fetchData({ url, body, method, feature, dispatch });
    }
  };

interface fetchDataParam extends IApiRequest {
  dispatch: Dispatch<IApiErrorAction | IApiSuccessAction>;
}

function fetchData({ url, body, method, feature, dispatch }: fetchDataParam): void {
  fetch(url, { body, method })
    .then((response) => response.json())
      .then((response) => {
        console.log('fetch', response);
        
      if (response.success === false) {
        const error: invalid1 = {
          response: response.status_code,
          error: response.status_message,
          feature: feature,
        };
        dispatch(apiError({ error, feature }));
      } else {
        dispatch(apiSuccess({ response, feature }));
      }
    })
    .catch((error_) => {
      const error: string = error_.message;
      dispatch(apiError({ error, feature }));
    });
}
