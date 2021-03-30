import axios from "axios";
import { BASE_URL } from "../BASE";

export const changeNickname = async (changedNickname: string) => {
  const res = await axios.patch(
    BASE_URL + "/user/nickname",
    {
      changedNickname: changedNickname,
    },
    {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    }
  );
  return res;
};

export const signOut = async () => {
  await axios.delete(BASE_URL + "/user/deleteuser", {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  });
};
