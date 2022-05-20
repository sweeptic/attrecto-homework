import { Dispatch } from "react";
import { apiError, apiSuccess, API_REQUEST } from "store/actions/api";

export interface IErrorObject {
  response: string;
  error: string;
  feature: string;
}

export const apiMiddleware =
  ({ dispatch }: { dispatch: Dispatch<any> }) =>
  (next: Dispatch<any>) =>
  (action: any) => {
    // console.log("ACTION", action);

    next(action);
    if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature }: any = action.meta;

      fetchData({ url, body, method, feature, dispatch });
    }
  };

function fetchData({ url, body, method, feature, dispatch }: any): void {
  fetch(url, { body, method })
    .then((response) => response.json())
    .then((response) => {
      if (response.success === false) {
        const error: any = {
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
      const error: any = error_.message;
      dispatch(apiError({ error, feature }));
    });
}
