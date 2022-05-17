import { SET_GENRES } from "store/actions/genre";

const initState: undefined[] = [];

export const genresReducer = (genres = initState, action: any) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload;
    default:
      return genres;
  }
};

// const getMovies = (state: any) => state.movies;

// export const getMovesRawData = (state: any) => {
//   const movies = getMovies(state);
//   return movies;
// };
