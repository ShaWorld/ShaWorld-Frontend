import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 426px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: normal;
`;

export const ModalButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 30%;
  justify-content: space-between;
`;

export const ModalConfirmButton = styled.button`
  width: calc(50% - 10px);
  height: 50px;
  background: #4f4646;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ModalCancelButton = styled.button`
  width: calc(50% - 10px);
  height: 50px;
  background: #fff;
  color: #4f4646;
  border: 1px solid #4f4646;
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;
