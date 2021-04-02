import React, { FC } from "react";
import { useRouter } from "next/router";
import * as S from "./style";

interface Props {
  deleteModal: () => void;
}

const PasswordChangeAlertModal: FC<Props> = ({ deleteModal }) => {
  const router = useRouter();

  const confirmPasswordChange = () => {
    deleteModal();
    router.push("/");
  };

  return (
    <S.ModalContainer>
      <S.ModalText>대여 물품 등록에 성공하셨습니다.</S.ModalText>
      <S.ModalConfirmButton onClick={confirmPasswordChange}>
        확인
      </S.ModalConfirmButton>
    </S.ModalContainer>
  );
};

export default PasswordChangeAlertModal;
