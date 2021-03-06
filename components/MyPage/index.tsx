import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import useUser from "../../utils/hooks/user";
import Header from "../Header";
import * as S from "./style";
import useModal from "../../utils/hooks/modal";
import { changeNickname, changeProfile } from "../../utils/api/mypage";

const MyPage: FC = () => {
  const router = useRouter();
  const [changedNickname, setChangedNickname] = useState<string>("");
  const [changingNickname, setChangingNickname] = useState<boolean>(false);
  const [nicknameErrorText, setNicknameErrorText] = useState<string>("");
  const {
    setState: { modalOn },
  } = useModal();
  const {
    state: { userEmail, userNickname, userProfile },
    setState: { setUserInfo },
  } = useUser();

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedNickname(e.target.value);
  };

  const startChangingNickname = () => {
    setNicknameErrorText("");
    setChangedNickname("");
    setChangingNickname(true);
  };

  const onSubmitChangedNickname = (): Promise<object> => {
    if (!changedNickname) {
      setNicknameErrorText("닉네임을 입력하세요.");
      return;
    } else if (changedNickname.length < 2 || changedNickname.length > 8) {
      setNicknameErrorText("2 ~ 8자");
      return;
    }
    changeNickname(changedNickname).then(
      (res) => {
        setChangingNickname(false);
        location.reload();
        return Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 401: {
            switch (err.response.data.code) {
              case "TOKEN_EXPRIATION":
                alert("만료된 토큰입니다.");
                break;
              case "INVALID_TOKEN":
                alert("유효하지 않은 토큰입니다.");
                break;
              default:
                break;
            }
          }
          case 404: {
            switch (err.response.data.code) {
              case "USER_NOT_FOUND":
                alert("존재하지 않는 사용자입니다.");
                break;
              default:
                break;
            }
          }
          case 409: {
            switch (err.response.data.code) {
              case "NICKNAME_DUPLICATION":
                setNicknameErrorText("이미 사용중인 닉네임입니다.");
                break;
              default:
                break;
            }
          }
          default:
            break;
        }
        return Promise.reject(err.response);
      }
    );
  };

  const onSubmitProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeProfile(e.target.files[0]).then(
      (res) => {
        location.reload();
        return Promise.resolve(res);
      },
      () => {}
    );
  };

  const logout = () => {
    localStorage.removeItem("Authorization");
    setUserInfo({
      userEmail: "",
      userNickname: "",
      userProfile: "",
    });
    router.push("/");
  };

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Title>마이페이지</S.Title>
        <S.ContentsWrapper>
          <S.ImgContainer>
            <S.Img
              src={
                userProfile != null
                  ? userProfile
                  : "https://s1.dmcdn.net/v/33FvQ1KB-ZLki-Xwt/x1080"
              }
            />
            <S.ImgLabel>
              이미지 변경
              <S.ImgInput
                type="file"
                accept="image/png, image/jpeg"
                onChange={onSubmitProfile}
              />
            </S.ImgLabel>
          </S.ImgContainer>
          <S.InfoFormWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>닉네임</S.InfoTitle>
              {changingNickname ? (
                <>
                  <S.InfoTextButtonWrapper>
                    <S.InfoNicknameInput
                      type="text"
                      onChange={onChangeNickname}
                      placeholder={userNickname}
                    />
                    <S.InfoFixButton onClick={onSubmitChangedNickname}>
                      완료
                    </S.InfoFixButton>
                    <S.InfoCancelButton
                      onClick={() => setChangingNickname(false)}
                    >
                      취소
                    </S.InfoCancelButton>
                  </S.InfoTextButtonWrapper>
                  <S.nicknameErrorText isError={nicknameErrorText}>
                    {nicknameErrorText}
                  </S.nicknameErrorText>
                </>
              ) : (
                <S.InfoTextButtonWrapper>
                  <S.InfoText>{userNickname}</S.InfoText>
                  <S.InfoFixButton onClick={startChangingNickname}>
                    수정하기
                  </S.InfoFixButton>
                </S.InfoTextButtonWrapper>
              )}
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>이메일</S.InfoTitle>
              <S.InfoText>{userEmail}</S.InfoText>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <S.ChangePasswordButton onClick={() => router.push("/password")}>
                비밀번호 변경
              </S.ChangePasswordButton>
              <S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
            </S.ButtonWrapper>
            <S.BottomButtonWrapper>
              <S.ConfirmListButton onClick={() => router.push('/apply')}>신청목록 확인</S.ConfirmListButton>
              <S.SignOutButton onClick={() => modalOn("signOutConfirm")}>
                회원 탈퇴
              </S.SignOutButton>
            </S.BottomButtonWrapper>
          </S.InfoFormWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
