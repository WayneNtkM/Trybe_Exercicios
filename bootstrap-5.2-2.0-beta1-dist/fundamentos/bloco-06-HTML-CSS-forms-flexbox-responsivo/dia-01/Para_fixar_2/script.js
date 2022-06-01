// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventHrefDefault(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', preventHrefDefault);

function preventCheckDefault(event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', preventCheckDefault);

INPUT_TEXT.addEventListener('keypress', (event) => {
  if (event.key !== 'a' && event.key !== 'A') {
    event.preventDefault();
  }
});
