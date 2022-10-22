import addKeydownListener from "../lib/events/keydown";
import addInputListener from "../lib/events/input";

const Textarea = () => {
  const textarea: HTMLElement | null = document.querySelector(".textarea");

  let filter = "";

  textarea!.focus();

  // Keep editor focused
  textarea!.addEventListener("blur", (e: any) => e.target.focus());
  addInputListener(textarea!);
  addKeydownListener(textarea!, filter);
  return (
    <div contentEditable="true" className="textarea">
      <h1 id="title" data-placeholder="Untitled">
        <br />
      </h1>
    </div>
  );
};

export default Textarea;
