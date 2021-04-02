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

export const ModalConfirmButton = styled.button`
  width: 100%;
  height: 50px;
  background: #4f4646;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 30%;
`;
