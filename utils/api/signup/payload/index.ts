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
