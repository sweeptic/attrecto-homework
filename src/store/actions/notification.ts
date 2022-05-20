
// action_types;
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

// action creators
export const setNotification = ({ message, feature }: any): any => {
  return {
    type: `${feature} ${SET_NOTIFICATIONS}`,
    payload: message,
    meta: { feature },
  };
};

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATIONS,
});
