import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "./style";

interface Props {
  deleteModal: () => void;
}

const SignUpAlertModal: FC<Props> = ({ deleteModal }) => {
  const router = useRouter();

  const confirmSignUp = () => {
    deleteModal();
    router.push("/");
  };

  return (
    <S.ModalContainer>
      <S.ModalText>회원가입에 성공하셨습니다.</S.ModalText>
      <S.ModalConfirmButton onClick={confirmSignUp}>확인</S.ModalConfirmButton>
    </S.ModalContainer>
  );
};

export default SignUpAlertModal;
