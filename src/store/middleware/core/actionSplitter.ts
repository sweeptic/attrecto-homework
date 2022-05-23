import { Dispatch } from "react";
import { AnyAction } from "redux";
import { IApiErrorAction, IApiRequestAction, IApiSuccessAction } from "store/actions/api";
import { IfetchDetailAction, ISetDetailAction } from "store/actions/detail";
import { IFetchGenreAction, ISetGenreAction } from "store/actions/genre";
import { IFetchMoviesAction } from "store/actions/movie";
import { ISetLoaderAction } from "store/actions/ui";
// import { IApiRequestAction } from "store/actions/api";

// export type actionTypes =
//   | IApiRequestAction
//   | IApiSuccessAction
//   | IApiErrorAction
//   | ISetLoaderAction
//   | ISetGenreAction
//   | ISetDetailAction
//   | IFetchMoviesAction
//   | IFetchGenreAction
//   | IfetchDetailAction;

// export type actionTypesArray = Array<actionTypes>;

// type dispatchedActions = ISetDetailAction | IFetchGenreAction;

export const actionSplitterMiddleware = () => (next: any) => (action: any) => {
  if (Array.isArray(action)) {
    action.forEach((_action) => next(_action));
  } else {
    next(action);
  }
};
