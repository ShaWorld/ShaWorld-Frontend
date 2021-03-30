import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { UserInfoResponse } from "./payload";

export const getUserInfo = async (): Promise<UserInfoResponse> => {
  const { data } = await axios.get<UserInfoResponse>(BASE_URL + "/user", {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return data;
};
