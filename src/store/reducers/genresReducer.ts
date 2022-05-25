import { AnyAction } from "redux";
import { createSelector } from "reselect";
import { SET_GENRES } from "store/actions/genre";

const initState = {} as never;

interface IGenresState {
  genres: { genres: TGenresItem[] };
}

export interface TGenresItem {
  id: number;
  name: string;
}

export const genresReducer = (genres: IGenresState = initState, action: AnyAction) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload as IGenresState;

    default:
      return genres;
  }
};

const getGenres = (state: IGenresState) => state.genres.genres;

export interface IGenresIndex {
  [key: string]: string;
}

export const getGenresObject = createSelector(getGenres, (genre: TGenresItem[]) => {
  return genre?.reduce((acc: IGenresIndex, item: TGenresItem) => {
    acc[item["id"]] = item.name;
    return acc;
  }, {});
});
