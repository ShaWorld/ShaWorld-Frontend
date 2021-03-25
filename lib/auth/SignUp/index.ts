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
      .then((result) => {
        if (result.status == 201) {
          console.log("modal on");
        }
      });
  } catch (e) {
    switch (e.response.status) {
      case 400: {
        window.alert("잘못된 형식입니다.");
        location.reload();
        break;
      }
      case 409: {
        switch (e.response.data.code) {
          case "EMAIL_DUPLICATION":
            window.alert("이미 사용중인 이메일입니다.");
            location.reload();
            break;
          case "NICKNAME_DUPLICATION":
            window.alert("이미 사용중인 닉네임입니다.");
            location.reload();
            break;
          default:
            console.log("알 수 없는 오류");
        }
        break;
      }
      default:
        console.log("알 수 없는 오류");
    }
  }
};
