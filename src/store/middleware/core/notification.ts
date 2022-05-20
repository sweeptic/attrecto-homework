import { Dispatch } from "react";
import { setNotification, SET_NOTIFICATIONS } from "store/actions/notification";


export const notificationMiddleware = () => (next: Dispatch<any>) => (action: any) => {


// console.log("ACTION", action);

  if (action.type.includes(SET_NOTIFICATIONS)) {
    const { payload, meta } = action;


    const id = new Date().getMilliseconds();

    // enrich the original payload with an id

    const notification: any = {
      id,
      message: payload,
    };

    next(setNotification({ message: notification, feature: meta.feature }));
  }
  next(action);
};
