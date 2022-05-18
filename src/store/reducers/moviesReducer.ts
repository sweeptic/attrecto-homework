import { SET_MOVIES } from "store/actions/movie";

export const initMoviesState: any = { results: [] };

export const moviesReducer = (movies = initMoviesState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;

    default:
      return movies;
  }
};

export const getMovies = (state: any) => state.movies.results;
