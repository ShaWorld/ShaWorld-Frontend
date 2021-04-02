import React, { FC, useState } from "react";
import Header from "../Header";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./style";
import { createPost } from "../../utils/api/post";
import useModal from "../../utils/hooks/modal";
interface IPostForm {
  thumbnail: File;
  title: string;
  address: string;
  detail: string;
  price: number;
}

const Post: FC = () => {
  const [thumbnail, setThumbnail] = useState<string | ArrayBuffer>();
  const [postForm, setPostForm] = useState<IPostForm>({
    thumbnail: null,
    title: "",
    address: "",
    detail: "",
    price: 0,
  });
  const [titleErrorText, setTitleErrorText] = useState<string>("");
  const [addressErrorText, setAddressErrorText] = useState<string>("");
  const [detailErrorText, setDetailErrorText] = useState<string>("");
  const [priceErrorText, setPriceErrorText] = useState<string>("");
  const {
    setState: { modalOn },
  } = useModal();

  const onChangePostThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") return;

    const reader = new FileReader();

    setPostForm({
      ...postForm,
      thumbnail: e.target.files[0],
    });

    reader.onload = function (e) {
      setThumbnail(e.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const removeThumbnail = () => {
    setPostForm({
      ...postForm,
      thumbnail: null,
    });
  };

  const onChangePostForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "price") {
      setPostForm({
        ...postForm,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setPostForm({
        ...postForm,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onChangePostDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostForm({
      ...postForm,
      detail: e.target.value,
    });
  };

  const callFormatCheck = (): boolean => {
    const titleError = isTitleEmpty(),
      addressError = isAddressEmpty(),
      detailError = isDetailEmpty(),
      priceError = isPriceEmpty();

    return titleError || addressError || detailError || priceError;
  };

  const isTitleEmpty = (): boolean => {
    if (!postForm.title) {
      setTitleErrorText("제목을 입력해주세요.");
      return true;
    }
    setTitleErrorText("");
    return false;
  };

  const isAddressEmpty = (): boolean => {
    if (!postForm.address) {
      setAddressErrorText("주소를 입력해주세요.");
      return true;
    }
    setAddressErrorText("");
    return false;
  };

  const isDetailEmpty = (): boolean => {
    if (!postForm.detail) {
      setDetailErrorText("상세정보를 입력해주세요.");
      return true;
    }
    setDetailErrorText("");
    return false;
  };

  const isPriceEmpty = (): boolean => {
    if (!postForm.price) {
      setPriceErrorText("가격을 입력해주세요.");
      return true;
    } else if (isNaN(postForm.price)) {
      setPriceErrorText("가격은 숫자여야 합니다.");
      return true;
    }
    setPriceErrorText("");
    return false;
  };

  const onSubmitPostForm = () => {
    if (callFormatCheck()) return;
    createPost(postForm).then(
      () => {
        modalOn("completeCreatePostAlert");
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
      }
    );
  };

  return (
    <S.Containter>
      <Header />
      <S.Wrapper>
        <S.LeftWrapper>
          <S.PostThumbnail
            src={
              postForm.thumbnail === null
                ? "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                : thumbnail
            }
          />
          <S.ThumbnailButtonWrapper>
            <S.ThumbnailUploadBtn>
              <S.ThumbnailInputBox
                type="file"
                accept="image/png, image/jpeg"
                onChange={onChangePostThumbnail}
              />
              <ImageIcon fontSize="large" />
            </S.ThumbnailUploadBtn>
            <S.ThumbnailRemoveBtn onClick={removeThumbnail}>
              <DeleteIcon fontSize="large" />
            </S.ThumbnailRemoveBtn>
          </S.ThumbnailButtonWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.TitleInput
            type="text"
            name="title"
            placeholder="제목"
            onChange={onChangePostForm}
          />
          <S.ErrorText isError={titleErrorText}>{titleErrorText}</S.ErrorText>
          <S.AddressInput
            type="text"
            name="address"
            placeholder="주소"
            onChange={onChangePostForm}
          />
          <S.ErrorText isError={addressErrorText}>
            {addressErrorText}
          </S.ErrorText>
          <S.DetailTitle>상세정보</S.DetailTitle>
          <S.DetailInput
            placeholder="상세정보를 입력해주세요."
            onChange={onChangePostDetail}
          />
          <S.ErrorText isError={detailErrorText}>{detailErrorText}</S.ErrorText>
          <S.PriceInput
            name="price"
            placeholder="가격(일일 요금)"
            onChange={onChangePostForm}
          />
          <S.ErrorText isError={priceErrorText}>{priceErrorText}</S.ErrorText>
          <S.PostButton onClick={onSubmitPostForm}>생성</S.PostButton>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Containter>
  );
};

export default Post;
