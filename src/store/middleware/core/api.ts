import { Dispatch } from "react";
import {
  apiError,
  apiSuccess,
  API_REQUEST,
  IApiRequestActionCreator,
  IMeta,
  IDispatchAction,
  IActions,
  IErrorObject,
  IActionObject,
} from "store/actions/api";

export const apiMiddleware =
  ({ dispatch }: { dispatch: Dispatch<IApiRequestActionCreator | IActionObject> }) =>
  (next: Dispatch<IActions>) =>
  (action: IActions) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature }: IMeta = action.meta;

      fetchData({ url, body, method, feature, dispatch });
    }
  };

// (parameter) feature: "[Detail]" | "[Genres]" | "[Movies]"
function fetchData({ url, body, method, feature, dispatch }: IDispatchAction) {
  fetch(url, { body, method })
    .then((response) => response.json())
    .then((response) => {
      if (response.success === false) {
        const error: IErrorObject = {
          response: response.status_code,
          error: response.status_message,
          feature: feature,
        };
        dispatch(apiError({ error, feature }));
      } else {
        dispatch(apiSuccess({ response, feature }));
      }
    })
    .catch((error) => {
      dispatch(apiError({ error, feature }));
    });
}
