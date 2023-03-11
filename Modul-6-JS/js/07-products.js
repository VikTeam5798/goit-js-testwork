import products from "./data/proucts.js";

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
}

/*
 * Пишем функцию для создания карточки продукта
 */

const productsContainerEl = document.querySelector(".js-products");

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement("article");

//   productEl.classList.add("product");
//   console.log(productEl);
//   const nameEl = document.createElement("h2");
//   nameEl.textContent = name;
//   nameEl.classList.add("product__name");

//   const descrEl = document.createElement("p");
//   descrEl.textContent = description;
//   descrEl.classList.add("product__descr");

//   const priceEl = document.createElement("p");
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add("product__price");

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);

/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

const makeProductCard2 = ({ name, description, price }) => {
  const productRef = document.createElement("article");
  productRef.classList.add("product");

  const nameRef = document.createElement("h1");
  nameRef.classList.add("product__name");
  nameRef.textContent = name;

  const descrRef = document.createElement("p");
  descrRef.classList.add("product__descr");
  descrRef.textContent = description;

  const priceRef = document.createElement("p");
  priceRef.classList.add("product__price");
  priceRef.textContent = `Цена: ${price} кредитов`;

  productRef.append(nameRef, descrRef, priceRef);

  return productRef;
};
const elements = products.map(makeProductCard2);

console.log(elements);
productsContainerEl.append(...elements);
