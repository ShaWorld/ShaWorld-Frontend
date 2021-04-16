export interface GetSendAppliesResponse {
  applyId: number;

  applyPostId: number;

  applyPostTitle: string;

  applyState: string;
}

export interface GetReceiveAppliesResponse {
  applyId: number;

  applyPostId: number;

  applyPostTitle: string;

  applyApplicantProfile: string;

  applyApplicantNickname: string;

  applyState: string;
}
