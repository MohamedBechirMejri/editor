const moveCursortoNextElement = () => {
  window.getSelection()?.modify("move", "forward", "line");
};

export default moveCursortoNextElement;
