const toggleOverlay = el => {
  el.addEventListener("keydown", e => {
    const overlay = document.querySelector(".block-picker");

    if (e.key === "/") overlay.classList.add("open");
    if (e.key === "Escape") overlay.classList.remove("open");
  });
};
export default toggleOverlay;
