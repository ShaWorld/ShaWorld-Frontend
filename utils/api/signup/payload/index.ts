import { ResDefault } from "../../BASE";

export const PASSWORD_MISMATCH = "비밀번호와 비밀번호 재확인이 일치하지 않습니다." as const;
export const EMAIL_DUPLICATION = "이미 사용중인 이메일입니다." as const;
export const NICKNAME_DUPLICATION = "이미 사용중인 닉네임입니다." as const;

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
