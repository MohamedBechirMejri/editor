import { Dispatch, SetStateAction } from "react";
import blockInputOnFirstElement from "../blockInputOnFirstElement";
import clickFirstBlock from "../clickFirstBlock";
import filterBlocks from "../filterBlocks";

const addKeydownListener = (
  textarea: HTMLElement,
  isOverlayVisisble: boolean,
  filter: string,
  setFilter: Dispatch<SetStateAction<string>>,
  setIsOverlayVisible: Dispatch<SetStateAction<boolean>>
) => {
  const blocks: NodeList = document.querySelectorAll(".block");

  textarea.addEventListener("keydown", e => {
    const { children } = textarea;

    if (e.key === "/") setIsOverlayVisible(true);

    if (isOverlayVisisble && e.key.length === 1)
      setFilter(filter => filter + e.key); // add letters or numbers only

    if (e.key === " ") blockInputOnFirstElement(e, children);

    if (e.key === "Backspace") {
      blockInputOnFirstElement(e, children);
      if (isOverlayVisisble) setFilter(filter => filter.slice(0, -1)); // delete last character
    }

    if (e.key === "Escape") {
      setFilter(""); // clear filter
      e.preventDefault();
    }

    if (e.key === "Enter") {
      if (isOverlayVisisble) {
        clickFirstBlock(blocks);
        e.preventDefault();
      }
      setFilter(""); // clear filter
    }

    // if (!filter && e.key !== "/") setIsOverlayVisible(false);
    filterBlocks(blocks, filter);
  });
};
export default addKeydownListener;
