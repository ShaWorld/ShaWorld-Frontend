import styled from 'styled-components';

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
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
    width: 200px;
    height: 100px;
    background: #4F4646;
    margin-bottom: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

export const Button = styled.button`
    width: 100%;
    height: 50px;
    background: #4F4646;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    margin: 14px 0 20px 0;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const LongInputBox = styled.input`
    width: 100%;
    height: 50px;
    border: 2px solid #4F4646;
    box-sizing: border-box;
    outline: none;
    border-radius: 16px;
    margin-top: 10px;
    color: #707070;
    padding-left: 15px;
    font-size: 20px;

    &::placeholder {
        font-size: 25px;
        line-height: 25px;
    }
`;

export const ErrorText = styled.p`
    width: calc(100% - 20px);
    text-align: left;
    font-size: 13px;
    color: #FF0000;
    margin: 0;
`;

export const BottomText = styled.p`
    font-size: 10px;
    color: #707070;
    margin: 0;
`;