import React from "react";
import useModal from "../../utils/hooks/modal";
import SignUpAlertModal from "./SignUpAlertModal";
import SignOutConfirmModal from "./SignOutConfirmModal";
import PasswordChangeAlertModal from "./PasswordChangeAlertModal";
import CompleteCreatePostAlertModal from "./CompleteCreatePostAlertModal";
import DeletePostConfirmModal from "./DeletePostConfirmModal";
import ApplyRentalConfirmModal from "./ApplyRentalConfirmModal";
import * as S from "./style";

const MODAL_TYPE = {
  signUpAlertModal: "signUpAlert",
  signOutConfirmModal: "signOutConfirm",
  passwordChangeAlertModal: "passwordChangeAlert",
  completeCreatePostAlertModal: "completeCreatePostAlert",
  deletePostConfirmModal: "deletePostConfirm",
  applyRentalConfirmModal: "applyRentalConfirm",
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
            {state.type === MODAL_TYPE.signOutConfirmModal ? (
              <SignOutConfirmModal deleteModal={deleteModal} />
            ) : (
              ""
            )}
            {state.type === MODAL_TYPE.passwordChangeAlertModal ? (
              <PasswordChangeAlertModal deleteModal={deleteModal} />
            ) : (
              ""
            )}
            {state.type === MODAL_TYPE.completeCreatePostAlertModal ? (
              <CompleteCreatePostAlertModal deleteModal={deleteModal} />
            ) : (
              ""
            )}
            {state.type === MODAL_TYPE.deletePostConfirmModal ? (
              <DeletePostConfirmModal deleteModal={deleteModal} />
            ) : (
              ""
            )}
            {state.type === MODAL_TYPE.applyRentalConfirmModal ? (
              <ApplyRentalConfirmModal deleteModal={deleteModal} />
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
