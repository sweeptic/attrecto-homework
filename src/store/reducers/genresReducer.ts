import { SET_GENRES } from "store/actions/genre";

const initState: undefined[] = [];

export const genresReducer = (ui = initState, action: any) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload;
    default:
      return ui;
  }
};

// const getMovies = (state: any) => state.movies;

// export const getMovesRawData = (state: any) => {
//   const movies = getMovies(state);
//   return movies;
// };
