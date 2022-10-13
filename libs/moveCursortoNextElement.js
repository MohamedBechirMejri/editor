const moveCursortoNextElement = () => {
  if (!window.getSelection()) return;
  // @ts-ignore
  const caretElementLength = window.getSelection().focusNode.innerHTML.length;
  for (let i = 0; i < caretElementLength + 1; i++) {
    // @ts-ignore
    window.getSelection()?.modify("move", "forward", "character");
  }
};

export default moveCursortoNextElement;
