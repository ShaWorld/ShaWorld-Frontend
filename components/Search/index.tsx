import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import PostItem from "../common/PostItem";
import Header from "../Header";
import { SearchLatestPosts } from "../../utils/api/search/payload";
import { searchLatestPosts } from "../../utils/api/search";
import * as S from "./style";
import useSearch from "../../utils/hooks/search";

const Search: FC = () => {
  let page = 0;

  const router = useRouter();
  const [prevKeyword, setPrevKeyword] = useState<string>("");
  const [postList, setPostList] = useState<SearchLatestPosts[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const {
    state: { keyword },
  } = useSearch();

  useEffect(() => {
    if (!keyword) {
      router.push("/");
      return;
    }
    serachLatestPostsClient();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [keyword]);

  const serachLatestPostsClient = () => {
    setFetching(true);
    setPrevKeyword(keyword);
    searchLatestPosts(page++, 12, keyword).then(
      (res) => {
        console.log(res.length === 0);
        if (res.length === 0) {
          setIsEmpty(true);
          setPostList([]);
        } else if (keyword == prevKeyword) {
          setIsEmpty(false);
          setPostList((prev) => prev.concat(res));
        } else {
          setIsEmpty(false);
          setPostList(res);
        }
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
      serachLatestPostsClient();
    }
  };

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Title>'{keyword}' 검색 결과</S.Title>
        {isEmpty ? (
          <S.EmptyTextWrapper>
            <S.EmptyText>검색 결과가 없습니다.</S.EmptyText>
          </S.EmptyTextWrapper>
        ) : (
          <S.PostWrapper>
            {postList != []
              ? postList.map((item) => (
                  <PostItem
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
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Search;
