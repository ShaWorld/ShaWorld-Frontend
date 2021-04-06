import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../BASE";
import { CreatePostRequest } from "./payload";

const fillZeroToString = (date: number) => {
  return date.toString().padStart(2, "0");
};

export const createPost = async (data: CreatePostRequest) => {
  var formData = new FormData();
  formData.append("thumbnail", data.thumbnail);

  const date = new Date();
  const requestDate = `${date.getFullYear()}-${fillZeroToString(
    date.getMonth() + 1
  )}-${fillZeroToString(date.getDate())}T${fillZeroToString(
    date.getHours()
  )}:${fillZeroToString(date.getMinutes())}:${fillZeroToString(
    date.getSeconds()
  )}`;

  const res = await axios.post(
    BASE_URL +
      `/post/create?title=${data.title}&address=${data.address}&detail=${data.detail}&price=${data.price}&date=${requestDate}`,
    formData,
    {
      headers: {
        Authorization: localStorage.getItem(TOKEN_NAME),
      },
    }
  );

  return res;
};
