import clickFirstBlock from "../clickFirstBlock";
import filterBlocks from "../filterBlocks";
import toggleOverlay from "../toggleOverlay";

const addKeydownListener = (textarea: HTMLElement, filter: string) => {
  const overlay = document.querySelector(".block-picker");
  const blocks: NodeList = document.querySelectorAll(".block");

  textarea.addEventListener("keydown", e => {
    if (e.key === "/") toggleOverlay("open");

    if (overlay!.classList.contains("open")) {
      if (e.key.length === 1) filter += e.key;
      if (e.key === "Enter" || e.key === "Escape") filter = "";
      if (e.key === "Backspace") filter = filter.slice(0, -1);

      if (!filter) toggleOverlay("close");

      if (e.key === "Enter" && overlay!.classList.contains("open")) {
        clickFirstBlock(blocks);
        e.preventDefault();
      }

      filterBlocks(blocks, filter);
    }
  });
};
export default addKeydownListener;
