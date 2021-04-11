import { SET_KEYWORD } from "../../actions/search/interface";
import { ActionType } from "../../actions/search";
import ISearchState from "./interface";

const initialState: ISearchState = {
  keyword: "",
};

const searchReducer = (
  state: ISearchState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_KEYWORD:
      return {
        keyword: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
