import "./main.scss";
import addBlock from "../libs/addBlock";
import filterBlocks from "../libs/filterBlocks";
import keepLastElement from "../libs/keepLastElement";
import setOverlayPosition from "../libs/setOverlayPosition";
import togglePlaceholder from "../libs/togglePlaceholder";

const textarea: HTMLElement | null = document.querySelector(".textarea");

let filter = "";

textarea!.focus();

// Keep editor focused
textarea && textarea.addEventListener("blur", (e: any) => e.target.focus());

keepLastElement(textarea);
togglePlaceholder(textarea);
setOverlayPosition(textarea);
addBlock(textarea);
filterBlocks(textarea, filter);
