import axios from "axios";
import { BASE_URL } from "../BASE";
import { UserInfoResponse } from "./payload";

export const getUserInfo = async (): Promise<UserInfoResponse> => {
  const { data } = await axios.get<UserInfoResponse>(BASE_URL + "/user", {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  return data;
};
