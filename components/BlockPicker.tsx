import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import moveCursortoNextElement from "../lib/moveCursortoNextElement";
import toggleOverlay from "../lib/toggleOverlay";

const BlockPicker = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const handleClick = (html: string) => {
    window!
      .getSelection()!
      .focusNode!.parentElement!.insertAdjacentHTML("afterend", html);

    toggleOverlay("close");
    moveCursortoNextElement();
    setFilter("");
  };

  return (
    <div className="block-picker">
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
