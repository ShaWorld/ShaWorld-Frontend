import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  height: 65px;
  background: #4f4646;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContentsWrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
`;

export const HeaderLeftWrapper = styled.div`
  width: 667px;
  height: 100%;
  padding-left: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  width: 150px;
  height: 65px;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderSearchBar = styled.input`
  width: 459px;
  height: 42px;
  border-radius: 50px;
  padding-left: 26px;
  border: 1px solid #707070;
  font-size: 22px;
  outline: none;
`;

export const HeaderRightWrapper = styled.div`
  width: 533px;
  height: 100%;
  padding-right: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderAuthLink = styled.p`
  font-size: 20px;
  color: #fff;
  margin-left: 17px;
  cursor: pointer;
`;

export const HeaderPost = styled.p`
  font-size: 25px;
  color: #fff;
  cursor: pointer;
`;

export const HeaderProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 40px;
`;

export const HeaderNickname = styled.p`
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
`;
