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
export const getSearchPage = (state: any) => state.movies.page;
export const getSearchTotal = (state: any) => state.movies.total_pages;

export const getSearchCount = (state: any) => {
  const count = getSearchResults(state);
  return count;
};

export const getSearchActualPage = (state: any) => {
  const actual_page = getSearchPage(state);
  return actual_page;
};

export const getSearchTotalPage = (state: any) => {
  const total_page = getSearchTotal(state);
  return total_page;
};

export const getActualResultCount = (state: any) => {
  const actual_results = getMovies(state);
  return actual_results.count();
};
