import React, { FC } from "react";

interface Props {
  deleteModal: () => void;
}

const SignUpAlertModal: FC<Props> = ({ deleteModal }) => {
  return <div onClick={deleteModal}>hello</div>;
};

export default SignUpAlertModal;
