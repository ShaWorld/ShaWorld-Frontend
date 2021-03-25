const SIGNUP_CHANGE_EMAIL_ERROR_TEXT = "SIGNUP_CHANGE_EMAIL_ERROR_TEXT" as const;
const SIGNUP_CHANGE_NICKNAME_ERROR_TEXT = "SIGNUP_CHANGE_NICKNAME_ERROR_TEXT" as const;
const SIGNUP_CHANGE_PASSWORD_ERROR_TEXT = "SIGNUP_CHANGE_PASSWORD_ERROR_TEXT" as const;
const SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT = "SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT" as const;

const changeEmailErrorText = (emailErrorText: string) => ({
  type: SIGNUP_CHANGE_EMAIL_ERROR_TEXT,
  payload: emailErrorText,
});
const changeNicknameErrorText = (nicknameErrorText: string) => ({
  type: SIGNUP_CHANGE_NICKNAME_ERROR_TEXT,
  payload: nicknameErrorText,
});
const changePasswordErrorText = (passwordErrorText: string) => ({
  type: SIGNUP_CHANGE_PASSWORD_ERROR_TEXT,
  payload: passwordErrorText,
});
const changePasswordConfirmErrorText = (passwordConfirmErrorText: string) => ({
  type: SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT,
  payload: passwordConfirmErrorText,
});

export const actions = {
  changeEmailErrorText,
  changeNicknameErrorText,
  changePasswordErrorText,
  changePasswordConfirmErrorText,
};
type SignUpAction =
  | ReturnType<typeof changeEmailErrorText>
  | ReturnType<typeof changeNicknameErrorText>
  | ReturnType<typeof changePasswordErrorText>
  | ReturnType<typeof changePasswordConfirmErrorText>;

export interface signUpState {
  emailErrorText: string;
  nicknameErrorText: string;
  passwordErrorText: string;
  passwordConfirmErrorText: string;
}

const initialState: signUpState = {
  emailErrorText: "이메일 에러",
  nicknameErrorText: "닉네임 에러",
  passwordErrorText: "비밀번호 에러",
  passwordConfirmErrorText: "비밀번호 재설정 에러",
};

function signUpReducer(
  state: signUpState = initialState,
  action: SignUpAction
): signUpState {
  switch (action.type) {
    case SIGNUP_CHANGE_EMAIL_ERROR_TEXT:
      return { ...state, emailErrorText: action.payload };
    case SIGNUP_CHANGE_NICKNAME_ERROR_TEXT:
      return {
        ...state,
        nicknameErrorText: action.payload,
      };
    case SIGNUP_CHANGE_PASSWORD_ERROR_TEXT:
      return {
        ...state,
        passwordErrorText: action.payload,
      };
    case SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT:
      return {
        ...state,
        passwordConfirmErrorText: action.payload,
      };
    default:
      return state;
  }
}

export default signUpReducer;
