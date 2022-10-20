import setOverlayPosition from "../setOverlayPosition";

const addInputListener = (textarea: HTMLElement) => {
  textarea.addEventListener("input", () => {
    setOverlayPosition();
  });
};
export default addInputListener;
