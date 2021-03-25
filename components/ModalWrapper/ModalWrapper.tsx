import React from "react";
import * as S from "./style";

const ModalWrapper = (props: any) => {
  const { modalData } = props;
  const { modalOff } = props;

  const { isShow, modalElement } = modalData;
  const Modal = modalElement;

  return (
    <>
      {isShow && (
        <S.Container onClick={modalOff}>{Modal && <Modal />}</S.Container>
      )}
    </>
  );
};

export default ModalWrapper;
