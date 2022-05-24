import { AnyAction } from "redux";
import { SET_DETAIL } from "store/actions/detail";
import { detailResultData } from "store/interfaces/movieTypes";

const initState = {} as never;

export interface IDetailState {
  detail: never | detailResultData;
}

export const detailReducer = (detail: detailResultData | never = initState, action: AnyAction) => {
  switch (action.type) {
    case SET_DETAIL:
      return action.payload as detailResultData;
    default:
      return detail as never;
  }
};

export const getDetail = (state: IDetailState) => state.detail;

export const getDetailRawData = (state: IDetailState) => {
  const detail = getDetail(state);

  return detail;
};
