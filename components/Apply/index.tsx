import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { acceptApply, rejectApply, getReceiveApplies, getSendApplies } from '../../utils/api/apply';
import { GetSendAppliesResponse, GetReceiveAppliesResponse } from '../../utils/api/apply/payload';
import Header from "../Header";
import * as S from './style';

const Apply: FC = () => {
    const [sendApplies, setSendApplies] = useState<GetSendAppliesResponse[]>([]);
    const [receiveApplies, setReceiveApplies] = useState<GetReceiveAppliesResponse[]>([]);
    const router = useRouter();

    useEffect(() => {
        getSendAppliesApiCall();
        getReceiveAppliesApiCall();
    }, [])

    useEffect(() => {
        console.log(sendApplies);
        console.log(receiveApplies);
    }, [sendApplies, receiveApplies])

    const getSendAppliesApiCall = () => {
        getSendApplies().then(
            (res) => {
                setSendApplies(res);
                Promise.resolve(res);
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
                    default:
                        break;
                }
                return Promise.reject(err.response);
            }
        );
    }

    const getReceiveAppliesApiCall = () => {
        getReceiveApplies().then(
            (res) => {
                setReceiveApplies(res);
                Promise.resolve(res);
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
                    default:
                        break;
                }
                return Promise.reject(err.response);
            }
        );
    }

    const acceptApplyApiCall = (applyId: number) => {
        acceptApply(applyId).then(
            (res) => Promise.resolve(res),
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
                    default:
                        break;
                }
                return Promise.reject(err.response);
            }
        )
        getReceiveAppliesApiCall();
    }

    const rejectApplyApiCall = (applyId: number) => {
        rejectApply(applyId).then(
            (res) => Promise.resolve(res),
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
                    default:
                        break;
                }
                return Promise.reject(err.response);
            }
        )
        getReceiveAppliesApiCall();
    }

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <S.LeftWrapper>
                    <S.Title>보낸 신청</S.Title>
                    <S.InnerWrapper>
                        {sendApplies.map((item) => (
                            <S.SendApplyWrapper key={item.applyId}>
                                <S.SendApplyPostTitle onClick={() => router.push(`/post/${item.applyPostId}`)}>{item.applyPostTitle}</S.SendApplyPostTitle>
                                <S.SendApplyPostState state={item.applyState}>{item.applyState === "accept" ? "승인됨" : item.applyState === "reject" ? "거절됨" : "대기중"}</S.SendApplyPostState>
                            </S.SendApplyWrapper>
                        ))}
                    </S.InnerWrapper>
                </S.LeftWrapper>
                <S.DividingLine />
                <S.RightWrapper>
                    <S.Title>받은 신청</S.Title>
                    <S.InnerWrapper>
                        {receiveApplies.map((item) => (
                            <S.ReceiveApplyWrapper key={item.applyId}>
                                <S.ReceiveApplyLeftWrapper>
                                    <S.ReceiveApplyPostTitle onClick={() => router.push(`/post/${item.applyPostId}`)}>{item.applyPostTitle}</S.ReceiveApplyPostTitle>
                                    <S.ReceiveApplyPostAuthor>
                                        <S.ReceiveApplyPostAuthorProfile src={item.applyApplicantProfile || "https://s1.dmcdn.net/v/33FvQ1KB-ZLki-Xwt/x1080"} />
                                        <S.ReceiveApplyPostAuthorNickname>{item.applyApplicantNickname}</S.ReceiveApplyPostAuthorNickname>
                                    </S.ReceiveApplyPostAuthor>
                                </S.ReceiveApplyLeftWrapper>
                                <S.ReceiveApplyRightWrapper center={item.applyState === "pending"} >
                                    <S.ReceiveApplyAcceptBtn none={item.applyState === "reject"} onClick={item.applyState === "pending" ? () => acceptApplyApiCall(item.applyId) : null} />
                                    <S.ReceiveApplyRejectBtn none={item.applyState === "accept"} onClick={item.applyState === "pending" ? () => rejectApplyApiCall(item.applyId) : null} />
                                </S.ReceiveApplyRightWrapper>
                            </S.ReceiveApplyWrapper>
                        ))}
                    </S.InnerWrapper>
                </S.RightWrapper>
            </S.Wrapper>
        </S.Container>
    )
}

export default Apply;