import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 426px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const InputFormWrapper = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LongInputBox = styled.input`
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
  color: #ff0000;
  visibility: ${(props) => (props.isError ? "inherit" : "hidden")};
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
  margin: 14px 0 20px 0;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const BottomText = styled.p`
  font-size: 10px;
  font-family: initial;
  color: #707070;
  margin: 0;
`;
