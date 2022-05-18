import { SET_MOVIES } from "store/actions/movie";

export const initMoviesState: any = { results: [], total_results: 0 };

export const moviesReducer = (movies = initMoviesState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;

    default:
      return movies;
  }
};

export const getMovies = (state: any) => state.movies.results;
export const getSearchResults = (state: any) => state.movies.total_results;

export const getSearchCount = (state: any) => {
  const count = getSearchResults(state);
  return count;
};
