const initState: never[] = [];

export const moviesReducer = (movies = initState, action: { type: unknown; }) => {
  switch (action.type) {
    default:
      return movies;
  }
};
