import React, { FC } from "react";
import { useRouter } from "next/router";
import * as S from "./style";
import { applyPost } from "../../../utils/api/postdetail";

interface Props {
  deleteModal: () => void;
}

const SignOutConfirmModal: FC<Props> = ({ deleteModal }) => {
  const router = useRouter();
  const { pid } = router.query;

  const confirmApplyRental = () => {
    if (localStorage.getItem("token") === null) {
      deleteModal();
      alert("로그인 후 사용 가능한 서비스입니다.");
      router.push('/signin');
      return;
    }
    applyPost(pid).then(
      (res) => {
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
          case 409: {
            switch (err.response.data.code) {
              case "APPLY_DUPLICATION":
                alert("이미 신청했습니다.");
                location.reload();
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
    router.push('/');
    return;
  };

  return (
    <S.ModalContainer>
      <S.ModalText>대여 신청하시겠습니까?</S.ModalText>
      <S.ModalButtonWrapper>
        <S.ModalConfirmButton onClick={confirmApplyRental}>
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
