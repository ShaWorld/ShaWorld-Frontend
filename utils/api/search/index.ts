import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { SearchLatestPosts } from "./payload";

export const searchLatestPosts = async (
  page: number,
  size: number,
  keyword: string | string[]
): Promise<SearchLatestPosts[]> => {
  const {
    data: { content },
  } = await axios.get<{
    content: SearchLatestPosts[];
  }>(BASE_URL + `/post/search?page=${page}&size=${size}&keyword=${keyword}`, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return content;
};
