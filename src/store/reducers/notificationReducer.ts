import { AnyAction } from "redux";
import {
  IFetchingErrorMessage,
  IOriginalErrorMessage,
  REMOVE_NOTIFICATIONS,
  SET_NOTIFICATIONS,
} from "store/actions/notification";

const initState: INotificationItems = [];

export const notificationReducer = (notifications: INotificationItems = initState, action: AnyAction) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATIONS): {
      const errList = [...notifications, action.payload] as INotificationItems;

      return errList;
    }

    case action.type.includes(REMOVE_NOTIFICATIONS):
      return initState;

    default:
      return notifications;
  }
};

type INotificationItems = Array<string | IFetchingErrorMessage | IOriginalErrorMessage>;

export interface INotificationState {
  notifications: INotificationItems;
}

const getMessage = (state: INotificationState) => state.notifications;

export const getMessageRawData = (state: INotificationState) => {
  const message = getMessage(state);
  return message;
};
