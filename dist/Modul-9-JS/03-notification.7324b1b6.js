// import "../css/common.css";
/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */ const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const refs = {
    notification: document.querySelector(".js-alert")
};
refs.notification.addEventListener("click", onNotificationClick);
refs.notification.addEventListener("mouseenter", onMouseEnter);
refs.notification.addEventListener("mouseleave", ()=>{
    setTimeout(()=>{
        console.log("Закрываем алерт автоматически чтобы не висел");
        hideNotification();
    }, 1500);
});
showNotification();
/*
 * Функции
 */ function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
}
function showNotification() {
    refs.notification.classList.add("is-visible");
    timeoutId = setTimeout(()=>{
        console.log("Закрываем алерт автоматически чтобы не висел");
        hideNotification();
    }, NOTIFICATION_DELAY);
}
function hideNotification() {
    refs.notification.classList.remove("is-visible");
}
function onMouseEnter() {
    clearTimeout(timeoutId);
}

//# sourceMappingURL=03-notification.7324b1b6.js.map
