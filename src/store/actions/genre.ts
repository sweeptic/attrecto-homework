export const GENRES = "[Genres]";

//action types
export const FETCH_GENRES = `${GENRES} FETCH`;
export const SET_GENRES = `${GENRES} SET`;

//action creators
export const fetchMovies = ({ query }: { query: string }) => ({
  type: FETCH_GENRES,
  payload: query,
});

export const setGenres = ({ genres, normalizeKey }: { genres: any; normalizeKey: string | null }) => ({
  type: SET_GENRES,
  payload: genres,
  meta: { normalizeKey, feature: GENRES },
});
