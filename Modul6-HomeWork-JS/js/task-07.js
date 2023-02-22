const inputSizeEl = document.querySelector('#font-size-control')
const textFontSize = document.querySelector('#text')

inputSizeEl.addEventListener('input', event => {
    textFontSize.style.fontSize = `${event.currentTarget.value}px`
})