import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { CreatePostRequest } from "./payload";

export const createPost = async (data: CreatePostRequest) => {
  var formData = new FormData();
  formData.append("thumbnail", data.thumbnail);
  formData.append("title", data.title);
  formData.append("address", data.address);
  formData.append("detail", data.detail);
  formData.append("price", data.price.toString());
  formData.append("date", "2021-04-01");
  const res = await axios.post(BASE_URL + "/post/create", formData, {
    headers: {
      Authorization: localStorage.getItem(TOKEN_NAME),
    },
  });

  return res;
};
