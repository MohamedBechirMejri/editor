import addKeydownListener from "../lib/events/keydown";
import addInputListener from "../lib/events/input";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const Textarea = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    textareaRef.current.focus();

    // Keep editor focused
    addInputListener(textareaRef.current!);
    addKeydownListener(textareaRef.current!, filter, setFilter);
  }, []);

  return (
    <div
      ref={textareaRef}
      contentEditable="true"
      className="textarea"
      onBlur={(e: any) => e.target.focus()}
    >
      <h1 id="title" data-placeholder="Untitled">
        <br />
      </h1>
    </div>
  );
};

export default Textarea;
