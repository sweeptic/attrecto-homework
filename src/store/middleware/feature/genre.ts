import { apiRequest, API_ERROR, API_SUCCESS } from "store/actions/api";
import { FETCH_GENRES, GENRES, setGenres } from "store/actions/genre";

const API_KEY = "1c5abaaeaa13c66b570ad3042a0d51f4"; // TODO
const LANG = "en-US";

export const genresMiddleware = () => (next: any) => (action: any) => {
  // next(action);

  const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  switch (action.type) {
    case FETCH_GENRES:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: GENRE_URL,
          feature: GENRES,
        }),
      ]);
      break;

    case `${GENRES} ${API_SUCCESS}`:
      next(setGenres({ movies: action.payload.genres, normalizeKey: "id" }));
      break;

    case `${GENRES} ${API_ERROR}`:
      break;

    default:
      next(action);
  }
};
