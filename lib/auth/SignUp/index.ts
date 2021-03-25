import axios from "axios";
import { BASE_URL } from "../../BASE";
import { SignUpRequest } from "../../payloads/SignUp";

export const signUp = async (data: SignUpRequest) => {
  return await axios
    .post(BASE_URL + "/user/signup", {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    })
    .then((res) => {
      return res;
    });
};
