const magicBtn = document.querySelector(".js-magic-btn");
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

magicBtn.addEventListener("click", () => {
  linkEl.classList.add("site-nav__link--current");
});
const currentPageUrl = "/portfolio";

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);

console.log(linkEl.contains("site-nav__link"));
