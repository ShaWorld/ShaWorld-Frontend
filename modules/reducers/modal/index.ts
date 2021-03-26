import { MODAL_ON, MODAL_OFF } from "../../actions/modal/interface";
import { ActionType } from "../../actions/modal";
import IModalState from "./interface";

const initialState: IModalState = {
  type: "",
};

const modalReducer = (
  state: IModalState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case MODAL_ON:
      return {
        ...state,
        type: action.payload,
      };
    case MODAL_OFF:
      return {
        ...state,
        type: "",
      };
    default:
      return state;
  }
};

export default modalReducer;
