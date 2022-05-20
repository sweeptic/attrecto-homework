import { AnyAction } from "redux";
import { SET_MOVIES } from "store/actions/movie";
import { moviesData } from "store/interfaces/movieTypes";

export const initMoviesState: MovieResponseData = { results: [], total_results: 0, page: 0, total_pages: 0 };

export type MovieResponseData = {
  page: number;
  results: moviesData[] | [];
  total_pages: number;
  total_results: number;
};

// type moviesAction = IRequestAction | IFeatureAction;

export interface moviesState {
  movies: MovieResponseData;
}

export const moviesReducer = (movies: MovieResponseData = initMoviesState, action: AnyAction) => {
  switch (action.type) {
    case SET_MOVIES: {


      return action.payload;
    }

    default:
      return movies;
  }
};

export const getMovies = (state: moviesState) => state.movies.results;
export const getSearchResults = (state: moviesState) => state.movies.total_results;
export const getSearchPage = (state: moviesState) => state.movies.page;
export const getSearchTotal = (state: moviesState) => state.movies.total_pages;

export const getSearchCount = (state: moviesState) => {
  const count = getSearchResults(state);
  return count;
};

export const getSearchActualPage = (state: moviesState) => {
  const actual_page = getSearchPage(state);
  return actual_page;
};

export const getSearchTotalPage = (state: moviesState) => {
  const total_page = getSearchTotal(state);
  return total_page;
};

// export const getActualResultCount = (state: moviesState) => {
//   const actual_results = getMovies(state);
//   return actual_results.count();
// };
