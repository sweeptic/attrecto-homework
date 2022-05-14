export const MOVIES = "[Movies]";

//action types
export const FETCH_MOVIES = `${MOVIES} FETCH`;
export const CLEAN_MOVIES = `${MOVIES} CLEAN`;
export const SET_MOVIES = `${MOVIES} SET`;

//action creators
export const fetchMovies = ({ query }: { query: string }) => ({
  type: FETCH_MOVIES,
  payload: query,
});

export const cleanMovies = () => ({
  type: CLEAN_MOVIES,
});

export const setMovies = ({ movies, normalizeKey }: { movies: any; normalizeKey: string | null }) => ({
  type: SET_MOVIES,
  payload: movies,
  meta: { normalizeKey, feature: MOVIES },
});
