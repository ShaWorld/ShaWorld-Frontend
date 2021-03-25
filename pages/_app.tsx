import { AppProps } from "next/app";
import { rootStore } from "../modules/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

const store = rootStore();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default App;
