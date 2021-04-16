import styled from 'styled-components';

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
  padding-top: 100px;
  box-sizing: border-box;
`;

export const LeftWrapper = styled.div`
  width: 599px;
  height: 100%;
  padding-left: 40px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: #807777;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SendApplyWrapper = styled.div`
    width: 450px;
    height: 80px;
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #4F4646;
    border-radius: 15px;
    margin-bottom: 20px;
`;

export const SendApplyPostTitle = styled.h3`
    font-size: 30px;
    color: #807777;
    cursor: pointer;
`;

export const SendApplyPostState = styled.h3<{ state: string }>`
    font-size: 30px;
    color: ${(props) => props.state === "accept" ? "#5579D9" : props.state === "reject" ? "#EB4A5D" : "#000000"};
`;

export const DividingLine = styled.div`
  width: 2px;
  height: 60%;
  background-color: #4F4646;
  margin-top: 50px;
`;

export const RightWrapper = styled.div`
  width: 599px;
  height: 100%;
  padding-left: 40px;
`;

export const ReceiveApplyWrapper = styled.div`
    width: 450px;
    height: 160px;
    display: flex;
    padding: 0 15px;
    background-color: #4f4646;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #4F4646;
    border-radius: 15px;
    margin-bottom: 20px;
`;

export const ReceiveApplyLeftWrapper = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const ReceiveApplyPostTitle = styled.h3`
  margin: 0;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
`;

export const ReceiveApplyPostAuthor = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ReceiveApplyPostAuthorProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const ReceiveApplyPostAuthorNickname = styled.p`
    margin: 0;
    margin-left: 12px;
    font-size: 20px;
    color: #fff;
`

export const ReceiveApplyRightWrapper = styled.div<{ center: boolean }>`
    width: 50px;
    height: 115px;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.center ? "space-between" : "center"};
`;

export const ReceiveApplyAcceptBtn = styled.button<{ none: boolean }>`
    width: 50px;
    height: 50px;
    background-color: #3AD658;
    outline: none;
    border: none;
    cursor: pointer;
    display: ${(props) => props.none ? "none" : "inline-block"};
`;

export const ReceiveApplyRejectBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #E33D3D;
    outline: none;
    border: none;
    cursor: pointer;
    display: ${(props) => props.none ? "none" : "inline-block"};
`;