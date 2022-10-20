import moveCursortoNextElement from "../moveCursortoNextElement";
import toggleOverlay from "../toggleOverlay";

const addBlockClickListener = () => {
  const h1 = document.getElementById("h1-block");
  const h2 = document.getElementById("h2-block");
  const h3 = document.getElementById("h3-block");

  const handleClick = (html: string) => {
    window!
      .getSelection()!
      .focusNode!.parentElement!.insertAdjacentHTML("afterend", html);

    toggleOverlay("close");
    moveCursortoNextElement();
  };

  h1!.addEventListener("click", () => {
    handleClick(`<h1 data-placeholder='Heading 1'><br /></h1>`);
  });

  h2!.addEventListener("click", () => {
    handleClick(`<h2 data-placeholder='Heading 2'><br /></h2>`);
  });

  h3!.addEventListener("click", () => {
    handleClick(`<h3 data-placeholder='Heading 3'><br /></h3>`);
  });
};
export default addBlockClickListener;
