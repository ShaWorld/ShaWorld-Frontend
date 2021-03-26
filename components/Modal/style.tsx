import styled from "styled-components";

export const ModalContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #000;
  opacity: 0.3;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 50;
`;

export const Modal = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 15px;
`;
