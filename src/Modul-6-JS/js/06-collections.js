/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
const magicBtn = document.querySelector(".js-magic-btn");
const colorPickerContainerEl = document.querySelector(".js-color-picker");

// console.log(colorPickerContainerEl.contains("button"));

magicBtn.addEventListener("click", () => {
  if (colorPickerContainerEl.firstElementChild) {
    colorPickerContainerEl.innerHTML = "";
  } else {
    const makeColorPickerOptions = (options) => {
      return options.map((option) => {
        const buttonEl = document.createElement("button");
        buttonEl.type = "button";
        buttonEl.classList.add("color-picker__option");
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;

        return buttonEl;
      });
    };

    const elements = makeColorPickerOptions(colorPickerOptions);
    colorPickerContainerEl.append(...elements);
  }
});

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);

/*
 * Пишем функцию для создания разметки колорпикера
 */

// magic;
