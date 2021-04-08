import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { GetPostDetailInfo } from "./payload";

export const getPostDetailInfo = async (
  id: string | string[]
): Promise<GetPostDetailInfo> => {
  const { data } = await axios.get<GetPostDetailInfo>(
    BASE_URL + `/post/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem(TOKEN_NAME),
      },
    }
  );

  return data;
};

export const deletePost = async (id: string | string[]): Promise<void> => {
  await axios.get(BASE_URL + `/post/delete/${id}`, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });
};
