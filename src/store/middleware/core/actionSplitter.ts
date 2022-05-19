import { Dispatch } from "react";
import { IRequestAction } from "store/actions/api";

export const actionSplitterMiddleware = () => (next: Dispatch<IRequestAction>) => (action: IRequestAction) => {
  if (Array.isArray(action)) {
    action.forEach((_action) => next(_action));
  } else {
    next(action);
  }
};
