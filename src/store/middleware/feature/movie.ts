import { apiRequest, API_ERROR, API_SUCCESS } from "store/actions/api";
import { CLEAN_MOVIES, FETCH_MOVIES, MOVIES, setMovies } from "store/actions/movie";

const API_KEY = "1c5abaaeaa13c66b570ad3042a0d51f4";
const LANG = "en-US";

export const moviesMiddleware = () => (next: any) => (action: any) => {
  next(action);

  const QUERY = action.payload;
  const MOVIES_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=${LANG}&query=${QUERY}&page=1&include_adult=false"`;

  switch (action.type) {
    case FETCH_MOVIES:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: MOVIES_URL,
          feature: MOVIES,
        }),
      ]);
      break;

    case CLEAN_MOVIES:
      next(setMovies({ movies: {}, normalizeKey: "" }));
      break;

    case `${MOVIES} ${API_SUCCESS}`:
      next(setMovies({ movies: action.payload.results, normalizeKey: "id" }));
      break;

    case `${MOVIES} ${API_ERROR}`:
      break;

    default:
  }
};
