import { AppProps } from "next/app";
import { rootStore } from "../modules/store";
import { Provider } from "react-redux";
import Modal from "../components/Modal";
import "../styles/globals.css";

const store = rootStore();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Modal />
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default App;
