import { GENRES, setGenres } from "store/actions/genre";
import { MOVIES, setMovies } from "store/actions/movie";

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
      if (action.type.includes(MOVIES)) {
        next(setMovies({ movies, normalizeKey: null }));
      }
      if (action.type.includes(GENRES)) {
        next(setGenres({ movies, normalizeKey: null }));
      }
    } else {
      next(action);
    }
  };
