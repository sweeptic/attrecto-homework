import { Dispatch } from "react";
// import { IApiRequestAction } from "store/actions/api";

export const actionSplitterMiddleware = () => (next: Dispatch<any>) => (action: any) => {
  if (Array.isArray(action)) {
    action.forEach((_action) => next(_action));
  } else {
    next(action);
  }
};
