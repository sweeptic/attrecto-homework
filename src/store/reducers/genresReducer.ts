import { AnyAction } from "redux";
import { createSelector } from "reselect";
import { SET_GENRES } from "store/actions/genre";

const initState = {} as never;

interface genresState {
  genres: { genres: genresItem[] };
}

export interface genresItem {
  id: number;
  name: string;
}

export const genresReducer = (genres: genresState = initState, action: AnyAction) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload;

    default:
      return genres;
  }
};

const getGenres = (state: genresState) => state.genres.genres;

export interface genresIdxS {
  [key: string]: string;
}

export const getGenresObject = createSelector(getGenres, (genre: genresItem[]) => {
  return genre?.reduce((acc: genresIdxS, item: genresItem) => {
    acc[item["id"]] = item.name;
    return acc;
  }, {});
});
