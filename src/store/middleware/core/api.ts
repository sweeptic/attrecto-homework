import { Dispatch } from "react";
import { apiError, apiSuccess, API_REQUEST, IFeatureAction, IFetchRequestMeta, IRequestAction } from "store/actions/api";

export interface IErrorObject {
  response: string;
  error: string;
  feature: string;
}

export const apiMiddleware =
  ({ dispatch }: { dispatch: Dispatch<IRequestAction | IFeatureAction> }) =>
  (next: Dispatch<IRequestAction>) =>
  (action: IRequestAction) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
      //   console.log(action);

      const { body, url, method, feature } = action.meta;

      fetchData({ url, body, method, feature, dispatch });
    }
  };

// (parameter) feature: "[Detail]" | "[Genres]" | "[Movies]"
function fetchData({ url, body, method, feature, dispatch }: IFetchRequestMeta) {
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
    .catch((error_) => {
      const error: string = error_.message;
      dispatch(apiError({ error, feature }));
    });
}
