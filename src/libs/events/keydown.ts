import filterBlocks from "../filterBlocks";
import toggleOverlay from "../toggleOverlay";

const addKeydownListener = (textarea: HTMLElement, filter: string) => {
  const overlay = document.querySelector(".block-picker");

  textarea.addEventListener("keydown", e => {
    if (e.key === "/") toggleOverlay("open");

    if (overlay!.classList.contains("open")) {
      if (e.key.length === 1) filter += e.key;
      if (e.key === "Enter" || e.key === "Escape") filter = "";
      if (e.key === "Backspace") filter = filter.slice(0, -1);

      if (!filter) toggleOverlay("close");

      const blocks = document.querySelectorAll(".block");

      filterBlocks(blocks, filter);
    }
  });
};
export default addKeydownListener;
