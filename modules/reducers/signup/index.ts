import {
  SIGNUP_CHANGE_EMAIL_ERROR_TEXT,
  SIGNUP_CHANGE_NICKNAME_ERROR_TEXT,
  SIGNUP_CHANGE_PASSWORD_ERROR_TEXT,
  SIGNUP_CHANGE_PASSWORD_CONFIRM_ERROR_TEXT,
} from "../../actions/signup/interface";
import { SignUpAction } from "../../actions/signup";
import signUpState from "./interface";

const initialState: signUpState = {
  emailErrorText: "",
  nicknameErrorText: "",
  passwordErrorText: "",
  passwordConfirmErrorText: "",
};

const signUpReducer = (
  state: signUpState = initialState,
  action: SignUpAction
): signUpState => {
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
};

export default signUpReducer;
