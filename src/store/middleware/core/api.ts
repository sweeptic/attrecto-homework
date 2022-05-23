import { Dispatch } from "react";
import { AnyAction } from "redux";
import { apiError, apiSuccess, API_REQUEST, IApiRequest } from "store/actions/api";
import { invalid1 } from "store/actions/notification";

export const apiMiddleware =
  ({ dispatch }: { dispatch: Dispatch<AnyAction> }) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    next(action);
    if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature }: IApiRequest = action.meta;

      fetchData({ url, body, method, feature, dispatch }); 
    }
  };

interface fetchDataParam extends IApiRequest {
  dispatch: Dispatch<AnyAction>;
}

function fetchData({ url, body, method, feature, dispatch }: fetchDataParam): void {
  fetch(url, { body, method })
    .then((response) => response.json())
    .then((response) => {
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
