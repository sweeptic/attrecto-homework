import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "store/reducers/moviesReducer";
import { genresReducer } from "store/reducers/genresReducer";
import { moviesMiddleware } from "store/middleware/feature/movie";
import { apiMiddleware } from "store/middleware/core/api";
import { normalizeMiddleware } from "store/middleware/core/normalize";
import { loggerMiddleware } from "store/middleware/core/logger";
import { actionSplitterMiddleware } from "store/middleware/core/actionSplitter";
import { genresMiddleware } from "store/middleware/feature/genre";
import { uiReducer } from "./reducers/uiReducer";

const reducer = {
  ui: uiReducer,
  movies: moviesReducer,
  genres: genresReducer,
};

const featureMiddleware = [genresMiddleware, moviesMiddleware];

const coreMiddleware = [actionSplitterMiddleware, apiMiddleware, normalizeMiddleware, loggerMiddleware];

const middleware = [...featureMiddleware, ...coreMiddleware];

export const store = configureStore({ reducer, middleware });
