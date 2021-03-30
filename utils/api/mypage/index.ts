import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { ChangePasswordRequest } from "./payload";

export const changeNickname = async (changedNickname: string) => {
  const res = await axios.patch(
    BASE_URL + "/user/nickname",
    {
      changedNickname: changedNickname,
    },
    {
      headers: {
        Authorization: localStorage.getItem(TOKEN_NAME),
      },
    }
  );
  return res;
};

export const changePassword = async (data: ChangePasswordRequest) => {
  const res = await axios.patch(
    BASE_URL + "/user/password",
    {
      currentPassword: data.currentPassword,
      changePassword: data.changePassword,
      changePasswordConfirm: data.changePasswordConfirm,
    },
    {
      headers: {
        Authorization: localStorage.getItem(TOKEN_NAME),
      },
    }
  );
  return res;
};

export const signOut = async () => {
  await axios.delete(BASE_URL + "/user/deleteuser", {
    headers: {
      TOKEN_NAME: localStorage.getItem(TOKEN_NAME),
    },
  });
};
