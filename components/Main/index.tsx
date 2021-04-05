import React, { FC } from "react";
import Header from "../Header";
import Post from "../common/Post";
import * as S from "./style";

const Main: FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Title>최신 대여 가능 물품</S.Title>
        <S.PostWrapper>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </S.PostWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
