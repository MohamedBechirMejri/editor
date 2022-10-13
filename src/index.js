import addBlock from "../libs/addBlock";
import keepLastElement from "../libs/keepLastElement";
import setOverlayPosition from "../libs/setOverlayPosition";
import toggleOverlay from "../libs/toggleOverlay";
import togglePlaceholder from "../libs/togglePlaceholder";

const textarea = document.querySelector(".textarea");

keepLastElement(textarea);
togglePlaceholder(textarea);
setOverlayPosition(textarea);
toggleOverlay(textarea);
addBlock(textarea);
