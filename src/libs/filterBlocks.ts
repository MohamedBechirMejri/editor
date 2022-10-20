const filterBlocks = (blocks: NodeList, filter: string) => {
  const filterSpan = document.getElementById("filter");

  const filterText = filter.slice(1, filter.length);
  filterSpan!.innerText = filterText || "None";

  blocks.forEach((block: HTMLElement) => {
    if (!block.innerText.toLowerCase().includes(filterText.toLowerCase()))
      block.style.display = "none";
    else block.style.display = "flex";
  });
};
export default filterBlocks;
