import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { GetReceiveAppliesResponse, GetSendAppliesResponse } from "./payload";

export const getSendApplies = async (): Promise<GetSendAppliesResponse[]> => {
  const { data } = await axios.get(BASE_URL + "/apply/send-applies", {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return data;
};

export const getReceiveApplies = async (): Promise<
  GetReceiveAppliesResponse[]
> => {
  const { data } = await axios.get(BASE_URL + "/apply/receive-applies", {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return data;
};

export const acceptApply = async (applyId: number) => {
  const res = await axios.get(BASE_URL + `/accept/${applyId}`, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return res;
};

export const rejectApply = async (applyId: number) => {
  const res = await axios.get(BASE_URL + `/reject/${applyId}`, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return res;
};
