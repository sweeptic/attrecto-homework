import { AnyAction } from "redux";
import { SET_LOADER } from "store/actions/ui";

export interface uiState {
  ui: uiStateData;
}

type uiStateData = {
  loading: boolean;
};

const initState = {
  loading: false,
} as uiStateData;

export const uiReducer = (ui: uiStateData = initState, action: AnyAction) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload };
    default:
      return ui;
  }
};

const loadingState = (state: uiState) => state.ui;

export const getLoadingState = (state: uiState) => {
  return loadingState(state);
};
