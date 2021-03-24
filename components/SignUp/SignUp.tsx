import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { actions } from "../../reducers/signUp";
import { signUp } from "../../lib/auth/SignUp";
import { errorObj, SignUpRequest } from "../../lib/payloads/SignUp";
import * as S from "./style";

// 리덕스 관련 코드 page로 빼기
const SignUp = () => {
  const dispatch = useDispatch();

  const {
    emailErrorText,
    nicknameErrorText,
    passwordErrorText,
    passwordConfirmErrorText,
  } = useSelector(
    (state: RootState) =>
      state.signUpReducer || {
        emailErrorText: "이메일 에러",
        nicknameErrorText: "닉네임 에러",
        passwordErrorText: "비밀번호 에러",
        passwordConfirmErrorText: "비밀번호 재설정 에러",
      }
  );

  const [signUpForm, setSignUpForm] = useState<SignUpRequest>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorObj, setErrorObj] = useState<errorObj>({
    emailError: false,
    nicknameError: false,
    passwordError: false,
    passwordConfirmError: false,
  });

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  function checkEmailFormat(): boolean {
    if (!signUpForm.email.includes("@")) {
      dispatch(actions.changeEmailErrorText("올바른 이메일 형식이 아닙니다."));

      return true;
    }
    return false;
  }

  function checkNicknameFormat(): boolean {
    if (signUpForm.nickname.length < 2 || signUpForm.nickname.length > 8) {
      dispatch(actions.changeNicknameErrorText("2 ~ 8자"));
      return true;
    }
    return false;
  }

  function checkPasswordFormat(): boolean {
    const passwordRegExp: RegExp = new RegExp(/^[a-z0-9!@#$%^&*]{8,20}$/);
    if (
      signUpForm.password.length < 8 ||
      signUpForm.password.length > 20 ||
      !passwordRegExp.test(signUpForm.password)
    ) {
      dispatch(
        actions.changePasswordErrorText(
          "8 ~ 20자 (알파벳 소문자, 숫자, 특수기호)"
        )
      );
      return true;
    }
    return false;
  }

  function checkPasswordConfirmFormat(): boolean {
    if (
      signUpForm.passwordConfirm !== signUpForm.password ||
      signUpForm.password == ""
    ) {
      dispatch(
        actions.changePasswordConfirmErrorText("비밀번호가 일치하지 않습니다.")
      );
      return true;
    }
    return false;
  }

  function checkNoError(): boolean {
    if (Object.values(errorObj).filter((item) => item == false).length != 4)
      return true;
    return false;
  }

  const onSubmitSignUpForm = () => {
    setErrorObj({
      ...errorObj,
      emailError: checkEmailFormat(),
      nicknameError: checkNicknameFormat(),
      passwordError: checkPasswordFormat(),
      passwordConfirmError: checkPasswordConfirmFormat(),
    });
    if (checkNoError()) return;
    console.log(1);
    signUp(signUpForm);
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
          <S.ErrorText isError={errorObj.emailError}>
            {emailErrorText}
          </S.ErrorText>
          <S.LongInputBox
            placeholder="닉네임"
            name="nickname"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={errorObj.nicknameError}>
            {nicknameErrorText}
          </S.ErrorText>
          <S.LongInputBox
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={errorObj.passwordError}>
            {passwordErrorText}
          </S.ErrorText>
          <S.LongInputBox
            type="password"
            placeholder="비밀번호 재확인"
            name="passwordConfirm"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <S.ErrorText isError={errorObj.passwordConfirmError}>
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
