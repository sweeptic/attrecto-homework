import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "store/reducers/moviesReducer";
import { moviesMiddleware } from "store/middleware/feature/movie";
import { apiMiddleware } from "store/middleware/core/api";
import { normalizeMiddleware } from "store/middleware/core/normalize";
import { loggerMiddleware } from "store/middleware/core/logger";
import { actionSplitterMiddleware } from "store/middleware/core/actionSplitter";

const reducer = {
  movies: moviesReducer,
};

const featureMiddleware = [moviesMiddleware];

const coreMiddleware = [actionSplitterMiddleware, apiMiddleware, normalizeMiddleware, loggerMiddleware];

const middleware = [...featureMiddleware, ...coreMiddleware];

export const store = configureStore({ reducer, middleware });
