

// action_types;
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

// TODO refactor
interface invalid1 {
  response: number;
  error: string;
  feature: string;
}

interface invalid2 {
  id: number;
  message: {
    response: number;
    error: string;
    feature: string;
  };
}

interface fetchErr1 {
  id: number;
  message: string;
}

export interface ISetNotification {
  message: string | invalid1 | invalid2 | fetchErr1;
  feature: string;
}
export interface ISetNotificationAction {
  type: string;
  payload: string | invalid1 | invalid2 | fetchErr1;
  meta: { feature: string };
}

export interface IRemoveNotificationAction {
  type: string;
}

// action creators
export const setNotification = ({ message, feature }: ISetNotification): ISetNotificationAction => {
  console.log(message);
  const r = {
    type: `${feature} ${SET_NOTIFICATIONS}`,
    payload: message,
    meta: { feature },
  };
  return r;
};

export const removeNotification = (): IRemoveNotificationAction => ({
  type: REMOVE_NOTIFICATIONS,
});
