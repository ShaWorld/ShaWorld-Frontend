import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

export function rootStore(): Store {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}
