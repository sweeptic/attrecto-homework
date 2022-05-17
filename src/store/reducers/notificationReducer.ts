import { REMOVE_NOTIFICATIONS, SET_NOTIFICATIONS } from "store/actions/message";

const initState: any[] = [];

export const notificationReducer = (notifications = initState, action: any) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATIONS): {
      const errList = [...notifications, action.payload];
      return errList;
    }

    case action.type.includes(REMOVE_NOTIFICATIONS):
      return initState;

    default:
      return notifications;
  }
};

const getMessage = (state: any) => state.notifications;

export const getMessageRawData = (state: any) => {
  const message = getMessage(state);
  return message;
};
