import { combineReducers } from "redux";
import signUpReducer from "./signUp";

const rootReducer = combineReducers({
  signUpReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
