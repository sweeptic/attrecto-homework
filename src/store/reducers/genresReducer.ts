import { createSelector } from "reselect";
import { SET_GENRES } from "store/actions/genre";

const initState: any = {};

export const genresReducer = (genres = initState, action: any) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload;

    default:
      return genres;
  }
};

const getGenres = (state: any) => state.genres.genres;

export const getGenresObject = createSelector(getGenres, (genre: any) => {
  return genre?.reduce((acc: any, item: any) => {
    acc[item["id"]] = item.name;
    return acc;
  }, {});
});
