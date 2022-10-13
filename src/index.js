import getCaretCoords from "../libs/getCaretCoords";
import keepLastElement from "../libs/keepLastElement";
import togglePlaceholder from "../libs/togglePlaceholder";

const textarea = document.querySelector(".textarea");

textarea.addEventListener("input", e => {
  const overlay = document.querySelector(".block-picker");
  const { x, y } = getCaretCoords();

  overlay.classList.add("open");

  overlay.style.position = "fixed";
  overlay.style.top = y + 35 + "px";
  overlay.style.left = x + 10 + "px";
});

keepLastElement(textarea);
togglePlaceholder(textarea);
