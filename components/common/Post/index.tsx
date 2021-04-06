import React, { FC, useEffect } from "react";
import * as S from "./style";

interface Props {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  nickname: string;
  address: string;
}

const Post: FC<Props> = ({
  id,
  thumbnail,
  title,
  price,
  nickname,
  address,
}) => {
  return (
    <S.Container>
      <S.Thumbnail
        src={
          thumbnail
            ? thumbnail
            : "https://s1.dmcdn.net/v/33FvQ1KB-ZLki-Xwt/x1080"
        }
      />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.PriceAndNicknameWrapper>
          <S.Price>{price}원/일</S.Price>
          <S.Nickname>{nickname}</S.Nickname>
        </S.PriceAndNicknameWrapper>
        <S.Address>{address}</S.Address>
      </S.TextWrapper>
    </S.Container>
  );
};

export default Post;
