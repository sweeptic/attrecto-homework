import { apiRequest, API_ERROR, API_SUCCESS } from "store/actions/api";
import { setNotification } from "store/actions/message";
import { CLEAN_MOVIES, FETCH_MOVIES, MOVIES, setMovies } from "store/actions/movie";
import { setLoader } from "store/actions/ui";
import { initMoviesState } from "store/reducers/moviesReducer";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const LANG = "en-US";

export const moviesMiddleware = () => (next: any) => (action: any) => {
  next(action);

  switch (action.type) {
    case FETCH_MOVIES:
      {
        const QUERY = action.payload;
        const PAGE = action.meta.page;
        const MOVIES_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=${LANG}&query=${QUERY}&page=${PAGE}&include_adult=false"`;
        next([
          apiRequest({
            body: null,
            method: "GET",
            url: MOVIES_URL,
            feature: MOVIES,
          }),

          setLoader({ state: true, feature: MOVIES }),
        ]);
      }
      break;

    case CLEAN_MOVIES:
      next(setMovies({ movies: initMoviesState, normalizeKey: "", listObj: "" }));
      break;

    case `${MOVIES} ${API_SUCCESS}`:
      next([setMovies({ movies: action.payload, normalizeKey: "id", listObj: "results" }), setLoader({ state: false, feature: MOVIES })]);
      break;

    case `${MOVIES} ${API_ERROR}`:
      next([setNotification({ message: action.payload, feature: MOVIES }), setLoader({ state: false, feature: MOVIES })]);
      break;

    default:
  }
};
