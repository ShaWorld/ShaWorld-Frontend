import React, { useState, FC } from "react";
import { useRouter } from "next/router";
import * as S from "./style";
import { SignInRequest } from "../../utils/api/signin/payload";
import { signIn } from "../../utils/api/signin";
import Logo from '../../public/Logo.png';

const SignIn: FC = () => {
  const router = useRouter();
  const [signInForm, setSignInForm] = useState<SignInRequest>({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState<string>("");

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value,
    });
  };

  function callFormatCheckFunc(): boolean {
    return checkEmailFormat() || checkPasswordFormat();
  }

  function checkEmailFormat(): boolean {
    if (!signInForm.email) {
      setErrorText("이메일을 입력해주세요.");
      return true;
    } else if (!signInForm.email.includes("@")) {
      setErrorText("올바른 이메일 형식이 아닙니다.");
      return true;
    }
    setErrorText("");
    return false;
  }

  function checkPasswordFormat(): boolean {
    if (!signInForm.password) {
      setErrorText("비밀번호를 입력해주세요.");
      return true;
    }
    setErrorText("");
    return false;
  }

  function onSubmitSignInForm(): Promise<object> {
    if (callFormatCheckFunc()) return;
    signIn(signInForm).then(
      (res) => {
        router.push("/");
        localStorage.setItem("Authorization", `Bearer ${res.token}`);
        return Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400: {
            switch (err.response.data.code) {
              case "NO_MATCH_EMAIL":
                setErrorText("일치하는 이메일이 없습니다.");
                break;
              case "PASSWORD_MISMATCH":
                setErrorText("비밀번호가 일치하지 않습니다.");
                break;
              default:
                setErrorText("잘못된 형식입니다.");
                break;
            }
            break;
          }
          case 404: {
            setErrorText("일치하는 이메일이 없습니다.");
            break;
          }
          default:
            location.reload();
        }
        return Promise.reject(err.response);
      }
    );
  }

  return (
    <S.Container>
      <S.MainWrapper>
        <S.Logo src={Logo} onClick={() => router.push("/")} />
        <S.ErrorText isError={errorText}>{errorText}</S.ErrorText>
        <S.InputBox
          type="text"
          placeholder="이메일"
          name="email"
          autoComplete="off"
          onChange={onChangeForm}
        />
        <S.InputBox
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={onChangeForm}
        />
        <S.Button onClick={onSubmitSignInForm}>로그인</S.Button>
        <S.DividingLine />
        <S.Button onClick={() => router.push("/signup")}>회원가입</S.Button>
      </S.MainWrapper>
      <S.BottomText>©Sonwanseo co. All Rights Reserved</S.BottomText>
    </S.Container>
  );
};

export default SignIn;
