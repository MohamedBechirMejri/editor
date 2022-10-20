import blockInputOnFirstElement from "../blockInputOnFirstElement";
import clickFirstBlock from "../clickFirstBlock";
import filterBlocks from "../filterBlocks";
import toggleOverlay from "../toggleOverlay";

const addKeydownListener = (textarea: HTMLElement, filter: string) => {
  const overlay = document.querySelector(".block-picker");
  const blocks: NodeList = document.querySelectorAll(".block");

  textarea.addEventListener("keydown", e => {
    const { classList } = overlay!;
    const { children } = textarea;

    switch (true) {
      case e.key.length === 1:
        filter += e.key; // add letters or numbers only
        break;

      case e.key === " ":
        blockInputOnFirstElement(e, children);
        break;

      case e.key === "/":
        toggleOverlay("open");
        break;

      case e.key === "Backspace":
        blockInputOnFirstElement(e, children);
        if (classList.contains("open")) filter = filter.slice(0, -1); // delete last character
        break;

      case e.key === "Escape":
        filter = ""; // clear filter
        e.preventDefault();
        break;

      case e.key === "Enter":
        if (e.key === "Enter" && classList.contains("open"))
          clickFirstBlock(blocks);
        filter = ""; // clear filter
        e.preventDefault();
        break;
    }

    if (!filter) toggleOverlay("close");
    filterBlocks(blocks, filter);
  });
};
export default addKeydownListener;
