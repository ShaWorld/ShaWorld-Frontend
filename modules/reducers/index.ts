import { combineReducers } from "redux";
import signUpReducer from "./signup";

const rootReducer = combineReducers({
  signup: signUpReducer,
});

export default rootReducer;

export type ReducerType = ReturnType<typeof rootReducer>;
