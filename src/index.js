import keepLastElement from "../libs/keepLastElement";
import togglePlaceholder from "../libs/togglePlaceholder";

const textarea = document.querySelector(".textarea");

textarea.addEventListener('input', e => {
    document.querySelector('.block-picker').classList.toggle('open')
})

keepLastElement(textarea);
togglePlaceholder(textarea);
