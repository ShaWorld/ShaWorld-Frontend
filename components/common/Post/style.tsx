import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
  margin-bottom: 25px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 19px;
  border: 1px solid #707070;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 61px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export const PriceAndNicknameWrapper = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.h3`
  margin: 0;
  color: #0a17bc;
  font-size: 18px;
`;

export const Nickname = styled.p`
  margin: 0;
  font-size: 15px;
`;

export const Address = styled.p`
  font-size: 10px;
  margin: 0;
`;
