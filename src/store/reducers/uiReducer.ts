import { SET_LOADER } from "store/actions/ui";

const initState = {
  loading: false,
};

export const uiReducer = (ui = initState, action: any) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload };
    default:
      return ui;
  }
};

const loadingState = (state: any) => state.ui;

export const getLoadingState = (state: any) => {
  return loadingState(state);
};
