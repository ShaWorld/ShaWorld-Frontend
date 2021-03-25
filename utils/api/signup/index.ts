import axios from "axios";
import { BASE_URL } from "../../../utils/api/BASE";
import { SignUpRequest } from "./payload";

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
