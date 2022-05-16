import { apiRequest, API_ERROR, API_SUCCESS } from "store/actions/api";
import { CLEAN_DETAIL, DETAIL, FETCH_DETAIL, setDetail } from "store/actions/detail";
import { setLoader } from "store/actions/ui";

const API_KEY = "1c5abaaeaa13c66b570ad3042a0d51f4";
const LANG = "en-US";

export const detailMiddleware = () => (next: any) => (action: any) => {
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
      next(setDetail({ movies: {}, normalizeKey: "" }));
      break;

    case `${DETAIL} ${API_SUCCESS}`:
      next([setDetail({ movies: action.payload, normalizeKey: "" }), setLoader({ state: false, feature: DETAIL })]);
      break;

    case `${DETAIL} ${API_ERROR}`:
      break;

    default:
  }
};
