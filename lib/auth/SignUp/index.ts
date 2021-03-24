import axios from "axios";
import { BASE_URL } from "../../BASE";
import { SignUpRequest } from "../../payloads/SignUp";

export const signUp = async (data: SignUpRequest) => {
  try {
    return await axios
      .post(BASE_URL + "/user/signup", {
        email: data.email,
        nickname: data.nickname,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      })
      .then((result) => result);
  } catch (e) {
    switch (e.response.status) {
      case 400: {
        console.log("잘못된 형식입니다.");
        break;
      }
      case 409: {
        switch (e.response.data.code) {
          case "EMAIL_DUPLICATION":
            console.log("이메일 중복");
            break;
          case "NICKNAME_DUPLICATION":
            console.log("닉네임 중복");
            break;
          default:
            console.log(1);
        }
        break;
      }
      default:
        console.log(1);
    }
  }
};
