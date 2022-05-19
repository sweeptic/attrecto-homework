import { featureTypes } from "store/interfaces/featureTypes";
import { IEnrichedNotificationObject } from "store/middleware/core/notification";
import { IFeatureAction } from "./api";

// action_types;
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

export interface INotificationAction {
  message: IEnrichedNotificationObject;
  feature: typeof featureTypes[number];
}

// action creators
export const setNotification = ({ message, feature }: INotificationAction): IFeatureAction => {
  // console.log('message', message);

  return {
    type: `${feature} ${SET_NOTIFICATIONS}`,
    payload: message,
    meta: { feature },
  };
};
// (property) IFeatureAction.payload: IPayload

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATIONS,
});
