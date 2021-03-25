import { ResDefault } from "../../BASE";

export interface errorObj {
  emailError: boolean;
  nicknameError: boolean;
  passwordError: boolean;
  passwordConfirmError: boolean;
}

export interface SignUpRequest {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export interface SignUpResponse {}

export interface SignUpResponseWithDefault extends SignUpResponse, ResDefault {}
