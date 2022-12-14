import getCaretCoords from "./getCaretCoords";

const setOverlayPosition = () => {
  const overlay: HTMLElement | null = document.querySelector(".block-picker");
  const { x, y } = getCaretCoords();

  overlay!.style.position = "fixed";
  overlay!.style.top = y + 35 + "px";
  overlay!.style.left = x + 10 + "px";
};
export default setOverlayPosition;
