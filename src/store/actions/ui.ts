// action_types;
export const SET_LOADER = "SET_LOADER";

// action creators
export const setLoader = ({ state, feature }: { state: any; feature: any }) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature },
});
