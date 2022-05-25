import { AnyAction } from "redux";
import { SET_LOADER } from "store/actions/ui";

export interface IUiState {
  ui: TUiStateData;
}

type TUiStateData = {
  loading: boolean;
};

const initState = {
  loading: false,
} as TUiStateData;

export const uiReducer = (ui: TUiStateData = initState, action: AnyAction) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload } as TUiStateData;
    default:
      return ui;
  }
};

const loadingState = (state: IUiState) => state.ui;

export const getLoadingState = (state: IUiState) => {
  return loadingState(state);
};
