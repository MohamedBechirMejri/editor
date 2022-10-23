import addKeydownListener from "../lib/events/keydown";
import addInputListener from "../lib/events/input";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const Textarea = ({
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
  const textareaRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    textareaRef.current.focus();

    // Keep editor focused
    addInputListener(textareaRef.current!);
    addKeydownListener(
      textareaRef.current!,
      isOverlayVisible,
      filter,
      setFilter,
      setIsOverlayVisible
    );
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
