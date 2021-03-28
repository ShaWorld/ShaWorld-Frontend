import { ResDefault } from "../../BASE";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export interface SignInResponseWithDefault extends SignInResponse, ResDefault {}
