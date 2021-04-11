import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { GetLatestPosts } from "./payload";

export const searchLatestPosts = async (
  page: number,
  size: number,
  keyword: string | string[]
): Promise<GetLatestPosts[]> => {
  const {
    data: { content },
  } = await axios.get<{
    content: GetLatestPosts[];
  }>(BASE_URL + `/post/search?page=${page}&size=${size}&keyword=${keyword}`, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return content;
};
