import React from 'react';
import * as S from './style';

const SignUp = () => {
    return (
        <S.Container>
            <S.MainWrapper>
                <S.Logo>로고</S.Logo>
                <S.LongInputBox placeholder="이메일" autoComplete="off" />
                <S.ErrorText>일치하는 이메일이 없습니다.</S.ErrorText>
                <S.LongInputBox placeholder="비밀번호" autoComplete="off" />
                <S.ErrorText>8 ~ 20자 (알파벳 소문자, 숫자, 특수기호만 가능)</S.ErrorText>
                <S.LongInputBox placeholder="비밀번호 재확인" autoComplete="off" />
                <S.ErrorText>비밀번호가 일치하지 않습니다.</S.ErrorText>
                <S.LongInputBox placeholder="닉네임" autoComplete="off" />
                <S.ErrorText>이미 사용중인 닉네임입니다.</S.ErrorText>
                <S.Button>회원가입</S.Button>
            </S.MainWrapper>
            <S.BottomText>©ShaWorld Inc. All Rights Reserved</S.BottomText>
        </S.Container>
    )
}

export default SignUp;