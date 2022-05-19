import { Dispatch } from "react";

import { IFeatureAction } from "store/actions/api";
import { setNotification, SET_NOTIFICATIONS } from "store/actions/notification";

export interface INotificationObject {
  message: string;
}

export interface IEnrichedNotificationObject extends INotificationObject {
  id: number;
}

export const notificationMiddleware = () => (next: Dispatch<IFeatureAction>) => (action: IFeatureAction) => {
  if (action.type.includes(SET_NOTIFICATIONS)) {
    const { payload, meta } = action;
    console.log(payload);

    const id = new Date().getMilliseconds();

    // enrich the original payload with an id

    const notification: IEnrichedNotificationObject = {
      id,
      message: payload as string,
    };

    next(setNotification({ message: notification, feature: meta.feature }));
  }
  next(action);
};
