import getCaretIndex from "./getCaretIndex";

const clearFilterFromText = (filter: string) => {
  const caret = window.getSelection();
  const caretIndex = getCaretIndex(caret!.focusNode!.parentElement);

  // @ts-ignore
  const { innerHTML } = caret.focusNode.parentElement;
  const newInnerHTML =
    innerHTML.substring(0, caretIndex - filter.length) +
    innerHTML.substring(caretIndex);

  caret!.focusNode!.parentElement!.innerHTML = newInnerHTML;
};

export default clearFilterFromText;
