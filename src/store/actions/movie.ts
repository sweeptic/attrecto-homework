export const MOVIES = "[Movies]";

//action types
export const FETCH_MOVIES = `${MOVIES} FETCH`;
export const CLEAN_MOVIES = `${MOVIES} CLEAN`;
export const SET_MOVIES = `${MOVIES} SET`;


//action creators
export const fetchMovies = ({ query, page }: any): any => {
  return {
    type: FETCH_MOVIES,
    payload: query,
    meta: { page },
  };
};

export const cleanMovies = () => ({
  type: CLEAN_MOVIES,
});

export const setMovies = ({ movies }: { movies: any }) => ({
  type: SET_MOVIES,
  payload: movies,
  meta: { feature: MOVIES },
});
