import { combineReducers } from "redux";
import modalReducer from "./modal";
import userReducer from "./user";
import searchReducer from "./search";

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  search: searchReducer,
});

export default rootReducer;

export type ReducerType = ReturnType<typeof rootReducer>;
