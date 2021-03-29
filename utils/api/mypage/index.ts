import axios from "axios";
import { BASE_URL } from "../BASE";
import { ChangeInfoResponse } from "./payload";

export const changeInfo = async (data: ChangeInfoResponse) => {
  return;
};

export const signOut = async () => {
  await axios.delete(BASE_URL + "/user/deleteuser", {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  });
};
