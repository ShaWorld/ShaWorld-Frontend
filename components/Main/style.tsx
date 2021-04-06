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
  align-items: flex-start;
`;

export const Title = styled.h1`
  margin: 0;
  margin-left: 71px;
  margin-top: 53px;
  font-size: 30px;
  font-weight: bold;
  color: #807777;
`;

export const PostWrapper = styled.div`
  width: 1040px;
  margin-top: 35px;
  margin-left: 86px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &::after {
    content: "";
    flex-basis: 0;
    flex-grow: 1;
    flex-wrap: 1;
  }
`;
