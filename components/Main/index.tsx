import React, { FC, useEffect, useState } from "react";
import Header from "../Header";
import Post from "../common/Post";
import * as S from "./style";
import { getLatestPosts } from "../../utils/api/main";
import { GetLatestPosts } from "../../utils/api/main/payload";

const Main: FC = () => {
  let page = 0;

  const [postList, setPostList] = useState<GetLatestPosts[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    getLatestPostsClient();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLatestPostsClient = () => {
    setFetching(true);
    getLatestPosts(page++, 12).then(
      (res) => {
        setPostList((prev) => prev.concat(res));
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
    setFetching(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      getLatestPostsClient();
    }
  };

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Title>최신 대여 가능 물품</S.Title>
        <S.PostWrapper>
          {postList != []
            ? postList.map((item) => (
                <Post
                  key={item.postId}
                  id={item.postId}
                  thumbnail={item.postThumbnail}
                  title={item.postTitle}
                  price={item.postPrice}
                  nickname={item.postAuthor}
                  address={item.postAddress}
                />
              ))
            : ""}
        </S.PostWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
