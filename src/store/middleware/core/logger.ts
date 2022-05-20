import { Dispatch } from "react";
import { RootState } from "store/store";

export const loggerMiddleware =
  ({ getState }: { getState: () => RootState }) =>
  (next: Dispatch<any>) =>
  (action: any) => {
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
