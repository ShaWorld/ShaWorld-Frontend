import React, { useState, FC } from "react";
import { signUp } from "../../utils/api/signup";
import { SignUpRequest } from "../../utils/api/signup/payload";
import * as S from "./style";

const SignUp: FC = () => {
  const [emailErrorText, changeEmailErrorText] = useState<string>("");
  const [nicknameErrorText, changeNicknameErrorText] = useState<string>("");
  const [passwordErrorText, changePasswordErrorText] = useState<string>("");
  const [
    passwordConfirmErrorText,
    changePasswordConfirmErrorText,
  ] = useState<string>("");

  const [signUpForm, setSignUpForm] = useState<SignUpRequest>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  function callFormatCheckFunc(): boolean {
    const emailError = checkEmailFormat(),
      nicknameError = checkNicknameFormat(),
      passwordError = checkPasswordFormat(),
      passwordConfirmError = checkPasswordConfirmFormat();

    return emailError || nicknameError || passwordError || passwordConfirmError;
  }

  function checkEmailFormat(): boolean {
    if (!signUpForm.email.includes("@")) {
      changeEmailErrorText("올바른 이메일 형식이 아닙니다.");
      return true;
    }
    changeEmailErrorText("");
    return false;
  }

  function checkNicknameFormat(): boolean {
    if (signUpForm.nickname.length < 2 || signUpForm.nickname.length > 8) {
      changeNicknameErrorText("2 ~ 8자");
      return true;
    }
    changeNicknameErrorText("");
    return false;
  }

  function checkPasswordFormat(): boolean {
    const passwordRegExp: RegExp = new RegExp(/^[a-z0-9!@#$%^&*]{8,20}$/);
    if (
      signUpForm.password.length < 8 ||
      signUpForm.password.length > 20 ||
      !passwordRegExp.test(signUpForm.password)
    ) {
      changePasswordErrorText("8 ~ 20자 (알파벳 소문자, 숫자, 특수기호)");
      return true;
    }
    changePasswordErrorText("");
    return false;
  }

  function checkPasswordConfirmFormat(): boolean {
    if (
      signUpForm.passwordConfirm !== signUpForm.password ||
      signUpForm.password == ""
    ) {
      changePasswordConfirmErrorText("비밀번호가 일치하지 않습니다.");
      return true;
    }
    changePasswordConfirmErrorText("");
    return false;
  }

  const onSubmitSignUpForm = () => {
    if (callFormatCheckFunc()) return;
    signUp(signUpForm).then(
      (res) => {
        window.alert("회원가입에 성공했습니다.");
        return Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400: {
            window.alert("잘못된 형식입니다.");
            location.reload();
            break;
          }
          case 409: {
            switch (err.response.data.code) {
              case "EMAIL_DUPLICATION":
                changeEmailErrorText("이미 사용중인 이메일입니다.");
                break;
              case "NICKNAME_DUPLICATION":
                changeNicknameErrorText("이미 사용중인 닉네임입니다.");
                break;
              default:
                console.log("알 수 없는 오류");
            }
            break;
          }
          default:
            location.reload();
        }
        return Promise.reject(err.response);
      }
    );
  };

  return (
    <S.Container>
      <S.MainWrapper>
        <S.Logo>로고</S.Logo>
        <S.InputFormWrapper>
          <S.LongInputBox
            placeholder="이메일"
            name="email"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={emailErrorText}>{emailErrorText}</S.ErrorText>
          <S.LongInputBox
            placeholder="닉네임"
            name="nickname"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={nicknameErrorText}>
            {nicknameErrorText}
          </S.ErrorText>
          <S.LongInputBox
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={passwordErrorText}>
            {passwordErrorText}
          </S.ErrorText>
          <S.LongInputBox
            type="password"
            placeholder="비밀번호 재확인"
            name="passwordConfirm"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={passwordConfirmErrorText}>
            {passwordConfirmErrorText}
          </S.ErrorText>
        </S.InputFormWrapper>
        <S.Button onClick={onSubmitSignUpForm}>회원가입</S.Button>
      </S.MainWrapper>
      <S.BottomText>©ShaWorld Inc. All Rights Reserved</S.BottomText>
    </S.Container>
  );
};

export default SignUp;
