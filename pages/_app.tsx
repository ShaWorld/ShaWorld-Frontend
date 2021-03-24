// pages/_app.tsx

import { AppProps } from "next/app";
import configureStore from "./_config";
import { Provider } from "react-redux";
import "../styles/globals.css";

const store = configureStore();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default App;
