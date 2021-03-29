import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import useUser from "../../utils/hooks/user";
import Header from "../Header";
import * as S from "./style";
import useModal from "../../utils/hooks/modal";

const MyPage: FC = () => {
  const router = useRouter();
  const [changedNickname, setChangedNickname] = useState("");
  const [changingNickname, setChangingNickname] = useState(false);
  const [nicknameErrorText, setNicknameErrorText] = useState("");
  const {
    setState: { modalOn },
  } = useModal();
  const {
    state: { userEmail, userNickname, userProfile },
    setState: { setUserInfo },
  } = useUser();

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedNickname(e.target.value);
  };

  const startChangingNickname = () => {
    setNicknameErrorText("");
    setChangedNickname("");
    setChangingNickname(true);
  };

  const onSubmitChangedNickname = () => {
    if (!changedNickname) {
      setNicknameErrorText("닉네임을 입력하세요.");
      return;
    }
    setChangingNickname(false);
  };

  const logout = () => {
    localStorage.removeItem("Authorization");
    setUserInfo({
      userEmail: "",
      userNickname: "",
      userProfile: "",
    });
    router.push("/");
  };

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Title>마이페이지</S.Title>
        <S.ContentsWrapper>
          <S.Img
            src={
              userProfile != null
                ? userProfile
                : "https://i.pinimg.com/474x/83/fc/4c/83fc4c6dca8298dc8e03ba63d35a9cae.jpg"
            }
          />
          <S.InfoFormWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>닉네임</S.InfoTitle>
              {changingNickname ? (
                <>
                  <S.InfoTextButtonWrapper>
                    <S.InfoNicknameInput
                      type="text"
                      onChange={onChangeNickname}
                      placeholder={userNickname}
                    />
                    <S.InfoFixButton onClick={onSubmitChangedNickname}>
                      완료
                    </S.InfoFixButton>
                  </S.InfoTextButtonWrapper>
                  <S.nicknameErrorText isError={nicknameErrorText}>
                    {nicknameErrorText}
                  </S.nicknameErrorText>
                </>
              ) : (
                <S.InfoTextButtonWrapper>
                  <S.InfoText>{userNickname}</S.InfoText>
                  <S.InfoFixButton onClick={startChangingNickname}>
                    수정하기
                  </S.InfoFixButton>
                </S.InfoTextButtonWrapper>
              )}
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>이메일</S.InfoTitle>
              <S.InfoText>{userEmail}</S.InfoText>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <S.ChangePasswordButton>비밀번호 변경</S.ChangePasswordButton>
              <S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
            </S.ButtonWrapper>
            <S.SignOutButton onClick={() => modalOn("signOutConfirm")}>
              회원 탈퇴
            </S.SignOutButton>
          </S.InfoFormWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
