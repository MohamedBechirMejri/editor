const clickFirstBlock = (blocks: NodeList) => {
  let clicked = false;

  blocks.forEach((block: any) => {
    if (clicked || block.style.display === "none") return;
    else block.click();
    clicked = true;
  });
};

export default clickFirstBlock;
