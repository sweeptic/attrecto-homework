export const GENRES = "[Genres]";

//action types
export const FETCH_GENRES = `${GENRES} FETCH`;
export const SET_GENRES = `${GENRES} SET`;

//action creators
export const fetchGenres = ({ query }: { query: string }) => ({
  type: FETCH_GENRES,
  payload: query,
});

export const setGenres = ({ movies, normalizeKey }: { movies: any; normalizeKey: string | null }) => ({
  type: SET_GENRES,
  payload: movies,
  meta: { normalizeKey, feature: GENRES },
});
