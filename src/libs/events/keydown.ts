import clickFirstBlock from "../clickFirstBlock";
import filterBlocks from "../filterBlocks";
import toggleOverlay from "../toggleOverlay";

const addKeydownListener = (textarea: HTMLElement, filter: string) => {
  const overlay = document.querySelector(".block-picker");
  const blocks: NodeList = document.querySelectorAll(".block");

  textarea.addEventListener("keydown", e => {
    if (e.key === "/") toggleOverlay("open");

    if (overlay!.classList.contains("open")) {
      switch (true) {
        case e.key.length === 1:
          filter += e.key; // add letters or numbers only
          break;
        case e.key === "Backspace":
          filter = filter.slice(0, -1); // delete last character
          break;
        case e.key === "Enter" || e.key === "Escape":
          if (e.key === "Enter") clickFirstBlock(blocks);
          filter = ""; // clear filter
          e.preventDefault();
          break;
      }

      if (!filter) toggleOverlay("close");
      filterBlocks(blocks, filter);
    }
  });
};
export default addKeydownListener;
