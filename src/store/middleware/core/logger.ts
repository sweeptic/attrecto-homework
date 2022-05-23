import { Middleware } from "redux";

export const loggerMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const { NODE_ENV } = process.env;

    if (NODE_ENV === "development") {
      console.group(`${action.type}`);

      console.group("CURRENT STATE:");
      console.log(getState());
      console.groupEnd();

      next(action);

      console.group("NEXT STATE: ");
      console.log(getState());
      console.groupEnd();

      console.groupEnd();
    } else {
      next(action);
    }
  };
