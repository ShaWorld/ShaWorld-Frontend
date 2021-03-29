import React, { FC } from "react";
import { useRouter } from "next/router";
import { signOut } from "../../../utils/api/mypage";
import useUser from "../../../utils/hooks/user";
import * as S from "./style";

interface Props {
  deleteModal: () => void;
}

const SignOutConfirmModal: FC<Props> = ({ deleteModal }) => {
  const router = useRouter();
  const {
    setState: { setUserInfo },
  } = useUser();

  const confirmSignOut = () => {
    signOut();
    deleteModal();
    localStorage.removeItem("Authorization");
    setUserInfo({
      userEmail: "",
      userNickname: "",
      userProfile: "",
    });
    router.push("/");
  };

  return (
    <S.ModalContainer>
      <S.ModalText>정말 탈퇴하시겠습니까?</S.ModalText>
      <S.ModalButtonWrapper>
        <S.ModalConfirmButton onClick={confirmSignOut}>
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
