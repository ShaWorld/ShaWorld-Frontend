import React, { FC } from "react";
import Header from "../Header";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./style";

const Post: FC = () => {
  return (
    <S.Containter>
      <Header />
      <S.Wrapper>
        <S.LeftWrapper>
          <S.PostThumbnail src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
          <S.ThumbnailButtonWrapper>
            <S.ThumbnailUploadBtn>
              <ImageIcon fontSize="large" />
            </S.ThumbnailUploadBtn>
            <S.ThumbnailRemoveBtn>
              <DeleteIcon fontSize="large" />
            </S.ThumbnailRemoveBtn>
          </S.ThumbnailButtonWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.TitleInput type="text" placeholder="제목" />
          <S.AddressInput type="text" placeholder="주소" />
          <S.DetailTitle>상세정보</S.DetailTitle>
          <S.DetailInput placeholder="상세정보를 입력해주세요." />
          <S.PriceInput placeholder="가격(일일 요금)" />
          <S.PostButton>생성</S.PostButton>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Containter>
  );
};

export default Post;
