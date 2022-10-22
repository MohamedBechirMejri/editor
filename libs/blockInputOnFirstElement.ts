const blockInputOnFirstElement = (e: any, children: any) => {
  // @ts-ignore
  if (children.length === 1 && children[0].innerText < 1) e.preventDefault();
};

export default blockInputOnFirstElement;
