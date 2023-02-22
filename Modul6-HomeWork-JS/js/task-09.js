function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body')
}
console.log(refs.body);
refs.button.addEventListener('click', onButtonEvent)

function onButtonEvent() {
  const color = getRandomHexColor();
  refs.span.textContent = color;
  refs.body.style.backgroundColor = color;
}