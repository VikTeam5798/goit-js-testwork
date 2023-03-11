/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers);

const letters = ["b", "B", "a", "A", "s", "S"];
// letters.sort();
// console.log("letters", letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log("Обратный порядок сортировки:", numbers);
/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const copy = [...numbers].sort().reverse();
// console.log("Копия:", copy);

const copyLet = [...letters].sort();
// console.log("Копия букв:", copyLet);

// const descSortedNumbers
// const ascSortedNumbers
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Кастомная сортировка сложных типов
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
  { id: "player-6", name: "Cristian", timePlayed: 125, online: false },
];

// По игровому времени
const sortedByBestPlayers = [...players].sort(
  (a, b) => a.timePlayed - b.timePlayed
);

// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
  (a, b) => b.timePlayed - a.timePlayed
);
// console.table(sortedByWorstPlayers);

const byName = [...players].sort((a, b) => {
  const result = b.name[0] > a.name[0];
  if (result) {
    return -1;
  }
  return 1;
});
// console.table(byName);
// console.log("abcdefght".charCodeAt());
