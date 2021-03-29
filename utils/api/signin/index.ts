import axios from "axios";
import { BASE_URL } from "../BASE";
import { SignInRequest, SignInResponse } from "./payload";

export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const res = await axios.post(BASE_URL + "/user/signin", {
    email: data.email,
    password: data.password,
  });
  return res.data;
};
