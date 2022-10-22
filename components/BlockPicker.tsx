import Image from "next/image";
import addBlockClickListener from "../lib/events/clickBlock";

const BlockPicker = () => {
  addBlockClickListener();

  return (
    <div className="block-picker">
      <div>
        <h1>Add blocks</h1>
        <h2>Keep typing to filter, or escape to exit</h2>
      </div>
      <h3>
        Filtering keyword <span id="filter">1</span>
      </h3>
      <div className="block" id="h1-block">
        <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
        <div>
          <h1>Heading 1</h1>
          <p>Big section heading</p>
        </div>
      </div>
      <div className="block" id="h2-block">
        <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
        <div>
          <h1>Heading 2</h1>
          <p>Medium section heading</p>
        </div>
      </div>
      <div className="block" id="h3-block">
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
