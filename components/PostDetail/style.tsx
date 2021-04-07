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
  padding-top: 140px;
`;

export const LeftWrapper = styled.div`
  width: 455px;
  height: 100%;
  padding-left: 95px;
  display: flex;
  flex-direction: column;
`;

export const PostThumbnail = styled.img`
  width: 300px;
  height: 300px;
  border: 3px solid #4f4646;
  border-radius: 19px;
`;

export const Date = styled.p`
  width: 300px;
  color: #4f4646;
  text-align: center;
  margin-top: 50px;
`;

export const RightWrapper = styled.div`
  width: 745px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #4f4646;
  margin: 0;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Nickname = styled.p`
  color: #4f4646;
  margin: 0;
`;

export const Address = styled.p`
  color: #4f4646;
  margin: 0;
  margin-bottom: 33px;
`;

export const DetailTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #4f4646;
  margin-bottom: 16px;
`;

export const Detail = styled.div`
  width: 650px;
  height: 250px;
  color: #4f4646;
  border: 1px solid #4f4646;
  border-radius: 25px;
  padding: 15px 20px 15px 20px;
  white-space: pre-wrap;
`;

export const RightBottomWrapper = styled.div`
  width: 650px;
  height: 61px;
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
`;

export const ButtonWrapper = styled.div`
  width: 204px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SendMessageButton = styled.button`
  width: 100%;
  height: 100%;
  background: #4f4646;
  color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  outline: none;
  cursor: pointer;
`;

export const Price = styled.p`
  font-size: 46px;
  color: #4f4646;
  margin: 0;
`;
