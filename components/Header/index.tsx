import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserInfo } from "../../utils/api/header";
import * as S from "./style";
import useUser from "../../utils/hooks/user";

const Header: FC = () => {
  const router = useRouter();
  const {
    state,
    setState: { setUserInfo },
  } = useUser();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    getUserInfo().then(
      (res) => {
        setUserInfo(res);
      },
      () => {}
    );
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContentsWrapper>
        <S.HeaderLeftWrapper>
          <S.HeaderLogo onClick={() => router.push("/")}>로고</S.HeaderLogo>
          <S.HeaderSearchBar type="text" placeholder="검색" />
        </S.HeaderLeftWrapper>
        {state.userNickname === "" ? (
          <S.HeaderRightWrapper>
            <S.HeaderAuthLink onClick={() => router.push("/signin")}>
              로그인
            </S.HeaderAuthLink>
            <S.HeaderAuthLink onClick={() => router.push("/signup")}>
              회원가입
            </S.HeaderAuthLink>
          </S.HeaderRightWrapper>
        ) : (
          <S.HeaderRightWrapper>
            <S.HeaderPost onClick={() => router.push("/post")}>
              대여 상품 등록
            </S.HeaderPost>
            <S.HeaderProfileImg
              src={
                state.userProfile
                  ? state.userProfile
                  : "http://image.auction.co.kr/itemimage/1b/7d/19/1b7d19f331.jpg"
              }
            />
            <S.HeaderNickname onClick={() => router.push("/mypage")}>
              {state.userNickname}
            </S.HeaderNickname>
          </S.HeaderRightWrapper>
        )}
      </S.HeaderContentsWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
