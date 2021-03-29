import React, { FC } from "react";
import useUser from "../../utils/hooks/user";
import Header from "../Header";
import * as S from "./style";

const MyPage: FC = () => {
  const {
    state: { userEmail, userNickname, userProfile },
  } = useUser();

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Title>마이페이지</S.Title>
        <S.ContentsWrapper>
          <S.ImgInput
            src={
              userProfile != null
                ? userProfile
                : "http://image.auction.co.kr/itemimage/1b/7d/19/1b7d19f331.jpg"
            }
          />
          <S.InfoFormWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>닉네임</S.InfoTitle>
              <S.InfoTextButtonWrapper>
                <S.InfoText>{userNickname}</S.InfoText>
                <S.InfoFixButton>수정하기</S.InfoFixButton>
              </S.InfoTextButtonWrapper>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>이메일</S.InfoTitle>
              <S.InfoText>{userEmail}</S.InfoText>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <S.ChangePasswordButton>비밀번호 변경</S.ChangePasswordButton>
              <S.LogoutButton>로그아웃</S.LogoutButton>
            </S.ButtonWrapper>
            <S.SignOutButton>회원 탈퇴</S.SignOutButton>
          </S.InfoFormWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
