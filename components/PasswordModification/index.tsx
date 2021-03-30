import React, { FC, useState } from "react";
import { changePassword } from "../../utils/api/mypage";
import { ChangePasswordRequest } from "../../utils/api/mypage/payload";
import useModal from "../../utils/hooks/modal";
import * as S from "./style";

const PasswordModification: FC = () => {
  const [passwordForm, setPasswordForm] = useState<ChangePasswordRequest>({
    currentPassword: "",
    changePassword: "",
    changePasswordConfirm: "",
  });
  const [
    currentPasswordErrorText,
    setCurrentPasswordErrorText,
  ] = useState<string>("");
  const [
    changePasswordErrorText,
    setChangePasswordErrorText,
  ] = useState<string>("");
  const [
    changePasswordConfirmErrorText,
    setChangePasswordConfirmErrorText,
  ] = useState<string>("");
  const {
    setState: { modalOn },
  } = useModal();

  const onChangePasswordForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value,
    });
  };

  function callFormatCheckFunc(): boolean {
    const currentPasswordError = checkCurrentPasswordFormat(),
      changePasswordError = checkChangePasswordFormat(),
      changePasswordConfirmError = checkChangePasswordConfirmFormat();

    return (
      currentPasswordError || changePasswordError || changePasswordConfirmError
    );
  }

  function checkCurrentPasswordFormat(): boolean {
    if (passwordForm.currentPassword == "") {
      setCurrentPasswordErrorText("비밀번호를 입력하세요.");
      return true;
    }
    setCurrentPasswordErrorText("");
    return false;
  }

  function checkChangePasswordFormat(): boolean {
    const passwordRegExp: RegExp = new RegExp(/^[a-z0-9!@#$%^&*]{8,20}$/);
    if (!passwordRegExp.test(passwordForm.changePassword)) {
      setChangePasswordErrorText("8 ~ 20자 (알파벳 소문자, 숫자, 특수기호");
      return true;
    }
    setChangePasswordErrorText("");
    return false;
  }

  function checkChangePasswordConfirmFormat(): boolean {
    if (
      passwordForm.changePassword == "" ||
      passwordForm.changePasswordConfirm !== passwordForm.changePassword
    ) {
      setChangePasswordConfirmErrorText("비밀번호가 일치하지 않습니다.");
      return true;
    }
    setChangePasswordConfirmErrorText("");
    return false;
  }

  function onSubmitSignUpForm(): Promise<object> {
    if (callFormatCheckFunc()) return;
    changePassword(passwordForm).then(
      () => {
        modalOn("passwordChangeAlert");
      },
      (err) => {
        switch (err.response.status) {
          case 400: {
            switch (err.response.data.code) {
              case "PASSWORD_MISMATCH":
                setCurrentPasswordErrorText("비밀번호가 일치하지 않습니다.");
                break;
              default:
                console.log("알 수 없는 오류");
            }
          }
          default:
            console.log("알 수 없는 오류");
        }
      }
    );
  }

  return (
    <S.Container>
      <S.MainWrapper>
        <S.Logo>로고</S.Logo>
        <S.InputFormWrapper>
          <S.InputBox
            type="password"
            placeholder="현재 비밀번호"
            name="currentPassword"
            onChange={onChangePasswordForm}
          />
          <S.ErrorText isError={true}>{currentPasswordErrorText}</S.ErrorText>
          <S.InputBox
            type="password"
            placeholder="새로운 비밀번호"
            name="changePassword"
            onChange={onChangePasswordForm}
          />
          <S.ErrorText isError={true}>{changePasswordErrorText}</S.ErrorText>
          <S.InputBox
            type="password"
            placeholder="새로운 비밀번호 확인"
            name="changePasswordConfirm"
            onChange={onChangePasswordForm}
          />
          <S.ErrorText isError={true}>
            {changePasswordConfirmErrorText}
          </S.ErrorText>
        </S.InputFormWrapper>
        <S.Button onClick={onSubmitSignUpForm}>비밀번호 변경</S.Button>
      </S.MainWrapper>
    </S.Container>
  );
};

export default PasswordModification;
