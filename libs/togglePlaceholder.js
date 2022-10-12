const togglePlaceholder = el => {
  el.addEventListener("input", () => {
    for (let i = 0; i < el.children.length; i++) {
      if (el.children[i].innerText < 1)
        el.children[i].classList.remove("hide-placeholder");
      else el.children[i].classList.add("hide-placeholder");
    }
  });
};

export default togglePlaceholder;
