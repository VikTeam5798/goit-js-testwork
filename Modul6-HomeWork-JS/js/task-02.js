const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');

  const newListEl = ingredients.map((ingredient) => `<li class="list__item">${ingredient}</li>`).join('');

ingredientsListEl.insertAdjacentHTML("beforeend", newListEl);
