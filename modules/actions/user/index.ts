import { SET_USER_INFO, userInfo } from "./interface";

const setUserInfo = (payload: userInfo) => ({
  type: SET_USER_INFO,
  payload,
});

export const actions = {
  setUserInfo,
};

export type ActionType = ReturnType<typeof setUserInfo>;
