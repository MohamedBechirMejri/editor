const clickFirstBlock = (blocks: NodeList) => {
  let clicked = false;

  blocks.forEach((block: HTMLElement) => {
    if (clicked || block.style.display === "none") return;
    else block.click();
    clicked = true;
  });
};

export default clickFirstBlock;
