import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "store/reducers/moviesReducer";
import { genresReducer } from "store/reducers/genresReducer";
import { moviesMiddleware } from "store/middleware/feature/movie";
import { apiMiddleware } from "store/middleware/core/api";
import { loggerMiddleware } from "store/middleware/core/logger";
import { actionSplitterMiddleware } from "store/middleware/core/actionSplitter";
import { genresMiddleware } from "store/middleware/feature/genre";
import { uiReducer } from "./reducers/uiReducer";
import { detailReducer } from "./reducers/detailReducer";
import { detailMiddleware } from "./middleware/feature/detail";
import { notificationMiddleware } from "./middleware/core/notification";
import { notificationReducer } from "./reducers/notificationReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducer = {
  ui: uiReducer,
  movies: moviesReducer,
  detail: detailReducer,
  genres: genresReducer,
  notifications: notificationReducer,
};

const featureMiddleware = [genresMiddleware, detailMiddleware, moviesMiddleware];

const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware /*, normalizeMiddleware*/,
  notificationMiddleware,
  loggerMiddleware,
];

const middleware = [...featureMiddleware, ...coreMiddleware];

export const store = configureStore({ reducer, middleware });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
