import { SET_KEYWORD } from "./interface";

const setKeyword = (payload: string) => ({
  type: SET_KEYWORD,
  payload,
});

export const actions = {
  setKeyword,
};

export type ActionType = ReturnType<typeof setKeyword>;
