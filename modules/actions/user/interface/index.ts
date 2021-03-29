export const SET_USER_INFO = "user/SET_USER_INFO" as const;

export interface userInfo {
  userNickname: string;
  userProfile: string;
}
