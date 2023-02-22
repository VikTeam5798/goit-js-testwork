let counterValue = 0;
const decrementBtnEl = document.querySelector(`button[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`button[data-action="increment"]`);
const numberValue = document.querySelector('#value');

function onButtonIncrementClick() {
    counterValue += 1;
    numberValue.textContent = counterValue;
}

function onButtonDecrementClick() {
    counterValue -= 1;
    numberValue.textContent = counterValue;
}
incrementBtnEl.addEventListener('click', onButtonIncrementClick)
decrementBtnEl.addEventListener('click', onButtonDecrementClick)