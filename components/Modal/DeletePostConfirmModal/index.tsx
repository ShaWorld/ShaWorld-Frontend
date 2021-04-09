import React, { FC } from "react";
import { useRouter } from "next/router";
import * as S from "./style";
import { deletePost } from "../../../utils/api/postdetail";

interface Props {
  deleteModal: () => void;
}

const SignOutConfirmModal: FC<Props> = ({ deleteModal }) => {
  const router = useRouter();
  const { pid } = router.query;

  const confirmDeletePost = () => {
    deletePost(pid).then(
      (res) => {
        router.push("/");
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400: {
            switch (err.response.data.code) {
              case "AUTHOR_MISMATCH":
                alert("자신이 작성한 게시물이 아닙니다.");
                break;
              default:
                break;
            }
          }
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
    deleteModal();
    return;
  };

  return (
    <S.ModalContainer>
      <S.ModalText>정말 삭제하시겠습니까?</S.ModalText>
      <S.ModalButtonWrapper>
        <S.ModalConfirmButton onClick={confirmDeletePost}>
          확인
        </S.ModalConfirmButton>
        <S.ModalCancelButton onClick={() => deleteModal()}>
          취소
        </S.ModalCancelButton>
      </S.ModalButtonWrapper>
    </S.ModalContainer>
  );
};

export default SignOutConfirmModal;
