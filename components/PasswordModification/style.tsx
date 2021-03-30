import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  height: 150px;
  background: #fff;
  color: #4f4646;
  border: 1px solid #4f4646;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  margin-bottom: 69px;
`;

export const InputFormWrapper = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 2px solid #4f4646;
  box-sizing: border-box;
  outline: none;
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #707070;
  padding-left: 15px;
  font-size: 20px;

  &::placeholder {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const ErrorText = styled.p<{ isError: boolean }>`
  width: calc(100% - 20px);
  text-align: left;
  font-size: 13px;
  padding-left: 10px;
  color: #ff0000;
  visibility: ${({ isError }) => (isError ? "inherit" : "hidden")};
  height: 16px;
  margin: 0;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #4f4646;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 64px;
  outline: none;
  border: none;
  cursor: pointer;
`;
