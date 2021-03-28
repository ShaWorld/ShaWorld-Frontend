import axios from "axios";
import { BASE_URL } from "../../../utils/api/BASE";
import { SignInRequest } from "./payload";

export const signIn = async (data: SignInRequest) => {
  return await axios
    .post(BASE_URL + "/user/signin", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      return res;
    });
};
