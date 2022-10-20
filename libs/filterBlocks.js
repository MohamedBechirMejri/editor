const filterBlocks = (el, filter) => {
  el.addEventListener("keydown", e => {
    const overlay = document.querySelector(".block-picker");
    const filterElement = document.getElementById("filter");

    if (overlay.classList.contains("open")) {
      if (e.key.length === 1) filter += e.key;
      if (e.key === "Backspace") filter = filter.slice(0, -1);
      if (!filter) overlay.classList.remove("open");

      const filterText = filter.slice(1, filter.length);
      filterElement.innerText = filterText || "None";

      const blocks = document.querySelectorAll(".block");

      blocks.forEach(block => {
        if (!block.innerText.toLowerCase().includes(filterText.toLowerCase()))
          block.style.display = "none";
        else block.style.display = "flex";
      });
    }
  });
};
export default filterBlocks;
