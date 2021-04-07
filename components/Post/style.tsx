import styled from "styled-components";

export const Containter = styled.div`
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

export const ThumbnailButtonWrapper = styled.label`
  width: 251px;
  height: 83px;
  display: flex;
  justify-content: space-between;
  margin-left: 24px;
  margin-top: 21px;
`;

export const ThumbnailInputBox = styled.input`
  display: none;
`;

export const ThumbnailUploadBtn = styled.div`
  width: 99px;
  height: 83px;
  background-color: #4f4646;
  border-radius: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThumbnailRemoveBtn = styled.button`
  width: 99px;
  height: 83px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #4f4646;
  color: #4f4646;
  cursor: pointer;
  outline: none;
`;

export const RightWrapper = styled.div`
  width: 745px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  width: 365px;
  height: 50px;
  border: 2px solid #4f4646;
  border-radius: 16px;
  color: #4f4646;
  padding-left: 15px;
  outline: none;
  font-size: 20px;

  &::placeholder {
    font-size: 25px;
  }
`;

export const ErrorText = styled.p<{ isError: boolean }>`
  padding-left: 10px;
  margin: 0;
  height: 16px;
  color: red;
  visibility: ${({ isError }) => (isError ? "inherit" : "hidden")};
`;

export const AddressInput = styled.input`
  width: 365px;
  height: 40px;
  border: 2px solid #4f4646;
  border-radius: 10px;
  color: #4f4646;
  padding-left: 15px;
  outline: none;
  font-size: 18px;
  margin-top: 10px;

  &::placeholder {
    font-size: 20px;
  }
`;

export const DetailTitle = styled.p`
  font-size: 20px;
  color: #4f4646;
  margin: 0;
  margin-top: 36px;
`;

export const DetailInput = styled.textarea`
  width: 650px;
  height: 250px;
  border: 1px solid #4f4646;
  border-radius: 25px;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
  font-size: 18px;
  resize: none;

  &::placeholder {
    font-size: 20px;
  }
`;

export const PriceInput = styled.input`
  width: 247px;
  height: 50px;
  border-radius: 16px;
  border: 2px solid #4f4646;
  margin-top: 30px;
  font-size: 18px;
  outline: none;
  padding-left: 15px;
  x &::placeholder {
    font-size: 20px;
  }
`;

export const PostButton = styled.button`
  width: 93px;
  height: 61px;
  background-color: #4f4646;
  border-radius: 20px;
  color: #fff;
  border: none;
  font-size: 20px;
  margin-left: 604px;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
`;
