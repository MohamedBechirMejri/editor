import { Dispatch, SetStateAction } from "react";
import blockInputOnFirstElement from "../blockInputOnFirstElement";
import clickFirstBlock from "../clickFirstBlock";
import filterBlocks from "../filterBlocks";
import toggleOverlay from "../toggleOverlay";

const addKeydownListener = (
  textarea: HTMLElement,
  filter: string,
  setFilter: Dispatch<SetStateAction<string>>
) => {
  const overlay = document.querySelector(".block-picker");
  const blocks: NodeList = document.querySelectorAll(".block");

  textarea.addEventListener("keydown", e => {
    const { classList } = overlay!;
    const { children } = textarea;

    if (e.key === "/") toggleOverlay("open");

    if (classList.contains("open") && e.key.length === 1)
      setFilter(filter => (filter += e.key)); // add letters or numbers only

    if (e.key === " ") blockInputOnFirstElement(e, children);

    if (e.key === "Backspace") {
      blockInputOnFirstElement(e, children);
      if (classList.contains("open"))
        setFilter(filter => (filter = filter.slice(0, -1))); // delete last character
    }

    if (e.key === "Escape") {
      setFilter(""); // clear filter
      e.preventDefault();
    }

    if (e.key === "Enter") {
      if (classList.contains("open")) {
        clickFirstBlock(blocks);
        e.preventDefault();
      }
      setFilter(""); // clear filter
    }

    if (!filter && e.key !== "/") toggleOverlay("close");
    filterBlocks(blocks, filter);
  });
};
export default addKeydownListener;
