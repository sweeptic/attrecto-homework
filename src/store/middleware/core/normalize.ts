import { setMovies } from "store/actions/movie";

export const normalizeMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    if (action.type.includes("SET") && action.meta.normalizeKey) {
      // transform the data structure
      const movies = action.payload.reduce((acc: any, item: any) => {
        acc[item[action.meta.normalizeKey]] = item;
        return acc;
      }, {});

      next(setMovies({ movies, normalizeKey: null }));
    }
  };
