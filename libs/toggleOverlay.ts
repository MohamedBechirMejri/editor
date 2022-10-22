const toggleOverlay = (toggle: "open" | "close") => {
  const overlay = document.querySelector(".block-picker");

  if (toggle === "open") overlay!.classList.add("open");
  else overlay!.classList.remove("open");
};
export default toggleOverlay;
