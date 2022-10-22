const getCaretCoords = () => {
  const sel = document.getSelection();
  const r = sel.getRangeAt(0);
  let rect;
  let r2;
  // supposed to be textNode in most cases
  // but div[contenteditable] when empty
  const node = r.startContainer;
  const offset = r.startOffset;
  if (offset > 0) {
    // new range, don't influence DOM state
    r2 = document.createRange();
    r2.setStart(node, offset - 1);
    r2.setEnd(node, offset);
    // https://developer.mozilla.org/en-US/docs/Web/API/range.getBoundingClientRect
    // IE9, Safari?(but look good in Safari 8)
    rect = r2.getBoundingClientRect();
    return { x: rect.right, y: rect.top };
  }
  if (offset < node.length) {
    r2 = document.createRange();
    // similar but select next on letter
    r2.setStart(node, offset);
    r2.setEnd(node, offset + 1);
    rect = r2.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  }
  // textNode has length
  // https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect
  rect = node.getBoundingClientRect();
  const styles = getComputedStyle(node);
  const lineHeight = parseInt(styles.lineHeight);
  const fontSize = parseInt(styles.fontSize);
  // roughly half the whitespace... but not exactly
  const delta = (lineHeight - fontSize) / 2;
  return { x: rect.left, y: rect.top + delta };
};

export default getCaretCoords;

// Source: https://gist.github.com/nothingismagick/642861242050c1d5f3f1cfa7bcd2b3fd
