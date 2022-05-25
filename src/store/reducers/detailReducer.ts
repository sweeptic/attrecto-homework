import { AnyAction } from "redux";
import { SET_DETAIL } from "store/actions/detail";
import { TDetailFetchData } from "store/interfaces/movieTypes";

const initState = {} as never;

export interface IDetailState {
  detail: never | TDetailFetchData;
}

export const detailReducer = (detail: TDetailFetchData | never = initState, action: AnyAction) => {
  switch (action.type) {
    case SET_DETAIL:
      return action.payload as TDetailFetchData;
    default:
      return detail as never;
  }
};

export const getDetail = (state: IDetailState) => state.detail;

export const getDetailRawData = (state: IDetailState) => {
  const detail = getDetail(state);

  return detail;
};
