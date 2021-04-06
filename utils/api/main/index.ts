import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { GetLatestPosts } from "./payload";

export const getLatestPosts = async (
  page: number,
  size: number
): Promise<GetLatestPosts[]> => {
  const {
    data: { content },
  } = await axios.get<{
    content: GetLatestPosts[];
  }>(BASE_URL + `/post/get-latest-posts?page=${page}&size=${size}`, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return content;
};
