import { AnyAction } from "redux";
import { REMOVE_NOTIFICATIONS, SET_NOTIFICATIONS } from "store/actions/notification";

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

export interface IEnrichedErrorMessage {
  id: number;
  message: string;
}

interface IApierrorMessage {
  error: string;
  feature: string;
  response: number;
}

type INotificationItems = Array<string | IEnrichedErrorMessage | IApierrorMessage>;

export interface INotificationState {
  notifications: INotificationItems;
}

const getMessage = (state: INotificationState) => state.notifications;

export const getMessageRawData = (state: INotificationState) => {
  const message = getMessage(state);
  return message;
};
