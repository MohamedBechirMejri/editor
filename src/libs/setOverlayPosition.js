import getCaretCoords from "./getCaretCoords";

const setOverlayPosition = el => {
  el.addEventListener("input", () => {
    const overlay = document.querySelector(".block-picker");
    const { x, y } = getCaretCoords();

    overlay.style.position = "fixed";
    overlay.style.top = y + 35 + "px";
    overlay.style.left = x + 10 + "px";
  });
};
export default setOverlayPosition;
