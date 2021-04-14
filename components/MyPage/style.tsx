import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h1`
  margin-left: 44px;
  font-size: 40px;
  font-weight: bold;
  color: #807777;
`;

export const ContentsWrapper = styled.div`
  width: 1200px;
  height: 524px;
  border: 1px solid #4f4646;
  border-radius: 20px;
  display: flex;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 252px;
  height: 252px;
  border-radius: 50%;
  border: 3px solid #4f4646;
  margin-top: 37px;
  margin-left: 54px;
`;

export const ImgLabel = styled.label`
  width: 100px;
  height: 50px;
  background-color: #4f4646;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  border-radius: 16px;
  margin-top: 35px;
  margin-left: 130px;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const InfoFormWrapper = styled.div`
  margin-left: 63px;
  margin-top: 42px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const InfoTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #807777;
  margin: 0;
`;

export const InfoTextButtonWrapper = styled.div`
  display: flex;
`;

export const InfoText = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 16px;
  border: 2px solid #4f4646;
  margin-top: 10px;
  font-size: 20px;
  color: #807777;
  padding-left: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoNicknameInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 16px;
  border: 2px solid #4f4646;
  margin-top: 10px;
  font-size: 20px;
  color: #807777;
  padding-left: 13px;
  display: flex;
  outline: none;
`;

export const InfoFixButton = styled.button`
  width: 111px;
  height: 50px;
  background: #4f4646;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const InfoCancelButton = styled.button`
  width: 111px;
  height: 50px;
  background: #fff;
  color: #4f4646;
  border: 1px solid #4f4646;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
`;

export const nicknameErrorText = styled.p`
  color: red;
  margin: 0;
  margin-left: 10px;
  visibility: ${(props) => (props.isError ? "inherit" : "hidden")};
`;

export const ButtonWrapper = styled.div`
  width: 620px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const ChangePasswordButton = styled.button`
  width: 300px;
  height: 50px;
  color: #fff;
  background: #4f4646;
  border-radius: 10px;
  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  width: 300px;
  height: 50px;
  color: #4f4646;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #4f4646;
  font-size: 28px;
  outline: none;
  cursor: pointer;
`;

export const BottomButtonWrapper = styled.div`
  width: 620px;
  height: 50px;
  margin-top: 50px;
  margin-left: 185px;
  display: flex;
  justify-content: space-between;
`;

export const ConfirmListButton = styled.button`
  width: 300px;
  height: 50px;
  color: #fff;
  background: #4f4646;
  border-radius: 10px;
  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SignOutButton = styled.button`
  width: 300px;
  height: 50px;
  background: #d7c7a6;
  color: #fff;
  border-radius: 10px;
  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
`;
