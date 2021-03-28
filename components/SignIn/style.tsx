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
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 200px;
  height: 100px;
  background: #4f4646;
  margin-bottom: 23px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const ErrorText = styled.p`
  visibility: ${(props) => (props.isError ? "inherit" : "hidden")};
  font-size: 13px;
  color: #ff0000;
  height: 16px;
  margin: 0;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid #4f4646;
  box-sizing: border-box;
  outline: none;
  border-radius: 16px;
  margin-top: 23px;
  color: #707070;
  padding-left: 15px;
  font-size: 20px;

  &::placeholder {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const InitPassword = styled.a`
  width: 280px;
  text-align: left;
  font-size: 13px;
  color: #707070;
  text-decoration: underline;
  cursor: pointer;
  margin: 0;
  margin-top: 14px;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background: #4f4646;
  color: #fff;
  font-size: 28px;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const DividingLine = styled.div`
  width: 300px;
  height: 1px;
  background: #4f4646;
`;

export const BottomText = styled.p`
  font-size: 10px;
  color: #707070;
  margin: 0;
`;
