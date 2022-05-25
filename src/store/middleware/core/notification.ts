import { Middleware } from "redux";
import { IEnrichedErrorMessage, setNotification, SET_NOTIFICATIONS } from "store/actions/notification";


export const notificationMiddleware: Middleware = () => (next) => (action) => {
  if (action.type.includes(SET_NOTIFICATIONS)) {
    const { payload, meta } = action;

    const id = new Date().getMilliseconds();

    // enrich the original payload with an id
    const notification: IEnrichedErrorMessage = {
      id,
      message: payload,
    };

    next(setNotification({ message: notification, feature: meta.feature }));
  }

  next(action);
};
