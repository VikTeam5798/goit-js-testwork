// import "../css/common.css";

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log("До вызова setTimeout");

// setTimeout(() => {
//   console.log("1 - Внутри callback для setTimeout");
// }, 2000);

// setTimeout(() => {
//   console.log("2 - Внутри callback для setTimeout");
// }, 1000);

// console.log("После вызова setTimeout");

// for (let index = 0; index < 10000; index++) {
//   console.log(index);
// }

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = (time) => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 1000, 1000);

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);

  setTimeout(
    (time) => {
      console.log(`Очистили setTimeout() через ${time}ms`);
    },
    1000,
    1000
  );
}
