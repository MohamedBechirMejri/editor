const toggleOverlay = (showOverlay = false) => {
  const overlay = document.querySelector(".block-picker");
  showOverlay
    ? overlay.classList.add("open")
    : overlay.classList.remove("open");
};
export default toggleOverlay;
