import { apiRequest, API_ERROR, API_SUCCESS } from "store/actions/api";
import { FETCH_GENRES, GENRES, setGenres } from "store/actions/genre";

import { setNotification } from "store/actions/notification";
import { setLoader } from "store/actions/ui";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const LANG = "en-US";

export const genresMiddleware = () => (next: any) => (action: any) => {
  console.log("ACTION", action);

  switch (action.type) {
    case FETCH_GENRES:
      {
        const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;
        next([
          apiRequest({
            body: null,
            method: "GET",
            url: GENRE_URL,
            feature: GENRES,
          }),
          setLoader({ state: true, feature: GENRES }),
        ]);
      }
      break;

    case `${GENRES} ${API_SUCCESS}`:
      next([setGenres({ genres: action.payload }), setLoader({ state: false, feature: GENRES })]);
      break;

    case `${GENRES} ${API_ERROR}`:
      next([setNotification({ message: action.payload, feature: GENRES }), setLoader({ state: false, feature: GENRES })]);
      break;

    default:
      next(action);
  }
};
