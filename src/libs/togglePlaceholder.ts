const togglePlaceholder = (textarea: any) => {
  const { children } = textarea;

  for (let i = 0; i < children.length; i++) {
    if (children[i].innerText < 1)
      children[i].classList.remove("hide-placeholder");
    else children[i].classList.add("hide-placeholder");
  }
};

export default togglePlaceholder;
