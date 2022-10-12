const keepLastElement = el => {
  el.addEventListener("keydown", e => {
    if (e.key === "Backspace") {
      if (el.children.length === 1) {
        if (el.children[0].innerText < 1) {
          e.preventDefault();
        }
      }
    }
  });
};

export default keepLastElement;
