import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { CreatePostRequest } from "./payload";

export const createPost = async (data: CreatePostRequest) => {
  var formData = new FormData();
  formData.append("thumbnail", data.thumbnail);

  const res = await axios.post(
    BASE_URL +
      `/post/create?title=${data.title}&address=${data.address}&detail=${data.detail}&price=${data.price}&date=2021-04-01`,
    formData,
    {
      headers: {
        Authorization: localStorage.getItem(TOKEN_NAME),
      },
    }
  );

  return res;
};
