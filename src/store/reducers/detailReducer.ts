import { SET_DETAIL } from "store/actions/detail";

const initState: undefined[] = [];

export const detailReducer = (detail = initState, action: any) => {
  switch (action.type) {
    case SET_DETAIL:
      return action.payload;
    default:
      return detail;
  }
};

const getDetail = (state: any) => state.detail;

export const getDetailRawData = (state: any) => {
  const detail = getDetail(state);
  return detail;
};
