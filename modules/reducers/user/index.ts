import { SET_USER_INFO } from "../../actions/user/interface";
import { ActionType } from "../../actions/user";
import IUserState from "./interface";

const initialState: IUserState = {
  userEmail: "",
  userNickname: "",
  userProfile: "",
};

const userReducer = (state: IUserState = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userEmail: action.payload.userEmail,
        userNickname: action.payload.userNickname,
        userProfile: action.payload.userProfile,
      };
    default:
      return state;
  }
};

export default userReducer;
