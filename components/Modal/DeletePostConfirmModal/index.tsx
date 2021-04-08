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
    deletePost(pid);
    deleteModal();
    router.push("/");
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
