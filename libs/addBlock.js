import moveCursortoNextElement from "./moveCursortoNextElement";

const addBlock = el => {
  const overlay = document.querySelector(".block-picker");

  const h1 = document.getElementById("h1-block");
  const h2 = document.getElementById("h2-block");
  const h3 = document.getElementById("h3-block");

  const handleClick = html => {
    window
      .getSelection()
      .focusNode.parentElement.insertAdjacentHTML("afterend", html);

    overlay.classList.remove("open");
    moveCursortoNextElement();
  };

  h1.addEventListener("click", e => {
    handleClick(`<h1 data-placeholder='Heading 1'><br /></h1>`);
  });

  h2.addEventListener("click", e => {
    handleClick(`<h2 data-placeholder='Heading 2'><br /></h2>`);
  });

  h3.addEventListener("click", e => {
    handleClick(`<h3 data-placeholder='Heading 3'><br /></h3>`);
  });

  el.addEventListener("keydown", e => {
    if (e.key === "Enter" && overlay.classList.contains("open")) {
      let clicked = false;

      document.querySelectorAll(".block").forEach(block => {
        if (clicked || block.style.display === "none") return;
        else block.click();
        clicked = true;
      });
      e.preventDefault();
    }
  });
};
export default addBlock;
