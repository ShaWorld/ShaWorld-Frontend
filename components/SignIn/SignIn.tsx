import React from 'react';
import * as S from './style';

const SignIn = () => {
    return (
        <S.Container>
            <S.MainWrapper>
                <S.Logo>로고</S.Logo>
                <S.ErrorText>이메일 형식이 올바르지 않습니다.</S.ErrorText>
                <S.InputBox placeholder="이메일" name="email" autoComplete="off" />
                <S.InputBox type="password" placeholder="비밀번호" name="password" />
                <S.Button>로그인</S.Button>
                <S.DividingLine />
                <S.Button>회원가입</S.Button>
            </S.MainWrapper>
            <S.BottomText>©ShaWorld Inc. All Rights Reserved</S.BottomText>
        </S.Container>
    )
}

export default SignIn;