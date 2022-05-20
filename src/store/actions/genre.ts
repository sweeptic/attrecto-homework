

export const GENRES = "[Genres]";

//action types
export const FETCH_GENRES = `${GENRES} FETCH`;
export const SET_GENRES = `${GENRES} SET`;

//action creators
export const fetchGenres = ({ query }: any): any => ({
  type: FETCH_GENRES,
  payload: query,
});

export const setGenres = ({ genres }: { genres: any }) => ({
  type: SET_GENRES,
  payload: genres,
  meta: { feature: GENRES },
});
