// action_types;
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

export interface IOriginalErrorMessage {
  response: number;
  error: string;
  feature: string;
}

export interface IEnrichedErrorMessage {
  id: number;
  message: IOriginalErrorMessage;
}

export interface IFetchingErrorMessage {
  id: number;
  message: string;
}

type TNotificationMessage = string | IOriginalErrorMessage | IEnrichedErrorMessage | IFetchingErrorMessage;

export interface ISetNotification {
  message: TNotificationMessage;
  feature: string;
}
export interface ISetNotificationAction {
  type: string;
  payload: TNotificationMessage;
  meta: { feature: string };
}

export interface IRemoveNotificationAction {
  type: string;
}

// action creators
export const setNotification = ({ message, feature }: ISetNotification): ISetNotificationAction => ({
  type: `${feature} ${SET_NOTIFICATIONS}`,
  payload: message,
  meta: { feature },
});

export const removeNotification = (): IRemoveNotificationAction => ({
  type: REMOVE_NOTIFICATIONS,
});
