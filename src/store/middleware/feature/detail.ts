import { AnyAction } from "redux";
import { apiRequest, API_ERROR, API_SUCCESS } from "store/actions/api";
import { CLEAN_DETAIL, DETAIL, FETCH_DETAIL, setDetail } from "store/actions/detail";

import { setNotification } from "store/actions/notification";
import { setLoader } from "store/actions/ui";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const LANG = "en-US";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const detailMiddleware = () => (next: any) => (action: AnyAction) => {
  next(action);

  const QUERY = action.payload;
  const QUERY_URL = `https://api.themoviedb.org/3/movie/${QUERY}?api_key=${API_KEY}&language=${LANG}`;

  switch (action.type) {
    case FETCH_DETAIL:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: QUERY_URL,
          feature: DETAIL,
        }),

        setLoader({ state: true, feature: DETAIL }),
      ]);
      break;

    case CLEAN_DETAIL:
      next(setDetail({ movie: {} }));
      break;

    case `${DETAIL} ${API_SUCCESS}`:
      next([setDetail({ movie: action.payload }), setLoader({ state: false, feature: DETAIL })]);
      break;

    case `${DETAIL} ${API_ERROR}`:
      next([setNotification({ message: action.payload, feature: DETAIL }), setLoader({ state: false, feature: DETAIL })]);
      break;

    default:
  }
};
