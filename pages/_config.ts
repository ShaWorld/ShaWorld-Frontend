import { createStore, Store } from "redux";
import rootReducer from ".";

export default function configureStore(): Store {
  const store = createStore(rootReducer);
  return store;
}