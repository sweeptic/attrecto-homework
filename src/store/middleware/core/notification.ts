import { setNotification, SET_NOTIFICATIONS } from "store/actions/message";

export const notificationMiddleware = () => (next: any) => (action: any) => {
  if (action.type.includes(SET_NOTIFICATIONS)) {
    const { payload, meta } = action;
    const id = new Date().getMilliseconds();

    // enrich the original payload with an id
    const notification = {
      id,
      message: payload,
    };

    next(setNotification({ message: notification, feature: meta.feature }));
  }
  next(action);
};
