import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import moveCursortoNextElement from "../lib/moveCursortoNextElement";

const BlockPicker = ({
  filter,
  setFilter,
  isOverlayVisible,
  setIsOverlayVisible,
}: {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  isOverlayVisible: boolean;
  setIsOverlayVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = (html: string) => {
    window!
      .getSelection()!
      .focusNode!.parentElement!.insertAdjacentHTML("afterend", html);

    setIsOverlayVisible(false);
    moveCursortoNextElement();
    setFilter("");
  };

  return (
    <div className={`block-picker ${isOverlayVisible && "open"}`}>
      <div>
        <h1>Add blocks</h1>
        <h2>Keep typing to filter, or escape to exit</h2>
      </div>
      <h3>
        Filtering keyword <span id="filter">{filter}</span>
      </h3>

      <div
        className="block"
        id="h1-block"
        onClick={() =>
          handleClick(`<h1 data-placeholder='Heading 1'><br /></h1>`)
        }
      >
        <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
        <div>
          <h1>Heading 1</h1>
          <p>Big section heading</p>
        </div>
      </div>
      <div
        className="block"
        id="h2-block"
        onClick={() =>
          handleClick(`<h2 data-placeholder='Heading 2'><br /></h2>`)
        }
      >
        <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
        <div>
          <h1>Heading 2</h1>
          <p>Medium section heading</p>
        </div>
      </div>
      <div
        className="block"
        id="h3-block"
        onClick={() =>
          handleClick(`<h3 data-placeholder='Heading 3'><br /></h3>`)
        }
      >
        <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
        <div>
          <h1>Heading 3</h1>
          <p>Small section heading</p>
        </div>
      </div>
    </div>
  );
};

export default BlockPicker;
