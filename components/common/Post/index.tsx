import React, { FC } from "react";
import * as S from "./style";

const Post: FC = () => {
  return (
    <S.Container>
      <S.Thumbnail src="https://www.rhsmith.umd.edu/files/Images/Programs/Plus1/plus-1-1.png" />
      <S.TextWrapper>
        <S.Title>Article Title</S.Title>
        <S.PriceAndNicknameWrapper>
          <S.Price>1000원/일</S.Price>
          <S.Nickname>NickName</S.Nickname>
        </S.PriceAndNicknameWrapper>
        <S.Address>대전광역시 서구 둔산동 갤러리아 타임월드</S.Address>
      </S.TextWrapper>
    </S.Container>
  );
};

export default Post;
