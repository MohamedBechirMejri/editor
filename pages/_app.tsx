import "../styles/globals.scss";
import type { AppProps } from "next/app";

const Editor = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default Editor;
