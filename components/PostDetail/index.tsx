import React from "react";
import Header from "../Header";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./style";

const detail = `토르의 망치 대여해 드립니다.
가격 네고 가능합니다. 
최대 10일까지 대여 가능합니다.`;

const PostDetail = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.LeftWrapper>
          <S.PostThumbnail src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
          <S.ThumbnailButtonWrapper>
            <S.ThumbnailUploadBtn>
              <S.ThumbnailInputBox type="file" accept="image/png, image/jpeg" />
              <ImageIcon fontSize="large" />
            </S.ThumbnailUploadBtn>
            <S.ThumbnailRemoveBtn>
              <DeleteIcon fontSize="large" />
            </S.ThumbnailRemoveBtn>
          </S.ThumbnailButtonWrapper>
          <S.Date>2021년 3월 18일 (목) 22:41</S.Date>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Title>토르의 망치 대여해 드립니다.</S.Title>
          <S.Nickname>쿠키앤크림진짬뽕</S.Nickname>
          <S.Address>대전광역시 서구 둔산동 갤러리아 타임월드</S.Address>
          <S.DetailTitle>상세정보</S.DetailTitle>
          <S.Detail>{detail}</S.Detail>
          <S.RightBottomWrapper>
            <S.ButtonWrapper>
              <S.SendMessageButton>메세지 보내기</S.SendMessageButton>
            </S.ButtonWrapper>
            <S.Price>1000원/일</S.Price>
          </S.RightBottomWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostDetail;
