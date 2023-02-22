const listCategoriesEl = document.querySelectorAll('li.item')
console.log(`Number of categories: ${listCategoriesEl.length}`);

const titleNames = document.querySelectorAll('.item')

titleNames.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);

    let listEl = element.lastElementChild;
    console.log(`Elements: ${listEl.childElementCount}`);
});