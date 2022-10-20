import "./styles/main.scss";
import addBlock from "./libs/addBlock";
import keepLastElement from "./libs/keepLastElement";
import setOverlayPosition from "./libs/setOverlayPosition";
import togglePlaceholder from "./libs/togglePlaceholder";
import addKeydownListener from "./libs/events/keydown";

const textarea: HTMLElement | null = document.querySelector(".textarea");

let filter = "";

textarea!.focus();

// Keep editor focused
if (textarea) textarea.addEventListener("blur", (e: any) => e.target.focus());

addKeydownListener(textarea!, filter);

keepLastElement(textarea);
togglePlaceholder(textarea);
setOverlayPosition(textarea);
addBlock();
