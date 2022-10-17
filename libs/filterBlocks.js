const filterBlocks = (el, filter) => {
  el.addEventListener("keydown", e => {
    const overlay = document.querySelector(".block-picker");

    if (overlay.classList.contains("open")) {
      if (e.key.length === 1) filter += e.key;
      if (e.key === "Backspace") filter = filter.slice(0, -1);
      if (!filter) overlay.classList.remove("open");
    }
  });
};
export default filterBlocks;
