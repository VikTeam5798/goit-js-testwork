const nameFromInput = document.querySelector('#name-output')
console.log(nameFromInput);
const inputEl = document.querySelector('#name-input')

inputEl.addEventListener('input', onInputChange)
function onInputChange(event) {
   nameFromInput.textContent = event.currentTarget.value
   if (inputEl.value.length === 0) {
      nameFromInput.textContent = 'Anonymous'
   }
}