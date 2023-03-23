function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxContainer: document.querySelector('#boxes')
}
const maxInputValue = Number(refs.input.max)
const minInputValue = Number(refs.input.min)

refs.input.addEventListener('input', () => {
  refs.createButton.addEventListener("click", onButtonCreateEvent)
})


function onButtonCreateEvent(value) {
  const arrayBoxes = [];

  value = refs.input.value;

  for (let i = 0; i < value; i += 1) {
    if (value <= maxInputValue && minInputValue <= value) {
      const boxDivEl = document.createElement('div');

      boxDivEl.style.width = `${30 + i * 10}px`;
      boxDivEl.style.height = `${30 + i * 10}px`;
      boxDivEl.style.margin = '5px';
      boxDivEl.style.backgroundColor = getRandomHexColor();

      arrayBoxes.push(boxDivEl)
    }
    
  }
  refs.boxContainer.append(...arrayBoxes);
}
refs.destroyButton.addEventListener('click', onButtonDestroyEvent)
function onButtonDestroyEvent() {
  refs.input.value = '';
  refs.boxContainer.innerHTML = '';
}