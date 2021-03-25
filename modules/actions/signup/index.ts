import {
  SIGNUP_CHANGE_EMAIL_ERROR_TEXT,
  SIGNUP_CHANGE_NICKNAME_ERROR_TEXT,
  SIGNUP_CHANGE_PASSWORD_ERROR_TEXT,
  SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT,
} from "./interface";

const changeEmailErrorText = (payload: string) => ({
  type: SIGNUP_CHANGE_EMAIL_ERROR_TEXT,
  payload,
});
const changeNicknameErrorText = (payload: string) => ({
  type: SIGNUP_CHANGE_NICKNAME_ERROR_TEXT,
  payload,
});
const changePasswordErrorText = (payload: string) => ({
  type: SIGNUP_CHANGE_PASSWORD_ERROR_TEXT,
  payload,
});
const changePasswordConfirmErrorText = (payload: string) => ({
  type: SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT,
  payload,
});

export const actions = {
  changeEmailErrorText,
  changeNicknameErrorText,
  changePasswordErrorText,
  changePasswordConfirmErrorText,
};

export type SignUpAction =
  | ReturnType<typeof changeEmailErrorText>
  | ReturnType<typeof changeNicknameErrorText>
  | ReturnType<typeof changePasswordErrorText>
  | ReturnType<typeof changePasswordConfirmErrorText>;
