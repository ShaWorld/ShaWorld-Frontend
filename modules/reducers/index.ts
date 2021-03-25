import { combineReducers } from "redux";

const rootReducer = combineReducers({});

export default rootReducer;

export type ReducerType = ReturnType<typeof rootReducer>;
