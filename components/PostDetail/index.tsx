import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import * as S from "./style";
import useModal from "../../utils/hooks/modal";
import useUser from "../../utils/hooks/user";
import { getPostDetailInfo } from "../../utils/api/postdetail";
import { GetPostDetailInfo } from "../../utils/api/postdetail/payload";

const PostDetail = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<GetPostDetailInfo>({
    postThumbnail: "",
    postTitle: "",
    postAuthorProfile: "",
    postAuthorNickname: "",
    postAddress: "",
    postDetail: "",
    postPrice: 0,
    postDate: "",
  });
  const {
    setState: { modalOn },
  } = useModal();
  const {
    state: { userNickname },
  } = useUser();

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
          <S.AuthorWrapper>
            <S.Profile
              src={
                data.postAuthorProfile
                  ? data.postAuthorProfile
                  : "https://s1.dmcdn.net/v/33FvQ1KB-ZLki-Xwt/x1080"
              }
            />
            <S.Nickname>{data.postAuthorNickname}</S.Nickname>
          </S.AuthorWrapper>
          <S.Address>주소: {data.postAddress}</S.Address>
          <S.DetailTitle>상세정보</S.DetailTitle>
          <S.Detail>{data.postDetail}</S.Detail>
          <S.RightBottomWrapper>
            <S.ButtonWrapper>
              {data.postAuthorNickname != userNickname ? (
                <S.SendMessageButton
                  onClick={() => modalOn("applyRentalConfirm")}
                >
                  대여 신청하기
                </S.SendMessageButton>
              ) : (
                <S.SendMessageButton
                  onClick={() => modalOn("deletePostConfirm")}
                >
                  삭제
                </S.SendMessageButton>
              )}
            </S.ButtonWrapper>
            <S.Price>{data.postPrice}원/일</S.Price>
          </S.RightBottomWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostDetail;
