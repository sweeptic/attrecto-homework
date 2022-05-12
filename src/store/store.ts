import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "store/reducers/moviesReducer";

const reducer = {
  movies: moviesReducer,
};

export const store = configureStore({
  reducer,
});
