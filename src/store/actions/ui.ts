// action_types;
export const SET_LOADER = "SET_LOADER";

interface ISetLoader {
  state: boolean;
  feature: string;
}
interface ISetLoaderAction {
  type: string;
  payload: boolean;
  meta: { feature: string };
}

// action creators
export const setLoader = ({ state, feature }: ISetLoader): ISetLoaderAction => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature },
});
