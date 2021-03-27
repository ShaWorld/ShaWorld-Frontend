import React from "react";
import useModal from "../../utils/hooks/modal";
import SignUpAlertModal from "./SignUpAlertModal";
import * as S from "./style";

const MODAL_TYPE = {
  signUpAlertModal: "signUpAlert",
};

const Modal = () => {
  const { state, setState } = useModal();

  const deleteModal = (): void => {
    setState.modalOff();
  };
  const modalClickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <React.Fragment>
      {state.type !== "" ? (
        <S.ModalContentsWrapper>
          <S.Modal onClick={modalClickHandler}>
            {state.type === MODAL_TYPE.signUpAlertModal ? (
              <SignUpAlertModal deleteModal={deleteModal} />
            ) : (
              ""
            )}
          </S.Modal>
        </S.ModalContentsWrapper>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Modal;
