import setOverlayPosition from "../setOverlayPosition";
import togglePlaceholder from "../togglePlaceholder";

const addInputListener = (textarea: HTMLElement) => {
  textarea.addEventListener("input", () => {
    setOverlayPosition();
    togglePlaceholder(textarea);
  });
};
export default addInputListener;
