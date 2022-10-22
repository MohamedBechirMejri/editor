import "../styles/globals.scss";
import type { AppProps } from "next/app";
import addKeydownListener from "../lib/events/keydown";
import addBlockClickListener from "../lib/events/clickBlock";
import addInputListener from "../lib/events/input";

const Editor = ({ Component, pageProps }: AppProps) => {
  const textarea: HTMLElement | null = document.querySelector(".textarea");

  let filter = "";

  textarea!.focus();

  // Keep editor focused
  textarea!.addEventListener("blur", (e: any) => e.target.focus());

  addKeydownListener(textarea!, filter);
  addBlockClickListener();

  addInputListener(textarea!);

  return <Component {...pageProps} />;
};

export default Editor;
