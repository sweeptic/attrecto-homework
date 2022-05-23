import { Middleware } from "redux";

export const actionSplitterMiddleware: Middleware = () => (next) => (action) => {
  if (Array.isArray(action)) {
    action.forEach((_action) => next(_action));
  } else {
    next(action);
  }
};
