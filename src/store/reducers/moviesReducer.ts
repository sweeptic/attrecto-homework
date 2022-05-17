import { SET_MOVIES } from "store/actions/movie";

const initState: any = {};

export const moviesReducer = (movies = initState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
    default:
      return movies;
  }
};

const getMovies = (state: any) => state.movies;

export const getMoviesRawData = (state: any) => {
  const movies = getMovies(state);
  return movies;
};
