import { SET_MOVIES } from "store/actions/movie";

export const initMoviesState: any = { results: {} };

export const moviesReducer = (movies = initMoviesState, action: any) => {
  switch (action.type) {
    case SET_MOVIES: {
      console.log(action.payload);

      return action.payload;
    }
    default:
      return movies;
  }
};
