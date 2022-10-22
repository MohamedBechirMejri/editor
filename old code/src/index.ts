import "./styles/main.scss";
import addKeydownListener from "../../lib/events/keydown";
import addBlockClickListener from "../../lib/events/clickBlock";
import addInputListener from "../../lib/events/input";

const textarea: HTMLElement | null = document.querySelector(".textarea");

let filter = "";

textarea!.focus();

// Keep editor focused
textarea!.addEventListener("blur", (e: any) => e.target.focus());

addKeydownListener(textarea!, filter);
addBlockClickListener();

addInputListener(textarea!);
