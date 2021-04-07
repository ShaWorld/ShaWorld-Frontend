import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./style";
import { getPostDetailInfo } from "../../utils/api/postdetail";
import { GetPostDetailInfo } from "../../utils/api/postdetail/payload";

const PostDetail = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<GetPostDetailInfo>({
    postThumbnail: "",
    postTitle: "",
    postAuthor: "",
    postAddress: "",
    postDetail: "",
    postPrice: 0,
    postDate: "",
  });

  useEffect(() => {
    if (!pid) {
      router.push("/");
      return;
    }
    getData();
  }, []);

  const getData = () => {
    getPostDetailInfo(pid).then(
      (res) => {
        setData({
          ...res,
          postDate: setDateToString(res.postDate),
        });
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 401: {
            switch (err.response.data.code) {
              case "TOKEN_EXPRIATION":
                alert("만료된 토큰입니다.");
                break;
              case "INVALID_TOKEN":
                alert("유효하지 않은 토큰입니다.");
                break;
              default:
                break;
            }
          }
          case 404: {
            switch (err.response.data.code) {
              case "USER_NOT_FOUND":
                alert("존재하지 않는 사용자입니다.");
                break;
              default:
                break;
            }
          }
          default:
            break;
        }
        Promise.reject(err);
      }
    );
  };

  const setDateToString = (date: string) => {
    let localArray = date.split("-"),
      dateArray = localArray[2].split("T");

    return `${localArray[0]}년 ${localArray[1]}월 ${dateArray[0]}일 ${dateArray[1]}`;
  };

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.LeftWrapper>
          <S.PostThumbnail
            src={
              data.postThumbnail
                ? data.postThumbnail
                : "https://s1.dmcdn.net/v/33FvQ1KB-ZLki-Xwt/x1080"
            }
          />
          <S.Date>{data.postDate}</S.Date>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Title>{data.postTitle}</S.Title>
          <S.Nickname>{data.postAuthor}</S.Nickname>
          <S.Address>{data.postAddress}</S.Address>
          <S.DetailTitle>상세정보</S.DetailTitle>
          <S.Detail>{data.postDetail}</S.Detail>
          <S.RightBottomWrapper>
            <S.ButtonWrapper>
              <S.SendMessageButton>메세지 보내기</S.SendMessageButton>
            </S.ButtonWrapper>
            <S.Price>{data.postPrice}원/일</S.Price>
          </S.RightBottomWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostDetail;
